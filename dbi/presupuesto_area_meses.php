<?php

    /************************************************* 
    PROCEDURE Subregiones_Habilitadas
    Invoca el procedimiento PL/SQL que graba las habilitaciones de subregiones pasadas
	parametros (pueden pasarse por POST o por GET!):
		sid:	Identificador de la sesión del usuario

	22/01/2010	Esteban Lopez		Creacion version inicial
    *************************************************/

	// Kill the internal messages:
	error_reporting(0);

	//Parametros
	$accionesPerfil = array();
	$accionid = '11404';
	$modulo_id = 1;
	$area_id = $_POST['area_id'] . $_GET['area_id'];
	$division_id = $_POST['division_id'] . $_GET['division_id'];
	$marca_id = $_POST['marca_id'] . $_GET['marca_id'];
	$tipo_presupuesto_id = $_POST['tipo_presupuesto_id'] . $_GET['tipo_presupuesto_id'];
	$anio = $_POST['anio'] . $_GET['anio'];
	//Control de errores
	$errors = array('errcode' => "", 'errmsg' => "", 'srvmsg' => "", 'debugmsg' => "");
	//Info de sesion
	$sid = $_POST['sid'] . $_GET['sid'];
	$infoSesion = null;
	//Interfaz PHP-SQLServer
	$con = null;
	$stmt = null;
	$result = null;

	$meses = array('01' => array('',0,0,0),
				   '02' => array('',0,0,0),
				   '03' => array('',0,0,0),
				   '04' => array('',0,0,0),
				   '05' => array('',0,0,0),
				   '06' => array('',0,0,0),
				   '07' => array('',0,0,0),
				   '08' => array('',0,0,0),
				   '09' => array('',0,0,0),
				   '10' => array('',0,0,0),
				   '11' => array('',0,0,0),
				   '12' => array('',0,0,0));	
	
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
			$seguridad_query = 'select a.ACCION_ID as ID_ACCION, a.NOMBRE as NOMBRE_ACCION from CMN_ACCIONES a, CMN_ACCESOS ac, CMN_RESPONSABILIDADES r ';
			$seguridad_query = $seguridad_query . 'where r.PERFIL_ID = ac.PERFIL_ID and ac.ACCION_ID = a.ACCION_ID and r.RESPONSABILIDAD_ID = ' . $infoSesion['respId'];
			$stmt = $con->ejecutarQuery($seguridad_query);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {
				while ($result = $con->getArrayResultadoQuery($stmt)) {
					$accionesPerfil['A'.$result['ID_ACCION']] = $result['NOMBRE_ACCION'];
				}
				$con->liberarHandlerQuery($stmt);
				if(is_null($accionesPerfil['A'.$accionid])) {
					$errors['errcode'] = "DBI-2";
					$errors['errmsg'] = "No tiene permisos para realizar esta accion";
					$errors['srvmsg'] = "";
					$errors['debugmsg'] = "";
				} else {
					
					$dml = "SELECT PRESUPUESTO_ID,MES,IMPORTE,VOLUMEN_VENTAS,PRECIO_HTL
							  FROM PRESUPUESTOS WHERE AREA_ID = $area_id 
								AND trim(DIVISION_ID) = trim('$division_id') 
								AND trim(MARCA_ID) = trim('$marca_id') AND ANIO = '$anio'
								AND TIPO_PRESUPUESTO_ID = '$tipo_presupuesto_id'
								AND ESQUEMA = '#esquema#' AND SOCIEDAD_ID = '#sociedad_id#'";
								
					$dml = str_replace("#esquema#", $infoSesion['esquema'], $dml);
					$dml = str_replace("#sociedad_id#", $infoSesion['sociedad_id'], $dml);

					$stmt = $con->ejecutarQuery($dml);

					$errors = $con->getErrors();
					if ($errors['errcode'] == "") {
						$booPrimero = true;
						while ($result = $con->getArrayResultadoQuery($stmt)) {
							if ($booPrimero) {
								$booPrimero = false;
							}
							$mesDB = $result['MES'];
							$meses[$mesDB] = array($result['PRESUPUESTO_ID'],$result['IMPORTE'],$result['VOLUMEN_VENTAS'],$result['PRECIO_HTL']);
						}
					}
					$con->liberarHandlerQuery($stmt);
				}
			}
		}
	}
	unset($con);
	
	if ($errors['errcode'] == "") {
		//entrega de campos id & label
		$varSalida = "identifier:\"mes\",";
		$varSalida = $varSalida . "label:\"mes\",";
		//iniciar entrega de lista de items:
		$varSalida = $varSalida .  'items:[';

		//loop para entregar todos los items:
		$booPrimero = true;
		foreach ($meses as $mesId => $mesData) {
			if ($booPrimero) 
				$booPrimero = false;
			else
				$varSalida = $varSalida . ',';

			$varSalida = $varSalida . '{"presupuesto_id":"'.$mesData[0].'","mes":"'.$mesId.'","importe":"'.$mesData[1].'","volumen_ventas":"'.$mesData[2].'","precio_htl":"'.$mesData[3].'"}';
		}
	
		//entrega cierre de lista de items:
		$varSalida = $varSalida . ']';
		
		echo utf8_encode('{' . $varSalida . '}');
		
	} else {	
		echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '"}');
	}
?>


