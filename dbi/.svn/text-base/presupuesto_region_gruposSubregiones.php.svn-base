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
	$accionid = '13304';

    $presupuesto_id = $_POST['presupuesto_id'] . $_GET['presupuesto_id'];
	$area_id = $_POST['area_id'] . $_GET['area_id'];
    $tipo_presupuesto_id = $_POST['tipo_presupuesto_id'] . $_GET['tipo_presupuesto_id'];
    $negocio_id = $_POST['negocio_id'] . $_GET['negocio_id'];
	$division_id = 998;
    $mes = $_POST['mes'] . $_GET['mes'];
    $anio = $_POST['anio'] . $_GET['anio'];
	//$marca_id = $_POST['marca_id'] . $_GET['marca_id'];
	$mesActual = date("m");
	$anioActual = date("Y");
	//Control de errores
	$errors = array('errcode' => "", 'errmsg' => "", 'srvmsg' => "", 'debugmsg' => "");
	//Info de sesion
	$sid = $_POST['sid'] . $_GET['sid'];
	$infoSesion = null;
	//Interfaz PHP-SQLServer
	$con = null;
	$stmt = null;
	$result = null;

    $subpresupuestos = array();

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
					
                    $esquema = $infoSesion['esquema'];
                    $sociedad_id = $infoSesion['sociedad_id'];
                    $resp_id = $infoSesion['respId'];
                    
					if (($anio == $anioActual && $mes >= $mesActual) || ($anio > $anioActual)) {
						$dmlSubregiones = "SELECT sr.SUB_REGION_ID, sr.SUB_REGION_ABREV 
											  FROM MGC_REGIONES_FILT_V r, MGC_SUB_REGIONES_FILT_V sr
											 WHERE sr.RESPONSABILIDAD_ID = '$resp_id'
											   AND sr.ESQUEMA = '$esquema'
											   AND sr.SOCIEDAD_ID = '$sociedad_id'
											   AND r.REGION_ID = sr.REGION_ID
											   AND r.ESQUEMA = sr.ESQUEMA
											   AND r.SOCIEDAD_ID = sr.SOCIEDAD_ID
											   AND r.RESPONSABILIDAD_ID = sr.RESPONSABILIDAD_ID
											   AND r.AREA_ID = '$area_id'
											   AND sr.SUB_REGION_ID in (SELECT SUBREGION_ID FROM SUBREGIONES_HABILITADAS
																		 WHERE ESQUEMA = sr.ESQUEMA
																		   AND SOCIEDAD_ID = sr.SOCIEDAD_ID AND HABILITADA = 1)";
                    
						$stmt = $con->ejecutarQuery($dmlSubregiones);
						$errors = $con->getErrors();
						if ($errors['errcode'] == "") {                   
							while ($result = $con->getArrayResultadoQuery($stmt)) {
								$subpresupuestos[$result['SUB_REGION_ID']] = array("",$result['SUB_REGION_ABREV'],0,0,0,0,0);
							}
							
							if($presupuesto_id == ""){
								$dml = "SELECT NULL AS SUBPRESUPUESTO_ID,
											   sr.SUB_REGION_ID AS SUBREGION_ID,
											   sr.SUB_REGION_ABREV,
											   0 AS IMPORTE,
											   0 AS VOLUMEN_VENTAS,
											   0 AS PRECIO_HTL,
											   (select nvl(sum(pp.importe),0) 
												  from propuestas pr,propuestas_productos pp
												 where pr.AREA_ID = '$area_id'
												   and pr.SUBREGION_ID = sr.SUB_REGION_ID
												   and pr.TIPO_PRESUPUESTO_ID = '$tipo_presupuesto_id'
												   and pr.ANIO = '$anio'
												   and pr.MES = '$mes'
												   and trim(pr.DIVISION_ID) = $division_id
												   and pr.NEGOCIO_ID = $negocio_id
												   and pr.ESQUEMA = '$esquema'
												   and pr.SOCIEDAD_ID = '$sociedad_id'
												   and pr.estado in ('EA','EW','AW')
												   and pp.PROPUESTA_ID = pr.PROPUESTA_ID) as PROP,
											   0 as DISP
										   FROM MGC_SUB_REGIONES_FILT_V sr
										  WHERE sr.ESQUEMA = '$esquema'
											AND sr.SOCIEDAD_ID = '$sociedad_id'
											AND sr.RESPONSABILIDAD_ID = '$resp_id'
											AND sr.SUB_REGION_ID in (SELECT SUBREGION_ID FROM SUBREGIONES_HABILITADAS 
																	  WHERE ESQUEMA = sr.ESQUEMA
																	    AND SOCIEDAD_ID = sr.SOCIEDAD_ID AND HABILITADA = 1)
											AND sr.SUB_REGION_ID IN (SELECT pr.SUBREGION_ID from propuestas pr
																						   where pr.AREA_ID = '$area_id'
																							 and pr.SUBREGION_ID = sr.SUB_REGION_ID
																							 and pr.TIPO_PRESUPUESTO_ID = '$tipo_presupuesto_id'
																							 and pr.ANIO = '$anio'
																							 and pr.MES = '$mes'
																							 and trim(pr.DIVISION_ID) = $division_id
																							 and pr.NEGOCIO_ID = $negocio_id
																							 and pr.ESQUEMA = '$esquema'
																							 and pr.SOCIEDAD_ID = '$sociedad_id'
																							 and pr.estado in ('EA','RW'))";
							} else {
								$dml = "SELECT s.SUBPRESUPUESTO_ID,
											   s.SUBREGION_ID,
											   sr.SUB_REGION_ABREV,
											   s.IMPORTE,
											   s.VOLUMEN_VENTAS,
											   s.PRECIO_HTL,
											   (select nvl(sum(pp.importe),0) 
												  from propuestas pr,propuestas_productos pp
												 where pr.AREA_ID = p.AREA_ID
												   and pr.SUBREGION_ID = s.SUBREGION_ID
												   and pr.TIPO_PRESUPUESTO_ID = p.TIPO_PRESUPUESTO_ID
												   and pr.ANIO = p.ANIO
												   and pr.MES = p.MES
												   and trim(pr.DIVISION_ID) = $division_id
												   and pr.NEGOCIO_ID = $negocio_id
												   and pr.ESQUEMA = p.ESQUEMA
												   and pr.SOCIEDAD_ID = p.SOCIEDAD_ID
												   and pr.estado in ('EA','EW','AW')
												   and pp.PROPUESTA_ID = pr.PROPUESTA_ID) as PROP,
											   (s.importe - (select nvl(sum(pp.importe),0) 
												  from propuestas pr,propuestas_productos pp
												 where pr.AREA_ID = p.AREA_ID
												   and pr.SUBREGION_ID = s.SUBREGION_ID
												   and pr.TIPO_PRESUPUESTO_ID = p.TIPO_PRESUPUESTO_ID
												   and pr.ANIO = p.ANIO
												   and pr.MES = p.MES
												   and trim(pr.DIVISION_ID) = $division_id
												   and pr.NEGOCIO_ID = $negocio_id
												   and pr.ESQUEMA = p.ESQUEMA
												   and pr.SOCIEDAD_ID = p.SOCIEDAD_ID
												   and pr.estado in ('EW','AW')
												   and pp.PROPUESTA_ID = pr.PROPUESTA_ID)) as DISP
										 FROM PRESUPUESTOS p, SUBPRESUPUESTOS s, MGC_SUB_REGIONES_FILT_V sr
										WHERE p.PRESUPUESTO_ID = '$presupuesto_id'
										  AND s.PRESUPUESTO_ID = p.PRESUPUESTO_ID
										  AND s.SUBREGION_ID = sr.SUB_REGION_ID
										  AND sr.ESQUEMA = p.ESQUEMA
										  AND sr.SOCIEDAD_ID = p.SOCIEDAD_ID
										  AND sr.RESPONSABILIDAD_ID = '$resp_id'
										  AND sr.SUB_REGION_ID in (SELECT SUBREGION_ID FROM SUBREGIONES_HABILITADAS 
																	WHERE ESQUEMA = sr.ESQUEMA
																	  AND SOCIEDAD_ID = sr.SOCIEDAD_ID AND HABILITADA = 1)
										UNION
									SELECT NULL AS SUBPRESUPUESTO_ID,
											   sr.SUB_REGION_ID AS SUBREGION_ID,
											   sr.SUB_REGION_ABREV,
											   0 AS IMPORTE,
											   0 AS VOLUMEN_VENTAS,
											   0 AS PRECIO_HTL,
											   (select nvl(sum(pp.importe),0) 
												  from propuestas pr,propuestas_productos pp
												 where pr.AREA_ID = '$area_id'
												   and pr.SUBREGION_ID = sr.SUB_REGION_ID
												   and pr.TIPO_PRESUPUESTO_ID = '$tipo_presupuesto_id'
												   and pr.ANIO = '$anio'
												   and pr.MES = '$mes'
												   and trim(pr.DIVISION_ID) = $division_id
												   and pr.NEGOCIO_ID = $negocio_id
												   and pr.ESQUEMA = '$esquema'
												   and pr.SOCIEDAD_ID = '$sociedad_id'
												   and pr.estado in ('EA','EW','AW')
												   and pp.PROPUESTA_ID = pr.PROPUESTA_ID) as PROP,
											   0 as DISP
										   FROM MGC_SUB_REGIONES_FILT_V sr
										  WHERE sr.ESQUEMA = '$esquema'
											AND sr.SOCIEDAD_ID = '$sociedad_id'
											AND sr.RESPONSABILIDAD_ID = '$resp_id'
											AND sr.SUB_REGION_ID in (SELECT SUBREGION_ID FROM SUBREGIONES_HABILITADAS 
																	WHERE ESQUEMA = sr.ESQUEMA
																	  AND SOCIEDAD_ID = sr.SOCIEDAD_ID AND HABILITADA = 1)
											AND sr.SUB_REGION_ID IN (SELECT pr.SUBREGION_ID from propuestas pr
																						   where pr.AREA_ID = '$area_id'
																							 and pr.SUBREGION_ID = sr.SUB_REGION_ID
																							 and pr.TIPO_PRESUPUESTO_ID = '$tipo_presupuesto_id'
																							 and pr.ANIO = '$anio'
																							 and pr.MES = '$mes'
																							 and trim(pr.DIVISION_ID) = $division_id
																							 and pr.NEGOCIO_ID = $negocio_id
																							 and pr.ESQUEMA = '$esquema'
																							 and pr.SOCIEDAD_ID = '$sociedad_id'
																							 and pr.estado in ('EA','RW'))
											AND sr.SUB_REGION_ID NOT IN (SELECT s.SUBREGION_ID FROM SUBPRESUPUESTOS s
																		  WHERE s.PRESUPUESTO_ID = '$presupuesto_id')";
							}

							$stmt = $con->ejecutarQuery($dml);
							$errors = $con->getErrors();
							if ($errors['errcode'] == "") {
								while ($result = $con->getArrayResultadoQuery($stmt)) {
									
									if($result['SUBPRESUPUESTO_ID']){
										$subpresup_id = $result['SUBPRESUPUESTO_ID'];
									} else {
										$subpresup_id = "";
									}
									$subpresupuestos[$result['SUBREGION_ID']] = array($subpresup_id,$result['SUB_REGION_ABREV'],$result['IMPORTE'],$result['VOLUMEN_VENTAS'],$result['PRECIO_HTL'],$result['PROP'],$result['DISP']);
								}
							}
						}
						$con->liberarHandlerQuery($stmt);
					} else {
							if($presupuesto_id == ""){
								$dml = "SELECT NULL AS SUBPRESUPUESTO_ID,
											   sr.SUB_REGION_ID AS SUBREGION_ID,
											   sr.SUB_REGION_ABREV,
											   0 AS IMPORTE,
											   0 AS VOLUMEN_VENTAS,
											   0 AS PRECIO_HTL,
											   (select nvl(sum(pp.importe),0) 
												  from propuestas pr,propuestas_productos pp
												 where pr.AREA_ID = '$area_id'
												   and pr.SUBREGION_ID = sr.SUB_REGION_ID
												   and pr.TIPO_PRESUPUESTO_ID = '$tipo_presupuesto_id'
												   and pr.ANIO = '$anio'
												   and pr.MES = '$mes'
												   and trim(pr.DIVISION_ID) = $division_id
												   and pr.NEGOCIO_ID = $negocio_id
												   and pr.ESQUEMA = '$esquema'
												   and pr.SOCIEDAD_ID = '$sociedad_id'
												   and pr.estado in ('EA','EW','AW')
												   and pp.PROPUESTA_ID = pr.PROPUESTA_ID) as PROP,
											   0 as DISP
										   FROM MGC.SUB_REGIONES sr
										  WHERE sr.ESQUEMA = '$esquema'
											AND sr.SOCIEDAD_ID = '$sociedad_id'
											AND sr.SUB_REGION_ID IN (SELECT pr.SUBREGION_ID from propuestas pr
																						   where pr.AREA_ID = '$area_id'
																							 and pr.SUBREGION_ID = sr.SUB_REGION_ID
																							 and pr.TIPO_PRESUPUESTO_ID = '$tipo_presupuesto_id'
																							 and pr.ANIO = '$anio'
																							 and pr.MES = '$mes'
																							 and trim(pr.DIVISION_ID) = $division_id
																							 and pr.NEGOCIO_ID = $negocio_id
																							 and pr.ESQUEMA = '$esquema'
																							 and pr.SOCIEDAD_ID = '$sociedad_id'
																							 and pr.estado in ('EA','RW'))";
							} else {
								$dml = "SELECT s.SUBPRESUPUESTO_ID,
											   s.SUBREGION_ID,
											   sr.SUB_REGION_ABREV,
											   s.IMPORTE,
											   s.VOLUMEN_VENTAS,
											   s.PRECIO_HTL,
											   (select nvl(sum(pp.importe),0) 
												  from propuestas pr,propuestas_productos pp
												 where pr.AREA_ID = p.AREA_ID
												   and pr.SUBREGION_ID = s.SUBREGION_ID
												   and pr.TIPO_PRESUPUESTO_ID = p.TIPO_PRESUPUESTO_ID
												   and pr.ANIO = p.ANIO
												   and pr.MES = p.MES
												   and trim(pr.DIVISION_ID) = $division_id
												   and pr.NEGOCIO_ID = $negocio_id
												   and pr.ESQUEMA = p.ESQUEMA
												   and pr.SOCIEDAD_ID = p.SOCIEDAD_ID
												   and pr.estado in ('EA','EW','AW')
												   and pp.PROPUESTA_ID = pr.PROPUESTA_ID) as PROP,
											   (s.importe - (select nvl(sum(pp.importe),0) 
												  from propuestas pr,propuestas_productos pp
												 where pr.AREA_ID = p.AREA_ID
												   and pr.SUBREGION_ID = s.SUBREGION_ID
												   and pr.TIPO_PRESUPUESTO_ID = p.TIPO_PRESUPUESTO_ID
												   and pr.ANIO = p.ANIO
												   and pr.MES = p.MES
												   and trim(pr.DIVISION_ID) = $division_id
												   and pr.NEGOCIO_ID = $negocio_id
												   and pr.ESQUEMA = p.ESQUEMA
												   and pr.SOCIEDAD_ID = p.SOCIEDAD_ID
												   and pr.estado in ('EW','AW')
												   and pp.PROPUESTA_ID = pr.PROPUESTA_ID)) as DISP
										 FROM PRESUPUESTOS p, SUBPRESUPUESTOS s, MGC.SUB_REGIONES sr
										WHERE p.PRESUPUESTO_ID = '$presupuesto_id'
										  AND s.PRESUPUESTO_ID = p.PRESUPUESTO_ID
										  AND s.SUBREGION_ID = sr.SUB_REGION_ID
										  AND sr.ESQUEMA = p.ESQUEMA
										  AND sr.SOCIEDAD_ID = p.SOCIEDAD_ID
										UNION
									SELECT NULL AS SUBPRESUPUESTO_ID,
											   sr.SUB_REGION_ID AS SUBREGION_ID,
											   sr.SUB_REGION_ABREV,
											   0 AS IMPORTE,
											   0 AS VOLUMEN_VENTAS,
											   0 AS PRECIO_HTL,
											   (select nvl(sum(pp.importe),0) 
												  from propuestas pr,propuestas_productos pp
												 where pr.AREA_ID = '$area_id'
												   and pr.SUBREGION_ID = sr.SUB_REGION_ID
												   and pr.TIPO_PRESUPUESTO_ID = '$tipo_presupuesto_id'
												   and pr.ANIO = '$anio'
												   and pr.MES = '$mes'
												   and trim(pr.DIVISION_ID) = $division_id
												   and pr.NEGOCIO_ID = $negocio_id
												   and pr.ESQUEMA = '$esquema'
												   and pr.SOCIEDAD_ID = '$sociedad_id'
												   and pr.estado in ('EA','EW','AW')
												   and pp.PROPUESTA_ID = pr.PROPUESTA_ID) as PROP,
											   0 as DISP
										   FROM MGC.SUB_REGIONES sr
										  WHERE sr.ESQUEMA = '$esquema'
											AND sr.SOCIEDAD_ID = '$sociedad_id'
											AND sr.SUB_REGION_ID IN (SELECT pr.SUBREGION_ID from propuestas pr
																						   where pr.AREA_ID = '$area_id'
																							 and pr.SUBREGION_ID = sr.SUB_REGION_ID
																							 and pr.TIPO_PRESUPUESTO_ID = '$tipo_presupuesto_id'
																							 and pr.ANIO = '$anio'
																							 and pr.MES = '$mes'
																							 and trim(pr.DIVISION_ID) = $division_id
																							 and pr.NEGOCIO_ID = $negocio_id
																							 and pr.ESQUEMA = '$esquema'
																							 and pr.SOCIEDAD_ID = '$sociedad_id'
																							 and pr.estado in ('EA','RW'))
											AND sr.SUB_REGION_ID NOT IN (SELECT s.SUBREGION_ID FROM SUBPRESUPUESTOS s
																		  WHERE s.PRESUPUESTO_ID = '$presupuesto_id')";
							}

							$stmt = $con->ejecutarQuery($dml);
							$errors = $con->getErrors();
							if ($errors['errcode'] == "") {
								while ($result = $con->getArrayResultadoQuery($stmt)) {
									
									if($result['SUBPRESUPUESTO_ID']){
										$subpresup_id = $result['SUBPRESUPUESTO_ID'];
									} else {
										$subpresup_id = "";
									}
									$subpresupuestos[$result['SUBREGION_ID']] = array($subpresup_id,$result['SUB_REGION_ABREV'],$result['IMPORTE'],$result['VOLUMEN_VENTAS'],$result['PRECIO_HTL'],$result['PROP'],$result['DISP']);
								}
							}
						$con->liberarHandlerQuery($stmt);
					}
				}
			}
		}
	}
	unset($con);
	
	if ($errors['errcode'] == "") {
		//entrega de campos id & label
		$varSalida = "identifier:\"registro_id\",";
		$varSalida = $varSalida . "label:\"subregion_id\",";
		//iniciar entrega de lista de items:
		$varSalida = $varSalida .  'items:[';

		//loop para entregar todos los items:
		$booPrimero = true;
		foreach ($subpresupuestos as $subregion_id => $subpresupData) {
			if ($booPrimero) 
				$booPrimero = false;
			else
				$varSalida = $varSalida . ',';
            
            $subpresupuesto_id = $subpresupData[0];
            $importe = $subpresupData[2];
            $volVentas = $subpresupData[3];
            $precioHtl = $subpresupData[4];
            $propuestas = $subpresupData[5];
            $disponible = $subpresupData[6];
            
			$varSalida = $varSalida . '{"registro_id":"'.$marca_id.'-'.$subregion_id.'","subpresupuesto_id":"'.$subpresupuesto_id.'","subregion_id":"'.$subregion_id.'","marca_id":"'.$marca_id.'","subregion_abrev":"'.$subpresupData[1].'","importe":"'."$importe".'","volumen_ventas":"'."$volVentas".'","precio_htl":"'."$precioHtl".'","propuestas":"'."$propuestas".'","disponible":"'."$disponible".'","presupuesto_id":"'."$presupuesto_id".'"}';
		}
	
		//entrega cierre de lista de items:
		$varSalida = $varSalida . ']';
		
		echo utf8_encode('{' . $varSalida . '}');
		
	} else {	
		echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '"}');
	}
?>


