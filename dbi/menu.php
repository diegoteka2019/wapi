<?php

    /************************************************* 
    PROCEDURE menu
    Devuelve en formato JSON el menu de la aplicacion, generado dinamicamente desde la BD
	parametros (pueden pasarse por POST o por GET!):
		sid:	Identificador de la sesión del usuario
	
	Ejemplo de invocación: "http://localhost/testdojo/dbi/menu.php?sid=99887766"

    IMPORTANTE: ¡¡¡Falta agregarle algun tipo de seguridad!!!!
				Falta escapar comillas dobles de los strings devueltos!!!
	
	15/7/2009	Esteban Lopez		Creacion version inicial
	03/8/2009	Esteban Lopez		Definicion del dml directamente en el PHP
	18/8/2009	Esteban Lopez		Agregada interfaz ConexionDBI
    *************************************************/

	// Kill the internal messages:
	error_reporting(0); 

	//Queries a ejecutar
	$dml = 'select g.GRUPO_MENU_ID, g.NOMBRE as NOMBRE_GRUPO, p.ORDEN, p.PTO_MENU_ID, p.NOMBRE 
			as NOMBRE_PTO, p.URL from CMN_PTOS_MENU p, CMN_GRUPOS_MENU g, CMN_MODULOS m where 
			p.GRUPO_MENU_ID = g.GRUPO_MENU_ID and g.MODULO_ID = m.MODULO_ID and p.PTO_MENU_ID in 
			(select a.PTO_MENU_ID from CMN_ACCIONES a, CMN_ACCESOS ac, CMN_PERFILES pf, 
			CMN_RESPONSABILIDADES r where r.PERFIL_ID = ac.PERFIL_ID and ac.ACCION_ID = a.ACCION_ID 
			and r.RESPONSABILIDAD_ID = \'#resp_id#\' ) and m.MODULO_ID in (select pf2.MODULO_ID from 
			CMN_PERFILES pf2, CMN_RESPONSABILIDADES r2 where r2.PERFIL_ID = pf2.PERFIL_ID and 
			r2.RESPONSABILIDAD_ID = \'#resp_id#\') order by g.GRUPO_MENU_ID, p.ORDEN';
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
				while ($result = $con->getArrayResultadoQuery($stmt)) {
					
					if ($booPrimero) $grupoActualId = $result['GRUPO_MENU_ID'];
					
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
						$varSalida = $varSalida . '{ id:"G' . $grupoActualId . '", nombre:\'' . $result['NOMBRE_GRUPO'] . '\', url:"blank.html", tipo:\'grupoMenu\', children: [';
						$booNuevoGrupo = false;
					}

					$url = $result['URL'];
					$pto = $result['PTO_MENU_ID'];
					
					if($modoLogin == 'SSO'){
						if($pto != 8){
							$varSalida = $varSalida . '{ id:' . $grupoActualId . $pto . ', nombre:\''. $result['NOMBRE_PTO'] . '\', tipo:\'ptoMenu\', url:\'' . $url . '\'}';
						} else {
							$varSalida = substr($varSalida,0,-1);
						}
					} else {
						$varSalida = $varSalida . '{ id:' . $grupoActualId . $pto . ', nombre:\''. $result['NOMBRE_PTO'] . '\', tipo:\'ptoMenu\', url:\'' . $url . '\'}';
					}
					
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
	unset($con);
	
	//Devuelve json con codigo de error al formulario
	if ($varSalida == "")
		echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '"}');
	else
		echo utf8_encode('{' . $varSalida . '}');
	
?>
