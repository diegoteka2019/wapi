<?php

    /************************************************* 
    PROCEDURE login
    Devuelve en formato JSON el un  id de sesion si el usuario y clave son válidos
	parametros (pueden pasarse por POST o por GET!):
		usuario:	Identificador del usuario
		clave:		Clave del usuario
		srv:		Servidor elegido
		cod:		Accion a ejecutar. 'ML' entrega modo de login, 'LS' entrega lista de servidores,
					'VA' verifica que haya algun usuario autenticado (SSO) y 'CS' intenta crear sesion

    16/6/2009	Guillermo Castarés		Creación versión inicial
	30/6/2009	Esteban Lopez			Migracion a SQLServer
	18/8/2009	Esteban Lopez			Agregada interfaz ConexionDBI
    *************************************************/

	// Kill the internal messages:
	error_reporting(0); 

	//Control de errores
	$errors = array('errcode' => "", 'errmsg' => "", 'srvmsg' => "", 'debugmsg' => "");
	//Parametros
	$usuario = $_POST['cmn_usuario'] . $_GET['cmn_usuario'];
	$clave = $_POST['cmn_clave'] . $_GET['cmn_clave'];
	$srv = $_POST['cmn_servidor'] . $_GET['cmn_servidor'];
	$cod = $_POST['cod'] . $_GET['cod']; 
	//$modoLogin = 'LOC'; // 'LOC' Login local - 'SSO' Login Oracle SSO
	//Info de sesion
	$sid = "";
	$infoSesion = null;
	//Interfaz PHP-DBI
	$con = null;
	$stmt = null;
	//salida
	$varSalida = "";
	$json_id = "srvId";
	$json_label = "srvDetalle";
	
	require 'DBconfig.php'; // Carga las variables $dbXXX con datos de conexion a la BD 
	require 'DBI_Util.php';
	
	if ($cod == 'ML') {
		//Devuelve json con codigo de error al formulario
		echo utf8_encode('{modoLogin:"' . $modoLogin . '",errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", sid:"' . $sid . '"}');
	} else if ($cod == 'LS') {
		//entrega de campos id & label
		$varSalida = "identifier:\"" . $json_id . "\",";
		$varSalida = $varSalida . "label:\"" . $json_label . "\",";
		//iniciar entrega de lista de items:
		$varSalida = $varSalida .  'items:[';

		//loop para entregar todos los items:
		$booPrimero = true;
		$i = 0;
		foreach($dbInfo as $srvId => $srvInfo) {
			if ($booPrimero) 
				$booPrimero = false;
			else
				$varSalida = $varSalida . ',';
				
			//$varSalida = $varSalida . '{srvId:"' . $srvId . '", srvDetalle:"<b>' . $srvInfo['dbServerDescripcion'] . '</b> - ' . $srvInfo['dbServerTipo'] . '&nbsp;<img width=\"12\" height=\"12\" src=\"images/'. $srvInfo['dbServerTipo'] .'.gif\" /> - <i>' . $srvInfo['dbServer'] . '</i>", srvDisp:"' . $srvInfo['dbServerDescripcion'] . ' - ' . $srvInfo['dbServerTipo'] .'", srvDescripcion:"' . $srvInfo['dbServerDescripcion'] . '", srvTipo:"' . $srvInfo['dbServerTipo'] . '"}';
			$varSalida = $varSalida . '{srvId:"' . $srvId . '", srvDetalle:"<img width=\"12\" height=\"12\" src=\"images/'. $srvInfo['dbServerTipo'] . '.gif\" /> &nbsp; <b>' . $srvInfo['dbServerDescripcion'] . '</b>", srvDisp:"' . $srvInfo['dbServerDescripcion'] . ' - ' . $srvInfo['dbServerTipo'] .'", srvDescripcion:"' . $srvInfo['dbServerDescripcion'] . '", srvTipo:"' . $srvInfo['dbServerTipo'] . '"}';
		}
	
		//entrega cierre de lista de items:
		$varSalida = $varSalida . ']';
		echo utf8_encode('{' . $varSalida . '}');
		
	} else if ($cod == 'VA') {
	
		if ($modoLogin == 'SSO') {
			
			$SSO_REROUTE = "ssoreroute.php?p_redirect_url=index.html";
			$SSO_USER    = getenv("REMOTE_USER");
			
			if (empty($SSO_USER)){
				$errors['errcode'] = "SSO-1";
				$errors['errmsg'] = "Ningun usuario autenticado";
				$errors['debugmsg'] = "Login"; 

				$redirURL = $SSO_REROUTE;
				echo utf8_encode('{modoLogin:"' . $modoLogin . '",errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", redirURL:"' . $redirURL . '"}');	
				
			} else {
				
				echo utf8_encode('{modoLogin:"' . $modoLogin . '",errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", usuarioId:"' . $SSO_USER . '"}');
				
			}
		}	
		
	} else if ($cod == 'CS') {
	
		if ($modoLogin == 'LOC') {
				//abrir conexión:
				$con = getConexionDBI2($dbInfo[$srv]);
				$errors = $con->getErrors();
				if ( $errors['errcode'] == "" ) {	//conexión a la DB ok.	
					//con los parametros buscar si el usuario es válido:
					$infoSesion = $con->crearSesion($modoLogin,$usuario,$clave);
					$errors = $con->getErrors();
					if ( $infoSesion['sid'] == "" || $infoSesion['sid'] == " " ) {
						$errors['errcode'] = "DBI-5";
						$errors['errmsg'] = "Usuario o Clave invalidos!";
						$errors['debugmsg'] = "Login"; 
					} else {
						$errors['errcode'] = "";
						$errors['errmsg'] = "Sesion creada Ok.";
						$errors['srvmsg'] = "";
						$errors['debugmsg'] = "Login";
						$sid = $infoSesion['sid']; 
					}
				}
				unset($con);

				//Devuelve json con codigo de error al formulario
				echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", sid:"' . $sid . '"}');	

		} else if ($modoLogin == 'SSO') {
			
			$SSO_REROUTE = "ssoreroute.php?p_redirect_url=index.html";
			$SSO_USER    = getenv("REMOTE_USER");
			
			if (empty($SSO_USER)){
				$errors['errcode'] = "SSO-1";
				$errors['errmsg'] = "Ningun usuario autenticado";
				$errors['debugmsg'] = "Login"; 

				$redirURL = $SSO_REROUTE;
				echo utf8_encode('{modoLogin:"' . $modoLogin . '",errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", redirURL:"' . $redirURL . '"}');	
				
			} else {
				//abrir conexión:
				$con = getConexionDBI2($dbInfo[$srv]);
				$errors = $con->getErrors();
				if ( $errors['errcode'] == "" ) {	//conexión a la DB ok.	
					//con los parametros buscar si el usuario es válido:
					$infoSesion = $con->crearSesion($modoLogin,$SSO_USER);
					$errors = $con->getErrors();
					if ( $infoSesion['sid'] == "" || $infoSesion['sid'] == " " ) {
						$errors['errcode'] = "SSO-2";
						$errors['errmsg'] = "Usuario o Clave invalidos!";
						$errors['debugmsg'] = "Login"; 
					} else {
						$errors['errcode'] = "";
						$errors['errmsg'] = "Sesion creada Ok.";
						$errors['srvmsg'] = "";
						$errors['debugmsg'] = "Login";
						$sid = $infoSesion['sid']; 
					}
				}
				unset($con);
				
				//Devuelve json con codigo de error al formulario
				echo utf8_encode('{modoLogin:"' . $modoLogin . '",errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", sid:"' . $sid . '", usuarioId:"' . $SSO_USER . '"}');
				
			}
		}
	}
?>


