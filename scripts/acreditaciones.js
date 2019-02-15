//TITULOS
var titulos =  new Array('Acreditaciones');
var filtroValue = new Array();
// arreglo de botones auxiliar para manejar la seguridad
var permisoBoton = new Array();
var editar=0;
var eliminar=1;
var nuevo=2;
var carga=3;
var enviar=4;
var adjuntar=5;
var bajarAdjunto=6;
var eliminarAdjunto=7;
var permitir = 1;
var denegar =0;
//DMLs
var dmlBuscarMaster = '11804';
var dmlBuscarMasterAcre = '11817';
var dmlNuevoMaster = '11801';
var dmlNuevoEnvioMaster = '11812';
var dmlEditarMaster = '11802';
var dmlEditarEnviarMaster = '11813';
var dmlbuscarUnicoM = 'nnnnn'; 
var dmlEliminarMaster = '11803';
var dmlAuditoriaMaster = 'nnnnn';
var dmlBajarExcelMaster = '11816';
var dmlgrabarM = '';
//COLUMNAS
var columnasM = new Array('cliente_id','cliente_abrev','r','propuesta_id','tipo_carga','marcas','vigencia_desde','vigencia_hasta','descripcion','bultos','importe','observaciones','solicitado','acreditado');
var columnasAA = new Array('acreditacion_id','propuesta_id','deposito_id','tipo_comprobante_id','observaciones','monto','bultos','estado','archivo_id');
var columnasE = new Array('acreditacion_id','propuesta_id','deposito_id','tipo_comprobante_id','observaciones','monto','bultos','estado','adjunto_masivo','adjunto','seleccionado');
var columnasA = new Array('acreditacion_id','fecha','estado','deposito_id','deposito_desc','bultos','importe','archivo_id','observaciones','tipo_cbte_truck','err_impacto_desc');
var columnasD = new Array('presup_ajuste_id','fecha','usuario','importe_ajustado','vol_ventas_ajustado','precio_htl_ajustado','observaciones');
var columnasDD = new Array('acreditacion_id','tipo','serie','numero','bultos','importe','importe_base','importe_impuestos');
var columnasP = new Array('producto_id','producto_desc','bultos','importe','seleccionado');
var columnasDiv = new Array('division_id','division_desc','disponible','monto');
//DESCRIPCIONES
var descripcionesM = new Array('','','R','Nro','Tipo Carga','Marcas','Vig. Desde','Vig. Hasta','Descripci&oacute;n','Bultos','Monto','Observaciones','Solicitado','Acreditado');
var descripcionesAA = new Array('Acreditaci&oacute;n','Propuesta','Dep&oacute;sito','Tipo Comprobante','Observaciones','Monto','Bultos','Estado','Adjunto Masivo','Adjunto','Env&iacute;o Masivo','Adjunto');
var descripcionesE = new Array('Acreditaci&oacute;n','Propuesta','Dep&oacute;sito','Tipo Comprobante','Observaciones','Monto','Bultos','Estado','Adjunto Masivo','Adjunto','Selec.');
var descripcionesA = new Array('Nro.','Fecha','Estado','Dep&oacute;sito ID','Dep&oacute;sito','Bultos','Importe','Adjunto','Observaciones','Tipo Comprobante Truck','Error Impacto');
var descripcionesD = new Array('Presupuesto Ajuste ID','Fecha','Usuario','Importe','Vol. Venta','$/ Htl.','Observaciones');
var descripcionesDD = new Array('Acreditaci&oacute;n','Tipo Comprobante','Serie','N&uacute;mero','Bultos','Importe','Importe Base','Importe Impuesto');
var descripcionesP = new Array('Id','Descripci&oacute;n','Bultos','Importe','Selec.');
var descripcionesDiv = new Array('Divisi&oacute;n','Descripci&oacute;n','Disponble','Monto');
//PRIMARY KEY
var clavesM = new Array('presupuesto_id');
var regexpFormM = new Array(".*","[a-zA-Z0-9Ò—ø?°! ,.()-_]+");
//FILTROS VALIDOS
var filtroMaster = new Array('propuesta_id','area_id','subregion_id','cliente_id','tipo_presupuesto_id','mes','anio','acreditacion_id','estado');
var labelFiltroMaster = new Array('Propuesta: ','Area: ','Sub Regi&oacute;n: ','Cliente: ','Tipo: ','Mes: ','A&ntilde;o: ','Acreditaci&oacute;n: ','Estado AC: ');
var mensajeFiltroMaster = new Array('Seleccione la Propuesta','Seleccione el Area','Seleccione la Subregi&oacute;n','Seleccione el Distribuidor','Seleccione el Tipo de Presupuesto','Seleccione el Mes','Seleccione el A&ntilde;o','Seleccione la Acreditaci&oacute;n','Seleccione Estado AC: ');
var requeridoFiltroMaster = new Array(false,false,false,false,false,false,false,false,false); //(false,true,true,false,false,true,true,false,false); 
var searchAttrFiltroMaster = new Array('','detalle','detalle','detalle','detalle','detalle','','','');
var tipoFiltroMaster = new Array('ValidationTextBox','FilteringSelect','FilteringSelect','FilteringSelect','FilteringSelect','FilteringSelect','ValidationTextBox','ValidationTextBox','ValidationTextBox');
var selectFiltroMaster = new Array('','11406','11606','11633','11407','','','','');
//FORMULARIO
var camposFormM = new Array('propuesta_id','cliente_abrev','acreditacion_id','fecha','observaciones_p','deposito_id','on_premise','bultos','importe','tipo_cbte_id','observaciones','archivo');
var labelFormM = new Array('Propuesta: ','Cliente: ','Acreditaci&oacute;n: ','Fecha: ','Observaciones Propuestas: ','Dep&oacute;sito: ','On-Premise: ','Bultos: ','Importe: ','Tipo Comprobante Truck: ','Observaciones: ','Archivo Adjunto: ');
var requeridoFormM = new Array(false,false,false,false,false,true,false,false,true,true,false,false);
var mensajesFormM = new Array('','','','','','Seleccione el Dep&oacute;sito','','','Ingrese el Importe','Seleccione el Tipo de Comprobante de Truck','Ingrese las Observaciones','Seleccione un Archivo');
var searchAttrFormM = new Array('','','','','','detalle','','','','detalle','','');
var selectFormM = new Array('','','','','','11808','','','','11809','','');
var registroSeleccionado = null;
var registroSeleccionadoA = null;
var mesesStore = {identifier:'id',label:'detalle',items:[{id:'01',detalle:'01'},{id:'02',detalle:'02'},{id:'03',detalle:'03'},{id:'04',detalle:'04'},{id:'05',detalle:'05'},{id:'06',detalle:'06'},{id:'07',detalle:'07'},{id:'08',detalle:'08'},{id:'09',detalle:'09'},{id:'10',detalle:'10'},{id:'11',detalle:'11'},{id:'12',detalle:'12'}]};
//Carga las estructuras de las tablas
var True_X = function(value){if(value=='false'){return 'X';}return '';}
var layoutMaster = [
    {width: "auto", field: columnasM[0], name: descripcionesM[0],hidden:true},
    {width: "auto", field: columnasM[1], name: descripcionesM[1],hidden:true},
    {width: '20px', field: columnasM[2], name: descripcionesM[2],formatter:True_X},
	{width: '50px', field: columnasM[3], name: descripcionesM[3]},
	{width: "auto", field: columnasM[4], name: descripcionesM[4]},
    {width: "auto", field: columnasM[5], name: descripcionesM[5]},
	{width: '60px', field: columnasM[6], name: descripcionesM[6]},
	{width: '60px', field: columnasM[7], name: descripcionesM[7]},
	{width: "auto", field: columnasM[8], name: descripcionesM[8]},
    {width: '50px', field: columnasM[9], name: descripcionesM[9]},
	{width: '50px', field: columnasM[10], name: descripcionesM[10]},
	{width: "auto", field: columnasM[11], name: descripcionesM[11],hidden:true},
	{width: '50px', field: columnasM[12], name: descripcionesM[12]},
	{width: '50px', field: columnasM[13], name: descripcionesM[13]}];
var layoutAcreDetalle = [
	{width: "70px", field: columnasAA[0], name: descripcionesAA[0]},
    {width: "60px", field: columnasAA[1], name: descripcionesAA[1]},
	{width: '50px', field: columnasAA[2], name: descripcionesAA[2]},
    {width: '100px', field: columnasAA[3], name: descripcionesAA[3]},
	{width: '450px', field: columnasAA[4], name: descripcionesAA[4]},
	{width: '30px', field: columnasAA[5], name: descripcionesAA[5]},
	{width: '30px', field: columnasAA[6], name: descripcionesAA[6]},
	{width: '30px', field: columnasAA[7], name: descripcionesAA[7]},
	{width: 'auto', field: columnasE[8], name: descripcionesAA[8],editable:true, type:dojox.grid.cells.Bool,styles:'text-align:center;'},
	{width: "auto", field: columnasE[10], name: descripcionesAA[10],editable:true, type:dojox.grid.cells.Bool,styles:'text-align:center;'},
	{width: "auto", field: columnasAA[8], name: descripcionesAA[11],formatter:formatCheckbox,styles:'text-align:center;',styles:'text-aling:center;'}];
var layoutAcreditaciones = [
    {width: '50px', field: columnasA[0], name: descripcionesA[0]},
    {width: '60px', field: columnasA[1], name: descripcionesA[1]},
    {width: '40px', field: columnasA[2], name: descripcionesA[2]},
	{width: "auto", field: columnasA[3], name: descripcionesA[3],hidden:true},
	{width: "auto", field: columnasA[4], name: descripcionesA[4]},
	{width: '50px', field: columnasA[5], name: descripcionesA[5],hidden:true},
	{width: '50px', field: columnasA[6], name: descripcionesA[6]},
	{width: '50px', field: columnasA[7], name: descripcionesA[7],formatter:formatCheckbox,styles:'text-align:center;'},
	{width: "auto", field: columnasA[8], name: descripcionesA[8]},
	{width: "auto", field: columnasA[9], name: descripcionesA[9],hidden:true},
	{width: "40px", field: columnasA[10], name: descripcionesA[10],formatter:formatCheckbox2,styles:'text-align:center;'}];
var layoutDetalle = [
    {width: "auto", field: columnasDD[0], name: descripcionesDD[0]},
    {width: "auto", field: columnasDD[1], name: descripcionesDD[1]},
    {width: "auto", field: columnasDD[2], name: descripcionesDD[2]},
	{width: "auto", field: columnasDD[3], name: descripcionesDD[3]},
	{width: "auto", field: columnasDD[4], name: descripcionesDD[4]},
    {width: "auto", field: columnasDD[5], name: descripcionesDD[5]},
	{width: "auto", field: columnasDD[6], name: descripcionesDD[6]},
	{width: "auto", field: columnasDD[7], name: descripcionesDD[7]}];
