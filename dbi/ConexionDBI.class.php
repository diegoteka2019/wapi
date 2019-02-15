<?php
	class ConexionDBI {
		var $conHandler = null;
		var $errors = array('errcode' => "", 'errmsg' => "", 'srvmsg' => "", 'debugmsg' => "");

		function ConexionDBI()
		{
			//destructor
			register_shutdown_function(array(&$this, '__destruct'));

			//constructor
			$argcv = func_get_args();
			call_user_func_array(array(&$this, '__construct'), $argcv);
		}		

		function __construct($dbServer, $dbUser, $dbPassword){
			$conHandler = OCILogon($dbUser, $dbPassword, $dbServer);
			$oerr = OCIError();
			if ($oerr) {  				//error al conectar a la DB
				$this->setErrors("CON-1","No se pudo conectar al servidor",$oerr["message"],"Logon");
			} else {
				$this->setHandlerConexion($conHandler);
			}
		}
		
		function crearSesion($modoLogin,$usuarioId,$clave=null) {
			$dml = "BEGIN CMN\$LOGIN.CREARSESION ( '" . $modoLogin . "','" . $usuarioId . "', '" . $clave . "', :varSID); END;";
			$sid = "";
			$result = array();
						
			$stmt = OCIParse($this->getHandlerConexion(), $dml); 
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//parse da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
			} else {  					//parse ok.
				ocibindbyname($stmt, ":varSID", $sid, 30 );
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
		
		function verificarSesion($sid){
			$usuarioId = "";
			$respId = null;
			$esquema = null;
			$sociedad_id = null;
			$result = array();
			$dml = "BEGIN CMN\$LOGIN.VERIFICARSESION( '" . $sid . "', :varUsuarioId, :varRespId, :varEsquema, :varSociedad_id ); END;";
			$stmt = OCIParse($this->getHandlerConexion(), $dml); 
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//parse da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
			} else {  					//parse ok.
				ocibindbyname($stmt, ":varUsuarioId", &$usuarioId, 30 );
				ocibindbyname($stmt, ":varRespId", &$respId, 18);
				ocibindbyname($stmt, ":varEsquema", &$esquema, 8);
				ocibindbyname($stmt, ":varSociedad_id", &$sociedad_id, 8);
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS ); 
				$oerr = OCIError($stmt); 
				if ($oerr["code"]) { 
					$this->setErrors("CON-3b","No se pudo ejecutar la sentencia",$oerr["message"],"Execute");
				} else {
					$result['usuarioId'] = $usuarioId;
					$result['respId'] = $respId;
					$result['esquema'] = $esquema;
					$result['sociedad_id'] = $sociedad_id;
				}
			}
			OCIFreeStatement($stmt); 		

			return $result;
		}

		/*function grabarPerfil($nombre,$desc,$modulo_id,$acciones,$usraudit){
			$grabado = null;
			$dml = "BEGIN CMN\$PERFIL.grabarPerfil( '$nombre', '$desc', $modulo_id, '$acciones', '$usraudit', :grabado ); END;";
			$stmt = OCIParse($this->getHandlerConexion(), $dml); 
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
			} else {  			
				//parse ok.
				ocibindbyname($stmt, ":grabado", &$grabado, 1);
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS );
				$oerr = OCIError($stmt);
				if($grabado == 0) {
					$this->setErrors("CON-3","No se pudo ejecutar",$oerr["message"],"Execute");
				}
				OCIFreeStatement($stmt);
			}
		}*/
		
		/*function altaMasiva($respons,$subregiones,$usraudit){
			$ticket = null;
			$dml = "BEGIN CMN\$ACCESO_DATOS.altaMasiva( '$respons', '$subregiones', '$usraudit', :ticket ); END;";
			$stmt = OCIParse($this->getHandlerConexion(), $dml); 
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
				$ticket = false;
			} else {  			
				//parse ok.
				ocibindbyname($stmt, ":ticket", &$ticket, 4);
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS );
				$oerr = OCIError($stmt);
				if($oerr["code"]) {
					$this->setErrors("CON-3b","No se pudo ejecutar la sentencia",$oerr["message"],"Execute");
					$ticket = false;
				}
				OCIFreeStatement($stmt);
				return $ticket;
			}
		}*/

		/*function bajaMasiva($respons,$subregiones,$usraudit){
			$ticket = null;
			$dml = "BEGIN CMN\$ACCESO_DATOS.bajaMasiva( '$respons', '$subregiones', '$usraudit', :ticket ); END;";
			$stmt = OCIParse($this->getHandlerConexion(), $dml); 
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
				$ticket = false;
			} else {  			
				//parse ok.
				ocibindbyname($stmt, ":ticket", &$ticket, 4);
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS );
				$oerr = OCIError($stmt);
				if($oerr["code"]) {
					$this->setErrors("CON-3b","No se pudo ejecutar la sentencia",$oerr["message"],"Execute");
					$ticket = false;
				}
				OCIFreeStatement($stmt);
				return $ticket;
			}
		}*/
		
		/*function asignarParticular($tipo,$idParticular,$listado,$usraudit){
			if(($tipo != 'Responsabilidades')&&($tipo != 'Subregiones')){return false;}
			$ticket = null;
			$dml = "BEGIN CMN\$ACCESO_DATOS.asignar$tipo( '$idParticular', '$listado', '$usraudit', :ticket ); END;";
			$stmt = OCIParse($this->getHandlerConexion(), $dml); 
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
				$ticket = false;
			} else {  			
				//parse ok.
				ocibindbyname($stmt, ":ticket", &$ticket, 4);
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS );
				$oerr = OCIError($stmt);
				if($oerr["code"]) {
					$this->setErrors("CON-3b","No se pudo ejecutar la sentencia",$oerr["message"],"Execute");
					$ticket = false;
				}
				OCIFreeStatement($stmt);
				return $ticket;
			}
		}*/
		
		/*function eliminarPerfil($perfilId){
			$borrado = null;
			$dml = "BEGIN CMN\$PERFIL.eliminarPerfil( $perfilId, :borrado ); END;";
			$stmt = OCIParse($this->getHandlerConexion(), $dml);
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
			} else {  			
				//parse ok.
				ocibindbyname($stmt, ":borrado", &$borrado, 1);
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS );
				$oerr = OCIError($stmt);
				if($borrado == 0) {
					$this->setErrors("CON-3","No se pudo ejecutar",$oerr["message"],"Execute");
				}
				OCIFreeStatement($stmt);
			}
		}*/

		/*function grabarVigencias($segmentos,$divisiones,$vigencias,$esquema,$sociedad_id,$usraudit){
			$msg = null;
			$dml = "BEGIN PKG_CONFIGURACION.grabarVigencias( '$segmentos', '$divisiones', '$vigencias', '$esquema', '$sociedad_id', '$usraudit', :msg ); END;";
			$stmt = OCIParse($this->getHandlerConexion(), $dml);
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
			} else {  			
				//parse ok.
				ocibindbyname($stmt, ":msg", &$msg, 255);
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS );
				$oerr = OCIError($stmt);
				if(substr($msg,0,3) == 'ERR') {
					$this->setErrors("CON-3",substr($msg,4),$oerr["message"],"Execute");
				}
				OCIFreeStatement($stmt);
			}
		}*/
		
		/*function actualizarMarcasHabilitadas($marcas,$habilitada,$esquema,$sociedad_id,$usraudit){
			$msg = null;
			$dml = "BEGIN PKG_CONFIGURACION.actualizarMarcasHabilitadas( '$marcas', '$habilitada', '$esquema', '$sociedad_id', '$usraudit', :msg ); END;";
			$stmt = OCIParse($this->getHandlerConexion(), $dml);
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
			} else {  			
				//parse ok.
				ocibindbyname($stmt, ":msg", &$msg, 255);
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS );
				$oerr = OCIError($stmt);
				if(substr($msg,0,3) == 'ERR') {
					$this->setErrors("CON-3",substr($msg,4),$oerr["message"],"Execute");
				}
				OCIFreeStatement($stmt);
			}
		}*/

		/*function actualizarSubregHabilitadas($areas,$subregiones,$habilitada,$onpremise,$esquema,$sociedad_id,$usraudit){
			$msg = null;
			$dml = "BEGIN PKG_CONFIGURACION.actualizarSubregHabilitadas( '$areas', '$subregiones', '$habilitada', '$onpremise', '$esquema', '$sociedad_id', '$usraudit', :msg ); END;";
			$stmt = OCIParse($this->getHandlerConexion(), $dml);
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
			} else {  			
				//parse ok.
				ocibindbyname($stmt, ":msg", &$msg, 255);
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS );
				$oerr = OCIError($stmt);
				if(substr($msg,0,3) == 'ERR') {
					$this->setErrors("CON-3",substr($msg,4),$oerr["message"],"Execute");
				}
				OCIFreeStatement($stmt);
			}
		}*/

		/*function grabarProrrateosMarcas($productos,$porcentajes,$marca_id,$subregion_id,$esquema,$sociedad_id,$usraudit){
			$msg = null;
			$dml = "BEGIN PKG_CONFIGURACION.grabarProrrateosMarcas( '$productos', '$porcentajes', '$marca_id', $subregion_id, '$esquema', '$sociedad_id', '$usraudit', :msg ); END;";
			$stmt = OCIParse($this->getHandlerConexion(), $dml);
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) { 		//Inicializacion da error
				$this->setErrors("CON-3","No se pudo inicializar sentencia",$oerr["message"],"Parse");
			} else {  			
				//parse ok.
				ocibindbyname($stmt, ":msg", &$msg, 255);
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS );
				$oerr = OCIError($stmt);
				if(substr($msg,0,3) == 'ERR') {
					$this->setErrors("CON-3",substr($msg,4),$oerr["message"],"Execute");
				}
				OCIFreeStatement($stmt);
			}
		}*/
        
		function subirArchivo($dml_query, $contenido) {
            $archivo_id = null;
			$stmt = OCIParse($this->getHandlerConexion(), 'SELECT CMN_ARCHIVOS_SEQ.NEXTVAL FROM DUAL'); 
			if ($oerr["code"]) {  				//Consulta da error
				$this->setErrors("CON-4","No se pudo inicializar el procedimiento",$oerr["message"],"Parse");
				$ticket = false;
				$archivo_id = false;
			} else {			
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS);
				$oerr = OCIError($stmt); 
				if ($oerr["code"]) {
					$this->setErrors("CON-4b","No se pudo ejecutar el procedimiento",$oerr["message"],"Execute");
					$archivo_id = false;
				} else {
					$result = array();
					$ret = ocifetchinto($stmt, $result, OCI_ASSOC+OCI_NUM+OCI_RETURN_NULLS);
					if($ret == false){
						$this->setErrors("CON-4b","No se pudo ejecutar el procedimiento",$oerr["message"],"Execute");
						$archivo_id = false;
					} else {
						$archivo_id = $result['NEXTVAL'];
                        $dml_query = str_replace("#archivo_id#", $archivo_id, $dml_query);
                		$lob = OCINewDescriptor($this->getHandlerConexion());
						$stmt = OCIParse($this->getHandlerConexion(), $dml_query); 
						$oerr = OCIError($stmt); 
            			if ($oerr["code"]) {  				//Consulta da error
            				$this->setErrors("CON-4","No se pudo realizar la consulta",$oerr["message"],"Parse");
            				$archivo_id = false;
            			} else {
            				OCIBindByName($stmt, ':CONTENIDO', $lob, -1, SQLT_BLOB);
            				OCIExecute($stmt, OCI_DEFAULT);
            				$oerr = OCIError($stmt); 
            				if ($oerr["code"]) { 
            					$this->setErrors("CON-4b","No se pudo ejecutar la consulta",$oerr["message"],"Execute");
            					$archivo_id = false;
            				} else {
            					if ($lob->save($contenido)) {
									$this->setErrors("","","","");
            						OCICommit($this->getHandlerConexion());
            						$lob->free();
            					}
            					else {
            						$this->setErrors("CON-4b","No se pudo ejecutar la consulta",$oerr["message"],"Execute");
            						OCIRollback($this->getHandlerConexion());
            						$archivo_id = false;
            					}
            				}
						}
					}
				}
			}
			return $archivo_id;
		}
        
		function limitarRegsDevueltos($dml_query, $cantRegs){
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
		
		function ejecutarQuery($dml_query){
			$stmt = OCIParse($this->getHandlerConexion(), $dml_query); 
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) {  				//Consulta da error
				$this->setErrors("CON-4","No se pudo realizar la consulta",$oerr["message"],"Parse");
				return false;
			} else {
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS);
				$oerr = OCIError($stmt); 
				if ($oerr["code"]) {
					if($oerr["code"]==1){
						$this->setErrors("DB-UK","Registro duplicado",$oerr["message"],"Execute");
					} elseif($oerr["code"]==2292){
						$this->setErrors("DB-FK","No se puede realizar la accion requerida. Existen datos asociados",$oerr["message"],"Execute");
					} else {
						$this->setErrors("CON-4b","No se pudo ejecutar la consulta",$oerr["message"],"Execute");
					}
					return false;
				} else {
					OCICommit($this->getHandlerConexion());
					return $stmt;
				}
			}
		}

		function ejecutarProcedure($dml_query){
			$msg = null;
			$stmt = OCIParse($this->getHandlerConexion(), $dml_query); 
			$oerr = OCIError($stmt); 
			if ($oerr["code"]) {  				//Consulta da error
				$this->setErrors("CON-4","No se pudo inicializar el procedimiento",$oerr["message"],"Parse");
			} else {
				ocibindbyname($stmt, ":msg", &$msg, 255);
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS );
				$oerr = OCIError($stmt);
				if ($oerr["code"]) {
					$this->setErrors("CON-4b","No se pudo ejecutar el procedimiento",$oerr["message"],"Execute");
				} else {
					if(substr($msg,0,3) == 'ERR') {
						$this->setErrors("DB-SP",substr($msg,4),$oerr["message"],"Execute");
					} else {
						$this->setErrors("",$msg,"","");
						OCIFreeStatement($stmt);
					}
				}
			}
			return null;
		}
		
		function ejecutarProcedureLogueado($dml_query){
			$ticket = null;
			$stmt = OCIParse($this->getHandlerConexion(), 'SELECT NVL(max(TICKET_ID),0) AS TICKET FROM CMN_LOG'); 
			if ($oerr["code"]) {  				//Consulta da error
				$this->setErrors("CON-4","No se pudo inicializar el procedimiento",$oerr["message"],"Parse");
				$ticket = false;
			} else {			
				OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS);
				$oerr = OCIError($stmt); 
				if ($oerr["code"]) {
					$this->setErrors("CON-4b","No se pudo ejecutar el procedimiento",$oerr["message"],"Execute");
					$ticket = false;
				} else {
					$result = array();
					$ret = ocifetchinto($stmt, $result, OCI_ASSOC+OCI_NUM+OCI_RETURN_NULLS);
					if($ret == false){
						$this->setErrors("CON-4b","No se pudo ejecutar el procedimiento",$oerr["message"],"Execute");
						$ticket = false;
					} else {
						$ticket = $result['TICKET'];
						$ticket = $ticket + 1;
						$dml_query = str_replace("#ticket_id#", utf8_decode($ticket), $dml_query);
						$stmt = OCIParse($this->getHandlerConexion(), $dml_query); 
						$oerr = OCIError($stmt); 
						if ($oerr["code"]) {  				//Consulta da error
							$this->setErrors("CON-4","No se pudo inicializar el procedimiento",$oerr["message"],"Parse");
							$ticket = false;
						} else {
							OCIExecute($stmt, OCI_COMMIT_ON_SUCCESS );
							$oerr = OCIError($stmt); 
							if ($oerr["code"]) {
								$this->setErrors("CON-4b","No se pudo ejecutar el procedimiento",$oerr["message"],"Execute");
								$ticket = false;
							} 
							OCIFreeStatement($stmt);
						}
					}
				}
			}
			return $ticket;
		}
		
		function getArrayResultadoQuery($stmt){
			$result = array();
			$ret = ocifetchinto($stmt, $result, OCI_ASSOC+OCI_NUM+OCI_RETURN_NULLS);
			if($ret == false){
				return false;
			} else {
				return $result;
			}
		}
		
		function liberarHandlerQuery($stmt){
			OCIFreeStatement($stmt);
		}
			
		function doDestruct(){
			OCILogoff($this->getHandlerConexion());
		}
		
		function getHandlerConexion(){
			return $this->conHandler;
		}
		
		function setHandlerConexion($conHandler){
			$this->conHandler = $conHandler;
		}
		
		function getErrors(){
			return $this->errors;
		}
		
		function setErrors($errcode,$errmsg,$srvmsg,$debugmsg){
			$this->errors['errcode'] = $errcode;
			$this->errors['errmsg'] = $errmsg;
			$this->errors['srvmsg'] = $srvmsg;
			$this->errors['debugmsg'] = $debugmsg;
		}
		
		function __destruct() {
			$this->doDestruct;
		}
		
	}
?>
	