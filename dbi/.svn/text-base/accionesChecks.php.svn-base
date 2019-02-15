<?php

    /************************************************* 
    PROCEDURE accionesChecks
    Devuelve en formato JSON todas las acciones disponibles en la aplicacion, incluyendo 'checked:true' en
	aquellas que tienen permiso
	parametros (pueden pasarse por POST o por GET!):
		sid:	Identificador de la sesión del usuario
		perfil(opcional):	Si se indica, acota las acciones pasadas a las que tenga disponibles el perfil
		
	Ejemplo de invocación: "http://localhost/testdojo/dbi/acciones.php?sid=99887766"

    IMPORTANTE: ¡¡¡Falta agregarle algun tipo de seguridad!!!!
				Falta escapar comillas dobles de los strings devueltos!!!

	24/8/2009	Esteban Lopez		Creacion version inicial
    *************************************************/

	//Kill the internal messages:
	//error_reporting(0);

	//Queries a ejecutar
	$dml = 'select g.GRUPO_MENU_ID, g.NOMBRE as NOMBRE_GRUPO, p.ORDEN, p.PTO_MENU_ID, p.NOMBRE as NOMBRE_PTO, 
			ac.ACCION_ID, ac.DESCRIPCION as NOMBRE_ACCION from CMN_PTOS_MENU p, CMN_GRUPOS_MENU g, CMN_MODULOS m, CMN_ACCIONES ac 
			where p.GRUPO_MENU_ID = g.GRUPO_MENU_ID and g.MODULO_ID = m.MODULO_ID and p.PTO_MENU_ID = ac.PTO_MENU_ID 
			and ac.LISTABLE = 1 and m.MODULO_ID = \'#modulo_id#\' #perfil_query# order by g.GRUPO_MENU_ID, p.ORDEN, ac.ACCION_ID';
	$perfil_query = "";
	$perfil_id = $_POST['perfil_id'] . $_GET['perfil_id'];
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
			$dml = str_replace("#RESP_ID#", $infoSesion['respId'], $dml);
			$dml = str_replace("#resp_id#", $infoSesion['respId'], $dml);
			
			$dml = str_replace("#modulo_id#", "1", $dml);
			
			if ($perfil_id == "") {
				$dmlTodas = str_replace("#perfil_query#", "", $dml);
				$dml = str_replace("#perfil_query#", "", $dml);
			} else {
				$dmlTodas = str_replace("#perfil_query#", "", $dml);
				$perfil_query = "and  ac.ACCION_ID in (select acce.ACCION_ID from CMN_ACCESOS acce where acce.PERFIL_ID = '" . $perfil_id . "')";
				$dml = str_replace("#perfil_query#", $perfil_query, $dml);
			}
			
			if ($perfil_id != "") {
				$stmt = $con->ejecutarQuery($dml);
				$errors = $con->getErrors();
			}
			if ( $errors['errcode'] == "" ) {
				$accionesPerfil = array();
				if ($perfil_id != "") {
					while ($result = $con->getArrayResultadoQuery($stmt)) {
						$accionesPerfil['A'.$result['ACCION_ID']] = $result['NOMBRE_ACCION'];
						$accionesPerfil['G'.$result['GRUPO_MENU_ID']] = $result['NOMBRE_GRUPO'];
						$accionesPerfil['P'.$result['PTO_MENU_ID']] = $result['NOMBRE_PTO'];
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
					$booNuevoGrupo = true;
					$booPrimero = true;
					$grupoActualId = -1;
					$booNuevoPto = true;
					$ptoActualId = -1;
					while ($result = $con->getArrayResultadoQuery($stmt)) {
						
						if ($booPrimero) {
							$grupoActualId = $result['GRUPO_MENU_ID'];
							$ptoActualId = $result['PTO_MENU_ID'];
						}
						
						if ($result['PTO_MENU_ID'] != $ptoActualId) {
							$varSalida = $varSalida . ']}';
							$booNuevoPto = true;
						}
						
						if ($result['GRUPO_MENU_ID'] != $grupoActualId) {
							$varSalida = $varSalida . ']}';
							$booNuevoGrupo = true;
						}
						
						if ($booPrimero) 
							$booPrimero = false;
						else {
							$varSalida = $varSalida . ',';
						}
						
						if ($booNuevoGrupo) {
							$grupoActualId = $result['GRUPO_MENU_ID'];
							if(is_null($accionesPerfil['G'.$grupoActualId])) {
								$varSalida = $varSalida . '{ id:"' . 'G'.$grupoActualId . '", nombre:\'' . $result['NOMBRE_GRUPO'] . '\', url:"blank.html", tipo:\'grupoMenu\', children: [';
							} else {
								$varSalida = $varSalida . '{ id:"' . 'G'.$grupoActualId . '", nombre:\'' . $result['NOMBRE_GRUPO'] . '\',checked:\'true\', url:"blank.html", tipo:\'grupoMenu\', children: [';
							}
							$booNuevoGrupo = false;
						}

						if ($booNuevoPto) {
							$ptoActualId = $result['PTO_MENU_ID'];
							if(is_null($accionesPerfil['P'.$ptoActualId])) {
								$varSalida = $varSalida . '{ id:"' . 'P'.$ptoActualId . '", nombre:\'' . $result['NOMBRE_PTO'] . '\', tipo:\'ptoMenu\', children: [';
							} else {
								$varSalida = $varSalida . '{ id:"' . 'P'.$ptoActualId . '", nombre:\'' . $result['NOMBRE_PTO'] . '\',checked:\'true\', tipo:\'ptoMenu\', children: [';
							}
							$booNuevoPto = false;
						}
						
						if(is_null($accionesPerfil['A'.$result['ACCION_ID']])){
							$varSalida = $varSalida . '{ id:"' . 'A'.$result['ACCION_ID'] . '", nombre:\''. $result['NOMBRE_ACCION'] . '\', tipo:\'accion\'}';						
						} else {
							$varSalida = $varSalida . '{ id:"' . 'A'.$result['ACCION_ID'] . '", nombre:\''. $result['NOMBRE_ACCION'] . '\',checked:\'true\', tipo:\'accion\'}';
						}
					}
					
					if ($result['PTO_MENU_ID'] != $ptoActualId) {
						$varSalida = $varSalida . ']}';
						$booNuevoPto = false;
					}
					
					if ($result['GRUPO_MENU_ID'] != $grupoActualId) {
						$varSalida = $varSalida . ']}';
						$booNuevoGrupo = true;
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


