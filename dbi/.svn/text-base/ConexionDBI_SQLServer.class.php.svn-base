<?php
	require_once('ConexionDBI.class.php');
	
	class ConexionDBI_SQLServer extends ConexionDBI {
		
		function __construct($dbServer, $dbUser, $dbPassword, $dbName = null){
			$conHandler = mssql_connect($dbServer, $dbUser, $dbPassword);
			if (!$conHandler) {  				//error al conectar a la DB
				$this->setErrors("CON-1","No se pudo conectar al servidor",mssql_get_last_message(),"Logon");
			} else {
				$this->setHandlerConexion($conHandler);
				if (!is_null($dbName)) {
					if (!mssql_select_db($dbName, $this->getHandlerConexion())) {  	//error al seleccionar BD
						$this->setErrors("CON-2","No se pudo acceder a la BD requerida",mssql_get_last_message(),"Database selection");
					}
				} else {
					$this->setErrors("CON-2b","Debe especificar un nombre de BD",mssql_get_last_message(),"Database selection");
				}
			}
		}

		public function crearSesion($usuarioId,$clave){
			$sid = "";
			$result = array();
			$stmt = mssql_init("CMN_crearSesion", $this->getHandlerConexion());
			
			if (!$stmt) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",mssql_get_last_message(),"Init");
			} else {  			
				//parse ok.
				mssql_bind($stmt, "@pvarUsuarioId", $usuarioId, SQLVARCHAR); 
				mssql_bind($stmt, "@pvarClave", $clave, SQLVARCHAR);
				mssql_bind($stmt, "@pvarSID", &$sid, SQLVARCHAR, TRUE, FALSE, 30);
			
				mssql_execute($stmt);
				//TODO: Ver como identificar errores en el execute
				
				$result['sid'] = $sid;
				
				mssql_free_statement($stmt);
			}

			return $result;
		}
		
		public function verificarSesion($sid){
			$usuarioId = "";
			$respId = null;
			$result = array();
			$stmt = mssql_init("CMN_verificarSesion", $this->getHandlerConexion());
			
			if (!$stmt) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",mssql_get_last_message(),"Init");
			} else {  			
				//parse ok.
				mssql_bind($stmt, "@pvarSID", $sid, SQLVARCHAR);
				mssql_bind($stmt, "@pvarUsuarioId", &$usuarioId, SQLVARCHAR, TRUE, FALSE, 30);
				mssql_bind($stmt, "@pvarRespId", &$respId, SQLINT4, TRUE, FALSE, 2);
				
				mssql_execute($stmt);
				//TODO: Ver como identificar errores en el execute
				
				$result['usuarioId'] = $usuarioId;
				$result['respId'] = $respId;
				
				mssql_free_statement($stmt);
			}

			return $result;
		}

		public function grabarPerfil($nombre,$desc,$modulo_id,$acciones,$usraudit){
			$grabado = null;
			$stmt = mssql_init("CMN_grabarPerfil", $this->getHandlerConexion());
			
			if (!$stmt) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",mssql_get_last_message(),"Init");
			} else {  			
				//parse ok.
				mssql_bind($stmt, "@nombre", $nombre, SQLVARCHAR,false,false,240);
				mssql_bind($stmt, "@descripcion", $desc, SQLVARCHAR,false,false,240);
				mssql_bind($stmt, "@modulo_id", $modulo_id, SQLINT2,false,false,2);
				mssql_bind($stmt, "@acciones", $acciones, SQLTEXT,false,false,8000);
				mssql_bind($stmt, "@usraudit", $usraudit, SQLVARCHAR,false,false,30);
				mssql_bind($stmt, "@grabado", &$grabado, SQLBIT, TRUE, FALSE, 2);
				mssql_execute($stmt);
				if($grabado == 0) {
					$this->setErrors("CON-3","No se pudo ejecutar",mssql_get_last_message(),"Execute");
				}
				mssql_free_statement($stmt);
			}
		}		

		public function eliminarPerfil($perfilId){
			$borrado = null;
			$stmt = mssql_init("CMN_eliminarPerfil", $this->getHandlerConexion());
			
			if (!$stmt) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",mssql_get_last_message(),"Init");
			} else {  			
				//parse ok.
				mssql_bind($stmt, "@perfilId", $perfilId, SQLINT4);
				mssql_bind($stmt, "@borrado", &$borrado, SQLBIT, TRUE, FALSE, 2);
				mssql_execute($stmt);
				if($borrado == 0) {
					$this->setErrors("CON-3","No se pudo ejecutar",mssql_get_last_message(),"Execute");
				}
				mssql_free_statement($stmt);
			}
		}
		
		public function limitarRegsDevueltos($dml_query, $cantRegs){
			if($cantRegs == "") {
				return str_replace("#maxReg#", "", $dml_query);
			} else {
				return str_replace("#maxReg#", "top ".$cantRegs, $dml_query);
			}
		}
		
		public function ejecutarQuery($dml_query){
			$stmt = mssql_query($dml_query, $this->getHandlerConexion());
			if ($stmt == FALSE) {  				//Consulta da error
				$this->setErrors("CON-4","No se pudo realizar la consulta",mssql_get_last_message(),"Query");
				return false;
			} else {
				return $stmt;
			}
		}
		
		public function getArrayResultadoQuery($stmt){
			return mssql_fetch_array($stmt);
		}
		
		public function liberarHandlerQuery($stmt){
			mssql_free_result($stmt);
		}
			
		protected function doDestruct(){
			mssql_close($this->getHandlerConexion());
		}
	}
?>