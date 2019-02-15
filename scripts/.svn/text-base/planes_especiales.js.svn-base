//TITULOS
var titulos =  new Array('Planes Especiales');
//DMLs
var dmlBuscarCabecera = '12704';
var dmlNuevoMaster = '12701';
var dmlEnviarMaster = '12720';
var dmlEditarMaster = '12702'; 
var dmlEnviarEditarMaster = '12723';
var dmlVerDetalleMaster = '12721';
var dmlVerDetalleGrilla = '12722';
var dmlCopiarMaster = '12726';
var dmlEliminar = '12703';
var dmlEnvioMasivo = '12725';
var dmlgrabarM = '';
//COLUMNAS
var columnasM = new Array('plan_especial_id','descripcion','vigencia','estado','division','tipo_plan','tipo_operacion','adjunto');
var columnasD = new Array('producto_id','producto_desc','prestamo','sincargo','venta');
var columnasDD = new Array('producto_id','producto_desc','importe');
var columnasC = new Array('cliente_id','razon_social','seleccionado');
var columnasCu = new Array('tipo_contable_id','tipo_contable_desc','seleccionado');
var columnasP = new Array('producto_id','producto_desc','seleccionado');
var columnasComp = new Array();
//DESCRIPCIONES
var descripcionesM = new Array('Nro Plan: ','Descripci&oacute;n: ','Vigencia: ','Estado: ','Divisi&oacute;n: ','Tipo Plan: ','Operaciones: ','Adjunto','Selecc.');
var descripcionesD = new Array('Id','Producto','Pr&eacute;stamo','Sin Cargo','Venta','Cantidad');
var descripcionesC = new Array('Id','Razon Social','Selec.');
var descripcionesCu = new Array('Id','Descripci&oacute;n','Selec.');
var descripcionesP = new Array('Id','Descripci&oacute;n','Selec.');
var descripcionesComp = new Array('Tipo Comp.','Serie','N&uacute;mero','Importe','Importe Base','Importe Impuesto');
//PRIMARY KEY
var clavesM = new Array('comprobante_sp_id');
var regexpFormM = new Array(".*","[a-zA-Z0-9Ò—ø?°! ,.()-_]+");
//FILTROS 
var filtroMaster = new Array('plan_especial_id','area_id','subregion_id','tipo_plan_especial_id','vigente_al','cliente_id','estado','tipo_operacion_id');
var labelFiltroMaster = new Array('N&uacute;mero de Plan: ','Area: ','Sub Regi&oacute;n: ','Tipo de Plan: ','Vigente al: ','Cliente: ','Estado: ','Operaci&oacute;n: ');
var mensajeFiltroMaster = new Array('Ingrese el N&uacute;mero de Plan','Seleccione el Area','Seleccione la Sub Regi&oacute;n','Seleccione el Tipo de Plan','Seleccione la Vigencia','Seleccione el Cliente','Seleccione el Estado','Seleccione la Operaci&oacute;n');
var requeridoFiltroMaster = new Array(false,false,false,false,true,false,false,false);
var searchAttrFiltroMaster = new Array('','detalle','detalle','detalle','','detalle','detalle','detalle');
var tipoFiltroMaster = new Array('ValidationTextBox','FilteringSelect','FilteringSelect','FilteringSelect','DateTextBox','FilteringSelect','FilteringSelect','FilteringSelect');
var selectFiltroMaster = new Array('','12506','12507','12706','','12707','12708','12709');
//FORMULARIO
var camposFormM = new Array('area_id','subregion_id','cliente_id','descripcion','fecha_actual','vigencia_desde','vigencia_hasta','tipo_plan_especial_id','division_id','archivo_id');
var labelFormM = new Array('Area: ','Sub Regi&oacute;n: ','Clientes: ','Descripci&oacute;n: ','Fecha Creaci&oacute;n: ','Fecha de Entrada en Vigencia: ','Fecha de Expiraci&oacute;n: ','Plan Especial: ','Divisi&oacute;n: ','Adjuntar Archivo:');
var requeridoFormM = new Array(true,true,true,true,false,true,true,true,true,false);
var mensajesFormM = new Array('Seleccione el Area','Seleccione la Sub Regi&oacute;n','Seleccione un Cliente','Ingrese una Descripci&oacute;n','Fecha Actual','Seleccione una Fecha de Entrada en Vigencia','Seleccione una Fecha de Expiraci&oacute;n','Seleccione un Plan Especial','Seleccione una Divisi&oacute;n','Adjuntar un Archivo');
var searchAttrFormM = new Array('detalle','detalle','','','','','','detalle','detalle','');
var selectFormM = new Array('12710','12711','12712','','','','','12706','12713','');
var registroSeleccionado = null;
var depositoStore = {identifier:'id',label:'detalle',items:[{id:'0',detalle:'No es posible determinar'}]};
//Carga las estructuras de las tablas
var layoutMaster = [
    {width: "50px", field: columnasM[0], name: descripcionesM[0]},
    {width: "auto", field: columnasM[1], name: descripcionesM[1]},
    {width: "70px", field: columnasM[2], name: descripcionesM[2]},
	{width: "40px", field: columnasM[3], name: descripcionesM[3]},
	{width: "80px", field: columnasM[4], name: descripcionesM[4]},
    {width: "150px", field: columnasM[5], name: descripcionesM[5]},
	{width: "70px", field: columnasM[6], name: descripcionesM[6]}];
var layoutEnvio = [
    {width: "50px", field: columnasM[0], name: descripcionesM[0]},
    {width: "auto", field: columnasM[1], name: descripcionesM[1]},
    {width: "70px", field: columnasM[2], name: descripcionesM[2]},
	{width: "40px", field: columnasM[3], name: descripcionesM[3]},
	{width: "80px", field: columnasM[4], name: descripcionesM[4]},
    {width: "150px", field: columnasM[5], name: descripcionesM[5]},
	{width: "70px", field: columnasM[6], name: descripcionesM[6]},
	{width: "40px", field: columnasM[7], name: descripcionesM[7],formatter:formatCheckbox,styles:'text-align:center;'},
	{width: "40px", field: 'seleccionado', name: descripcionesM[8],editable:true, type:dojox.grid.cells.Bool},];
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
var CalcularTotalSinCargo = function(value){
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	var suma = 0;
	var AsignarTotal = function(items,request){
		for(i=0;i<items.length;i++){
			suma+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'sincargo').replace(',','.'));}
		dojo.byId('divTotalSinCargo').innerHTML = suma.toFixed(2);
	}
	dijit.byId('gridProductos').store.fetch({query:{},onComplete:AsignarTotal});
	return value.replace(',','.');
}
var CalcularTotalPrestamo = function(value){
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	var suma = 0;
	var AsignarTotal = function(items,request){
		for(i=0;i<items.length;i++){
			suma+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'prestamo').replace(',','.'));}
		dojo.byId('divTotalPrestamo').innerHTML = suma.toFixed(2);
	}
	dijit.byId('gridProductos').store.fetch({query:{},onComplete:AsignarTotal});
	return value.replace(',','.');
}
var CalcularTotalVenta = function(value){
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	var suma = 0;
	var AsignarTotal = function(items,request){
		for(i=0;i<items.length;i++){
			suma+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'venta').replace(',','.'));}
		dojo.byId('divTotalVenta').innerHTML = suma.toFixed(2);
	}
	dijit.byId('gridProductos').store.fetch({query:{},onComplete:AsignarTotal});
	return value.replace(',','.');
}
var layoutDialog = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "225px", field: columnasD[1], name: descripcionesD[1]},
	{width: "65px", field: columnasD[2], name: descripcionesD[2],editable:true,formatter:CalcularTotalPrestamo},
	{width: "65px", field: columnasD[3], name: descripcionesD[3],hidden:true},
	{width: "65px", field: columnasD[4], name: descripcionesD[4],hidden:true}];
var layoutDialogPrestamo = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "225px", field: columnasD[1], name: descripcionesD[1]},
	{width: "65px", field: columnasD[2], name: descripcionesD[2],editable:true,formatter:CalcularTotalPrestamo},
	{width: "0px", field: columnasD[3], name: descripcionesD[3],hidden:true},
	{width: "0px", field: columnasD[4], name: descripcionesD[4],hidden:true}];
var layoutDialogSinCargo = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "225px", field: columnasD[1], name: descripcionesD[1]},
	{width: "65px", field: columnasD[2], name: descripcionesD[2],hidden:true},
	{width: "65px", field: columnasD[3], name: descripcionesD[3],editable:true,formatter:CalcularTotalSinCargo},
	{width: "65px", field: columnasD[4], name: descripcionesD[4],hidden:true}];
var layoutDialogVenta = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "225px", field: columnasD[1], name: descripcionesD[1]},
	{width: "65px", field: columnasD[2], name: descripcionesD[2],hidden:true},
	{width: "65px", field: columnasD[3], name: descripcionesD[3],hidden:true},
	{width: "65px", field: columnasD[4], name: descripcionesD[4],editable:true,formatter:CalcularTotalVenta}];
var layoutDialogPrestamoVenta = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "197px", field: columnasD[1], name: descripcionesD[1]},
	{width: "43px", field: columnasD[2], name: descripcionesD[2],editable:true,formatter:CalcularTotalPrestamo},
	{width: "65px", field: columnasD[3], name: descripcionesD[3],hidden:true},
	{width: "40px", field: columnasD[4], name: descripcionesD[4],editable:true,formatter:CalcularTotalVenta}];
var layoutDialogSinCargoVenta = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "200px", field: columnasD[1], name: descripcionesD[1]},	
	{width: "65px", field: columnasD[2], name: descripcionesD[2],hidden:true},
	{width: "40px", field: columnasD[3], name: descripcionesD[3],editable:true,formatter:CalcularTotalSinCargo},
	{width: "40px", field: columnasD[4], name: descripcionesD[4],editable:true,formatter:CalcularTotalVenta}];
var layoutDialogPrestamoSinCargo = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "197px", field: columnasD[1], name: descripcionesD[1]},
	{width: "43px", field: columnasD[2], name: descripcionesD[2],editable:true,formatter:CalcularTotalPrestamo},
	{width: "40px", field: columnasD[3], name: descripcionesD[3],editable:true,formatter:CalcularTotalSinCargo},
	{width: "65px", field: columnasD[4], name: descripcionesD[4],hidden:true}];
var layoutDialogPrestamoSinCargoVenta = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "148px", field: columnasD[1], name: descripcionesD[1]},
	{width: "43px", field: columnasD[2], name: descripcionesD[2],editable:true,formatter:CalcularTotalPrestamo},
	{width: "40px", field: columnasD[3], name: descripcionesD[3],editable:true,formatter:CalcularTotalSinCargo},
	{width: "40px", field: columnasD[4], name: descripcionesD[4],editable:true,formatter:CalcularTotalVenta}];
var layoutDialogPrestamoD = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "225px", field: columnasD[1], name: descripcionesD[1]},
	{width: "65px", field: columnasD[2], name: descripcionesD[2]},
	{width: "0px", field: columnasD[3], name: descripcionesD[3],hidden:true},
	{width: "0px", field: columnasD[4], name: descripcionesD[4],hidden:true}];
var layoutDialogSinCargoD = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "225px", field: columnasD[1], name: descripcionesD[1]},
	{width: "65px", field: columnasD[2], name: descripcionesD[2],hidden:true},
	{width: "65px", field: columnasD[3], name: descripcionesD[3]},
	{width: "65px", field: columnasD[4], name: descripcionesD[4],hidden:true}];
var layoutDialogVentaD = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "225px", field: columnasD[1], name: descripcionesD[1]},
	{width: "65px", field: columnasD[2], name: descripcionesD[2],hidden:true},
	{width: "65px", field: columnasD[3], name: descripcionesD[3],hidden:true},
	{width: "65px", field: columnasD[4], name: descripcionesD[4]}];
var layoutDialogPrestamoVentaD = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "197px", field: columnasD[1], name: descripcionesD[1]},
	{width: "43px", field: columnasD[2], name: descripcionesD[2]},
	{width: "65px", field: columnasD[3], name: descripcionesD[3],hidden:true},
	{width: "40px", field: columnasD[4], name: descripcionesD[4]}];
