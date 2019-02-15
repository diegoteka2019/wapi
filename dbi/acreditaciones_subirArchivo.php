<?php
	
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
 	$result2 = null;
	$con = null;
	$stmt = null;
	$stmt2 = null;
	//Queries
	$dmls = array('dmlAdjuntarArchivo' => "");
	$dmlidAdjuntarArchivo = '11810';
	//Salida
	$varSalida = "";

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
		} else {                                      //si volvió usuario es que la sesión está viva

			//con el parametro dmlid buscar el dml a ejecutar:
			$seguridad_query = 'select da.DML_ID from CMN_DML_ACCIONES da, CMN_ACCESOS ac, CMN_RESPONSABILIDADES r ';
			$seguridad_query = $seguridad_query . 'where r.PERFIL_ID = ac.PERFIL_ID and ac.ACCION_ID = da.ACCION_ID and r.RESPONSABILIDAD_ID = ' . $infoSesion['respId'];
			
			$dml_query = 'select TEXTO as TEXTOC from CMN_DBI_DMLS ';
			$dml_query = $dml_query . 'where DML_ID in (' . $dmlidAdjuntarArchivo . ') and TIPO = \'E\' and DML_ID in ('. $seguridad_query . ') order by DML_ID';

			$stmt = $con->ejecutarQuery($dml_query);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {  		
			
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlAdjuntarArchivo'] = $result['TEXTOC'];
				
				$con->liberarHandlerQuery($stmt);
				
				if ($dmls['dmlAdjuntarArchivo'] == "") {
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
              
            		$fileName = $_FILES['userfile']['name'];
            		$tmpName  = $_FILES['userfile']['tmp_name'];
            		$fileSize = $_FILES['userfile']['size'];
            		$fileType = $_FILES['userfile']['type'];

					if (strlen($fileName) > 50) {
						$errors['errcode'] = "DBI-2";
						$errors['errmsg'] = "El nombre del archivo debe ser menor a 50 caracteres";
						$errors['srvmsg'] = "";
						$errors['debugmsg'] = "";
					} else {
					
						$fp      = fopen($tmpName, 'r');
						$content = fread($fp,filesize($tmpName));
						$content = addslashes($content);
						fclose($fp);

						if(!get_magic_quotes_gpc()) {
							$fileName = addslashes($fileName);
						}

						$dmls['dmlAdjuntarArchivo'] = str_replace("#nombre#", $fileName, $dmls['dmlAdjuntarArchivo']);
						$dmls['dmlAdjuntarArchivo'] = str_replace("#tipo#", $fileType, $dmls['dmlAdjuntarArchivo']);
						$dmls['dmlAdjuntarArchivo'] = str_replace("#peso#", $fileSize, $dmls['dmlAdjuntarArchivo']);

						$archivo = $con->subirArchivo($dmls['dmlAdjuntarArchivo'], $content); 
						$errors = $con->getErrors();
						if(($archivo != false)&&($errors['errcode'] == "")){
							$varSalida = 'archivo_id:"'.$archivo.'"';
						}
					}
				}
			}
		}
	}
	unset($con);
	
	if ($varSalida == "")
		echo utf8_encode('<textarea>{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '"}</textarea>');
	else
		echo utf8_encode('<textarea>{' . $varSalida . '}</textarea>');
?>