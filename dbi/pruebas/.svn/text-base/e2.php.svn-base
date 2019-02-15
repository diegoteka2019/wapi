<?php

    /************************************************* 
    PROCEDURE dbi/e.php (Execute)
    Ejecuta un comando (dml) en la DB. Devuelve el estatus de la ejecución en formato JSON
 	Ejecutar un dml en la DB (para ser invocado con ajax desde dojo)
	parametros (pueden pasarse por POST o por GET!):
		sid:	Identificador de la sesión del usuario
		dmlid:	Identificador del dml que quiere ejecutar
		(todos los parametros que se le pasan al dml como bind variables): se reemplazan en los tag #(nombre)# del dml.
	
	Ejemplo de invocación: "http://localhost/testdojo/dbi/e.php?sid=91827364&dmlid=1&codigo=ZZZ&nombre=borrar&coordenadas=1s 1w&Region=12"
	donde dmlid=1 se corresponde al texto: "insert into X_CIUDADES (COD_CIUDAD, CIUDAD_DESC, CIUDAD_DESC2, LAT_LONG, REGION_ID) values ('#codigo#', '#nombre#', '#nombre#', '#coordenadas#', #Region#)"

    IMPORTANTE: Falta escapar comillas dobles de los strings devueltos!!!
	
    27/3/2009   Guillermo Castarés  Creación versión inicial
	17/6/2009   Guillermo Castarés  Ahora verifica que la sesión sea válida
	02/7/2009	Esteban Lopez		Migracion a SQLServer
	17/7/2009	Esteban Lopez		Agregado control de seguridad por RESPONSABILIDAD_ID
    *************************************************/

	//Queries a ejecutar
	$seguridad_query = "";
	$dml_query = "";
	$dml = "";
	//Control de errores
	$errors = array('errcode' => "", 'errmsg' => "DML ejecutado Ok.", 'srvmsg' => "", 'debugmsg' => "");
	//Info de sesion
	$sid = $_POST['sid'] . $_GET['sid'];
	//Interfaz PHP-SQLServer
	$result = null;
	
	// Kill the internal messages:
	error_reporting(0); 

	//ejecutar dml y devolver resultado en formato json.	
	//abrir conexión:
	require 'DBconfig.php'; // Carga la variable $db con el string de conexión a la DB. 
	require 'DBI_Util2.php';
	
	$infoCon = dbi_conectar($dbServer, $dbUser, $dbPassword, $dbName);
	if ( !is_null($infoCon['errors']) ) {  					//conexión a la DB ok.
		$errors = $infoCon['errors'];
	} else {
		$infoSesion = dbi_verificarSesion($infoCon['conHandler'], $sid);
		if (is_null($infoSesion['usuarioId'])) { 					//si usuario es nulo es que la sesión no existe
			$errors['errcode'] = "DBI-1";
			$errors['errmsg'] = "La sesion ya no está activa.";
		} else {									//si volvió usuario es que la sesión está viva

			//con el parametro dmlid buscar el dml a ejecutar:
			$seguridad_query = 'select da.DML_ID from CMN_DML_ACCIONES da, CMN_ACCESOS ac, CMN_RESPONSABILIDADES r ';
			$seguridad_query = $seguridad_query . 'where r.PERFIL_ID = ac.PERFIL_ID and ac.ACCION_ID = da.ACCION_ID and r.RESPONSABILIDAD_ID = ' . $infoSesion['respId'];
			$dml_query = 'select cast(TEXTO as text) as TEXTOC from CMN_DBI_DMLS ';
			$dml_query = $dml_query . 'where DML_ID = ' . $_POST['dmlid'] . $_GET['dmlid'] . ' and TIPO = \'E\' and DML_ID in ('. $seguridad_query . ')';
			
			$infoQuery = dbi_ejecutarQuery($dml_query, $infoCon['conHandler']);
			if ( !is_null($infoQuery['errors']) ) { 		//Consulta da error
				$errors = $infoQuery['errors'];
			} else {  					//parse ok.
				$result = dbi_getArrayResultadoQuery($infoQuery['stmt']);
				$dml = $result['TEXTOC'];
				
				dbi_liberarHandlerResultado($result);
				dbi_liberarHandlerQuery($infoQuery['stmt']);
				
				if ($dml == "") {
					$errors['errcode'] = "DBI-2";
					$errors['errmsg'] = "No se encontró el dml solicitado (no existe o la sesión no tiene permisos)";
				} else {
					
					$dml = str_replace("\n", "", $dml);
					$dml = str_replace("\r", "", $dml);
					
					// acá recorrer todos los elementos del $_POST e ir reemplazando los tags del query por los valores recibidos.
					foreach($_POST as $nombre_campo => $valor){
						$dml = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dml);
					} 

					// acá recorrer todos los elementos del $_GET e ir reemplazando los tags del query por los valores recibidos. 
					foreach($_GET as $nombre_campo => $valor){ 
						$dml = str_replace("#" . $nombre_campo . "#", utf8_decode($valor), $dml);
					} 
					
					//acá reemplazar el tag #resp_id# con la responsabilidad de esa sesión
					$dml = str_replace("#RESP_ID#", $infoSesion['respId'], $dml);
					$dml = str_replace("#resp_id#", $infoSesion['respId'], $dml);

					$dml = str_replace("#usraudit#", $infoSesion['usuarioId'], $dml);
					
					//acá reemplazar el tag #perfil_id# ????
					//acá reemplazar el tag #sid# ????
					
					$infoQuery = dbi_ejecutarQuery($dml, $infoCon['conHandler']);
					if ( !is_null($infoQuery['errors']) ) { 		//Consulta da error
						$errors = $infoQuery['errors'];
					} else {  					//parse ok.
						dbi_liberarHandlerQuery($infoQuery['stmt']);
						
						//TODO: Ver como verificar que el dml se ejecuto bien	
					}
					
				}
			}
		}
	}
	dbi_cerrarConexion($infoCon['conHandler']);
	
	//Devuelve json con codigo de error al formulario
	echo utf8_encode('{errcode:"' . $errors['errcode'] . '", errmsg:"' . $errors['errmsg'] . '", srvmsg:"' . $errors['srvmsg'] . '", debugmsg:"' . $errors['debugmsg'] . '", sid:"' . $sid . '"}');

?>
