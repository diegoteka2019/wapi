<?php

	// Kill the internal messages:
	error_reporting(0); 

	ob_start();
	
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
		
	require_once 'lib/ExcelWriter/ExcelWriterXML.php';
	require 'lib/JSON/JSON.php';	
	require 'DBconfig.php'; // Carga las variables $dbXXX con datos de conexion a la BD 
	require 'DBI_Util.php';		

	$xml = new ExcelWriterXML;
	$xml->docAuthor('WAPIMP');

	$format1 = $xml->addStyle('Cabecera');
	$format1->fontBold();
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
					if ( $errors['errcode'] == "" ) {
						$booPrimero = true;
						$t = 2;
						while ($result = $con->getArrayResultadoQuery($stmt)) {
							//$result2 = json_decode($result['REC'],true);
							$json = new JSON;
							$result2 = $json->unserialize(stripslashes($result['REC']));

							if($booPrimero) {
								$t2 = 1;
								foreach($result2 as $nombre_campo => $valor){ 
									$sheet->writeString(1,$t2,$nombre_campo,'Cabecera');
									$t2++;
								}
								$booPrimero = false;
							}
							$t2 = 1;
							foreach($result2 as $nombre_campo => $valor){ 
								$sheet->writeString($t,$t2,$valor,'Filas');
								$t2++;
							}
							$t++;
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
	
	ob_end_clean();

	//Devuelve json con codigo de error al formulario
	if ($errors['errcode'] != "")
		echo utf8_encode('{identifier:"errcode",label:"errcode",items:[{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '"}]}');
	else {
		$xml->sendHeaders();
		$xml->writeData();
	}
		
?>