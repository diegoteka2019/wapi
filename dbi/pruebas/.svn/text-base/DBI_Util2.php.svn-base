<?php
	function dbi_conectar($dbServer, $dbUser, $dbPassword, $dbName){
		$result = array();
		$errors = null;
		$conHandler = mssql_connect($dbServer, $dbUser, $dbPassword);
		if (!$conHandler) {  				//error al conectar a la DB
			$errors = array();
			$errors['errcode'] = "CON-1";
			$errors['errmsg'] = "No se pudo conectar al servidor";
			$errors['debugmsg'] = "Logon";
			$result['conHandler'] = null;
			$result['errors'] = $errors;
		} else {
			$result['conHandler'] = $conHandler;
			if (!is_null($dbName)) {
				if (!mssql_select_db($dbName, $conHandler)) {  	//error al seleccionar BD
					$errors = array();
					$errors['errcode'] = "CON-2";
					$errors['errmsg'] = "No se pudo acceder a la BD requerida";
					$errors['debugmsg'] = "Database selection";
					$result['errors'] = $errors;
				} else {
					$result['errors'] = null;
				}
			} else {
				$errors = array();
				$errors['errcode'] = "CON-2b";
				$errors['errmsg'] = "Debe especificar un nombre de BD";
				$errors['debugmsg'] = "Database selection";
				$result['errors'] = $errors;
			}
		}
		
		return $result;
	}
	
	function dbi_verificarSesion($conHandler, $sid){
		$varUsuarioId = "";
		$varRespId = null;
		$result = array();
		$errors = null;
		$stmt = mssql_init("CMN_verificarSesion", $conHandler);
		
		if (!$stmt) { 		//Inicializacion da error
			$errors = array();
			$errors['errcode'] = "CON-3";
			$errors['errmsg'] = "No se pudo inicializar sentencia";
			$errors['debugmsg'] = "Init"; 
		} else {  					//parse ok.
		
			mssql_bind($stmt, "@pvarSID", $sid, SQLVARCHAR);
			mssql_bind($stmt, "@pvarUsuarioId", &$varUsuarioId, SQLVARCHAR, TRUE, FALSE, 30);
			mssql_bind($stmt, "@pvarRespId", &$varRespId, SQLINT4, TRUE, FALSE, 2);
			
			mssql_execute($stmt);
			//TODO: Ver como identificar errores en el execute
			
			$result['usuarioId'] = $varUsuarioId;
			$result['respId'] = $varRespId;
			
			mssql_free_statement($stmt);
		}
		
		$result['errors'] = $errors;
		return $result;
	}
	
	function dbi_ejecutarQuery($dml_query, $conHandler){
		$result = array();
		$errors = null;
		$stmt = mssql_query($dml_query, $conHandler);
		if ($stmt == FALSE) {  				//Consulta da error
			$errors = array();
			$errors['errcode'] = "CON-4";
			$errors['errmsg'] = "No se pudo realizar la consulta";
			$errors['srvmsg'] = "Error del servidor: " . mssql_get_last_message();
			$errors['debugmsg'] = "Logon";
			$result['stmt'] = null;
			$result['errors'] = $errors;
		} else {
			$result['stmt'] = $stmt;
			$result['errors'] = null;
		}
		
		return $result;

	}
	
	function dbi_getArrayResultadoQuery($stmt){
		return mssql_fetch_array($stmt);
	}
	
	function dbi_liberarHandlerResultado($resultHandler){
		mssql_free_result($resultHandler);
	}

	function dbi_liberarHandlerQuery($stmt){
		mssql_free_statement($stmt);
	}	

	function dbi_cerrarConexion($conHandler) {
		mssql_close ($conHandler);
	}
	
?>
