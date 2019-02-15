<?php
	
	// Kill the internal messages:
	error_reporting(0);
	//Queries a ejecutar
	$seguridad_query = "";
	$dml_query = "";
	$dml = "";
	//Control de errores
	$errors = array('errcode' => "", 'errmsg' => "", 'srvmsg' => "", 'debugmsg' => "");
	//Info de sesion
	$sid = $_POST['sid'] . $_GET['sid'];
	$infoSesion = null;
	//Interfaz PHP-DBI
	$result = null;
 	$result2 = null;
	$con = null;
	$stmt = null;
	$stmt2 = null;
	//Queries
	$dmls = array('dmlCantidad' => "",'dmlPeso' => "");
	$dmlidCantidad = '12904';
	$dmlidPeso = '12905';
	//Parametros
	$tablas = array("ACREDITACIONES" => array(0,0),
					"PLANES_ESPECIALES" => array(0,0), 
					"COMPROBANTES_SP" => array(0,0));
	$cantTablas = 3;
	$meses = $_POST['meses'] . $_GET['meses'];
	//Salida
	$varSalida = "";

    //abrir conexión
	require 'DBconfig.php'; // Carga la variable $db con el string de conexión a la DB. 
	require 'DBI_Util.php'; 
	
	$con = getConexionDBI2($dbInfo[substr($sid,0,2)]);
	$errors = $con->getErrors();
	if ( $errors['errcode'] == "" ) {
		$infoSesion = $con->verificarSesion($sid);
		if (is_null($infoSesion['usuarioId'])) {      //si usuario es nulo es que la sesión no existe
			$errors['errcode'] = "DBI-1";
			$errors['errmsg'] = "La sesion ya no está activa.";
			$errors['srvmsg'] = "";
			$errors['debugmsg'] = "";
		} else {                                      //si volvió usuario es que la sesión está viva

			//con el parametro dmlid buscar el dml a ejecutar:
			$seguridad_query = 'select da.DML_ID from CMN_DML_ACCIONES da, CMN_ACCESOS ac, CMN_RESPONSABILIDADES r ';
			$seguridad_query = $seguridad_query . 'where r.PERFIL_ID = ac.PERFIL_ID and ac.ACCION_ID = da.ACCION_ID and r.RESPONSABILIDAD_ID = ' . $infoSesion['respId'];
			
			$dml_query = 'select TEXTO as TEXTOC from CMN_DBI_DMLS ';
			$dml_query = $dml_query . 'where DML_ID in (' . $dmlidCantidad . ',' . $dmlidPeso . ') and TIPO = \'Q\' and DML_ID in ('. $seguridad_query . ') order by DML_ID';

			$stmt = $con->ejecutarQuery($dml_query);
			$errors = $con->getErrors();
			if ( $errors['errcode'] == "" ) {  		
			
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlCantidad'] = $result['TEXTOC'];
				$result = $con->getArrayResultadoQuery($stmt);
				$dmls['dmlPeso'] = $result['TEXTOC'];
				
				$con->liberarHandlerQuery($stmt);
				
				if (($dmls['dmlCantidad'] == "")||($dmls['dmlPeso'] == "")) {
					$errors['errcode'] = "DBI-2";
					$errors['errmsg'] = "No se encontró el dml (no existe o la sesión no tiene permisos)";
					$errors['srvmsg'] = "";
					$errors['debugmsg'] = "";
				} else {
					
					foreach($dmls as $name => $dml){
						$dmls[$name] = str_replace("\n", "", $dmls[$name]);
						$dmls[$name] = str_replace("\r", "", $dmls[$name]);
						$dmls[$name] = str_replace("#resp_id#", $infoSesion['respId'], $dmls[$name]);
						$dmls[$name] = str_replace("#esquema#", $infoSesion['esquema'], $dmls[$name]);
						$dmls[$name] = str_replace("#sociedad_id#", $infoSesion['sociedad_id'], $dmls[$name]);
						$dmls[$name] = str_replace("#usraudit#", $infoSesion['usuarioId'], $dmls[$name]);
                        
						$dmls[$name] = str_replace("#meses#", $meses, $dmls[$name]);
						
						/*$i = 1;
						foreach($tablas as $tablan => $tarray){
							$dmls[$name] = str_replace("#tabla" . $i . "#", $tablan, $dmls[$name]);
							$i++;
						}*/

					}
                    
					//Primero obtener la cantidad de registros a depurar de todas las tablas
					$stmt = $con->ejecutarQuery($dmls['dmlCantidad']);
					$errors = $con->getErrors();
					if ( $errors['errcode'] == "" ) {
						while ($result = $con->getArrayResultadoQuery($stmt)) {
							$tablas[$result["TABLA"]][0] = $result["CANT"];
						}
						
						//Obtener el peso total de los adjuntos a depurar
						$stmt2 = $con->ejecutarQuery($dmls['dmlPeso']);
						$errors = $con->getErrors();
						if ( $errors['errcode'] == "" ){
							while ($result2 = $con->getArrayResultadoQuery($stmt2)) {
								$tablas[$result2["TABLA"]][1] = $result2["PESO"];
							}
							$con->liberarHandlerQuery($stmt2);
							
							//entrega de campos id & label
							$varSalida = "identifier:\"tabla\",";
							$varSalida = $varSalida . "label:\"tabla\",";
							//iniciar entrega de lista de items:
							$varSalida = $varSalida .  'items:[';
							//loop para entregar todos los items:
							$booPrimero = true;
							foreach($tablas as $id => $tarray) {
								if ($booPrimero) {
									$booPrimero = false;
								} else {
									$varSalida = $varSalida . ',';
								}
								
								if (($tarray[1] < 1) && ($tarray[1] > 0)) {
									$strPeso = $tarray[1];
									$tarray[1] = "0$strPeso";
								}
								
								$varSalida = $varSalida . '{"tabla":"' . $id . '","cant_depurar":"'. $tarray[0] . '","peso":"' . $tarray[1] . '"}';
							}
							//entrega cierre de lista de items:
							$varSalida = $varSalida . ']';
						}
						
						$con->liberarHandlerQuery($stmt);
					}
				}
			}
		}
	}
	unset($con);
	
	if ($varSalida == "")	
		echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", sid:"' . $sid . '"}');
    else
		echo utf8_encode('{' . $varSalida . '}');
	
?>