var layoutDialogSinCargoVentaD = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "200px", field: columnasD[1], name: descripcionesD[1]},	
	{width: "65px", field: columnasD[2], name: descripcionesD[2],hidden:true},
	{width: "40px", field: columnasD[3], name: descripcionesD[3]},
	{width: "40px", field: columnasD[4], name: descripcionesD[4]}];
var layoutDialogPrestamoSinCargoD = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "197px", field: columnasD[1], name: descripcionesD[1]},
	{width: "43px", field: columnasD[2], name: descripcionesD[2]},
	{width: "40px", field: columnasD[3], name: descripcionesD[3]},
	{width: "65px", field: columnasD[4], name: descripcionesD[4],hidden:true}];
var layoutDialogPrestamoSinCargoVentaD = [
    {width: "30px", field: columnasD[0], name: descripcionesD[0]},
    {width: "148px", field: columnasD[1], name: descripcionesD[1]},
	{width: "43px", field: columnasD[2], name: descripcionesD[2]},
	{width: "40px", field: columnasD[3], name: descripcionesD[3]},
	{width: "40px", field: columnasD[4], name: descripcionesD[4]}];
var CalcularTotalD = function(value){
	var suma = 0;
	var AsignarTotal = function(items,request){
		for(i=0;i<items.length;i++){
			suma+=parseFloat(dijit.byId('gridProductosD').store.getValue(items[i],'importe').replace(',','.'));}
		dojo.byId('divTotalImporteD').innerHTML = suma.toFixed(2);
	}
	dijit.byId('gridProductosD').store.fetch({query:{},onComplete:AsignarTotal});
	return value.replace(',','.');
}
var layoutDialogDetail = [
    {width: "0px", field: columnasDD[0], name: descripcionesD[0],hidden:true},
    {width: "195px", field: columnasDD[1], name: descripcionesD[1]},
	{width: "65px", field: columnasDD[2], name: descripcionesD[2],formatter:CalcularTotalD}];
var layoutClientesOrigen = [
    {width: "45px", field: columnasC[0], name: descripcionesC[0]},
    {width: "200px", field: columnasC[1], name: descripcionesC[1]},
    {width: "54px", field: columnasC[2], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridOrigen\');"/> '+descripcionesC[2], editable:true, type:dojox.grid.cells.Bool}];
var layoutCuentasOrigen = [
    {width: "45px", field: columnasCu[0], name: descripcionesCu[0]},
    {width: "200px", field: columnasCu[1], name: descripcionesCu[1]},
    {width: "54px", field: columnasCu[2], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridOrigenCuenta\');"/> '+descripcionesCu[2], editable:true, type:dojox.grid.cells.Bool}];
var layoutClientesDestino = [
    {width: "45px", field: columnasC[0], name: descripcionesC[0]},
    {width: "200px", field: columnasC[1], name: descripcionesC[1]},
    {width: "54px", field: columnasC[2], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridDestino\');"/> '+descripcionesC[2], editable:true, type:dojox.grid.cells.Bool}];
var layoutProductosOrigen = [
    {width: "45px", field: columnasP[0], name: descripcionesP[0]},
    {width: "200px", field: columnasP[1], name: descripcionesP[1]},
    {width: "54px", field: columnasP[2], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridOrigenP\');"/> '+descripcionesP[2], editable:true, type:dojox.grid.cells.Bool}];
var layoutProductosDestino = [
    {width: "45px", field: columnasP[0], name: descripcionesP[0]},
    {width: "200px", field: columnasP[1], name: descripcionesP[1]},
    {width: "54px", field: columnasP[2], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridDestinoP\')"/> '+descripcionesP[2], editable:true, type:dojox.grid.cells.Bool}];
