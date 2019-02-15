<?php

    /************************************************* 
    PROCEDURE dbi/verificarSesion.php
    Verifica la existencia de una sesion, sin modificar el tiempo de inactividad y devuelve el
	tiempo que le queda a la sesion (en segundos)
	
	parametros (pueden pasarse por POST o por GET!):
		sid:	Identificador de la sesión del usuario
		
	Ejemplo de invocación: "http://localhost/testdojo/dbi/verificarSesion.php?sid=91827364"
	
	03/8/2009	Esteban Lopez		Creacion version inicial
	18/8/2009	Esteban Lopez		Agregada interfaz ConexionDBI
	4/11/2009	Guillermo Castarés	Adaptación a Oracle de los DMLs
    *************************************************/

	// Kill the internal messages:
	error_reporting(0); 
	
	//Queries a ejecutar
	$dml_eliminar_antiguas = "delete from CMN_SESIONES where FECHA_ULTIMO_ACCESO <  sysdate - to_number(CMN\$PARAMETRO.RCL('SESIONTIMEOUT','0000,'0000'))/(60*24)";
	$dml_tiempos_sesion = "select USUARIO_ID, FECHA_ULTIMO_ACCESO, (to_number(CMN\$PARAMETRO.RCL('SESIONTIMEOUT','0000','0000'))*60) - (sysdate - FECHA_ULTIMO_ACCESO) * 24*60*60 as TIEMPO_A_VENCER from CMN_SESIONES where SID ='#sid#'";
	//Control de errores
	$errors = array('errcode' => "", 'errmsg' => "", 'srvmsg' => "", 'debugmsg' => "");
	//Info de sesion
	$sid = $_POST['sid'] . $_GET['sid'];
	$varUsuarioId = "";
	//Salida
	$ultimoAcceso = null;
	$tiempoParaVencer = null;

	//abrir conexión:
	require 'DBconfig.php'; // Carga las variables $dbXXX con datos de conexion a la BD 
	require 'DBI_Util.php'; 

	$con = getConexionDBI2($dbInfo[substr($sid,0,2)]);
	$errors = $con->getErrors();
	if ( $errors['errcode'] == "" ) {  					//conexión a la DB ok.

		$stmt = $con->ejecutarQuery($dml_eliminar_antiguas);
		$errors = $con->getErrors();
		if ( $errors['errcode'] == "" ) { 
			$dml_tiempos_sesion = str_replace("#sid#", $sid, $dml_tiempos_sesion);
			$stmt = $con->ejecutarQuery($dml_tiempos_sesion);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {  					//parse ok.
				$result = $con->getArrayResultadoQuery($stmt);
				$varUsuarioId = $result['USUARIO_ID'];
				$ultimoAcceso = $result['FECHA_ULTIMO_ACCESO'];
				$tiempoParaVencer = $result['TIEMPO_A_VENCER'];
				
				$con->liberarHandlerQuery($stmt);
				
				if ($varUsuarioId == "") {
					$errors['errcode'] = "DBI-1";
					$errors['errmsg'] = "La sesion ya no está activa.";
					$errors['srvmsg'] = "";
					$errors['debugmsg'] = "";
				}
			}
		}
	}
	unset($con);
		
	if ($varUsuarioId == "")
		echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '"}');
	else
		echo utf8_encode('{ultimoAcceso:"' . $ultimoAcceso . '", tiempoParaVencer:"' . $tiempoParaVencer . '"}');

?>
