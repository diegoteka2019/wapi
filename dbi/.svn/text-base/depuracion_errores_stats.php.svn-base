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
	$con = null;
	$stmt = null;
	//Queries
	$dmls = array('dmlErrores' => "");
	$dmlidErrores = '';
	//Parametros
	$tipo_comprobante = $_POST['id_proceso'] . $_GET['id_proceso'];
	//Salida
	$varSalida = "";
	$json_id = "";
	$json_label = "";
	
    //abrir conexión
	require 'DBconfig.php'; // Carga la variable $db con el string de conexión a la DB. 
	require 'DBI_Util.php'; 
	
	if($tipo_comprobante == 'WAPI_ACRE'){ $dmlidErrores = '13004'; }
	elseif($tipo_comprobante == 'NCSP01'){ $dmlidErrores = '13005'; }
	elseif($tipo_comprobante == 'WAPI_PESP'){ $dmlidErrores = '13006'; }
	
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
			
			$dml_query = 'select TEXTO as TEXTOC, JSON_ID, JSON_LABEL from CMN_DBI_DMLS ';
			$dml_query = $dml_query . 'where DML_ID in (' . $dmlidErrores . ') and TIPO = \'Q\' and DML_ID in ('. $seguridad_query . ') order by DML_ID';

			$stmt = $con->ejecutarQuery($dml_query);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {  		
			
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlErrores'] = $result['TEXTOC'];
				$json_id = $result['JSON_ID'];
				$json_label = $result['JSON_LABEL'];
				
				$con->liberarHandlerQuery($stmt);
				
				if ($dmls['dmlErrores'] == "") {
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
                    
					$stmt = $con->ejecutarQuery($dmls['dmlErrores']);
					$errors = $con->getErrors();
					if ( $errors['errcode'] == "" )	{
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
	
	if ($varSalida == "")	
		echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", sid:"' . $sid . '"}');
    else
		echo utf8_encode('{' . $varSalida . '}');
	
?>