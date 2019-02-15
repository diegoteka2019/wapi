//TITULOS
var titulos =  new Array('Propuestas');
//DMLs
var dmlBuscarMaster = '11604';
var dmlnuevoM = '11601';
var dmlEditarMaster = '11602';
var dmlCopiarMaster = '11617';
var dmlbuscarUnicoM = 'nnnnn'; 
var dmleliminarM = '11603';
var dmlAuditoriaMaster = 'nnnnn';
var dmlgrabarM = '';
//COLUMNAS
var columnasM = new Array('propuesta_id','marcas','vigencia_desde','vigencia_hasta','descripcion','bultos','importe','solicitado','estado','tipo_carga','vigencia_hasta_ext');
var columnasE = new Array('propuesta_id','marcas','vigencia_desde','vigencia_hasta','descripcion','bultos','importe','solicitado','estado','seleccionado','tipo_carga','vigencia_hasta_ext');
var columnasD = new Array('producto_id','division_id','producto_desc','bultos','importe','porcentaje');
var columnasC = new Array('cliente_id','razon_social','seleccionado');
var columnasP = new Array('division_id','producto_id','producto_desc','seleccionado');
var columnasCon = new Array('seleccionado','div_id','concepto','monto');
var	conceptosChecked = new Array();
var	montosChecked = new Array();
var divisionesCheckedCon = '';
//DESCRIPCIONES
var descripcionesM = new Array('Nro','Marcas','Vig. Desde','Vig. Hasta','Descripci&oacute;n','Bultos','Monto','Solicitado','Estado','Envio Masivo','Tipo de Carga','');
var descripcionesD = new Array('Id','Div','Producto','Bultos','Importe','Porcentaje');
var descripcionesC = new Array('Id','Razon Social','Selec.');
var descripcionesP = new Array('Div','Id','Descripci&oacute;n','Selec.');
var descripcionesCon = new Array('Selec.','Div.','Concepto','Monto');
//PRIMARY KEY
var clavesM = new Array('propuesta_id');
var regexpFormM = new Array(".*","[a-zA-Z0-9ñÑ¿?¡! ,.()-_]+");
//FILTROS
var filtroMaster = new Array('propuesta_id','division_id','negocio_id','area_id','subregion_id','cliente_id','tipo_presupuesto_id','mes','anio','estado');
var labelFiltroMaster = new Array('Propuesta: ','Divisi&oacute;n: ','Negocio: ','Area: ','Sub Regi&oacute;n: ','Distribuidor: ','Tipo: ','Mes: ','A&ntilde;o: ','Estado: ');
var mensajeFiltroMaster = new Array('Seleccione la Propuesta','Seleccione la Divisi&oacute;n','Seleccione el Negocio','Seleccione el Area','Seleccione la Sub Regi&oacute;n','Seleccione el Distribuidor','Seleccione el Tipo de Presupuesto','Seleccione la Vigencia Desde','Seleccione la Vigencia Hasta','Seleccione el Estado de la Propuesta');
var requeridoFiltroMaster = new Array(false,false,false,false,false,false,false,true,true,false);
var searchAttrFiltroMaster = new Array('','detalle','detalle','detalle','detalle','detalle','detalle','detalle','','');
var tipoFiltroMaster = new Array('ValidationTextBox','FilteringSelect','FilteringSelect','FilteringSelect','FilteringSelect','FilteringSelect','FilteringSelect','FilteringSelect','ValidationTextBox','ValidationTextBox');
var selectFiltroMaster = new Array('','11408','11403','11406','11606','11633','11407','','','');
//FORMULARIO
var camposFormM = new Array('tipo_carga_propuesta','area_id','subregion_id','tipo_presup_id','propuesta_id','tipo_carga','fecha_carga','tipo_descuento_id','clientes','participacion_cli','vigencia_desde','vigencia_hasta','descrip_prop_id','objetivo_prop_id','empresa_compe_id','dist_fisica_comp','bultos_afectados','op_realizar','canales_mkt','observaciones','prorratea_calibres','criterio','marca_id','concepto_id','monto','pdv','division');
var labelFormM = new Array('Divisi&oacute;n: ','Area: ','Subregi&oacute;n: ','Tipo: ','Nro: ','Tipo de Carga: ','Fecha de Carga: ','Tipificaci&oacute;n: ','Clientes: ','Participaci&oacute;n Dist(%): ','Vigencia Desde: ','Vigencia Hasta: ','Tipo de Acci&oacute;n: ','Objetivo: ','Contra: ','Dist. Fisica Comp(%): ','Bultos afectados por la acci&oacute;n: ','Op. a realizar: ','Canal de Mkt: ','Observaciones: ','Prorratea para todos los calibres: ','Criterio: ','Marca: ','Conceptos: ','Monto: ','PDV: ','Divisi&oacute;n: ');
var requeridoFormM = new Array(true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,true);
var mensajesFormM = new Array('Seleccione el tipo de Carga de Propuesta','Seleccione el Area','Seleccione la Sub Regi&oacute;n','Seleccione el Tipo de Presupuesto','','','','Seleccione la Tipificaci&oacute;n','','Ingrese la Participaci&oacute;n Dist(%)','Seleccione la Vigencia Desde','Seleccione la Vigencia Hasta','Seleccione el Tipo de Acci&oacute;n','Seleccione el Objetivo','Seleccione la Empresa','Ingrese la Dist. Física Comp. (%)','Ingrese la cantidad de Bultos afecetados por la acci&oacute;n','Ingrese las Op. a Realizar','Seleccione los Canales de MKT','','','Ingrese el Monto','','Seleccione la Divisi&oacuten');
var searchAttrFormM = new Array('detalle','detalle','detalle','detalle','','','','detalle','','','','','detalle','detalle','detalle','','','','detalle','','','detalle','detalle','detalle','','','detalle');
var selectFormM = new Array('11408','11406','11629','11407','','','','11607','','','','','11608','11609','11610','','','','11611','','','','11409','11615','','','11408');
var registroSeleccionado = null;
var mesesStore = {identifier:'id',label:'detalle',items:[{id:'01',detalle:'01'},{id:'02',detalle:'02'},{id:'03',detalle:'03'},{id:'04',detalle:'04'},{id:'05',detalle:'05'},{id:'06',detalle:'06'},{id:'07',detalle:'07'},{id:'08',detalle:'08'},{id:'09',detalle:'09'},{id:'10',detalle:'10'},{id:'11',detalle:'11'},{id:'12',detalle:'12'}]};
//Carga las estructuras de las tablas
var layoutMaster = [
    {width: "5%", field: columnasM[0], name: descripcionesM[0]},
    {width: "auto", field: columnasM[1], name: descripcionesM[1]},
    {width: "9%", field: columnasM[2], name: descripcionesM[2]},
	{width: "9%", field: columnasM[3], name: descripcionesM[3]},
	{width: "auto", field: columnasM[4], name: descripcionesM[4]},
    {width: "8%", field: columnasM[5], name: descripcionesM[5]},
	{width: "8%", field: columnasM[6], name: descripcionesM[6]},
	{width: "8%", field: columnasM[7], name: descripcionesM[7]},
	{width: "5%", field: columnasM[8], name: descripcionesM[8]},
	{width: "5%", field: columnasM[9], name: descripcionesM[9],hidden:true},
	{width: "5%", field: columnasE[10], name: descripcionesM[10],hidden:true}];
var layoutEnvio = [
    {width: "5%", field: columnasE[0], name: descripcionesM[0]},
    {width: "auto", field: columnasE[1], name: descripcionesM[1]},
    {width: "9%", field: columnasE[2], name: descripcionesM[2]},
	{width: "9%", field: columnasE[3], name: descripcionesM[3]},
	{width: "auto", field: columnasE[4], name: descripcionesM[4]},
    {width: "8%", field: columnasE[5], name: descripcionesM[5]},
	{width: "8%", field: columnasE[6], name: descripcionesM[6]},
	{width: "8%", field: columnasE[7], name: descripcionesM[7]},
	{width: "5%", field: columnasE[8], name: descripcionesM[8]},
	{width: "5%", field: columnasE[9], name: descripcionesM[9],editable:true, type:dojox.grid.cells.Bool},
	{width: "5%", field: columnasE[10], name: descripcionesM[10],hidden:true},
	{width: "5%", field: columnasE[11], name: descripcionesM[11],hidden:true}];
var CalcularTotal = function(value){
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	var suma = 0;
	var AsignarTotal = function(items,request){
		for(i=0;i<items.length;i++){
			suma+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'importe').replace(',','.'));}
		dojo.byId('divTotalImporte').innerHTML = suma.toFixed(2);
	}
	dijit.byId('gridProductos').store.fetch({query:{},onComplete:AsignarTotal});
	return value.replace(',','.');
}
var layoutDialog = [
    {width: "10px", field: columnasD[0], name: descripcionesD[0],hidden:true},
    {width: "20px", field: columnasD[1], name: descripcionesD[1]},
	{width: "180px", field: columnasD[2], name: descripcionesD[2]},
    {width: "100px", field: columnasD[3], name: descripcionesD[3]},
	{width: "100px", field: columnasD[4], name: descripcionesD[4],editable:true,formatter:CalcularTotal},
	{width: "10px", field: columnasD[5], name: descripcionesD[5],hidden:true}];
var layoutDialogDetalle = [
    {width: "10px", field: columnasD[0], name: descripcionesD[0],hidden:true},
    {width: "20px", field: columnasD[1], name: descripcionesD[1]},
	{width: "180px", field: columnasD[2], name: descripcionesD[2]},
    {width: "100px", field: columnasD[3], name: descripcionesD[3]},
	{width: "100px", field: columnasD[4], name: descripcionesD[4]},
	{width: "10px", field: columnasD[5], name: descripcionesD[5],hidden:true}];
var layoutClientesOrigen = [
    {width: "45px", field: columnasC[0], name: descripcionesC[0]},
    {width: "200px", field: columnasC[1], name: descripcionesC[1]},
    {width: "54px", field: columnasC[2], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridOrigen\');"/> '+descripcionesC[2], editable:true, type:dojox.grid.cells.Bool}];
var layoutClientesDestino = [
    {width: "45px", field: columnasC[0], name: descripcionesC[0]},
    {width: "200px", field: columnasC[1], name: descripcionesC[1]},
    {width: "54px", field: columnasC[2], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridDestino\');"/> '+descripcionesC[2], editable:true, type:dojox.grid.cells.Bool}];
var layoutProductosOrigen = [
    {width: "20px", field: columnasP[0], name: descripcionesP[0],hidden:true},
    {width: "30px", field: columnasP[1], name: descripcionesP[1]},
    {width: "200px", field: columnasP[2], name: descripcionesP[2]},
    {width: "54px", field: columnasP[3], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridOrigenP\');"/> '+descripcionesP[3], editable:true, type:dojox.grid.cells.Bool}];
var layoutProductosDestino = [
    {width: "20px", field: columnasP[0], name: descripcionesP[0]},
    {width: "30px", field: columnasP[1], name: descripcionesP[1]},
	{width: "200px", field: columnasP[2], name: descripcionesP[2]},
    {width: "54px", field: columnasP[3], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridDestinoP\')"/> '+descripcionesP[3], editable:true, type:dojox.grid.cells.Bool}];
