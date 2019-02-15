<?php
	require_once('ConexionDBI.class.php');
	
	class ConexionDBI_Oracle extends ConexionDBI {
		
		function __construct($dbServer, $dbUser, $dbPassword){
			$conHandler = OCILogon($dbUser, $dbPassword, $dbServer);
			$oerr = OCIError();
			if ($oerr) {  				//error al conectar a la DB
				$this->setErrors("CON-1","No se pudo conectar al servidor",$oerr["message"],"Logon");
			} else {
				$this->setHandlerConexion($conHandler);
			}
		}
		
		public function crearSesion($usuarioId,$clave) {
			$sid = "";
			$result = array();
			
			//con los parametros buscar si el usuario es válido:
			$dml = "BEGIN CMN\$LOGIN.CREARSESION ( '" . $usuarioId . "', '" . $clave . "', :varSID); END;";
			$stmt = OCIParse($this->getHandlerConexion(), $dml); 
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//parse da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
			} else {  					//parse ok.
			    oci_bind_by_name($stmt, ":varSID", $sid, 30, SQLT_CHR );
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS ); 
				$oerr = OCIError($stmt); 
				if ($oerr["code"]) { 
					$this->setErrors("CON-3b","No se pudo ejecutar la sentencia",$oerr["message"],"Execute");
				} else {
					$result['sid'] = $sid;
				}
			}
			OCIFreeStatement($stmt); 
			
			return $result;		
		}
		
		public function verificarSesion($sid){
			$usuarioId = "";
			$respId = null;
			$result = array();
			$dml = "BEGIN CMN\$LOGIN.VERIFICARSESION( '" . $sid . "', :varUsuarioId, :varRespId ); END;";
			$stmt = OCIParse($this->getHandlerConexion(), $dml); 
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//parse da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
			} else {  					//parse ok.
				oci_bind_by_name($stmt, ":varUsuarioId", &$usuarioId, 30, SQLT_CHR );
				oci_bind_by_name($stmt, ":varRespId", &$respId, 18); //revisar el tipo del bind????
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS ); 
				$oerr = OCIError($stmt); 
				if ($oerr["code"]) { 
					$this->setErrors("CON-3b","No se pudo ejecutar la sentencia",$oerr["message"],"Execute");
				} else {
					$result['usuarioId'] = $usuarioId;
					$result['respId'] = $respId;
				}
			}
			OCIFreeStatement($stmt); 		

			return $result;
		}

		public function grabarPerfil($nombre,$desc,$modulo_id,$acciones,$usraudit){
			$grabado = null;
			$dml = "BEGIN CMN\$PERFIL.grabarPerfil( '$nombre', '$desc', $modulo_id, '$acciones', '$usraudit', :grabado ); END;";
			$stmt = OCIParse($this->getHandlerConexion(), $dml); 
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
			} else {  			
				//parse ok.
				oci_bind_by_name($stmt, ":grabado", &$grabado, 1, SQLT_INT);
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS );
				$oerr = OCIError($stmt);
				if($grabado == 0) {
					$this->setErrors("CON-3","No se pudo ejecutar",$oerr["message"],"Execute");
				}
				OCIFreeStatement($stmt);
			}
		}		

		public function eliminarPerfil($perfilId){
			$borrado = null;
			$dml = "BEGIN CMN\$PERFIL.eliminarPerfil( $perfilId, :borrado ); END;";
			$stmt = OCIParse($this->getHandlerConexion(), $dml);
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
			} else {  			
				//parse ok.
				oci_bind_by_name($stmt, ":borrado", &$borrado, 1, SQLT_INT);
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS );
				$oerr = OCIError($stmt);
				if($borrado == 0) {
					$this->setErrors("CON-3","No se pudo ejecutar",$oerr["message"],"Execute");
				}
				OCIFreeStatement($stmt);
			}
		}
		
		public function limitarRegsDevueltos($dml_query, $cantRegs){
			if($cantRegs == "") {
				return str_replace("#maxReg#", "", $dml_query);
			}			
			$pos = strpos($dml_query,"where");
			if($pos === false){
				return str_replace("#maxReg#", "where rownum<=".$cantRegs, $dml_query);
			} else {
				return str_replace("#maxReg#", "rownum<=".$cantRegs, $dml_query);
			}
		}		
		
		public function ejecutarQuery($dml_query){
			$stmt = OCIParse($this->getHandlerConexion(), $dml_query); 
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) {  				//Consulta da error
				$this->setErrors("CON-4","No se pudo realizar la consulta",$oerr["message"],"Parse");
				return false;
			} else {
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS);
				$oerr = OCIError($stmt); 
				if ($oerr["code"]) { 
					$this->setErrors("CON-4b","No se pudo ejecutar la consulta",$oerr["message"],"Execute");
					return false;
				} else {
					oci_commit($this->getHandlerConexion());
					return $stmt;
				}
			}
		}
		
		public function getArrayResultadoQuery($stmt){
			return oci_fetch_assoc($stmt);
		}
		
		public function liberarHandlerQuery($stmt){
			OCIFreeStatement($stmt);
		}
			
		protected function doDestruct(){
			OCILogoff($this->getHandlerConexion());
		}
	}
?>