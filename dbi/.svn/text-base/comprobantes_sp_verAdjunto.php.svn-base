<?php

   /************************************************* 
    PROCEDURE verAdjunto
    Obtiene el adjunto de un comprobante SP
		comprobante_sp_id:	Identificador del comprobante

	19/05/2010	Esteban Lopez	Creacion version inicial
    *************************************************/

	// Kill the internal messages:
    error_reporting(0); 

	ob_start();
	
	//Queries a ejecutar
	$seguridad_query = "";
	$dml_query = "";
	$dml = "";
	//Control de errores
	$errors = array('errcode' => "", 'errmsg' => "", 'srvmsg' => "", 'debugmsg' => "");
	//Info de sesion
	$sid = $_POST['sid'] . $_GET['sid'];
	$infoSesion = null;
	//Queries
	$dmls = array('dmlBuscarAdjunto' => "");
	$dmlidBuscarAdjunto = '12525';
	$cbteId = $_POST['comprobante_sp_id'] . $_GET['comprobante_sp_id'];
	//Interfaz PHP-DBI
	$result = null;
	$con = null;
	$stmt = null;
	
    //abrir conexión
	require 'DBconfig.php'; // Carga la variable $db con el string de conexión a la DB. 
	require 'DBI_Util.php'; 
	
	$con = getConexionDBI2($dbInfo[substr($sid,0,2)]);
	$errors = $con->getErrors();
	if ( $errors['errcode'] == "" ) {
		$infoSesion = $con->verificarSesion($sid);
		if (is_null($infoSesion['usuarioId'])) {      //si usuario es nulo es que la sesión no existe
			$errors['errcode'] = "DBI-1";
			$errors['errmsg'] = "La sesion ya no está activa.";
			$errors['srvmsg'] = "";
			$errors['debugmsg'] = "";
		} else {
			
			//con el parametro dmlid buscar el dml a ejecutar:
			$seguridad_query = 'select da.DML_ID from CMN_DML_ACCIONES da, CMN_ACCESOS ac, CMN_RESPONSABILIDADES r ';
			$seguridad_query = $seguridad_query . 'where r.PERFIL_ID = ac.PERFIL_ID and ac.ACCION_ID = da.ACCION_ID and r.RESPONSABILIDAD_ID = ' . $infoSesion['respId'];
			
			$dml_query = 'select TEXTO as TEXTOC from CMN_DBI_DMLS ';
			$dml_query = $dml_query . 'where DML_ID in (' . $dmlidBuscarAdjunto . ') and TIPO = \'Q\' and DML_ID in ('. $seguridad_query . ') order by DML_ID';

			$stmt = $con->ejecutarQuery($dml_query);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {  		
			
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlBuscarAdjunto'] = $result['TEXTOC'];
				
				$con->liberarHandlerQuery($stmt);
				
				if ($dmls['dmlBuscarAdjunto'] == "") {
					$errors['errcode'] = "DBI-2";
					$errors['errmsg'] = "No se encontró el dml (no existe o la sesión no tiene permisos)";
					$errors['srvmsg'] = "";
					$errors['debugmsg'] = "";
				} else {
					
					foreach($dmls as $name => $dml){
						$dmls[$name] = str_replace("\n", "", $dmls[$name]);
						$dmls[$name] = str_replace("\r", "", $dmls[$name]);
						$dmls[$name] = str_replace("#resp_id#", $infoSesion['respId'], $dmls[$name]);
						$dmls[$name] = str_replace("#esquema#", $infoSesion['esquema'], $dmls[$name]);
						$dmls[$name] = str_replace("#sociedad_id#", $infoSesion['sociedad_id'], $dmls[$name]);
						$dmls[$name] = str_replace("#usraudit#", $infoSesion['usuarioId'], $dmls[$name]);
                        
                        foreach($_POST as $nombre_campo => $valor){ 
    						$dmls[$name] = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dmls[$name]);
    					} 
    					foreach($_GET as $nombre_campo => $valor){ 
    						$dmls[$name] = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dmls[$name]);
    					}
					}
                    
					$stmt = $con->ejecutarQuery($dmls['dmlBuscarAdjunto']);
					$errors = $con->getErrors();
					if ( $errors['errcode'] == "" ) {
						$result = $con->getArrayResultadoQuery($stmt);
						if (($result['NOMBRE'] == '') || ($result['NOMBRE'] == ' ')) {
							$errors['errcode'] = "DB-1";
							$errors['errmsg'] = "No se pudo obtener el adjunto del comprobante";
							$errors['debugmsg'] = "DB"; 						
						} else {
							$size = $result['TAMA'];
							$tipo = $result['TIPO'];
							$nombre = rawurlencode($result['NOMBRE']);
							//$con->liberarHandlerQuery($stmt);
						}
					}
				}
			}
		}
	}
	//unset($con);
	
	ob_end_clean();
	
	if ($errors['errcode'] != "") {
		echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '"}');
	} else {
		$startUrl = substr($nombre,0,5);
		if($startUrl == 'https'){
			header("Location:".rawurldecode($nombre));
		} else {
			if($cbteId > 163494){
				header("Content-type: $tipo");
				header("Content-length: $size");
				header("Content-Disposition: attachment; filename=$nombre");
				header("Content-Description: PHP Generated Data");
				echo stripslashes($result['CONTENIDO']->load());
			} else {
				ob_start();
					//header("Content-type: $tipo");
					//header("Content-length: $size");
					header("Content-type: application/x-download-file");
					header("Content-Disposition: inline; filename=$nombre");
					print $result['CONTENIDO']->load();
				ob_end_flush();
			}
		}
	}
?>
