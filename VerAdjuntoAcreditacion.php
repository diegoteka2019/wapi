<?php

   /************************************************* 
    PROCEDURE VerAdjuntoAcreditacion
    Obtiene el adjunto de una acredittacion
		id:			Identificador de la acreditacion

	03/05/2010	Esteban Lopez	Creacion version inicial
    *************************************************/

	// Kill the internal messages:
    error_reporting(0); 

	ob_start();
	
	/* 
	 * En la aplicacion, este parametro se obtiene dinamicamente a traves del sid. Sin embargo, 
	 * para este archivo de acceso externo, debe fijarse aqui directamente
	 * Desarrollo: D1 | Test: T1 | Produccion: P1
	 */
 	$serverId = 'P1';
	
	//Control de errores
	$errors = array('errcode' => "", 'errmsg' => "", 'srvmsg' => "", 'debugmsg' => "");
	//Parametros
	$acredId = $_POST['id'] . $_GET['id']; 
	//Info de sesion
	$infoSesion = null;
	//Interfaz PHP-DBI
	$con = null;
	$stmt = null;
	
	require 'dbi/DBconfig.php'; // Carga las variables $dbXXX con datos de conexion a la BD 
	require 'dbi/DBI_Util.php';
	
	if ($modoLogin == 'SSO') {
		
		$SSO_REROUTE = "ssoreroute.php?p_redirect_url=VerAdjuntoAcreditacion.php?id=".$acredId;
		$SSO_USER    = getenv("REMOTE_USER");
		
		if (empty($SSO_USER)){
			$errors['errcode'] = "SSO-1";
			$errors['errmsg'] = "Ningun usuario autenticado";
			$errors['debugmsg'] = "Login"; 
			$redirURL = $SSO_REROUTE;			
		} else {
			//abrir conexión:
			$con = getConexionDBI2($dbInfo[$serverId]);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {	//conexión a la DB ok.	
				//con los parametros buscar si el usuario es válido:
				$infoSesion = $con->crearSesion($modoLogin,$SSO_USER);
				$errors = $con->getErrors();
				if ( $infoSesion['sid'] == "" || $infoSesion['sid'] == " " ) {
					$errors['errcode'] = "SSO-2";
					$errors['errmsg'] = "Usuario o Clave invalidos";
					$errors['debugmsg'] = "Login";
				} else {
					$authUsr = strtoupper($SSO_USER);
					$dml_query = "SELECT NOMBRE,TIPO,TAMA,CONTENIDO FROM CMN_ARCHIVOS 
								   WHERE ARCHIVO_ID = ( SELECT a.ARCHIVO_ID FROM ACREDITACIONES a
													     WHERE a.ACREDITACION_ID = $acredId )";
					
					$stmt = $con->ejecutarQuery($dml_query);
					$errors = $con->getErrors();
					if ( $errors['errcode'] == "" ) {
						$result = $con->getArrayResultadoQuery($stmt);
						if (($result['NOMBRE'] == '') || ($result['NOMBRE'] == ' ')) {
							$errors['errcode'] = "DB-1";
							$errors['errmsg'] = "No se pudo obtener el adjunto de la acreditacion indicada";
							$errors['debugmsg'] = "DB"; 						
						} else {
							$size = $result['TAMA'];
							$tipo = $result['TIPO'];
							$nombre = rawurlencode($result['NOMBRE']);
							$con->liberarHandlerQuery($stmt);
						}
					}
				}
			}
			unset($con);
		}
	} elseif ($modoLogin == 'LOC') {
		//abrir conexión:
		$con = getConexionDBI2($dbInfo[$serverId]);
		$errors = $con->getErrors();
		if ( $errors['errcode'] == "" ) {	//conexión a la DB ok.	
			//con los parametros buscar si el usuario es válido:
			$infoSesion = $con->crearSesion($modoLogin,'1','c4ca4238a0b923820dcc509a6f75849b');
			$errors = $con->getErrors();
			if ( $infoSesion['sid'] == "" || $infoSesion['sid'] == " " ) {
				$errors['errcode'] = "DBI-5";
				$errors['errmsg'] = "Usuario o Clave invalidos!";
				$errors['debugmsg'] = "Login"; 
			} else {
				$respId = $infoSesion['respId'];
				$dml_query = "SELECT NOMBRE,TIPO,TAMA,CONTENIDO FROM CMN_ARCHIVOS 
								   WHERE ARCHIVO_ID = ( SELECT a.ARCHIVO_ID FROM ACREDITACIONES a
													     WHERE a.ACREDITACION_ID = $acredId )";
	
				$stmt = $con->ejecutarQuery($dml_query);
				$errors = $con->getErrors();
				if ( $errors['errcode'] == "" ) {
					$result = $con->getArrayResultadoQuery($stmt);
					if (($result['NOMBRE'] == '') || ($result['NOMBRE'] == ' ')) {
						$errors['errcode'] = "DB-1";
						$errors['errmsg'] = "No se pudo obtener el adjunto de la acreditacion indicada";
						$errors['debugmsg'] = "DB"; 						
					} else {
						$size = $result['TAMA'];
						$tipo = $result['TIPO'];
						$nombre = rawurlencode($result['NOMBRE']);
						$con->liberarHandlerQuery($stmt);
					}
				}
			}
		}
		unset($con);
	}
	
	ob_end_clean();
	
	if ($errors['errcode'] != "") {
		if ($errors['errcode'] == "SSO-1"){
			header("Location: $redirURL");
			exit;
		} else {
			//echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", redirURL:"' . $redirURL . '"}');
			echo utf8_encode('<html><head><title>WAPI - Visualizacion de Adjuntos</title></head>');
			echo utf8_encode('<body style="font-family:verdana,tahoma;font-size:0.9em"><hr><p align="center"><b>WAPI - Visualizacion de Adjuntos</b></p><hr>');
			echo utf8_encode('<p align="center">No se pudo descargar el adjunto. Se produjo el siguiente error:</p>');
			echo utf8_encode('<p align="center">'.$errors['errcode'].'-'.$errors['errmsg'].'</p>');
			echo utf8_encode('</body></html>');
		}
	} else {
		$startUrl = substr($nombre,0,5);
		if($startUrl == 'https'){
			header("Location:".rawurldecode($nombre));
		} else {
			if($acredId > 163494){
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
