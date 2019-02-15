<?php
	ob_start();

	//Info de sesion
	$sid = $_POST['sid'] . $_GET['sid'];
	$infoSesion = null;
	//Interfaz PHP-DBI
	$result = null;
	$con = null;
	$stmt = null;

	//abrir conexión:
	require 'DBconfig.php'; // Carga la variable $db con el string de conexión a la DB. 
	require 'DBI_Util.php'; 
	
	//se limpia la salida del echo
	ob_end_clean();

	$con = getConexionDBI2($dbInfo[substr($sid,0,2)]);
	$errors = $con->getErrors();
	if ( $errors['errcode'] == "" ) {
		$infoSesion = $con->verificarSesion($sid);
		if (is_null($infoSesion['usuarioId'])) { 					//si usuario es nulo es que la sesión no existe
			$errors['errcode'] = "DBI-1";
			$errors['errmsg'] = "La sesion ya no está activa.";
			$errors['srvmsg'] = "";
			$errors['debugmsg'] = "";
		} else {									//si volvió usuario es que la sesión está viva
			$ubicacion = $_POST['ubicacion'] . $_GET['ubicacion'];
			if (file_exists($ubicacion))echo utf8_encode(file_get_contents($ubicacion));
			else echo "El archivo solicitado no existe";
		}
	}
	unset($con);

?>