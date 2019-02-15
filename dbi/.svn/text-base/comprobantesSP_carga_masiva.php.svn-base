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
	$con = null;
	$stmt = null;
	//Parametros
    $anio = $_POST['anio'] . $_GET['anio'];
    $mes = $_POST['mes'] . $_GET['mes'];
    $tipo_carga = 'IM';
	//Queries
	$dmls = array('dmlFillHeader' => "", 'dmlFillData' => "", 'dmlHeaderId' => "", 'dmlLoadData_CJ' => "");
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

		$datos = array();
        $valores = array();
        $booInvalid = false;
        
		$columnas = 'HEADER_ID,USR_ALTA,RESPONSABILIDAD_ID,ESQUEMA,SOCIEDAD_ID,TIPO_CARGA,CANAL_VENTAS,SUBREGION_ID,CLIENTE_ID,DEPOSITO_ID,MES_INFORMA,ANIO_INFORMA,OBSERVACIONES,TIPO_COMPROBANTE_TRUCK,CUENTA_ID,CECO_ID,PRODUCTO_ID,IMPORTE';

		$table_name = 'COMPROBANTESSP_CM_TEMP';
		$accionSql = 'I';
        
		require_once 'lib/ExcelReader/excel_reader2.php';
		$data = new Spreadsheet_Excel_Reader($tmpName);

		$cantFilas = $data->rowcount();
		$cantFilas = $cantFilas - 1;

		for($i=2;$i<=$cantFilas;$i++){
			$valores[1] = $data->val($i,'A');
			$valores[2] = $data->val($i,'B');
			$valores[3] = $data->val($i,'C');
			$valores[4] = $data->val($i,'D');
			$valores[5] = $data->val($i,'E');
			$valores[6] = $data->val($i,'F');
  			$valores[7] = $data->val($i,'G');
			$valores[8] = $data->val($i,'H');
            $valores[9] = $data->val($i,'I');
			$valores[10] = $data->val($i,'J');
			$valores[11] = $data->val($i,'K');
			$valores[12] = str_replace(',','.',$data->val($i,'L'));
			
            $nulos = 0;
            $booInvalid = false;
            for($j=1;$j<=12;$j++){
                if((is_null($valores[$j])) || ($valores[$j]=="")){
                    $nulos++;
                }

                /*if(($j!=1)&&($j!=8)&&($j!=4)&&($j!=6)&&($j!=7)&&($j!=11)){
                    if(is_numeric($valores[$j])){
                        null;
                    } else {
                        $booInvalid = true;
                    }
                } */
            }

            if($nulos < 12){
    			if ($booInvalid == false){
                    $listaValores = "";
                    $booPrimero = true;
                    foreach($valores as $valorLeido){
                        if($booPrimero){
    						$booPrimero = false;
    					} else {
    						$listaValores = $listaValores . ',';
    					}
                        $listaValores = $listaValores . $valorLeido;
                    }
    				$id = $i - 1;
    				$datos[$id] = array($accionSql,$listaValores);
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
    							$errors = $con->getErrors();
    							if ( $errors['errcode'] == "" ) {
    								$booErrorFillData = false;
						$i = 0;			
    								foreach($datos as $key => $data){
	
    									$dmlFillDataConParam = $dmls['dmlFillData'];
    									$dmlFillDataConParam  = str_replace("#header_id#", "$header_id", $dmlFillDataConParam );
    									$dmlFillDataConParam  = str_replace("#row_number#", $key, $dmlFillDataConParam );
    									$dmlFillDataConParam  = str_replace("#action#", $data[0], $dmlFillDataConParam );
    									$data[1] = $header_id . ',' . $infoSesion['usuarioId'] . ',' . $infoSesion['respId'] . ',' . $infoSesion['esquema'] . ',' . $infoSesion['sociedad_id'] . ',' . $tipo_carga . ',' . $data[1];
																																			
    									$dmlFillDataConParam  = str_replace("#data#", $data[1], $dmlFillDataConParam );
    									$con->ejecutarProcedure($dmlFillDataConParam);
    									$errors = $con->getErrors();
    									if ($errors['errcode'] != ""){
    										$booErrorFillData = true;
    									}

    								}
									
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

