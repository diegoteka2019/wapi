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
	$dmls = array('dmlGrabar' => "", 'dmlArea' => "");
	$dmlidGrabar = '13202';
	$dmlidArea = '11413';
	//Salida
	$varSalida = "";
	//Notificacion
	$mails = $_POST['mails'] . $_GET['mails'];

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
			$dml_query = $dml_query . 'where DML_ID in (' . $dmlidGrabar . ',' . $dmlidArea . ') and TIPO IN (\'Q\',\'E\') and DML_ID in ('. $seguridad_query . ') order by DML_ID';

			$stmt = $con->ejecutarQuery($dml_query);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {  		
			
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlArea'] = $result['TEXTOC'];
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlGrabar'] = $result['TEXTOC'];
				
				
				$con->liberarHandlerQuery($stmt);
				
				if (($dmls['dmlGrabar'] == "")||($dmls['dmlArea'] == "")) {
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
                    
					$stmt = $con->ejecutarProcedure($dmls['dmlGrabar']);
					$errors = $con->getErrors();
					if ( $errors['errcode'] == "" ) {
						if(is_numeric($errors['errmsg'])){
							$dmls['dmlArea'] = str_replace("#presupuesto_id#", $errors['errmsg'], $dmls['dmlArea']);
                            $stmt2 = $con->ejecutarQuery($dmls['dmlArea']);
							$errors = $con->getErrors();
							if ( $errors['errcode'] == "" ){
                                $booPrimero2 = true;
								$subjectArg = 'Notificacion-WAPI';
								$result2 = $con->getArrayResultadoQuery($stmt2);
                                $bodyArg = 'Se realizó la apertura del presupuesto del área ' . $result2['AREA_ABREV'];
								
								$p_del = ',';
								$l_list  = $mails;
								$ultimo = false;
								while ($ultimo == false) {
									$l_idx = strpos($l_list,$p_del);
									if ($l_idx !== false) { 
										$mailArg = substr($l_list, 0 , $l_idx);
										$cmdMail =  "/bin/echo '$bodyArg' | /bin/mail -s '$subjectArg' '$mailArg'";
										$retMail = "";
										$tmp = exec($cmdMail, $retMail);
										if ($tmp != ""){
											$errors['errcode'] = "";
											$errors['errmsg'] = "Presupuesto guardado. Error al enviar mail de notificacion";
										}
										$l_list = substr($l_list, $l_idx + strlen($p_del));
									} else {
										if ($l_list != "") {
											$mailArg = $l_list;
											$cmdMail =  "/bin/echo '$bodyArg' | /bin/mail -s '$subjectArg' '$mailArg'";
											$retMail = "";
											$tmp = exec($cmdMail, $retMail);
											if ($tmp != ""){
												$errors['errcode'] = "";
												$errors['errmsg'] = "Presupuesto guardado. Error al enviar mail de notificacion";
											}
										}
										$ultimo = true;
									}
								}

                                $con->liberarHandlerQuery($stmt2);
							} else {
								$errors['errcode'] = "";
								$errors['errmsg'] = "Presupuesto guardado. Error al obtener el area para notificacion";
							}
						}
						//$con->liberarHandlerQuery($stmt);
					}
				}
			}
		}
	}
	unset($con);

	//Devuelve json con codigo de error al formulario
	echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . trim($errors['srvmsg']) . '", debugmsg:"' . $errors['debugmsg'] . '", sid:"' . $sid . '", dml:"' . $dmls['dmlGrabar'] . '"}');

	
?>