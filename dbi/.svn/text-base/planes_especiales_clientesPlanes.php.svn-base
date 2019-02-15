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
	$dmls = array('dmlPlanes' => "", 'dmlOperPlanes' => "");
	$dmlidPlanes = '12729';
	$dmlidOperPlanes = '12730';
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
			$dml_query = $dml_query . 'where DML_ID in (' . $dmlidPlanes . ',' . $dmlidOperPlanes . ') and TIPO = \'Q\' and DML_ID in ('. $seguridad_query . ') order by DML_ID';

			$stmt = $con->ejecutarQuery($dml_query);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {  		
			
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlPlanes'] = $result['TEXTOC'];
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlOperPlanes'] = $result['TEXTOC'];
				
				$con->liberarHandlerQuery($stmt);
				
				if (($dmls['dmlPlanes'] == "")||($dmls['dmlOperPlanes'] == "")) {
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
							if ($nombre_campo == 'plan_especial_id') {
								$dmls['dmlPlanes'] = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dmls['dmlPlanes']);
							} else {
								$dmls[$name] = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dmls[$name]);
							}
    					} 
    					foreach($_GET as $nombre_campo => $valor){ 
							if ($nombre_campo == 'plan_especial_id') {
								$dmls['dmlPlanes'] = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dmls['dmlPlanes']);
							} else {
								$dmls[$name] = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dmls[$name]);
							}
    					}
					}
                    
					$stmt = $con->ejecutarQuery($dmls['dmlPlanes']);
					$errors = $con->getErrors();
					if ( $errors['errcode'] == "" ) {
						//entrega de campos id & label
						$varSalida = "identifier:\"plan_especial_id\",";
						$varSalida = $varSalida . "label:\"plan_especial_id\",";
						//iniciar entrega de lista de items:
						$varSalida = $varSalida .  'items:[';
						//loop para entregar todos los items:
						$booPrimero = true;
						while ($result = $con->getArrayResultadoQuery($stmt)) {
							if ($booPrimero) {
								$booPrimero = false;
							} else {
								$varSalida = $varSalida . ',';
                            }
                            $opers = "";
                            
                            $dmlOperPlanes = str_replace("#plan_especial_id#", $result['PLAN_ESPECIAL_ID'], $dmls['dmlOperPlanes']);
							
                            $stmt2 = $con->ejecutarQuery($dmlOperPlanes);
							$errors = $con->getErrors();
							if ( $errors['errcode'] == "" ){
                                $booPrimero2 = true;
                                while ($result2 = $con->getArrayResultadoQuery($stmt2)) {
								   if($booPrimero2){
								       $booPrimero2 = false;
								   } else {
								       $opers = $opers . ',';
								   }
                                   $opers = $opers . $result2['DESCRIPCION'];
                                }
                                $con->liberarHandlerQuery($stmt2);
							}
				
                            $varSalida = $varSalida . '{"plan_especial_id":"'. $result['PLAN_ESPECIAL_ID'] . '","descripcion":"' . $result['DESCRIPCION'] . '","vigencia":"' . $result['VIGENCIA_HASTA'] . '","estado":"' . $result['ESTADO'] . '","division":"' . $result['DIVISION_ABREV'] . '","tipo_plan":"' . $result['DESCRIPCION_TIPO'] .  '","tipo_operacion":"' . $opers .  '","adjunto":"' . $result['ADJUNTO'] . '"}';
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
	
	if ($varSalida == "")	
		echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", sid:"' . $sid . '"}');
    else
		echo utf8_encode('{' . $varSalida . '}');
	
?>