var CalcularTotal = function(value){
	dijit.hideTooltip(dijit.byId('gridDestinoP').domNode);
	var suma = 0;
	var AsignarTotal = function(items,request){
		for(i=0;i<items.length;i++){
			suma+=parseFloat(dijit.byId('gridDestinoP').store.getValue(items[i],'importe').replace(',','.'));}
		dojo.byId('divTotalImporte').innerHTML = suma.toFixed(2);
	}
	dijit.byId('gridDestinoP').store.fetch({query:{},onComplete:AsignarTotal});
	return value.replace(',','.');
}
var CalcularTotalBultos = function(value){
	bultosValorizados = false;
	dijit.hideTooltip(dijit.byId('gridDestinoP').domNode);
	var suma = 0;
	var AsignarTotal = function(items,request){
		for(i=0;i<items.length;i++){
			suma+=parseInt(dijit.byId('gridDestinoP').store.getValue(items[i],'bultos'));}
		dojo.byId('divTotalBultos').innerHTML = suma;
	}
	dijit.byId('gridDestinoP').store.fetch({query:{},onComplete:AsignarTotal});
	return value;
}
var CalcularTotalAcre = function(value){
	dijit.hideTooltip(dijit.byId('gridDestinoP2').domNode);
	var suma = 0;
	var AsignarTotal = function(items,request){
		for(i=0;i<items.length;i++){
			suma+=parseFloat(dijit.byId('gridDestinoP2').store.getValue(items[i],'importe').replace(',','.'));}
		dojo.byId('divTotalImporte').innerHTML = suma.toFixed(2);
	}
	dijit.byId('gridDestinoP2').store.fetch({query:{},onComplete:AsignarTotal});
	return value.replace(',','.');
}
var CalcularTotalBultosAcre = function(value){
	bultosValorizados = false;
	dijit.hideTooltip(dijit.byId('gridDestinoP2').domNode);
	var suma = 0;
	var AsignarTotal = function(items,request){
		for(i=0;i<items.length;i++){
			suma+=parseInt(dijit.byId('gridDestinoP2').store.getValue(items[i],'bultos'));}
		dojo.byId('divTotalBultos').innerHTML = suma;
	}
	dijit.byId('gridDestinoP2').store.fetch({query:{},onComplete:AsignarTotal});
	return value;
}
var CalcularTotalMontos = function(value){
	dijit.hideTooltip(dijit.byId('gridDivisiones').domNode);
	var suma = 0;
	var AsignarTotal = function(items,request){
		for(i=0;i<items.length;i++){
			suma+=parseFloat(dijit.byId('gridDivisiones').store.getValue(items[i],'monto').replace(',','.'));}
		dojo.byId('divTotalMontos').innerHTML = suma.toFixed(2);
	}
	dijit.byId('gridDivisiones').store.fetch({query:{},onComplete:AsignarTotal});
	return value.replace(',','.');
}
var layoutProductosOrigen = [
    {width: "45px", field: columnasP[0], name: descripcionesP[0]},
    {width: "180px", field: columnasP[1], name: descripcionesP[1]},
    {width: "54px", field: columnasP[4], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridOrigenP\');"/> '+descripcionesP[4], editable:true, type:dojox.grid.cells.Bool}];
var layoutProductosDestino = [
    {width: "45px", field: columnasP[0], name: descripcionesP[0]},
    {width: "180px", field: columnasP[1], name: descripcionesP[1]},
    {width: "60px", field: columnasP[2], name: descripcionesP[2],editable:true,formatter:CalcularTotalBultos},
    {width: "60px", field: columnasP[3], name: descripcionesP[3],formatter:CalcularTotal},
    {width: "54px", field: columnasP[4], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridDestinoP\');"/> '+descripcionesP[4], editable:true, type:dojox.grid.cells.Bool}];
var layoutProductosOrigen2 = [
    {width: "45px", field: columnasP[0], name: descripcionesP[0]},
    {width: "180px", field: columnasP[1], name: descripcionesP[1]},
    {width: "54px", field: columnasP[4], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridOrigenP2\');"/> '+descripcionesP[4], editable:true, type:dojox.grid.cells.Bool}];
var layoutProductosDestino2 = [
    {width: "45px", field: columnasP[0], name: descripcionesP[0]},
    {width: "180px", field: columnasP[1], name: descripcionesP[1]},
    {width: "60px", field: columnasP[2], name: descripcionesP[2],editable:true,formatter:CalcularTotalBultos},
    {width: "60px", field: columnasP[3], name: descripcionesP[3],formatter:CalcularTotal},
    {width: "54px", field: columnasP[4], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridDestinoP2\');"/> '+descripcionesP[4], editable:true, type:dojox.grid.cells.Bool}];
var layoutDialog = [
	{width: "40px", field: columnasDiv[0], name: descripcionesDiv[0]},
    {width: "180px", field: columnasDiv[1], name: descripcionesDiv[1]},
    {width: "60px", field: columnasDiv[2], name: descripcionesDiv[2]},
    {width: "40px", field: columnasDiv[3], name: descripcionesDiv[3],editable:true,formatter:CalcularTotalMontos}];
