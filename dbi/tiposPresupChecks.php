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
	$dml = 'select tp.TIPO_PRESUPUESTO_ID, tp.DESCRIPCION from TIPOS_PRESUPUESTOS tp 
			where tp.ESQUEMA = \'#esquema#\' and tp.SOCIEDAD_ID = \'#sociedad_id#\' #filtro_acceso# order by tp.TIPO_PRESUPUESTO_ID';
	$perfil_query = "";
	$resp_id = $_POST['resp_id'] . $_GET['resp_id'];
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
			
			$dml = str_replace("#esquema#", $infoSesion['esquema'], $dml);
			$dml = str_replace("#sociedad_id#", $infoSesion['sociedad_id'], $dml);
			
			if ($resp_id == "") {
				$dmlTodas = str_replace("#filtro_acceso#", "", $dml);
				$dml = str_replace("#filtro_acceso#", "", $dml);
			} else {
				$dmlTodas = str_replace("#filtro_acceso#", "", $dml);
				$filtro_acceso = "and tp.TIPO_PRESUPUESTO_ID in (select a.TIPO_PRESUPUESTO_ID from CMN_ACCESOS_PRESUPUESTOS a where a.RESPONSABILIDAD_ID = '" . $resp_id . "')";
				$dml = str_replace("#filtro_acceso#", $filtro_acceso, $dml);
			}
			
			if ($resp_id != "") {
				$stmt = $con->ejecutarQuery($dml);
				$errors = $con->getErrors();
			}
			if ( $errors['errcode'] == "" ) {
				$accionesPerfil = array();
				if ($resp_id != "") {
					while ($result = $con->getArrayResultadoQuery($stmt)) {
						$accionesPerfil['T'.$result['TIPO_PRESUPUESTO_ID']] = $result['DESCRIPCION'];
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
					$varSalida = $varSalida .  'items:[{ id:"T1", nombre:"Tipos Presupuesto", url:"blank.html", tipo:\'TipoPresup\', children: [';
					
					//loop para entregar todos los items:	
					$booPrimero = true;
					while ($result = $con->getArrayResultadoQuery($stmt)) {
							
						if ($booPrimero) 
							$booPrimero = false;
						else {
							$varSalida = $varSalida . ',';
						}
					
						if(is_null($accionesPerfil['T'.$result['TIPO_PRESUPUESTO_ID']])){
							$varSalida = $varSalida . '{ id:"' . $result['TIPO_PRESUPUESTO_ID'] . '", nombre:\''. $result['TIPO_PRESUPUESTO_ID'] . ' - ' . $result['DESCRIPCION'] . '\', tipo:\'Presupuesto\'}';						
						} else {
							$varSalida = $varSalida . '{ id:"' . $result['TIPO_PRESUPUESTO_ID'] . '", nombre:\''. $result['TIPO_PRESUPUESTO_ID'] . ' - ' . $result['DESCRIPCION'] . '\',checked:\'true\', tipo:\'Presupuesto\'}';
						}
					}
		
					//entrega cierre de lista de items:
					$varSalida = $varSalida . ']}]';
					
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


