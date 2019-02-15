<?php
	
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
	//Interfaz PHP-DBI
	$result = null;
 	$result2 = null;
	$con = null;
	$stmt = null;
	$stmt2 = null;
	//Queries
	$dmls = array('dmlSubregiones' => "", 'dmlPresups' => "", 'dmlSubregsPresups' => "", 'dmlSubregsProps' => "");
	$dmlSubregsPresupsOrig = '';
	$dmlSubregsPresupsModif = '';
	$dmlSubregsPropsOrig = '';
	$dmlSubregsPropsModif = '';
	$dmlidSubregiones = '13307';
    $dmlidPresups = '13309';
    $dmlidSubregsPresups = '13313';
	$dmlidSubregsProps = '13314';
	
    $mes = $_POST['mes'] . $_GET['mes'];
    $anio = $_POST['anio'] . $_GET['anio'];
	$mesActual = date("m");
	$anioActual = date("Y");
	
	require_once 'lib/ExcelWriter/ExcelWriterXML.php';
	require 'lib/JSON/JSON.php';	
	require 'DBconfig.php'; // Carga la variable $db con el string de conexión a la DB. 
	require 'DBI_Util.php'; 

	$xml = new ExcelWriterXML("WAPI-PresupuestosPorRegion.xls");
	$xml->docAuthor('WAPIMP');
	$format1 = $xml->addStyle('Cabecera');
	$format1->fontBold();
	$format2 = $xml->addStyle('Filas');
	$format3 = $xml->addStyle('Filas2');
    $format3->fontItalic();
	$sheet = $xml->addSheet('WAPI - Presupuestos por Region');

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

			if (($anio == $anioActual && $mes < $mesActual) || ($anio < $anioActual)) {
				$dmlidSubregsPresups = '13311';
				$dmlidSubregsProps = '13312';
			}
		
			//con el parametro dmlid buscar el dml a ejecutar:
			$seguridad_query = 'select da.DML_ID from CMN_DML_ACCIONES da, CMN_ACCESOS ac, CMN_RESPONSABILIDADES r ';
			$seguridad_query = $seguridad_query . 'where r.PERFIL_ID = ac.PERFIL_ID and ac.ACCION_ID = da.ACCION_ID and r.RESPONSABILIDAD_ID = ' . $infoSesion['respId'];

			$dml_query = 'select TEXTO as TEXTOC from CMN_DBI_DMLS ';
			$dml_query = $dml_query . 'where DML_ID in (' . $dmlidSubregiones . ',' . $dmlidPresups . ',' . $dmlidSubregsPresups . ',' . $dmlidSubregsProps . ') and TIPO = \'Q\' and DML_ID in ('. $seguridad_query . ') order by DML_ID';

			$stmt = $con->ejecutarQuery($dml_query);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {  		
			
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlSubregiones'] = $result['TEXTOC'];
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlPresups'] = $result['TEXTOC'];
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlSubregsPresups'] = $result['TEXTOC'];
				$dmlSubregsPresupsOrig = $result['TEXTOC'];
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlSubregsProps'] = $result['TEXTOC'];
				$dmlSubregsPropsOrig = $result['TEXTOC'];
				
				$con->liberarHandlerQuery($stmt);
				
				if (($dmls['dmlSubregiones'] == "")||($dmls['dmlPresups'] == "")||($dmls['dmlSubregsPresups'] == "")||($dmls['dmlSubregsProps'] == "")) {
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
						
					$dmlSubregsPresupsOrig = str_replace("\n", "", $dmlSubregsPresupsOrig);
					$dmlSubregsPresupsOrig = str_replace("\r", "", $dmlSubregsPresupsOrig);
					$dmlSubregsPresupsOrig = str_replace("#resp_id#", $infoSesion['respId'], $dmlSubregsPresupsOrig);
					$dmlSubregsPresupsOrig = str_replace("#esquema#", $infoSesion['esquema'], $dmlSubregsPresupsOrig);
					$dmlSubregsPresupsOrig = str_replace("#sociedad_id#", $infoSesion['sociedad_id'], $dmlSubregsPresupsOrig);
					$dmlSubregsPresupsOrig = str_replace("#usraudit#", $infoSesion['usuarioId'], $dmlSubregsPresupsOrig);					
					foreach($_POST as $nombre_campo => $valor){ 
						if (($nombre_campo != 'negocio_id') && ($nombre_campo != 'presupuesto_id')) {
							$dmlSubregsPresupsOrig = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dmlSubregsPresupsOrig);
						}
					} 
					foreach($_GET as $nombre_campo => $valor){ 
						if (($nombre_campo != 'negocio_id') && ($nombre_campo != 'presupuesto_id')) {
							$dmlSubregsPresupsOrig = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dmlSubregsPresupsOrig);
						}
					}

					$dmlSubregsPropsOrig = str_replace("\n", "", $dmlSubregsPropsOrig);
					$dmlSubregsPropsOrig = str_replace("\r", "", $dmlSubregsPropsOrig);
					$dmlSubregsPropsOrig = str_replace("#resp_id#", $infoSesion['respId'], $dmlSubregsPropsOrig);
					$dmlSubregsPropsOrig = str_replace("#esquema#", $infoSesion['esquema'], $dmlSubregsPropsOrig);
					$dmlSubregsPropsOrig = str_replace("#sociedad_id#", $infoSesion['sociedad_id'], $dmlSubregsPropsOrig);
					$dmlSubregsPropsOrig = str_replace("#usraudit#", $infoSesion['usuarioId'], $dmlSubregsPropsOrig);					
					foreach($_POST as $nombre_campo => $valor){ 
						if (($nombre_campo != 'negocio_id') && ($nombre_campo != 'presupuesto_id')) {
							$dmlSubregsPropsOrig = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dmlSubregsPropsOrig);
						}
					} 
					foreach($_GET as $nombre_campo => $valor){
						if (($nombre_campo != 'negocio_id') && ($nombre_campo != 'presupuesto_id')) {
							$dmlSubregsPropsOrig = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dmlSubregsPropsOrig);
						}
					}						
					
                    //$sheet->writeString(1,1,'Presupuesto','Cabecera');
                    $sheet->writeString(1,1,'Negocio','Cabecera');
                    $sheet->writeString(1,2,'Importe','Cabecera');
                    $sheet->writeString(1,3,'Vol. Ventas','Cabecera');
                    $sheet->writeString(1,4,'Precio Htl','Cabecera');
                    $sheet->writeString(1,5,'Pendiente','Cabecera');
			//echo '<br><br>'.$dmls['dmlPresups'];
					$stmt = $con->ejecutarQuery($dmls['dmlPresups']);
					$errors = $con->getErrors();
					if ( $errors['errcode'] == "" ) {
						$booPrimero = true;
                        $t2 = 2;
						while ($result = $con->getArrayResultadoQuery($stmt)) {
    						$presupuesto_id = $result['PRESUPUESTO_ID'];
                            $negocio_id = $result['NEGOCIO_ID'];
                            $subregs = array();

							if (($anio == $anioActual && $mes < $mesActual) || ($anio < $anioActual)) {
								$dmlSubregsProps = str_replace("#negocio_id#", $negocio_id, $dmls['dmlSubregsProps']);
						//echo '<br><br>'.$dmlSubregsProps;
								$stmt2 = $con->ejecutarQuery($dmlSubregsProps);
								$errors = $con->getErrors();
								if ( $errors['errcode'] == "" ){
									$booPrimero2 = true;
									while ($result2 = $con->getArrayResultadoQuery($stmt2)) {
									   $subregs[$result2['SUBREGION_ID']] = array('',$result2['SUB_REGION_ABREV'],0,0,0,$result2['PROP'],$result2['DISP'],'');
									}
									$con->liberarHandlerQuery($stmt2);
									
									$dmlsSubregsPresups = str_replace("#presupuesto_id#", $presupuesto_id, $dmls['dmlSubregsPresups']);
									$dmlsSubregsPresups = str_replace("#negocio_id#", $negocio_id, $dmlsSubregsPresups);
							//echo '<br><br>'.$dmlsSubregsPresups;
									$stmt2 = $con->ejecutarQuery($dmlsSubregsPresups);
									$errors = $con->getErrors();
									if ( $errors['errcode'] == "" ){
										$booPrimero2 = true;
										while ($result2 = $con->getArrayResultadoQuery($stmt2)) {
										   $subregs[$result2['SUBREGION_ID']] = array($result2['SUBPRESUPUESTO_ID'],$result2['SUB_REGION_ABREV'],$result2['IMPORTE'],$result2['VOLUMEN_VENTAS'],$result2['PRECIO_HTL'],$result2['PROP'],$result2['DISP'],$result2['PRESUPUESTO_ID']); 
										}
										$con->liberarHandlerQuery($stmt2);
										
										//$sheet->writeNumber($t2,1,$result['PRESUPUESTO_ID'],'Cabecera');
										$sheet->writeString($t2,1,$result['NEGOCIO_DESC'],'Cabecera');
										$sheet->writeNumber($t2,2,$result['IMPORTE'],'Cabecera');
										$sheet->writeNumber($t2,3,$result['VOLUMEN_VENTAS'],'Cabecera');
										$sheet->writeNumber($t2,4,$result['PRECIO_HTL'],'Cabecera');
										$sheet->writeNumber($t2,5,$result['PENDIENTE'],'Cabecera');
										
										$t2++;
										$sheet->writeString($t2,1,'Region','Filas2');
										$sheet->writeString($t2,2,'$ Presupuesto','Filas2');
										$sheet->writeString($t2,3,'Vol. Venta','Filas2');
										$sheet->writeString($t2,4,'Precio Htl','Filas2');
										$sheet->writeString($t2,5,'$ Propuestas','Filas2');
										$sheet->writeString($t2,6,'$ Disponible','Filas2');
										$t2++;
										foreach($subregs as $subregion => $valores){
											$sheet->writeString($t2,1,$valores[1],'Filas');
											$sheet->writeNumber($t2,2,$valores[2],'Filas');
											$sheet->writeNumber($t2,3,$valores[3],'Filas');
											$sheet->writeNumber($t2,4,$valores[4],'Filas');
											$sheet->writeNumber($t2,5,$valores[5],'Filas');
											$sheet->writeNumber($t2,6,$valores[6],'Filas');
											$t2++;
										}
										
										unset($subregs);  
									}
								}
							} else {
					//echo '<br><br>'.$dmls['dmlSubregiones'];
								$stmt2 = $con->ejecutarQuery($dmls['dmlSubregiones']);
								$errors = $con->getErrors();
								if ( $errors['errcode'] == "" ){
									$booPrimero2 = true;
									while ($result2 = $con->getArrayResultadoQuery($stmt2)) {
									   $subregs[$result2['SUB_REGION_ID']] = array('',$result2['SUB_REGION_ABREV'],0,0,0,0,0,'');
									}
									$con->liberarHandlerQuery($stmt2);
									
									$dmlSubregsProps = str_replace("#negocio_id#", $negocio_id, $dmls['dmlSubregsProps']);
							//echo '<br><br>'.$dmlSubregsProps;
									$stmt2 = $con->ejecutarQuery($dmlSubregsProps);
									$errors = $con->getErrors();
									if ( $errors['errcode'] == "" ){
										$booPrimero2 = true;
										while ($result2 = $con->getArrayResultadoQuery($stmt2)) {
										   $subregs[$result2['SUBREGION_ID']] = array('',$result2['SUB_REGION_ABREV'],0,0,0,$result2['PROP'],$result2['DISP'],'');
										}
										$con->liberarHandlerQuery($stmt2);
										
										$dmlsSubregsPresups = str_replace("#presupuesto_id#", $presupuesto_id, $dmls['dmlSubregsPresups']);
										$dmlsSubregsPresups = str_replace("#negocio_id#", $negocio_id, $dmlsSubregsPresups);
								//echo '<br><br>'.$dmlsSubregsPresups;
										$stmt2 = $con->ejecutarQuery($dmlsSubregsPresups);
										$errors = $con->getErrors();
										if ( $errors['errcode'] == "" ){
											$booPrimero2 = true;
											while ($result2 = $con->getArrayResultadoQuery($stmt2)) {
											   $subregs[$result2['SUBREGION_ID']] = array($result2['SUBPRESUPUESTO_ID'],$result2['SUB_REGION_ABREV'],$result2['IMPORTE'],$result2['VOLUMEN_VENTAS'],$result2['PRECIO_HTL'],$result2['PROP'],$result2['DISP'],$result2['PRESUPUESTO_ID']); 
											}
											$con->liberarHandlerQuery($stmt2);
											
											//$sheet->writeNumber($t2,1,$result['PRESUPUESTO_ID'],'Cabecera');
											$sheet->writeString($t2,1,$result['NEGOCIO_DESC'],'Cabecera');
											$sheet->writeNumber($t2,2,$result['IMPORTE'],'Cabecera');
											$sheet->writeNumber($t2,3,$result['VOLUMEN_VENTAS'],'Cabecera');
											$sheet->writeNumber($t2,4,$result['PRECIO_HTL'],'Cabecera');
											$sheet->writeNumber($t2,5,$result['PENDIENTE'],'Cabecera');
											
											$t2++;
											$sheet->writeString($t2,1,'Region','Filas2');
											$sheet->writeString($t2,2,'$ Presupuesto','Filas2');
											$sheet->writeString($t2,3,'Vol. Venta','Filas2');
											$sheet->writeString($t2,4,'Precio Htl','Filas2');
											$sheet->writeString($t2,5,'$ Propuestas','Filas2');
											$sheet->writeString($t2,6,'$ Disponible','Filas2');
											$t2++;
											foreach($subregs as $subregion => $valores){
												$sheet->writeString($t2,1,$valores[1],'Filas');
												$sheet->writeNumber($t2,2,$valores[2],'Filas');
												$sheet->writeNumber($t2,3,$valores[3],'Filas');
												$sheet->writeNumber($t2,4,$valores[4],'Filas');
												$sheet->writeNumber($t2,5,$valores[5],'Filas');
												$sheet->writeNumber($t2,6,$valores[6],'Filas');
												$t2++;
											}
											
											unset($subregs);  
										}
									}
								}
							}

                        }
                        
						$con->liberarHandlerQuery($stmt);
					}
				}
			}
		}
	}
	unset($con);
	$xml->updateSheet($sheet);
	$xml->updateStyle($format1);
	$xml->updateStyle($format2);
	$xml->updateStyle($format3);

    ob_end_clean();

	if ($errors['errcode'] != "")	
		echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", sid:"' . $sid . '"}');
    else {
		$xml->sendHeaders();
		$xml->writeData();
	}
	
?>