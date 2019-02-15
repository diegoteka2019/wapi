<?php

    /************************************************* 
    PROCEDURE accionesChecks
    Devuelve en formato JSON todas las acciones disponibles en la aplicacion, incluyendo 'checked:true' en
	aquellas que tienen permiso
	parametros (pueden pasarse por POST o por GET!):
		sid:	Identificador de la sesión del usuario
		responsabilidad_id(opcional):	Si se indica, acota las subregiones pasadas a las que tenga disponibles la responsabilidad
		
	Ejemplo de invocación: "http://localhost/testdojo/dbi/subregionesChecks.php?sid=99887766"

    IMPORTANTE: ¡¡¡Falta agregarle algun tipo de seguridad!!!!
				Falta escapar comillas dobles de los strings devueltos!!!

	24/8/2009	Esteban Lopez		Creacion version inicial
    *************************************************/

	//Kill the internal messages:
	error_reporting(0);

	//Queries a ejecutar
	$dml = 'select r.RESPONSABILIDAD_ID, r.USUARIO_ID, r.PERFIL_ID, p.NOMBRE as NOMBRE_PERFIL from CMN_RESPONSABILIDADES r, CMN_PERFILES p 
			where r.PERFIL_ID = p.PERFIL_ID and r.ESQUEMA = \'#esquema#\' and r.SOCIEDAD_ID = \'#sociedad_id#\' 
			#filtro_acceso# order by r.USUARIO_ID, p.NOMBRE';
	$perfil_query = "";
	$tipo_presupuesto_id = $_POST['tipo_presupuesto_id'] . $_GET['tipo_presupuesto_id'];
	//Control de errores
	$errors = array('errcode' => "", 'errmsg' => "", 'srvmsg' => "", 'debugmsg' => "");
	//Info de sesion
	$sid = $_POST['sid'] . $_GET['sid'];
	$infoSesion = null;
	//Interfaz PHP-SQLServer
	$con = null;
	$stmt = null;
	$result = null;
	//Salida
	$varSalida = "";
	$json_id = "id";
	$json_label = "nombre";

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
						
			$dml = str_replace("\n", "", $dml);
			$dml = str_replace("\r", "", $dml);
			
			//acá reemplazar el tag #resp_id# con la responsabilidad de esa sesión
			/*$dml = str_replace("#RESP_ID#", $infoSesion['respId'], $dml);
			$dml = str_replace("#resp_id#", $infoSesion['respId'], $dml);*/
			
			$dml = str_replace("#modulo_id#", "1", $dml);
			$dml = str_replace("#esquema#", $infoSesion['esquema'], $dml);
			$dml = str_replace("#sociedad_id#", $infoSesion['sociedad_id'], $dml);
			
			if ($tipo_presupuesto_id == "") {
				$dmlTodas = str_replace("#filtro_acceso#", "", $dml);
				$dml = str_replace("#filtro_acceso#", "", $dml);
			} else {
				$dmlTodas = str_replace("#filtro_acceso#", "", $dml);
				$filtro_acceso = "and r.RESPONSABILIDAD_ID in (select a.RESPONSABILIDAD_ID from CMN_ACCESOS_PRESUPUESTOS a where a.TIPO_PRESUPUESTO_ID = '" . $tipo_presupuesto_id . "')";
				$dml = str_replace("#filtro_acceso#", $filtro_acceso, $dml);
			}

			if ($subregion_id != "") {
				$stmt = $con->ejecutarQuery($dml);
				$errors = $con->getErrors();
			}
			if ( $errors['errcode'] == "" ) {
				$accionesPerfil = array();
				if ($subregion_id != "") {
					while ($result = $con->getArrayResultadoQuery($stmt)) {
						$accionesPerfil['U'.$result['USUARIO_ID']] = $result['USUARIO_ID'];
						$accionesPerfil['R'.$result['RESPONSABILIDAD_ID']] = $result['NOMBRE_PERFIL'];
					}
					$con->liberarHandlerQuery($stmt);
				}

				$stmt = $con->ejecutarQuery($dmlTodas);
				$errors = $con->getErrors();
				if ( $errors['errcode'] == "" ) {  					//parse ok.
					
					//entrega de campos id & label
					$varSalida = 'identifier:\'' . $json_id . '\',';
					$varSalida = $varSalida . 'label:\'' . $json_label . '\',';
					//iniciar entrega de lista de items:
					$varSalida = $varSalida .  'items:[';
					
					//loop para entregar todos los items:	
					$booPrimero = true;
					$booNuevoPto = true;
					$ptoActualId = -1;
					while ($result = $con->getArrayResultadoQuery($stmt)) {
						
						if ($booPrimero) {
							$ptoActualId = $result['USUARIO_ID'];
						}
						
						if ($result['USUARIO_ID'] != $ptoActualId) {
							$varSalida = $varSalida . ']}';
							$booNuevoPto = true;
						}
								
						if ($booPrimero) 
							$booPrimero = false;
						else {
							$varSalida = $varSalida . ',';
						}
						
						if ($booNuevoPto) {
							$ptoActualId = $result['USUARIO_ID'];
							if(is_null($accionesPerfil['U'.$ptoActualId])) {
								$varSalida = $varSalida . '{ id:"U' . $ptoActualId . '", nombre:\'' . $ptoActualId . '\', tipo:\'usuario\', children: [';
							} else {
								$varSalida = $varSalida . '{ id:"U' . $ptoActualId . '", nombre:\'' . $ptoActualId . '\',checked:\'true\', tipo:\'usuario\', children: [';
							}
							$booNuevoPto = false;
						}
						
						if(is_null($accionesPerfil['R'.$result['RESPONSABILIDAD_ID']])){
							$varSalida = $varSalida . '{ id:"' . $result['RESPONSABILIDAD_ID'] . '", nombre:\''. $result['NOMBRE_PERFIL'] . '\', tipo:\'perfil\'}';						
						} else {
							$varSalida = $varSalida . '{ id:"' . $result['RESPONSABILIDAD_ID'] . '", nombre:\''. $result['NOMBRE_PERFIL'] . '\',checked:\'true\', tipo:\'perfil\'}';
						}
					}
					
					if ($result['USUARIO_ID'] != $ptoActualId) {
						$varSalida = $varSalida . ']}';
						$booNuevoPto = false;
					}
									
					//entrega cierre de lista de items:
					$varSalida = $varSalida . ']';
					
					$con->liberarHandlerQuery($stmt);
					
				}
			}
		}

	}
	unset($con);
	
	//Devuelve json con codigo de error al formulario
	if ($varSalida == "")
		echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '"}');
	else
		echo utf8_encode('{' . $varSalida . '}');
	
?>


