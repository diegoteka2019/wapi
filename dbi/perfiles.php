<?php

    /************************************************* 
    PROCEDURE perfiles
    Realiza el cambio de perfil, sale de la sesion o entrega el listado de perfiles para un usuario
	parametros (pueden pasarse por POST o por GET!):
		sid:	Identificador de la sesión del usuario
		cod:	Accion a realizar
				"LPU" - Entrega el listado de perfiles para el usuario de la sesion en formato JSON
				"MPU" - Cambia el perfil del usuario en la sesion (debe enviarse el nuevo perfil)
				"BSU" - Da de baja la sesion en la BD
		(todos los parametros que se le pasan al query como bind variables): se reemplazan en los tag #(nombre)# del query.
		
	Ejemplo de invocación: "http://localhost/testdojo/dbi/perfiles.php?sid=99887766&cod=MPU&perfil=1"
	
	20/7/2009	Esteban Lopez		Creacion version inicial
	04/8/2009	Esteban Lopez		Definicion de los dml directamente en el archivo PHP
	18/8/2009	Esteban Lopez		Agregada interfaz ConexionDBI
	4/11/2009	Guillermo Castarés	Adaptación a Oracle de los DMLs
	
    *************************************************/

	// Kill the internal messages:
	error_reporting(0); 

	//Queries a ejecutar
	$queryListaPerfiles = 'select \'{RESPONSABILIDAD_ID:\' || to_char(r.RESPONSABILIDAD_ID) || \',PERFIL_ID:"\'
						  || to_char(p.PERFIL_ID) || \'",NOMBRE:"\' || p.NOMBRE || \' - \' || to_char(r.ESQUEMA) || \'"}\' as REC from 
						  CMN_RESPONSABILIDADES r, CMN_PERFILES p where r.PERFIL_ID = p.PERFIL_ID and 
						  r.USUARIO_ID = \'#usuario_id#\' order by p.PERFIL_ID';
	$queryDatosResp = 'select RESPONSABILIDAD_ID, ESQUEMA, SOCIEDAD_ID
					  from CMN_RESPONSABILIDADES where RESPONSABILIDAD_ID = \'#responsabilidad_id#\'';
	$queryCambioResp = 'update CMN_SESIONES set RESPONSABILIDAD_ID = #resp_id#, ESQUEMA = \'#esquema#\', SOCIEDAD_ID = \'#sociedad_id#\'
						where SID = \'#sid#\'';
	$queryBajaSesion = 'delete from CMN_SESIONES where SID = \'#sid#\'';
	$dml = "";
	$codigo = $_POST['cod'] . $_GET['cod'];
	//Control de errores
	$errors = array('errcode' => "", 'errmsg' => "", 'srvmsg' => "", 'debugmsg' => "");
	//Info de sesion
	$sid = $_POST['sid'] . $_GET['sid'];
	$infoSesion = null;
	//Interfaz PHP-SQLServer
	$con = null;
	$stmt = null;
	$result = null;
	//Salida
	$varSalida = "";

	//abrir conexión:
	require 'DBconfig.php'; // Carga las variables $dbXXX con datos de conexion a la BD 
	require 'DBI_Util.php'; 

	$con = getConexionDBI2($dbInfo[substr($sid,0,2)]);
	$errors = $con->getErrors();
	if ( $errors['errcode'] == "" ) {	//conexión a la DB ok.	
		
		//acá verificar que la sesión está viva $_POST['sid'] y $_GET['sid'], si si refrescarla
		$infoSesion = $con->verificarSesion($sid);
		if (is_null($infoSesion['usuarioId'])) { 					//si usuario es nulo es que la sesión no existe
			$errors['errcode'] = "DBI-1";
			$errors['errmsg'] = "La sesion ya no está activa.";
			$errors['srvmsg'] = "";
			$errors['debugmsg'] = "";
		} else {									//si volvió usuario es que la sesión está viva
				
			switch ($codigo){
				case "LPU": $dml = $queryListaPerfiles;
							break;
				case "MPU": $dml = $queryDatosResp;
							break;
				case "BSU": $dml = $queryBajaSesion;
							//borrarServerSeleccionado($sid);
							break;
			}

			$dml = str_replace("\n", "", $dml);
			$dml = str_replace("\r", "", $dml);
			
			// acá recorrer todos los elementos del $_POST e ir reemplazando los tags del query por los valores recibidos.
			foreach($_POST as $nombre_campo => $valor){ 
				$dml = str_replace("#" . $nombre_campo . "#", $valor, $dml);
			} 

			// acá recorrer todos los elementos del $_GET e ir reemplazando los tags del query por los valores recibidos. 
			foreach($_GET as $nombre_campo => $valor){ 
				$dml = str_replace("#" . $nombre_campo . "#", $valor, $dml);
			} 
			
			//acá reemplazar el tag #usuario_id# con el usuario obtenido de la sesión
			$dml = str_replace("#usuario_id#", $infoSesion['usuarioId'], $dml);
				
			$stmt = $con->ejecutarQuery($dml);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {  			//parse ok.
				
				if ($codigo == "LPU"){
								
					//entrega de campos id & label
					$varSalida = "identifier:\"RESPONSABILIDAD_ID\",";
					$varSalida = $varSalida . "label:\"NOMBRE\",";
					//iniciar entrega de lista de items:
					$varSalida = $varSalida .  'items:[';

					//loop para entregar todos los items:
					$booPrimero = true;
					while ($result = $con->getArrayResultadoQuery($stmt)) {
						if ($booPrimero) 
							$booPrimero = false;
						else
							$varSalida = $varSalida . ',';

						$varSalida = $varSalida . $result['REC'];
					}
				
					//entrega cierre de lista de items:
					$varSalida = $varSalida . ']';
					
				} else if ($codigo == "MPU"){
								
					$result = $con->getArrayResultadoQuery($stmt);
					$resp_id = $result['RESPONSABILIDAD_ID'];
					$esquema = $result['ESQUEMA'];
					$sociedad_id = $result['SOCIEDAD_ID'];
					
					$dml = $queryCambioResp;
					$dml = str_replace("#resp_id#", $resp_id, $dml);
					$dml = str_replace("#esquema#", $esquema, $dml);
					$dml = str_replace("#sociedad_id#", $sociedad_id, $dml);
					$dml = str_replace("#sid#", $sid, $dml);
					
					$stmt = $con->ejecutarQuery($dml);
					$errors = $con->getErrors();

				}
				
				$con->liberarHandlerQuery($stmt);
				
			}
		}

	}
	unset($con);
	
	//Devuelve json con codigo de error al formulario
	if ($varSalida == "")
		echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", sid:"' . $sid . '"}');
	else
		echo utf8_encode('{' . $varSalida . '}');
	
?>


