<?php
	//Info de sesion
	$sid = $_POST['sid'] . $_GET['sid'];
	$infoSesion = null;
	//Interfaz PHP-DBI
	$result = null;
	$con = null;
	$stmt = null;

	//abrir conexi�n:
	require 'DBconfig.php'; // Carga la variable $db con el string de conexi�n a la DB. 
	require 'DBI_Util.php'; 
	
	$con = getConexionDBI2($dbInfo[substr($sid,0,2)]);
	$errors = $con->getErrors();
	if ( $errors['errcode'] == "" ) {
		$infoSesion = $con->verificarSesion($sid);
		if (is_null($infoSesion['usuarioId'])) { 					//si usuario es nulo es que la sesi�n no existe
			$errors['errcode'] = "DBI-1";
			$errors['errmsg'] = "La sesion ya no est� activa.";
			$errors['srvmsg'] = "";
			$errors['debugmsg'] = "";
		} else {									//si volvi� usuario es que la sesi�n est� viva
			$ubicacion = $_POST['ubicacion'] . $_GET['ubicacion'];
			$contenido = $_POST['contenido'] . $_GET['contenido'];
			$ok = file_put_contents($ubicacion, stripslashes($contenido));
			if($ok===false){
				$errors['errcode'] = $ok;
				$errors['errmsg'] = "Error al intentar grabar el archivo";}
		}
	}
	unset($con);

	//Devuelve json con codigo de error al formulario
	echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", sid:"' . $sid . '"}');

?>
