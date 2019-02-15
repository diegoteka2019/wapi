<?php

    /************************************************* 
    PROCEDURE q (Query)
    Devuelve en formato JSON el resultado de un query especificado por parametro
	IMPORTANTE: EL query debe devolver un único campo llamado "REC" en formato objeto json! 
	parametros (pueden pasarse por POST o por GET!):
		sid:	Identificador de la sesión del usuario
		dmlid:	Identificador del dml (query) que quiere ejecutar
		(todos los parametros que se le pasan al query como bind variables): se reemplazan en los tag #(nombre)# del query.
	
	Ejemplo de invocación: "http://localhost/testdojo/dbi/q.php?sid=99887766&dmlid=2&max=180&status=OK"
	donde dmlid=2 se corresponde al texto: "select '{NEGOCIACION_ID:'+convert(varchar,NEGOCIACION_ID)+',AREA:"'+AREA+'",SUB_REGION:"'+SUB_REGION+'",CLIENTE:"'+CLIENTE+'",VIGENCIA_DESDE:"'+convert(varchar,VIGENCIA_DESDE,3)+'",VIGENCIA_HASTA:"'+convert(varchar,VIGENCIA_HASTA,3)+'",ESTADO:"'+ESTADO+'",USUARIO:"'+USUARIO+'"}' as REC
										  	  from negociaciones
											 where negociacion_id<#max# and estado='#status#'
										  order by NEGOCIACION_ID"

    IMPORTANTE: Falta escapar comillas dobles de los strings devueltos!!!
	
    04/2/2009   Guillermo Castarés  Creación versión inicial en PL/SQL
	01/3/2009   Guillermo Castarés  Recodificación a PHP
	27/3/2009   Guillermo Castarés  Cirugía mayor, cambiaron totalmente los parametros y la filosofía.
	17/6/2009   Guillermo Castarés  Ahora verifica que la sesión sea válida
	01/7/2009	Esteban Lopez		Migracion a SQLServer
	13/8/2009	Esteban Lopez		Agregada interfaz ConexionDBI
    *************************************************/

	// Kill the internal messages:
	error_reporting(0); 

	//Queries a ejecutar
	$seguridad_query = "";
	$dml_query = "";
	$dml = "";
	$maxReg = $_GET['cantRegs'] . $_POST['cantRegs'];
	//Control de errores
	$errors = array('errcode' => "", 'errmsg' => "", 'srvmsg' => "", 'debugmsg' => "");
	//Info de sesion
	$sid = $_POST['sid'] . $_GET['sid'];
	$infoSesion = null;
	//Interfaz PHP-DBI
	$con = null;
	$stmt = null;
	$result = null;
	//Salida
	$varSalida = "";
	$json_id = "";
	$json_label = "";

	//ejecutar dml y devolver resultado en formato json.	
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
			//con el parametro dmlid buscar el dml a ejecutar:
			$seguridad_query = 'select da.DML_ID from CMN_DML_ACCIONES da, CMN_ACCESOS ac, CMN_RESPONSABILIDADES r ';
			$seguridad_query = $seguridad_query . 'where r.PERFIL_ID = ac.PERFIL_ID and ac.ACCION_ID = da.ACCION_ID and r.RESPONSABILIDAD_ID = ' . $infoSesion['respId'];
			$dml_query = 'select TEXTO as TEXTOC, JSON_ID, JSON_LABEL from CMN_DBI_DMLS ';
			$dml_query = $dml_query . 'where DML_ID = ' . $_POST['dmlid'] . $_GET['dmlid'] . ' and TIPO = \'Q\' and DML_ID in ('. $seguridad_query . ')';

			$stmt = $con->ejecutarQuery($dml_query);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {  	
				//parse ok.
				$result = $con->getArrayResultadoQuery($stmt);
				$dml = $result['TEXTOC'];
				$json_id = $result['JSON_ID'];
				$json_label = $result['JSON_LABEL'];
				
				$con->liberarHandlerQuery($stmt);

				if ($dml == "") {
					$errors['errcode'] = "DBI-2";
					$errors['errmsg'] = "No se encontró el dml solicitado (no existe o la sesión no tiene permisos)";
					$errors['srvmsg'] = "";
					$errors['debugmsg'] = "";
				} else {

					$dml = str_replace("\n", "", $dml);
					$dml = str_replace("\r", "", $dml);
					
					// acá recorrer todos los elementos del $_POST e ir reemplazando los tags del query por los valores recibidos.
					foreach($_POST as $nombre_campo => $valor){ 
						$dml = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dml);
					} 

					// acá recorrer todos los elementos del $_GET e ir reemplazando los tags del query por los valores recibidos. 
					foreach($_GET as $nombre_campo => $valor){ 
						$dml = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dml);
					}
					
					$dml = $con->limitarRegsDevueltos($dml,$maxReg);
					
					//acá reemplazar el tag #resp_id# con la responsabilidad de esa sesión
					$dml = str_replace("#RESP_ID#", $infoSesion['respId'], $dml);
					$dml = str_replace("#resp_id#", $infoSesion['respId'], $dml);
					$dml = str_replace("#esquema#", $infoSesion['esquema'], $dml);
					$dml = str_replace("#sociedad_id#", $infoSesion['sociedad_id'], $dml);
					$dml = str_replace("#usraudit#", $infoSesion['usuarioId'], $dml);

					$stmt = $con->ejecutarQuery($dml);
					$errors = $con->getErrors();
					if ( $errors['errcode'] == "" ) {  					//parse ok.

						//entrega de campos id & label
						$varSalida = "identifier:\"" . $json_id . "\",";
						$varSalida = $varSalida . "label:\"" . $json_label . "\",";
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
						
						$con->liberarHandlerQuery($stmt);
					}
				}
			}
		}
	}
	unset($con);
	
	//Devuelve json con codigo de error al formulario
	if ($varSalida == "")
		echo utf8_encode('{identifier:"errcode",label:"errcode",items:[{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '"}]}');
	else
		echo utf8_encode('{' . $varSalida . '}');
	
?>