var layoutComprobantes = [
	{width: "40px", field: columnasComp[0], name: descripcionesComp[0]},
    {width: "auto", field: columnasComp[1], name: descripcionesComp[1]},
    {width: "auto", field: columnasComp[2], name: descripcionesComp[2]},
	{width: "auto", field: columnasComp[3], name: descripcionesComp[3]},
	{width: "54px", field: columnasComp[4], name: descripcionesComp[4]},
    {width: "auto", field: columnasComp[5], name: descripcionesComp[5]}];
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
        dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'verDetalleMaster',style:'padding-left:3px;padding-right:3px;',label:'Ver Detalle',showLabel:false,iconClass:'verDetalleIcon',disabled:true,onClick:function(){VerDetalleMaster();}}));    
		dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'bajarAdjunto',style:'padding-left:3px;padding-right:3px;',label:'Bajar Archivo Adjunto',showLabel:false,iconClass:'adjuntoIcon',disabled:true,onClick:function(){BajarAdjunto();}}));    
    }
	if(dijit.byId('enviarMasivoWMaster')){
		layoutMaster = layoutEnvio;
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
		if(dijit.byId('bajarAdjunto')){dijit.byId('bajarAdjunto').attr('disabled',bool);}
		if(dijit.byId('verDetalleMaster')){dijit.byId('verDetalleMaster').attr('disabled',bool);}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ArmadoFiltroYAuditoria(){
	if(dijit.byId('filtrMaster')){
		//Limpio Filtros
		for(i=0;i<filtroMaster.length;i++){if(dijit.byId('filtro'+i)){dijit.byId('filtro'+i).destroy();}}
		//Creo Filtros
		var divFiltros = new dijit.layout.ContentPane({style:'width:330px;'});
		var tablaFiltros = new dojox.layout.TableContainer({cols:1,labelWidth:'150'});
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='TextBox'){tablaFiltros.addChild(new dijit.form.TextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='ValidationTextBox'){tablaFiltros.addChild(new dijit.form.ValidationTextBox({id:'filtro'+i,maxLength:'40',label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',constraints:{datePattern:'dd-MM-yyyy'},promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],onChange:function(){if(tipoFiltroMaster[parseInt(this.id.charAt(6))+1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))+1)).constraints.min = arguments[0];}else if(tipoFiltroMaster[parseInt(this.id.charAt(6))-1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))-1)).constraints.max = arguments[0];}}}));}
			if(tipoFiltroMaster[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[i]})}));}}
		
		//agrego el area a la busqueda de subregion
		dijit.byId('filtro2').store.url += '&area_id='+dijit.byId('filtro1').attr('value');
		//Borrado de subregiones al cambiar el area
		dijit.byId('filtro1').onChange= function(value){dijit.byId('filtro2').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[2]+'&area_id='+value}));dijit.byId('filtro2').store.fetch();dijit.byId('filtro2').attr('value',null);}
		//agrego la subregion a la busqueda de cliente
		dijit.byId('filtro5').store.url += '&subregion_id='+dijit.byId('filtro2').attr('value');
		//Borrado de clientes al cambiar la subregion
		dijit.byId('filtro2').onChange= function(value){dijit.byId('filtro5').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[5]+'&subregion_id='+value}));dijit.byId('filtro5').store.fetch();dijit.byId('filtro5').attr('value',null);}

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
	//Validacion de que el formulario estÈ bien cargado
	if(dijit.byId('filtro0').attr('value')){BuscarMaster();dijit.byId('filtrosMaster').onCancel();}
	else if(dijit.byId('filtrosMaster').validate()){BuscarMaster();dijit.byId('filtrosMaster').onCancel();}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMaster(){
	//Limpiar el contentpane
	registroSeleccionado = null;
	dijit.byId('gridContainer').destroyDescendants();
	//Obtengo cabecera de Planes Especiales
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarCabecera;
	if(filtroMaster.length > 0){
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='DateTextBox'){urlValue = urlValue +'&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).valueNode.value;}
			else{urlValue +='&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');}}
	}
	var storeCabecera = new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}); 
	//Obtengo detalles de Planes Especiales
	var CargarGrillas = function(items,request){
		if(items.length==0){Mensaje('No se han encontrado registros','error','master');}
		cantidadGrillas = items.length;
		for(i=0;i<items.length;i++){
			//Datos de la cabecera de la grilla
			var cabecera = dojo.create('div',{innerHTML:'<table><tr><td width="100%">'+items[i]['cliente_id']+' - '+items[i]['cliente_abrev']+'</td></tr></table>'});
			dojo.attr(cabecera,'class','dijitToolbar');
			dojo.place(cabecera,dojo.byId('gridContainer'),'last');
			//Creacion de grillas dinamicas
			var urlValue2 ='dbi/planes_especiales_clientesPlanes.php?sid='+gvarSID+'&cliente_id='+items[i]['cliente_id'][0];
        	if(filtroMaster.length > 0){
        		for(j=0;j<filtroMaster.length;j++){
        			if(tipoFiltroMaster[j]=='DateTextBox'){urlValue2+='&'+filtroMaster[j]+'='+dijit.byId('filtro'+j).valueNode.value;}
					else if(filtroMaster[j]!='cliente_id'){urlValue2+='&'+filtroMaster[j]+'='+dijit.byId('filtro'+j).attr('value');}}
			}
			var grilla = new dojox.grid.DataGrid({id:'grilla'+i,store:new dojo.data.ItemFileWriteStore({url:urlValue2,urlPreventCache:true}),autoHeight:true,structure:layoutMaster,onSelected:function(){OnSelectedMaster(this);}},document.createElement('div'));
			dojo.place(grilla.domNode,dojo.byId('gridContainer'),'last');
			grilla.startup();
			}
		}
	storeCabecera.fetch({query:{},onComplete:CargarGrillas});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarMaster(){
	//Validacion
	if(registroSeleccionado[0][columnasM[3]]!='ED'){Mensaje('No es posible eliminar el plan especial, pues no se encuentra en estado de EDICION','error','master');return;}
	//GeneraciÛn de la URL y el mensaje de advertencia
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlEliminar;
	mensaje='Est&aacute; seguro que desea eliminar el plan especial <b>'+registroSeleccionado[0][columnasM[0]]+' ?</b>';
	urlValue+='&'+columnasM[0]+'='+registroSeleccionado[0][columnasM[0]];
	PopUp('Advertencia!', mensaje, "Eliminar('"+urlValue+"');");
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function Eliminar(urlValue){
	procesando.show();
	//Se elimina el registro de la base de datos
	dojo.xhrGet({url:urlValue,handleAs:'json',load:function(response){
		if(response.errcode==0){
			BuscarMaster();//Refresco del gridMaster
			procesando.hide();
			Mensaje('El plan especial '+registroSeleccionado[0][columnasM[0]]+' se ha eliminado exitosamente','mensaje','master');
		}else{procesando.hide();PopUp('Error', response.errmsg);}
		}
	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function NuevoMaster(){
	//Creacion del formulario
	dijit.byId('gridProductos').attr('structure',layoutDialog);
	var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[0],style:'width:130px;',label:labelFormM[0],searchAttr:searchAttrFormM[0],promptMessage:mensajesFormM[0],required:requeridoFormM[0],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[0]}),onChange:function(value){dijit.byId(camposFormM[1]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[1]+'&area_id='+value}));dijit.byId(camposFormM[1]).store.fetch();dijit.byId(camposFormM[1]).attr('value',null);}}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[1],style:'width:130px;',label:labelFormM[1],searchAttr:searchAttrFormM[1],promptMessage:mensajesFormM[1],required:requeridoFormM[1],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[1]+'&area_id='+dijit.byId(camposFormM[0]).attr('value')}),onChange:function(){dijit.byId('gridOrigen').setStore(null);dijit.byId('gridOrigen').update();dijit.byId('gridDestino').setStore(null);dijit.byId('gridDestino').update();while(dijit.byId('cliente_id').options.length>0){dijit.byId('cliente_id').removeOption(dijit.byId('cliente_id').options[0]);}}}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[4],maxLength:'40',value:dojo.date.locale.format(new Date(),{datePattern:'dd-MM-yyyy',selector:'date'}),style:'width:130px;',label:labelFormM[4],readOnly:true,required:requeridoFormM[4]}));
	tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[2],style:'width:130px;height:58px;',required:requeridoFormM[2],multiple:true,label:(labelFormM[2]+'<button class="dijitButtonNode" onclick="VerDialogoClientes();" type="button">Ver</button>'),readOnly:true}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[3],maxLength:'40',required:requeridoFormM[3],regExp:regexpFormM[1],style:'width:130px;height:58px;',label:labelFormM[3],onClick:function(){dijit.hideTooltip(dijit.byId('descripcion').domNode);}}));
	tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[5],constraints:{min:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,dojo.date.locale.format(new Date(),{datePattern:'dd',selector:'date'})),datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[5],label:labelFormM[5],onChange:function(){dijit.byId(camposFormM[6]).constraints.min = arguments[0];if(dijit.byId('expir')){dijit.byId('expir').constraints.min = arguments[0];}}}));
	tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[6],constraints:{datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[6],label:labelFormM[6],onChange:function(){if(dijit.byId('expir')){dijit.byId('expir').constraints.max = arguments[0];}}}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[7],style:'width:130px;',label:labelFormM[7],searchAttr:searchAttrFormM[7],promptMessage:mensajesFormM[7],required:requeridoFormM[7],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[7]}),onChange:function(){ChangePlanEspecial();}}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[8],style:'width:130px;',label:labelFormM[8],searchAttr:searchAttrFormM[8],promptMessage:mensajesFormM[8],required:requeridoFormM[8],onChange:function(){ChangeDivision();},onClick:function(){if(!dijit.byId(camposFormM[7]).isValid()){dijit.byId(camposFormM[7]).focus();return;}},store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[8]+'&tipo_plan_especial_id='+dijit.byId(camposFormM[7]).attr('value')})}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[9],maxLength:'40',style:'width:130px;',label:labelFormM[9],promptMessage:mensajesFormM[9],readOnly:true,required:requeridoFormM[9]}));
	dijit.byId('divCampos').attr('content',tablaForm);
	tablaForm.startup();
	//Creacion de botones
	var botonAdjuntar = new dijit.form.Button({id:'botonAdjuntar', label:'Adjuntar',type:'button',iconClass:'adjuntoIcon',onClick:function(){AdjuntarMaster();}});
	dojo.place(botonAdjuntar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlgrabarM = dmlNuevoMaster;GrabarMaster();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonGrabarEnviar = new dijit.form.Button({label:'Grabar y Enviar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlgrabarM = dmlEnviarMaster;GrabarMaster();}});
	dojo.place(botonGrabarEnviar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	dijit.byId("dialogMaster").show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ChangeDivision(){
	dijit.byId('gridDestinoP').setStore(null);dijit.byId('gridDestinoP').update();
	dijit.byId('gridOrigenP').setStore(null);dijit.byId('gridOrigenP').update();
	dijit.byId('gridProductos').setStore(null);dijit.byId('gridProductos').update();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ChangePlanEspecial(){
	dijit.byId('gridProductos').edit.apply();
	dijit.byId('gridProductos').attr('structure',layoutDialog);
	dijit.byId(camposFormM[8]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[8]+'&tipo_plan_especial_id='+dijit.byId(camposFormM[7]).attr('value')}));
	dijit.byId(camposFormM[8]).store.fetch();
	dijit.byId(camposFormM[8]).attr('value',null);
	dijit.byId('divPlanEspecial').destroyDescendants();
	dijit.byId('divOperacion').destroyDescendants();
	dojo.byId('botonProductos').style.display = 'none';
	var planEspecialForm = new dojox.layout.TableContainer({cols:1,labelWidth:'130',style:'text-align:left;'});
	if(dijit.byId('oper')){dijit.byId('oper').destroy();}
	if(dijit.byId('tipo_plan_especial_id').attr('value')=='01'){ /* ENVASES */
		planEspecialForm.addChild(new dojox.form.CheckedMultiSelect({id:'oper',required:true,style:'width:250px;height:58px;',label:'Operaci&oacute;n: ',multiple:true,onChange:function(value){ChangeOperacion(value);},store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12714&tipo_plan_especial_id='+dijit.byId(camposFormM[7]).attr('value')})}));
	}else{
		planEspecialForm.addChild(new dojox.form.CheckedMultiSelect({id:'oper',required:true,style:'width:250px;height:19px;',label:'Operaci&oacute;n: ',multiple:true,onChange:function(value){ChangeOperacion(value);},store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12714&tipo_plan_especial_id='+dijit.byId(camposFormM[7]).attr('value')})}));}
	AutoCompletar(dijit.byId('oper'));
	dijit.byId('divPlanEspecial').attr('content',planEspecialForm);
	planEspecialForm.startup();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ChangeOperacion(value){
	dijit.byId('gridProductos').edit.apply();	
	dijit.byId('divOperacion').destroyDescendants();
	if(dijit.byId('dep')){dijit.byId('dep').destroy();}
	if(dijit.byId('cond')){dijit.byId('cond').destroy();}
	if(dijit.byId('lim')){dijit.byId('lim').destroy();}
	if(dijit.byId('expir')){dijit.byId('expir').destroy();}
	var operacionForm = new dojox.layout.TableContainer({cols:1,labelWidth:'130',style:'text-align:left;'});
	if(dijit.byId('cliente_id').value.length>1){
		var depositos = new dojo.data.ItemFileReadStore({data: depositoStore});
	}else{
		var depositos = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12719&cliente_id='+dijit.byId('cliente_id').attr('value')+'&subregion_id='+dijit.byId('subregion_id').attr('value')});
	}
	dijit.byId('gridProductos').attr('structure',layoutDialog);
	dijit.byId('gridProductos').attr('singleClickEdit',true);	
	if(dijit.byId('tipo_plan_especial_id').attr('value')=='01'){ /* ENVASES */
		for(i=0;i<value.length;i++){
			if(value[i]=='01'){/* PRESTAMO EN COMODATO */
				operacionForm.addChild(new dijit.form.DateTextBox({id:'expir',constraints:{min:dijit.byId(camposFormM[5]).attr('value'),max:dijit.byId(camposFormM[6]).attr('value'),datePattern:'dd-MM-yyyy'},style:'width:250px;',required:true,label:'Fecha de Expiraci&oacute;n del Pr&eacute;stamo en Comodato:'}));
				operacionForm.addChild(new dijit.form.FilteringSelect({id:'cond',style:'width:250px;',label:'Condici&oacute;n de Pago: ',searchAttr:'detalle',promptMessage:'Seleccione una Condici&oacute;n de Pago',required:false,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12716'})}));
				operacionForm.addChild(new dijit.form.FilteringSelect({id:'dep',style:'width:250px;',label:'Dep&oacute;sito: ',searchAttr:'detalle',promptMessage:'Seleccione un Dep&oacute;sito',required:true,store:depositos}));
				AutoCompletar(dijit.byId('dep'));
			}
			if(value[i]=='02'){/* SIN CARGO */
				if(!dijit.byId('dep')){
					operacionForm.addChild(new dijit.form.FilteringSelect({id:'dep',style:'width:250px;',label:'Dep&oacute;sito: ',searchAttr:'detalle',promptMessage:'Seleccione un Dep&oacute;sito',required:true,store:depositos}));
					AutoCompletar(dijit.byId('dep'));}
			}
			if(value[i]=='03'){/* VENTA */
				operacionForm.addChild(new dijit.form.FilteringSelect({id:'lim',style:'width:250px;',label:'L&iacute;mite de Cr&eacute;dito: ',searchAttr:'detalle',promptMessage:'Seleccione un L&iacute;mite de Cr&eacute;dito',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12715&tipo_plan_especial_id='+dijit.byId('tipo_plan_especial_id').attr('value')+'&tipo_operacion_id='+value})}));
				AutoCompletar(dijit.byId('lim'));
				if(!dijit.byId('cond')){
					operacionForm.addChild(new dijit.form.FilteringSelect({id:'cond',style:'width:250px;',label:'Condici&oacute;n de Pago: ',searchAttr:'detalle',promptMessage:'Seleccione una Condici&oacute;n de Pago',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12716'})}));}
				if(!dijit.byId('dep')){
					operacionForm.addChild(new dijit.form.FilteringSelect({id:'dep',style:'width:250px;',label:'Dep&oacute;sito: ',searchAttr:'detalle',promptMessage:'Seleccione un Dep&oacute;sito',required:true,store:depositos}));
					AutoCompletar(dijit.byId('dep'));}
			}
		}		
		dojo.byId('botonProductos').style.display = 'block';
		if(value.length==3){dijit.byId('gridProductos').attr('structure',layoutDialogPrestamoSinCargoVenta);dojo.byId('mensajeGrilla').style.display = 'block';dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:51px;float:left;">0</div><div id="divTotalSinCargo" style="width:48px;float:left;">0</div><div id="divTotalVenta" style="width:46px;float:left;">0</div>';}
		else if(value.length==2){if(value[0]=='01'&&value[1]=='02'){dijit.byId('gridProductos').attr('structure',layoutDialogPrestamoSinCargo);dojo.byId('mensajeGrilla').style.display = 'block';dojo.byId('divTotales').innerHTML='<div id="divTotalVenta" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalPrestamo" style="width:50px;float:left;">0</div><div id="divTotalSinCargo" style="width:46px;float:left;">0</div>';}
		else if(value[0]=='02'&&value[1]=='03'){dijit.byId('gridProductos').attr('structure',layoutDialogSinCargoVenta);dojo.byId('mensajeGrilla').style.display = 'block';dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:50px;float:left;">0</div><div id="divTotalVenta" style="width:46px;float:left;">0</div>';}
		else if(value[0]=='01'&&value[1]=='03'){dijit.byId('gridProductos').attr('structure',layoutDialogPrestamoVenta);dojo.byId('mensajeGrilla').style.display = 'block';dojo.byId('divTotales').innerHTML='<div id="divTotalSinCargo" style="width:51px;float:left;visibility:hidden;">0</div><div id="divTotalPrestamo" style="width:48px;float:left;">0</div><div id="divTotalVenta" style="width:46px;float:left;">0</div>';}
		}else{if(value[0]=='01'){dijit.byId('gridProductos').attr('structure',layoutDialogPrestamo);dojo.byId('mensajeGrilla').style.display = 'block';dojo.byId('divTotales').innerHTML='<div id="divTotalVenta" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:28px;float:left;visibility:hidden;">0</div><div id="divTotalPrestamo" style="width:68px;float:left;">0</div>';}
		else if(value[0]=='02'){dijit.byId('gridProductos').attr('structure',layoutDialogSinCargo);dojo.byId('mensajeGrilla').style.display = 'block';dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalVenta" style="width:28px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:68px;float:left;">0</div>';}
		else if(value[0]=='03'){dijit.byId('gridProductos').attr('structure',layoutDialogVenta);dojo.byId('mensajeGrilla').style.display = 'none';dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:28px;float:left;visibility:hidden;">0</div><div id="divTotalVenta" style="width:68px;float:left;">0</div>';}}
	}else if(dijit.byId('tipo_plan_especial_id').attr('value')=='02'){ /* POP */
		operacionForm.addChild(new dijit.form.FilteringSelect({id:'lim',style:'width:250px;',label:'L&iacute;mite de Cr&eacute;dito: ',searchAttr:'detalle',promptMessage:'Seleccione un L&iacute;mite de Cr&eacute;dito',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12715&tipo_plan_especial_id='+dijit.byId('tipo_plan_especial_id').attr('value')+'&tipo_operacion_id='+value})}));
		AutoCompletar(dijit.byId('lim'));
		operacionForm.addChild(new dijit.form.FilteringSelect({id:'cond',style:'width:250px;',label:'Condici&oacute;n de Pago: ',searchAttr:'detalle',promptMessage:'Seleccione una Condici&oacute;n de Pago',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12716'})}));
		dojo.byId('botonProductos').style.display = 'block';
		dijit.byId('gridProductos').attr('structure',layoutDialogVenta);
		dojo.byId('mensajeGrilla').style.display = 'none';
		dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:28px;float:left;visibility:hidden;">0</div><div id="divTotalVenta" style="width:68px;float:left;">0</div>';
	}else if(dijit.byId('tipo_plan_especial_id').attr('value')=='03'){ /* PRODUCTO */
		operacionForm.addChild(new dijit.form.FilteringSelect({id:'lim',style:'width:250px;',label:'L&iacute;mite de Cr&eacute;dito: ',searchAttr:'detalle',promptMessage:'Seleccione un L&iacute;mite de Cr&eacute;dito',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12715&tipo_plan_especial_id='+dijit.byId('tipo_plan_especial_id').attr('value')+'&tipo_operacion_id='+value})}));
		AutoCompletar(dijit.byId('lim'));
		operacionForm.addChild(new dijit.form.FilteringSelect({id:'cond',style:'width:250px;',label:'Condici&oacute;n de Pago: ',searchAttr:'detalle',promptMessage:'Seleccione una Condici&oacute;n de Pago',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12716'})}));
		dojo.byId('botonProductos').style.display = 'block';
		dijit.byId('gridProductos').attr('structure',layoutDialogVenta);
		dojo.byId('mensajeGrilla').style.display = 'none';
		dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:28px;float:left;visibility:hidden;">0</div><div id="divTotalVenta" style="width:68px;float:left;">0</div>';
	}
	//Asigno totales
	var suma1 = 0;var suma2 = 0;var suma3 = 0;
	var AsignarTotal = function(items,request){
		for(i=0;i<items.length;i++){
			suma1+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'prestamo').replace(',','.'));
			suma2+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'sincargo').replace(',','.'));
			suma3+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'venta').replace(',','.'));}
		dojo.byId('divTotalPrestamo').innerHTML = suma1.toFixed(2);
		dojo.byId('divTotalSinCargo').innerHTML = suma2.toFixed(2);
		dojo.byId('divTotalVenta').innerHTML = suma3.toFixed(2);
	}
	if(dijit.byId('gridProductos').store){dijit.byId('gridProductos').store.fetch({query:{},onComplete:AsignarTotal});}
	dijit.byId('divOperacion').attr('content',operacionForm);
	operacionForm.startup();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function AdjuntarMaster(){
	//Creacion del contenedor
	var divCamposA = new dijit.layout.ContentPane({style:'width:400px;text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'70',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:'archivo',style:'width:141px;',label:'Archivo: ',promptMessage:'Seleccione un archivo',required:true}));
	divCamposA.attr('content',tablaForm);
	tablaForm.startup();
	//Agrego funcionalidad para cargar Archivo Adjunto
	var widget = new extenciones.myFileInputAuto({id:'userfile',style:'width:141px;',name:'userfile',label:'Examinar',cancelText:'Quitar',
					url: 'dbi/planes_especiales_subirArchivo.php?sid='+gvarSID,
					onComplete: function(response,ioArgs,control){
						if (response.archivo_id){
							dijit.byId('archivo_id').attr('value',response.archivo_id);
							dijit.byId('botonAdjuntar').attr('label','Eliminar Adj.');
							dijit.byId('botonAdjuntar').onClick=function(){EliminarAdjunto();}	
							dijit.byId('dialogAdjunto').hide();
							dijit.byId('dialogAdjunto').destroyRecursive();
							if(dijit.byId('userfile')){dijit.byId('userfile').destroy();}
							if(dijit.byId('archivo')){dijit.byId('archivo').destroy();}
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
function AdjuntarArchivo(){
	if(dijit.byId('userfile').fileInput.value==''){PopUp('Error','Debe seleccionar un archivo');return;}
	procesando.show();
    dijit.byId('userfile')._sendFile();
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
function EliminarAdjuntoEdicion(){
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=12724&plan_especial_id='+registroSeleccionado[0][columnasM[0]][0];
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
function CambiarCliente(){
	dijit.byId('gridOrigen').setStore(null);
	dijit.byId('gridOrigen').attr('autoWidth',true);
	dijit.byId('gridDestino').setStore(null);
	dijit.byId('gridDestino').attr('autoWidth',true);
	while(dijit.byId('clientes').options.length>0){
		dijit.byId('clientes').removeOption(dijit.byId('clientes').options[0]);}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDialogoClientes(){
	//verificar que haya subregion
	if(!dijit.byId('subregion_id').isValid()){dijit.byId('subregion_id').focus();return;}
	dijit.byId('cli_id').attr('value','');
	dijit.byId('razon').attr('value','');
	dijit.byId('gridOrigen').attr('autoWidth',true);
	dijit.byId('dialogClientes').show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDialogProductos(){
	if(!dijit.byId('division_id').isValid()){dijit.byId('division_id').focus();return;}
	dijit.byId('marca').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12732&division_id='+dijit.byId('division_id').attr('value')}));
	dijit.byId('prod_id').attr('value','');
	dijit.byId('desc').attr('value','');
	CargarProductosInversa();
	dijit.byId('dialogProductos').show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductos(){
	if(dijit.byId('gridDestinoP').store==null){return;}
	//dojo.byId('divTotalImporte').innerHTML = '0';
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
		dijit.byId("dialogProductos").hide();
	}
	dijit.byId('gridProductos').store.fetch({query:{},onItem:ActualizarGrillaE,onComplete:GrabarGrilla});
	//Agrego los nuevos items
	var ActualizarGrilla = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('gridProductos').store.fetchItemByIdentity({
				identity:dijit.byId('gridDestinoP').store.getValue(items[i],'producto_id'),
				onItem:function(item){
					if(!item){dijit.byId('gridProductos').store.newItem({producto_id:dijit.byId('gridDestinoP').store.getValue(items[i],'producto_id'), producto_desc:dijit.byId('gridDestinoP').store.getValue(items[i],'producto_desc'),prestamo:'0',sincargo:'0',venta:'0'});}
				}
			});
		}
		dijit.byId('gridProductos').store.save();
		dijit.byId("dialogProductos").hide();
	}
	dijit.byId('gridDestinoP').store.fetch({query:{},onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductosInversa(){
	var storeDestino = {identifier: 'producto_id', label: 'producto_desc', items: []};
	dijit.byId('gridDestinoP').setStore(new dojo.data.ItemFileWriteStore({data: storeDestino}));
	dijit.byId('gridDestinoP').attr('autoWidth',true);
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	dijit.byId('dialogProductos').show();
	//Agrego los nuevos items
	var ActualizarGrilla = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('gridDestinoP').store.fetchItemByIdentity({
				identity:dijit.byId('gridProductos').store.getValue(items[i],'producto_id'),
				onItem:function(item){
					if(!item){dijit.byId('gridDestinoP').store.newItem({producto_id:dijit.byId('gridProductos').store.getValue(items[i],'producto_id'), producto_desc:dijit.byId('gridProductos').store.getValue(items[i],'producto_desc'),seleccionado:false});}
				}
			});
		}
		dijit.byId('gridDestinoP').store.save();
		dijit.byId('gridDestinoP').attr('autoWidth',true);
	}
	if(dijit.byId('gridProductos').store){dijit.byId('gridProductos').store.fetch({query:{},onComplete:ActualizarGrilla});}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarClientes(){
	while(dijit.byId('cliente_id').options.length>0){
		dijit.byId('cliente_id').removeOption(dijit.byId('cliente_id').options[0]);}
	if(dijit.byId('gridDestino').store==null){return;}
	var ActualizarMultiselect = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('cliente_id').addOption({disabled:true,selected:true,label:items[i]['cliente_id']+'-'+items[i]['razon_social'],value:items[i]['cliente_id']});}
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
		dijit.byId('gridDestinoP').store.fetchItemByIdentity({identity:proId,onItem:function(item){
			if(item == null){dijit.byId('gridDestinoP').store.newItem({producto_id:proId,producto_desc:proDesc,seleccionado:false});}}});
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
function BuscarClientes(){
	var subregionId = dijit.byId('subregion_id').attr('value');
	//extraigo solo el codigo de la subregionId.
	var ind0 = subregionId.indexOf('-');
	if (ind0 > 0) {subregionId = subregionId.substring(0,ind0);}
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[2]+'&subregion_id='+subregionId+'&cliente_id='+dijit.byId('cli_id').valueNode.value+'&razon_social='+dijit.byId('razon').attr('value');
	dijit.byId('gridOrigen').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigen').attr('autoWidth',true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarProductos(){
	if(dijit.byId('tipo_plan_especial_id').attr('value')=='02'){var dml='12717';}else if(dijit.byId('tipo_plan_especial_id').attr('value')=='01'){var dml='12727';}else if(dijit.byId('tipo_plan_especial_id').attr('value')=='03'){var dml='12718';}
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dml+'&division_id='+dijit.byId('division_id').attr('value')+'&producto_id='+dijit.byId('prod_id').valueNode.value+'&producto_desc='+dijit.byId('desc').attr('value')+'&marca_id='+dijit.byId('marca').attr('value');
	dijit.byId('gridOrigenP').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigenP').attr('autoWidth',true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMaster(){
	//Validacion
	if(registroSeleccionado[0][columnasM[3]]!='ED'){Mensaje('No es posible editar el plan especial, pues no se encuentra en estado de EDICION','error','master');return;}
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlVerDetalleMaster+'&plan_especial_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['area_id'][0]+' - '+items[0]['area'][0],readOnly:true,style:'width:130px;',label:labelFormM[0]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['subregion_id'][0]+' - '+items[0]['subregion'][0],readOnly:true,style:'width:130px;',label:labelFormM[1]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['fecha_creacion'][0],readOnly:true,style:'width:130px;',label:labelFormM[4]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['cliente_id'][0]+' - '+items[0]['cliente'][0],readOnly:true,style:'width:130px;',label:labelFormM[2]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['tipo_plan_especial_id'][0]+' - '+items[0]['plan_especial'][0],readOnly:true,style:'width:130px;',label:labelFormM[7]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['division_id'][0]+' - '+items[0]['division'][0],readOnly:true,style:'width:130px;',label:labelFormM[8]}));
		tablaForm.addChild(new dijit.form.SimpleTextarea({value:items[0]['descripcion'][0],readOnly:true,style:'width:130px;height:58px;',label:labelFormM[3]}));

		dojo.byId('botonProductos').style.display = 'block';
		
		var editables = new dojox.layout.TableContainer({cols:1,labelWidth:'180',style:'text-align:left;'});
		editables.addChild(new dijit.form.DateTextBox({id:camposFormM[5],value:new Date(items[0]['vigencia_desde'][0].substring(6,10),items[0]['vigencia_desde'][0].substring(3,5)-1,items[0]['vigencia_desde'][0].substring(0,2)),constraints:{min:new Date(items[0]['vigencia_desde'][0].substring(6,10),items[0]['vigencia_desde'][0].substring(3,5)-1,items[0]['vigencia_desde'][0].substring(0,2)),datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[5],label:labelFormM[5],onChange:function(){dijit.byId(camposFormM[6]).constraints.min = arguments[0];}}));
		editables.addChild(new dijit.form.DateTextBox({id:camposFormM[6],value:new Date(items[0]['vigencia_hasta'][0].substring(6,10),items[0]['vigencia_hasta'][0].substring(3,5)-1,items[0]['vigencia_hasta'][0].substring(0,2)),constraints:{datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[6],label:labelFormM[6]}));
		editables.addChild(new dijit.form.ValidationTextBox({id:camposFormM[9],value:items[0]['archivo_id'][0],readOnly:false,style:'width:130px;',label:labelFormM[9],promptMessage:mensajesFormM[9]}));
		dijit.byId('divPlanEspecial').attr('content',editables);
		editables.startup();
		
		//Creacion de botones
		var botonAdjuntar = new dijit.form.Button({id:'botonAdjuntar', label:'Adjuntar',type:'button',iconClass:'adjuntoIcon',onClick:function(){AdjuntarMaster();}});
		dojo.place(botonAdjuntar.domNode,dijit.byId("divBotones").domNode,'last');
		if(items[0]['archivo_id'][0]){
			dijit.byId('botonAdjuntar').attr('label','Eliminar Adj.');
			dijit.byId('botonAdjuntar').onClick=function(){EliminarAdjuntoEdicion();}
		}
		var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlgrabarM = dmlEditarMaster;GrabarMasterEditar();}});
		dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
		var botonGrabarEnviar = new dijit.form.Button({label:'Grabar y Enviar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlgrabarM = dmlEnviarEditarMaster;GrabarMasterEditar();}});
		dojo.place(botonGrabarEnviar.domNode,dijit.byId("divBotones").domNode,'last');
		var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMasterEditar();}});
		dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
		//Elimino la capacidad de cerrar el dialogo por medio de la "X"
		dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
		
		var operStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12731&plan_especial_id='+registroSeleccionado[0][columnasM[0]][0]});
		var cambiarOperacion = function(operaciones,request){
			if(dijit.byId('oper')){dijit.byId('oper').destroy();}
			if(operaciones.length==3){
				dijit.byId('gridProductos').attr('structure',layoutDialogPrestamoSinCargoVenta);
				dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:51px;float:left;">0</div><div id="divTotalSinCargo" style="width:48px;float:left;">0</div><div id="divTotalVenta" style="width:46px;float:left;">0</div>';
				tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'oper',readOnly:true,style:'width:130px;height:58px;',label:'Operaci&oacute;n: ',multiple:true,store: operStore}));
			}else if(operaciones.length==2){
				if(operaciones[0].tipo_operacion_id[0]=='01'&&operaciones[1].tipo_operacion_id[0]=='02'){dijit.byId('gridProductos').attr('structure',layoutDialogPrestamoSinCargo);dojo.byId('divTotales').innerHTML='<div id="divTotalVenta" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalPrestamo" style="width:50px;float:left;">0</div><div id="divTotalSinCargo" style="width:46px;float:left;">0</div>';}
				else if(operaciones[0].tipo_operacion_id[0]=='02'&&operaciones[1].tipo_operacion_id[0]=='03'){dijit.byId('gridProductos').attr('structure',layoutDialogSinCargoVenta);dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:50px;float:left;">0</div><div id="divTotalVenta" style="width:46px;float:left;">0</div>';}
				else if(operaciones[0].tipo_operacion_id[0]=='01'&&operaciones[1].tipo_operacion_id[0]=='03'){dijit.byId('gridProductos').attr('structure',layoutDialogPrestamoVenta);dojo.byId('divTotales').innerHTML='<div id="divTotalSinCargo" style="width:51px;float:left;visibility:hidden;">0</div><div id="divTotalPrestamo" style="width:48px;float:left;">0</div><div id="divTotalVenta" style="width:46px;float:left;">0</div>';}
				tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'oper',readOnly:true,style:'width:130px;height:39px;',label:'Operaci&oacute;n: ',multiple:true,store: operStore}));
			}else{
				if(operaciones[0].tipo_operacion_id[0]=='01'){dijit.byId('gridProductos').attr('structure',layoutDialogPrestamo);dojo.byId('divTotales').innerHTML='<div id="divTotalVenta" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:28px;float:left;visibility:hidden;">0</div><div id="divTotalPrestamo" style="width:68px;float:left;">0</div>';}
				else if(operaciones[0].tipo_operacion_id[0]=='02'){dijit.byId('gridProductos').attr('structure',layoutDialogSinCargo);dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalVenta" style="width:28px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:68px;float:left;">0</div>';}
				else if(operaciones[0].tipo_operacion_id[0]=='03'){dijit.byId('gridProductos').attr('structure',layoutDialogVenta);dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:28px;float:left;visibility:hidden;">0</div><div id="divTotalVenta" style="width:68px;float:left;">0</div>';}
				tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'oper',readOnly:true,style:'width:130px;height:19px;',label:'Operaci&oacute;n: ',multiple:true,store: operStore}));}
			for(i=0;i<operaciones.length;i++){
				if(dijit.byId('plazoOper')){dijit.byId('plazoOper').destroy();}
				if(dijit.byId('depOper')){dijit.byId('depOper').destroy();}
				if(dijit.byId('limOper')){dijit.byId('limOper').destroy();}
				if(operaciones[i].tipo_operacion_id[0]=='01'){
					if(!dijit.byId('plazoOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'plazoOper',value:items[0]['plazo_venta_id'][0]+' - '+items[0]['plazo_venta'][0],readOnly:true,style:'width:130px;',label:'Condici&oacute;n de Pago: '}));}
					if(!dijit.byId('depOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'depOper',value:items[0]['deposito_id'][0]+' - '+items[0]['deposito'][0],readOnly:true,style:'width:130px;',label:'Dep&oacute;sito: '}));}
				}else if(operaciones[i].tipo_operacion_id[0]=='02'){
					if(!dijit.byId('depOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'depOper',value:items[0]['deposito_id'][0]+' - '+items[0]['deposito'][0],readOnly:true,style:'width:130px;',label:'Dep&oacute;sito: '}));}
				}else if(operaciones[i].tipo_operacion_id[0]=='03'){
					if(!dijit.byId('limOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'limOper',value:items[0]['tipo_limite_credito_id'][0]+' - '+items[0]['tipo_limite_credito'][0],readOnly:true,style:'width:130px;',label:'L&iacute;mite de Cr&eacute;dito: '}));}
					if(!dijit.byId('plazoOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'plazoOper',value:items[0]['plazo_venta_id'][0]+' - '+items[0]['plazo_venta'][0],readOnly:true,style:'width:130px;',label:'Condici&oacute;n de Pago: '}));}
					if(!dijit.byId('depOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'depOper',value:items[0]['deposito_id'][0]+' - '+items[0]['deposito'][0],readOnly:true,style:'width:130px;',label:'Dep&oacute;sito: '}));}
				}
			}

			tablaForm.addChild(new dijit.form.ValidationTextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:0px;',label:''}));
			tablaForm.addChild(new dijit.form.ValidationTextBox({id:'tipo_plan_especial_id',value:items[0]['tipo_plan_especial_id'][0],style:'visibility:hidden;width:0px;',label:''}));
			
			var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlVerDetalleGrilla+'&plan_especial_id='+registroSeleccionado[0][columnasM[0]][0];
			CargarProductosEdicion(urlValue);
			
			dijit.byId('divCampos').attr('content',tablaForm);
			tablaForm.startup();		
			//Muestro el dialogo
			dijit.byId('dialogMaster').show();
		}
		operStore.fetch({query:{},onComplete:cambiarOperacion})
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});

}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EnviarMasivoWMaster(){
	var planesChecked = '';
	var mensaje = null;
	for(i=0;i<cantidadGrillas;i++){
		if(dijit.byId('grilla'+i).store){
			var ObtenerPlanes = function(item){
				if(item['estado'][0]!='ED'){mensaje = 'Debe seleccionar solo Planes Especiales con Estado ED';return;}
				planesChecked+=item['plan_especial_id'][0]+',';
			}
			dijit.byId('grilla'+i).store.fetch({query:{seleccionado:'true'},onItem:ObtenerPlanes});
		}
	}
	if(mensaje){Mensaje(mensaje,'error','master');return;}
	if(planesChecked==''){Mensaje('Seleccione al menos un Plan Especial','error','master');return;}
	//GrabaciÛn de datos en la base de datos
	planesChecked = planesChecked.substr(0,planesChecked.length-1);
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlEnvioMasivo+'&planes='+planesChecked;
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
					if(!item){dijit.byId('gridProductos').store.newItem({producto_id:storeProductos.getValue(items[i],'producto_id'), producto_desc:storeProductos.getValue(items[i],'producto_desc'),prestamo:storeProductos.getValue(items[i],'prestamo'),sincargo:storeProductos.getValue(items[i],'sincargo'),venta:storeProductos.getValue(items[i],'venta')});}
				}
			});
		}
		dijit.byId('gridProductos').store.save();
		dijit.byId("dialogProductos").hide();
	}
	storeProductos.fetch({query:{},onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDetalleMaster(){
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlVerDetalleMaster+'&plan_especial_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['area_id'][0]+' - '+items[0]['area'][0],readOnly:true,style:'width:130px;',label:labelFormM[0]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['subregion_id'][0]+' - '+items[0]['subregion'][0],readOnly:true,style:'width:130px;',label:labelFormM[1]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['fecha_creacion'][0],readOnly:true,style:'width:130px;',label:labelFormM[4]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['cliente_id'][0]+' - '+items[0]['cliente'][0],readOnly:true,style:'width:130px;',label:labelFormM[2]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['vigencia_desde'][0],readOnly:true,style:'width:130px;',label:labelFormM[5]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['vigencia_hasta'][0],readOnly:true,style:'width:130px;',label:labelFormM[6]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['tipo_plan_especial_id'][0]+' - '+items[0]['plan_especial'][0],readOnly:true,style:'width:130px;',label:labelFormM[7]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['division_id'][0]+' - '+items[0]['division'][0],readOnly:true,style:'width:130px;',label:labelFormM[8]}));
		//tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['tipo_operacion_id'][0]+' - '+items[0]['tipo_operacion'][0],readOnly:true,style:'width:130px;',label:'Operaci&oacute;n: '}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['archivo_id'][0],readOnly:true,style:'width:130px;',label:labelFormM[9],promptMessage:mensajesFormM[9],readOnly:true,required:requeridoFormM[9]}));
		tablaForm.addChild(new dijit.form.SimpleTextarea({value:items[0]['descripcion'][0],readOnly:true,style:'width:130px;height:58px;',label:labelFormM[3]}));
		
		//Creacion de botones
		var botonCancelar = new dijit.form.Button({label:'Aceptar',type:'button',iconClass:'aceptarIcon',onClick:function(){CancelarMasterEditar();}});
		dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
		//Elimino la capacidad de cerrar el dialogo por medio de la "X"
		dijit.byId("dialogMaster").titleBar.children[1].style.display='none';

		var operStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12731&plan_especial_id='+registroSeleccionado[0][columnasM[0]][0]});
		var cambiarOperacion = function(operaciones,request){
			if(operaciones.length==3){
				dijit.byId('gridProductos').attr('structure',layoutDialogPrestamoSinCargoVentaD);
				dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:51px;float:left;">0</div><div id="divTotalSinCargo" style="width:48px;float:left;">0</div><div id="divTotalVenta" style="width:46px;float:left;">0</div>';
				tablaForm.addChild(new dojox.form.CheckedMultiSelect({readOnly:true,style:'width:130px;height:58px;',label:'Operaci&oacute;n: ',multiple:true,store: operStore}));
			}else if(operaciones.length==2){
				if(operaciones[0].tipo_operacion_id[0]=='01'&&operaciones[1].tipo_operacion_id[0]=='02'){dijit.byId('gridProductos').attr('structure',layoutDialogPrestamoSinCargoD);dojo.byId('divTotales').innerHTML='<div id="divTotalVenta" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalPrestamo" style="width:50px;float:left;">0</div><div id="divTotalSinCargo" style="width:46px;float:left;">0</div>';}
				else if(operaciones[0].tipo_operacion_id[0]=='02'&&operaciones[1].tipo_operacion_id[0]=='03'){dijit.byId('gridProductos').attr('structure',layoutDialogSinCargoVentaD);dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:50px;float:left;">0</div><div id="divTotalVenta" style="width:46px;float:left;">0</div>';}
				else if(operaciones[0].tipo_operacion_id[0]=='01'&&operaciones[1].tipo_operacion_id[0]=='03'){dijit.byId('gridProductos').attr('structure',layoutDialogPrestamoVentaD);dojo.byId('divTotales').innerHTML='<div id="divTotalSinCargo" style="width:51px;float:left;visibility:hidden;">0</div><div id="divTotalPrestamo" style="width:48px;float:left;">0</div><div id="divTotalVenta" style="width:46px;float:left;">0</div>';}
				tablaForm.addChild(new dojox.form.CheckedMultiSelect({readOnly:true,style:'width:130px;height:39px;',label:'Operaci&oacute;n: ',multiple:true,store: operStore}));
			}else{
				if(operaciones[0].tipo_operacion_id[0]=='01'){dijit.byId('gridProductos').attr('structure',layoutDialogPrestamoD);dojo.byId('divTotales').innerHTML='<div id="divTotalVenta" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:28px;float:left;visibility:hidden;">0</div><div id="divTotalPrestamo" style="width:68px;float:left;">0</div>';}
				else if(operaciones[0].tipo_operacion_id[0]=='02'){dijit.byId('gridProductos').attr('structure',layoutDialogSinCargoD);dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalVenta" style="width:28px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:68px;float:left;">0</div>';}
				else if(operaciones[0].tipo_operacion_id[0]=='03'){dijit.byId('gridProductos').attr('structure',layoutDialogVentaD);dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:28px;float:left;visibility:hidden;">0</div><div id="divTotalVenta" style="width:68px;float:left;">0</div>';}
				tablaForm.addChild(new dojox.form.CheckedMultiSelect({readOnly:true,style:'width:130px;height:19px;',label:'Operaci&oacute;n: ',multiple:true,store: operStore}));}
			for(i=0;i<operaciones.length;i++){
				if(dijit.byId('plazoOper')){dijit.byId('plazoOper').destroy();}
				if(dijit.byId('depOper')){dijit.byId('depOper').destroy();}
				if(dijit.byId('limOper')){dijit.byId('limOper').destroy();}
				if(operaciones[i].tipo_operacion_id[0]=='01'){
					//tablaForm.addChild(new dijit.form.DateTextBox({id:'expir',constraints:{datePattern:'dd-MM-yyyy'},style:'width:250px;',required:true,label:'Fecha de Expiraci&oacute;n del Pr&eacute;stamo en Comodato: '}));
					if(!dijit.byId('plazoOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'plazoOper',value:items[0]['plazo_venta_id'][0]+' - '+items[0]['plazo_venta'][0],readOnly:true,style:'width:130px;',label:'Condici&oacute;n de Pago: '}));}
					if(!dijit.byId('depOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'depOper',value:items[0]['deposito_id'][0]+' - '+items[0]['deposito'][0],readOnly:true,style:'width:130px;',label:'Dep&oacute;sito: '}));}
				}else if(operaciones[i].tipo_operacion_id[0]=='02'){
					if(!dijit.byId('depOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'depOper',value:items[0]['deposito_id'][0]+' - '+items[0]['deposito'][0],readOnly:true,style:'width:130px;',label:'Dep&oacute;sito: '}));}
				}else if(operaciones[i].tipo_operacion_id[0]=='03'){
					if(!dijit.byId('limOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'limOper',value:items[0]['tipo_limite_credito_id'][0]+' - '+items[0]['tipo_limite_credito'][0],readOnly:true,style:'width:130px;',label:'L&iacute;mite de Cr&eacute;dito: '}));}
					if(!dijit.byId('plazoOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'plazoOper',value:items[0]['plazo_venta_id'][0]+' - '+items[0]['plazo_venta'][0],readOnly:true,style:'width:130px;',label:'Condici&oacute;n de Pago: '}));}
					if(!dijit.byId('depOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'depOper',value:items[0]['deposito_id'][0]+' - '+items[0]['deposito'][0],readOnly:true,style:'width:130px;',label:'Dep&oacute;sito: '}));}
				}
			}
		
			tablaForm.addChild(new dijit.form.ValidationTextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:0px;',label:''}));
			tablaForm.addChild(new dijit.form.ValidationTextBox({id:'tipo_plan_especial_id',value:items[0]['tipo_plan_especial_id'][0],style:'visibility:hidden;width:0px;',label:''}));
			
			//Obtengo datos de productos
			var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlVerDetalleGrilla+'&plan_especial_id='+registroSeleccionado[0][columnasM[0]][0];
			dijit.byId('gridProductos').setStore(new dojo.data.ItemFileWriteStore({urlPreventCache:true,url:urlValue}));
			dijit.byId('gridProductos').attr("autoWidth",true);
			dijit.byId('gridProductos').update();
			var suma1 = 0;var suma2 = 0;var suma3 = 0;
			var AsignarTotal = function(items,request){
			for(i=0;i<items.length;i++){
				suma1+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'prestamo').replace(',','.'));
				suma2+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'sincargo').replace(',','.'));
				suma3+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'venta').replace(',','.'));}
			dojo.byId('divTotalPrestamo').innerHTML = suma1.toFixed(2);
			dojo.byId('divTotalSinCargo').innerHTML = suma2.toFixed(2);
			dojo.byId('divTotalVenta').innerHTML = suma3.toFixed(2);
			}
			if(dijit.byId('gridProductos').store){dijit.byId('gridProductos').store.fetch({query:{},onComplete:AsignarTotal});}
	
			dijit.byId('divCampos').attr('content',tablaForm);
			tablaForm.startup();		
			//Muestro el dialogo
			dijit.byId('dialogMaster').show();
		}
		operStore.fetch({query:{},onComplete:cambiarOperacion})
		
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CopiarMaster(){
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlVerDetalleMaster+'&plan_especial_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['area_id'][0]+' - '+items[0]['area'][0],readOnly:true,style:'width:130px;',label:labelFormM[0]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[1],value:items[0]['subregion_id'][0]+' - '+items[0]['subregion'][0],readOnly:true,style:'width:130px;',label:labelFormM[1]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['cliente_id'][0]+' - '+items[0]['cliente'][0],readOnly:true,style:'width:130px;',label:labelFormM[2]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['tipo_plan_especial_id'][0]+' - '+items[0]['plan_especial'][0],readOnly:true,style:'width:130px;',label:labelFormM[7]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['division_id'][0]+' - '+items[0]['division'][0],readOnly:true,style:'width:130px;',label:labelFormM[8]}));		

		//Creacion de botones
		var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMasterCopiar();}});
		dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
		var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMasterEditar();}});
		dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
		//Elimino la capacidad de cerrar el dialogo por medio de la "X"
		dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
		dojo.byId('botonProductos').style.display = 'block';
		
		var operStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12731&plan_especial_id='+registroSeleccionado[0][columnasM[0]][0]});
		var cambiarOperacion = function(operaciones,request){
			//Vigencias editables
			var editables = new dojox.layout.TableContainer({cols:1,labelWidth:'180',style:'text-align:left;'});
			editables.addChild(new dojox.form.CheckedMultiSelect({id:'cliente_id',style:'width:130px;height:58px;',required:requeridoFormM[2],multiple:true,label:(labelFormM[2]+'<button class="dijitButtonNode" onclick="VerDialogoClientes();" type="button">Ver</button>'),readOnly:true}));
			editables.addChild(new dijit.form.ValidationTextBox({id:'descripcion',maxLength:'40',regExp:regexpFormM[1],value:items[0]['descripcion'][0],readOnly:false,style:'width:130px;height:58px;',label:labelFormM[3]}));
			if(operaciones[0].tipo_operacion_id[0]=='01'){
				if(dijit.byId('expiracion_comodato')){dijit.byId('expiracion_comodato').destroy();}editables.addChild(new dijit.form.DateTextBox({id:'expiracion_comodato',value:new Date(items[0]['expiracion_comodato'][0].substring(6,10),items[0]['expiracion_comodato'][0].substring(3,5)-1,items[0]['expiracion_comodato'][0].substring(0,2)),constraints:{min:new Date(items[0]['vigencia_desde'][0].substring(6,10),items[0]['vigencia_desde'][0].substring(3,5)-1,items[0]['vigencia_desde'][0].substring(0,2)),datePattern:'dd-MM-yyyy'},style:'width:130px;',required:false,label:'Fecha de Expiraci&oacute;n del Pr&eacute;stamo en Comodato: ',onChange:function(){dijit.byId(camposFormM[5]).constraints.max = arguments[0];dijit.byId(camposFormM[6]).constraints.min = arguments[0];}}));
				editables.addChild(new dijit.form.DateTextBox({id:camposFormM[5],value:new Date(items[0]['vigencia_desde'][0].substring(6,10),items[0]['vigencia_desde'][0].substring(3,5)-1,items[0]['vigencia_desde'][0].substring(0,2)),constraints:{min:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,dojo.date.locale.format(new Date(),{datePattern:'dd',selector:'date'})),max:new Date(items[0]['expiracion_comodato'][0].substring(6,10),items[0]['expiracion_comodato'][0].substring(3,5)-1,items[0]['expiracion_comodato'][0].substring(0,2)),datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[5],label:labelFormM[5]}));
				editables.addChild(new dijit.form.DateTextBox({id:camposFormM[6],value:new Date(items[0]['vigencia_hasta'][0].substring(6,10),items[0]['vigencia_hasta'][0].substring(3,5)-1,items[0]['vigencia_hasta'][0].substring(0,2)),constraints:{min:new Date(items[0]['expiracion_comodato'][0].substring(6,10),items[0]['expiracion_comodato'][0].substring(3,5)-1,items[0]['expiracion_comodato'][0].substring(0,2)),datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[6],label:labelFormM[6]}));
				//Seteo parametros de grabacion
				dmlgrabarM = '&division_id='+items[0]['division_id'][0]+'&subregion_id='+items[0]['subregion_id'][0]+'&tipo_plan_especial_id='+items[0]['tipo_plan_especial_id'][0]+'&tipo_limite_credito_id='+items[0]['tipo_limite_credito_id'][0]+'&plazo_venta_id='+items[0]['plazo_venta_id'][0]+'&deposito_id='+items[0]['deposito_id'][0]+'&archivo_id=';
			}else{
				editables.addChild(new dijit.form.DateTextBox({id:camposFormM[5],value:new Date(items[0]['vigencia_desde'][0].substring(6,10),items[0]['vigencia_desde'][0].substring(3,5)-1,items[0]['vigencia_desde'][0].substring(0,2)),constraints:{min:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,dojo.date.locale.format(new Date(),{datePattern:'dd',selector:'date'})),datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[5],label:labelFormM[5],onChange:function(){dijit.byId(camposFormM[6]).constraints.min = arguments[0];}}));
				editables.addChild(new dijit.form.DateTextBox({id:camposFormM[6],value:new Date(items[0]['vigencia_hasta'][0].substring(6,10),items[0]['vigencia_hasta'][0].substring(3,5)-1,items[0]['vigencia_hasta'][0].substring(0,2)),constraints:{datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[6],label:labelFormM[6]}));
				//Seteo parametros de grabacion
				dmlgrabarM = '&division_id='+items[0]['division_id'][0]+'&subregion_id='+items[0]['subregion_id'][0]+'&tipo_plan_especial_id='+items[0]['tipo_plan_especial_id'][0]+'&tipo_limite_credito_id='+items[0]['tipo_limite_credito_id'][0]+'&plazo_venta_id='+items[0]['plazo_venta_id'][0]+'&deposito_id='+items[0]['deposito_id'][0]+'&archivo_id=';
			}
			dijit.byId('divPlanEspecial').attr('content',editables);
			editables.startup();
			
			if(operaciones.length==3){
				dijit.byId('gridProductos').attr('structure',layoutDialogPrestamoSinCargoVenta);
				dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:51px;float:left;">0</div><div id="divTotalSinCargo" style="width:48px;float:left;">0</div><div id="divTotalVenta" style="width:46px;float:left;">0</div>';
				tablaForm.addChild(new dojox.form.CheckedMultiSelect({style:'width:130px;height:58px;',label:'Operaci&oacute;n: ',multiple:true,store: operStore}));
			}else if(operaciones.length==2){
				if(operaciones[0].tipo_operacion_id[0]=='01'&&operaciones[1].tipo_operacion_id[0]=='02'){dijit.byId('gridProductos').attr('structure',layoutDialogPrestamoSinCargo);dojo.byId('divTotales').innerHTML='<div id="divTotalVenta" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalPrestamo" style="width:50px;float:left;">0</div><div id="divTotalSinCargo" style="width:46px;float:left;">0</div>';}
				else if(operaciones[0].tipo_operacion_id[0]=='02'&&operaciones[1].tipo_operacion_id[0]=='03'){dijit.byId('gridProductos').attr('structure',layoutDialogSinCargoVenta);dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:50px;float:left;">0</div><div id="divTotalVenta" style="width:46px;float:left;">0</div>';}
				else if(operaciones[0].tipo_operacion_id[0]=='01'&&operaciones[1].tipo_operacion_id[0]=='03'){dijit.byId('gridProductos').attr('structure',layoutDialogPrestamoVenta);dojo.byId('divTotales').innerHTML='<div id="divTotalSinCargo" style="width:51px;float:left;visibility:hidden;">0</div><div id="divTotalPrestamo" style="width:48px;float:left;">0</div><div id="divTotalVenta" style="width:46px;float:left;">0</div>';}
				tablaForm.addChild(new dojox.form.CheckedMultiSelect({style:'width:130px;height:39px;',label:'Operaci&oacute;n: ',multiple:true,store: operStore}));
			}else{
				if(operaciones[0].tipo_operacion_id[0]=='01'){dijit.byId('gridProductos').attr('structure',layoutDialogPrestamo);dojo.byId('divTotales').innerHTML='<div id="divTotalVenta" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:28px;float:left;visibility:hidden;">0</div><div id="divTotalPrestamo" style="width:68px;float:left;">0</div>';}
				else if(operaciones[0].tipo_operacion_id[0]=='02'){dijit.byId('gridProductos').attr('structure',layoutDialogSinCargo);dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalVenta" style="width:28px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:68px;float:left;">0</div>';}
				else if(operaciones[0].tipo_operacion_id[0]=='03'){dijit.byId('gridProductos').attr('structure',layoutDialogVenta);dojo.byId('divTotales').innerHTML='<div id="divTotalPrestamo" style="width:49px;float:left;visibility:hidden;">0</div><div id="divTotalSinCargo" style="width:28px;float:left;visibility:hidden;">0</div><div id="divTotalVenta" style="width:68px;float:left;">0</div>';}
				tablaForm.addChild(new dojox.form.CheckedMultiSelect({style:'width:130px;height:19px;',label:'Operaci&oacute;n: ',multiple:true,store: operStore}));}
			
			dmlgrabarM += '&tipo_operacion_id=';
			
			for(i=0;i<operaciones.length;i++){
				dmlgrabarM += operaciones[i].tipo_operacion_id[0];
				if(i!=operaciones.length-1){dmlgrabarM +=',';}
		
				if(dijit.byId('plazoOper')){dijit.byId('plazoOper').destroy();}
				if(dijit.byId('depOper')){dijit.byId('depOper').destroy();}
				if(dijit.byId('limOper')){dijit.byId('limOper').destroy();}
				if(operaciones[i].tipo_operacion_id[0]=='01'){
					if(!dijit.byId('plazoOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'plazoOper',value:items[0]['plazo_venta_id'][0]+' - '+items[0]['plazo_venta'][0],readOnly:true,style:'width:130px;',label:'Condici&oacute;n de Pago: '}));}
					if(!dijit.byId('depOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'depOper',value:items[0]['deposito_id'][0]+' - '+items[0]['deposito'][0],readOnly:true,style:'width:130px;',label:'Dep&oacute;sito: '}));}
				}else if(operaciones[i].tipo_operacion_id[0]=='02'){
					if(!dijit.byId('depOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'depOper',value:items[0]['deposito_id'][0]+' - '+items[0]['deposito'][0],readOnly:true,style:'width:130px;',label:'Dep&oacute;sito: '}));}
				}else if(operaciones[i].tipo_operacion_id[0]=='03'){
					if(!dijit.byId('limOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'limOper',value:items[0]['tipo_limite_credito_id'][0]+' - '+items[0]['tipo_limite_credito'][0],readOnly:true,style:'width:130px;',label:'L&iacute;mite de Cr&eacute;dito: '}));}
					if(!dijit.byId('plazoOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'plazoOper',value:items[0]['plazo_venta_id'][0]+' - '+items[0]['plazo_venta'][0],readOnly:true,style:'width:130px;',label:'Condici&oacute;n de Pago: '}));}
					if(!dijit.byId('depOper')){tablaForm.addChild(new dijit.form.ValidationTextBox({id:'depOper',value:items[0]['deposito_id'][0]+' - '+items[0]['deposito'][0],readOnly:true,style:'width:130px;',label:'Dep&oacute;sito: '}));}
				}
			}
		
			tablaForm.addChild(new dijit.form.ValidationTextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:0px;',label:''}));
			tablaForm.addChild(new dijit.form.ValidationTextBox({id:'tipo_plan_especial_id',value:items[0]['tipo_plan_especial_id'][0],style:'visibility:hidden;width:0px;',label:''}));
			
			//Obtengo datos de productos
			var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlVerDetalleGrilla+'&plan_especial_id='+registroSeleccionado[0][columnasM[0]][0];
			dijit.byId('gridProductos').setStore(new dojo.data.ItemFileWriteStore({urlPreventCache:true,url:urlValue}));
			dijit.byId('gridProductos').attr("autoWidth",true);
			dijit.byId('gridProductos').update();
			var suma1 = 0;var suma2 = 0;var suma3 = 0;
			var AsignarTotal = function(items,request){
			for(i=0;i<items.length;i++){
				suma1+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'prestamo').replace(',','.'));
				suma2+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'sincargo').replace(',','.'));
				suma3+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'venta').replace(',','.'));}
			dojo.byId('divTotalPrestamo').innerHTML = suma1.toFixed(2);
			dojo.byId('divTotalSinCargo').innerHTML = suma2.toFixed(2);
			dojo.byId('divTotalVenta').innerHTML = suma3.toFixed(2);
			}
			if(dijit.byId('gridProductos').store){dijit.byId('gridProductos').store.fetch({query:{},onComplete:AsignarTotal});}
	
			dijit.byId('divCampos').attr('content',tablaForm);
			tablaForm.startup();		
			//Muestro el dialogo
			dijit.byId('dialogMaster').show();
		}
		operStore.fetch({query:{},onComplete:cambiarOperacion})
		
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMaster(){
	dijit.byId('gridProductos').edit.apply();
	//Validacion de que el formulario estÈ bien cargado
	for(i=0;i<requeridoFormM.length;i++){
		if(camposFormM[i]!='cliente_id' && camposFormM[i]!='descripcion' && !dijit.byId(camposFormM[i]).isValid()){dijit.byId(camposFormM[i]).focus();return;}
	}
	if(dijit.byId('cliente_id').attr('value')==''){VerDialogoClientes();return;}
	if(dijit.byId('descripcion').attr('value')==''){dijit.showTooltip('Ingrese una Descripci&oacute;n',dijit.byId('descripcion').domNode,'above');return;}
	if(dijit.byId('expir') && dijit.byId('expir').attr('value')==null){dijit.byId('expir').focus();return;}
	if(dijit.byId('lim') && dijit.byId('lim').attr('value')==''){dijit.byId('lim').focus();return;}
	if(dijit.byId('cond') && dijit.byId('cond').attr('value')=='' && dijit.byId('oper').attr('value')[0]!='01'){dijit.byId('cond').focus();return;}
	if(dijit.byId('dep') && dijit.byId('dep').attr('value')==''){dijit.byId('dep').focus();return;}
	//GeneraciÛn de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM;
	for(i=0;i<camposFormM.length;i++){
		if(dijit.byId(camposFormM[i]).declaredClass=='dijit.form.DateTextBox'){urlValue+='&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).valueNode.value;}
		else if(camposFormM[i]!='fecha_actual' && camposFormM[i]!='area_id'){urlValue+='&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).attr('value');}
	}
	urlValue+='&tipo_operacion_id='+dijit.byId('oper').attr('value');
	urlValue+='&tipo_limite_credito_id=';if(dijit.byId('lim')){urlValue+=dijit.byId('lim').attr('value');}
	urlValue+='&plazo_venta_id=';if(dijit.byId('cond')){urlValue+=dijit.byId('cond').attr('value');}
	urlValue+='&deposito_id=';if(dijit.byId('dep')){urlValue+=dijit.byId('dep').attr('value');}
	urlValue+='&expiracion_prestamo=';if(dijit.byId('expir')){urlValue+=dijit.byId('expir').valueNode.value;}
	var CompletarJSON = function(items,request){
		var ids = '';
		var prestamo = '';var sincargo = '';var venta = '';
		for(i=0;i<items.length;i++){
			if(dijit.byId('oper').attr('value').length==3){if(dijit.byId('gridProductos').store.getValue(items[i],'prestamo')<1&&dijit.byId('gridProductos').store.getValue(items[i],'sincargo')<1&&dijit.byId('gridProductos').store.getValue(items[i],'venta')<1){dijit.showTooltip('Los productos deben tener una cantidad mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}}
			else if(dijit.byId('oper').attr('value').length==2){if(dijit.byId('oper').attr('value')[0]=='01'&&dijit.byId('oper').attr('value')[1]=='02'){if(dijit.byId('gridProductos').store.getValue(items[i],'prestamo')<1&&dijit.byId('gridProductos').store.getValue(items[i],'sincargo')<1){dijit.showTooltip('Los productos deben tener una cantidad mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}}
			else if(dijit.byId('oper').attr('value')[0]=='02'&&dijit.byId('oper').attr('value')[1]=='03'){if(dijit.byId('gridProductos').store.getValue(items[i],'sincargo')<1&&dijit.byId('gridProductos').store.getValue(items[i],'venta')<1){dijit.showTooltip('Los productos deben tener una cantidad mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}}
			else if(dijit.byId('oper').attr('value')[0]=='01'&&dijit.byId('oper').attr('value')[1]=='03'){if(dijit.byId('gridProductos').store.getValue(items[i],'prestamo')<1&&dijit.byId('gridProductos').store.getValue(items[i],'venta')<1){dijit.showTooltip('Los productos deben tener una cantidad mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}}
			}else{if(dijit.byId('oper').attr('value')[0]=='01'){if(dijit.byId('gridProductos').store.getValue(items[i],'prestamo')<1){dijit.showTooltip('Los productos deben tener una cantidad mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}}
			else if(dijit.byId('oper').attr('value')[0]=='02'){if(dijit.byId('gridProductos').store.getValue(items[i],'sincargo')<1){dijit.showTooltip('Los productos deben tener una cantidad mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}}
			else if(dijit.byId('oper').attr('value')[0]=='03'){if(dijit.byId('gridProductos').store.getValue(items[i],'venta')<1){dijit.showTooltip('Los productos deben tener una cantidad mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}}}
			ids+=dijit.byId('gridProductos').store.getValue(items[i],'producto_id');
			prestamo+=dijit.byId('gridProductos').store.getValue(items[i],'prestamo');
			sincargo+=dijit.byId('gridProductos').store.getValue(items[i],'sincargo');
			venta+=dijit.byId('gridProductos').store.getValue(items[i],'venta');
			if(i!=items.length-1){ids+=',';prestamo+='-';sincargo+='-';venta+='-';}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
		dijit.hideTooltip(dijit.byId('gridProductos').domNode);
		dijit.byId('dialogMaster').hide();
		procesando.show();
		urlValue+='&productos='+ids+'&importes_prestamo='+prestamo+'&importes_sincargo='+sincargo+'&importes_venta='+venta;
		//GrabaciÛn de datos en la base de datos
		dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
			if(response.errcode==""){
				//BuscarMaster();
				dijit.byId('archivo_id').attr('value','');
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
function GrabarMasterCopiar(){
	dijit.byId('gridProductos').edit.apply();
	//Validacion de que el formulario estÈ bien cargado
	if(!dijit.byId(camposFormM[5]).isValid()){dijit.byId(camposFormM[5]).focus();return;}
	if(!dijit.byId(camposFormM[6]).isValid()){dijit.byId(camposFormM[6]).focus();return;}
	if(!dijit.byId('descripcion').isValid()){dijit.byId('descripcion').focus();return;}
	if(dijit.byId('expiracion_comodato')){if(!dijit.byId('expiracion_comodato').isValid()){dijit.byId('expiracion_comodato').focus();return;}}
	if(!dijit.byId('cliente_id').options.length){dijit.byId('gridOrigen').attr('autoWidth',true);dijit.byId('dialogClientes').show();return;}
	//GeneraciÛn de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlNuevoMaster+'&cliente_id='+dijit.byId('cliente_id').value+'&descripcion='+dijit.byId('descripcion').value+dmlgrabarM+'&'+camposFormM[5]+'='+dijit.byId(camposFormM[5]).valueNode.value+'&'+camposFormM[6]+'='+dijit.byId(camposFormM[6]).valueNode.value;
	urlValue += '&expiracion_prestamo=';
	if(dijit.byId('expiracion_prestamo')){urlValue += dijit.byId('expiracion_prestamo').valueNode.value;}
	var CompletarJSON = function(items,request){
		var ids = '';
		var prestamo = '';var sincargo = '';var venta = '';
		for(i=0;i<items.length;i++){
			ids+=dijit.byId('gridProductos').store.getValue(items[i],'producto_id');
			prestamo+=dijit.byId('gridProductos').store.getValue(items[i],'prestamo');
			sincargo+=dijit.byId('gridProductos').store.getValue(items[i],'sincargo');
			venta+=dijit.byId('gridProductos').store.getValue(items[i],'venta');
			if(i!=items.length-1){ids+=',';prestamo+='-';sincargo+='-';venta+='-';}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
		dijit.hideTooltip(dijit.byId('gridProductos').domNode);
		dijit.byId('dialogMaster').hide();
		procesando.show();
		urlValue+='&productos='+ids+'&importes_prestamo='+prestamo+'&importes_sincargo='+sincargo+'&importes_venta='+venta;
		//GrabaciÛn de datos en la base de datos
		dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
			if(response.errcode==""){
				CancelarMasterCopiar();
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
	if(dijit.byId('vigencia_desde').attr('value')==''){dijit.byId('vigencia_desde').focus();return;}
	if(dijit.byId('vigencia_hasta').attr('value')==''){dijit.byId('vigencia_hasta').focus();return;}
	//GeneraciÛn de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM;
	urlValue+='&plan_especial_id='+registroSeleccionado[0][columnasM[0]][0];
	urlValue+='&vigencia_desde='+dijit.byId('vigencia_desde').valueNode.value;;
	urlValue+='&vigencia_hasta='+dijit.byId('vigencia_hasta').valueNode.value;;
	urlValue+='&archivo_id='+dijit.byId('archivo_id').attr('value');
	var CompletarJSON = function(items,request){
		var ids = '';
		var prestamo = '';var sincargo = '';var venta = '';
		for(i=0;i<items.length;i++){
			if(dijit.byId('oper').attr('value').length==3){if(dijit.byId('gridProductos').store.getValue(items[i],'prestamo')<1&&dijit.byId('gridProductos').store.getValue(items[i],'sincargo')<1&&dijit.byId('gridProductos').store.getValue(items[i],'venta')<1){dijit.showTooltip('Los productos deben tener una cantidad mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}}
			else if(dijit.byId('oper').attr('value').length==2){if(dijit.byId('oper').attr('value')[0]=='01'&&dijit.byId('oper').attr('value')[1]=='02'){if(dijit.byId('gridProductos').store.getValue(items[i],'prestamo')<1&&dijit.byId('gridProductos').store.getValue(items[i],'sincargo')<1){dijit.showTooltip('Los productos deben tener una cantidad mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}}
			else if(dijit.byId('oper').attr('value')[0]=='02'&&dijit.byId('oper').attr('value')[1]=='03'){if(dijit.byId('gridProductos').store.getValue(items[i],'sincargo')<1&&dijit.byId('gridProductos').store.getValue(items[i],'venta')<1){dijit.showTooltip('Los productos deben tener una cantidad mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}}
			else if(dijit.byId('oper').attr('value')[0]=='01'&&dijit.byId('oper').attr('value')[1]=='03'){if(dijit.byId('gridProductos').store.getValue(items[i],'prestamo')<1&&dijit.byId('gridProductos').store.getValue(items[i],'venta')<1){dijit.showTooltip('Los productos deben tener una cantidad mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}}
			}else{if(dijit.byId('oper').attr('value')[0]=='01'){if(dijit.byId('gridProductos').store.getValue(items[i],'prestamo')<1){dijit.showTooltip('Los productos deben tener una cantidad mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}}
			else if(dijit.byId('oper').attr('value')[0]=='02'){if(dijit.byId('gridProductos').store.getValue(items[i],'sincargo')<1){dijit.showTooltip('Los productos deben tener una cantidad mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}}
			else if(dijit.byId('oper').attr('value')[0]=='03'){if(dijit.byId('gridProductos').store.getValue(items[i],'venta')<1){dijit.showTooltip('Los productos deben tener una cantidad mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}}}
			ids+=dijit.byId('gridProductos').store.getValue(items[i],'producto_id');
			prestamo+=dijit.byId('gridProductos').store.getValue(items[i],'prestamo');
			sincargo+=dijit.byId('gridProductos').store.getValue(items[i],'sincargo');
			venta+=dijit.byId('gridProductos').store.getValue(items[i],'venta');
			if(i!=items.length-1){ids+=',';prestamo+='-';sincargo+='-';venta+='-';}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
		dijit.hideTooltip(dijit.byId('gridProductos').domNode);
		dijit.byId('dialogMaster').hide();
		procesando.show();
		urlValue+='&productos='+ids+'&importes_prestamo='+prestamo+'&importes_sincargo='+sincargo+'&importes_venta='+venta;
		//GrabaciÛn de datos en la base de datos
		dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
			if(response.errcode==""){
				BuscarMaster();
				CancelarMasterEditar();
				procesando.hide();
				Mensaje(response.errmsg,'mensaje','master');
			}else{procesando.hide();dijit.byId('dialogMaster').show();PopUp('Error',response.errmsg);}
		}});
	}
	if(dijit.byId('gridProductos').store){dijit.byId('gridProductos').store.fetch({query:{},onComplete:CompletarJSON});}
	else{dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMasterCopiar(){
	dijit.byId('dialogMaster').hide();
	dijit.byId('divCampos').destroyDescendants();
	dijit.byId('divBotones').destroyDescendants();
	dijit.byId('divPlanEspecial').destroyDescendants();
	dijit.byId('divOperacion').destroyDescendants();
	dijit.byId('gridProductos').setStore(null);dijit.byId('gridProductos').update();
	dojo.byId('divTotales').innerHTML='&nbsp;';
	dijit.byId(camposFormM[1]).destroy();
//	dijit.byId('clientes_id').destroy();
	dijit.byId('descripcion').destroy();
	//Limpio campos del formulario
	if(dijit.byId('expiracion_comodato')){dijit.byId('expiracion_comodato').destroy();}
	for(i=0;i<camposFormM.length;i++){if(dijit.byId(camposFormM[i])){dijit.byId(camposFormM[i]).destroy();}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	if(dijit.byId('archivo_id').attr('value')!=''){PopUp('Error','A&uacute;n existe un archivo adjunto');}
	//Elimino el dialogo
	dijit.byId('dialogMaster').hide();
	dijit.byId('divCampos').destroyDescendants();
	dijit.byId('divBotones').destroyDescendants();
	dijit.byId('divPlanEspecial').destroyDescendants();
	dijit.byId('divOperacion').destroyDescendants();
	if(dijit.byId('dep')){dijit.byId('dep').destroy();}
	if(dijit.byId('oper')){dijit.byId('oper').destroy();}
	if(dijit.byId('cond')){dijit.byId('cond').destroy();}
	if(dijit.byId('lim')){dijit.byId('lim').destroy();}
	if(dijit.byId('expir')){dijit.byId('expir').destroy();}
	dojo.byId('botonProductos').style.display = 'none';
	if(dijit.byId('clientes_desc')){dijit.byId('clientes_desc').destroy();}
	dijit.byId('marca').attr('value','');
	dijit.byId('prod_id').attr('value','');
	dijit.byId('desc').attr('value','');
	dijit.byId('gridOrigen').setStore(null);dijit.byId('gridOrigen').update();
	dijit.byId('gridDestinoP').setStore(null);dijit.byId('gridDestinoP').update();
	dijit.byId('gridOrigenP').setStore(null);dijit.byId('gridOrigenP').update();
	dijit.byId('gridProductos').setStore(null);dijit.byId('gridProductos').update();
	dojo.byId('divTotales').innerHTML='&nbsp;';
	//Limpio campos del formulario
	for(i=0;i<camposFormM.length;i++){if(dijit.byId(camposFormM[i])){dijit.byId(camposFormM[i]).destroy();}}	
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMasterEditar(){
	dijit.byId('gridProductos').edit.apply();
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	//Elimino el dialogo
	dijit.byId('dialogMaster').hide();
	dijit.byId('divCampos').destroyDescendants();
	dijit.byId('divBotones').destroyDescendants();
	dijit.byId('divPlanEspecial').destroyDescendants();
	dijit.byId('divOperacion').destroyDescendants();
	if(dijit.byId('dep')){dijit.byId('dep').destroy();}
	if(dijit.byId('oper')){dijit.byId('oper').destroy();}
	if(dijit.byId('cond')){dijit.byId('cond').destroy();}
	if(dijit.byId('lim')){dijit.byId('lim').destroy();}
	if(dijit.byId('expir')){dijit.byId('expir').destroy();}
	dojo.byId('botonProductos').style.display = 'none';
	if(dijit.byId('clientes_desc')){dijit.byId('clientes_desc').destroy();}
	dijit.byId('marca').attr('value','');
	dijit.byId('prod_id').attr('value','');
	dijit.byId('desc').attr('value','');
	dijit.byId('gridOrigen').setStore(null);dijit.byId('gridOrigen').update();
	dijit.byId('gridDestinoP').setStore(null);dijit.byId('gridDestinoP').update();
	dijit.byId('gridOrigenP').setStore(null);dijit.byId('gridOrigenP').update();
	dijit.byId('gridProductos').setStore(null);dijit.byId('gridProductos').update();
	dojo.byId('divTotales').innerHTML='&nbsp;';
	//Limpio campos del formulario
	for(i=0;i<camposFormM.length;i++){if(dijit.byId(camposFormM[i])){dijit.byId(camposFormM[i]).destroy();}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumnD(checkbox,grilla_id){
	if(dijit.byId(grilla_id).store){
		var Checkear = function(item){
			dijit.byId(grilla_id).store.setValue(item,columnasP[2],checkbox.checked);
		}
		dijit.byId(grilla_id).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId(grilla_id).store.save();}});
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumn(checkbox){
	if(dijit.byId('enviarMasivoWMaster')){dijit.byId('enviarMasivoWMaster').attr('disabled',false);}
	for(i=0;i<cantidadGrillas;i++){	
		if(dijit.byId('grilla'+i).store){
			var Checkear = function(item){
				dijit.byId('grilla'+i).store.setValue(item,'seleccionado',checkbox.checked);
			}
			dijit.byId('grilla'+i).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId('grilla'+i).store.save();}});
		}
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargaMasivaMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:410px;text-align:center;'});
	//Cracion de filtros
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'80',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:'archivo',label:'Archivo: ',promptMessage:'Seleccione un Archivo',required:true}));
	divCamposM.attr('content',tablaForm);
	tablaForm.startup();

	var widget = new extenciones.myFileInputAuto({id:'userfile',style:'width:141px;',name:'userfile',label:'Examinar',cancelText:'Cancelar',
					url: 'dbi/planes_carga_masiva.php?sid='+gvarSID,
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
							dijit.byId('dialogCargaMasivaMaster').destroyRecursive();
                            procesando.hide();
							PopUp('Error', response.errmsg);
						}
					}
				},dijit.byId('archivo').domNode);
	widget.startup();
	
	//Creacion de botones
	var botonCargar = new dijit.form.Button({label:'Cargar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){PopUp('Advertencia','Se van a cargar Planes Especiales de forma masiva, desea continuar?','GrabarCargaMasivaMaster()');}});
	dojo.place(botonCargar.domNode,divCamposM.domNode,'last');
	var botonPlantilla = new dijit.form.Button({label:'Descargar Plantilla',type:'button',iconClass:'excelIcon',onClick:function(){PopUp('Verificar','Antes de comenzar con la carga de datos, verifique la columna "R" de la plantilla.','BajarPlantillaMaster()');}});
	dojo.place(botonPlantilla.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){dijit.byId('dialogCargaMasivaMaster').hide();dijit.byId('dialogCargaMasivaMaster').destroyRecursive();dijit.byId('archivo').destroy();dijit.byId('userfile').destroyRecursive();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Carga Masiva de Planes Especiales',id:'dialogCargaMasivaMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajarPlantillaMaster() {
	var urlValue = 'data/carga_masiva_PlanesEspeciales.xls';
	document.location = urlValue;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarCargaMasivaMaster(){
	if(dijit.byId('userfile').fileInput.value==''){PopUp('Error','Debe seleccionar un archivo');return;}
	var urlValue = 'dbi/planes_carga_masiva.php?sid='+gvarSID;
    dijit.byId('userfile').attr('url',urlValue);
	procesando.show();
    dijit.byId('userfile')._sendFile();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajarAdjunto(){
	var adjValue = registroSeleccionado[0][columnasM[7]][0];//dijit.byId('grillaMaster').store.getValue(item,'adjunto');		
	if (adjValue == "on"){
		var urlValue ='dbi/planes_especiales_verAdjunto.php?sid='+gvarSID+'&plan_especial_id='+registroSeleccionado[0][columnasM[0]][0];
		console.log(urlValue);
		window.open(urlValue,"Bajar_Adjunto3","menubar=no,width=300,height=300,toolbar=no");		
	} else {
		Mensaje('El plan seleccionado no posee adjunto','error','master');return;
	}
}