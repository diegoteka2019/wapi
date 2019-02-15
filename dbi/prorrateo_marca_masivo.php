<?php
	
	// Kill the internal messages:
	//error_reporting(0);
	
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
	$con = null;
	$stmt = null;
	//Parametros
	$subregion_id = $_POST['subregion_id'] . $_GET['subregion_id'];
    $division_id = $_POST['division_id'] . $_GET['division_id'];
	$marca = $_POST['marca'] . $_GET['marca'];
	//Queries
	$dmls = array('dmlFillHeader' => "", 'dmlFillData' => "", 'dmlHeaderId' => "");
	$dmlidFillHeader = '10909';
	$dmlidFillData = '10910';
	$dmlidHeaderId = '10911';
    $dmlidLoadData_CJ = '10912';
	//Salida
	$varSalida = "";
	$ticket = false;

	
	if($_FILES['userfile']['size'] > 0)
	{
		$fileName = $_FILES['userfile']['name'];
		$tmpName  = $_FILES['userfile']['tmp_name'];
		$fileSize = $_FILES['userfile']['size'];
		$fileType = $_FILES['userfile']['type'];

		//$queries = array();
		$datos = array();
		$productos = "";
		$valores = "";
		$total = 0;

		$columnas = 'USR_ALTA,ESQUEMA,SOCIEDAD_ID,SUBREGION_ID,MARCA_ID,DIVISION_ID,PRODUCTO_ID,PORCENTAJE';
		$table_name = 'PORCENTAJES_MARCAS';
		$accionSql = 'MI';
        
		require_once 'lib/ExcelReader/excel_reader2.php';
		$data = new Spreadsheet_Excel_Reader($tmpName);

		$cantFilas = $data->rowcount();
		$cantFilas = $cantFilas - 1;

		for($i=2;$i<=$cantFilas;$i++){
			//$query = "INSERT INTO PORCENTAJE_MARCAS(SUBREGION_ID,MARCA_ID,DIVISION_ID,PRODUCTO_ID,PORCENTAJE) VALUES($subregion_id,$marca,";
			$valor = $data->val($i,'A');
			$valor2 = $data->val($i,'B');
			$valor2 = substr($valor2,0,-1);
			//$total = $total + $valor2;
			$booPrimero = true;
			if (($valor != null)&&($valor != "")){
				if(($valor2!="")&&($valor2 > 0)){
					//$query = $query . "$valor" . ",";
					//$query = $query . "$valor2)";
					//$queries[] = $query;
					//$total = $total + $valor2;
					if($booPrimero){
						$booPrimero = false;
					} else {
						$productos = $productos . ',';
						$valores = $valores . ',';
					}
					$productos = $productos . "$valor";
					$valores = $valores . "$valor2";
					$id = $i - 1;
					$datos[$id] = array($accionSql,"$valor,$valor2");
				}
			}
		}

        if (count($datos) > 0) {
            //abrir conexión
    		require 'DBconfig.php'; // Carga la variable $db con el string de conexión a la DB. 
    		require 'DBI_Util.php'; 
    		
    		$con = getConexionDBI2($dbInfo[substr($sid,0,2)]);
    		$errors = $con->getErrors();
    		if ( $errors['errcode'] == "" ) {
    			$infoSesion = $con->verificarSesion($sid);
    			if (is_null($infoSesion['usuarioId'])) { 					//si usuario es nulo es que la sesión no existe
    				$errors['errcode'] = "DBI-1";
    				$errors['errmsg'] = "La sesion ya no está activa.";
    				$errors['srvmsg'] = "";
    				$errors['debugmsg'] = "";
    			} else {									//si volvió usuario es que la sesión está viva
    
    				//con el parametro dmlid buscar el dml a ejecutar:
    				$seguridad_query = 'select da.DML_ID from CMN_DML_ACCIONES da, CMN_ACCESOS ac, CMN_RESPONSABILIDADES r ';
    				$seguridad_query = $seguridad_query . 'where r.PERFIL_ID = ac.PERFIL_ID and ac.ACCION_ID = da.ACCION_ID and r.RESPONSABILIDAD_ID = ' . $infoSesion['respId'];
    				
    				$dml_query = 'select TEXTO as TEXTOC from CMN_DBI_DMLS ';
    				$dml_query = $dml_query . 'where DML_ID in (' . $dmlidFillHeader . ',' . $dmlidFillData . ',' . $dmlidHeaderId . ',' . $dmlidLoadData_CJ . ') and TIPO = \'E\' and DML_ID in ('. $seguridad_query . ') order by DML_ID';
    
    				$stmt = $con->ejecutarQuery($dml_query);
    				$errors = $con->getErrors();
    				if ( $errors['errcode'] == "" ) {  		
    				
    					$result = $con->getArrayResultadoQuery($stmt);
    					$dmls['dmlFillHeader'] = $result['TEXTOC'];
    					$result = $con->getArrayResultadoQuery($stmt);
    					$dmls['dmlFillData'] = $result['TEXTOC'];
    					$result = $con->getArrayResultadoQuery($stmt);
    					$dmls['dmlHeaderId'] = $result['TEXTOC'];
        				$result = $con->getArrayResultadoQuery($stmt);
    					$dmls['dmlLoadData_CJ'] = $result['TEXTOC'];
    					
    					$con->liberarHandlerQuery($stmt);
    					
    					if (($dmls['dmlFillHeader'] == "")||($dmls['dmlFillData'] == "")||($dmls['dmlHeaderId'] == "")||($dmls['dmlLoadData_CJ'] == "")) {
    						$errors['errcode'] = "DBI-2";
    						$errors['errmsg'] = "No se encontró el dml (no existe o la sesión no tiene permisos)";
    						$errors['srvmsg'] = "";
    						$errors['debugmsg'] = "";
    					} else {
    						
    						foreach($dmls as $name => $dml){
    							$dmls[$name] = str_replace("\n", "", $dml);
    							$dmls[$name] = str_replace("\r", "", $dml);
    							$dmls[$name] = str_replace("#resp_id#", $infoSesion['respId'], $dml);
    							$dmls[$name] = str_replace("#esquema#", $infoSesion['esquema'], $dml);
    							$dmls[$name] = str_replace("#sociedad_id#", $infoSesion['sociedad_id'], $dml);
    							$dmls[$name] = str_replace("#usraudit#", $infoSesion['usuarioId'], $dml);
    						}
    
    						$stmt = $con->ejecutarQuery($dmls['dmlHeaderId']);
    						$errors = $con->getErrors();
    						if ( $errors['errcode'] == "" ) {  
    							$result = $con->getArrayResultadoQuery($stmt);
    							$header_id = $result['NEXTVAL'];
    							
    							$dmls['dmlFillHeader'] = str_replace("#header_id#", "$header_id", $dmls['dmlFillHeader']);
    							$dmls['dmlFillHeader'] = str_replace("#table_name#", $table_name, $dmls['dmlFillHeader']);
    							$dmls['dmlFillHeader'] = str_replace("#columnas#", $columnas, $dmls['dmlFillHeader']);
    					
    							$con->ejecutarProcedure($dmls['dmlFillHeader']);
    							//$varSalida =  '"dml":"' . $dmls['dmlFillHeader'] . '"';
    							$errors = $con->getErrors();
    							if ( $errors['errcode'] == "" ) {
    								$booErrorFillData = false;
    								//$varSalida =  '"dmls":"';
    								foreach($datos as $key => $data){
    									$dmlFillDataConParam = $dmls['dmlFillData'];
    									$dmlFillDataConParam  = str_replace("#header_id#", "$header_id", $dmlFillDataConParam );
    									$dmlFillDataConParam  = str_replace("#row_number#", $key, $dmlFillDataConParam );
    									$dmlFillDataConParam  = str_replace("#action#", $data[0], $dmlFillDataConParam );
    									$data[1] = $infoSesion['usuarioId'] . ',' . $infoSesion['esquema'] . ',' . $infoSesion['sociedad_id'] . ',' . $subregion_id . ',' . $marca . ',' . $division_id . ',' . $data[1];
    									$dmlFillDataConParam  = str_replace("#data#", $data[1], $dmlFillDataConParam );
    									$con->ejecutarProcedure($dmlFillDataConParam);
    									//$varSalida =  $varSalida . ' - ' . $dmlFillDataConParam;
    									$errors = $con->getErrors();
    									if ($errors['errcode'] != ""){
    										$booErrorFillData = true;
    									}
    								}
    								//$varSalida =  $varSalida . '"';
    								if($booErrorFillData == true){
    									$errors['errcode'] = "CM-1";
    									$errors['errmsg'] = "Error durante la carga de la plantilla";
    									$errors['srvmsg'] = "";
    									$errors['debugmsg'] = "";		
    								} else {
                                        $dmls['dmlLoadData_CJ'] = str_replace("#header_id#", "$header_id", $dmls['dmlLoadData_CJ']);
    								    $ticket = $con->ejecutarProcedureLogueado($dmls['dmlLoadData_CJ']);
                    					$errors = $con->getErrors();
                    					if($ticket != false){
                    						$varSalida = 'ticket_id:"'.$ticket.'"';
                    					}
    								}
    							}
    						}
    					}
    				}
    			}
    		}
    		unset($con);
        } else {
            $errors['errcode'] = "CM-2";
    		$errors['errmsg'] = "No se encontraron datos para procesar";
    		$errors['srvmsg'] = "";
    		$errors['debugmsg'] = "";
        }
	} else {
		$errors['errcode'] = "CM-1";
		$errors['errmsg'] = "Error durante la subida de la plantilla";
		$errors['srvmsg'] = "";
		$errors['debugmsg'] = "";	
	}
	
	if ($varSalida == "")	
		echo utf8_encode('<textarea>{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", sid:"' . $sid . '"}</textarea>');
    else
		echo utf8_encode('<textarea>{' . $varSalida . '}</textarea>');
	
?>

