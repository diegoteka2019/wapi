//TITULOS
var titulos =  new Array('Administraci&oacute;n de Contratos');
//DMLs
var dmlBuscarCabecera = '13604';
var dmlNuevoMaster = '13601';
var dmlEditarMaster = '13602'; 
var dmlEnviarEditarMaster = '12723';
var dmlVerDetalleEditar = '13614';
var dmlVerDetalleMaster = '13617';
var dmlVerDetalleGrilla = '13616';
var dmlVerDetalleGrilla2 = '13615';
var dmlEliminar = '13613';
var dmlGrabarMaster = '';
var dmlAuditoriaMaster = '13621';
//COLUMNAS
var columnasM = new Array('contrato_id','distribuidor_id','cliente_id','fecha','estado');
var columnasD = new Array('division_id','detalle','volumen','bultos');
var columnasMa = new Array('division_id','marca_id','detalleM','producto_id','detalleP','volumen','bultos','observaciones','clave');
var columnasDD = new Array('producto_id','producto_desc','importe');
var columnasC = new Array('cliente_id','razon_social','seleccionado');
var columnasCu = new Array('tipo_contable_id','tipo_contable_desc','seleccionado');
var columnasP = new Array('producto_id','producto_desc','seleccionado');
var columnasComp = new Array();
//DESCRIPCIONES
var descripcionesM = new Array('C&oacute;digo de Contrato','C&oacute;digo Distribuidor','C&oacute;digo Cliente PDV','Fecha Inicio Contrato','Estado');
var descripcionesD = new Array('Divisi&oacute;n ID','Divisi&oacute;n','Volumen del Contrato','Bultos de "Sin Cargo"');
var descripcionesMA = new Array('Divisi&oacute;n ID','Marca ID','Marca','Producto ID','Producto','Volumen','Bultos sin cargo','Observaciones');
var descripcionesC = new Array('Id','Razon Social','Selec.');
var descripcionesCu = new Array('Id','Descripci&oacute;n','Selec.');
var descripcionesP = new Array('Id','Descripci&oacute;n','Selec.');
var descripcionesComp = new Array('Tipo Comp.','Serie','N&uacute;mero','Importe','Importe Base','Importe Impuesto');
//PRIMARY KEY
var clavesM = new Array('contrato_id');
//FILTROS 
var filtroMaster = new Array('area_id','subregion_id','cliente_id','contrato_id','pdv_cliente','vigencia_fecha','estado');
var labelFiltroMaster = new Array('Area: ','Sub Regi&oacute;n: ','C&oacute;digo Distribuidor: ','C&oacute;digo de Contrato: ','C&oacute;digo Cliente PDV: ','Fecha Inicio Contrato: ','Estado: ');
var mensajeFiltroMaster = new Array('Seleccione el Area','Seleccione la Sub Regi&oacute;n','Seleccione C&oacute;digo Distribuidor','Ingrese el C&oacute;digo de Contrato','Ingrese el C&oacute;digo Cliente PDV','Seleccione la Fecha Inicio Contrato','Seleccione el Estado');
var requeridoFiltroMaster = new Array(false,false,false,false,false,false,false);
var searchAttrFiltroMaster = new Array('detalle','detalle','detalle','','','','detalle');
var tipoFiltroMaster = new Array('FilteringSelect','FilteringSelect','FilteringSelect','NumberTextBox','ValidationTextBox','DateTextBox','FilteringSelect');
var selectFiltroMaster = new Array('13618','13620','13605','','','','13606');
//FORMULARIO
var camposFormM = new Array('distribuidor_id','cliente_id','razon_social','estado','tipo_contrato','fecha_inicio','maco','efectivo','monto','cuotas','forma_pago');
var labelFormM = new Array('C&oacute;digo Distribuidor: ','C&oacute;digo Cliente PDV: ','Raz&oacute;n Social de PDV: ','Estado: ','Tipo de Contrato: ','Fecha de Inicio de Contrato: ','Afectaci&oacute;n de MACO(%): ','Pago en Efectivo: ','Monto Efectivo: ','Cantidad de Cuotas: ','Forma de Pago Sin Cargo: ');
var requeridoFormM = new Array(true,true,true,false,true,true,true,false,false,true,true);
var mensajesFormM = new Array('Seleccione el C&oacute;digo Distribuidor','Ingrese el C&oacute;digo Cliente PDV','Ingrese la Raz&oacute;n Social de PDV','Seleccione el Estado','Seleccione el Tipo de Contrato','Seleccione una Fecha de Inicio de Contrato','Ingrese la Afectaci&oacute;n de MACO','Seleccione si el Pago es en Efectivo','Ingrese el Monto Efectivo','Ingrese la Cantidad de Cuotas','Ingrese la Forma de Pago Sin Cargo');
var searchAttrFormM = new Array('detalle','','','detalle','detalle','','','','','','');
var selectFormM = new Array('13611','','','13607','13612','','','','','','');
var registroSeleccionado = null;
var registroSeleccionadoD = null;
var depositoStore = {identifier:'id',label:'detalle',items:[{id:'0',detalle:'No es posible determinar'}]};
//Carga las estructuras de las tablas
var layoutMaster = [
    {width: "auto", field: columnasM[0], name: descripcionesM[0]},
    {width: "auto", field: columnasM[1], name: descripcionesM[1]},
    {width: "auto", field: columnasM[2], name: descripcionesM[2]},
	{width: "auto", field: columnasM[3], name: descripcionesM[3]},
	{width: "auto", field: columnasM[4], name: descripcionesM[4]}];
var validacionDivisiones = function(value){
	dijit.hideTooltip(dijit.byId('gridDivisiones').domNode);
	return value;
}
var validacionMarcas = function(value){
	dijit.hideTooltip(dijit.byId('gridMarcas').domNode);
	return value;
}
var layoutDivisiones = [
    {width: "100px", field: columnasD[0], name: descripcionesD[0],hidden:true},
    {width: "100px", field: columnasD[1], name: descripcionesD[1]},
    {width: "65px", field: columnasD[2], name: descripcionesD[2],editable:true,formatter:validacionDivisiones},
	{width: "65px", field: columnasD[3], name: descripcionesD[3],editable:true,formatter:validacionDivisiones}];
var layoutMarcas = [
    {width: "105px", field: columnasMa[2], name: descripcionesMA[2]},
    {width: "100px", field: columnasMa[0], name: descripcionesMA[0],hidden:true},
    {width: "100px", field: columnasMa[1], name: descripcionesMA[1],hidden:true},
    {width: "100px", field: columnasMa[3], name: descripcionesMA[3],hidden:true},
    {width: "105px", field: columnasMa[4], name: descripcionesMA[4]},
	{width: "65px", field: columnasMa[5], name: descripcionesMA[5],editable:true,formatter:validacionMarcas},
    {width: "65px", field: columnasMa[6], name: descripcionesMA[6],editable:true,formatter:validacionMarcas},
	{width: "100px", field: columnasMa[7], name: descripcionesMA[7],editable:true},
	{width: "100px", field: columnasMa[8], name: '',hidden:true}];
var layoutDivisionesD = [
    {width: "100px", field: columnasD[0], name: descripcionesD[0],hidden:true},
    {width: "100px", field: columnasD[1], name: descripcionesD[1]},
    {width: "65px", field: columnasD[2], name: descripcionesD[2]},
	{width: "65px", field: columnasD[3], name: descripcionesD[3]}];
