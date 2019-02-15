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
	$dmls = array('dmlPropuestas' => "", 'dmlMarcasPropuestas' => "");
	$dmlidPropuestas = '11805';
	$dmlidMarcasPropuestas = '11506';
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
			$dml_query = $dml_query . 'where DML_ID in (' . $dmlidPropuestas . ',' . $dmlidMarcasPropuestas . ') and TIPO = \'Q\' and DML_ID in ('. $seguridad_query . ') order by DML_ID';

			$stmt = $con->ejecutarQuery($dml_query);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {  		
			
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlMarcasPropuestas'] = $result['TEXTOC'];
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlPropuestas'] = $result['TEXTOC'];
				
				$con->liberarHandlerQuery($stmt);
				
				if (($dmls['dmlPropuestas'] == "")||($dmls['dmlMarcasPropuestas'] == "")) {
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
    						if ( !(($name=='dmlMarcasPropuestas')&&($nombre_campo=='propuesta_id')) ) {
								$dmls[$name] = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dmls[$name]);
							}
    					} 
    					foreach($_GET as $nombre_campo => $valor){
    						if ( !(($name=='dmlMarcasPropuestas')&&($nombre_campo=='propuesta_id')) ) {
								$dmls[$name] = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dmls[$name]);
							}
    					}
					}
                    
					$stmt = $con->ejecutarQuery($dmls['dmlPropuestas']);
					$errors = $con->getErrors();
					if ( $errors['errcode'] == "" ) {
						//entrega de campos id & label
						$varSalida = "identifier:\"propuesta_id\",";
						$varSalida = $varSalida . "label:\"propuesta_id\",";
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
                            $marcas = "";
                            
                            $dmlMarcasPropuestas = str_replace("#propuesta_id#", $result['PROPUESTA_ID'], $dmls['dmlMarcasPropuestas']);
							
                            $stmt2 = $con->ejecutarQuery($dmlMarcasPropuestas);
							$errors = $con->getErrors();
							if ( $errors['errcode'] == "" ){
                                $booPrimero2 = true;
                                while ($result2 = $con->getArrayResultadoQuery($stmt2)) {
								   if($booPrimero2){
								       $booPrimero2 = false;
								   } else {
								       $marcas = $marcas . ',';
								   }
                                   $marcas = $marcas . $result2['MARCA_ABREV'];
                                }
                                $con->liberarHandlerQuery($stmt2);
							}
							if (($result['IMPORTE'] < 1) && ($result['IMPORTE'] > 0)) { 
								$strSol = $result['IMPORTE'];
								$result['IMPORTE'] = "0$strSol";
							}
							if (($result['SOLICITADO'] < 1) && ($result['SOLICITADO'] > 0)) { 
								$strSol = $result['SOLICITADO'];
								$result['SOLICITADO'] = "0$strSol";
							}
							if (($result['ACREDITADO'] < 1) && ($result['ACREDITADO'] > 0)) {
								$strSol = $result['ACREDITADO'];
								$result['ACREDITADO'] = "0$strSol";
							}
							$strSol = $result['IMPORTE'];
							$result['IMPORTE'] = str_replace(',','.',"$strSol");
                            $varSalida = $varSalida . '{"r":"' . $result['R'] . '","propuesta_id":"'. $result['PROPUESTA_ID'] . '","marcas":"' . $marcas . '","tipo_carga":"' . $result['TIPO_CARGA'] . '","cliente_id":"' . $result['CLIENTE_ID'] . '","cliente_abrev":"' . $result['CLIENTE_ABREV'] . '","vigencia_desde":"' . $result['VIGENCIA_DESDE'] .  '","vigencia_hasta":"' . $result['VIGENCIA_HASTA'] .  '","descripcion":"' . $result['DESCRIPCION'] .  '","division_id":"' . $result['DIVISION_ID'] . '","bultos":"' . $result['BULTOS'] .  '","importe":' . $result['IMPORTE'] . ',"observaciones":"' . $result['OBSERVACIONES'] . '","solicitado":"' . $result['SOLICITADO'] .  '","acreditado":' . $result['ACREDITADO'] .  ',"cod_canal_venta":"' . $result['SEGMENTO_VENTA_ID'] .  '","tipo_descuento_id":"' . $result['TIPO_DESCUENTO_ID'] . '"}';
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