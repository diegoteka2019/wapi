<?php

	// Kill the internal messages:
	error_reporting(0); 

	ob_start();
	
	//Parametros
	$reporte = $_GET['reporte'] . $_POST['reporte'];
	//Queries a ejecutar
	$seguridad_query = "";
	$dml_query = "";
	$dml = "";
	$maxReg = $_GET['cantRegs'] . $_POST['cantRegs'];
	$dmls = array('dmlCabecera' => "", 'dmlFilas' => "", 'dmlCantFilas' => "", 'dmlFilasLim' => "");
	$dmlidCabecera = '12107';
	$dmlidFilas = '12108';
	$dmlidCantFilas = '12109';
	$dmlidFilasLim = '12110';
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
		
	require_once 'lib/ExcelWriter/ExcelWriterXML.php';
	require 'lib/JSON/JSON.php';	
	require 'DBconfig.php'; // Carga las variables $dbXXX con datos de conexion a la BD 
	require 'DBI_Util.php';		

	$nombreArchivo = "WAPI-".$reporte.".xls";
	$xml = new ExcelWriterXML($nombreArchivo);
	$xml->docAuthor('WAPIMP');

	$format1 = $xml->addStyle('Cabecera');
	$format1->fontBold();
	$format1->border('All','2','#000000','Continuous');
	$format2 = $xml->addStyle('Filas');
	$sheet = $xml->addSheet('WAPIMP');

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
		} else {		
			//con el parametro dmlid buscar el dml a ejecutar:
			$seguridad_query = 'select da.DML_ID from CMN_DML_ACCIONES da, CMN_ACCESOS ac, CMN_RESPONSABILIDADES r ';
			$seguridad_query = $seguridad_query . 'where r.PERFIL_ID = ac.PERFIL_ID and ac.ACCION_ID = da.ACCION_ID and r.RESPONSABILIDAD_ID = ' . $infoSesion['respId'];
			$dml_query = 'select TEXTO as TEXTOC, JSON_ID, JSON_LABEL from CMN_DBI_DMLS ';
			$dml_query = $dml_query . 'where DML_ID in (' . $dmlidCabecera . ',' . $dmlidFilas . ',' . $dmlidCantFilas . ',' . $dmlidFilasLim . ') and TIPO = \'Q\' and DML_ID in ('. $seguridad_query . ') order by DML_ID';

			$stmt = $con->ejecutarQuery($dml_query);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {  	
				//parse ok.
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlCabecera'] = $result['TEXTOC'];
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlFilas'] = $result['TEXTOC'];
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlCantFilas'] = $result['TEXTOC'];
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlFilasLim'] = $result['TEXTOC'];
				
				$con->liberarHandlerQuery($stmt);
				
				if (($dmls['dmlCabecera'] == "")||($dmls['dmlFilas'] == "")||($dmls['dmlCantFilas'] == "")||($dmls['dmlFilasLim'] == "")) {
					$errors['errcode'] = "DBI-2";
					$errors['errmsg'] = "No se encontró el dml solicitado (no existe o la sesión no tiene permisos)";
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
					
					$stmt = $con->ejecutarQuery($dmls['dmlCabecera']);
					$errors = $con->getErrors();			
					if ( $errors['errcode'] == "" ) {
						$t = 1;
						while ($result = $con->getArrayResultadoQuery($stmt)) {
							$json = new JSON;
							$result2 = $json->unserialize(stripslashes($result['REC']));
							$t2 = 1;
							foreach($result2 as $nombre_campo => $valor){
								if($valor!=""){
									$sheet->columnWidth($t2,100);
									$sheet->writeString($t,$t2,$valor,'Cabecera');
								}
								$t2++;
							}
							$t++;
						}	
						$con->liberarHandlerQuery($stmt);
	
						$stmt = $con->ejecutarQuery($dmls['dmlCantFilas']);
						$errors = $con->getErrors();			
						if ( $errors['errcode'] == "" ) {
							$result = $con->getArrayResultadoQuery($stmt);
							$cantRegs = $result['CANTI'];
							$con->liberarHandlerQuery($stmt);
							
							if($cantRegs <= 3000){
								$stmt = $con->ejecutarQuery($dmls['dmlFilas']);
								$errors = $con->getErrors();			
								if ( $errors['errcode'] == "" ) {
									$t = 2;
									while ($result = $con->getArrayResultadoQuery($stmt)) {
										$json = new JSON;
										$result2 = $json->unserialize(stripslashes($result['REC']));
										$t2 = 1;
										foreach($result2 as $nombre_campo => $valor){
											if($valor!=""){
												if (is_numeric($valor)) {
													$sheet->writeNumber($t,$t2,$valor,'Filas');
												} else {
													$sheet->writeString($t,$t2,$valor,'Filas');
												}
											}
											$t2++;
										}
										$t++;
									}	
									$con->liberarHandlerQuery($stmt);
								}
							} else {
								$cont = true;
								$lim1 = 1;
								$lim2 = 3000;
								$t = 2;
								$sumat = 0;
								while(($lim1 <= $cantRegs)&&($cont == true)){
									$sqlFilasLim = $dmls['dmlFilasLim'];
									$sqlFilasLim  = str_replace("#lim1#", $lim1, $sqlFilasLim );
									$sqlFilasLim  = str_replace("#lim2#", $lim2, $sqlFilasLim );
									//echo $sqlFilasLim.'<br>';
									$stmt = $con->ejecutarQuery($sqlFilasLim);
									$errors = $con->getErrors();			
									if ( $errors['errcode'] == "" ) {
										while ($result = $con->getArrayResultadoQuery($stmt)) {
											$sumat = $sumat + 1;
											$result2 = array();
											for($i=1;$i<=40;$i++){
												if($i<=9){
													$result2['c'.$i] = $result['DATA0'.$i];
												} else {
													$result2['c'.$i] = $result['DATA'.$i];
												}
											}
											//$json = new JSON;
											//$result2 = $json->unserialize(stripslashes($result['REC']));
											$t2 = 1;
											foreach($result2 as $nombre_campo => $valor){
												if($valor!=""){
													if (is_numeric($valor)) {
														$sheet->writeNumber($t,$t2,$valor,'Filas');
													} else {
														$sheet->writeString($t,$t2,$valor,'Filas');
													}
												}
												$t2++;
											}
											$t++;
										}	
										$con->liberarHandlerQuery($stmt);
									} else {
										$cont = false;
									}
									$lim1 = $lim2 + 1;
									$lim2 = $lim2 + 3000;
								}
							}					
						}
					}
				}
			}
		}
	}
	unset($con);
	$xml->updateSheet($sheet);
	$xml->updateStyle($format1);
	$xml->updateStyle($format2);
	
	ob_end_clean();

	//Devuelve json con codigo de error al formulario
	if ($errors['errcode'] != "")
		echo utf8_encode('{identifier:"errcode",label:"errcode",items:[{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '"}]}');
	else {
		//null;
		//echo $sumat;
		$xml->sendHeaders();
		$xml->writeData(null,'iso-8859-1');
	}
	
?>