var layoutConcepto = [
	{width: "50px", field: columnasCon[0], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnCon(this,\'gridConcepto\');"/> '+descripcionesCon[0], editable:true, type:dojox.grid.cells.Bool},
    {width: "40px", field: columnasCon[1], name: descripcionesCon[1]},
	{width: "200px", field: columnasCon[2], name: descripcionesCon[2]},
    {width: "50px", field: columnasCon[3], name: descripcionesCon[3],editable:true}];
var layoutProductosOrigenN = [
    {width: "20px", field: columnasP[0], name: descripcionesP[0],hidden:true},
    {width: "30px", field: columnasP[1], name: descripcionesP[1]},
    {width: "250px", field: columnasP[2], name: descripcionesP[2]},
    {width: "54px", field: columnasP[3], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridOrigenN\');"/> '+descripcionesP[3], editable:true, type:dojox.grid.cells.Bool}];
var layoutProductosDestinoN = [
    {width: "20px", field: columnasP[0], name: descripcionesP[0]},
    {width: "30px", field: columnasP[1], name: descripcionesP[1]},
	{width: "220px", field: columnasP[2], name: descripcionesP[2]},
    {width: "54px", field: columnasP[3], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridDestinoN\')"/> '+descripcionesP[3], editable:true, type:dojox.grid.cells.Bool}];
var layoutProductosOrigenEx = [
    {width: "20px", field: columnasP[0], name: descripcionesP[0],hidden:true},
    {width: "30px", field: columnasP[1], name: descripcionesP[1]},
    {width: "220px", field: columnasP[2], name: descripcionesP[2]},
    {width: "54px", field: columnasP[3], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridOrigenPEx\');"/> '+descripcionesP[3], editable:true, type:dojox.grid.cells.Bool}];
var layoutProductosDestinoEx = [
    {width: "20px", field: columnasP[0], name: descripcionesP[0]},
    {width: "30px", field: columnasP[1], name: descripcionesP[1]},
	{width: "220px", field: columnasP[2], name: descripcionesP[2]},
    {width: "54px", field: columnasP[3], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridDestinoPEx\')"/> '+descripcionesP[3], editable:true, type:dojox.grid.cells.Bool}];

var cantidadGrillas = 0;
//campos de auditoria
var camposAuditoriaM = new Array('usr_altam','fecha_altam','usr_modifm','fecha_modifm');
var labelAuditoria = new Array('Creado por: ','Fecha de creaci&oacute;n: ','Modificado por: ','Fecha de modificaci&oacute;n: ');
//Carga de titulos
document.getElementById('bloqueMaster').innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	if(dijit.byId('buscarMaster')){
	    dijit.byId('buscarMaster').destroy();
        dijit.byId('separatorMaster').destroy();
        dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'verDetalleMaster',style:'padding-left:3px;padding-right:3px;',label:'Ver Detalle',showLabel:false,iconClass:'verDetalleIcon',disabled:true,onClick:function(){VerDetalleMaster();}}));    
    }
	if(dijit.byId('enviarMasivoAMaster') || dijit.byId('enviarMasivoWMaster')){
		columnasM = columnasE;layoutMaster = layoutEnvio;
		dojo.place('<div id="masivo" class="dijitToolbar" style="text-align:right;height:24px;"><label for="selec">Seleccionar Todos</label><input id="selec" type="checkbox" title="Seleccionar Todos" onclick="CheckColumn(this);"/></div>',dojo.byId('cabecera'));
	}
	if(dijit.byId('cargaMasivaMaster')){dijit.byId('cargaMasivaMaster').attr('disabled',false);}
	ArmadoFiltroYAuditoria();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedMaster(grilla){
	registroSeleccionado = grilla.selection.getSelected();
	for(i=0;i<cantidadGrillas;i++){if(dijit.byId('grilla'+i)!=grilla){dijit.byId('grilla'+i).selection.clear();}}
	HabilitarBotonesMaster(2,false);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function HabilitarBotonesMaster(tipo,bool){
	if(tipo==1){
		if(dijit.byId('bajaexcelMaster')){dijit.byId('bajaexcelMaster').attr('disabled',bool);}}
	if(tipo==2){
		if(dijit.byId('editarMaster')){dijit.byId('editarMaster').attr('disabled',bool);}
		if(dijit.byId('editarMasterEA')){dijit.byId('editarMasterEA').attr('disabled',bool);}
		if(dijit.byId('editarMasterAW')){dijit.byId('editarMasterAW').attr('disabled',bool);}
		if(dijit.byId('enviarAMaster')){dijit.byId('enviarAMaster').attr('disabled',bool);}
		if(dijit.byId('enviarWMaster')){dijit.byId('enviarWMaster').attr('disabled',bool);}
		if(dijit.byId('enviarMasivoAMaster')){dijit.byId('enviarMasivoAMaster').attr('disabled',bool);}
		if(dijit.byId('enviarMasivoWMaster')){dijit.byId('enviarMasivoWMaster').attr('disabled',bool);}
		if(dijit.byId('copiarMaster')){dijit.byId('copiarMaster').attr('disabled',bool);}
		if(dijit.byId('copiarMasterEA')){dijit.byId('copiarMasterEA').attr('disabled',bool);}
		if(dijit.byId('eliminarMaster')){dijit.byId('eliminarMaster').attr('disabled',bool);}
		if(dijit.byId('eliminarMasterEA')){dijit.byId('eliminarMasterEA').attr('disabled',bool);}
		if(dijit.byId('auditMaster')){dijit.byId('auditMaster').attr('disabled',bool);}
		if(dijit.byId('blanquearClaveMaster')){dijit.byId('blanquearClaveMaster').attr('disabled',bool);}
		if(dijit.byId('verDetalleMaster')){dijit.byId('verDetalleMaster').attr('disabled',bool);}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ArmadoFiltroYAuditoria(){
	if(dijit.byId('filtrMaster')){
		//Limpio Filtros
		for(i=0;i<filtroMaster.length;i++){if(dijit.byId('filtro'+i)){dijit.byId('filtro'+i).destroy();}}
		//Creo Filtros
		var divFiltros = new dijit.layout.ContentPane({style:'width:350px;'});
		var tablaFiltros = new dojox.layout.TableContainer({cols:1});
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='TextBox'){tablaFiltros.addChild(new dijit.form.TextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='ValidationTextBox'){tablaFiltros.addChild(new dijit.form.ValidationTextBox({id:'filtro'+i,maxLength:'40',label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',constraints:{datePattern:'dd-MM-yyyy'},promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],onChange:function(){if(tipoFiltroMaster[parseInt(this.id.charAt(6))+1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))+1)).constraints.min = arguments[0];}else if(tipoFiltroMaster[parseInt(this.id.charAt(6))-1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))-1)).constraints.max = arguments[0];}}}));}
			if(tipoFiltroMaster[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[i]})}));}
			if(tipoFiltroMaster[i]=='NumberSpinner'){tablaFiltros.addChild(new dijit.form.NumberSpinner({id:'filtro'+i,label:labelFiltroMaster[i],type:'number',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i]}));}
			}
		
		AutoCompletar(dijit.byId('filtro3'));
		AutoCompletar(dijit.byId('filtro6'));
		dijit.byId('filtro4').attr('disabled',true);
		dijit.byId('filtro5').attr('disabled',true);
		
		//Seteo el anio actual por defecto
		var anioActual = parseInt(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}));
		dijit.byId('filtro8').attr('value',anioActual);
		dijit.byId('filtro8').attr('regExp',"[0-9]+");
		
		dijit.byId('filtro0').attr('regExp',"[0-9]+");
		dijit.byId('filtro0').onChange= function(value){
			if(value!=''){
				dijit.byId('filtro1').attr('disabled',true);dijit.byId('filtro1').attr('required',false);
				dijit.byId('filtro2').attr('disabled',true);dijit.byId('filtro2').attr('required',false);
				dijit.byId('filtro3').attr('disabled',true);dijit.byId('filtro3').attr('required',false);dijit.byId('filtro3').attr('value','');
				dijit.byId('filtro4').attr('disabled',true);dijit.byId('filtro4').attr('required',false);
				dijit.byId('filtro5').attr('disabled',true);dijit.byId('filtro5').attr('required',false);
				dijit.byId('filtro6').attr('disabled',true);dijit.byId('filtro6').attr('required',false);
				dijit.byId('filtro7').attr('disabled',true);dijit.byId('filtro7').attr('required',false);dijit.byId('filtro7').attr('value','');
				dijit.byId('filtro8').attr('disabled',true);dijit.byId('filtro8').attr('required',false);dijit.byId('filtro8').attr('value','');
				dijit.byId('filtro9').attr('disabled',true);dijit.byId('filtro9').attr('required',false);
				}
			else{dijit.byId('filtro1').attr('disabled',false);dijit.byId('filtro1').attr('required',false);
				dijit.byId('filtro2').attr('disabled',false);dijit.byId('filtro2').attr('required',false);
				dijit.byId('filtro3').attr('disabled',false);dijit.byId('filtro3').attr('required',true);AutoCompletar(dijit.byId('filtro3'));
				dijit.byId('filtro4').attr('disabled',false);dijit.byId('filtro4').attr('required',true);
				dijit.byId('filtro5').attr('disabled',false);dijit.byId('filtro5').attr('required',false);
				dijit.byId('filtro6').attr('disabled',false);dijit.byId('filtro6').attr('required',false);
				dijit.byId('filtro7').attr('disabled',false);dijit.byId('filtro7').attr('required',true);
				dijit.byId('filtro8').attr('disabled',false);dijit.byId('filtro8').attr('required',true);dijit.byId('filtro8').attr('value',anioActual);
				dijit.byId('filtro9').attr('disabled',false);dijit.byId('filtro9').attr('required',false);}
				}
		
		dijit.byId('filtro9').attr('regExp',"[A-Z]+");
		
		//agrego la division a la busqueda de marcas
		dijit.byId('filtro4').store.url += '&area_id='+dijit.byId('filtro3').attr('value');
		//Bloqueo Filtro Negocio
		dijit.byId('filtro1').onChange= function(value){
			if(value!=''){
				dijit.byId('filtro2').attr('disabled',true);
				dijit.byId('filtro2').attr('required',false);
				}
			else{dijit.byId('filtro2').attr('disabled',false);
				dijit.byId('filtro2').attr('required',true);}}
		//Bloqueo Filtro Division
		dijit.byId('filtro2').onChange= function(value){
			if(value!=''){
				dijit.byId('filtro1').attr('disabled',true);
				dijit.byId('filtro1').attr('required',false);
				}
			else{dijit.byId('filtro1').attr('disabled',false);
				dijit.byId('filtro1').attr('required',true);}
		}
		//Borrado de subregiones al cambiar la division
		dijit.byId('filtro3').onChange= function(value){
			if(value!=''){
				dijit.byId('filtro4').attr('disabled',false);
				dijit.byId('filtro4').attr('required',true);
				dijit.byId('filtro4').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[4]+'&area_id='+value}));
				dijit.byId('filtro4').store.fetch();}
			else{dijit.byId('filtro4').attr('disabled',true);
				dijit.byId('filtro4').attr('required',false);}
		dijit.byId('filtro4').attr('value',null);}
		dijit.byId('filtro4').onChange= function(value){
			if(value!=''){
				dijit.byId('filtro5').attr('disabled',false);
				dijit.byId('filtro5').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[5]+'&subregion_id='+value}));
				dijit.byId('filtro5').store.fetch();}
			else{dijit.byId('filtro5').attr('disabled',true);
				dijit.byId('filtro5').attr('required',false);}
			dijit.byId('filtro5').attr('value',null);}
		//Asigno store de meses y seteo anio actual por defecto
		dijit.byId('filtro7').attr('store',new dojo.data.ItemFileReadStore({data: mesesStore}));
		
		divFiltros.attr('content',tablaFiltros);
		var botonBuscar = new dijit.form.Button({label:'Buscar',type:'button',onClick:function(){VerificarFiltro();}},document.createElement('div'));
		dojo.place(botonBuscar.domNode,divFiltros.domNode,'last');
		dijit.byId('filtrosMaster').attr('content',divFiltros);}
	if(dijit.byId('auditMaster')){
		//Limpio Filtros
		if(dijit.byId(camposAuditoriaM[0])){for(i=0;i<camposAuditoriaM.length;i++){dijit.byId(camposAuditoriaM[i]).destroy();}}
		//Creo campos de auditoria
		var tablaAuditMaster = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'width:350px;'});
		for(i=0;i<camposAuditoriaM.length;i++){tablaAuditMaster.addChild(new dijit.form.TextBox({id:camposAuditoriaM[i],label:labelAuditoria[i],disabled:true,type:'text'}));}
		dijit.byId('auditoriaMaster').attr('content',tablaAuditMaster);}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerificarFiltro(){
	//Validacion de que el formulario esté bien cargado
	if(dijit.byId('filtrosMaster').validate()){BuscarMaster();dijit.byId('filtrosMaster').onCancel();}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargaMasivaMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:410px;text-align:center;'});
	//Cracion de filtros
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'80',style:'text-align:left;'});
	var mesesStore = {identifier:'mes',label:'mes',items:[{mes:'01'},{mes:'02'},{mes:'03'},{mes:'04'},{mes:'05'},{mes:'06'},{mes:'07'},{mes:'08'},{mes:'09'},{mes:'10'},{mes:'11'},{mes:'12'}]};
	tablaForm.addChild(new dijit.form.FilteringSelect({id:'mes',label:'Mes: ',style:'width:141px;',promptMessage:'Seleccione un Mes',required:true,searchAttr:'mes',store: new dojo.data.ItemFileReadStore({data:mesesStore})}));
	tablaForm.addChild(new dijit.form.NumberTextBox({id:'anio',value:dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),label:'A&ntilde;o: ',style:'width:141px;',promptMessage:'Ingrese un A&ntilde;o',required:true}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:'archivo',label:'Archivo: ',promptMessage:'Seleccione un Archivo',required:true}));
	divCamposM.attr('content',tablaForm);
	tablaForm.startup();
	var widget = new extenciones.myFileInputAuto({id:'userfile',name:'userfile',label:'Examinar...',cancelText:'Cancelar',
					url: 'dbi/propuestas_carga_masiva.php?sid='+gvarSID+'&mes='+dijit.byId('mes').attr('value')+'&anio='+dijit.byId('anio').attr('value'),
					onComplete: function(response,ioArgs,control){
						if (response.ticket_id){
							dijit.byId('dialogCargaMasivaMaster').hide();
                            dijit.byId('mes').destroy();
                            dijit.byId('anio').destroy();
                            dijit.byId('archivo').destroy();
							//Elimino el dialogo
							dijit.byId('userfile').destroyRecursive();
							dijit.byId('dialogCargaMasivaMaster').destroyRecursive();
                            procesando.hide();
							Mensaje('Proceso iniciado. Nro. de Ticket: '+response.ticket_id,'mensaje','master');
						}else{
							dijit.byId('dialogCargaMasivaMaster').hide();
                            dijit.byId('mes').destroy();
                            dijit.byId('anio').destroy();
                            dijit.byId('archivo').destroy();
							//Elimino el dialogo
							dijit.byId('userfile').destroyRecursive();
							//dijit.byId('divCamposM').destroyDescendants();
							dijit.byId('dialogCargaMasivaMaster').destroyRecursive();
                            procesando.hide();
							PopUp('Error', response.errmsg);
						}
					}
				},dijit.byId('archivo').domNode);
	//dijit.byId('userfile').fileInput.readOnly = true;
	widget.startup();
	//Creacion de botones
	var botonCargar = new dijit.form.Button({label:'Cargar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarCargaMasivaMaster();}});
	dojo.place(botonCargar.domNode,divCamposM.domNode,'last');
	var botonPlantilla = new dijit.form.Button({label:'Descargar Plantilla',type:'button',iconClass:'excelIcon',onClick:function(){BajarPlantillaMaster();}});
	dojo.place(botonPlantilla.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){dijit.byId('dialogCargaMasivaMaster').hide();dijit.byId('dialogCargaMasivaMaster').destroyRecursive();dijit.byId('mes').destroy();dijit.byId('anio').destroy();dijit.byId('archivo').destroy();dijit.byId('userfile').destroyRecursive();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Carga Masiva de Propuestas',id:'dialogCargaMasivaMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajarPlantillaMaster() {
	var urlValue = 'data/carga_masiva_propuestas.xls';
	//document.location = urlValue;
	window.open(urlValue,"Bajar_Plantilla_Prop","menubar=no,width=300,height=300,toolbar=no,resizable=yes");
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarCargaMasivaMaster(){
	var mesActual = dojo.date.locale.format(new Date(),{datePattern:"MM",selector:"date"});
	var anioActual = dojo.date.locale.format(new Date(),{datePattern:"yyyy",selector:"date"});
	if(anioActual>parseInt(dijit.byId('anio').attr('value')) || (mesActual>dijit.byId('mes').attr('value') && anioActual==parseInt(dijit.byId('anio').attr('value')))){PopUp('Error','El mes y a&ntilde;o ingresados deben ser mayores o iguales al mes y a&ntilde;o actual');return;}
	if(dijit.byId('userfile').fileInput.value==''){PopUp('Error','Debe seleccionar un archivo');return;}
	var urlValue = 'dbi/propuestas_carga_masiva.php?sid='+gvarSID+'&mes='+dijit.byId('mes').attr('value')+'&anio='+dijit.byId('anio').attr('value');
    dijit.byId('userfile').attr('url',urlValue);
	procesando.show();
    dijit.byId('userfile')._sendFile();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CambiarCliente(){
	dijit.byId('gridOrigen').setStore(null);
	dijit.byId('gridOrigen').attr('autoWidth',true);
	dijit.byId('gridDestino').setStore(null);
	dijit.byId('gridDestino').attr('autoWidth',true);
	while(dijit.byId('clientes').options.length>0){
		dijit.byId('clientes').removeOption(dijit.byId('clientes').options[0]);}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ObtenerNoAplica(){
	var SeleccionarItem = function(item){
		if(dijit.byId(camposFormM[12]).store.getValue(item,'detalle').search('NO APLICA')>0){
			dijit.byId(camposFormM[12]).attr('value',dijit.byId(camposFormM[12]).store.getValue(item,'descripcion_propuesta_id'));
		}
	}
	dijit.byId(camposFormM[12]).store.fetch({query:{},onItem:SeleccionarItem});
	var SeleccionarItem = function(item){
		if(dijit.byId(camposFormM[13]).store.getValue(item,'detalle').search('NO APLICA')>0){
			
			dijit.byId(camposFormM[13]).attr('value',dijit.byId(camposFormM[13]).store.getValue(item,'objetivo_propuesta_id'));
		}
	}
	dijit.byId(camposFormM[13]).store.fetch({query:{},onItem:SeleccionarItem});
	var SeleccionarItem = function(item){
		if(dijit.byId(camposFormM[14]).store.getValue(item,'detalle').search('NO APLICA')>0){
			dijit.byId(camposFormM[14]).attr('value',dijit.byId(camposFormM[14]).store.getValue(item,'empresa_competencia_id'));
		}
	}
	dijit.byId(camposFormM[14]).store.fetch({query:{},onItem:SeleccionarItem});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function NuevoMaster(){
	dijit.byId('gridProductos').attr('structure',layoutDialog);
	//Creacion del formulario
	var tipos = {identifier:'id',label:'detalle',items:[{id:'1',detalle:'1 - Por Divisiones'},{id:'2',detalle:'2 - Por G. de Negocio'}]};
	var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[0],style:'width:130px;',label:'Carga Propuesta: ',required:requeridoFormM[0],promptMessage:mensajesFormM[0],searchAttr:searchAttrFormM[21],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11638'}),onChange:function(){dijit.byId('gridProductos').setStore(null);dijit.byId('gridProductos').update();dojo.byId('divTotalImporte').innerHTML='0';dojo.byId('divTotalBulto').innerHTML='0';dijit.byId(camposFormM[14]).setStore(null);dijit.byId(camposFormM[14]).update;
	
	if(dijit.byId(camposFormM[0]).attr('value')==2 || dijit.byId(camposFormM[0]).attr('value')==1){
		dijit.byId(camposFormM[26]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[26]}))}
	else if (dijit.byId(camposFormM[0]).attr('value')!=2 || dijit.byId(camposFormM[0]).attr('value')!=1 || dijit.byId(camposFormM[0]).attr('value')!=0 || dijit.byId(camposFormM[0]).attr('value')!=''){
		dijit.byId(camposFormM[26]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11422&negocio_id='+dijit.byId(camposFormM[0]).attr('value')}))};
	dijit.byId(camposFormM[26]).attr('value','');
	dijit.byId(camposFormM[22]).attr('value','');
	}}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[1],value:(dijit.byId('filtro2').attr('value'))?dijit.byId('filtro2').attr('value'):null,style:'width:130px;',label:labelFormM[1],searchAttr:searchAttrFormM[1],promptMessage:mensajesFormM[1],required:requeridoFormM[1],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[1]}),onChange:function(value){CambiarCliente();dijit.byId(camposFormM[2]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[2]+'&area_id='+value}));dijit.byId(camposFormM[2]).store.fetch();dijit.byId(camposFormM[2]).attr('value',(dijit.byId('filtro2').attr('value'))?dijit.byId('filtro2').attr('value'):null);AutoCompletar(dijit.byId(camposFormM[2]));}}));
	AutoCompletar(dijit.byId(camposFormM[1]));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[2],style:'width:130px;',label:labelFormM[2],searchAttr:searchAttrFormM[2],promptMessage:mensajesFormM[2],required:requeridoFormM[2],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[2]+'&area_id='+dijit.byId(camposFormM[1]).attr('value')}),onChange:function(value){CambiarCliente();}}));
	AutoCompletar(dijit.byId(camposFormM[2]));
	if(dijit.byId('filtro2').attr('value')){dijit.byId(camposFormM[2]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[2]+'&area_id='+dijit.byId('filtro2').attr('value')}));dijit.byId(camposFormM[2]).store.fetch();dijit.byId(camposFormM[2]).attr('value',(dijit.byId('filtro3').attr('value'))?dijit.byId('filtro3').attr('value'):null);AutoCompletar(dijit.byId(camposFormM[2]));}
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[3],style:'width:130px;',label:labelFormM[3],searchAttr:searchAttrFormM[3],promptMessage:mensajesFormM[3],required:requeridoFormM[3],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[3]}),onChange:function(value){dijit.byId(camposFormM[7]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[7]+'&tipo_presupuesto_id='+value}));dijit.byId(camposFormM[7]).store.fetch();dijit.byId(camposFormM[7]).attr('value',null);dijit.byId(camposFormM[7]).attr('readOnly',false);AutoCompletar(dijit.byId(camposFormM[7]));}}));
	(dijit.byId('filtro4').attr('value'))?dijit.byId(camposFormM[3]).attr('value',dijit.byId('filtro4').attr('value')):AutoCompletar(dijit.byId(camposFormM[3]));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[5],maxLength:'40',value:'Importe',style:'width:130px;',label:labelFormM[5],readOnly:true,required:requeridoFormM[5]}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[25],maxLength:'40',style:'width:130px;',label:labelFormM[25],regExp:regexpFormM[1],required:requeridoFormM[25]}));
	tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[10],value:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,1),constraints:{datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[10],label:labelFormM[10],onChange:function(){dijit.byId(camposFormM[11]).constraints.min = arguments[0];dijit.byId(camposFormM[11]).constraints.max = new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(arguments[0]));}}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[7],style:'width:130px;',readOnly:true,label:labelFormM[7],searchAttr:searchAttrFormM[7],promptMessage:mensajesFormM[7],required:requeridoFormM[7],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[7]+'&tipo_presupuesto_id='+dijit.byId(camposFormM[3]).attr('value')})}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[12],readOnly:true,style:'width:130px;',label:labelFormM[12],searchAttr:searchAttrFormM[12],promptMessage:mensajesFormM[12],required:requeridoFormM[12],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[12]+'&division_id='+dijit.byId('div').attr('value')})}));
	tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[11],value:new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(new Date())),constraints:{datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[11],label:labelFormM[11]}));
	
	dijit.byId(camposFormM[11]).constraints.min = dijit.byId(camposFormM[10]).attr('value');
	dijit.byId(camposFormM[11]).constraints.max = new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(dijit.byId(camposFormM[10]).attr('value')));
	
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[13],readOnly:true,style:'width:130px;',label:labelFormM[13],searchAttr:searchAttrFormM[13],promptMessage:mensajesFormM[13],required:requeridoFormM[13],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[13]+'&division_id='+dijit.byId('div').attr('value')})}));
	tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[14],readOnly:true,required:requeridoFormM[14],style:'width:130px;height:58px;',label:labelFormM[14],multiple:true,onClick:function(){dijit.hideTooltip(this.domNode);}}));
	tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[8],style:'width:130px;height:58px;',required:requeridoFormM[8],multiple:true,label:(labelFormM[8]+'<button class="dijitButtonNode" onclick="dijit.byId(\'gridOrigen\').attr(\'autoWidth\',true);dijit.byId(\'dialogClientes\').show();" type="button">Ver</button>'),readOnly:true}));
	tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[18],required:requeridoFormM[18],style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,onClick:function(){dijit.hideTooltip(this.domNode);},store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[18]})}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[19],maxLength:'40',regExp:regexpFormM[1],maxLength:'100',required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
	dijit.byId('divCampos').attr('content',tablaForm);
	tablaForm.startup();

	var tablaProrrateo = new dojox.layout.TableContainer({id:'tablaProrrateo',cols:1,labelWidth:'190',style:'text-align:left;'});
	tablaProrrateo.addChild(new dijit.form.CheckBox({id:camposFormM[20],title:labelFormM[20],onClick:function(){if(dijit.byId(camposFormM[0]).attr('value')!=0 || dijit.byId(camposFormM[0]).attr('value')!='' ){Prorratea(this.checked);}else{ProrrateaInversa(this.checked);};}}));
	dijit.byId('divProrrateo').attr('content',tablaProrrateo);
	tablaProrrateo.startup(); 
	
	var botonProd = new dijit.form.Button({label:'Ver Productos',type:'button',onClick:function(){dijit.byId('gridOrigenP').attr('autoWidth',true);dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	if(dijit.byId(camposFormM[0]).attr('value')!='' || dijit.byId(camposFormM[0]).attr('value')!=0 ){
		if(dijit.byId(camposFormM[0]).attr('value')==1){dijit.byId('dialogProductosDivision').show();}
		else if (dijit.byId(camposFormM[0]).attr('value')==2){dijit.byId('dialogProductosGrupos').show();}
		else if (dijit.byId(camposFormM[0]).attr('value')!=1 || dijit.byId(camposFormM[0]).attr('value')!=2 || dijit.byId(camposFormM[0]).attr('value')!=0 || dijit.byId(camposFormM[0]).attr('value')!=''){dijit.byId('dialogProductosGruposEx').show();BuscarMarcasEx();}
	}
		else{PopUp('Error','Debe ingresar el tipo de Propuesta a cargar.');return;};
	}});
		
	dojo.place(botonProd.domNode,dijit.byId('divProrrateoProductos').domNode,'last');
	
	var tablaProrrateoDefine = new dojox.layout.TableContainer({id:'tablaProrrateoDefine',cols:1,labelWidth:'190',style:'text-align:left;'});
	var criterios = {identifier:'id',label:'detalle',items:[{id:'1',detalle:'Por Marca'},{id:'2',detalle:'Por Concepto'}]};
	tablaProrrateoDefine.addChild(new dijit.form.FilteringSelect({id:camposFormM[21],style:'width:130px;',label:labelFormM[21],searchAttr:searchAttrFormM[21],store:new dojo.data.ItemFileReadStore({data:criterios}),onChange:function(){DefinoProrrateo(this.value);}}));
	dijit.byId('divProrrateoDefine').attr('content',tablaProrrateoDefine);
	tablaProrrateoDefine.startup(); 
	
	var tablaProrrateoPorMarca = new dojox.layout.TableContainer({id:'tablaProrrateoPorMarca',cols:1,labelWidth:'190',style:'text-align:left;'});
	tablaProrrateoPorMarca.addChild(new dijit.form.NumberTextBox({id:camposFormM[24],value:'0',style:'width:130px;',label:labelFormM[24]}));
	tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[26],style:'width:130px;',label:labelFormM[26],searchAttr:searchAttrFormM[26],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[26]}),onChange:function(value){
	
	if(dijit.byId(camposFormM[0]).attr('value')==2 || dijit.byId(camposFormM[0]).attr('value')==1){
		dijit.byId(camposFormM[22]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[22]+'&division_id='+dijit.byId('division').attr('value')}));dijit.byId(camposFormM[22]).store.fetch();
	}else if (dijit.byId(camposFormM[0]).attr('value')!=2 || dijit.byId(camposFormM[0]).attr('value')!=1 || dijit.byId(camposFormM[0]).attr('value')!=0 || dijit.byId(camposFormM[0]).attr('value')!=''){
	dijit.byId(camposFormM[22]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11424&negocio_id='+dijit.byId(camposFormM[0]).attr('value')}));
	}
	}}));
	
	
	tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[22],style:'width:130px;',label:labelFormM[22],searchAttr:searchAttrFormM[22],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[22]+'&division_id='+dijit.byId(camposFormM[26]).attr('value')})}));
	var botonCargarM = new dijit.form.Button({label:'Cargar',type:'button',onClick:function(){CargarProductosM();}});
	dijit.byId('divProrrateoPorMarca').attr('content',tablaProrrateoPorMarca);
	dojo.place(botonCargarM.domNode,dijit.byId('divProrrateoPorMarca').domNode,'last');
	tablaProrrateoPorMarca.startup();
	
	
	var tablaProrrateoPorConcepto = new dojox.layout.TableContainer({id:'tablaProrrateoPorConcepto',cols:1,labelWidth:'190',style:'text-align:left;'});
	tablaProrrateoPorConcepto.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[23],required:requeridoFormM[23],style:'width:200px;height:58px;',label:labelFormM[23],multiple:true,onClick:function(){dijit.hideTooltip(this.domNode);},store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[23]+'&area_id='+dijit.byId('area_id').attr('value')+'&subregion_id='+dijit.byId('subregion_id').attr('value')})}));
	var botonCargarCon = new dijit.form.Button({label:'Cargar Concepto/s',type:'button',onClick:function(){VerDialogoConcepto();BuscarConceptos();}});
	var botonCargarC = new dijit.form.Button({label:'Cargar',type:'button',onClick:function(){CargarProductosC();}});
	dijit.byId('divProrrateoPorConcepto').attr('content',tablaProrrateoPorConcepto);
	dojo.place(botonCargarC.domNode,dijit.byId('divProrrateoPorConcepto').domNode,'last');
	dojo.place(botonCargarCon.domNode,dijit.byId('divProrrateoPorConcepto').domNode,'first');
	tablaProrrateoPorConcepto.startup(); 

	dijit.byId('neg').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=14008'}));
	dijit.byId('div').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11408'}));
		
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	//Seteo propiedades para Editar
	dmlgrabarM = dmlnuevoM;

	dijit.byId("dialogMaster").show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDialogoConcepto(){
	dijit.byId('gridConcepto').attr('autoWidth',true);
	dijit.byId('dialogConcepto').show();
}
/////////////////////////////////////buscarpro///////////////////////////////////////////////////////////////
function BuscarConceptos(){
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[23]+'&area_id='+dijit.byId('area_id').attr('value')+'&subregion_id='+dijit.byId('subregion_id').attr('value');
	dijit.byId('gridConcepto').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridConcepto').attr('autoWidth',true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarConceptos(){
	gridConcepto.edit.apply();
	var divisionesChecked = '';
	while(dijit.byId(camposFormM[23]).options.length>0){
		dijit.byId(camposFormM[23]).removeOption(dijit.byId(camposFormM[23]).options[0]);}
	if(dijit.byId('gridConcepto').store==null){return;}
	var ActualizarMultiselect = function(items,request){
		conceptosChecked =[];
		montosChecked=[];
		for(i=0;i<items.length;i++){
				conceptosChecked[i]=items[i]['concepto_id'][0];
				montosChecked[i]=items[i]['monto'][0];
				if(parseFloat(items[i]['monto'])>0){
				divisionesChecked +=parseInt(items[i]['div_id'])+',';
					dijit.byId(camposFormM[23]).addOption({disabled:true,selected:true,label:items[i]['concepto']+' -  $'+items[i]['monto'],value:items[i]['concepto']});
				}else{PopUp('Error','Falta ingresar monto en alguno de los Conceptos seleccionados o esta en $0. Verifique.');dijit.byId(camposFormM[23]).removeOption({disabled:true,selected:true,label:items[i]['concepto']+' -  $'+items[i]['monto'],value:items[i]['concepto_id']});return;}
				}
				divisionesCheckedCon = divisionesChecked.substr(0,divisionesChecked.length-1);
				dijit.byId("dialogConcepto").hide();
				}
	dijit.byId('gridConcepto').store.fetch({query:{seleccionado:true},onComplete:ActualizarMultiselect});	
	

}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarDivisiones(){
dijit.byId('divN').attr('value','');
dijit.byId('divN').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11422&negocio_id='+dijit.byId('neg').value}));
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMarcasN(){
dijit.byId('marcN').attr('value','');
dijit.byId('marcN').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11423&negocio_id='+dijit.byId('neg').value+'&division_id='+dijit.byId('divN').value}));
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMarcas(){
dijit.byId('marc').attr('value','');
dijit.byId('marc').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11409&division_id='+dijit.byId('div').value}));
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function Prorratea(checked){
	dijit.byId(camposFormM[21]).attr('value','');
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	if(checked==true){
		dojo.byId('protrue').style.display = 'block';
		dojo.byId('prod').style.display = 'none';}
	else if(checked==false){
		dojo.byId('prod').style.display = 'block';
		dojo.byId('protrue').style.display = 'none';
		dojo.byId('marca').style.display = 'none';
		dojo.byId('concepto').style.display = 'none';}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ProrrateaInversa(checked){
	dijit.byId(camposFormM[21]).attr('value','');
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	if(checked==true){
		dijit.byId(camposFormM[20]).attr('value',false);
		PopUp('Error','Debe ingresar el tipo de Propuesta a cargar.');
		}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function DefinoProrrateo(value){
	if(value==1){
		dojo.byId('marca').style.display = 'block';
		dojo.byId('concepto').style.display = 'none';
		}
	else if(value==2){
		dojo.byId('concepto').style.display = 'block';
		dojo.byId('marca').style.display = 'none';
		}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductosM(){
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11614&subregion_id='+dijit.byId('subregion_id').attr('value')+'&marca_id='+dijit.byId('marca_id').attr('value')+'&monto='+dijit.byId('monto').attr('value');
	gridProductos.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	gridProductos.attr("autoWidth",true);
	gridProductos.update();
	gridProductos.selection.clear();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductosC(){
	dijit.byId('gridProductos').store = null;
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11616&concepto_id='+conceptosChecked[0]+'&monto='+montosChecked[0];	
		gridProductos.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));

	var ActualizarGrilla = function(){	
	if(dijit.byId('gridProductos').store){	
	for (i=1;i<conceptosChecked.length; i++){		
		var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11616&concepto_id='+conceptosChecked[i]+'&monto='+montosChecked[i];	
			dojo.xhrGet({url:urlValue,handleAs:'json',sync:'true',load:function(response){
				for(i=0;i<response.items.length;i++){
					dijit.byId('gridProductos').store.newItem({division_id:response.items[i].division_id,producto_id:response.items[i].producto_id, producto_desc:response.items[i].producto_desc,bultos:'0',importe:response.items[i].importe,porcentaje:''});}
			}});}
	}
	}
	if(dijit.byId(camposFormM[12])){
		dijit.byId(camposFormM[12]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[12]+'&division_id='+divisionesCheckedCon}));
		dijit.byId(camposFormM[12]).store.fetch();
		dijit.byId(camposFormM[12]).attr('value',null);
		dijit.byId(camposFormM[12]).attr('readOnly',false);
		AutoCompletar(dijit.byId(camposFormM[12]));}
		
		if(dijit.byId(camposFormM[13])){
		dijit.byId(camposFormM[13]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[13]+'&division_id='+divisionesCheckedCon}));
		dijit.byId(camposFormM[13]).store.fetch();
		dijit.byId(camposFormM[13]).attr('value',null);
		dijit.byId(camposFormM[13]).attr('readOnly',false);
		AutoCompletar(dijit.byId(camposFormM[13]));}
		
		
		//Marca
		if (dijit.byId(camposFormM[0]).attr('value')==1){	
			if(dijit.byId(camposFormM[14])){
			dijit.byId(camposFormM[14]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[14]+'&division_id='+divisionesCheckedCon}));
			dijit.byId(camposFormM[14]).store.fetch();
			dijit.byId(camposFormM[14]).attr('readOnly',false);
			AutoCompletar(dijit.byId(camposFormM[14]));
			dijit.byId(camposFormM[14]).startup();}}
		else if (dijit.byId(camposFormM[0]).attr('value')==2){	
			if(dijit.byId(camposFormM[14])){
			dijit.byId(camposFormM[14]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[14]+'&division_id=998'}));
			dijit.byId(camposFormM[14]).store.fetch();
			dijit.byId(camposFormM[14]).attr('readOnly',false);
			AutoCompletar(dijit.byId(camposFormM[14]));
			dijit.byId(camposFormM[14]).startup();}}

		if(dijit.byId(camposFormM[12])){
		ObtenerNoAplica();
		}
	gridProductos.store.fetch({query:{},onComplete:ActualizarGrilla});
	gridProductos.attr("autoWidth",true);
	gridProductos.update();
	gridProductos.selection.clear();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductos(){
	var divisionesChecked = '';
	if(dijit.byId('gridDestinoP').store==null){return;}
	dojo.byId('divTotalImporte').innerHTML = '0';
	if(!dijit.byId('gridProductos').store){
		var storeProductos = {identifier: 'producto_id', label: 'producto_desc', items: []};
		dijit.byId('gridProductos').setStore(new dojo.data.ItemFileWriteStore({data: storeProductos}));
		dijit.byId('gridProductos').attr("autoWidth",true);
		dijit.byId('gridProductos').update();
	}
	//Elimino los items que ya no estan
	var ActualizarGrillaE = function(item){
		dijit.byId('gridDestinoP').store.fetchItemByIdentity({
			identity:dijit.byId('gridProductos').store.getValue(item,'producto_id'),
			onItem:function(itemDestino){
				if(!itemDestino || dijit.byId('gridProductos').store.getValue(item,'porcentaje')!=''){dijit.byId('gridProductos').store.deleteItem(item);}
			}
		});
	}
	var GrabarGrilla = function(items,request){
		dijit.byId('gridProductos').store.save();
		dijit.byId("dialogProductosDivision").hide();
	}
	dijit.byId('gridProductos').store.fetch({query:{},onItem:ActualizarGrillaE,onComplete:GrabarGrilla});
	//Agrego los nuevos items
	var ActualizarGrilla = function(items,request){
		for(i=0;i<items.length;i++){
		divId = dijit.byId('gridDestinoP').store.getValue(items[i],'division_id');
		divisionesChecked+=divId+','
			dijit.byId('gridProductos').store.fetchItemByIdentity({
				identity:dijit.byId('gridDestinoP').store.getValue(items[i],'producto_id'),
				onItem:function(item){
					if(!item){dijit.byId('gridProductos').store.newItem({division_id:dijit.byId('gridDestinoP').store.getValue(items[i],'division_id'),producto_id:dijit.byId('gridDestinoP').store.getValue(items[i],'producto_id'), producto_desc:dijit.byId('gridDestinoP').store.getValue(items[i],'producto_desc'),bultos:'0',importe:'0',porcentaje:''});}					
				}
			});
		}
		divisionesChecked = divisionesChecked.substr(0,divisionesChecked.length-1);
		
		if(dijit.byId(camposFormM[12])){
		dijit.byId(camposFormM[12]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[12]+'&division_id='+divisionesChecked}));
		dijit.byId(camposFormM[12]).store.fetch();
		dijit.byId(camposFormM[12]).attr('value',null);
		dijit.byId(camposFormM[12]).attr('readOnly',false);
		AutoCompletar(dijit.byId(camposFormM[12]));}
		
		if(dijit.byId(camposFormM[13])){
		dijit.byId(camposFormM[13]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[13]+'&division_id='+divisionesChecked}));
		dijit.byId(camposFormM[13]).store.fetch();
		dijit.byId(camposFormM[13]).attr('value',null);
		dijit.byId(camposFormM[13]).attr('readOnly',false);
		AutoCompletar(dijit.byId(camposFormM[13]));}
		
		
		//Marca
		if (dijit.byId(camposFormM[0]).attr('value')==1){	
			if(dijit.byId(camposFormM[14])){
			dijit.byId(camposFormM[14]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[14]+'&division_id='+divisionesChecked}));
			dijit.byId(camposFormM[14]).store.fetch();
			dijit.byId(camposFormM[14]).attr('readOnly',false);
			AutoCompletar(dijit.byId(camposFormM[14]));
			dijit.byId(camposFormM[14]).startup();}}
		else if (dijit.byId(camposFormM[0]).attr('value')==2){	
			if(dijit.byId(camposFormM[14])){
			dijit.byId(camposFormM[14]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[14]+'&division_id=998'}));
			dijit.byId(camposFormM[14]).store.fetch();
			dijit.byId(camposFormM[14]).attr('readOnly',false);
			AutoCompletar(dijit.byId(camposFormM[14]));
			dijit.byId(camposFormM[14]).startup();}}

		if(dijit.byId(camposFormM[12])){
		ObtenerNoAplica();
		}
		dijit.byId('gridProductos').store.save();
		dijit.byId("dialogProductosDivision").hide();
	}
	dijit.byId('gridDestinoP').store.fetch({query:{},onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductosN(){
	var divisionesChecked = '';
	if(dijit.byId('gridDestinoN').store==null){return;}
	dojo.byId('divTotalImporte').innerHTML = '0';
	if(!dijit.byId('gridProductos').store){
		var storeProductos = {identifier: 'producto_id', label: 'producto_desc', items: []};
		dijit.byId('gridProductos').setStore(new dojo.data.ItemFileWriteStore({data: storeProductos}));
		dijit.byId('gridProductos').attr("autoWidth",true);
		dijit.byId('gridProductos').update();
	}
	//Elimino los items que ya no estan
	var ActualizarGrillaE = function(item){
		dijit.byId('gridDestinoN').store.fetchItemByIdentity({
			identity:dijit.byId('gridProductos').store.getValue(item,'producto_id'),
			onItem:function(itemDestino){
				if(!itemDestino || dijit.byId('gridProductos').store.getValue(item,'porcentaje')!=''){dijit.byId('gridProductos').store.deleteItem(item);}
			}
		});
	}
	var GrabarGrilla = function(items,request){
		dijit.byId('gridProductos').store.save();
		dijit.byId("dialogProductosGrupos").hide();
	}
	dijit.byId('gridProductos').store.fetch({query:{},onItem:ActualizarGrillaE,onComplete:GrabarGrilla});
	//Agrego los nuevos items
	var ActualizarGrilla = function(items,request){
		for(i=0;i<items.length;i++){
		divId = dijit.byId('gridDestinoN').store.getValue(items[i],'division_id');
		divisionesChecked+=divId+','
			dijit.byId('gridProductos').store.fetchItemByIdentity({
				identity:dijit.byId('gridDestinoN').store.getValue(items[i],'producto_id'),
				onItem:function(item){
					if(!item){dijit.byId('gridProductos').store.newItem({division_id:dijit.byId('gridDestinoN').store.getValue(items[i],'division_id'),producto_id:dijit.byId('gridDestinoN').store.getValue(items[i],'producto_id'), producto_desc:dijit.byId('gridDestinoN').store.getValue(items[i],'producto_desc'),bultos:'0',importe:'0',porcentaje:''});}					
				}
			});
		}
		divisionesChecked = divisionesChecked.substr(0,divisionesChecked.length-1);
		
		if(dijit.byId(camposFormM[12])){
		dijit.byId(camposFormM[12]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[12]+'&division_id='+divisionesChecked}));
		dijit.byId(camposFormM[12]).store.fetch();
		dijit.byId(camposFormM[12]).attr('value',null);
		dijit.byId(camposFormM[12]).attr('readOnly',false);
		AutoCompletar(dijit.byId(camposFormM[12]));}
		
		if(dijit.byId(camposFormM[13])){
		dijit.byId(camposFormM[13]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[13]+'&division_id='+divisionesChecked}));
		dijit.byId(camposFormM[13]).store.fetch();
		dijit.byId(camposFormM[13]).attr('value',null);
		dijit.byId(camposFormM[13]).attr('readOnly',false);
		AutoCompletar(dijit.byId(camposFormM[13]));}
		
		
		//Marca
		if (dijit.byId(camposFormM[0]).attr('value')==1){	
			if(dijit.byId(camposFormM[14])){
			dijit.byId(camposFormM[14]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[14]+'&division_id='+divisionesChecked}));
			dijit.byId(camposFormM[14]).store.fetch();
			dijit.byId(camposFormM[14]).attr('readOnly',false);
			AutoCompletar(dijit.byId(camposFormM[14]));
			dijit.byId(camposFormM[14]).startup();}}
		else if (dijit.byId(camposFormM[0]).attr('value')==2){	
			if(dijit.byId(camposFormM[14])){
			dijit.byId(camposFormM[14]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[14]+'&division_id=998'}));
			dijit.byId(camposFormM[14]).store.fetch();
			dijit.byId(camposFormM[14]).attr('readOnly',false);
			AutoCompletar(dijit.byId(camposFormM[14]));
			dijit.byId(camposFormM[14]).startup();}}

		if(dijit.byId(camposFormM[12])){
		ObtenerNoAplica();
		}
		dijit.byId('gridProductos').store.save();
		dijit.byId("dialogProductosGrupos").hide();
	}
	dijit.byId('gridDestinoN').store.fetch({query:{},onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductosEx(){
	var divisionesChecked = '';
	if(dijit.byId('gridDestinoPEx').store==null){return;}
	dojo.byId('divTotalImporte').innerHTML = '0';
	if(!dijit.byId('gridProductos').store){
		var storeProductos = {identifier: 'producto_id', label: 'producto_desc', items: []};
		dijit.byId('gridProductos').setStore(new dojo.data.ItemFileWriteStore({data: storeProductos}));
		dijit.byId('gridProductos').attr("autoWidth",true);
		dijit.byId('gridProductos').update();
	}
	//Elimino los items que ya no estan
	var ActualizarGrillaE = function(item){
		dijit.byId('gridDestinoPEx').store.fetchItemByIdentity({
			identity:dijit.byId('gridProductos').store.getValue(item,'producto_id'),
			onItem:function(itemDestino){
				if(!itemDestino || dijit.byId('gridProductos').store.getValue(item,'porcentaje')!=''){dijit.byId('gridProductos').store.deleteItem(item);}
			}
		});
	}
	var GrabarGrilla = function(items,request){
		dijit.byId('gridProductos').store.save();
		dijit.byId("dialogProductosGruposEx").hide();
	}
	dijit.byId('gridProductos').store.fetch({query:{},onItem:ActualizarGrillaE,onComplete:GrabarGrilla});
	//Agrego los nuevos items
	var ActualizarGrilla = function(items,request){
		for(i=0;i<items.length;i++){
		divId = dijit.byId('gridDestinoPEx').store.getValue(items[i],'division_id');
		divisionesChecked+=divId+','
			dijit.byId('gridProductos').store.fetchItemByIdentity({
				identity:dijit.byId('gridDestinoPEx').store.getValue(items[i],'producto_id'),
				onItem:function(item){
					if(!item){dijit.byId('gridProductos').store.newItem({division_id:dijit.byId('gridDestinoPEx').store.getValue(items[i],'division_id'),producto_id:dijit.byId('gridDestinoPEx').store.getValue(items[i],'producto_id'), producto_desc:dijit.byId('gridDestinoPEx').store.getValue(items[i],'producto_desc'),bultos:'0',importe:'0',porcentaje:''});}					
				}
			});
		}
		divisionesChecked = divisionesChecked.substr(0,divisionesChecked.length-1);
		if(dijit.byId(camposFormM[12])){
		dijit.byId(camposFormM[12]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[12]+'&division_id='+divisionesChecked}));
		dijit.byId(camposFormM[12]).store.fetch();
		dijit.byId(camposFormM[12]).attr('value',null);
		dijit.byId(camposFormM[12]).attr('readOnly',false);
		AutoCompletar(dijit.byId(camposFormM[12]));}
		
		if(dijit.byId(camposFormM[13])){
		dijit.byId(camposFormM[13]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[13]+'&division_id='+divisionesChecked}));
		dijit.byId(camposFormM[13]).store.fetch();
		dijit.byId(camposFormM[13]).attr('value',null);
		dijit.byId(camposFormM[13]).attr('readOnly',false);
		AutoCompletar(dijit.byId(camposFormM[13]));}
		
		
		//Marca
		if (dijit.byId(camposFormM[0]).attr('value')==1){	
			if(dijit.byId(camposFormM[14])){
			dijit.byId(camposFormM[14]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[14]+'&division_id='+divisionesChecked}));
			dijit.byId(camposFormM[14]).store.fetch();
			dijit.byId(camposFormM[14]).attr('readOnly',false);
			AutoCompletar(dijit.byId(camposFormM[14]));
			dijit.byId(camposFormM[14]).startup();}}
		else if (dijit.byId(camposFormM[0]).attr('value')==2 || dijit.byId(camposFormM[0]).attr('value')!=0 || dijit.byId(camposFormM[0]).attr('value')!=''){	
			if(dijit.byId(camposFormM[14])){
			dijit.byId(camposFormM[14]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[14]+'&division_id=998'}));
			dijit.byId(camposFormM[14]).store.fetch();
			dijit.byId(camposFormM[14]).attr('readOnly',false);
			AutoCompletar(dijit.byId(camposFormM[14]));
			dijit.byId(camposFormM[14]).startup();}}

		if(dijit.byId(camposFormM[12])){
		ObtenerNoAplica();
		}
		dijit.byId('gridProductos').store.save();
		dijit.byId("dialogProductosGruposEx").hide();
	}
	dijit.byId('gridDestinoPEx').store.fetch({query:{},onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductosInversa(){
	var storeDestino = {identifier: 'producto_id', label: 'producto_desc', items: []};
	dijit.byId('gridDestinoP').setStore(new dojo.data.ItemFileWriteStore({data: storeDestino}));
	dijit.byId('gridDestinoP').attr('autoWidth',true);
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	dijit.byId('dialogProductosDivision').show();
	//Agrego los nuevos items
	var ActualizarGrilla = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('gridDestinoP').store.fetchItemByIdentity({
				identity:dijit.byId('gridProductos').store.getValue(items[i],'producto_id'),
				onItem:function(item){
					if(!item){dijit.byId('gridDestinoP').store.newItem({division_id:dijit.byId('gridProductos').store.getValue(items[i],'division_id'),producto_id:dijit.byId('gridProductos').store.getValue(items[i],'producto_id'), producto_desc:dijit.byId('gridProductos').store.getValue(items[i],'producto_desc'),seleccionado:false});}
				}
			});
		}
		dijit.byId('gridDestinoP').store.save();
		dijit.byId('gridDestinoP').attr('autoWidth',true);
	}
	dijit.byId('gridProductos').store.fetch({query:{},onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductosInversaN(){
	var storeDestino = {identifier: 'producto_id', label: 'producto_desc', items: []};
	dijit.byId('gridDestinoN').setStore(new dojo.data.ItemFileWriteStore({data: storeDestino}));
	dijit.byId('gridDestinoN').attr('autoWidth',true);
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	dijit.byId('dialogProductosGrupos').show();
	//Agrego los nuevos items
	var ActualizarGrilla = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('gridDestinoN').store.fetchItemByIdentity({
				identity:dijit.byId('gridProductos').store.getValue(items[i],'producto_id'),
				onItem:function(item){
					if(!item){dijit.byId('gridDestinoN').store.newItem({division_id:dijit.byId('gridProductos').store.getValue(items[i],'division_id'),producto_id:dijit.byId('gridProductos').store.getValue(items[i],'producto_id'), producto_desc:dijit.byId('gridProductos').store.getValue(items[i],'producto_desc'),seleccionado:false});}
				}
			});
		}
		dijit.byId('gridDestinoN').store.save();
		dijit.byId('gridDestinoN').attr('autoWidth',true);
	}
	dijit.byId('gridProductos').store.fetch({query:{},onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarClientes(){
	while(dijit.byId('clientes').options.length>0){
		dijit.byId('clientes').removeOption(dijit.byId('clientes').options[0]);}
	if(dijit.byId('gridDestino').store==null){return;}
	var ActualizarMultiselect = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('clientes').addOption({disabled:true,selected:true,label:items[i]['cliente_id']+'-'+items[i]['razon_social'],value:items[i]['cliente_id']});}
		dijit.byId("dialogClientes").hide();
	}
	dijit.byId('gridDestino').store.fetch({query:{},onComplete:ActualizarMultiselect});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProducto(){
	if(!dijit.byId('gridDestinoP').store){
		var storeDestino = {identifier: 'producto_id', label: 'producto_desc', items: []};
		dijit.byId('gridDestinoP').setStore(new dojo.data.ItemFileWriteStore({data: storeDestino}));
		dijit.byId('gridDestinoP').attr('autoWidth',true);
	}
	var AgregarItem = function(item){
		var proId = dijit.byId('gridOrigenP').store.getValue(item,'producto_id');
		var proDesc = dijit.byId('gridOrigenP').store.getValue(item,'producto_desc');
		var divId = dijit.byId('gridOrigenP').store.getValue(item,'division_id');
		dijit.byId('gridDestinoP').store.fetchItemByIdentity({identity:proId,onItem:function(item){
			if(item == null){dijit.byId('gridDestinoP').store.newItem({division_id:divId,producto_id:proId,producto_desc:proDesc,seleccionado:false});}}});
	}
	var ActualizarGrilla = function(items,request){dijit.byId('gridDestinoP').store.save();}
	if(dijit.byId('gridOrigenP').store){dijit.byId('gridOrigenP').store.fetch({query:{seleccionado:true},onItem:AgregarItem,onComplete:ActualizarGrilla});}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SacarProducto(){
	var QuitarItem = function(item){dijit.byId('gridDestinoP').store.deleteItem(item);}
	var ActualizarGrilla = function(items,request){dijit.byId('gridDestinoP').store.save();}
	dijit.byId('gridDestinoP').store.fetch({query:{seleccionado:true},onItem:QuitarItem,onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductoN(){
	if(!dijit.byId('gridDestinoN').store){
		var storeDestino = {identifier: 'producto_id', label: 'producto_desc', items: []};
		dijit.byId('gridDestinoN').setStore(new dojo.data.ItemFileWriteStore({data: storeDestino}));
		dijit.byId('gridDestinoN').attr('autoWidth',true);
	}
	var AgregarItem = function(item){
		var proId = dijit.byId('gridOrigenN').store.getValue(item,'producto_id');
		var proDesc = dijit.byId('gridOrigenN').store.getValue(item,'producto_desc');
		var divId = dijit.byId('gridOrigenN').store.getValue(item,'division_id');
		dijit.byId('gridDestinoN').store.fetchItemByIdentity({identity:proId,onItem:function(item){
			if(item == null){dijit.byId('gridDestinoN').store.newItem({division_id:divId,producto_id:proId,producto_desc:proDesc,seleccionado:false});}}});
	}
	var ActualizarGrilla = function(items,request){dijit.byId('gridDestinoN').store.save();}
	if(dijit.byId('gridOrigenN').store){dijit.byId('gridOrigenN').store.fetch({query:{seleccionado:true},onItem:AgregarItem,onComplete:ActualizarGrilla});}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SacarProductoN(){
	var QuitarItem = function(item){dijit.byId('gridDestinoN').store.deleteItem(item);}
	var ActualizarGrilla = function(items,request){dijit.byId('gridDestinoN').store.save();}
	dijit.byId('gridDestinoN').store.fetch({query:{seleccionado:true},onItem:QuitarItem,onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductoEx(){
	if(!dijit.byId('gridDestinoPEx').store){
		var storeDestino = {identifier: 'producto_id', label: 'producto_desc', items: []};
		dijit.byId('gridDestinoPEx').setStore(new dojo.data.ItemFileWriteStore({data: storeDestino}));
		dijit.byId('gridDestinoPEx').attr('autoWidth',true);
	}
	var AgregarItem = function(item){
		var proId = dijit.byId('gridOrigenPEx').store.getValue(item,'producto_id');
		var proDesc = dijit.byId('gridOrigenPEx').store.getValue(item,'producto_desc');
		var divId = dijit.byId('gridOrigenPEx').store.getValue(item,'division_id');
		dijit.byId('gridDestinoPEx').store.fetchItemByIdentity({identity:proId,onItem:function(item){
			if(item == null){dijit.byId('gridDestinoPEx').store.newItem({division_id:divId,producto_id:proId,producto_desc:proDesc,seleccionado:false});}}});
	}
	var ActualizarGrilla = function(items,request){dijit.byId('gridDestinoPEx').store.save();}
	if(dijit.byId('gridOrigenPEx').store){dijit.byId('gridOrigenPEx').store.fetch({query:{seleccionado:true},onItem:AgregarItem,onComplete:ActualizarGrilla});}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SacarProductoEx(){
	var QuitarItem = function(item){dijit.byId('gridDestinoPEx').store.deleteItem(item);}
	var ActualizarGrilla = function(items,request){dijit.byId('gridDestinoPEx').store.save();}
	dijit.byId('gridDestinoPEx').store.fetch({query:{seleccionado:true},onItem:QuitarItem,onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarProductosEx(){
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11639&marca_id='+dijit.byId('marcEx').attr('value')+'&producto_id='+dijit.byId('prod_idEx').valueNode.value+'&producto_desc='+dijit.byId('descEx').attr('value');
	dijit.byId('gridOrigenPEx').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigenPEx').attr('autoWidth',true);

}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarDivisionesEx(){
dijit.byId('divEx').attr('value','');
dijit.byId('divEx').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11422&negocio_id='+dijit.byId(camposFormM[0]).value}));
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMarcasEx(){
dijit.byId('marcEx').attr('value','');
dijit.byId('marcEx').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11424&negocio_id='+dijit.byId(camposFormM[0]).value}));
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarCliente(){
	if(!dijit.byId('gridDestino').store){
		var storeDestino = {identifier: 'cliente_id', label: 'razon_social', items: []};
		dijit.byId('gridDestino').setStore(new dojo.data.ItemFileWriteStore({data: storeDestino}));
		dijit.byId('gridDestino').attr('autoWidth',true);
	}
	var AgregarItem = function(item){
		var cliId = dijit.byId('gridOrigen').store.getValue(item,'cliente_id');
		var razSoc = dijit.byId('gridOrigen').store.getValue(item,'razon_social');
		dijit.byId('gridDestino').store.fetchItemByIdentity({identity:cliId,onItem:function(item){
			if(item == null){dijit.byId('Sacar').attr('disabled',false);dijit.byId('gridDestino').store.newItem({cliente_id:cliId,razon_social:razSoc,seleccionado:false});}}});
	}
	var ActualizarGrilla = function(items,request){dijit.byId('gridDestino').store.save();}
	dijit.byId('gridOrigen').store.fetch({query:{seleccionado:true},onItem:AgregarItem,onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SacarCliente(){
	var QuitarItem = function(item){dijit.byId('gridDestino').store.deleteItem(item);}
	var ActualizarGrilla = function(items,request){dijit.byId('gridDestino').store.save();}
	dijit.byId('gridDestino').store.fetch({query:{seleccionado:true},onItem:QuitarItem,onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMaster(){
	//Limpiar el contentpane
	registroSeleccionado = null;
	dijit.byId('gridContainer').destroyDescendants();
	//Obtengo presupuestos
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	if(filtroMaster.length > 0){
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='DateTextBox'){urlValue = urlValue +'&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).valueNode.value;}
			else{urlValue +='&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');}}
	}
	var storeCabecera = new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}); 
	//Obtengo presupuestos por marca y subregion
	var CargarGrillas = function(items,request){
		if(items.length==0){Mensaje('No se han encontrado registros','error','master');}
		cantidadGrillas = items.length;
		for(i=0;i<items.length;i++){
			//Datos de la cabecera de la grilla
			var cabecera = dojo.create('div',{innerHTML:'<table><tr><td width="100%">'+items[i]['cliente_id']+' - '+items[i]['cliente_abrev']+'</td></tr></table>'});
			dojo.attr(cabecera,'class','dijitToolbar');
			dojo.place(cabecera,dojo.byId('gridContainer'),'last');
			//Creacion de grillas dinamicas
			
			var urlValue2 ='dbi/propuestas_clientePropuestas.php?sid='+gvarSID+'&cliente_id='+items[i]['cliente_id'][0];
        	if(filtroMaster.length > 0){
        		for(j=0;j<filtroMaster.length;j++){				
					if (filtroMaster[j]!='cliente_id'){
						if(tipoFiltroMaster[j]=='DateTextBox'){urlValue2+='&'+filtroMaster[j]+'='+dijit.byId('filtro'+j).valueNode.value;}
						else{urlValue2+='&'+filtroMaster[j]+'='+dijit.byId('filtro'+j).attr('value');}}
						}
			}
			var grilla = new dojox.grid.DataGrid({id:'grilla'+i,store:new dojo.data.ItemFileWriteStore({url:urlValue2,urlPreventCache:true}),autoHeight:true,structure:layoutMaster,onSelected:function(){OnSelectedMaster(this);}},document.createElement('div'));
			dojo.place(grilla.domNode,dojo.byId('gridContainer'),'last');
			grilla.startup();
			}
		}
	storeCabecera.fetch({query:{},onComplete:CargarGrillas});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarClientes(){
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11613&area_id='+dijit.byId('area_id').attr('value')+'&subregion_id='+dijit.byId('subregion_id').attr('value')+'&cliente_id='+dijit.byId('cli_id').valueNode.value+'&razon_social='+dijit.byId('razon').attr('value');
	dijit.byId('gridOrigen').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigen').attr('autoWidth',true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarProductos(){
	if(!dijit.byId('div').isValid()){dijit.byId('div').focus();}
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11612&division_id='+dijit.byId('div').attr('value')+'&marca_id='+dijit.byId('marc').attr('value')+'&producto_id='+dijit.byId('prod_id').valueNode.value+'&producto_desc='+dijit.byId('desc').attr('value');
	dijit.byId('gridOrigenP').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigenP').attr('autoWidth',true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarProductosN(){
	if(!dijit.byId('neg').isValid()){dijit.byId('neg').focus();return;}
	if(!dijit.byId('divN').isValid()){dijit.byId('divN').focus();return;}
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11612&division_id='+dijit.byId('divN').attr('value')+'&marca_id='+dijit.byId('marcN').attr('value')+'&producto_id='+dijit.byId('prod_idN').valueNode.value+'&producto_desc='+dijit.byId('descN').attr('value');
	dijit.byId('gridOrigenN').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigenN').attr('autoWidth',true);

}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMaster(){
	dijit.byId('gridProductos').attr('structure',layoutDialog);
	//Validacion
	if(registroSeleccionado[0][columnasM[8]]!='PEA'){Mensaje('Solo puede editar Propuestas en Estado PEA','error','master');return;}
	if(registroSeleccionado[0]['tipo_carga']=='BU'){Mensaje('Solo puede editar Propuestas de tipo de carga IMPORTE','error','master');return;}
	var fechaActual = dojo.date.locale.format(new Date(),{datePattern:'yyyyMMdd',selector:'date'});
	var vigencia = registroSeleccionado[0][columnasM[3]][0].substring(6,11) + registroSeleccionado[0][columnasM[3]][0].substring(3,5) + registroSeleccionado[0][columnasM[3]][0].substring(0,2);
	if(fechaActual>vigencia){Mensaje('Solo puede editar Propuestas vigentes','error','master');return;}
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11618&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		if (items[0]['division_id'][0] != 998){
				tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));
			}else{
				tablaForm.addChild(new dijit.form.TextBox({value:items[0]['negocio_desc'][0],style:'width:130px;',label:'Negocio: ',readOnly:true}));
				 }
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Importe',style:'width:130px;',label:labelFormM[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['fecha_carga'][0],style:'width:130px;',label:labelFormM[6],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipificacion'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['cliente'][0],style:'width:130px;',label:labelFormM[8],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_desde'][0],style:'width:130px;',label:labelFormM[10],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_hasta'][0],style:'width:130px;',label:labelFormM[11],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['pdv'][0],style:'width:130px;',label:labelFormM[25],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_accion'][0],style:'width:130px;',label:labelFormM[12],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['objetivo'][0],style:'width:130px;',label:labelFormM[13],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contra'][0],style:'width:130px;',label:labelFormM[14],readOnly:true}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'canales_mkt',readOnly:true,style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,readOnly:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11619&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[19],maxLength:'40',value:items[0]['observaciones'][0],required:requeridoFormM[19],style:'width:130px;height:58px;',regExp:regexpFormM[1],label:labelFormM[19]}));
		tablaForm.addChild(new dijit.form.TextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({id:'negocio_id',value:items[0]['negocio_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({id:'area_id',value:items[0]['area_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({id:'subregion_id',value:items[0]['subregion_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		dijit.byId('neg').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=14008'}));
		dijit.byId('div').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11420&propuesta_id='+items[0]['propuesta_id'][0]}));
		dijit.byId('divCampos').attr('content',tablaForm);
		tablaForm.startup();
		//Muestro el dialogo
		dijit.byId('dialogMaster').show();

		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=11620&propuesta_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarProductosEdicion(urlValue);
		
		var tablaProrrateo = new dojox.layout.TableContainer({id:'tablaProrrateo',cols:1,labelWidth:'190',style:'text-align:left;'});
		tablaProrrateo.addChild(new dijit.form.CheckBox({id:camposFormM[20],title:labelFormM[20],onClick:function(){Prorratea(this.checked);}}));
		dijit.byId('divProrrateo').attr('content',tablaProrrateo);
		tablaProrrateo.startup(); 
		
		var botonProd = new dijit.form.Button({label:'Ver Productos',type:'button',onClick:function(){if (items[0]['division_id'][0] != 998){CargarProductosInversa();}else{CargarProductosInversaN();}}});
		dojo.place(botonProd.domNode,dijit.byId('divProrrateoProductos').domNode,'last');
		
	var tablaProrrateoDefine = new dojox.layout.TableContainer({id:'tablaProrrateoDefine',cols:1,labelWidth:'190',style:'text-align:left;'});
	var criterios = {identifier:'id',label:'detalle',items:[{id:'1',detalle:'Por Marca'},{id:'2',detalle:'Por Concepto'}]};
	tablaProrrateoDefine.addChild(new dijit.form.FilteringSelect({id:camposFormM[21],style:'width:130px;',label:labelFormM[21],searchAttr:searchAttrFormM[21],store:new dojo.data.ItemFileReadStore({data:criterios}),onChange:function(){DefinoProrrateo(this.value);}}));
	dijit.byId('divProrrateoDefine').attr('content',tablaProrrateoDefine);
	tablaProrrateoDefine.startup(); 
	
		
	var tablaProrrateoPorMarca = new dojox.layout.TableContainer({id:'tablaProrrateoPorMarca',cols:1,labelWidth:'190',style:'text-align:left;'});
	if (items[0]['division_id'][0] != 998){
	tablaProrrateoPorMarca.addChild(new dijit.form.NumberTextBox({id:camposFormM[24],value:'0',style:'width:130px;',label:labelFormM[24]}));
	tablaProrrateoPorMarca.addChild(new dijit.form.ValidationTextBox({id:camposFormM[26],readOnly:true,value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[26],searchAttr:searchAttrFormM[26],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[26]}),onChange:function(value){dijit.byId(camposFormM[22]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[22]+'&division_id='+items[0]['division_id'][0]}));dijit.byId(camposFormM[22]).store.fetch();}}));
	tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[22],style:'width:130px;',label:labelFormM[22],searchAttr:searchAttrFormM[22],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[22]+'&division_id='+items[0]['division_id'][0]})}));
	}else{
	tablaProrrateoPorMarca.addChild(new dijit.form.NumberTextBox({id:camposFormM[24],value:'0',style:'width:130px;',label:labelFormM[24]}));
	tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[26],style:'width:130px;',label:labelFormM[26],searchAttr:searchAttrFormM[26],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11422&negocio_id='+items[0]['negocio_id'][0]}),onChange:function(value){dijit.byId(camposFormM[22]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11424&negocio_id='+items[0]['negocio_id'][0]}));dijit.byId(camposFormM[22]).store.fetch();}}));
	tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[22],style:'width:130px;',label:labelFormM[22],searchAttr:searchAttrFormM[22],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11424&negocio_id='+items[0]['negocio_id'][0]})}));
	}
	
	var botonCargarM = new dijit.form.Button({label:'Cargar',type:'button',onClick:function(){CargarProductosM();}});
	dijit.byId('divProrrateoPorMarca').attr('content',tablaProrrateoPorMarca);
	dojo.place(botonCargarM.domNode,dijit.byId('divProrrateoPorMarca').domNode,'last');
	tablaProrrateoPorMarca.startup();
	
	
	var tablaProrrateoPorConcepto = new dojox.layout.TableContainer({id:'tablaProrrateoPorConcepto',cols:1,labelWidth:'190',style:'text-align:left;'});
	tablaProrrateoPorConcepto.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[23],required:requeridoFormM[23],style:'width:200px;height:58px;',label:labelFormM[23],multiple:true,onClick:function(){dijit.hideTooltip(this.domNode);}}));
	var botonCargarCon = new dijit.form.Button({label:'Cargar Concepto/s',type:'button',onClick:function(){VerDialogoConcepto();BuscarConceptos();}});
	var botonCargarC = new dijit.form.Button({label:'Cargar',type:'button',onClick:function(){CargarProductosC();}});
	dijit.byId('divProrrateoPorConcepto').attr('content',tablaProrrateoPorConcepto);
	dojo.place(botonCargarC.domNode,dijit.byId('divProrrateoPorConcepto').domNode,'last');
	dojo.place(botonCargarCon.domNode,dijit.byId('divProrrateoPorConcepto').domNode,'first');
	tablaProrrateoPorConcepto.startup(); 

		
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
	//Creacion de botones
	dijit.byId('divBotones').destroyDescendants();
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMasterEditar();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	//Seteo propiedades para Editar
	dmlgrabarM = dmlEditarMaster;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMasterEA(){
	dijit.byId('gridProductos').attr('structure',layoutDialog);
	//Validacion
	if(registroSeleccionado[0][columnasM[8]]!='EA'){Mensaje('Solo puede editar Propuestas en Estado EA','error','master');return;}
	if(registroSeleccionado[0]['tipo_carga']=='BU'){Mensaje('Solo puede editar Propuestas de tipo de carga IMPORTE','error','master');return;}
	var fechaActual = dojo.date.locale.format(new Date(),{datePattern:'yyyyMMdd',selector:'date'});
	var vigencia = registroSeleccionado[0][columnasM[3]][0].substring(6,11) + registroSeleccionado[0][columnasM[3]][0].substring(3,5) + registroSeleccionado[0][columnasM[3]][0].substring(0,2);
	if(fechaActual>vigencia){Mensaje('Solo puede editar Propuestas vigentes','error','master');return;}
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11618&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		if (items[0]['division_id'][0] != 998){tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));}else{tablaForm.addChild(new dijit.form.TextBox({value:items[0]['negocio_desc'][0],style:'width:130px;',label:'Negocio: ',readOnly:true}));}
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Importe',style:'width:130px;',label:labelFormM[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['fecha_carga'][0],style:'width:130px;',label:labelFormM[6],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipificacion'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['cliente'][0],style:'width:130px;',label:labelFormM[8],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_desde'][0],style:'width:130px;',label:labelFormM[10],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_hasta'][0],style:'width:130px;',label:labelFormM[11],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['pdv'][0],style:'width:130px;',label:labelFormM[25],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_accion'][0],style:'width:130px;',label:labelFormM[12],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['objetivo'][0],style:'width:130px;',label:labelFormM[13],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contra'][0],style:'width:130px;',label:labelFormM[14],readOnly:true}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'canales_mkt',readOnly:true,style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,readOnly:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11619&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[19],maxLength:'40',value:items[0]['observaciones'][0],regExp:regexpFormM[1],required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
		tablaForm.addChild(new dijit.form.TextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({id:'negocio_id',value:items[0]['negocio_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({id:'area_id',value:items[0]['area_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({id:'subregion_id',value:items[0]['subregion_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		dijit.byId('neg').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=14008'}));
		dijit.byId('div').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11420&propuesta_id='+items[0]['propuesta_id'][0]}));
		dijit.byId('divCampos').attr('content',tablaForm);
		tablaForm.startup();
		//Muestro el dialogo
		dijit.byId('dialogMaster').show();
		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=11620&propuesta_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarProductosEdicion(urlValue);
		
		var tablaProrrateo = new dojox.layout.TableContainer({id:'tablaProrrateo',cols:1,labelWidth:'190',style:'text-align:left;'});
		tablaProrrateo.addChild(new dijit.form.CheckBox({id:camposFormM[20],title:labelFormM[20],onClick:function(){Prorratea(this.checked);}}));
		dijit.byId('divProrrateo').attr('content',tablaProrrateo);
		tablaProrrateo.startup(); 
		
		var botonProd = new dijit.form.Button({label:'Ver Productos',type:'button',onClick:function(){if (items[0]['division_id'][0] != 998){CargarProductosInversa();}else{CargarProductosInversaN();}}});
		dojo.place(botonProd.domNode,dijit.byId('divProrrateoProductos').domNode,'last');
		
	var tablaProrrateoDefine = new dojox.layout.TableContainer({id:'tablaProrrateoDefine',cols:1,labelWidth:'190',style:'text-align:left;'});
	var criterios = {identifier:'id',label:'detalle',items:[{id:'1',detalle:'Por Marca'},{id:'2',detalle:'Por Concepto'}]};
	tablaProrrateoDefine.addChild(new dijit.form.FilteringSelect({id:camposFormM[21],style:'width:130px;',label:labelFormM[21],searchAttr:searchAttrFormM[21],store:new dojo.data.ItemFileReadStore({data:criterios}),onChange:function(){DefinoProrrateo(this.value);}}));
	dijit.byId('divProrrateoDefine').attr('content',tablaProrrateoDefine);
	tablaProrrateoDefine.startup(); 
	
	var tablaProrrateoPorMarca = new dojox.layout.TableContainer({id:'tablaProrrateoPorMarca',cols:1,labelWidth:'190',style:'text-align:left;'});
	if (items[0]['division_id'][0] != 998){
	tablaProrrateoPorMarca.addChild(new dijit.form.NumberTextBox({id:camposFormM[24],value:'0',style:'width:130px;',label:labelFormM[24]}));
	tablaProrrateoPorMarca.addChild(new dijit.form.ValidationTextBox({id:camposFormM[26],readOnly:true,value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[26],searchAttr:searchAttrFormM[26],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[26]}),onChange:function(value){dijit.byId(camposFormM[22]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[22]+'&division_id='+items[0]['division_id'][0]}));dijit.byId(camposFormM[22]).store.fetch();}}));
	tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[22],style:'width:130px;',label:labelFormM[22],searchAttr:searchAttrFormM[22],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[22]+'&division_id='+items[0]['division_id'][0]})}));
	}else{
	tablaProrrateoPorMarca.addChild(new dijit.form.NumberTextBox({id:camposFormM[24],value:'0',style:'width:130px;',label:labelFormM[24]}));
	tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[26],style:'width:130px;',label:labelFormM[26],searchAttr:searchAttrFormM[26],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11422&negocio_id='+items[0]['negocio_id'][0]}),onChange:function(value){dijit.byId(camposFormM[22]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11424&negocio_id='+items[0]['negocio_id'][0]}));dijit.byId(camposFormM[22]).store.fetch();}}));
	tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[22],style:'width:130px;',label:labelFormM[22],searchAttr:searchAttrFormM[22],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11424&negocio_id='+items[0]['negocio_id'][0]})}));
	}
	
	var botonCargarM = new dijit.form.Button({label:'Cargar',type:'button',onClick:function(){CargarProductosM();}});
	dijit.byId('divProrrateoPorMarca').attr('content',tablaProrrateoPorMarca);
	dojo.place(botonCargarM.domNode,dijit.byId('divProrrateoPorMarca').domNode,'last');
	tablaProrrateoPorMarca.startup();
	
	
	var tablaProrrateoPorConcepto = new dojox.layout.TableContainer({id:'tablaProrrateoPorConcepto',cols:1,labelWidth:'190',style:'text-align:left;'});
	tablaProrrateoPorConcepto.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[23],required:requeridoFormM[23],style:'width:200px;height:58px;',label:labelFormM[23],multiple:true,onClick:function(){dijit.hideTooltip(this.domNode);}}));
	var botonCargarCon = new dijit.form.Button({label:'Cargar Concepto/s',type:'button',onClick:function(){VerDialogoConcepto();BuscarConceptos();}});
	var botonCargarC = new dijit.form.Button({label:'Cargar',type:'button',onClick:function(){CargarProductosC();}});
	dijit.byId('divProrrateoPorConcepto').attr('content',tablaProrrateoPorConcepto);
	dojo.place(botonCargarC.domNode,dijit.byId('divProrrateoPorConcepto').domNode,'last');
	dojo.place(botonCargarCon.domNode,dijit.byId('divProrrateoPorConcepto').domNode,'first');
	tablaProrrateoPorConcepto.startup(); 

		
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
	//Creacion de botones
	dijit.byId('divBotones').destroyDescendants();
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMasterEditar();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	//Seteo propiedades para Editar
	dmlgrabarM = dmlEditarMaster;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMasterAW(){
	//Validacion
	if(registroSeleccionado[0][columnasM[8]]!='AW'){Mensaje('Solo se pueden ajustar Propuestas en Estado AW','error','master');return;}
	if(registroSeleccionado[0]['tipo_carga']=='BU'){Mensaje('Solo puede ajustar Propuestas de tipo de carga IMPORTE','error','master');return;}
	var fechaActual = dojo.date.locale.format(new Date(),{datePattern:'yyyyMMdd',selector:'date'});
	var vigencia = registroSeleccionado[0]['vigencia_hasta_ext'][0].substring(6,11) + registroSeleccionado[0]['vigencia_hasta_ext'][0].substring(3,5) + registroSeleccionado[0]['vigencia_hasta_ext'][0].substring(0,2);
	if(fechaActual>vigencia){Mensaje('Solo puede ajusar Propuestas vigentes','error','master');return;}
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11618&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		if (items[0]['division_id'][0] != 998){tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));}else{tablaForm.addChild(new dijit.form.TextBox({value:items[0]['negocio_desc'][0],style:'width:130px;',label:'Negocio: ',readOnly:true}));}
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Importe',style:'width:130px;',label:labelFormM[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['fecha_carga'][0],style:'width:130px;',label:labelFormM[6],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipificacion'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['cliente'][0],style:'width:130px;',label:labelFormM[8],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_desde'][0],style:'width:130px;',label:labelFormM[10],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_hasta'][0],style:'width:130px;',label:labelFormM[11],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['pdv'][0],style:'width:130px;',label:labelFormM[25],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_accion'][0],style:'width:130px;',label:labelFormM[12],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['objetivo'][0],style:'width:130px;',label:labelFormM[13],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contra'][0],style:'width:130px;',label:labelFormM[14],readOnly:true}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'canales_mkt',readOnly:true,style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,readOnly:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11619&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[19],maxLength:'40',value:items[0]['observaciones'][0],regExp:regexpFormM[1],required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
		tablaForm.addChild(new dijit.form.TextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({id:'negocio_id',value:items[0]['negocio_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		dijit.byId('div').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11420&propuesta_id='+items[0]['propuesta_id'][0]}));
		dijit.byId('divCampos').attr('content',tablaForm);
		tablaForm.startup();
		//Muestro el dialogo
		dijit.byId('dialogMaster').show();
		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=11620&propuesta_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarProductosEdicion(urlValue);
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
	//Creacion de botones
	dijit.byId('divBotones').destroyDescendants();
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMasterEditar();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	//Seteo propiedades para Editar
	dmlgrabarM = '11632';
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EnviarAMaster(){
	if(registroSeleccionado[0][columnasM[8]]!='PEA'){Mensaje('Solo puede enviar Propuestas en Estado PEA','error','master');return;}
	var fechaActual = dojo.date.locale.format(new Date(),{datePattern:'yyyyMMdd',selector:'date'});
	var vigencia = registroSeleccionado[0][columnasM[3]][0].substring(6,11) + registroSeleccionado[0][columnasM[3]][0].substring(3,5) + registroSeleccionado[0][columnasM[3]][0].substring(0,2);
	if(fechaActual>vigencia){Mensaje('Solo puede enviar Propuestas vigentes','error','master');return;}
	//Grabación de datos en la base de datos
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=11624&propuesta_id='+registroSeleccionado[0][columnasM[0]];
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==0){
			BuscarMaster();
			Mensaje(response.errmsg,'mensaje','master');
		}else{PopUp('Error',response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EnviarWMaster(){
	if(registroSeleccionado[0][columnasM[8]]!='EA'){Mensaje('Solo puede enviar Propuestas en Estado EA','error','master');return;}
	var fechaActual = dojo.date.locale.format(new Date(),{datePattern:'yyyyMMdd',selector:'date'});
	var vigencia = registroSeleccionado[0][columnasM[3]][0].substring(6,11) + registroSeleccionado[0][columnasM[3]][0].substring(3,5) + registroSeleccionado[0][columnasM[3]][0].substring(0,2);
	if(fechaActual>vigencia){Mensaje('Solo puede enviar Propuestas vigentes','error','master');return;}
	//Grabación de datos en la base de datos
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=11630&propuesta_id='+registroSeleccionado[0][columnasM[0]];
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==0){
			BuscarMaster();
			Mensaje(response.errmsg,'mensaje','master');
		}else{PopUp('Error',response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EnviarMasivoAMaster(){
	var propuestasChecked = '';
	var mensaje = null;
	for(i=0;i<cantidadGrillas;i++){
		if(dijit.byId('grilla'+i).store){
			var ObtenerPropuestas = function(item){
				if(item['estado'][0]!='PEA'){mensaje = 'Debe seleccionar solo Propuestas con Estado PEA';return;}
				propuestasChecked+=item['propuesta_id'][0]+',';
			}
			dijit.byId('grilla'+i).store.fetch({query:{seleccionado:'true'},onItem:ObtenerPropuestas});
		}
	}
	if(mensaje){Mensaje(mensaje,'error','master');return;}
	if(propuestasChecked==''){Mensaje('Seleccione al menos una Propuesta','error','master');return;}
	//Grabación de datos en la base de datos
	propuestasChecked = propuestasChecked.substr(0,propuestasChecked.length-1);
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=11626&propuestas='+propuestasChecked;
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==0){
			BuscarMaster();
			Mensaje(response.errmsg,'mensaje','master');
		}else{
			PopUp('Error',response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EnviarMasivoWMaster(){
	var propuestasChecked = '';
	var mensaje = null;
	for(i=0;i<cantidadGrillas;i++){
		if(dijit.byId('grilla'+i).store){
			var ObtenerPropuestas = function(item){
				if(item['estado'][0]!='EA'){mensaje = 'Debe seleccionar solo Propuestas con Estado EA';return;}
				propuestasChecked+=item['propuesta_id'][0]+',';
			}
			dijit.byId('grilla'+i).store.fetch({query:{seleccionado:'true'},onItem:ObtenerPropuestas});
		}
	}
	if(mensaje){Mensaje(mensaje,'error','master');return;}
	if(propuestasChecked==''){Mensaje('Seleccione al menos una Propuesta','error','master');return;}
	//Grabación de datos en la base de datos
	propuestasChecked = propuestasChecked.substr(0,propuestasChecked.length-1);
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=11631&propuestas='+propuestasChecked;
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==0){
			BuscarMaster();
			Mensaje(response.errmsg,'mensaje','master');
		}else{
			PopUp('Error',response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductosEdicion(urlValue){
	var storeProductos = new dojo.data.ItemFileWriteStore({clearOnClose:true,url:urlValue});
	if(!dijit.byId('gridProductos').store){
		var storeVacio = {identifier: 'producto_id', label: 'producto_desc', items: []};
		dijit.byId('gridProductos').setStore(new dojo.data.ItemFileWriteStore({data: storeVacio}));
		dijit.byId('gridProductos').attr("autoWidth",true);
		dijit.byId('gridProductos').update();
	}
	//Agrego los nuevos items
	var ActualizarGrilla = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('gridProductos').store.fetchItemByIdentity({
				identity:storeProductos.getValue(items[i],'producto_id'),
				onItem:function(item){
					if(!item){dijit.byId('gridProductos').store.newItem({division_id:storeProductos.getValue(items[i],'division_id'),producto_id:storeProductos.getValue(items[i],'producto_id'), producto_desc:storeProductos.getValue(items[i],'producto_desc'),bultos:storeProductos.getValue(items[i],'bultos'),importe:storeProductos.getValue(items[i],'importe'),porcentaje:storeProductos.getValue(items[i],'porcentaje')});}
				}
			});
		}
		dijit.byId('gridProductos').store.save();
		dijit.byId("dialogProductos").hide();
		var suma = 0;
		var AsignarTotal = function(items,request){
			for(i=0;i<items.length;i++){
				suma+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'importe').replace(',','.'));}
		dojo.byId('divTotalImporte').innerHTML = suma.toFixed(2);
		}	
		dijit.byId('gridProductos').store.fetch({query:{},onComplete:AsignarTotal});
	}
	storeProductos.fetch({query:{},onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDetalleMaster(){
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11618&propuesta_id='+registroSeleccionado[0][columnasM[0]][0],urlPreventCache:true})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		
		if (items[0]['division_id'][0] != 998){tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));}else{tablaForm.addChild(new dijit.form.TextBox({value:items[0]['negocio_desc'][0],style:'width:130px;',label:'Negocio: ',readOnly:true}));}
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_carga'][0],style:'width:130px;',label:labelFormM[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Importe',style:'width:130px;',label:labelFormM[6],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipificacion'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['cliente'][0],style:'width:130px;',label:labelFormM[8],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_desde'][0],style:'width:130px;',label:labelFormM[10],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_hasta'][0],style:'width:130px;',label:labelFormM[11],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['pdv'][0],style:'width:130px;',label:labelFormM[25],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_accion'][0],style:'width:130px;',label:labelFormM[12],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['objetivo'][0],style:'width:130px;',label:labelFormM[13],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contra'][0],style:'width:130px;',label:labelFormM[14],readOnly:true}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'canales_mkt',readOnly:true,style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,readOnly:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11619&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})}));
		tablaForm.addChild(new dijit.form.SimpleTextarea({id:camposFormM[19],readOnly:true,value:items[0]['observaciones'][0],required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
		tablaForm.addChild(new dijit.form.TextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({id:'negocio_id',value:items[0]['negocio_id'][0],style:'visibility:hidden;width:130px;',label:''}));

		dijit.byId('divCampos').attr('content',tablaForm);
		tablaForm.startup();
		//Muestro el dialogo
		dijit.byId('dialogMaster').show();
		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=11620&propuesta_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarProductosEdicion(urlValue);
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
	dijit.byId('gridProductos').attr('structure',layoutDialogDetalle);
	//Creacion de botones
	var botonCancelar = new dijit.form.Button({label:'Aceptar',type:'button',iconClass:'aceptarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CopiarMaster(){
	dijit.byId('gridProductos').attr('structure',layoutDialog);
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11618&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		if (items[0]['division_id'][0] != 998){tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));}else{tablaForm.addChild(new dijit.form.TextBox({value:items[0]['negocio_desc'][0],style:'width:130px;',label:'Negocio: ',readOnly:true}));}
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Importe',style:'width:130px;',label:labelFormM[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['fecha_carga'][0],style:'width:130px;',label:labelFormM[6],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipificacion'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['pdv'][0],style:'width:130px;',label:labelFormM[25],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_accion'][0],style:'width:130px;',label:labelFormM[12],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['objetivo'][0],style:'width:130px;',label:labelFormM[13],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contra'][0],style:'width:130px;',label:labelFormM[14],readOnly:true}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'canales_mkt',readOnly:true,style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,readOnly:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11619&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[19],maxLength:'40',value:items[0]['observaciones'][0],regExp:regexpFormM[1],required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
				
		//Carga de clientes
		if(dijit.byId(camposFormM[8])){dijit.byId(camposFormM[8]).destroy();}tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[8],style:'width:130px;height:58px;',required:requeridoFormM[8],multiple:true,label:(labelFormM[8]+'<button class="dijitButtonNode" onclick="dijit.byId(\'gridOrigen\').attr(\'autoWidth\',true);dijit.byId(\'dialogClientes\').show();" type="button">Ver</button>'),readOnly:true}));
		dijit.byId(camposFormM[8]).addOption({disabled:true,selected:true,label:items[0]['cliente_id'][0]+'-'+items[0]['cliente'][0],value:items[0]['cliente_id'][0]});
		if(!dijit.byId('gridDestino').store){
			var storeDestino = {identifier: 'cliente_id', label: 'razon_social', items: []};
			dijit.byId('gridDestino').setStore(new dojo.data.ItemFileWriteStore({data: storeDestino}));
			dijit.byId('gridDestino').attr('autoWidth',true);
		}
		dijit.byId('Sacar').attr('disabled',false);
		dijit.byId('gridDestino').store.newItem({cliente_id:items[0]['cliente_id'][0],razon_social:items[0]['cliente'][0],seleccionado:false});
		//Carga de vigencias
		if(dijit.byId(camposFormM[10])){dijit.byId(camposFormM[10]).destroy();}tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[10],value:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,1),style:'width:130px;',constraints:{min:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,1),datePattern:'dd-MM-yyyy'},required:requeridoFormM[10],label:labelFormM[10],onChange:function(){dijit.byId(camposFormM[11]).constraints.min = arguments[0];dijit.byId(camposFormM[11]).constraints.max = new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(arguments[0]));}}));
		if(dijit.byId(camposFormM[11])){dijit.byId(camposFormM[11]).destroy();}tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[11],value:new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(new Date())),style:'width:130px;',constraints:{min:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,dojo.date.locale.format(new Date(),{datePattern:'dd',selector:'date'})),max:new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(new Date())),datePattern:'dd-MM-yyyy'},required:requeridoFormM[11],label:labelFormM[11]}));
		
		tablaForm.addChild(new dijit.form.TextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({id:'negocio_id',value:items[0]['negocio_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		if (items[0]['division_id'][0] != 998){tablaForm.addChild(new dijit.form.TextBox({id:'tipo_carga_propuesta',value:1,style:'visibility:hidden;width:130px;',label:''}));}else{tablaForm.addChild(new dijit.form.TextBox({id:'tipo_carga_propuesta',value:2,style:'visibility:hidden;width:130px;',label:''}));}
		tablaForm.addChild(new dijit.form.TextBox({id:'area_id',value:items[0]['area_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({id:'subregion_id',value:items[0]['subregion_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		dijit.byId('neg').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=14008'}));
		dijit.byId('div').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11408'}));

		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=11620&propuesta_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarProductosEdicion(urlValue);
		
		var tablaProrrateo = new dojox.layout.TableContainer({id:'tablaProrrateo',cols:1,labelWidth:'190',style:'text-align:left;'});
		tablaProrrateo.addChild(new dijit.form.CheckBox({id:camposFormM[20],title:labelFormM[20],onClick:function(){Prorratea(this.checked);}}));
		dijit.byId('divProrrateo').attr('content',tablaProrrateo);
		tablaProrrateo.startup(); 
		
		var botonProd = new dijit.form.Button({label:'Ver Productos',type:'button',onClick:function(){if (items[0]['division_id'][0] != 998){CargarProductosInversa();}else{CargarProductosInversaN();}}});
		dojo.place(botonProd.domNode,dijit.byId('divProrrateoProductos').domNode,'last');
		
	var tablaProrrateoDefine = new dojox.layout.TableContainer({id:'tablaProrrateoDefine',cols:1,labelWidth:'190',style:'text-align:left;'});
	var criterios = {identifier:'id',label:'detalle',items:[{id:'1',detalle:'Por Marca'},{id:'2',detalle:'Por Concepto'}]};
	tablaProrrateoDefine.addChild(new dijit.form.FilteringSelect({id:camposFormM[21],style:'width:130px;',label:labelFormM[21],searchAttr:searchAttrFormM[21],store:new dojo.data.ItemFileReadStore({data:criterios}),onChange:function(){DefinoProrrateo(this.value);}}));
	dijit.byId('divProrrateoDefine').attr('content',tablaProrrateoDefine);
	tablaProrrateoDefine.startup(); 
	
	var tablaProrrateoPorMarca = new dojox.layout.TableContainer({id:'tablaProrrateoPorMarca',cols:1,labelWidth:'190',style:'text-align:left;'});
	if (items[0]['division_id'][0] != 998){
	tablaProrrateoPorMarca.addChild(new dijit.form.NumberTextBox({id:camposFormM[24],value:'0',style:'width:130px;',label:labelFormM[24]}));
	tablaProrrateoPorMarca.addChild(new dijit.form.ValidationTextBox({id:camposFormM[26],readOnly:true,value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[26],searchAttr:searchAttrFormM[26],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[26]}),onChange:function(value){dijit.byId(camposFormM[22]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[22]+'&division_id='+items[0]['division_id'][0]}));dijit.byId(camposFormM[22]).store.fetch();}}));
	tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[22],style:'width:130px;',label:labelFormM[22],searchAttr:searchAttrFormM[22],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[22]+'&division_id='+items[0]['division_id'][0]})}));
	}else{
	tablaProrrateoPorMarca.addChild(new dijit.form.NumberTextBox({id:camposFormM[24],value:'0',style:'width:130px;',label:labelFormM[24]}));
	tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[26],style:'width:130px;',label:labelFormM[26],searchAttr:searchAttrFormM[26],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11422&negocio_id='+items[0]['negocio_id'][0]}),onChange:function(value){dijit.byId(camposFormM[22]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11424&negocio_id='+items[0]['negocio_id'][0]}));dijit.byId(camposFormM[22]).store.fetch();}}));
	tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[22],style:'width:130px;',label:labelFormM[22],searchAttr:searchAttrFormM[22],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11424&negocio_id='+items[0]['negocio_id'][0]})}));
	}
	
	var botonCargarM = new dijit.form.Button({label:'Cargar',type:'button',onClick:function(){CargarProductosM();}});
	dijit.byId('divProrrateoPorMarca').attr('content',tablaProrrateoPorMarca);
	dojo.place(botonCargarM.domNode,dijit.byId('divProrrateoPorMarca').domNode,'last');
	tablaProrrateoPorMarca.startup();
	
	
	var tablaProrrateoPorConcepto = new dojox.layout.TableContainer({id:'tablaProrrateoPorConcepto',cols:1,labelWidth:'190',style:'text-align:left;'});
	tablaProrrateoPorConcepto.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[23],required:requeridoFormM[23],style:'width:200px;height:58px;',label:labelFormM[23],multiple:true,onClick:function(){dijit.hideTooltip(this.domNode);}}));
	var botonCargarCon = new dijit.form.Button({label:'Cargar Concepto/s',type:'button',onClick:function(){VerDialogoConcepto();BuscarConceptos();}});
	var botonCargarC = new dijit.form.Button({label:'Cargar',type:'button',onClick:function(){CargarProductosC();}});
	dijit.byId('divProrrateoPorConcepto').attr('content',tablaProrrateoPorConcepto);
	dojo.place(botonCargarC.domNode,dijit.byId('divProrrateoPorConcepto').domNode,'last');
	dojo.place(botonCargarCon.domNode,dijit.byId('divProrrateoPorConcepto').domNode,'first');
	tablaProrrateoPorConcepto.startup(); 

		
		//Seteo parametros para Copiar
		dmlgrabarM = dmlnuevoM +'&area_id='+items[0]['area_id'][0]+'&observaciones='+unescape(encodeURIComponent(items[0]['observaciones'][0]))+'&pdv='+items[0]['pdv'][0]+'&subregion_id='+items[0]['subregion_id'][0]+'&tipo_carga=IM'+'&tipo_presup_id='+items[0]['tipo_presupuesto_id'][0]+'&canales_mkt='+dijit.byId('canales_mkt').attr('value')+'&empresa_compe_id='+items[0]['contra_id'][0]+'&descrip_prop_id='+items[0]['tipo_accion_id'][0]+'&objetivo_prop_id='+items[0]['objetivo_id'][0]+'&tipo_descuento_id='+items[0]['tipificacion_id'][0];
		
		//Muestro el dialogo
		dijit.byId('divCampos').attr('content',tablaForm);
		tablaForm.startup();
		dijit.byId('dialogMaster').show();
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
	//Creacion de botones
	dijit.byId('divBotones').destroyDescendants();
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMasterCopiar();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CopiarMasterEA(){
	dijit.byId('gridProductos').attr('structure',layoutDialog);
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11618&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		if (items[0]['division_id'][0] != 998){tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));}else{tablaForm.addChild(new dijit.form.TextBox({value:items[0]['negocio_desc'][0],style:'width:130px;',label:'Negocio: ',readOnly:true}));}
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Importe',style:'width:130px;',label:labelFormM[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['fecha_carga'][0],style:'width:130px;',label:labelFormM[6],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipificacion'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['pdv'][0],style:'width:130px;',label:labelFormM[25],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_accion'][0],style:'width:130px;',label:labelFormM[12],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['objetivo'][0],style:'width:130px;',label:labelFormM[13],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contra'][0],style:'width:130px;',label:labelFormM[14],readOnly:true}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'canales_mkt',readOnly:true,style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,readOnly:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11619&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[19],maxLength:'40',value:items[0]['observaciones'][0],regExp:regexpFormM[1],required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
				
		//Carga de clientes
		if(dijit.byId(camposFormM[8])){dijit.byId(camposFormM[8]).destroy();}tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[8],style:'width:130px;height:58px;',required:requeridoFormM[8],multiple:true,label:(labelFormM[8]+'<button class="dijitButtonNode" onclick="dijit.byId(\'gridOrigen\').attr(\'autoWidth\',true);dijit.byId(\'dialogClientes\').show();" type="button">Ver</button>'),readOnly:true}));
		dijit.byId(camposFormM[8]).addOption({disabled:true,selected:true,label:items[0]['cliente_id'][0]+'-'+items[0]['cliente'][0],value:items[0]['cliente_id'][0]});
		if(!dijit.byId('gridDestino').store){
			var storeDestino = {identifier: 'cliente_id', label: 'razon_social', items: []};
			dijit.byId('gridDestino').setStore(new dojo.data.ItemFileWriteStore({data: storeDestino}));
			dijit.byId('gridDestino').attr('autoWidth',true);
		}
		dijit.byId('Sacar').attr('disabled',false);
		dijit.byId('gridDestino').store.newItem({cliente_id:items[0]['cliente_id'][0],razon_social:items[0]['cliente'][0],seleccionado:false});
		//Carga de vigencias
		if(dijit.byId(camposFormM[10])){dijit.byId(camposFormM[10]).destroy();}tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[10],value:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,1),style:'width:130px;',constraints:{min:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,1),datePattern:'dd-MM-yyyy'},required:requeridoFormM[10],label:labelFormM[10],onChange:function(){dijit.byId(camposFormM[11]).constraints.min = arguments[0];dijit.byId(camposFormM[11]).constraints.max = new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(arguments[0]));}}));
		if(dijit.byId(camposFormM[11])){dijit.byId(camposFormM[11]).destroy();}tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[11],value:new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(new Date())),style:'width:130px;',constraints:{min:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,dojo.date.locale.format(new Date(),{datePattern:'dd',selector:'date'})),max:new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(new Date())),datePattern:'dd-MM-yyyy'},required:requeridoFormM[11],label:labelFormM[11]}));
		
		tablaForm.addChild(new dijit.form.TextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({id:'negocio_id',value:items[0]['negocio_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		if (items[0]['division_id'][0] != 998){tablaForm.addChild(new dijit.form.TextBox({id:'tipo_carga_propuesta',value:1,style:'visibility:hidden;width:130px;',label:''}));}else{tablaForm.addChild(new dijit.form.TextBox({id:'tipo_carga_propuesta',value:2,style:'visibility:hidden;width:130px;',label:''}));}
		tablaForm.addChild(new dijit.form.TextBox({id:'area_id',value:items[0]['area_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({id:'subregion_id',value:items[0]['subregion_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		dijit.byId('neg').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=14008'}));
		dijit.byId('div').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11408'}));

		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=11620&propuesta_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarProductosEdicion(urlValue);
		
		var tablaProrrateo = new dojox.layout.TableContainer({id:'tablaProrrateo',cols:1,labelWidth:'190',style:'text-align:left;'});
		tablaProrrateo.addChild(new dijit.form.CheckBox({id:camposFormM[20],title:labelFormM[20],onClick:function(){Prorratea(this.checked);}}));
		dijit.byId('divProrrateo').attr('content',tablaProrrateo);
		tablaProrrateo.startup(); 
		
		var botonProd = new dijit.form.Button({label:'Ver Productos',type:'button',onClick:function(){if (items[0]['division_id'][0] != 998){CargarProductosInversa();}else{CargarProductosInversaN();}}});
		dojo.place(botonProd.domNode,dijit.byId('divProrrateoProductos').domNode,'last');
		
var tablaProrrateoDefine = new dojox.layout.TableContainer({id:'tablaProrrateoDefine',cols:1,labelWidth:'190',style:'text-align:left;'});
	var criterios = {identifier:'id',label:'detalle',items:[{id:'1',detalle:'Por Marca'},{id:'2',detalle:'Por Concepto'}]};
	tablaProrrateoDefine.addChild(new dijit.form.FilteringSelect({id:camposFormM[21],style:'width:130px;',label:labelFormM[21],searchAttr:searchAttrFormM[21],store:new dojo.data.ItemFileReadStore({data:criterios}),onChange:function(){DefinoProrrateo(this.value);}}));
	dijit.byId('divProrrateoDefine').attr('content',tablaProrrateoDefine);
	tablaProrrateoDefine.startup(); 
	
	var tablaProrrateoPorMarca = new dojox.layout.TableContainer({id:'tablaProrrateoPorMarca',cols:1,labelWidth:'190',style:'text-align:left;'});
	if (items[0]['division_id'][0] != 998){
	tablaProrrateoPorMarca.addChild(new dijit.form.NumberTextBox({id:camposFormM[24],value:'0',style:'width:130px;',label:labelFormM[24]}));
	tablaProrrateoPorMarca.addChild(new dijit.form.ValidationTextBox({id:camposFormM[26],readOnly:true,value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[26],searchAttr:searchAttrFormM[26],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[26]}),onChange:function(value){dijit.byId(camposFormM[22]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[22]+'&division_id='+items[0]['division_id'][0]}));dijit.byId(camposFormM[22]).store.fetch();}}));
	tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[22],style:'width:130px;',label:labelFormM[22],searchAttr:searchAttrFormM[22],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[22]+'&division_id='+items[0]['division_id'][0]})}));
	}else{
	tablaProrrateoPorMarca.addChild(new dijit.form.NumberTextBox({id:camposFormM[24],value:'0',style:'width:130px;',label:labelFormM[24]}));
	tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[26],style:'width:130px;',label:labelFormM[26],searchAttr:searchAttrFormM[26],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11422&negocio_id='+items[0]['negocio_id'][0]}),onChange:function(value){dijit.byId(camposFormM[22]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11424&negocio_id='+items[0]['negocio_id'][0]}));dijit.byId(camposFormM[22]).store.fetch();}}));
	tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[22],style:'width:130px;',label:labelFormM[22],searchAttr:searchAttrFormM[22],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11424&negocio_id='+items[0]['negocio_id'][0]})}));
	}
	
	var botonCargarM = new dijit.form.Button({label:'Cargar',type:'button',onClick:function(){CargarProductosM();}});
	dijit.byId('divProrrateoPorMarca').attr('content',tablaProrrateoPorMarca);
	dojo.place(botonCargarM.domNode,dijit.byId('divProrrateoPorMarca').domNode,'last');
	tablaProrrateoPorMarca.startup();
	
	
	var tablaProrrateoPorConcepto = new dojox.layout.TableContainer({id:'tablaProrrateoPorConcepto',cols:1,labelWidth:'190',style:'text-align:left;'});
	tablaProrrateoPorConcepto.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[23],required:requeridoFormM[23],style:'width:200px;height:58px;',label:labelFormM[23],multiple:true,onClick:function(){dijit.hideTooltip(this.domNode);}}));
	var botonCargarCon = new dijit.form.Button({label:'Cargar Concepto/s',type:'button',onClick:function(){VerDialogoConcepto();BuscarConceptos();}});
	var botonCargarC = new dijit.form.Button({label:'Cargar',type:'button',onClick:function(){CargarProductosC();}});
	dijit.byId('divProrrateoPorConcepto').attr('content',tablaProrrateoPorConcepto);
	dojo.place(botonCargarC.domNode,dijit.byId('divProrrateoPorConcepto').domNode,'last');
	dojo.place(botonCargarCon.domNode,dijit.byId('divProrrateoPorConcepto').domNode,'first');
	tablaProrrateoPorConcepto.startup(); 
		
		//Seteo parametros para Copiar
		dmlgrabarM = dmlnuevoM +'&area_id='+items[0]['area_id'][0]+'&observaciones='+items[0]['observaciones'][0]+'&pdv='+items[0]['pdv'][0]+'&subregion_id='+items[0]['subregion_id'][0]+'&tipo_carga=IM'+'&tipo_presup_id='+items[0]['tipo_presupuesto_id'][0]+'&canales_mkt='+dijit.byId('canales_mkt').attr('value')+'&empresa_compe_id='+items[0]['contra_id'][0]+'&descrip_prop_id='+items[0]['tipo_accion_id'][0]+'&objetivo_prop_id='+items[0]['objetivo_id'][0]+'&tipo_descuento_id='+items[0]['tipificacion_id'][0];
		
		//Muestro el dialogo
		dijit.byId('divCampos').attr('content',tablaForm);
		tablaForm.startup();
		dijit.byId('dialogMaster').show();
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
	//Creacion de botones
	dijit.byId('divBotones').destroyDescendants();
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMasterCopiar();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarMaster(){
	//Validacion
	if(registroSeleccionado[0][columnasM[8]]!='PEA'){Mensaje('No se puede eliminar la propuesta','error','master');return;}
	//Generación de la URL y el mensaje de advertencia
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmleliminarM;
	mensaje='Est&aacute; seguro que desea eliminar la propuesta <b>'+registroSeleccionado[0][columnasM[0]]+'</b> ?';
	for(i=0;i<clavesM.length;i++){
		urlValue+='&'+clavesM[i]+'='+registroSeleccionado[0][columnasM[i]];
	}
	PopUp('Advertencia!', mensaje, "Eliminar('"+urlValue+"');");
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarMasterEA(){
	//tomo el valor de los campos clave de los registros seleccionados en el gridMaster
	var items=registroSeleccionado;
	//Validacion
	if(items[0][columnasM[8]]!='EA'){Mensaje('No se puede eliminar la propuesta','error','master');return;}
	//Generación de la URL y el mensaje de advertencia
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmleliminarM;
	mensaje='Est&aacute; seguro que desea eliminar la propuesta <b>'+items[0][columnasM[0]]+'</b>';
	for(i=0;i<clavesM.length;i++){
		urlValue+='&'+clavesM[i]+'='+items[0][columnasM[i]];
	}
	PopUp('Advertencia!', mensaje, "Eliminar('"+urlValue+"');");
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function Eliminar(urlValue){
	procesando.show();
	//Se elimina el registro de la base de datos
	dojo.xhrGet({url:urlValue,handleAs:'json',load:function(response){
		if(response.errcode==0){
			PopUp('Aviso!','La propuesta '+registroSeleccionado[0][columnasM[0]]+' ha sido eliminada exitosamente');
			procesando.hide();
			BuscarMaster();//Refresco del gridMaster
		}else{procesando.hide();PopUp('Error', response.errmsg);}
		}
	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function AuditoriaMaster(){
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlAuditoriaMaster;
	var items = gridMaster.selection.getSelected();
	for(i=0;i<clavesM.length;i++){urlValue +='&'+clavesM[i]+'='+items[0][columnasM[i]];}
	//Carga los valores del registro seleccionado
	var registroCargado = new dojo.data.ItemFileReadStore({url:urlValue});
	var gotData = function(items,request){
		for(i=0;i<camposAuditoriaM.length;i++){dijit.byId(camposAuditoriaM[i]).attr('value',registroCargado.getValue(items[0],camposAuditoriaM[i]));}}
	registroCargado.fetch({query:{},onComplete:gotData});	
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajadaExcelMaster() {
	var urlValue ='dbi/bajaExcel.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	//document.location = urlValue;
	window.open(urlValue,"Bajar_Informe_Prop","menubar=no,width=300,height=300,toolbar=no,resizable=yes");
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMaster(){

	dijit.byId('gridProductos').edit.apply();
	//Validacion de que el formulario esté bien cargado
		if(!dijit.byId('tipo_carga_propuesta').isValid()){dijit.byId('tipo_carga_propuesta').focus();return;}
		if(!dijit.byId('area_id').isValid()){dijit.byId('area_id').focus();return;}
		if(!dijit.byId('subregion_id').isValid()){dijit.byId('subregion_id').focus();return;}
		if(!dijit.byId('clientes').options.length){dijit.byId('gridOrigen').attr('autoWidth',true);dijit.byId('dialogClientes').show();return;}
		if(!dijit.byId('tipo_presup_id').isValid()){dijit.byId('tipo_presup_id').focus();return;}
		if(!dijit.byId('tipo_carga').isValid()){dijit.byId('tipo_carga').focus();return;}
		if(!dijit.byId('tipo_descuento_id').isValid()){dijit.byId('tipo_descuento_id').focus();return;}
		if(!dijit.byId('vigencia_desde').isValid()){dijit.byId('vigencia_desde').focus();return;}
		if(!dijit.byId('vigencia_hasta').isValid()){dijit.byId('vigencia_hasta').focus();return;}
		if(!dijit.byId('descrip_prop_id').isValid()){dijit.byId('descrip_prop_id').focus();return;}
		if(!dijit.byId('objetivo_prop_id').isValid()){dijit.byId('objetivo_prop_id').focus();return;}
		if(!dijit.byId('observaciones').isValid()){dijit.byId('observaciones').focus();return;}
	
	//Generación de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM;
	for(i=0;i<camposFormM.length;i++){
		if(camposFormM[i]!='fecha_carga' &&camposFormM[i]!='propuesta_id' &&camposFormM[i]!='participacion_cli' &&camposFormM[i]!='dist_fisica_comp' &&camposFormM[i]!='bultos_afectados' &&camposFormM[i]!='op_realizar' &&camposFormM[i]!='prorratea_calibres' && camposFormM[i]!='criterio' && camposFormM[i]!='marca_id' && camposFormM[i]!='concepto_id' && camposFormM[i]!='monto'){
			if(camposFormM[i]=='tipo_carga'){
				urlValue+='&'+camposFormM[i]+'=IM';
			}else if(dijit.byId(camposFormM[i]).declaredClass=='dijit.form.DateTextBox'){
				urlValue+='&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).valueNode.value;
			}else if(dijit.byId(camposFormM[i]).declaredClass=='dijit.form.NumberTextBox'){
				urlValue+='&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).attr('value');
			}else if(camposFormM[i]=='observaciones'){
				urlValue+='&'+camposFormM[i]+'='+unescape( encodeURIComponent( dijit.byId(camposFormM[i]).attr('value')));
			}else{
				urlValue+='&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).attr('value');
			}
		}
	}
	var CompletarJSON = function(items,request){
		var ids = '';
		var importes = '';
		var porcentajes = '';
		for(i=0;i<items.length;i++){
			if(dijit.byId('gridProductos').store.getValue(items[i],'importe')<1){dijit.showTooltip('Los productos deben tener un importe mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}
			ids+=dijit.byId('gridProductos').store.getValue(items[i],'producto_id');
			importes+=dijit.byId('gridProductos').store.getValue(items[i],'importe');
			porcentajes+=dijit.byId('gridProductos').store.getValue(items[i],'porcentaje');
			if(i!=items.length-1){ids+=',';importes+='-';if(porcentajes!=''){porcentajes+='-';}}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
		dijit.byId('dialogMaster').hide();
		procesando.show();
		urlValue+='&productos='+ids+'&importes_productos='+importes+'&porcentajes='+porcentajes;
		//Grabación de datos en la base de datos
		dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
			if(response.errcode==0){
				CancelarMaster();
				procesando.hide();
				Mensaje(response.errmsg,'mensaje','master');
			}else{procesando.hide();
				  dijit.byId('dialogMaster').show();
				  PopUp('Error',response.errmsg);}
		}});
	}
	if(dijit.byId('gridProductos').store){dijit.byId('gridProductos').store.fetch({query:{},onComplete:CompletarJSON});}
	else{dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMasterCopiar(){
	dijit.byId('gridProductos').edit.apply();
	//Validacion de que el formulario esté bien cargado
	if(!dijit.byId('observaciones').isValid()){dijit.byId('observaciones').focus();return;}
	if(!dijit.byId(camposFormM[10]).isValid()){dijit.byId(camposFormM[10]).focus();return;}
	if(!dijit.byId(camposFormM[11]).isValid()){dijit.byId(camposFormM[11]).focus();return;}
	if(!dijit.byId(camposFormM[8]).options.length){dijit.byId('gridOrigen').attr('autoWidth',true);dijit.byId('dialogClientes').show();return;}
	//Generación de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM+'&'+camposFormM[10]+'='+dijit.byId(camposFormM[10]).valueNode.value+'&'+camposFormM[11]+'='+dijit.byId(camposFormM[11]).valueNode.value+'&'+camposFormM[8]+'='+dijit.byId(camposFormM[8]).attr('value')+'&'+camposFormM[19]+'='+dijit.byId(camposFormM[19]).attr('value')+'&'+camposFormM[0]+'='+dijit.byId('tipo_carga_propuesta').attr('value');
	var CompletarJSON = function(items,request){
		var ids = '';
		var importes = '';
		var porcentajes = '';
		for(i=0;i<items.length;i++){
			if(dijit.byId('gridProductos').store.getValue(items[i],'importe')<1){dijit.showTooltip('Los productos deben tener un importe mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}
			ids+=dijit.byId('gridProductos').store.getValue(items[i],'producto_id');
			importes+=dijit.byId('gridProductos').store.getValue(items[i],'importe');
			porcentajes+=dijit.byId('gridProductos').store.getValue(items[i],'porcentaje');
			if(i!=items.length-1){ids+=',';importes+='-';if(porcentajes!=''){porcentajes+='-';}}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
		dijit.byId('dialogMaster').hide();
		procesando.show();
		urlValue+='&productos='+ids+'&importes_productos='+importes+'&porcentajes='+porcentajes;
		//Grabación de datos en la base de datos
		dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
			if(response.errcode==0){
				CancelarMaster();
				BuscarMaster();
				procesando.hide();
				Mensaje(response.errmsg,'mensaje','master');
			}else{procesando.hide();dijit.byId('dialogMaster').show();PopUp('Error',response.errmsg);}
		}});
	}
	if(dijit.byId('gridProductos').store){dijit.byId('gridProductos').store.fetch({query:{},onComplete:CompletarJSON});}
	else{dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMasterEditar(){
	dijit.byId('gridProductos').edit.apply();
	//Validacion de que el formulario esté bien cargado
	if(!dijit.byId('observaciones').isValid()){dijit.byId('observaciones').focus();return;}

	//Generación de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM+'&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]+'&observaciones='+dijit.byId(camposFormM[19]).attr('value');
	var CompletarJSON = function(items,request){
		var ids = '';
		var importes = '';
		var porcentajes = '';
		for(i=0;i<items.length;i++){
			if(registroSeleccionado[0]['estado'][0]=='AW'){if(dijit.byId('gridProductos').store.getValue(items[i],'importe')<0){dijit.showTooltip('Los productos deben tener un importe mayor o igual a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}
			}else if(dijit.byId('gridProductos').store.getValue(items[i],'importe')<1){dijit.showTooltip('Los productos deben tener un importe mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}
			ids+=dijit.byId('gridProductos').store.getValue(items[i],'producto_id');
			importes+=dijit.byId('gridProductos').store.getValue(items[i],'importe');
			porcentajes+=dijit.byId('gridProductos').store.getValue(items[i],'porcentaje');
			if(i!=items.length-1){ids+=',';importes+='-';if(porcentajes!=''){porcentajes+='-';}}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
		dijit.byId('dialogMaster').hide();
		procesando.show();
		urlValue+='&productos='+ids+'&importes_productos='+importes+'&porcentajes='+porcentajes;
		//Grabación de datos en la base de datos
		dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
			if(response.errcode==0){
				BuscarMaster();
				CancelarMaster();
				procesando.hide();
				Mensaje(response.errmsg,'mensaje','master');
			}else{procesando.hide();dijit.byId('dialogMaster').show();PopUp('Error',response.errmsg);}
		}});
	}
	if(dijit.byId('gridProductos').store){dijit.byId('gridProductos').store.fetch({query:{},onComplete:CompletarJSON});}
	else{dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	dijit.byId('gridProductos').edit.apply();
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	//Elimino el dialogo
	dijit.byId('dialogMaster').hide();
	dijit.byId('divCampos').destroyDescendants();
	dijit.byId('divBotones').destroyDescendants();
	dijit.byId('divProrrateo').destroyDescendants();
	dijit.byId('divProrrateoProductos').destroyDescendants();
	dijit.byId('divProrrateoDefine').destroyDescendants();
	dijit.byId('divProrrateoPorMarca').destroyDescendants();
	dijit.byId('divProrrateoPorConcepto').destroyDescendants();
	if(dijit.byId('tipo_carga_propuesta')){dijit.byId('tipo_carga_propuesta').destroy();}
	if(dijit.byId('negocio_id')){dijit.byId('negocio_id').destroy();}
	if(dijit.byId('negocio_desc')){dijit.byId('negocio_desc').destroy();}
	if(dijit.byId('division_id')){dijit.byId('division_id').destroy();}
	if(dijit.byId('division')){dijit.byId('division').destroy();}
	
	dijit.byId('cli_id').attr('value','');
	dijit.byId('razon').attr('value','');
	dijit.byId('div').attr('value','');
	dijit.byId('marc').attr('value','');
	dijit.byId('prod_id').attr('value','');
	dijit.byId('desc').attr('value','');
	dojo.byId('prod').style.display = 'block';
	dojo.byId('protrue').style.display = 'none';
	dojo.byId('marca').style.display = 'none';
	dojo.byId('concepto').style.display = 'none';
	dijit.byId('gridDestino').setStore(null);dijit.byId('gridDestino').update();
	dijit.byId('gridDestinoP').setStore(null);dijit.byId('gridDestinoP').update();
	dijit.byId('gridOrigen').setStore(null);dijit.byId('gridOrigen').update();
	dijit.byId('gridOrigenP').setStore(null);dijit.byId('gridOrigenP').update();
	dijit.byId('gridProductos').setStore(null);dijit.byId('gridProductos').update();
	dojo.byId('divTotalImporte').innerHTML='0';
	dojo.byId('divTotalBulto').innerHTML='0';
	//Limpio campos del formulario
	for(i=0;i<camposFormM.length;i++){if(dijit.byId(camposFormM[i])){dijit.byId(camposFormM[i]).destroy();}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ColorearFila(row){
	/* var item = gridArea.getItem(row.index);
	if(item){
		if(item['importe_ajustado'][0]>0){row.customStyles+='color:green;';}
		else{row.customStyles+='color:red;';}}
	gridArea.focus.styleRow(row);
	gridArea.edit.styleRow(row); */
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumnD(checkbox,grilla_id){
	if(dijit.byId(grilla_id).store){
		var Checkear = function(item){
			dijit.byId(grilla_id).store.setValue(item,columnasP[3],checkbox.checked);
		}
		dijit.byId(grilla_id).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId(grilla_id).store.save();}});
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumnCon(checkbox,grilla_id){
var divisor = 0;
	if(dijit.byId(grilla_id).store){
		var Checkear = function(item){
			dijit.byId(grilla_id).store.setValue(item,columnasCon[0],checkbox.checked);
			//dijit.byId(grilla_id).store.setValue(item,columnasCon[3],100);
		}
		dijit.byId(grilla_id).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId(grilla_id).store.save();}});
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumn(checkbox){
	if(dijit.byId('enviarMasivoAMaster')){
		dijit.byId('enviarMasivoAMaster').attr('disabled',false);
		for(i=0;i<cantidadGrillas;i++){	
			if(dijit.byId('grilla'+i).store){
				var Checkear = function(item){
					if(item['estado'][0]=='PEA'){
						dijit.byId('grilla'+i).store.setValue(item,columnasE[9],checkbox.checked);
					}
				}
				dijit.byId('grilla'+i).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId('grilla'+i).store.save();}});
			}
		}
	}
	else if(dijit.byId('enviarMasivoWMaster')){
		dijit.byId('enviarMasivoWMaster').attr('disabled',false);
		for(i=0;i<cantidadGrillas;i++){	
			if(dijit.byId('grilla'+i).store){
				var Checkear = function(item){
					if(item['estado'][0]=='EA'){
						dijit.byId('grilla'+i).store.setValue(item,columnasE[9],checkbox.checked);
					}
				}
				dijit.byId('grilla'+i).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId('grilla'+i).store.save();}});
			}
		}
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////