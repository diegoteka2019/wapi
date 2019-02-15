<?php
	require_once('ConexionDBI.class.php');

	function getConexionDBI($engine,$dbServer, $dbUser, $dbPassword, $dbName = null) {
		switch ($engine){
			case "SQLServer":
				return null;
			case "Oracle":
				return new ConexionDBI($dbServer, $dbUser, $dbPassword);
		}
	}
	
	function getConexionDBI2($dbInfo) {
		switch ($dbInfo['dbEngine']){
			case "SQLServer":
				return null;
			case "Oracle":
				return new ConexionDBI($dbInfo['dbServer'], $dbInfo['dbUser'], $dbInfo['dbPassword']);
		}
	}

?>