var cantidadGrillas = 0;
//campos de auditoria
var camposAuditoriaM = new Array('usr_altam','fecha_altam','usr_modifm','fecha_modifm');
var labelAuditoria = new Array('Creado por: ','Fecha de creaci&oacute;n: ','Modificado por: ','Fecha de modificaci&oacute;n: ');
//Carga de titulos
document.getElementById('bloqueMaster').innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	//dojo.connect(gridArea,'onStyleRow',function(row){ColorearFila(row);});
	if(dijit.byId('nuevoMaster')){dijit.byId('nuevoMaster').attr('disabled',true);}
	if(dijit.byId('buscarMaster')){
		dijit.byId('buscarMaster').destroy();
		dijit.byId('separatorMaster').destroy();
		dojo.byId('botonDetalle').style.display = 'block';
		dojo.byId('botonAdjunto').style.display = 'block';
	}
	
	if(dijit.byId('enviarMasivoWMaster')||dijit.byId('adjuntarArchivoMasivo')){columnasAA = columnasE;layoutAcreDetalle;dojo.place('<div id="masivoAdjunto" class="dijitToolbar" style="text-align:right;height:24px;padding-right:9%"><label for="selec">Adjunto</label><input id="selec" type="checkbox" title="Adjunto" onclick="CheckColumnMasivo(this);"/><id="masivoEnvio" class="dijitToolbar" style="text-align:right;height:24px"><label for="selec">Selec. Env&iacute;o</label><input id="selec" type="checkbox" title="Env&iacute;o Masivo" onclick="CheckColumn(this);"/></div>',dojo.byId('cabecera'),'last');}	

	if(dijit.byId('editarMaster')){dijit.byId('editarMaster').destroy();dojo.byId('botonEditar').style.display = 'block'; permisoBoton[editar]=permitir;} else {permisoBoton[editar]=denegar;}
	if(dijit.byId('eliminarMaster')){dijit.byId('eliminarMaster').destroy();dojo.byId('botonEliminar').style.display = 'block';permisoBoton[eliminar]=permitir;}else {permisoBoton[eliminar]=denegar;}
	if(dijit.byId('nuevoMaster')){dijit.byId('nuevoMaster').destroy();permisoBoton[nuevo]=permitir;} else {permisoBoton[nuevo]=denegar;}
	if(dijit.byId('cargaMasivaMaster')){dijit.byId('cargaMasivaMaster').destroy();permisoBoton[carga]=permitir;} else {permisoBoton[carga]=denegar;}
	if(dijit.byId('enviarMasivoWMaster')){dijit.byId('enviarMasivoWMaster').destroy();permisoBoton[enviar]=permitir;} else {permisoBoton[enviar]=denegar;}
	if(dijit.byId('adjuntarArchivoMasivo')){dijit.byId('adjuntarArchivoMasivo').destroy();permisoBoton[adjuntar]=permitir; } else {permisoBoton[adjuntar]=denegar;  }
	if(dijit.byId('eliminarAdjuntoAcre')){dijit.byId('eliminarAdjuntoAcre').destroy();permisoBoton[eliminarAdjunto]=permitir; } else {permisoBoton[eliminarAdjunto]=denegar; }
	if(dijit.byId('bajarAdjuntoAcre')){dijit.byId('bajarAdjuntoAcre').destroy();permisoBoton[bajarAdjunto]=permitir; } else {permisoBoton[bajarAdjunto]=denegar; }

	ArmadoFiltroYAuditoria();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedMaster(grilla){
	registroSeleccionado = grilla.selection.getSelected();
	for(i=0;i<cantidadGrillas;i++){if(dijit.byId('grilla'+i)!=grilla){dijit.byId('grilla'+i).selection.clear();}}
	HabilitarBotonesMaster(2,false);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedMasterAcre(grilla){
	registroSeleccionado = grilla.selection.getSelected();
	for(i=0;i<cantidadGrillas;i++){if(dijit.byId('grilla'+i)!=grilla){dijit.byId('grilla'+i).selection.clear();}}
	HabilitarBotonesMaster(3,false);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SelecionarAcreditacion(){
	registroSeleccionadoA = dijit.byId('gridAcreditaciones').selection.getSelected();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function HabilitarBotonesMaster(tipo,bool){
	if(tipo==1){
		if(dijit.byId('bajaexcelMaster')){dijit.byId('bajaexcelMaster').attr('disabled',bool);}}
	if(tipo==2){
		if(dijit.byId('nuevoMaster')){dijit.byId('nuevoMaster').attr('disabled',bool);}
		if(dijit.byId('copiarMaster')){dijit.byId('copiarMaster').attr('disabled',bool);}
		if(dijit.byId('auditMaster')){dijit.byId('auditMaster').attr('disabled',bool);}
		if(dijit.byId('blanquearClaveMaster')){dijit.byId('blanquearClaveMaster').attr('disabled',bool);}
		if(dijit.byId('verDetalleMaster')){dijit.byId('verDetalleMaster').attr('disabled',bool);}
		if(dijit.byId('cargaMasivaMaster')){dijit.byId('cargaMasivaMaster').attr('disabled',bool);}
		if(dijit.byId('editarAcreMaster')){dijit.byId('editarAcreMaster').attr('disabled',true);}
		if(dijit.byId('enviarMasivoWMaster')){dijit.byId('enviarMasivoWMaster').attr('disabled',true);}
		if(dijit.byId('eliminarAcreMaster')){dijit.byId('eliminarAcreMaster').attr('disabled',true);}
		if(dijit.byId('eliminarAdjuntoAcre')){dijit.byId('eliminarAdjuntoAcre').attr('disabled',true);}
		if(dijit.byId('botonAdjuntarM')){dijit.byId('botonAdjuntarM').attr('disabled',true);}
		if(dijit.byId('verDetalleImpaMaster')){dijit.byId('verDetalleImpaMaster').attr('disabled',true);}		
		if(dijit.byId('bajarAdjuntoAcre')){dijit.byId('bajarAdjuntoAcre').attr('disabled',true);}}
	if(tipo==3){
		if(dijit.byId('editarAcreMaster')){dijit.byId('editarAcreMaster').attr('disabled',bool);}
		if(dijit.byId('enviarMasivoWMaster')){dijit.byId('enviarMasivoWMaster').attr('disabled',bool);}
		if(dijit.byId('eliminarAcreMaster')){dijit.byId('eliminarAcreMaster').attr('disabled',bool);}
		if(dijit.byId('eliminarAdjuntoAcre')){if(registroSeleccionado[0]['archivo_id'][0] == '' || registroSeleccionado[0]['estado'][0] != 'ED'){dijit.byId('eliminarAdjuntoAcre').attr('disabled',true);}else{dijit.byId('eliminarAdjuntoAcre').attr('disabled',bool);}}
		if(dijit.byId('botonAdjuntarM')){dijit.byId('botonAdjuntarM').attr('disabled',bool);}
		if(dijit.byId('bajarAdjuntoAcre')){if(registroSeleccionado[0]['archivo_id'][0] != ''){dijit.byId('bajarAdjuntoAcre').attr('disabled',bool);}else{dijit.byId('bajarAdjuntoAcre').attr('disabled',true);}}
		if(dijit.byId('verDetalleImpaMaster')){dijit.byId('verDetalleImpaMaster').attr('disabled',bool);}
		if(dijit.byId('nuevoMaster')){dijit.byId('nuevoMaster').attr('disabled',true);}
		if(dijit.byId('copiarMaster')){dijit.byId('copiarMaster').attr('disabled',true);}
		if(dijit.byId('auditMaster')){dijit.byId('auditMaster').attr('disabled',true);}
		if(dijit.byId('blanquearClaveMaster')){dijit.byId('blanquearClaveMaster').attr('disabled',true);}
		if(dijit.byId('verDetalleMaster')){dijit.byId('verDetalleMaster').attr('disabled',true);}
		if(dijit.byId('cargaMasivaMaster')){dijit.byId('cargaMasivaMaster').attr('disabled',true);}}
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
			if(tipoFiltroMaster[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],onChange:function(){dijit.byId('filtro6').constraints.min = arguments[0];}}));}if(dijit.byId('filtro6')){dijit.byId('filtro6').attr('onChange',function(){dijit.byId('filtro5').constraints.max = arguments[0];})}
			if(tipoFiltroMaster[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[i]})}));}
			if(tipoFiltroMaster[i]=='NumberSpinner'){tablaFiltros.addChild(new dijit.form.NumberSpinner({id:'filtro'+i,label:labelFiltroMaster[i],type:'number',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i]}));}
			}
	
	dijit.byId('filtro0').onChange= function(value){
			if(value!=''){
					dijit.byId('filtro1').attr('disabled',true);dijit.byId('filtro1').attr('required',false);dijit.byId('filtro1').attr('value','');
					dijit.byId('filtro2').attr('disabled',true);dijit.byId('filtro2').attr('required',false);dijit.byId('filtro2').attr('value','');
					dijit.byId('filtro3').attr('disabled',true);dijit.byId('filtro3').attr('required',false);dijit.byId('filtro3').attr('value','');
					dijit.byId('filtro4').attr('disabled',true);dijit.byId('filtro4').attr('required',false);dijit.byId('filtro4').attr('value','');
					dijit.byId('filtro5').attr('disabled',true);dijit.byId('filtro5').attr('required',false);dijit.byId('filtro5').attr('value','');
					dijit.byId('filtro6').attr('disabled',true);dijit.byId('filtro6').attr('required',false);dijit.byId('filtro6').attr('value','');
					dijit.byId('filtro7').attr('disabled',true);dijit.byId('filtro7').attr('required',false);dijit.byId('filtro7').attr('value','');
					dijit.byId('filtro8').attr('disabled',true);dijit.byId('filtro8').attr('required',false);dijit.byId('filtro8').attr('value','');
					}
			else{
				dijit.byId('filtro1').attr('disabled',false);dijit.byId('filtro1').attr('required',true);
				dijit.byId('filtro2').attr('disabled',true);dijit.byId('filtro2').attr('required',true);				
				dijit.byId('filtro3').attr('disabled',true);dijit.byId('filtro3').attr('required',false);
				dijit.byId('filtro4').attr('disabled',false);dijit.byId('filtro4').attr('required',false);
				dijit.byId('filtro5').attr('disabled',false);dijit.byId('filtro5').attr('required',true);dijit.byId('filtro5').attr('value',dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'}));
				dijit.byId('filtro6').attr('disabled',false);dijit.byId('filtro6').attr('required',true);dijit.byId('filtro6').attr('value',anioActual);
				dijit.byId('filtro7').attr('disabled',false);dijit.byId('filtro7').attr('required',false);
				dijit.byId('filtro8').attr('disabled',false);dijit.byId('filtro8').attr('required',false);
			}
		}

		dijit.byId('filtro7').onChange= function(value){
			if(value!=''){
					dijit.byId('filtro0').attr('disabled',true);dijit.byId('filtro0').attr('required',false);dijit.byId('filtro0').attr('value','');
					dijit.byId('filtro1').attr('disabled',true);dijit.byId('filtro1').attr('required',false);dijit.byId('filtro1').attr('value','');
					dijit.byId('filtro2').attr('disabled',true);dijit.byId('filtro2').attr('required',false);dijit.byId('filtro2').attr('value','');
					dijit.byId('filtro3').attr('disabled',true);dijit.byId('filtro3').attr('required',false);dijit.byId('filtro3').attr('value','');
					dijit.byId('filtro4').attr('disabled',true);dijit.byId('filtro4').attr('required',false);dijit.byId('filtro4').attr('value','');
					dijit.byId('filtro5').attr('disabled',true);dijit.byId('filtro5').attr('required',false);dijit.byId('filtro5').attr('value','');
					dijit.byId('filtro6').attr('disabled',true);dijit.byId('filtro6').attr('required',false);dijit.byId('filtro6').attr('value','');
					dijit.byId('filtro8').attr('disabled',true);dijit.byId('filtro8').attr('required',false);dijit.byId('filtro8').attr('value','');
					}
			else{
			dijit.byId('filtro0').attr('disabled',false);dijit.byId('filtro0').attr('required',false);
			dijit.byId('filtro8').attr('disabled',false);dijit.byId('filtro8').attr('required',false);
			}
		}
	
		dijit.byId('filtro2').attr('disabled',true);
		dijit.byId('filtro3').attr('disabled',true);
		
		dijit.byId('filtro0').attr('regExp',"[0-9]+");
		dijit.byId('filtro8').attr('regExp',"[A-Z]+");
		//agrego la division a la busqueda de marcas
		dijit.byId('filtro2').store.url += '&area_id='+dijit.byId('filtro1').attr('value');
		//Borrado de subregiones al cambiar la division
		dijit.byId('filtro1').onChange= function(value){
			if(value!=''){
				dijit.byId('filtro2').attr('disabled',false);
				dijit.byId('filtro2').attr('required',false);
				dijit.byId('filtro2').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[2]+'&area_id='+value}));
				dijit.byId('filtro2').store.fetch();}
			else{dijit.byId('filtro2').attr('disabled',true);
				dijit.byId('filtro2').attr('required',false);}
		dijit.byId('filtro2').attr('value',null);}
		dijit.byId('filtro2').onChange= function(value){
			if(value!=''){
				dijit.byId('filtro3').attr('disabled',false);
				dijit.byId('filtro3').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[3]+'&subregion_id='+value}));
				dijit.byId('filtro3').store.fetch();}
			else{dijit.byId('filtro3').attr('disabled',true);
				dijit.byId('filtro3').attr('required',false);}
			dijit.byId('filtro3').attr('value',null);}
		//Asigno store de meses y seteo anio actual por defecto
		dijit.byId('filtro5').attr('store',new dojo.data.ItemFileReadStore({data: mesesStore}));
		dijit.byId('filtro5').attr('value',dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'}));
		var anioActual = parseInt(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}));
		dijit.byId('filtro6').attr('value',anioActual);
		dijit.byId('filtro6').attr('regExp',"[0-9]+");
		
		divFiltros.attr('content',tablaFiltros);
		var botonBuscar = new dijit.form.Button({label:'Buqueda por Propuesta',showLabel:true,type:'button',onClick:function(){VerificarFiltro();}},document.createElement('div'));
		dojo.place(botonBuscar.domNode,divFiltros.domNode,'last');
		var botonBuscarMas = new dijit.form.Button({label:'Buqueda por Acreditaci&oacute;n',showLabel:true,type:'button',onClick:function(){VerificarFiltroMas();}},document.createElement('div'));
		dojo.place(botonBuscarMas.domNode,divFiltros.domNode,'last');
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
	//Validacion de que el formulario estÈ bien cargado
	if(dijit.byId('filtrosMaster').validate()){BuscarMaster();dijit.byId('filtrosMaster').onCancel();}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerificarFiltroMas(){
	//Validacion de que el formulario estÈ bien cargado
	if(dijit.byId('filtrosMaster').validate()){BuscarMasterMas();dijit.byId('filtrosMaster').onCancel();}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function NuevoMaster(){
	if(registroSeleccionado[0]['importe'][0]==registroSeleccionado[0]['solicitado'][0]){Mensaje('No es posible realizar una nueva acreditaci&oacute;n para esa propuesta','advertencia','master');return;}
	if(parseInt(registroSeleccionado[0]['importe'][0])<parseInt(registroSeleccionado[0]['solicitado'][0])){Mensaje('El monto debe ser mayor a las acreditaciones solicitadas','error','master');return;}
	
	dijit.byId('gridDivisiones').attr('structure',layoutDialog);
	
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:2,labelWidth:'140',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.TextBox({value:registroSeleccionado[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({value:registroSeleccionado[0]['cliente_abrev'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({value:'0',style:'width:130px;',label:labelFormM[2],readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({value:dojo.date.locale.format(new Date(),{datePattern:'dd-MM-yyyy',selector:'date'}),style:'width:130px;',label:labelFormM[3],readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({value:registroSeleccionado[0]['observaciones'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[5],style:'width:130px;',label:labelFormM[5],searchAttr:searchAttrFormM[5],promptMessage:mensajesFormM[5],required:requeridoFormM[5],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[5]+'&cliente_id='+registroSeleccionado[0]['cliente_id'][0]})}));
	tablaForm.addChild(new dijit.form.TextBox({value:'NO',style:'width:130px;',label:labelFormM[6],readOnly:true}));
	if(registroSeleccionado[0]['tipo_carga'][0]=='BULTOS'){tablaForm.addChild(new dijit.form.TextBox({value:registroSeleccionado[0]['bultos'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));}
	//tablaForm.addChild(new dijit.form.NumberTextBox({id:camposFormM[8],value:(parseFloat(registroSeleccionado[0]['importe'][0])-parseFloat(registroSeleccionado[0]['solicitado'][0].replace(',','.'))),style:'width:130px;',label:labelFormM[8],required:requeridoFormM[8]}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[9],style:'width:130px;',label:labelFormM[9],searchAttr:searchAttrFormM[9],promptMessage:mensajesFormM[9],required:requeridoFormM[9],onChange:function(value){AutoCompletar(dijit.byId(camposFormM[9]));},store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[9]+'&cod_canal_venta='+registroSeleccionado[0]['cod_canal_venta']+'&tipo_descuento_id='+registroSeleccionado[0]['tipo_descuento_id']})}));
	AutoCompletar(dijit.byId(camposFormM[9]));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[10],maxLength:'40',regExp:regexpFormM[1],value:registroSeleccionado[0]['observaciones'][0],required:requeridoFormM[10],style:'width:130px;height:58px;',label:labelFormM[10]}));
	tablaForm.addChild(new dijit.form.TextBox({id:'archivo_id',label:labelFormM[11],style:'width:130px;',readOnly:true}));
	dijit.byId('divCampos').attr('content',tablaForm);
	tablaForm.startup();
	//Creacion de botones
	if(registroSeleccionado[0]['tipo_carga'][0]=='BULTOS'){
		var botonValorizar = new dijit.form.Button({label:'Valorizar Productos',type:'button',onClick:function(){
		dijit.byId('marc').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11409&division_id='+registroSeleccionado[0]['division_id'][0]}));		
		dijit.byId('gridDestinoP').setStore(new dojo.data.ItemFileWriteStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11634&propuesta_id='+registroSeleccionado[0]['propuesta_id'][0]}));
		dijit.byId('gridDestinoP').store.fetch();
		dijit.byId('dialogValorizar').show();}});		
		dojo.place(botonValorizar.domNode,dijit.byId("divBotones").domNode,'last');}
	var botonAdjuntar = new dijit.form.Button({id:'botonAdjuntar', label:'Adjuntar',type:'button',iconClass:'adjuntoIcon',onClick:function(){AdjuntarMaster();}});
	dojo.place(botonAdjuntar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlgrabarM = dmlNuevoMaster;GrabarMaster();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonGrabarEnviar = new dijit.form.Button({label:'Grabar y Enviar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlgrabarM = dmlNuevoEnvioMaster;GrabarMaster();}});
	dojo.place(botonGrabarEnviar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	
	
	dijit.byId('gridDivisiones').store = null;
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11824&propuesta_id='+registroSeleccionado[0]['propuesta_id'][0];
	gridDivisiones.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridDivisiones').attr("autoWidth",true);
	dijit.byId('gridDivisiones').update();
	dijit.byId('gridDivisiones').selection.clear();
	

	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogAlta").titleBar.children[1].style.display='none';
	dijit.byId("dialogAlta").show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ValorizarProductos(){
	dijit.hideTooltip(dijit.byId('gridDestinoP').domNode);
	dijit.byId('gridDestinoP').edit.apply();
	var CompletarJSON = function(items,request){
		var ids = '';
		var bultos = '';
		for(i=0;i<items.length;i++){
			if(dijit.byId('gridDestinoP').store.getValue(items[i],'bultos')<1){dijit.showTooltip('Los productos deben tener cargado bultos mayores a 0(cero)',dijit.byId('gridDestinoP').domNode,'above');return;}
			ids+=dijit.byId('gridDestinoP').store.getValue(items[i],'producto_id');
			bultos+=dijit.byId('gridDestinoP').store.getValue(items[i],'bultos');
			if(i!=items.length-1){ids+='-';bultos+='-';}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridDestinoP').domNode,'above');return;}
		procesando.show();
		var valorizado = new dojo.data.ItemFileWriteStore({url:'dbi/propuestas_valorizacion.php?sid='+gvarSID+'&productos='+ids+'&bultos_productos='+bultos+'&cliente_id='+registroSeleccionado[0]['cliente_id'][0]});
		var EliminarInvalidos = function(items,request){
			var eliminados = '';
			for(i=0;i<items.length;i++){
				if(i!=0){eliminados+=', ';}
				eliminados+=valorizado.getValue(items[i],'producto_id');
				valorizado.deleteItem(items[i]);}
			if(eliminados){PopUp('Advertencia','Los productos '+eliminados+' han sido removidos por no estar valorizados.');}
			dijit.byId('gridDestinoP').setStore(valorizado);
			dijit.byId('gridDestinoP').attr('autoWidth',true);
			bultosValorizados = true;
			procesando.hide();
		}
		valorizado.fetch({query:{valido:'0'},onComplete:EliminarInvalidos});
	}
	if(dijit.byId('gridDestinoP').store){dijit.byId('gridDestinoP').store.fetch({query:{},onComplete:CompletarJSON});}
	else{dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridDestinoP').domNode,'above');return;}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarImporte(){
	if(parseFloat(registroSeleccionado[0]['importe'][0])-parseFloat(registroSeleccionado[0]['solicitado'][0].replace(',','.'))<dojo.byId('divTotalImporte').innerHTML){PopUp('Error', 'El importe debe ser menor o igual al disponible de la propuesta.');return;}
	dijit.byId(camposFormM[8]).attr('value',dojo.byId('divTotalImporte').innerHTML);
	dijit.byId("dialogValorizar").hide();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarProductos(){
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11612&division_id='+registroSeleccionado[0]['division_id']+'&marca_id='+dijit.byId('marc').attr('value')+'&producto_id='+dijit.byId('prod_id').valueNode.value+'&producto_desc='+dijit.byId('desc').attr('value');
	dijit.byId('gridOrigenP').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigenP').attr('autoWidth',true);
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
		dijit.byId('gridDestinoP').store.fetchItemByIdentity({identity:proId,onItem:function(item){
			if(item == null){dijit.byId('gridDestinoP').store.newItem({producto_id:proId,producto_desc:proDesc,importe:'0',bultos:'0',seleccionado:false});}}});
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
function AdjuntarMaster(){
	//Creacion del contenedor
	var divCamposA = new dijit.layout.ContentPane({style:'width:400px;text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'90',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:'archivo',style:'width:141px;',maxLength:'40',label:'Archivo',promptMessage:'Seleccione un archivo',required:true}));
	divCamposA.attr('content',tablaForm);
	tablaForm.startup();
	//Agrego funcionalidad para cargar Archivo Adjunto
	var widget = new extenciones.myFileInputAuto({id:'userfile',style:'width:141px;',name:'userfile',label:'Examinar',cancelText:'Quitar',
					url: 'dbi/acreditaciones_subirArchivo.php?sid='+gvarSID,
					onComplete: function(response,ioArgs,control){
						if (response.archivo_id){
							dijit.byId('archivo_id').attr('value',response.archivo_id);
							dijit.byId('botonAdjuntar').attr('label','Eliminar Adj.');
							dijit.byId('botonAdjuntar').onClick=function(){EliminarAdjunto();}	
							dijit.byId('dialogAdjunto').hide();
							dijit.byId('dialogAdjunto').destroyRecursive();
							if(dijit.byId('userfile')){dijit.byId('userfile').destroy();}
							if(dijit.byId('archivo')){dijit.byId('archivo').destroy();}
							dijit.byId('dialogX').show();
                            dijit.byId('dialogX').hide();
							procesando.hide();
						}else{
							dijit.byId('dialogAdjunto').hide();
							dijit.byId('dialogAdjunto').destroyRecursive();
							if(dijit.byId('userfile')){dijit.byId('userfile').destroy();}
							if(dijit.byId('archivo')){dijit.byId('archivo').destroy();}
							procesando.hide();
							PopUp('Error', response.errmsg);
						}
					}
				},dijit.byId('archivo').domNode);
	widget.startup();
	var botonGrabar = new dijit.form.Button({label:'Adjuntar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){AdjuntarArchivo();}});
	dojo.place(botonGrabar.domNode,divCamposA.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){dijit.byId('dialogAdjunto').hide();dijit.byId('dialogAdjunto').destroyRecursive();if(dijit.byId('userfile')){dijit.byId('userfile').destroy();}if(dijit.byId('archivo')){dijit.byId('archivo').destroy();}}});
	dojo.place(botonCancelar.domNode,divCamposA.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Adjuntar Archivo',id:'dialogAdjunto'});
	dialogM.attr('content',divCamposA);
	dialogM.titleBar.children[1].style.display='none';
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function AdjuntarMasivoMaster(archivoId){
	var adjuntosChecked = '';
	var mensaje = null;
	for(i=0;i<cantidadGrillas;i++){
		if(dijit.byId('grilla'+i).store){
			var ObtenerAdjuntos = function(item){
				if(item['estado'][0]!='ED'){mensaje = 'Debe seleccionar solo Acreditaciones con Estado ED';return;}
				if(item['archivo_id'][0]!='false'){mensaje = 'Debe seleccionar solo Acreditaciones sin Archivo Adjunto';return;}
				adjuntosChecked+=item['acreditacion_id'][0]+',';
			}
			dijit.byId('grilla'+i).store.fetch({query:{adjunto_masivo:'true'},onItem:ObtenerAdjuntos});
		}
	}
	if(mensaje){Mensaje(mensaje,'error','master');return;}

	//GrabaciÛn de datos en la base de datos
		adjuntosChecked = adjuntosChecked.substr(0,adjuntosChecked.length-1);
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=11823&acreditacion_id='+adjuntosChecked+'&archivo_id='+archivoId;
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==0){
			BuscarMasterMas();
			Mensaje(response.errmsg,'mensaje','master');
		}else{
			PopUp('Error',response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function AdjuntarArchivo(){
	if(dijit.byId('userfile').fileInput.value==''){PopUp('Error','Debe seleccionar un archivo');return;}
	procesando.show();
    dijit.byId('userfile')._sendFile();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function AdjuntarArchivoMasivo(){
	var adjuntosChecked = '';
	var mensaje = null;
	
	for(i=0;i<cantidadGrillas;i++){
		if(dijit.byId('grilla'+i).store){
			var ObtenerAdjuntos = function(item){
				if(item['estado'][0]!='ED'){mensaje = 'Debe seleccionar solo Acreditaciones con Estado ED';return;}
				if(item['archivo_id'][0]!='false'){mensaje = 'Debe seleccionar solo Acreditaciones sin Archivo Adjunto';return;}
				adjuntosChecked+=item['acreditacion_id'][0]+',';
			}
			dijit.byId('grilla'+i).store.fetch({query:{adjunto_masivo:'true'},onItem:ObtenerAdjuntos});
		}
	}
	if(adjuntosChecked==''){Mensaje('Seleccione al menos una Acreditaci&oacute;n','error','master');return;}
	//Creacion del contenedor
	var divCamposA = new dijit.layout.ContentPane({style:'width:400px;text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'90',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:'archivo',style:'width:141px;',maxLength:'40',label:'Archivo',promptMessage:'Seleccione un archivo',required:true}));
	divCamposA.attr('content',tablaForm);
	tablaForm.startup();
	//Agrego funcionalidad para cargar Archivo Adjunto
	var widget = new extenciones.myFileInputAuto({id:'userfile',style:'width:141px;',name:'userfile',label:'Examinar',cancelText:'Quitar',
					url: 'dbi/acreditaciones_subirArchivo.php?sid='+gvarSID,
					onComplete: function(response,ioArgs,control){
						if (response.archivo_id){
							//dijit.byId('archivo_id').attr('value',response.archivo_id);
							//dijit.byId('botonAdjuntarM').attr('label','Enviar Adj.');
							//dijit.byId('botonAdjuntarM').onClick=function(){AdjuntarMasivoMaster();}	
							dijit.byId('dialogAdjunto').hide();
							dijit.byId('dialogAdjunto').destroyRecursive();
							if(dijit.byId('userfile')){dijit.byId('userfile').destroy();}
							if(dijit.byId('archivo')){dijit.byId('archivo').destroy();}
							dijit.byId('dialogX').show();
                            dijit.byId('dialogX').hide();
							AdjuntarMasivoMaster(response.archivo_id);
							procesando.hide();
						}else{
							dijit.byId('dialogAdjunto').hide();
							dijit.byId('dialogAdjunto').destroyRecursive();
							if(dijit.byId('userfile')){dijit.byId('userfile').destroy();}
							if(dijit.byId('archivo')){dijit.byId('archivo').destroy();}
							procesando.hide();
							PopUp('Error', response.errmsg);
						}
					}
				},dijit.byId('archivo').domNode);
	widget.startup();
	var botonGrabar = new dijit.form.Button({label:'Adjuntar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){AdjuntarArchivo();}});
	dojo.place(botonGrabar.domNode,divCamposA.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){dijit.byId('dialogAdjunto').hide();dijit.byId('dialogAdjunto').destroyRecursive();if(dijit.byId('userfile')){dijit.byId('userfile').destroy();}if(dijit.byId('archivo')){dijit.byId('archivo').destroy();}}});
	dojo.place(botonCancelar.domNode,divCamposA.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Adjuntar Archivo',id:'dialogAdjunto'});
	dialogM.attr('content',divCamposA);
	dialogM.titleBar.children[1].style.display='none';
	//Se muestra el dialogo
	dialogM.show();
	
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarAdjunto(){
	var urlValue ='dbi/e.php?sid='+gvarSID+'&dmlid=11811&archivo_id='+dijit.byId('archivo_id').attr('value');
	dojo.xhrGet({url:urlValue,handleAs:'json',load:function(response){
		if(response.errcode==0){
			dijit.byId('botonAdjuntar').attr('label','Adjuntar');
			dijit.byId('botonAdjuntar').onClick=function(){AdjuntarMaster();}
			dijit.byId('archivo_id').attr('value','');
			PopUp('Mensaje','El archivo ha sido eliminado exitosamente');
		}else{PopUp('Error', response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarAdjuntoAcre(){
	var archivo_id = registroSeleccionado[0]['archivo_id'][0];
	var mensaje = null;
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=11822&archivo_id='+archivo_id+'&acreditacion_id='+registroSeleccionado[0]['acreditacion_id'][0];
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==0){
			BuscarMasterMas();
			Mensaje(response.errmsg,'mensaje','master');
		}else{
			PopUp('Error',response.errmsg);}
	}});	
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarAdjuntoEdicion(){
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=11815&acreditacion_id='+registroSeleccionadoA[0]['acreditacion_id'][0];
	dojo.xhrGet({url:urlValue,handleAs:'json',load:function(response){
		if(response.errcode==0){
			dijit.byId('botonAdjuntar').attr('label','Adjuntar');
			dijit.byId('botonAdjuntar').onClick=function(){AdjuntarMaster();}
			dijit.byId('archivo_id').attr('value','');
			PopUp('Mensaje','El archivo ha sido eliminado exitosamente');
		}else{PopUp('Error', response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMaster(){
		if(dijit.byId('editarAcreMaster')){dijit.byId('editarAcreMaster').destroy();}
		if(dijit.byId('eliminarAcreMaster')){dijit.byId('eliminarAcreMaster').destroy();}
		if(dijit.byId('verDetalleImpaMaster')){dijit.byId('verDetalleImpaMaster').destroy();}
		if(dijit.byId('adjuntarArchivoMasivo')){dijit.byId('adjuntarArchivoMasivo').destroy();}
		if(dijit.byId('eliminarAdjuntoAcre')){dijit.byId('eliminarAdjuntoAcre').destroy();}
		if(dijit.byId('bajarAdjuntoAcre')){dijit.byId('bajarAdjuntoAcre').destroy();}
		if(dijit.byId('enviarMasivoWMaster')){dijit.byId('enviarMasivoWMaster').destroy();}
		if(dijit.byId('editarMaster')){dijit.byId('editarMaster').destroy();}
		if(dijit.byId('eliminarMaster')){dijit.byId('eliminarMaster').destroy();}
		if(dijit.byId('nuevoMaster')){dijit.byId('nuevoMaster').destroy();}
		if(dijit.byId('cargaMasivaMaster')){dijit.byId('cargaMasivaMaster').destroy();}
		if(dijit.byId('verDetalleMaster')){dijit.byId('verDetalleMaster').destroy();}

	//Limpiar el contentpane...
	registroSeleccionado = null;
	dijit.byId('gridContainer').destroyDescendants();
	//Obtengo propuestas
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	if(filtroMaster.length > 0){
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='DateTextBox'){urlValue = urlValue +'&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).valueNode.value;}
			else{urlValue +='&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');
				}
			 filtroValue[i]=dijit.byId('filtro'+i).attr('value');
			}
		}
	//alert(urlValue);
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
			var urlValue2 ='dbi/acreditaciones_clientesPropuestas.php?sid='+gvarSID+'&cliente_id='+items[i]['cliente_id'][0];
        	if(filtroMaster.length > 0){
        		for(j=0;j<filtroMaster.length;j++){
					if (filtroMaster[j] != filtroMaster[3]){
						if(tipoFiltroMaster[j]=='DateTextBox'){urlValue2 +='&'+filtroMaster[j]+'='+filtroValue[j];} //+dijit.byId('filtro'+j).valueNode.value;}
						else{urlValue2 +='&'+filtroMaster[j]+'='+filtroValue[j];} //dijit.byId('filtro'+j).attr('value');}
					}
				}
				
			}	
			//alert(urlValue2);
			var grilla = new dojox.grid.DataGrid({id:'grilla'+i,store:new dojo.data.ItemFileWriteStore({url:urlValue2,urlPreventCache:true}),autoHeight:true,structure:layoutMaster,onSelected:function(){OnSelectedMaster(this);}},document.createElement('div'));
			dojo.place(grilla.domNode,dojo.byId('gridContainer'),'last');
			grilla.startup();
			}
		}
		
		//alert(permisoBoton[nuevo]);
		if (permisoBoton[nuevo]==permitir){ dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'nuevoMaster',iconClass:'nuevoIcon',disabled:true,onClick:function(){NuevoMaster();}}));}   
		if (permisoBoton[carga]==permitir){ dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'cargaMasivaMaster',iconClass:'adjuntoIcon',label:'Carga Masiva',showLabel:true,disabled:false,onClick:function(){CargaMasivaMaster();}}))}
		dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'verDetalleMaster',style:'padding-left:1px;padding-right:1px;',label:'Ver Detalle',showLabel:true,iconClass:'verDetalleIcon',disabled:true,onClick:function(){VerDetalleMaster();}}))
		
		storeCabecera.fetch({query:{},onComplete:CargarGrillas});

		//if(dijit.byId('filtrMaster')){
		//Limpio Filtros
		//for(i=0;i<filtroMaster.length;i++){if(dijit.byId('filtro'+i)){dijit.byId('filtro'+i).attr('value','');}}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMasterMas(){
		if(dijit.byId('editarAcreMaster')){dijit.byId('editarAcreMaster').destroy();}
		if(dijit.byId('eliminarAcreMaster')){dijit.byId('eliminarAcreMaster').destroy();}
		if(dijit.byId('verDetalleImpaMaster')){dijit.byId('verDetalleImpaMaster').destroy();}
		if(dijit.byId('adjuntarArchivoMasivo')){dijit.byId('adjuntarArchivoMasivo').destroy();}
		if(dijit.byId('eliminarAdjuntoAcre')){dijit.byId('eliminarAdjuntoAcre').destroy();}
		if(dijit.byId('bajarAdjuntoAcre')){dijit.byId('bajarAdjuntoAcre').destroy();}
		if(dijit.byId('enviarMasivoWMaster')){dijit.byId('enviarMasivoWMaster').destroy();}
		if(dijit.byId('editarMaster')){dijit.byId('editarMaster').destroy();}
		if(dijit.byId('eliminarMaster')){dijit.byId('eliminarMaster').destroy();}
		if(dijit.byId('nuevoMaster')){dijit.byId('nuevoMaster').destroy();}
		if(dijit.byId('cargaMasivaMaster')){dijit.byId('cargaMasivaMaster').destroy();}
		if(dijit.byId('verDetalleMaster')){dijit.byId('verDetalleMaster').destroy();}
		
	//Limpiar el contentpane...
	registroSeleccionado = null;
	dijit.byId('gridContainer').destroyDescendants();
	//Obtengo presupuestos
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarMasterAcre;
	if(filtroMaster.length > 0){
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='DateTextBox'){urlValue = urlValue +'&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).valueNode.value;}
			else{urlValue +='&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');}
				filtroValue[i]=dijit.byId('filtro'+i).attr('value');
			}

	}
	//alert(urlValue);
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
			var urlValue2 ='dbi/acreditaciones_clientesAcreditaciones.php?sid='+gvarSID+'&cliente_id='+items[i]['cliente_id'][0];
        	if(filtroMaster.length > 0){
        		for(j=0;j<filtroMaster.length;j++){
					if (filtroMaster[j] != filtroMaster[3]){
						if(tipoFiltroMaster[j]=='DateTextBox'){urlValue2 +='&'+filtroMaster[j]+'='+filtroValue[j];} //+dijit.byId('filtro'+j).valueNode.value;}
						else{urlValue2 +='&'+filtroMaster[j]+'='+filtroValue[j];} //+dijit.byId('filtro'+j).attr('value');}	
					}
				}
			}
			//alert(urlValue2);
			var grilla = new dojox.grid.DataGrid({id:'grilla'+i,store:new dojo.data.ItemFileWriteStore({url:urlValue2,urlPreventCache:true}),autoHeight:true,structure:layoutAcreDetalle,onSelected:function(){OnSelectedMasterAcre(this);}},document.createElement('div'));
			dojo.place(grilla.domNode,dojo.byId('gridContainer'),'last');
			grilla.startup();
			}
		}

		if(permisoBoton[editar]==permitir){dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'editarAcreMaster',iconClass:'editarIcon',label:'Editar Acreditaci&oacute;n',showLabel:false,disabled:true,onClick:function(){EditarAcreMaster();}}));}
		if(permisoBoton[eliminar]==permitir){dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'eliminarAcreMaster',iconClass:'eliminarIcon',label:'Eliminar Acreditaci&oacute;n',showLabel:false,disabled:true,onClick:function(){PopUp('Advertencia','Desea eliminar la Acreditaci&oacute;n '+registroSeleccionado[0]['acreditacion_id'][0]+'?','EliminarAcreMaster()');}}));}
		if(permisoBoton[enviar]==permitir){dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'enviarMasivoWMaster',style:'padding-left:1px;padding-right:1px;',label:'Env&iacute;o Masivo a WorkFlow',showLabel:false,iconClass:'envioLotusMasivoIcon',disabled:false,onClick:function(){EnviarMasivoWMaster();}}));}
		dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'verDetalleImpaMaster',style:'padding-left:1px;padding-right:1px;',label:'Ver Detalle',showLabel:true,iconClass:'verDetalleIcon',disabled:true,onClick:function(){VerDetalleImpaMaster();}}));
		if(permisoBoton[adjuntar]==permitir){dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'adjuntarArchivoMasivo', label:'Adjuntar',type:'button',disabled:false,iconClass:'adjuntoIcon',onClick:function(){AdjuntarArchivoMasivo();}}));}
		if(permisoBoton[eliminarAdjunto]==permitir){dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'eliminarAdjuntoAcre', label:'Eliminar Adjunto',type:'button',iconClass:'eliminarIcon',disabled:true,onClick:function(){PopUp('Advertencia','Desea realmente eliminar el archivo adjunto para la Acreditaci&oacute;n '+registroSeleccionado[0]['acreditacion_id'][0]+'?','EliminarAdjuntoAcre()');}}));}
		if(permisoBoton[bajarAdjunto]==permitir){dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'bajarAdjuntoAcre',type:'button',label:'Bajar Adjunto',disabled:true,iconClass:'adjuntoIcon',onClick:function(){BajarAdjuntoAcre();}}));}
	
	storeCabecera.fetch({query:{},onComplete:CargarGrillas});
		//if(dijit.byId('filtrMaster')){
		//Limpio Filtros
		//for(i=0;i<filtroMaster.length;i++){if(dijit.byId('filtro'+i)){dijit.byId('filtro'+i).attr('value','');}}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMaster(){
	if(!registroSeleccionadoA){return;}
	if(registroSeleccionadoA[0][columnasA[2]]!='ED'){PopUp('Error','Solo puede modificar Acreditaciones en estado ED');return;}

	dijit.byId('gridDivisiones').attr('structure',layoutDialog);
	
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:2,labelWidth:'140',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.TextBox({value:registroSeleccionado[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({value:registroSeleccionado[0]['cliente_abrev'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({value:registroSeleccionadoA[0]['acreditacion_id'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({value:dojo.date.locale.format(new Date(),{datePattern:'dd-MM-yyyy',selector:'date'}),style:'width:130px;',label:labelFormM[3],readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({value:registroSeleccionado[0]['observaciones'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
	if(dijit.byId(camposFormM[5])){dijit.byId(camposFormM[5]).destroy();}tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[5],value:registroSeleccionadoA[0]['deposito_id'][0],readOnly:true,style:'width:130px;',label:labelFormM[5],searchAttr:searchAttrFormM[5],promptMessage:mensajesFormM[5],required:requeridoFormM[5],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[5]+'&cliente_id='+registroSeleccionado[0]['cliente_id'][0]})}));
	tablaForm.addChild(new dijit.form.TextBox({value:'NO',style:'width:130px;',label:labelFormM[6],readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({value:registroSeleccionado[0]['bultos'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
	//if(dijit.byId(camposFormM[8])){dijit.byId(camposFormM[8]).destroy();}tablaForm.addChild(new dijit.form.NumberTextBox({id:camposFormM[8],value:registroSeleccionadoA[0]['importe'][0],style:'width:130px;',label:labelFormM[8],required:requeridoFormM[8]}));
	if(dijit.byId(camposFormM[9])){dijit.byId(camposFormM[9]).destroy();}tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[9],value:registroSeleccionadoA[0]['tipo_cbte_truck'][0],readOnly:true,style:'width:130px;',label:labelFormM[9],searchAttr:searchAttrFormM[9],promptMessage:mensajesFormM[9],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[9]+'&cod_canal_venta='+registroSeleccionado[0]['cod_canal_venta']+'&tipo_descuento_id='+registroSeleccionado[0]['tipo_descuento_id']})}));
	if(dijit.byId(camposFormM[10])){dijit.byId(camposFormM[10]).destroy();}tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[10],maxLength:'40',regExp:regexpFormM[1],value:registroSeleccionadoA[0]['observaciones'][0],displayedValue:registroSeleccionadoA[0]['observaciones'][0],required:requeridoFormM[10],style:'width:130px;height:58px;',label:labelFormM[10]}));
	if(dijit.byId('archivo_id')){dijit.byId('archivo_id').destroy();}tablaForm.addChild(new dijit.form.TextBox({id:'archivo_id',value:registroSeleccionadoA[0]['archivo_id2'][0],label:labelFormM[11],style:'width:130px;',readOnly:true}));

	dijit.byId('divCampos').attr('content',tablaForm);
	tablaForm.startup();
	
	//Creacion de botones
	if(registroSeleccionado[0]['tipo_carga'][0]=='BULTOS'){
		var botonValorizar = new dijit.form.Button({label:'Valorizar Productos',type:'button',onClick:function(){dijit.byId('marc').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11409&division_id='+registroSeleccionado[0]['division_id'][0]}));dijit.byId('dialogValorizar').show();}});
		dojo.place(botonValorizar.domNode,dijit.byId("divBotones").domNode,'last');}
	var botonAdjuntar = new dijit.form.Button({id:'botonAdjuntar', label:'Adjuntar',type:'button',iconClass:'adjuntoIcon',onClick:function(){AdjuntarMaster();}});
	dojo.place(botonAdjuntar.domNode,dijit.byId("divBotones").domNode,'last');
	if(registroSeleccionadoA[0]['archivo_id2'][0]){
			dijit.byId('botonAdjuntar').attr('label','Eliminar Adj.');
			dijit.byId('botonAdjuntar').onClick=function(){EliminarAdjuntoEdicion();}
	}
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlgrabarM = dmlEditarMaster;GrabarMaster2();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonGrabarEnviar = new dijit.form.Button({label:'Grabar y Enviar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlgrabarM = dmlEditarEnviarMaster;GrabarMaster2();}});
	dojo.place(botonGrabarEnviar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	
	dijit.byId('gridDivisiones').store = null;
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11825&acreditacion_id='+registroSeleccionadoA[0]['acreditacion_id'][0];
	gridDivisiones.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridDivisiones').attr("autoWidth",true);
	dijit.byId('gridDivisiones').update();
	dijit.byId('gridDivisiones').selection.clear();
	

	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogAlta").titleBar.children[1].style.display='none';
	dijit.byId("dialogAlta").show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDetalleMaster(){
	dijit.byId('gridAcreditaciones').setStore(new dojo.data.ItemFileWriteStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11806&propuesta_id='+registroSeleccionado[0][columnasM[3]],urlPreventCache:true}));
	dojo.byId('cabeceraAcreditaciones').innerHTML = '<table><tr><td width="33%">Propuesta: '+registroSeleccionado[0][columnasM[3]]+'</td><td width="33%">Cliente: '+registroSeleccionado[0][columnasM[0]]+' - '+registroSeleccionado[0][columnasM[1]]+'</td><td width="33%">Tipo de Carga: '+registroSeleccionado[0][columnasM[4]]+'</td></tr></table>';
	dijit.byId('dialogAcreditaciones').titleBar.children[1].style.display='none';
	dijit.byId('dialogAcreditaciones').show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDetalleDetail(){
	if(!registroSeleccionadoA){return;}
	dijit.byId('gridDetalle').setStore(new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11807&acreditacion_id='+registroSeleccionadoA[0][columnasA[0]],urlPreventCache:true}));
	dijit.byId('dialogDetalle').titleBar.children[1].style.display='none';
	dijit.byId('dialogDetalle').show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CopiarMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.BorderContainer({style:'text-align:center;background-color:white;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<columnasM.length;i++){
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:columnasM[i],label:labelFormM[i],maxLength:'40',trim:true,promptMessage:mensajesFormM[i],regexp:regexpFormM[i],regExp:regexpFormM[i],required:requeridoFormM[i]}));}
	divCamposM.addChild(tablaForm);
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
	divCamposM.addChild(botonGrabar);
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	divCamposM.addChild(botonCancelar);
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Ingreso de datos',id:'dialogMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Seteo propiedades para Copiar
	dmlgrabarM = dmlnuevoM;
	//tomo los registros seleccionados en el gridMaster
	var items = gridMaster.selection.getSelected();
	//Generacion de la URL para obtener el registro seleccionado completo
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlbuscarUnicoM;
	for(i=0;i<clavesM.length;i++){urlValue = urlValue+'&'+clavesM[i]+'='+items[0][columnasM[i]];}
	//Carga los valores del registro seleccionado
	var registroCargado = new dojo.data.ItemFileReadStore({url: urlValue});
	var gotData = function(items, request){
		for(i=0;i<columnasM.length;i++){
			//Salteo campos clave
			if(columnasM[i]!=clavesM[i])
				{dijit.byId(columnasM[i]).attr('value',registroCargado.getValue(items[0], columnasM[i]));}
			}
		//Se muestra el dialogo
		dialogM.show();
	}
	registroCargado.fetch({query: {}, onComplete: gotData});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarMaster(){
	dijit.byId('gridAcreditaciones').setStore(new dojo.data.ItemFileWriteStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11806&propuesta_id='+registroSeleccionado[0][columnasM[3]],urlPreventCache:true}));
	if(registroSeleccionadoA[0][columnasA[2]]!='ED'){PopUp('Error','Solo puede eliminar Acreditaciones en estado ED');return;}
	//GeneraciÛn de la URL y el mensaje de advertencia
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlEliminarMaster+'&acreditacion_id='+registroSeleccionadoA[0][columnasA[0]];
	mensaje='Est&aacute; seguro que desea eliminar la acreditaci&oacute;n seleccionada?';
	PopUp('Advertencia!', mensaje, "Eliminar('"+urlValue+"');");
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function Eliminar(urlValue){
	procesando.show();
	//Se elimina el registro de la base de datos
	dojo.xhrGet({url:urlValue,handleAs:'json',load:function(response){
		if(response.errcode==0){
			dijit.byId('gridAcreditaciones').setStore(new dojo.data.ItemFileWriteStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11806&propuesta_id='+registroSeleccionado[0][columnasM[3]],urlPreventCache:true}));
			procesando.hide();
			PopUp('Mensaje','El registro ha sido eliminado exitosamente');
		}else{procesando.hide();PopUp('Error', response.errmsg);}
	}});
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
function GrabarMaster(){
	gridDivisiones.edit.apply();
	//Validacion de que el formulario estÈ bien cargado
	if(!dijit.byId('deposito_id').isValid()){dijit.byId('deposito_id').focus();return;}
	if(!dijit.byId('tipo_cbte_id').isValid()){dijit.byId('tipo_cbte_id').focus();return;}
	if(!dijit.byId('observaciones').isValid()){dijit.byId('observaciones').focus();return;}
	dijit.byId('observaciones').attr('value',unescape(encodeURIComponent(dijit.byId('observaciones').attr('value'))));

	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM+'&deposito_id='+dijit.byId('deposito_id').attr('value')+'&tipo_cbte_id='+dijit.byId('tipo_cbte_id').attr('value')+'&observaciones='+dijit.byId('observaciones').attr('value')+'&archivo_id='+dijit.byId('archivo_id').attr('value');
	if(dmlgrabarM == dmlEditarMaster || dmlgrabarM == dmlEditarEnviarMaster){urlValue += '&acreditacion_id='+registroSeleccionadoA[0][columnasA[0]];}
	else{urlValue += '&propuesta_id='+registroSeleccionado[0][columnasM[3]];}
	
	var CompletarJSON = function(items,request){
		var divisiones = '';
		var montos = '';
		for(i=0;i<items.length;i++){
			divisiones+=dijit.byId('gridDivisiones').store.getValue(items[i],'division_id');
			montos+=dijit.byId('gridDivisiones').store.getValue(items[i],'monto');
			if(i!=items.length-1){divisiones+=',';montos+='-';}
		}
		dijit.byId('dialogAlta').hide();
		procesando.show();
		urlValue+='&divisiones='+divisiones+'&montos='+montos;
		//GrabaciÛn de datos en la base de datos
		dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
			if(response.errcode==0){
			dijit.byId('gridAcreditaciones').setStore(new dojo.data.ItemFileWriteStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11806&propuesta_id='+registroSeleccionado[0][columnasM[3]],urlPreventCache:true}));
			dijit.byId('gridAcreditaciones').selection.clear();
			CancelarMaster();
			procesando.hide();
			BuscarMaster();
			Mensaje(response.errmsg,'mensaje','master');
			}else{procesando.hide();
				  dijit.byId('dialogAlta').show();
				  PopUp('Error',response.errmsg);}
		}});
	}
	if(dijit.byId('gridDivisiones').store){dijit.byId('gridDivisiones').store.fetch({query:{},onComplete:CompletarJSON});}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMaster2(){
	gridDivisiones.edit.apply();
	//Validacion de que el formulario estÈ bien cargado
	if(!dijit.byId('deposito_id').isValid()){dijit.byId('deposito_id').focus();return;}
	if(!dijit.byId('tipo_cbte_id').isValid()){dijit.byId('tipo_cbte_id').focus();return;}
	if(!dijit.byId('observaciones').isValid()){dijit.byId('observaciones').focus();return;}
	dijit.byId('observaciones').attr('value',unescape(encodeURIComponent(dijit.byId('observaciones').attr('value'))));

	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM+'&deposito_id='+dijit.byId('deposito_id').attr('value')+'&tipo_cbte_id='+dijit.byId('tipo_cbte_id').attr('value')+'&observaciones='+dijit.byId('observaciones').attr('value')+'&archivo_id='+dijit.byId('archivo_id').attr('value');
	if(dmlgrabarM == dmlEditarMaster || dmlgrabarM == dmlEditarEnviarMaster){urlValue += '&acreditacion_id='+registroSeleccionadoA[0][columnasA[0]];}
	else{urlValue += '&propuesta_id='+registroSeleccionado[0][columnasM[3]];}
	
	var CompletarJSON = function(items,request){
		var divisiones = '';
		var montos = '';
		for(i=0;i<items.length;i++){
			divisiones+=dijit.byId('gridDivisiones').store.getValue(items[i],'division_id');
			montos+=dijit.byId('gridDivisiones').store.getValue(items[i],'monto');
			if(i!=items.length-1){divisiones+=',';montos+='-';}
		}
		dijit.byId('dialogAlta').hide();
		procesando.show();
		urlValue+='&divisiones='+divisiones+'&montos='+montos;
		//GrabaciÛn de datos en la base de datos
		dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
			if(response.errcode==0){
			dijit.byId('gridAcreditaciones').setStore(new dojo.data.ItemFileWriteStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11806&propuesta_id='+registroSeleccionado[0][columnasM[3]],urlPreventCache:true}));
			dijit.byId('gridAcreditaciones').selection.clear();
			CancelarMaster();
			procesando.hide();
			Mensaje(response.errmsg,'mensaje','master');
			}else{procesando.hide();
				  dijit.byId('dialogAlta').show();
				  PopUp('Error',response.errmsg);}
		}});
	}
	if(dijit.byId('gridDivisiones').store){dijit.byId('gridDivisiones').store.fetch({query:{},onComplete:CompletarJSON});}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarAcreditaciones(){
	BuscarMaster();
	dijit.byId('dialogAcreditaciones').hide();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	dijit.byId('gridDivisiones').edit.apply();
	dijit.hideTooltip(dijit.byId('gridDivisiones').domNode);
	dijit.byId('marc').attr('value','');
	dijit.byId('prod_id').attr('value','');
	dijit.byId('desc').attr('value','');	
	dijit.byId('gridDestinoP').setStore(null);dijit.byId('gridDestinoP').update();
	dijit.byId('gridOrigenP').setStore(null);dijit.byId('gridOrigenP').update();
	//Elimino el dialogo
	dijit.byId('divCampos').destroyDescendants();
	dijit.byId('divBotones').destroyDescendants();
	dijit.byId('gridDivisiones').setStore(null);dijit.byId('gridDivisiones').update();
	if(dijit.byId('dialogMaster')){dijit.byId('dialogMaster').hide();
	dijit.byId('dialogMaster').destroyRecursive();}
	dijit.byId('dialogAlta').hide();
	dojo.byId('divTotalMontos').innerHTML='0';
	//Limpio campos del formulario
	for(i=0;i<camposFormM.length;i++){if(dijit.byId(camposFormM[i])){dijit.byId(camposFormM[i]).destroy();}}
	if(dijit.byId('archivo_id')){dijit.byId('archivo_id').destroy();}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumnD(checkbox,grilla_id){
	if(dijit.byId(grilla_id).store){
		var Checkear = function(item){
			dijit.byId(grilla_id).store.setValue(item,'seleccionado',checkbox.checked);
		}
		dijit.byId(grilla_id).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId(grilla_id).store.save();}});
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ColorearFila(row){
	var item = gridArea.getItem(row.index);
	if(item){
		if(item['importe_ajustado'][0]>0){row.customStyles+='color:green;';}
		else{row.customStyles+='color:red;';}}
	gridArea.focus.styleRow(row);
	gridArea.edit.styleRow(row);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargaMasivaMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:410px;text-align:center;'});
	//Cracion de filtros
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'80',style:'text-align:left;'});
	//var mesesStore = {identifier:'mes',label:'mes',items:[{mes:'01'},{mes:'02'},{mes:'03'},{mes:'04'},{mes:'05'},{mes:'06'},{mes:'07'},{mes:'08'},{mes:'09'},{mes:'10'},{mes:'11'},{mes:'12'}]};
	//tablaForm.addChild(new dijit.form.FilteringSelect({id:'mes',label:'Mes: ',style:'width:141px;',promptMessage:'Seleccione un Mes',required:true,searchAttr:'mes',store: new dojo.data.ItemFileReadStore({data:mesesStore})}));
	//tablaForm.addChild(new dijit.form.NumberTextBox({id:'anio',value:dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),label:'A&ntilde;o: ',style:'width:141px;',promptMessage:'Ingrese un A&ntilde;o',required:true}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:'archivo',label:'Archivo: ',promptMessage:'Seleccione un Archivo',required:true}));
	divCamposM.attr('content',tablaForm);
	tablaForm.startup();
	
	var widget = new extenciones.myFileInputAuto({id:'userfile',style:'width:141px;',name:'userfile',label:'Examinar',cancelText:'Cancelar',
					url: 'dbi/acreditaciones_carga_masiva.php?sid='+gvarSID, //+'&mes='+dijit.byId('mes').attr('value')+'&anio='+dijit.byId('anio').attr('value'),
					onComplete: function(response,ioArgs,control){
						console.log(response);
						if (response.ticket_id){
							dijit.byId('dialogCargaMasivaMaster').hide();
                          
                            dijit.byId('archivo').destroy();
							//Elimino el dialogo
							dijit.byId('userfile').destroyRecursive();
							dijit.byId('dialogCargaMasivaMaster').destroyRecursive();
                            procesando.hide();
                          
							Mensaje('Proceso iniciado. Nro. de Ticket: '+response.ticket_id,'mensaje','master');
						}else{
							dijit.byId('dialogCargaMasivaMaster').hide();
                         
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
	var botonCargar = new dijit.form.Button({label:'Cargar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){PopUp('Advertencia','Se cargaran acreditaciones en forma masiva, desea continuar?','GrabarCargaMasivaMaster()');}});
	dojo.place(botonCargar.domNode,divCamposM.domNode,'last');
	var botonPlantilla = new dijit.form.Button({label:'Descargar Plantilla',type:'button',iconClass:'excelIcon',onClick:function(){PopUp('Advertencia','Recuerde que debe guardar la plantilla con la accion "Guardar Como" Libro de Office Excel (*.Xls)','BajadaExcelMaster()');}});
	dojo.place(botonPlantilla.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){dijit.byId('dialogCargaMasivaMaster').hide();dijit.byId('dialogCargaMasivaMaster').destroyRecursive();dijit.byId('archivo').destroy();dijit.byId('userfile').destroyRecursive();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Carga Masiva de Acreditaciones',id:'dialogCargaMasivaMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	//dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarCargaMasivaMaster(){
	if(dijit.byId('userfile').fileInput.value==''){PopUp('Error','Debe seleccionar un archivo');return;}
	var urlValue = 'dbi/acreditaciones_carga_masiva.php?sid='+gvarSID;
    dijit.byId('userfile').attr('url',urlValue);
	procesando.show();
    dijit.byId('userfile')._sendFile();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajadaExcelMaster() {
	//Armado de URL
	var urlValue ='dbi/acreditaciones_masivas_excel.php?sid='+gvarSID+'&dmlid='+dmlBajarExcelMaster;
	for(i=0;i<filtroMaster.length;i++){
		urlValue = urlValue +'&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');}
	document.location = urlValue;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EnviarMasivoWMaster(){
	var acreditacionesChecked = '';
	var mensaje = null;
	for(i=0;i<cantidadGrillas;i++){
		if(dijit.byId('grilla'+i).store){
			var ObtenerAcreditaciones = function(item){
				if(item['estado'][0]!='ED'){mensaje = 'Debe seleccionar solo Acreditaciones con Estado ED';return;}
				acreditacionesChecked+=item['acreditacion_id'][0]+',';
			}
			dijit.byId('grilla'+i).store.fetch({query:{seleccionado:'true'},onItem:ObtenerAcreditaciones});
		}
	}
	if(mensaje){Mensaje(mensaje,'error','master');return;}
	if(acreditacionesChecked==''){Mensaje('Seleccione al menos una Acreditaci&oacute;n','error','master');return;}
	//GrabaciÛn de datos en la base de datos
	acreditacionesChecked = acreditacionesChecked.substr(0,acreditacionesChecked.length-1);
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=11821&acreditacion_id='+acreditacionesChecked;
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==0){
			BuscarMasterMas();
			Mensaje(response.errmsg,'mensaje','master');
		}else{
			PopUp('Error',response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumn(checkbox){
		for(i=0;i<cantidadGrillas;i++){	
			if(dijit.byId('grilla'+i).store){
				var Checkear = function(item){
					if(item['estado'][0]=='ED'){
						dijit.byId('grilla'+i).store.setValue(item,columnasE[10],checkbox.checked);
					}
				}
				dijit.byId('grilla'+i).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId('grilla'+i).store.save();}});
			}
		}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumnMasivo(checkbox){
		for(i=0;i<cantidadGrillas;i++){	
			if(dijit.byId('grilla'+i).store){
				var Checkear = function(item){
					if(item['estado'][0]=='ED' && item['archivo_id'][0]=='false'){
						dijit.byId('grilla'+i).store.setValue(item,columnasE[8],checkbox.checked);
					}
				}
				dijit.byId('grilla'+i).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId('grilla'+i).store.save();}});
			}
		}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarAcreMaster(){
	if(!registroSeleccionado){return;}
	if(registroSeleccionado[0]['estado']!='ED'){PopUp('Error','Solo puede modificar Acreditaciones en estado ED');return;}
	
	dijit.byId('gridDivisiones').attr('structure',layoutDialog);
	
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:2,labelWidth:'140',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.TextBox({value:registroSeleccionado[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({value:registroSeleccionado[0]['cliente_abrev'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({value:registroSeleccionado[0]['acreditacion_id'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({value:dojo.date.locale.format(new Date(),{datePattern:'dd-MM-yyyy',selector:'date'}),style:'width:130px;',label:labelFormM[3],readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({value:registroSeleccionado[0]['observaciones'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
	if(dijit.byId(camposFormM[5])){dijit.byId(camposFormM[5]).destroy();}tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[5],value:registroSeleccionado[0]['deposito_id'][0],readOnly:true,style:'width:130px;',label:labelFormM[5],searchAttr:searchAttrFormM[5],promptMessage:mensajesFormM[5],required:requeridoFormM[5],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[5]+'&cliente_id='+registroSeleccionado[0]['cliente_id'][0]})}));
	tablaForm.addChild(new dijit.form.TextBox({value:'NO',style:'width:130px;',label:labelFormM[6],readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({value:registroSeleccionado[0]['bultos'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
	//if(dijit.byId(camposFormM[8])){dijit.byId(camposFormM[8]).destroy();}tablaForm.addChild(new dijit.form.NumberTextBox({id:camposFormM[8],value:registroSeleccionado[0]['monto'][0],style:'width:130px;',label:labelFormM[8],required:requeridoFormM[8]}));
	if(dijit.byId(camposFormM[9])){dijit.byId(camposFormM[9]).destroy();}tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[9],value:registroSeleccionado[0]['tipo_comprobante_id'][0],readOnly:true,style:'width:130px;',label:labelFormM[9],searchAttr:searchAttrFormM[9],promptMessage:mensajesFormM[9],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[9]+'&cod_canal_venta='+registroSeleccionado[0]['cod_canal_venta']+'&tipo_descuento_id='+registroSeleccionado[0]['tipo_descuento_id']})}));
	if(dijit.byId(camposFormM[10])){dijit.byId(camposFormM[10]).destroy();}tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[10],regExp:regexpFormM[1],value:registroSeleccionado[0]['observaciones'][0],maxLength:'40',displayedValue:registroSeleccionado[0]['observaciones'][0],required:requeridoFormM[10],style:'width:130px;height:58px;',label:labelFormM[10]}));
	if(dijit.byId('archivo_id')){dijit.byId('archivo_id').destroy();}tablaForm.addChild(new dijit.form.TextBox({id:'archivo_id',value:registroSeleccionado[0]['archivo_id_id'][0],label:labelFormM[11],style:'width:130px;',readOnly:true}));
	
	dijit.byId('divCampos').attr('content',tablaForm);
	tablaForm.startup();
	
	//Creacion de botones
	 if(registroSeleccionado[0]['tipo_carga'][0]=='BULTOS'){
		var botonValorizar = new dijit.form.Button({label:'Valorizar Productos',type:'button',onClick:function(){dijit.byId('marc2').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11409&division_id='+registroSeleccionado[0]['division_id'][0]}));dijit.byId('dialogValorizar2').show();}});
		dojo.place(botonValorizar.domNode,dijit.byId("divBotones").domNode,'last');}
	var botonAdjuntar = new dijit.form.Button({id:'botonAdjuntar', label:'Adjuntar',type:'button',iconClass:'adjuntoIcon',onClick:function(){AdjuntarMaster();}});
	dojo.place(botonAdjuntar.domNode,dijit.byId("divBotones").domNode,'last');
	if(registroSeleccionado[0]['archivo_id'][0]){
			dijit.byId('botonAdjuntar').attr('label','Eliminar Adj.');
			dijit.byId('botonAdjuntar').onClick=function(){EliminarAdjuntoAcreEdicion();}
	}
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlgrabarM = dmlEditarMaster;GrabarAcreMaster();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonGrabarEnviar = new dijit.form.Button({label:'Grabar y Enviar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlgrabarM = dmlEditarEnviarMaster;GrabarAcreMaster();}});
	dojo.place(botonGrabarEnviar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	
	dijit.byId('gridDivisiones').store = null;
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11825&acreditacion_id='+registroSeleccionado[0]['acreditacion_id'][0];
	gridDivisiones.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridDivisiones').attr("autoWidth",true);
	dijit.byId('gridDivisiones').update();
	dijit.byId('gridDivisiones').selection.clear();
	

	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogAlta").titleBar.children[1].style.display='none';
	dijit.byId("dialogAlta").show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarAcreMaster(){
	//Validacion de que el formulario estÈ bien cargado
	if(!dijit.byId('deposito_id').isValid()){dijit.byId('deposito_id').focus();return;}
	if(!dijit.byId('tipo_cbte_id').isValid()){dijit.byId('tipo_cbte_id').focus();return;}
	if(!dijit.byId('observaciones').isValid()){dijit.byId('observaciones').focus();return;}
	dijit.byId('observaciones').attr('value',unescape(encodeURIComponent(dijit.byId('observaciones').attr('value'))));
	
	//GeneraciÛn de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM+'&deposito_id='+dijit.byId('deposito_id').attr('value')+'&tipo_cbte_id='+dijit.byId('tipo_cbte_id').attr('value')+'&observaciones='+dijit.byId('observaciones').attr('value')+'&archivo_id='+dijit.byId('archivo_id').attr('value');
	if(dmlgrabarM == dmlEditarMaster || dmlgrabarM == dmlEditarEnviarMaster){urlValue += '&acreditacion_id='+registroSeleccionado[0]['acreditacion_id'];}
	else{urlValue += '&propuesta_id='+registroSeleccionado[0]['propuesta_id'];}
	
	var CompletarJSON = function(items,request){
		var divisiones = '';
		var montos = '';
		for(i=0;i<items.length;i++){
			divisiones+=dijit.byId('gridDivisiones').store.getValue(items[i],'division_id');
			montos+=dijit.byId('gridDivisiones').store.getValue(items[i],'monto');
			if(i!=items.length-1){divisiones+=',';montos+='-';}
		}
		dijit.byId('dialogAlta').hide();
		procesando.show();
		urlValue+='&divisiones='+divisiones+'&montos='+montos;
		//GrabaciÛn de datos en la base de datos
		dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
			if(response.errcode==0){
			dijit.byId('gridAcreditaciones').setStore(new dojo.data.ItemFileWriteStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11806&propuesta_id='+registroSeleccionado[0][columnasM[3]],urlPreventCache:true}));
			dijit.byId('gridAcreditaciones').selection.clear();
			CancelarMaster();
			procesando.hide();
			Mensaje(response.errmsg,'mensaje','master');
			BuscarMasterMas();
			}else{procesando.hide();
				  dijit.byId('dialogAlta').show();
				  PopUp('Error',response.errmsg);}
		}});
	}
	if(dijit.byId('gridDivisiones').store){dijit.byId('gridDivisiones').store.fetch({query:{},onComplete:CompletarJSON});}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ValorizarProductosAcre(){
	dijit.hideTooltip(dijit.byId('gridDestinoP2').domNode);
	dijit.byId('gridDestinoP2').edit.apply();
	var CompletarJSON = function(items,request){
		var ids = '';
		var bultos = '';
		for(i=0;i<items.length;i++){
			if(dijit.byId('gridDestinoP2').store.getValue(items[i],'bultos')<1){dijit.showTooltip('Los productos deben tener cargado bultos mayores a 0(cero)',dijit.byId('gridDestinoP2').domNode,'above');return;}
			ids+=dijit.byId('gridDestinoP2').store.getValue(items[i],'producto_id');
			bultos+=dijit.byId('gridDestinoP2').store.getValue(items[i],'bultos');
			if(i!=items.length-1){ids+='-';bultos+='-';}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridDestinoP2').domNode,'above');return;}
		procesando.show();
		var valorizado = new dojo.data.ItemFileWriteStore({url:'dbi/propuestas_valorizacion.php?sid='+gvarSID+'&productos='+ids+'&bultos_productos='+bultos+'&cliente_id='+registroSeleccionado[0]['cliente_id'][0]});
		var EliminarInvalidos = function(items,request){
			var eliminados = '';
			for(i=0;i<items.length;i++){
				if(i!=0){eliminados+=', ';}
				eliminados+=valorizado.getValue(items[i],'producto_id');
				valorizado.deleteItem(items[i]);}
			if(eliminados){PopUp('Advertencia','Los productos '+eliminados+' han sido removidos por no estar valorizados.');}
			dijit.byId('gridDestinoP2').setStore(valorizado);
			dijit.byId('gridDestinoP2').attr('autoWidth',true);
			bultosValorizados = true;
			procesando.hide();
		}
		valorizado.fetch({query:{valido:'0'},onComplete:EliminarInvalidos});
	}
	if(dijit.byId('gridDestinoP2').store){dijit.byId('gridDestinoP2').store.fetch({query:{},onComplete:CompletarJSON});}
	else{dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridDestinoP2').domNode,'above');return;}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarImporteAcre(){
	if(parseFloat(registroSeleccionado[0]['importe'][0])-parseFloat(registroSeleccionado[0]['solicitado'][0].replace(',','.'))<dojo.byId('divTotalImporte').innerHTML){PopUp('Error', 'El importe debe ser menor o igual al disponible de la propuesta.');return;}
	dijit.byId(camposFormM[8]).attr('value',dojo.byId('divTotalImporte').innerHTML);
	dijit.byId("dialogValorizar").hide();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarProductosAcre(){
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11612&division_id='+registroSeleccionado[0]['division_id']+'&marca_id='+dijit.byId('marc2').attr('value')+'&producto_id='+dijit.byId('prod_id').valueNode.value+'&producto_desc='+dijit.byId('desc').attr('value');
	dijit.byId('gridOrigenP2').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigenP2').attr('autoWidth',true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductoAcre(){
	if(!dijit.byId('gridDestinoP2').store){
		var storeDestino = {identifier: 'producto_id', label: 'producto_desc', items: []};
		dijit.byId('gridDestinoP2').setStore(new dojo.data.ItemFileWriteStore({data: storeDestino}));
		dijit.byId('gridDestinoP2').attr('autoWidth',true);
	}
	var AgregarItem = function(item){
		var proId = dijit.byId('gridOrigenP2').store.getValue(item,'producto_id');
		var proDesc = dijit.byId('gridOrigenP2').store.getValue(item,'producto_desc');
		dijit.byId('gridDestinoP2').store.fetchItemByIdentity({identity:proId,onItem:function(item){
			if(item == null){dijit.byId('gridDestinoP2').store.newItem({producto_id:proId,producto_desc:proDesc,importe:'0',bultos:'0',seleccionado:false});}}});
	}
	var ActualizarGrilla = function(items,request){dijit.byId('gridDestinoP2').store.save();}
	if(dijit.byId('gridOrigenP2').store){dijit.byId('gridOrigenP2').store.fetch({query:{seleccionado:true},onItem:AgregarItem,onComplete:ActualizarGrilla});}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SacarProductoAcre(){
	var QuitarItem = function(item){dijit.byId('gridDestinoP2').store.deleteItem(item);}
	var ActualizarGrilla = function(items,request){dijit.byId('gridDestinoP2').store.save();}
	dijit.byId('gridDestinoP2').store.fetch({query:{seleccionado:true},onItem:QuitarItem,onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarAdjuntoAcreEdicion(){
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=11822&archivo_id='+registroSeleccionado[0]['archivo_id'][0]+'&acreditacion_id='+registroSeleccionado[0]['acreditacion_id'][0];
	dojo.xhrGet({url:urlValue,handleAs:'json',load:function(response){
		if(response.errcode==0){
			dijit.byId('botonAdjuntar').attr('label','Adjuntar');
			dijit.byId('botonAdjuntar').onClick=function(){AdjuntarMaster();}
			dijit.byId('archivo_id').attr('value','');
			PopUp('Mensaje','El archivo ha sido eliminado exitosamente');
		}else{PopUp('Error', response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarAcreMaster(){
	var mensaje = null;
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlEliminarMaster+'&acreditacion_id='+registroSeleccionado[0]['acreditacion_id'][0];

	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==0){
			BuscarMasterMas();
			PopUp('Mensaje','El registro ha sido eliminado exitosamente');
			procesando.hide();
		}else{
			PopUp('Error',response.errmsg);}
	}});

}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajarAdjuntoAcre(){

	var acreditacion_id = registroSeleccionado[0]['acreditacion_id'][0];
	var adjunto_id = registroSeleccionado[0]['archivo_id'][0];		
	if (adjunto_id != ''){
		var urlValue ='dbi/acreditaciones_verAdjunto.php?sid='+gvarSID+'&acreditacion_id='+acreditacion_id;
		//document.location = urlValue;
		window.open(urlValue,"Bajar_Adjunto4","menubar=no,width=300,height=300,toolbar=no,resizable=yes");
	} else {
		return;
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDetalleImpaMaster(){
	if(!registroSeleccionado){return;}
	dijit.byId('gridDetalle').setStore(new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11807&acreditacion_id='+registroSeleccionado[0]['acreditacion_id'],urlPreventCache:true}));
	dijit.byId('dialogDetalle').titleBar.children[1].style.display='none';
	dijit.byId('dialogDetalle').show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajarAdjunto(){

	var idCbte = registroSeleccionadoA[0][columnasA[0]][0];
	var adjValue = registroSeleccionadoA[0][columnasA[7]][0];		
	if (adjValue == "on"){
		var urlValue ='dbi/acreditaciones_verAdjunto.php?sid='+gvarSID+'&acreditacion_id='+idCbte;
		//document.location = urlValue;
		window.open(urlValue,"Bajar_Adjunto4","menubar=no,width=300,height=300,toolbar=no,resizable=yes");
	} else {
		return;
	}
}