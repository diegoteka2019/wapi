<?php

    /************************************************* 
    PROCEDURE dbi/e_proc_t.php (Execute)
    Ejecuta un procedure de la BD que utilize un numero de ticket para loguear los resultados
	parametros (pueden pasarse por POST o por GET!):
		sid:	Identificador de la sesión del usuario
		dmlid:	Identificador del dml que quiere ejecutar
		(todos los parametros que se le pasan al dml como bind variables): se reemplazan en los tag #(nombre)# del dml.
	
	Ejemplo de invocación: "http://localhost/testdojo/dbi/e_proc_m.php?sid=91827364&dmlid=1&codigo=ZZZ&nombre=borrar&coordenadas=1s 1w&Region=12"
	donde dmlid=1 se corresponde al texto: "insert into X_CIUDADES (COD_CIUDAD, CIUDAD_DESC, CIUDAD_DESC2, LAT_LONG, REGION_ID) values ('#codigo#', '#nombre#', '#nombre#', '#coordenadas#', #Region#)"

    IMPORTANTE: Falta escapar comillas dobles de los strings devueltos!!!

	08/02/2010	Esteban Lopez		Creacion Version Inicial
    *************************************************/

	// Kill the internal messages:
	error_reporting(0);
	
	//Queries a ejecutar
	$seguridad_query = "";
	$dml_query = "";
	$dml = "";
	//Control de errores
	$errors = array('errcode' => "", 'errmsg' => "", 'srvmsg' => "", 'debugmsg' => "");
	//Info de sesion
	$sid = $_POST['sid'] . $_GET['sid'];
	$infoSesion = null;
	//Interfaz PHP-DBI
	$result = null;
	$con = null;
	$stmt = null;
	//Salida
	$varSalida = '';
	$ticket = null;
	
	//abrir conexión:
	require 'DBconfig.php'; // Carga la variable $db con el string de conexión a la DB. 
	require 'DBI_Util.php'; 
	
	$con = getConexionDBI2($dbInfo[substr($sid,0,2)]);
	$errors = $con->getErrors();
	if ( $errors['errcode'] == "" ) {
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
			$dml_query = 'select TEXTO as TEXTOC from CMN_DBI_DMLS ';
			$dml_query = $dml_query . 'where DML_ID = ' . $_POST['dmlid'] . $_GET['dmlid'] . ' and TIPO = \'E\' and DML_ID in ('. $seguridad_query . ')';
			
			$stmt = $con->ejecutarQuery($dml_query);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {  		
			
				$result = $con->getArrayResultadoQuery($stmt);
				$dml = $result['TEXTOC'];
				
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
					
					//acá reemplazar el tag #resp_id# con la responsabilidad de esa sesión
					$dml = str_replace("#resp_id#", $infoSesion['respId'], $dml);
					$dml = str_replace("#esquema#", $infoSesion['esquema'], $dml);
					$dml = str_replace("#sociedad_id#", $infoSesion['sociedad_id'], $dml);
					$dml = str_replace("#usraudit#", $infoSesion['usuarioId'], $dml);
					$dml = str_replace("#modulo_id#", "1", $dml);
					
					$ticket = $con->ejecutarProcedureLogueado($dml);
					$errors = $con->getErrors();
					if($ticket != false){
						$varSalida = 'ticket_id:"'.$ticket.'"';
					}
				}
			}
		}
	}
	unset($con);

	if ($varSalida == "")
		echo utf8_encode('{errcode:"' . $errors['errcode'] . '", dml:"' . $dml . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '"}');
	else
		echo utf8_encode('{' . $varSalida . '}');

?>
