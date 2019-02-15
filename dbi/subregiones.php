<?php

    /************************************************* 
    PROCEDURE menu
    Devuelve en formato JSON las subregiones disponibles en la aplicacion, generado dinamicamente desde la BD
	parametros (pueden pasarse por POST o por GET!):
		sid:	Identificador de la sesión del usuario
		responsabilidad_id(opcional):	Si se indica, acota las subregiones pasadas a las que tenga disponibles la responsabilidad
		
	Ejemplo de invocación: "http://localhost/testdojo/dbi/subregiones.php?sid=99887766"

    IMPORTANTE: ¡¡¡Falta agregarle algun tipo de seguridad!!!!
				Falta escapar comillas dobles de los strings devueltos!!!

	04/8/2009	Esteban Lopez		Creacion version inicial
	18/8/2009	Esteban Lopez		Agregada interfaz ConexionDBI
    *************************************************/

	// Kill the internal messages:
	error_reporting(0);

	//Queries a ejecutar
	$dml = 'select v.AREA_ID, v.AREA_ABREV, v.REGION_ID, v.REGION_ABREV, v.SUB_REGION_ID, v.SUB_REGION_ABREV from CMN_AREAS_REG_SUBREG_V v 
			where v.ESQUEMA = \'#esquema#\' and v.SOCIEDAD_ID = \'#sociedad_id#\' #filtro_acceso# order by v.AREA_ID,v.REGION_ID,v.SUB_REGION_ID';
	$filtro_acceso = "";
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
				$dml = str_replace("#filtro_acceso#", "", $dml);
			} else {
				$filtro_acceso = "and v.SUB_REGION_ID in (select a.SUB_REGION_ID from CMN_ACCESOS_DATOS a where a.RESPONSABILIDAD_ID = '" . $resp_id . "')";
				$dml = str_replace("#filtro_acceso#", $filtro_acceso, $dml);
			}
			
			$stmt = $con->ejecutarQuery($dml);
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
						$grupoActualId = $result['AREA_ID'];
						$ptoActualId = $result['REGION_ID'];
					}
					
					if ($result['REGION_ID'] != $ptoActualId) {
						$varSalida = $varSalida . ']}';
						$booNuevoPto = true;
					}
					
					if ($result['AREA_ID'] != $grupoActualId) {
						$varSalida = $varSalida . ']}';
						$booNuevoGrupo = true;
					}
					
					if ($booPrimero) 
						$booPrimero = false;
					else {
						$varSalida = $varSalida . ',';
					}
					
					if ($booNuevoGrupo) {
						$grupoActualId = $result['AREA_ID'];
						$varSalida = $varSalida . '{ id:"' . 'A'.$grupoActualId . '", nombre:\'' . $result['AREA_ID'] . ' - ' . $result['AREA_ABREV'] . '\', url:"blank.html", tipo:\'Area\', children: [';
						$booNuevoGrupo = false;
					}

					if ($booNuevoPto) {
						$ptoActualId = $result['REGION_ID'];
						$varSalida = $varSalida . '{ id:"' . 'R'.$ptoActualId . '", nombre:\'' . $result['REGION_ID'] . ' - ' . $result['REGION_ABREV'] . '\', tipo:\'Region\', children: [';
						$booNuevoPto = false;
					}
						
					$varSalida = $varSalida . '{ id:"' . $result['SUB_REGION_ID'] . '", nombre:\'' . $result['SUB_REGION_ID'] . ' - ' . $result['SUB_REGION_ABREV'] . '\', tipo:\'Subregion\'}';						
					
				}
				
				if(!$booPrimero){
					if ($result['REGION_ID'] != $ptoActualId) {
						$varSalida = $varSalida . ']}';
						$booNuevoPto = false;
					}
					
					if ($result['AREA_ID'] != $grupoActualId) {
						$varSalida = $varSalida . ']}';
						$booNuevoGrupo = true;
					}
				}
				
				//entrega cierre de lista de items:
				$varSalida = $varSalida . ']';
				
				$con->liberarHandlerQuery($stmt);
				
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


