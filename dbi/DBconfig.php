<?php
	
	$modoLogin = 'SSO';
	
	$srv1 = array();
	$srv1['id'] = "P1";
	$srv1['dbEngine'] = "Oracle"; 
	$srv1['dbServer'] = "(DESCRIPTION=(ADDRESS_LIST=(LOAD_BALANCE=ON)(FAILOVER=ON)(ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.1.52)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.1.53)(PORT = 1521)))(CONNECT_DATA =(SERVICE_NAME = EXTR2)(FAILOVER_MODE=(TYPE=SELECT)(METHOD=basic))))";
	$srv1['dbServerName'] = "";
	$srv1['dbServerDescripcion'] = "WAPI Produccion";
	$srv1['dbServerTipo'] = "PROD";
	$srv1['dbName'] = "";
	$srv1['dbUser'] = "WAPIMP";
	$srv1['dbPassword'] = "---------";

	$dbInfo = array($srv1['id'] => $srv1);

?>
