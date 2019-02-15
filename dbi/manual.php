<?php

    /************************************************* 
    PROCEDURE Manual
	
	03/08/2010	Esteban Lopez		Creacion version inicial
    *************************************************/

	// Kill the internal messages:
	error_reporting(0); 

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
	$ruta = "";
	$nombre = "";
	
	ob_start();
	//ejecutar dml y devolver resultado en formato json.	
	//abrir conexión:
	require 'DBconfig.php'; // Carga las variables $dbXXX con datos de conexion a la BD 
	require 'DBI_Util.php'; 

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
		} else {									//si volvió usuario es que la sesión está viva

			$pais = $infoSesion['esquema'];
			if ($pais == '03UY'){
				$ruta = '../data/WAPI-Manual_de_Usuario-Uruguay.pdf';
				$nombre = 'WAPI-Manual_de_Usuario-Uruguay.pdf';
			} else {
				$ruta = '../data/WAPI-Manual_de_Usuario.pdf';
				$nombre = 'WAPI-Manual_de_Usuario.pdf';
			}

			$varSalida = 'ruta:"'.$ruta.'"';
		}
	}
	unset($con);
	
	ob_end_clean();
	
	//Devuelve json con codigo de error al formulario
	if ($varSalida == "")
		echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '"}');
	else
		header('Content-Disposition: attachment; filename='.$nombre);	 
		header('Content-type: application/pdf');  
		readfile($ruta);
		//echo utf8_encode('{' . $varSalida . '}');

?>