var layoutMarcasD = [
    {width: "105px", field: columnasMa[2], name: descripcionesMA[2]},
    {width: "100px", field: columnasMa[0], name: descripcionesMA[0],hidden:true},
    {width: "100px", field: columnasMa[1], name: descripcionesMA[1],hidden:true},
    {width: "100px", field: columnasMa[3], name: descripcionesMA[3],hidden:true},
    {width: "105px", field: columnasMa[4], name: descripcionesMA[4]},
	{width: "65px", field: columnasMa[5], name: descripcionesMA[5]},
    {width: "65px", field: columnasMa[6], name: descripcionesMA[6]},
	{width: "100px", field: columnasMa[7], name: descripcionesMA[7]},
	{width: "100px", field: columnasMa[8], name: '',hidden:true}];
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
        dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'verDetalleMaster',style:'padding-left:3px;padding-right:3px;',label:'Ver Detalle',showLabel:false,iconClass:'verDetalleIcon',disabled:true,onClick:function(){VerDetalleMaster();}}));    
	}
	ArmadoFiltroYAuditoria();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedMaster(){
	registroSeleccionado = dijit.byId('gridMaster').selection.getSelected();
	//for(i=0;i<cantidadGrillas;i++){if(dijit.byId('grilla'+i)!=grilla){dijit.byId('grilla'+i).selection.clear();}}
	HabilitarBotonesMaster(2,false);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function onSelectedDivision(){
	aux = gridDivisiones.selection.getSelected();
	dijit.byId('gridMarcas').edit.apply();
	gridMarcas.filter({division_id:aux[0]['division_id'][0]});
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
			if(tipoFiltroMaster[i]=='ValidationTextBox'){tablaFiltros.addChild(new dijit.form.ValidationTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='NumberTextBox'){tablaFiltros.addChild(new dijit.form.ValidationTextBox({id:'filtro'+i,label:labelFiltroMaster[i],promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',constraints:{datePattern:'dd-MM-yyyy'},promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],onChange:function(){if(tipoFiltroMaster[parseInt(this.id.charAt(6))+1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))+1)).constraints.min = arguments[0];}else if(tipoFiltroMaster[parseInt(this.id.charAt(6))-1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))-1)).constraints.max = arguments[0];}}}));}
			if(tipoFiltroMaster[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[i]})}));}}
		
		dijit.byId('filtro1').attr('disabled',true);
		dijit.byId('filtro2').attr('disabled',true);
		AutoCompletar(dijit.byId('filtro0'));
		//agrego la division a la busqueda de marcas
		dijit.byId('filtro1').store.url += '&area_id='+dijit.byId('filtro0').attr('value');
		//Borrado de subregiones al cambiar la division
		dijit.byId('filtro0').onChange= function(value){
			if(value!=''){
				dijit.byId('filtro1').attr('disabled',false);
				dijit.byId('filtro1').attr('required',true);
				dijit.byId('filtro1').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[1]+'&area_id='+value}));
				dijit.byId('filtro1').store.fetch();}
			else{dijit.byId('filtro1').attr('disabled',true);
				dijit.byId('filtro1').attr('required',false);}
			dijit.byId('filtro1').attr('value',null);}
		
		//agrego la division a la busqueda de marcas
		dijit.byId('filtro2').store.url += '&subregion_id='+dijit.byId('filtro1').attr('value');
		//Borrado de subregiones al cambiar la division
		dijit.byId('filtro1').onChange= function(value){
			if(value!=''){
				dijit.byId('filtro2').attr('disabled',false);
				dijit.byId('filtro2').attr('required',true);
				dijit.byId('filtro2').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[2]+'&subregion_id='+value}));
				dijit.byId('filtro2').store.fetch();}
			else{dijit.byId('filtro2').attr('disabled',true);
				dijit.byId('filtro2').attr('required',false);}
			dijit.byId('filtro2').attr('value',null);}
		
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
	if(dijit.byId('filtro3').attr('value')){BuscarMaster();dijit.byId('filtrosMaster').onCancel();}
	else if(dijit.byId('filtrosMaster').validate()){BuscarMaster();dijit.byId('filtrosMaster').onCancel();}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMaster(){
	//Limpiar el contentpane
	registroSeleccionado = null;
	//dijit.byId('gridContainer').destroyDescendants();
	//Obtengo Contratos
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarCabecera;
	if(filtroMaster.length > 0){
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='DateTextBox'){urlValue = urlValue +'&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).valueNode.value;}
			else{urlValue +='&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');}
		}
	}
	//Muestro los datos obtenidos en una grilla dinamica
	gridMaster.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	gridMaster.attr("autoWidth",true);
	gridMaster.adaptWidth();
	gridMaster.selection.clear();
	HabilitarBotonesMaster(1,false);
	HabilitarBotonesMaster(2,true);
	//Muestro la cantidad obtenida
	gridMaster.store.fetch({query:{},onComplete:function(items,request){if(items.length==0){Mensaje('No se han encontrado registros','error','master');}}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarMaster(){
	//Validacion
	if(registroSeleccionado[0][columnasM[4]]!='ED' && registroSeleccionado[0][columnasM[4]]!='VIG'){Mensaje('No es posible eliminar el contrato, pues no se encuentra en estado de EDICION o VIGENTE','error','master');return;}
	//Generación de la URL y el mensaje de advertencia
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlEliminar;
	mensaje='Est&aacute; seguro que desea eliminar el contrato <b>'+registroSeleccionado[0][columnasM[0]]+' ?</b>';
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
			Mensaje(response.errmsg,'mensaje','master');
		}else{procesando.hide();PopUp('Error', response.errmsg);}
		}
	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function NuevoMaster(){
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
	if(dijit.byId('area')){dijit.byId('area').destroy();}tablaForm.addChild(new dijit.form.FilteringSelect({id:'area',pageSize:15,style:'width:130px;',label:'Area: ',searchAttr:'detalle',promptMessage:'Seleccione un Area',required:false,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=13618'}),onChange:function(value){dijit.byId('subregion').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=13619&area_id='+value}));dijit.byId('subregion').store.fetch();dijit.byId('subregion').attr('value',null);AutoCompletar(dijit.byId('subregion'));}}));
	AutoCompletar(dijit.byId('area'));
	if(dijit.byId('subregion')){dijit.byId('subregion').destroy();}tablaForm.addChild(new dijit.form.FilteringSelect({id:'subregion',pageSize:15,style:'width:130px;',label:'Sub Regi&oacute;n: ',searchAttr:'detalle',promptMessage:'Seleccione una Sub Regi&oacute;n',required:false,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=13619&area_id='+dijit.byId('area').attr('value')}),onChange:function(value){dijit.byId(camposFormM[0]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=13611&subregion_id='+value}));dijit.byId(camposFormM[0]).store.fetch();dijit.byId(camposFormM[0]).attr('value',null);AutoCompletar(dijit.byId(camposFormM[0]));}}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[0],pageSize:15,style:'width:130px;',label:labelFormM[0],searchAttr:searchAttrFormM[0],promptMessage:mensajesFormM[0],required:requeridoFormM[0],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[0]+'&subregion_id='+dijit.byId('subregion').attr('value')})}));
	tablaForm.addChild(new dijit.form.NumberTextBox({id:camposFormM[1],maxLength:10,style:'width:130px;',label:labelFormM[1],required:requeridoFormM[1]}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[2],maxLength:50,style:'width:130px;',label:labelFormM[2],required:requeridoFormM[2]}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[3],style:'width:130px;',label:labelFormM[3],searchAttr:searchAttrFormM[3],promptMessage:mensajesFormM[3],required:requeridoFormM[3],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[3]})}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[4],style:'width:130px;',label:labelFormM[4],searchAttr:searchAttrFormM[4],promptMessage:mensajesFormM[4],required:requeridoFormM[4],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[4]})}));
	tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[5],constraints:{datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[5],label:labelFormM[5]}));
	tablaForm.addChild(new dijit.form.NumberTextBox({id:camposFormM[6],maxLength:5,style:'width:130px;',label:labelFormM[6],required:requeridoFormM[6]}));
	tablaForm.addChild(new dijit.form.CheckBox({id:camposFormM[7],title:labelFormM[7],promptMessage:mensajesFormM[7],required:requeridoFormM[7],onChange:function(value){dijit.byId(camposFormM[8]).attr('readOnly',!value);}}));
	tablaForm.addChild(new dijit.form.NumberTextBox({id:camposFormM[8],style:'width:130px;',label:labelFormM[8],readOnly:true,required:requeridoFormM[8]}));
	tablaForm.addChild(new dijit.form.NumberTextBox({id:camposFormM[9],style:'width:130px;',label:labelFormM[9],required:requeridoFormM[9]}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[10],maxLength:50,style:'width:130px;',label:labelFormM[10],required:requeridoFormM[10]}));
	dijit.byId('divCampos').attr('content',tablaForm);
	tablaForm.startup();
	//Creacion de botones
	var botonDivision = new dijit.form.Button({label:'Ver Divisiones',type:'button',iconClass:'verDetalleIcon',onClick:function(){SeleccionarDivisiones();}});
	dojo.place(botonDivision.domNode,dijit.byId("divBotones").domNode,'last');
	var botonMarca = new dijit.form.Button({id:'botonMarca',label:'Ver Marcas',iconClass:'verDetalleIcon',style:'display:none;',type:'button',onClick:function(){SeleccionarMarcas();}});
	dojo.place(botonMarca.domNode,dijit.byId("divBotones").domNode,'last');
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlGrabarMaster = dmlNuevoMaster;GrabarMaster();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	dijit.byId("dialogMaster").show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SeleccionarDivisiones(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:250px;text-align:center;'});
	//Creacion del formulario
	var tablaDivision = new dojox.layout.TableContainer({style:'text-align:left;'});
	var divisiones = new dojox.form.CheckedMultiSelect({style:'height:72px;width:220px;',multiple:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=13608',urlPreventCache:true})});
	tablaDivision.addChild(divisiones);
	divCamposM.attr('content',tablaDivision);
	//Creacion de botones
	var botonSeleccionar = new dijit.form.Button({label:'Seleccionar',iconClass:'aceptarIcon',type:'button',onClick:function(){
		dijit.byId('gridDivisiones').setStore(null);
		var storeDestino = {identifier: 'division_id', label: 'detalle', items: []};
		dijit.byId('gridDivisiones').setStore(new dojo.data.ItemFileWriteStore({data: storeDestino}));
		dijit.byId('gridDivisiones').attr('autoWidth',true);
		if(divisiones.attr('value')==''){
			dijit.byId('botonMarca').attr('style','display:none;');
		}else{
			dijit.byId('botonMarca').attr('style','display:inline;');
			for(i=0;i<divisiones.options.length;i++){
				if(divisiones.options[i].selected==true){
					dijit.byId('gridDivisiones').store.newItem({division_id:divisiones.options[i].value,detalle:divisiones.options[i].label,volumen:'0',bultos:'0'});
				}
			}
		}
		dialogM.hide();
		dialogM.destroyRecursive();
		}});
	dojo.place(botonSeleccionar.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){
		dialogM.hide();
		dialogM.destroyRecursive();
		}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Seleccione las Divisiones'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Se muestra el dialogo
	dialogM.show();	
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SeleccionarMarcas(){
	if(!dijit.byId("gridDivisiones").store){SeleccionarDivisiones();return;}
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:480px;text-align:center;'});
	//Obtengo marcas/productos selecciondas
	var divisionesAux = '';
	var ObtenerIds = function(items,request){for(i=0;i<items.length;i++){divisionesAux += items[i]['division_id'];if(i!=items.length-1){divisionesAux += ',';}}}
	dijit.byId('gridDivisiones').store.fetch({query:{},onComplete:ObtenerIds});
	//Creacion del formulario
	var tablaMarcas2 = new dojox.layout.TableContainer({cols:2,labelWidth:'130',style:'text-align:left;'});
	tablaMarcas2.addChild(new dijit.form.CheckBox({title:'Todas las marcas: ',required:false,onChange:function(value){dijit.byId('listaMarcas').invertSelection();}}));
	//tablaMarcas2.addChild(new dijit.form.CheckBox({title:'Todos los productos: ',required:false,onChange:function(value){dijit.byId('gridProductos').invertSelection();}}));
	divCamposM.attr('content',tablaMarcas2);
	var tablaMarcas = new dojox.layout.TableContainer({cols:2,style:'text-align:left;'});
	if(dijit.byId('listaMarcas')){dijit.byId('listaMarcas').destroy();}
	tablaMarcas.addChild(new dojox.form.CheckedMultiSelect({id:'listaMarcas',style:'height:300px;width:220px;',multiple:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=13609&filter_value='+divisionesAux,urlPreventCache:true}),onChange:function(value){dijit.byId('gridProductos').setStore(new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=13610&filter_value='+value+'&filter_value2='+divisionesAux,urlPreventCache:true}));}}));
	if(dijit.byId('gridProductos')){dijit.byId('gridProductos').destroy();}
	tablaMarcas.addChild(new dojox.form.CheckedMultiSelect({id:'gridProductos',style:'height:300px;width:220px;',multiple:true}));
	dojo.place(tablaMarcas.domNode,divCamposM.domNode,'last');
	tablaMarcas.startup();
	//Creacion de botones
	var botonSeleccionar = new dijit.form.Button({label:'Seleccionar',iconClass:'aceptarIcon',type:'button',onClick:function(){
		dijit.byId('gridMarcas').setStore(null);
		var storeDestino = {identifier: 'clave', label: 'detalle', items: []};
		dijit.byId('gridMarcas').setStore(new dojo.data.ItemFileWriteStore({data: storeDestino}));
		dijit.byId('gridMarcas').attr('autoWidth',true);
		var flag=0;
		for(j=0;j<dijit.byId('listaMarcas').options.length;j++){
			if(dijit.byId('listaMarcas').options[j].selected==true){
				flag=0;
				for(i=0;i<dijit.byId('gridProductos').options.length;i++){
					if(dijit.byId('gridProductos').options[i].selected==true && dijit.byId('gridProductos').options[i].item['marca_id'][0]==dijit.byId('listaMarcas').options[j].item['value'][0]){flag=1;dijit.byId('gridMarcas').store.newItem({clave:dijit.byId('listaMarcas').options[j].item['value'][0]+dijit.byId('gridProductos').options[i].item['value'][0],producto_id:dijit.byId('gridProductos').options[i].item['value'][0],division_id:dijit.byId('gridProductos').options[i].item['division_id'][0],marca_id:dijit.byId('gridProductos').options[i].item['marca_id'][0],detalleM:dijit.byId('gridProductos').options[i].item['marca_desc'][0],detalleP:dijit.byId('gridProductos').options[i].item['detalle'][0],volumen:'0',bultos:'0',observaciones:''});}
				}
				if(flag==0){
					dijit.byId('gridMarcas').store.newItem({clave:dijit.byId('listaMarcas').options[j].item['value'][0],producto_id:'',division_id:dijit.byId('listaMarcas').options[j].item['division_id'][0],marca_id:dijit.byId('listaMarcas').options[j].item['value'][0],detalleM:dijit.byId('listaMarcas').options[j].item['detalle'][0],detalleP:'',volumen:'0',bultos:'0',observaciones:''});
				}
			}
		}
		dialogM.hide();
		dialogM.destroyRecursive();
		}});
	dojo.place(botonSeleccionar.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){
		dialogM.hide();
		dialogM.destroyRecursive();
		}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Seleccione las Marcas/Productos'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Se muestra el dialogo
	dialogM.show();	
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ChangePlanEspecial(){
	dijit.byId(camposFormM[8]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[8]+'&tipo_plan_especial_id='+dijit.byId(camposFormM[7]).attr('value')}));
	dijit.byId(camposFormM[8]).store.fetch();
	dijit.byId(camposFormM[8]).attr('value',null);
	dijit.byId('divPlanEspecial').destroyDescendants();
	dijit.byId('divOperacion').destroyDescendants();
	dojo.byId('botonProductos').style.display = 'none';
	var planEspecialForm = new dojox.layout.TableContainer({cols:1,labelWidth:'130',style:'text-align:left;'});
	if(dijit.byId('oper')){dijit.byId('oper').destroy();}
	planEspecialForm.addChild(new dijit.form.FilteringSelect({id:'oper',style:'width:250px;',label:'Operaci&oacute;n: ',searchAttr:'detalle',promptMessage:'Seleccione un Tipo de Operaci&oacute;n',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12714&tipo_plan_especial_id='+dijit.byId(camposFormM[7]).attr('value')}),onChange:function(value){ChangeOperacion(value);}}));
	AutoCompletar(dijit.byId('oper'));
	dijit.byId('divPlanEspecial').attr('content',planEspecialForm);
	planEspecialForm.startup();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ChangeOperacion(value){
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
	if(dijit.byId('tipo_plan_especial_id').attr('value')=='01'){ /* ENVASES */
		if(value=='01'){/* PRESTAMO EN COMODATO */
			operacionForm.addChild(new dijit.form.DateTextBox({id:'expir',constraints:{datePattern:'dd-MM-yyyy'},style:'width:250px;',required:true,label:'Fecha de Expiraci&oacute;n: '}));
			operacionForm.addChild(new dijit.form.FilteringSelect({id:'cond',style:'width:250px;',label:'Condici&oacute;n de Pago: ',searchAttr:'detalle',promptMessage:'Seleccione una Condici&oacute;n de Pago',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12716'})}));
			operacionForm.addChild(new dijit.form.FilteringSelect({id:'dep',style:'width:250px;',label:'Dep&oacute;sito: ',searchAttr:'detalle',promptMessage:'Seleccione un Dep&oacute;sito',required:true,store:depositos}));
			AutoCompletar(dijit.byId('dep'));
			dijit.byId('gridProductos').attr('structure',layoutDialogPrestamo);
			dojo.byId('botonProductos').style.display = 'block';
		}
		if(value=='02'){/* SIN CARGO */
			operacionForm.addChild(new dijit.form.FilteringSelect({id:'dep',style:'width:250px;',label:'Dep&oacute;sito: ',searchAttr:'detalle',promptMessage:'Seleccione un Dep&oacute;sito',required:true,store:depositos}));
			AutoCompletar(dijit.byId('dep'));
			dijit.byId('gridProductos').attr('structure',layoutDialogSinCargo);
			dojo.byId('botonProductos').style.display = 'block';
		}
		if(value=='03'){/* VENTA */
			operacionForm.addChild(new dijit.form.FilteringSelect({id:'lim',style:'width:250px;',label:'L&iacute;mite de Cr&eacute;dito: ',searchAttr:'detalle',promptMessage:'Seleccione un L&iacute;mite de Cr&eacute;dito',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12715&tipo_plan_especial_id='+dijit.byId('tipo_plan_especial_id').attr('value')+'&tipo_operacion_id='+value})}));
			AutoCompletar(dijit.byId('lim'));
			operacionForm.addChild(new dijit.form.FilteringSelect({id:'cond',style:'width:250px;',label:'Condici&oacute;n de Pago: ',searchAttr:'detalle',promptMessage:'Seleccione una Condici&oacute;n de Pago',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12716'})}));
			operacionForm.addChild(new dijit.form.FilteringSelect({id:'dep',style:'width:250px;',label:'Dep&oacute;sito: ',searchAttr:'detalle',promptMessage:'Seleccione un Dep&oacute;sito',required:true,store:depositos}));
			AutoCompletar(dijit.byId('dep'));
			dojo.byId('botonProductos').style.display = 'block';
		}
	}else if(dijit.byId('tipo_plan_especial_id').attr('value')=='02'){ /* POP */
		operacionForm.addChild(new dijit.form.FilteringSelect({id:'lim',style:'width:250px;',label:'L&iacute;mite de Cr&eacute;dito: ',searchAttr:'detalle',promptMessage:'Seleccione un L&iacute;mite de Cr&eacute;dito',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12715&tipo_plan_especial_id='+dijit.byId('tipo_plan_especial_id').attr('value')+'&tipo_operacion_id='+value})}));
		AutoCompletar(dijit.byId('lim'));
		operacionForm.addChild(new dijit.form.FilteringSelect({id:'cond',style:'width:250px;',label:'Condici&oacute;n de Pago: ',searchAttr:'detalle',promptMessage:'Seleccione una Condici&oacute;n de Pago',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12716'})}));
		dojo.byId('botonProductos').style.display = 'block';
	}else if(dijit.byId('tipo_plan_especial_id').attr('value')=='03'){ /* PRODUCTO */
		operacionForm.addChild(new dijit.form.FilteringSelect({id:'lim',style:'width:250px;',label:'L&iacute;mite de Cr&eacute;dito: ',searchAttr:'detalle',promptMessage:'Seleccione un L&iacute;mite de Cr&eacute;dito',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12715&tipo_plan_especial_id='+dijit.byId('tipo_plan_especial_id').attr('value')+'&tipo_operacion_id='+value})}));
		AutoCompletar(dijit.byId('lim'));
		operacionForm.addChild(new dijit.form.FilteringSelect({id:'cond',style:'width:250px;',label:'Condici&oacute;n de Pago: ',searchAttr:'detalle',promptMessage:'Seleccione una Condici&oacute;n de Pago',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12716'})}));
		dojo.byId('botonProductos').style.display = 'block';
	}
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
function AuditoriaMaster(){
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlAuditoriaMaster;
	var items = gridMaster.selection.getSelected();
	for(i=0;i<clavesM.length;i++){urlValue +='&'+clavesM[i]+'='+items[0][columnasM[i]];}
	//Carga los valores del registro seleccionado
	var registroCargado = new dojo.data.ItemFileReadStore({url:urlValue,urlPreventCache:true});
	var gotData = function(items,request){
		for(i=0;i<camposAuditoriaM.length;i++){dijit.byId(camposAuditoriaM[i]).attr('value',registroCargado.getValue(items[0],camposAuditoriaM[i]));}}
	registroCargado.fetch({query:{},onComplete:gotData});	
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
	dijit.byId('dialogProductos').show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductos(){
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
		dijit.byId("dialogProductos").hide();
	}
	dijit.byId('gridProductos').store.fetch({query:{},onItem:ActualizarGrillaE,onComplete:GrabarGrilla});
	//Agrego los nuevos items
	var ActualizarGrilla = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('gridProductos').store.fetchItemByIdentity({
				identity:dijit.byId('gridDestinoP').store.getValue(items[i],'producto_id'),
				onItem:function(item){
					if(!item){dijit.byId('gridProductos').store.newItem({producto_id:dijit.byId('gridDestinoP').store.getValue(items[i],'producto_id'), producto_desc:dijit.byId('gridDestinoP').store.getValue(items[i],'producto_desc'),importe:'0'});}
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
	dijit.byId('gridProductos').store.fetch({query:{},onComplete:ActualizarGrilla});
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
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[2]+'&subregion_id='+dijit.byId('subregion_id').attr('value')+'&cliente_id='+dijit.byId('cli_id').valueNode.value+'&razon_social='+dijit.byId('razon').attr('value');
	dijit.byId('gridOrigen').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigen').attr('autoWidth',true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarProductos(){
	if(dijit.byId('tipo_plan_especial_id').attr('value')=='02'){var dml='12717';}else if(dijit.byId('tipo_plan_especial_id').attr('value')=='01'){var dml='12727';}else if(dijit.byId('tipo_plan_especial_id').attr('value')=='03'){var dml='12718';}
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dml+'&division_id='+dijit.byId('division_id').attr('value')+'&producto_id='+dijit.byId('prod_id').valueNode.value+'&producto_desc='+dijit.byId('desc').attr('value')+'&marca_desc='+dijit.byId('marca').attr('value');
	dijit.byId('gridOrigenP').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigenP').attr('autoWidth',true);
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
function EditarMaster(){
	//Validacion
	if(registroSeleccionado[0][columnasM[4]]!='ED'){Mensaje('No es posible editar el contrato, pues no se encuentra en estado de EDICION','error','master');return;}
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlVerDetalleEditar+'&contrato_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		//Creacion del formulario
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['contrato_id'][0],style:'width:130px;',label:'Contrato n&deg;: ',readOnly:true}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['distribuidor'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));
		//tablaForm.addChild(new dijit.form.FilteringSelect({readOnly:true,id:camposFormM[0],value:items[0]['distribuidor_id'][0],style:'width:130px;',label:labelFormM[0],searchAttr:searchAttrFormM[0],promptMessage:mensajesFormM[0],required:requeridoFormM[0],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[0]})}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({readOnly:true,id:camposFormM[1],value:items[0]['cliente_id'][0],style:'width:130px;',label:labelFormM[1],required:requeridoFormM[1]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({readOnly:true,id:camposFormM[2],value:items[0]['pdv_razon_social'][0],style:'width:130px;',label:labelFormM[2],required:requeridoFormM[2]}));
		tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[3],value:items[0]['estado'][0],style:'width:130px;',label:labelFormM[3],searchAttr:searchAttrFormM[3],promptMessage:mensajesFormM[3],required:requeridoFormM[3],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[3]})}));
		tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[4],value:items[0]['tipo_contrato_id'][0],style:'width:130px;',label:labelFormM[4],searchAttr:searchAttrFormM[4],promptMessage:mensajesFormM[4],required:requeridoFormM[4],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[4]})}));
		tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[5],value:new Date(items[0]['fecha'][0].substring(6,10),items[0]['fecha'][0].substring(3,5),items[0]['fecha'][0].substring(0,2)),constraints:{datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[5],label:labelFormM[5]}));
		tablaForm.addChild(new dijit.form.NumberTextBox({id:camposFormM[6],value:items[0]['afecta'][0],style:'width:130px;',label:labelFormM[6],required:requeridoFormM[6]}));
		tablaForm.addChild(new dijit.form.CheckBox({id:camposFormM[7],title:labelFormM[7],promptMessage:mensajesFormM[7],required:requeridoFormM[7],onChange:function(value){dijit.byId(camposFormM[8]).attr('readOnly',!value);}}));
		tablaForm.addChild(new dijit.form.NumberTextBox({id:camposFormM[8],value:items[0]['monto_efectivo'][0],style:'width:130px;',label:labelFormM[8],readOnly:true,required:requeridoFormM[8]}));
		if(items[0]['pago_efectivo'][0] == 'ON'){dijit.byId(camposFormM[7]).attr('checked',true);dijit.byId(camposFormM[8]).attr('readOnly',!dijit.byId(camposFormM[7]).attr('value'));}
		tablaForm.addChild(new dijit.form.NumberTextBox({id:camposFormM[9],value:items[0]['cantidad_cuotas'][0],style:'width:130px;',label:labelFormM[9],required:requeridoFormM[9]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[10],value:items[0]['forma_pago_sc'][0],style:'width:130px;',label:labelFormM[10],required:requeridoFormM[10]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[0],value:items[0]['distribuidor_id'][0],style:'visibility:hidden;width:0px;',label:''}));
		dijit.byId('divCampos').attr('content',tablaForm);
		tablaForm.startup();
		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlVerDetalleGrilla+'&contrato_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarDivisionesEdicion(urlValue);
		urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlVerDetalleGrilla2+'&contrato_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarMarcasEdicion(urlValue);
		//Elimino la capacidad de cerrar el dialogo por medio de la "X"
		dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
		dijit.byId("dialogMaster").show();
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
	//Creacion de botones
	var botonDivision = new dijit.form.Button({label:'Ver Divisiones',iconClass:'verDetalleIcon',type:'button',onClick:function(){SeleccionarDivisiones();}});
	dojo.place(botonDivision.domNode,dijit.byId("divBotones").domNode,'last');
	var botonMarca = new dijit.form.Button({id:'botonMarca',label:'Ver Marcas',iconClass:'verDetalleIcon',type:'button',onClick:function(){SeleccionarMarcas();}});
	dojo.place(botonMarca.domNode,dijit.byId("divBotones").domNode,'last');
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlGrabarMaster = dmlEditarMaster;GrabarMasterEditar();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
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
	if(planesChecked==''){Mensaje('Seleccione al menos un Comprobante SP','error','master');return;}
	//Grabación de datos en la base de datos
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
function CargarDivisionesEdicion(urlValue){
	var storeDivisiones = new dojo.data.ItemFileWriteStore({clearOnClose:true,url:urlValue});
	if(!dijit.byId('gridDivisiones').store){
		var storeVacio = {identifier: 'division_id', label: 'detalle', items: []};
		dijit.byId('gridDivisiones').setStore(new dojo.data.ItemFileWriteStore({data: storeVacio}));
		dijit.byId('gridDivisiones').attr("autoWidth",true);
		dijit.byId('gridDivisiones').update();
	}
	//Agrego los nuevos items
	var ActualizarGrilla = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('gridDivisiones').store.fetchItemByIdentity({
				identity:storeDivisiones.getValue(items[i],'division_id'),
				onItem:function(item){
					if(!item){dijit.byId('gridDivisiones').store.newItem({division_id:storeDivisiones.getValue(items[i],'division_id'), detalle:storeDivisiones.getValue(items[i],'division'),volumen:storeDivisiones.getValue(items[i],'volumen'),bultos:storeDivisiones.getValue(items[i],'bultos_sc')});}
				}
			});
		}
		dijit.byId('gridDivisiones').store.save();
	}
	storeDivisiones.fetch({query:{},onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarMarcasEdicion(urlValue){
	var storeMarcas = new dojo.data.ItemFileWriteStore({clearOnClose:true,url:urlValue});
	if(!dijit.byId('gridMarcas').store){
		var storeVacio = {identifier: 'clave', label: 'producto_desc', items: []};
		dijit.byId('gridMarcas').setStore(new dojo.data.ItemFileWriteStore({data: storeVacio}));
		dijit.byId('gridMarcas').attr("autoWidth",true);
		dijit.byId('gridMarcas').update();
	}
	//Agrego los nuevos items
	var ActualizarGrilla = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('gridMarcas').store.fetchItemByIdentity({
				identity:storeMarcas.getValue(items[i],'producto_id'),
				onItem:function(item){
					if(!item){dijit.byId('gridMarcas').store.newItem({clave:storeMarcas.getValue(items[i],'contrato_producto_id'),division_id:storeMarcas.getValue(items[i],'division_id'),marca_id:storeMarcas.getValue(items[i],'marca_id'),detalleM:storeMarcas.getValue(items[i],'marca'),producto_id:storeMarcas.getValue(items[i],'producto_id'), detalleP:storeMarcas.getValue(items[i],'producto'),volumen:storeMarcas.getValue(items[i],'volumen'),bultos:storeMarcas.getValue(items[i],'bultos_sc'),observaciones:storeMarcas.getValue(items[i],'observaciones')});}
				}
			});
		}
		dijit.byId('gridMarcas').store.save();
	}
	storeMarcas.fetch({query:{},onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDetalleMaster(){
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlVerDetalleMaster+'&contrato_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		//Creacion del formulario
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['contrato_id'][0],style:'width:130px;',label:'Contrato n&deg;: ',readOnly:true}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['distribuidor'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['cliente_id'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['pdv_razon_social'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['detalle_estado'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['tipo_contrato'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['fecha'][0],style:'width:130px;',label:labelFormM[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['afecta'][0],style:'width:130px;',label:labelFormM[6],readOnly:true}));
		if(items[0]['pago_efectivo'][0] == 'ON'){tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['monto_efectivo'][0],style:'width:130px;',label:labelFormM[8],readOnly:true}));}
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['cantidad_cuotas'][0],style:'width:130px;',label:labelFormM[9],readOnly:true}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['forma_pago_sc'][0],style:'width:130px;',label:labelFormM[10],readOnly:true}));
		dijit.byId('divCampos').attr('content',tablaForm);
		tablaForm.startup();
		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlVerDetalleGrilla+'&contrato_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarDivisionesEdicion(urlValue);
		urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlVerDetalleGrilla2+'&contrato_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarMarcasEdicion(urlValue);
		//Elimino la capacidad de cerrar el dialogo por medio de la "X"
		dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
		dijit.byId("dialogMaster").show();
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
	dijit.byId('gridDivisiones').attr('structure',layoutDivisionesD);
	dijit.byId('gridMarcas').attr('structure',layoutMarcasD);	
	//Creacion de botones
	var botonAceptar = new dijit.form.Button({label:'Aceptar',type:'button',iconClass:'aceptarIcon',onClick:function(){
		CancelarMaster();
		dijit.byId('gridDivisiones').attr('structure',layoutDivisiones);
		dijit.byId('gridMarcas').attr('structure',layoutMarcas);}});
	dojo.place(botonAceptar.domNode,dijit.byId("divBotones").domNode,'last');
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CopiarMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({id:'contenedor',style:'text-align:center;background-color:white;'});
	//Creacion del formulario
	//dijit.byId('contenedor').attr('content','Solo se incluir&aacute;n los productos activos de la propuesta seleccionada');
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'180',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[5],constraints:{min:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,dojo.date.locale.format(new Date(),{datePattern:'dd',selector:'date'})),datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[5],label:labelFormM[5],onChange:function(){dijit.byId(camposFormM[6]).constraints.min = arguments[0];}}));//dijit.byId(camposFormM[6]).constraints.max = new Date(dijit.byId(camposFormM[5]).valueNode.value.substring(0,4),dijit.byId(camposFormM[5]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(arguments[0]));
	tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[6],constraints:{datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[6],label:labelFormM[6]}));
	dojo.place(tablaForm.domNode,dijit.byId('contenedor').domNode,'last');
	tablaForm.startup();
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMasterCopiar();}});
	dojo.place(botonGrabar.domNode,dijit.byId('contenedor').domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMasterCopiar();}});
	dojo.place(botonCancelar.domNode,dijit.byId('contenedor').domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({id:'dialogM',title:'Ingreso de datos',style:'width:350px;'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Seteo propiedades para Copiar
	dmlGrabarMaster = dmlCopiarMaster;
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMaster(){
	dijit.byId('gridDivisiones').edit.apply();
	dijit.byId('gridMarcas').edit.apply();
	//Validacion de que el formulario esté bien cargado
	for(i=0;i<requeridoFormM.length;i++){
		if(camposFormM[i]!=camposFormM[7] && !dijit.byId(camposFormM[i]).isValid()){dijit.byId(camposFormM[i]).focus();return;}
	}
	//Generación de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlGrabarMaster;
	for(i=0;i<camposFormM.length;i++){
		if(dijit.byId(camposFormM[i]).declaredClass=='dijit.form.DateTextBox'){urlValue+='&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).valueNode.value;}
		else if(camposFormM[i]==camposFormM[7]){urlValue+='&'+camposFormM[i]+'=';if(dijit.byId(camposFormM[i]).attr('value')=='on'){urlValue+='si';}else{urlValue+='no';}}
		else if(camposFormM[i]==camposFormM[8]){urlValue+='&'+camposFormM[i]+'=';if(dijit.byId(camposFormM[7]).attr('value')=='on'){urlValue+=dijit.byId(camposFormM[i]).attr('value');}else{urlValue+='0';}}
		else{urlValue+='&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).attr('value');}
	}
	gridMarcas.filter({division_id:'*'});
	var CompletarJSONdetalle = function(items,request){
		var marcasDiv = '';
		var marcas = '';
		var productos = '';
		var volMarcas = '';
		var bultosMarcas = '';
		var obser = '';
		for(j=0;j<items.length;j++){		
			if(items[j]['volumen'][0]<1){dijit.showTooltip('Las marcas/productos deben tener cargado el volumen',gridMarcas.domNode,'above');return;}
			marcasDiv+=items[j]['division_id'][0];
			marcas+=items[j]['marca_id'][0];
			if(items[j]['producto_id'][0]){productos+=items[j]['producto_id'][0];}else{productos+='0';}
			volMarcas+=items[j]['volumen'][0];
			bultosMarcas+=items[j]['bultos'][0];
			obser+=items[j]['observaciones'][0];
			if(j!=items.length-1){marcasDiv+='-';marcas+='-';productos+='-';volMarcas+='-';bultosMarcas+='-';obser+='|';}
		}
		urlValue+='&marcasDiv='+marcasDiv+'&marcas='+marcas+'&productos='+productos+'&volMarcas='+volMarcas+'&bultosMarcas='+bultosMarcas+'&obser='+obser;
		
		var CompletarJSON = function(items,request){
			var divs = '';
			var volDivs = '';
			var bultosDivs = '';
			for(i=0;i<items.length;i++){
				if(gridDivisiones.store.getValue(items[i],'volumen')<1||gridDivisiones.store.getValue(items[i],'bultos')<1){dijit.showTooltip('Las divisiones deben tener cargados el volumen y los bultos',gridDivisiones.domNode,'above');return;}
				divs+=gridDivisiones.store.getValue(items[i],'division_id');
				volDivs+=gridDivisiones.store.getValue(items[i],'volumen');
				bultosDivs+=gridDivisiones.store.getValue(items[i],'bultos');
				if(i!=items.length-1){divs+='-';volDivs+='-';bultosDivs+='-';}
			}
			if(divs==''){dijit.showTooltip('Ingrese al menos una divisi&oacute;n',gridDivisiones.domNode,'above');return;}
			urlValue+='&divs='+divs+'&volDivs='+volDivs+'&bultosDivs='+bultosDivs;
			dijit.byId('dialogMaster').hide();
			procesando.show();
			//Grabación de datos en la base de datos
			dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
				if(response.errcode==""){
					BuscarMaster();
					CancelarMaster();
					procesando.hide();
					Mensaje(response.errmsg,'mensaje','master');
				}else{procesando.hide();dijit.byId('dialogMaster').show();PopUp('Error',response.errmsg);}
			}});
		}
		if(dijit.byId("gridDivisiones").store){dijit.byId("gridDivisiones").store.fetch({query:{},onComplete:CompletarJSON});}
		else{SeleccionarDivisiones();return;}
		
	}		
	if(gridMarcas.store){gridMarcas.store.fetch({query:{},onComplete:CompletarJSONdetalle});}
	else{
		urlValue+='&marcasDiv=&marcas=&productos=&volMarcas=&bultosMarcas=&obser=';
		var CompletarJSON = function(items,request){
			var divs = '';
			var volDivs = '';
			var bultosDivs = '';
			for(i=0;i<items.length;i++){
				if(gridDivisiones.store.getValue(items[i],'volumen')<1||gridDivisiones.store.getValue(items[i],'bultos')<1){dijit.showTooltip('Las divisiones deben tener cargados el volumen y los bultos',gridDivisiones.domNode,'above');return;}
				divs+=gridDivisiones.store.getValue(items[i],'division_id');
				volDivs+=gridDivisiones.store.getValue(items[i],'volumen');
				bultosDivs+=gridDivisiones.store.getValue(items[i],'bultos');
				if(i!=items.length-1){divs+='-';volDivs+='-';bultosDivs+='-';}
			}
			if(divs==''){dijit.showTooltip('Ingrese al menos una divisi&oacute;n',gridDivisiones.domNode,'above');return;}
			urlValue+='&divs='+divs+'&volDivs='+volDivs+'&bultosDivs='+bultosDivs;
			dijit.byId('dialogMaster').hide();
			procesando.show();
			//Grabación de datos en la base de datos
			dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
				if(response.errcode==""){
					BuscarMaster();
					CancelarMaster();
					procesando.hide();
					Mensaje(response.errmsg,'mensaje','master');
				}else{procesando.hide();dijit.byId('dialogMaster').show();PopUp('Error',response.errmsg);}
			}});
		}
		if(dijit.byId("gridDivisiones").store){dijit.byId("gridDivisiones").store.fetch({query:{},onComplete:CompletarJSON});}
		else{SeleccionarDivisiones();return;}
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMasterCopiar(){
	//Validacion
	if(dijit.byId('vigencia_desde').attr('value')==''){dijit.byId('vigencia_desde').focus();return;}
	if(dijit.byId('vigencia_hasta').attr('value')==''){dijit.byId('vigencia_hasta').focus();return;}
	//Generación de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlCopiarMaster+'&plan_especial_id='+registroSeleccionado[0][columnasM[0]]+'&vigencia_desde='+dijit.byId('vigencia_desde').valueNode.value+'&vigencia_hasta='+dijit.byId('vigencia_hasta').valueNode.value;
	dijit.byId('dialogM').hide();
	procesando.show();
	//Grabación de datos en la base de datos
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==""){
			CancelarMasterCopiar();
			BuscarMaster();//Refresco del gridMaster
			procesando.hide();
			Mensaje(response.errmsg,'mensaje','master');
		}else{procesando.hide();dijit.byId('dialogM').show();PopUp('Error',response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMasterEditar(){
	dijit.byId('gridDivisiones').edit.apply();
	dijit.byId('gridMarcas').edit.apply();
	//Validacion de que el formulario esté bien cargado
	for(i=0;i<requeridoFormM.length;i++){
		if(camposFormM[i]!=camposFormM[7] && !dijit.byId(camposFormM[i]).isValid()){dijit.byId(camposFormM[i]).focus();return;}
	}
	//Generación de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlGrabarMaster+'&contrato_id='+registroSeleccionado[0][columnasM[0]][0];
	for(i=0;i<camposFormM.length;i++){
		if(dijit.byId(camposFormM[i]).declaredClass=='dijit.form.DateTextBox'){urlValue+='&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).valueNode.value;}
		//else if(i==0){urlValue+='&'+camposFormM[0]+'='+items[0]['distribuidor_id'][0];}
		else if(camposFormM[i]==camposFormM[7]){urlValue+='&'+camposFormM[i]+'=';if(dijit.byId(camposFormM[i]).attr('value')=='on'){urlValue+='si';}else{urlValue+='no';}}
		else if(camposFormM[i]==camposFormM[8]){urlValue+='&'+camposFormM[i]+'=';if(dijit.byId(camposFormM[7]).attr('value')=='on'){urlValue+=dijit.byId(camposFormM[i]).attr('value');}else{urlValue+='0';}}
		else{urlValue+='&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).attr('value');}
	}
	
	gridMarcas.filter({division_id:'*'});
	var CompletarJSONdetalle = function(items,request){
		var marcasDiv = '';
		var marcas = '';
		var productos = '';
		var volMarcas = '';
		var bultosMarcas = '';
		var obser = '';
		for(j=0;j<items.length;j++){		
			if(items[j]['volumen'][0]<1){dijit.showTooltip('Las marcas/productos deben tener cargado el volumen',gridMarcas.domNode,'above');return;}
			marcasDiv+=items[j]['division_id'][0];
			marcas+=items[j]['marca_id'][0];
			if(items[j]['producto_id'][0]){productos+=items[j]['producto_id'][0];}else{productos+='0';}
			volMarcas+=items[j]['volumen'][0];
			bultosMarcas+=items[j]['bultos'][0];
			obser+=items[j]['observaciones'][0];
			if(j!=items.length-1){marcasDiv+='-';marcas+='-';productos+='-';volMarcas+='-';bultosMarcas+='-';obser+='|';}
		}
		urlValue+='&marcasDiv='+marcasDiv+'&marcas='+marcas+'&productos='+productos+'&volMarcas='+volMarcas+'&bultosMarcas='+bultosMarcas+'&obser='+obser;
		
		var CompletarJSON = function(items,request){
			var divs = '';
			var volDivs = '';
			var bultosDivs = '';
			for(i=0;i<items.length;i++){
				if(gridDivisiones.store.getValue(items[i],'volumen')<1||gridDivisiones.store.getValue(items[i],'bultos')<1){dijit.showTooltip('Las divisiones deben tener cargados el volumen y los bultos',gridDivisiones.domNode,'above');return;}
				divs+=gridDivisiones.store.getValue(items[i],'division_id');
				volDivs+=gridDivisiones.store.getValue(items[i],'volumen');
				bultosDivs+=gridDivisiones.store.getValue(items[i],'bultos');
				if(i!=items.length-1){divs+='-';volDivs+='-';bultosDivs+='-';}
			}
			if(divs==''){dijit.showTooltip('Ingrese al menos una divisi&oacute;n',gridDivisiones.domNode,'above');return;}
			urlValue+='&divs='+divs+'&volDivs='+volDivs+'&bultosDivs='+bultosDivs;
			dijit.byId('dialogMaster').hide();
			procesando.show();
			//Grabación de datos en la base de datos
			dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
				if(response.errcode==""){
					BuscarMaster();
					CancelarMaster();
					procesando.hide();
					Mensaje(response.errmsg,'mensaje','master');
				}else{procesando.hide();dijit.byId('dialogMaster').show();PopUp('Error',response.errmsg);}
			}});
		}
		if(dijit.byId("gridDivisiones").store){dijit.byId("gridDivisiones").store.fetch({query:{},onComplete:CompletarJSON});}
		else{SeleccionarDivisiones();return;}
		
		
	}			
	if(gridMarcas.store){gridMarcas.store.fetch({query:{},onComplete:CompletarJSONdetalle});}
	else{
		urlValue+='&marcasDiv=&marcas=&productos=&volMarcas=&bultosMarcas=&obser=';
		var CompletarJSON = function(items,request){
			var divs = '';
			var volDivs = '';
			var bultosDivs = '';
			for(i=0;i<items.length;i++){
				if(gridDivisiones.store.getValue(items[i],'volumen')<1||gridDivisiones.store.getValue(items[i],'bultos')<1){dijit.showTooltip('Las divisiones deben tener cargados el volumen y los bultos',gridDivisiones.domNode,'above');return;}
				divs+=gridDivisiones.store.getValue(items[i],'division_id');
				volDivs+=gridDivisiones.store.getValue(items[i],'volumen');
				bultosDivs+=gridDivisiones.store.getValue(items[i],'bultos');
				if(i!=items.length-1){divs+='-';volDivs+='-';bultosDivs+='-';}
			}
			if(divs==''){dijit.showTooltip('Ingrese al menos una divisi&oacute;n',gridDivisiones.domNode,'above');return;}
			urlValue+='&divs='+divs+'&volDivs='+volDivs+'&bultosDivs='+bultosDivs;
			dijit.byId('dialogMaster').hide();
			procesando.show();
			//Grabación de datos en la base de datos
			dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
				if(response.errcode==""){
					BuscarMaster();
					CancelarMaster();
					procesando.hide();
					Mensaje(response.errmsg,'mensaje','master');
				}else{procesando.hide();dijit.byId('dialogMaster').show();PopUp('Error',response.errmsg);}
			}});
		}
		if(dijit.byId("gridDivisiones").store){dijit.byId("gridDivisiones").store.fetch({query:{},onComplete:CompletarJSON});}
		else{SeleccionarDivisiones();return;}
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMasterCopiar(){
	dijit.byId('dialogM').hide();
	dijit.byId('dialogM').destroyRecursive();
	//Limpio campos del formulario
	for(i=0;i<camposFormM.length;i++){if(dijit.byId(camposFormM[i])){dijit.byId(camposFormM[i]).destroy();}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	dijit.hideTooltip(dijit.byId('gridDivisiones').domNode);
	dijit.hideTooltip(dijit.byId('gridMarcas').domNode);
	//Elimino el dialogo
	dijit.byId('dialogMaster').hide();
	dijit.byId('divCampos').destroyDescendants();
	dijit.byId('divBotones').destroyDescendants();
	if(dijit.byId('dep')){dijit.byId('dep').destroy();}
	if(dijit.byId('oper')){dijit.byId('oper').destroy();}
	if(dijit.byId('gridProductos')){dijit.byId('gridProductos').destroy();}
	if(dijit.byId('cond')){dijit.byId('cond').destroy();}
	if(dijit.byId('lim')){dijit.byId('lim').destroy();}
	if(dijit.byId('expir')){dijit.byId('expir').destroy();}
	dijit.byId('gridDivisiones').setStore(null);dijit.byId('gridDivisiones').update();
	dijit.byId('gridMarcas').setStore(null);dijit.byId('gridMarcas').update();
	if(dijit.byId('area')){dijit.byId('area').destroy();}
	if(dijit.byId('subregion')){dijit.byId('subregion').destroy();}
	//Limpio campos del formulario
	for(i=0;i<camposFormM.length;i++){if(dijit.byId(camposFormM[i])){dijit.byId(camposFormM[i]).destroy();}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMasterEditar(){ 
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	dijit.hideTooltip(dijit.byId('gridMarcas').domNode);
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
	dijit.byId('prod_id').attr('value','');
	dijit.byId('desc').attr('value','');
	dijit.byId('gridOrigen').setStore(null);dijit.byId('gridOrigen').update();
	dijit.byId('gridDestinoP').setStore(null);dijit.byId('gridDestinoP').update();
	dijit.byId('gridOrigenP').setStore(null);dijit.byId('gridOrigenP').update();
	dijit.byId('gridProductos').setStore(null);dijit.byId('gridProductos').update();
	if(dijit.byId('gridProductos')){dijit.byId('gridProductos').destroy();}
	dojo.byId('divTotalImporte').innerHTML='0';
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
function BajarAdjunto(){
	var idCbte = registroSeleccionado[0][columnasM[0]][0];
	dijit.byId('grillaMaster').store.fetchItemByIdentity({identity:idCbte,onItem:function(item){
		var adjValue = dijit.byId('grillaMaster').store.getValue(item,'adjunto');		
		if (adjValue == "on"){
			var urlValue ='dbi/comprobantes_sp_verAdjunto.php?sid='+gvarSID+'&comprobante_sp_id='+registroSeleccionado[0][columnasM[0]][0];
			document.location = urlValue;			
		} else {
			Mensaje('El comprobante seleccionado no posee adjunto','error','master');return;
		}
	}});
}