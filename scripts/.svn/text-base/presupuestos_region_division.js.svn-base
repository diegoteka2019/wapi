//TITULOS
var titulos =  new Array('Presupuesto por Regi&oacute;n');
//DMLs
var dmlBuscarMaster = '13304';
var dmlBuscarMasterGrupo = '13305';
var dmlnuevoM = '';
var dmleditarM = '13302';
var dmlbuscarUnicoM = '11510'; 
var dmleliminarM = '';
var dmlAuditoriaMaster = '';
var dmlBajarExcelMaster = '11507';
var dmlgrabarM = '';
var dmlVerificarM ='11419';
//COLUMNAS
var columnasM = new Array('registro_id','subpresupuesto_id','subregion_id','marca_id','subregion_abrev','importe','volumen_ventas','precio_htl','propuestas','disponible','presupuesto_id');
var tiposM = new Array('text','text','text','text','text','text','text','text','text','text');
var columnasD = new Array('subpresup_ajuste_id','fecha','usuario','importe_ajustado','vol_ventas_ajustado','precio_htl_ajustado','observaciones');
//var columnasDD = new Array('campos','actual','ajuste','ajuste1','ajuste2','ajuste3','ajuste4','ajuste5','ajust6e');
var columnasDD = new Array('propuesta_id','cliente','marcas','vigencia_desde','vigencia_hasta','estado','descripcion','monto','solicitado','acreditado');
var columnasDDD = new Array('producto_id','producto_desc','bultos','importe','porcentaje');
//DESCRIPCIONES
var descripcionesM = new Array('','','','','Regi&oacute;n','Presupuesto $','Vol. Venta','$/ Htl. Pres.','$ Propuestas','Subpresup. Disponible','');
var descripcionesD = new Array('Presupuesto Ajuste ID','Fecha','Usuario','Importe','Vol. Venta','$/ Htl.','Observaciones');
var descripcionesDD = new Array('Nro. de Propuesta','Cliente','Marcas','Vigencia desde','Vigencia hasta','Estado','Descripcion','Monto','Solicitado','Acreditado');
var descripcionesDDD = new Array('Id','Producto','Bultos','Importe','Porcenaje');
//PRIMARY KEY
var clavesM = new Array('presupuesto_id');
//FILTROS DE DIVISION
var filtroMaster = new Array('area_id','tipo_presupuesto_id','division_id','mes','anio');
var labelFiltroMaster = new Array('Area: ','Tipo: ','Division: ','Mes: ','A&ntilde;o: ');
var mensajeFiltroMaster = new Array('Seleccione el Area','Seleccione el Tipo de Presupuesto','Seleccione la Divisi&oacute;n','Seleccione el Mes','Ingrese el A&ntilde;o');
var requeridoFiltroMaster = new Array(true,true,true,true,true);
var searchAttrFiltroMaster = new Array('detalle','detalle','detalle','mes','');
var tipoFiltroMaster = new Array('FilteringSelect','FilteringSelect','FilteringSelect','FilteringSelect','NumberSpinner');
var selectFiltroMaster = new Array('11406','11407','11408','','');
var mesesStore = {identifier:'mes',label:'mes',items:[{mes:'01'},{mes:'02'},{mes:'03'},{mes:'04'},{mes:'05'},{mes:'06'},{mes:'07'},{mes:'08'},{mes:'09'},{mes:'10'},{mes:'11'},{mes:'12'}]};
//FILTROS DE GRUPOS
var filtroMasterG = new Array('area_id','tipo_presupuesto_id','negocio_id','mes','anio');
var labelFiltroMasterG = new Array('Area: ','Tipo: ','Negocio: ','Mes: ','A&ntilde;o: ');
var mensajeFiltroMasterG = new Array('Seleccione el Area','Seleccione el Tipo de Presupuesto','Seleccione el Grupo','Seleccione el Mes','Ingrese el A&ntilde;o');
var requeridoFiltroMasterG = new Array(true,true,true,true,true);
var searchAttrFiltroMasterG = new Array('detalle','detalle','detalle','mes','');
var tipoFiltroMasterG = new Array('FilteringSelect','FilteringSelect','FilteringSelect','FilteringSelect','NumberSpinner');
var selectFiltroMasterG = new Array('11406','11407','11403','','');
var mesesStore = {identifier:'mes',label:'mes',items:[{mes:'01'},{mes:'02'},{mes:'03'},{mes:'04'},{mes:'05'},{mes:'06'},{mes:'07'},{mes:'08'},{mes:'09'},{mes:'10'},{mes:'11'},{mes:'12'}]};
//FORMULARIO
var camposFormM = new Array('mes','region','propuestas','tipo_carga','tipo_ajuste');
var labelFormM = new Array('Mes: ','Regi&oacute;n: ','$ Propuestas: ','Tipo de Carga: ','Tipo de Ajuste: ');
var labelFormD = new Array('Divisi&oacute;n: ','Area: ','Subregi&oacute;n: ','Tipo: ','Nro: ','Tipo de Carga: ','Fecha de Carga: ','Tipificaci&oacute;n: ','Clientes: ','Participaci&oacute;n Dist(%): ','Vigencia Desde: ','Vigencia Hasta: ','Tipo de Acci&oacute;n: ','Objetivo: ','Contra: ','Dist. Fisica Comp(%): ','Bultos afectados por la acci&oacute;n: ','Op. a realizar: ','Canal de Mkt: ','Observaciones: ','Prorratea para todos los calibres: ','Criterio: ','Marca: ','Concepto: ','Monto: ');
var requeridoFormM = new Array(false,false,false,true,true);
var regexpFormM = new Array('.*','.*','.*','.*','.*',"[a-zA-Z0-9ñÑ¿?¡! ,.()-_]+");
var mensajesFormM = new Array('','','','Elija el tipo de carga','Elija el tipo de ajuste');
var dojoTypeFormM = new Array('TextBox','TextBox','TextBox','FilteringSelect','FilteringSelect');
var searchAttrFormM = new Array('','','','detalle','detalle');
var selectFormM = new Array('','','','','');
var cargaStore = {identifier:'codigo',label:'tipo_carga',items:[{codigo:'1',tipo_carga:'importe',detalle: 'Importe'},{codigo:'2',tipo_carga: 'hectolitro',detalle:'$ por Htl'}]};
var ajusteStore = {identifier:'codigo',label:'tipo_ajuste',items:[{codigo:'1',tipo_ajuste: 'positivo',detalle: 'Positivo'},{codigo:'2',tipo_ajuste: 'negativo',detalle:'Negativo'}]};
var registroSeleccionado = null;
var registroSeleccionadoP = null;
//Carga las estructuras de las tablas
var layoutMaster = [
    {width: "auto", field: columnasM[0], name: descripcionesM[0],hidden:true},
    {width: "auto", field: columnasM[1], name: descripcionesM[1],hidden:true},
    {width: "auto", field: columnasM[2], name: descripcionesM[2],hidden:true},
	{width: "auto", field: columnasM[3], name: descripcionesM[3],hidden:true},
	{width: "auto", field: columnasM[4], name: descripcionesM[4]},
    {width: "auto", field: columnasM[5], name: descripcionesM[5]},
	{width: "auto", field: columnasM[6], name: descripcionesM[6]},
	{width: "auto", field: columnasM[7], name: descripcionesM[7]},
	{width: "auto", field: columnasM[8], name: descripcionesM[8]},
    {width: "auto", field: columnasM[9], name: descripcionesM[9]},
	{width: "auto", field: columnasM[10], name: descripcionesM[10],hidden:true}];
var layoutDialog = [
    {width: "auto", field: columnasD[0], name: descripcionesD[0],hidden:true},
    {width: "auto", field: columnasD[1], name: descripcionesD[1]},
    {width: "auto", field: columnasD[2], name: descripcionesD[2]},
	{width: "auto", field: columnasD[3], name: descripcionesD[3]},
	{width: "auto", field: columnasD[4], name: descripcionesD[4]},
	{width: "auto", field: columnasD[5], name: descripcionesD[5]},
	{width: "auto", field: columnasD[6], name: descripcionesD[6]}];
var layoutDialogDetalle = [
    {width: "auto", field: columnasDD[0], name: descripcionesDD[0]},
    {width: "auto", field: columnasDD[1], name: descripcionesDD[1]},
    {width: "auto", field: columnasDD[2], name: descripcionesDD[2]},
	{width: "auto", field: columnasDD[3], name: descripcionesDD[3]},
	{width: "auto", field: columnasDD[4], name: descripcionesDD[4]},
    {width: "auto", field: columnasDD[5], name: descripcionesDD[5]},
	{width: "auto", field: columnasDD[6], name: descripcionesDD[6]},
	{width: "auto", field: columnasDD[7], name: descripcionesDD[7]},
	{width: "auto", field: columnasDD[8], name: descripcionesDD[8]},
	{width: "auto", field: columnasDD[9], name: descripcionesDD[9]}];
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
var layoutDialogDetalleDetalle = [
    {width: "10px", field: columnasDDD[0], name: descripcionesDDD[0],hidden:true},
    {width: "105px", field: columnasDDD[1], name: descripcionesDDD[1]},
    {width: "105px", field: columnasDDD[2], name: descripcionesDDD[2]},
	{width: "105px", field: columnasDDD[3], name: descripcionesDDD[3],formatter:CalcularTotal},
	{width: "10px", field: columnasDDD[4], name: descripcionesDDD[4],hidden:true}];
//campos de auditoria
var camposAuditoriaM = new Array('usr_altam','fecha_altam','usr_modifm','fecha_modifm');
var labelAuditoria = new Array('Creado por: ','Fecha de creaci&oacute;n: ','Modificado por: ','Fecha de modificaci&oacute;n: ');
//Carga de titulos
document.getElementById('bloqueMaster').innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	dojo.connect(gridArea,'onStyleRow',function(row){ColorearFila(row);});
	
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlVerificarM;
	//gridArea.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
	if(response.items[0].parametro == 1){
	Selector();
	}else{ArmadoFiltroYAuditoriaDiv();}}});
	
	if(dijit.byId('buscarMaster')){
	    dijit.byId('buscarMaster').destroy();
        dijit.byId('separatorMaster').destroy();
        dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'verDetalleMaster',style:'padding-left:3px;padding-right:3px;',label:'Ver Detalle',showLabel:false,iconClass:'verDetalleIcon',disabled:true,onClick:function(){VerDetalleMaster();}}));    
        dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'verHistorico',style:'padding-left:3px;padding-right:3px;',label:'Ver Historico',showLabel:false,iconClass:'verDetalleIcon',disabled:true,onClick:function(){VerHistorico();}}));    
    }

}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedMaster(grilla){
	registroSeleccionado = grilla.selection.getSelected();
	HabilitarBotonesMaster(2,false);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedDetail(){
	registroSeleccionadoP = dijit.byId('gridDetalle').selection.getSelected();
	//Habilitar Detalles
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function HabilitarBotonesMaster(tipo,bool){
	if(tipo==1){
		if(dijit.byId('bajaexcelMaster')){dijit.byId('bajaexcelMaster').attr('disabled',bool);}}
	if(tipo==2){
		if(dijit.byId('editarMaster')){dijit.byId('editarMaster').attr('disabled',bool);}
		if(dijit.byId('copiarMaster')){dijit.byId('copiarMaster').attr('disabled',bool);}
		if(dijit.byId('eliminarMaster')){dijit.byId('eliminarMaster').attr('disabled',bool);}
		if(dijit.byId('auditMaster')){dijit.byId('auditMaster').attr('disabled',bool);}
		if(dijit.byId('blanquearClaveMaster')){dijit.byId('blanquearClaveMaster').attr('disabled',bool);}
		if(dijit.byId('verHistorico')){dijit.byId('verHistorico').attr('disabled',bool);}
		if(dijit.byId('verDetalleMaster')){dijit.byId('verDetalleMaster').attr('disabled',bool);}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ArmadoFiltroYAuditoriaDiv(){
	
	if(dijit.byId('filtrMaster')){
		//Limpio Filtros
		for(i=0;i<filtroMaster.length;i++){if(dijit.byId('filtro'+i)){dijit.byId('filtro'+i).destroy();}}
		//Creo Filtros
		var divFiltros = new dijit.layout.ContentPane({style:'width:350px;'});
		var tablaFiltros = new dojox.layout.TableContainer({cols:1});
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='TextBox'){tablaFiltros.addChild(new dijit.form.TextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='ValidationTextBox'){tablaFiltros.addChild(new dijit.form.ValidationTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],onChange:function(){dijit.byId('filtro5').constraints.min = arguments[0];}}));}if(dijit.byId('filtro5')){dijit.byId('filtro5').attr('onChange',function(){dijit.byId('filtro4').constraints.max = arguments[0];})}
			if(tipoFiltroMaster[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[i]})}));}
			if(tipoFiltroMaster[i]=='NumberSpinner'){tablaFiltros.addChild(new dijit.form.NumberSpinner({id:'filtro'+i,label:labelFiltroMaster[i],type:'number',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i]}));}}
		
		//Seteo el anio actual por defecto
		var anioActual = parseInt(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}));
		dijit.byId('filtro4').constraints.max = anioActual + 100;
		dijit.byId('filtro4').constraints.min = anioActual - 100;
		dijit.byId('filtro4').attr('value',anioActual);

		AutoCompletar(dijit.byId('filtro0'));
		AutoCompletar(dijit.byId('filtro1'));
		//seteo el store fijo de meses
		dijit.byId('filtro3').store.url = '';
		dijit.byId('filtro3').store.data = mesesStore;

		divFiltros.attr('content',tablaFiltros);
		var botonBuscar = new dijit.form.Button({label:'Buscar',type:'button',onClick:function(){VerificarFiltroDiv();}},document.createElement('div'));
		dojo.place(botonBuscar.domNode,divFiltros.domNode,'last');
		dijit.byId('filtrosMaster').attr('content',divFiltros);}	
	if(dijit.byId('auditMaster')){
		//Limpio Filtros
		for(i=0;i<camposAuditoriaM.length;i++){if(dijit.byId(camposAuditoriaM[i])){dijit.byId(camposAuditoriaM[i]).destroy();}}
		//Creo campos de auditoria
		var tablaAuditMaster = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'width:350px;'});
		for(i=0;i<camposAuditoriaM.length;i++){tablaAuditMaster.addChild(new dijit.form.TextBox({id:camposAuditoriaM[i],label:labelAuditoria[i],disabled:true,type:'text'}));}
		dijit.byId('auditoriaMaster').attr('content',tablaAuditMaster);}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerificarFiltroDiv(){
	//Validacion de que el formulario esté bien cargado
	if(dijit.byId('filtrosMaster').validate()){BuscarMasterDiv();dijit.byId('filtrosMaster').onCancel();}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function NuevoMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:350px;text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	
	tablaForm.addChild(new dijit.form.TextBox({id:camposFormM[0],label:labelFormM[0]}));
	dijit.byId(camposFormM[0]).attr('readOnly',true);
	
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[1],label:labelFormM[1],searchAttr:searchAttrFormM[1],promptMessage:mensajesFormM[1],required:requeridoFormM[1],store:new dojo.data.ItemFileReadStore({data: cargaStore})}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[2],label:labelFormM[2],searchAttr:searchAttrFormM[2],promptMessage:mensajesFormM[2],required:requeridoFormM[2],store:new dojo.data.ItemFileReadStore({data: ajusteStore})}));
	
	divCamposM.attr('content',tablaForm);
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
	dojo.place(botonGrabar.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Ingreso de datos',id:'dialogMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Seteo propiedades para Nuevo
	dmlgrabarM = dmlnuevoM;
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMasterDiv(){
	//Limpiar el contentpane...
	valores_filtros = '';
	registroSeleccionado = null;
	dijit.byId('gridContainer').destroyDescendants();
	//Obtengo presupuestos
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	if(filtroMaster.length > 0){
		for(i=0;i<filtroMaster.length;i++){
			urlValue +='&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');
			if(i!=3&&i!=4){valores_filtros += '<b>' + labelFiltroMaster[i] + '</b>' + dijit.byId('filtro'+i).item.detalle[0] + ' ';}
			else{valores_filtros += '<b>' + labelFiltroMaster[i] + '</b>' + dijit.byId('filtro'+i).attr('value') + ' ';}
		}
		/* var filtros = dojo.create('div',{innerHTML:valores_filtros});
		dojo.attr(filtros,'class','dijitToolbar');
		dojo.place(filtros,dojo.byId('gridContainer'),'last'); */
	}
	var presupuestoMarca = new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}); 
	//Obtengo presupuestos por marca y subregion
	var CargarGrillas = function(items,request){
		if(items.length==0){Mensaje('No se han encontrado registros','error','master');}
		for(i=0;i<items.length;i++){
			//Datos de la cabecera de la grilla
			var cabecera = dojo.create('div',{innerHTML:'<table style="width:90%;font-weight:bold;"><tr><td width="20%">Divisi&oacute;n: '+items[i]['division_abrev'][0]+'</td><td width="20%">Presupuesto: $'+items[i]['importe'][0]+'</td><td width="20%">Vol. Total: '+items[i]['volumen_ventas'][0]+'</td><td width="20%">$/Htl: '+items[i]['precio_htl'][0]+'</td><td width="20%">$ Pendiente: '+items[i]['pendiente'][0]+'</td></tr></table>'});
			dojo.attr(cabecera,'class','dijitToolbar');
			dojo.place(cabecera,dojo.byId('gridContainer'),'last');
			//Creacion de grillas dinamicas
			var urlValue2 ='dbi/presupuesto_region_divSubregiones.php?sid='+gvarSID+'&presupuesto_id='+items[i]['presupuesto_id'][0];
        	if(filtroMaster.length > 0){
        		for(j=0;j<filtroMaster.length;j++){
        			urlValue2 +='&'+filtroMaster[j]+'='+dijit.byId('filtro'+j).attr('value');}
        	}
			var grilla = new dojox.grid.DataGrid({store:new dojo.data.ItemFileWriteStore({url:urlValue2,urlPreventCache:true}),autoHeight:true,structure:layoutMaster,onSelected:function(){OnSelectedMaster(this);}},document.createElement('div'));
			dojo.place(grilla.domNode,dojo.byId('gridContainer'),'last');
			grilla.startup();
		}
        HabilitarBotonesMaster(1,false);
	}
	presupuestoMarca.fetch({query:{},onComplete:CargarGrillas});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMaster(){
	dijit.byId('precioLitroNuevo').attr('readOnly',true);
	dijit.byId('volumenVentasNuevo').attr('readOnly',false);
	dijit.byId('importeNuevo').attr('readOnly',false);
	dijit.byId('observaciones').attr('readOnly',false);
	//Cargo los datos del registro seleccionado
	var items = registroSeleccionado;
	//Verifico que exista presupuesto
	if(items[0][columnasM[10]]==""){Mensaje('No existe apertura de presupuesto para esta marca','error','master');return;}
	//Verifico que no sea un mes vencido
	var mesActual = dojo.date.locale.format(new Date(),{datePattern:"MM",selector:"date"});
	var anioActual = dojo.date.locale.format(new Date(),{datePattern:"yyyy",selector:"date"});
	if(anioActual>dijit.byId('filtro4').attr('value')){Mensaje('No es posible modificar el presupuesto de un a&ntilde;o vencido','advertencia','master');return;}
	if(mesActual>dijit.byId('filtro3').attr('value') && anioActual==dijit.byId('filtro4').attr('value')){Mensaje('No es posible modificar el presupuesto de un mes vencido','advertencia','master');return;}
	//Blanqueo importes
	dijit.byId('importeNuevo').attr('value',0);
	dijit.byId('volumenVentasNuevo').attr('value',0);
	dijit.byId('precioLitroNuevo').attr('value',0);
	dijit.byId('observaciones').attr('value','');
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'90',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.TextBox({id:camposFormM[0],style:'width:130px;',label:labelFormM[0]}));
	dijit.byId(camposFormM[0]).attr('readOnly',true);
	tablaForm.addChild(new dijit.form.TextBox({id:camposFormM[1],style:'width:130px;',label:labelFormM[1]}));
	dijit.byId(camposFormM[1]).attr('readOnly',true);
	tablaForm.addChild(new dijit.form.TextBox({id:camposFormM[2],style:'width:130px;',label:labelFormM[2]}));
	dijit.byId(camposFormM[2]).attr('readOnly',true);
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[3],style:'width:130px;',value:"1",label:labelFormM[3],searchAttr:searchAttrFormM[3],promptMessage:mensajesFormM[3],required:requeridoFormM[3],store:new dojo.data.ItemFileReadStore({data: cargaStore}),onChange:function test(){if(this.attr('value')==1){dijit.byId('importeNuevo').attr('readOnly',false);dijit.byId('precioLitroNuevo').attr('value','0');dijit.byId('precioLitroNuevo').attr('readOnly',true);}else{dijit.byId('importeNuevo').attr('readOnly',true);dijit.byId('importeNuevo').attr('value','0');dijit.byId('precioLitroNuevo').attr('readOnly',false);}}}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[4],style:'width:130px;',value:"1",label:labelFormM[4],searchAttr:searchAttrFormM[4],promptMessage:mensajesFormM[4],required:requeridoFormM[4],store:new dojo.data.ItemFileReadStore({data: ajusteStore})}));
	dijit.byId("divCampos").attr('content',tablaForm);
	tablaForm.startup();
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	//Seteo propiedades para Editar
	dmlgrabarM = dmleditarM;
	/*--- Llenado del formulario con los datos del registro elegido ---*/
	//Cargo el mes, importe, volumen de ventas y $ por hlt.
	dijit.byId(camposFormM[0]).attr('value',dijit.byId('filtro3').attr('value'));
	dijit.byId(camposFormM[1]).attr('value',items[0][columnasM[4]]);
	dijit.byId(camposFormM[2]).attr('value',items[0][columnasM[8]]);
	dojo.byId('importeActual').innerHTML=items[0][columnasM[5]]; 
	dojo.byId('volumenVentasActual').innerHTML=items[0][columnasM[6]];
	dojo.byId('precioLitroActual').innerHTML=items[0][columnasM[7]];
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlbuscarUnicoM+'&'+columnasM[1]+'='+items[0][columnasM[1]];
	gridArea.setStore(new dojo.data.ItemFileReadStore({url:urlValue,urlPreventCache:true}));
	dijit.byId("dialogMaster").show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerHistorico(){
	dijit.byId('precioLitroNuevo').attr('readOnly',true);
	dijit.byId('volumenVentasNuevo').attr('readOnly',true);
	dijit.byId('importeNuevo').attr('readOnly',true);
	dijit.byId('observaciones').attr('readOnly',true);
	//Cargo los datos del registro seleccionado
	var items = registroSeleccionado;
	//Blanqueo importes
	dijit.byId('importeNuevo').attr('value',0);
	dijit.byId('volumenVentasNuevo').attr('value',0);
	dijit.byId('precioLitroNuevo').attr('value',0);
	dijit.byId('observaciones').attr('value','');
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'90',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.TextBox({id:camposFormM[0],readOnly:true,style:'width:130px;',label:labelFormM[0]}));
	tablaForm.addChild(new dijit.form.TextBox({id:camposFormM[1],readOnly:true,style:'width:130px;',label:labelFormM[1]}));
	tablaForm.addChild(new dijit.form.TextBox({id:camposFormM[2],readOnly:true,style:'width:130px;',label:labelFormM[2]}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[3],readOnly:true,style:'width:130px;',value:"1",label:labelFormM[3],searchAttr:searchAttrFormM[3],promptMessage:mensajesFormM[3],required:requeridoFormM[3],store:new dojo.data.ItemFileReadStore({data: cargaStore}),onChange:function test(){if(this.attr('value')==1){dijit.byId('importeNuevo').attr('readOnly',false);dijit.byId('precioLitroNuevo').attr('value','0');dijit.byId('precioLitroNuevo').attr('readOnly',true);}else{dijit.byId('importeNuevo').attr('readOnly',true);dijit.byId('importeNuevo').attr('value','0');dijit.byId('precioLitroNuevo').attr('readOnly',false);}}}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[4],readOnly:true,style:'width:130px;',value:"1",label:labelFormM[4],searchAttr:searchAttrFormM[4],promptMessage:mensajesFormM[4],required:requeridoFormM[4],store:new dojo.data.ItemFileReadStore({data: ajusteStore})}));
	dijit.byId("divCampos").attr('content',tablaForm);
	tablaForm.startup();
	//Creacion de botones
	var botonCancelar = new dijit.form.Button({label:'Aceptar',type:'button',iconClass:'aceptarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	//Seteo propiedades para Editar
	dmlgrabarM = dmleditarM;
	/*--- Llenado del formulario con los datos del registro elegido ---*/
	//Cargo el mes, importe, volumen de ventas y $ por hlt.
	dijit.byId(camposFormM[0]).attr('value',dijit.byId('filtro3').attr('value'));
	dijit.byId(camposFormM[1]).attr('value',items[0][columnasM[4]]);
	dijit.byId(camposFormM[2]).attr('value',items[0][columnasM[8]]);
	dojo.byId('importeActual').innerHTML=items[0][columnasM[5]]; 
	dojo.byId('volumenVentasActual').innerHTML=items[0][columnasM[6]];
	dojo.byId('precioLitroActual').innerHTML=items[0][columnasM[7]];
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlbuscarUnicoM+'&'+columnasM[1]+'='+items[0][columnasM[1]];
	gridArea.setStore(new dojo.data.ItemFileReadStore({url:urlValue,urlPreventCache:true}));
	dijit.byId("dialogMaster").show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDetalleMaster(){
	//Cargo los datos del registro seleccionado
	var items = registroSeleccionado;
	var botonDetalle = new dijit.form.Button({label:'Detalle',type:'button',iconClass:'verDetalleIcon',onClick:function(){VerDetalleDetail();}});
	dojo.place(botonDetalle.domNode,dijit.byId("divBotonesD").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cerrar',type:'button',iconClass:'cancelarIcon',onClick:function(){dijit.byId('dialogDetail').hide();dijit.byId('divBotonesD').destroyDescendants();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotonesD").domNode,'last');
	var urlValue ='dbi/presupuesto_region_verDetalle.php?sid='+gvarSID+'&'+columnasM[2]+'='+items[0][columnasM[2]];
    if (dijit.byId('filtro2').attr('label') == 'Division: '){
		for(i=0;i<filtroMaster.length;i++){
		urlValue +='&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');}
	}else{for(i=0;i<filtroMasterG.length;i++){
		urlValue +='&'+filtroMasterG[i]+'='+dijit.byId('filtro'+i).attr('value');}}
	gridDetalle.setStore(new dojo.data.ItemFileReadStore({url:urlValue,urlPreventCache:true}));
	dijit.byId("dialogDetail").show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDetalleDetail(){
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11618&propuesta_id='+registroSeleccionadoP[0][columnasDD[0]][0],urlPreventCache:true})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormD[0],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormD[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormD[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormD[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormD[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_carga'][0],style:'width:130px;',label:labelFormD[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Importe',style:'width:130px;',label:labelFormD[6],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipificacion'][0],style:'width:130px;',label:labelFormD[7],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['cliente'][0],style:'width:130px;',label:labelFormD[8],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['participacion_dist'][0],style:'width:130px;',label:labelFormD[9],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_desde'][0],style:'width:130px;',label:labelFormD[10],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_hasta'][0],style:'width:130px;',label:labelFormD[11],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_accion'][0],style:'width:130px;',label:labelFormD[12],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['objetivo'][0],style:'width:130px;',label:labelFormD[13],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contra'][0],style:'width:130px;',label:labelFormD[14],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['dist_fisica_comp'][0],style:'width:130px;',label:labelFormD[15],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['bultos_afectados'][0],style:'width:130px;',label:labelFormD[16],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['op_realizar'][0],style:'width:130px;',label:labelFormD[17],readOnly:true}));
		if(dijit.byId('canales_mkt')){dijit.byId('canales_mkt').destroy();}
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'canales_mkt',readOnly:true,style:'width:130px;height:58px;',label:labelFormD[18],multiple:true,readOnly:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11619&propuesta_id='+registroSeleccionadoP[0][columnasDD[0]][0]})}));
		if(dijit.byId(camposFormM[19])){dijit.byId(camposFormM[19]).destroy();}
		tablaForm.addChild(new dijit.form.SimpleTextarea({id:camposFormM[19],readOnly:true,value:items[0]['observaciones'][0],required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormD[19]}));
		if(dijit.byId('division_id')){dijit.byId('division_id').destroy();}
		tablaForm.addChild(new dijit.form.TextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		dijit.byId('divCamposDD').attr('content',tablaForm);
		tablaForm.startup();
		//Muestro el dialogo
		dijit.byId('dialogDetailDetail').show();
		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=11620&propuesta_id='+registroSeleccionadoP[0][columnasDD[0]][0];
		CargarProductosEdicion(urlValue);
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
	//Creacion de botones
	var botonCancelar = new dijit.form.Button({label:'Aceptar',type:'button',iconClass:'aceptarIcon',onClick:function(){CancelarDetalle();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotonesDD").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogDetailDetail").titleBar.children[1].style.display='none';
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductosEdicion(urlValue){
	var storeProductos = new dojo.data.ItemFileWriteStore({clearOnClose:true,url:urlValue});
	var storeVacio = {identifier: 'producto_id', label: 'producto_desc', items: []};
	dijit.byId('gridProductos').setStore(new dojo.data.ItemFileWriteStore({data: storeVacio}));
	dijit.byId('gridProductos').attr("autoWidth",true);
	dijit.byId('gridProductos').update();
	//Agrego los nuevos items
	var ActualizarGrilla = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('gridProductos').store.fetchItemByIdentity({
				identity:storeProductos.getValue(items[i],'producto_id'),
				onItem:function(item){
					if(!item){dijit.byId('gridProductos').store.newItem({producto_id:storeProductos.getValue(items[i],'producto_id'), producto_desc:storeProductos.getValue(items[i],'producto_desc'),bultos:storeProductos.getValue(items[i],'bultos'),importe:storeProductos.getValue(items[i],'importe'),porcentaje:storeProductos.getValue(items[i],'porcentaje')});}
				}
			});
		}
		dijit.byId('gridProductos').store.save();
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
function CopiarMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.BorderContainer({style:'text-align:center;background-color:white;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<columnasM.length;i++){
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:columnasM[i],label:labelFormM[i],trim:true,promptMessage:mensajesFormM[i],regexp:regexpFormM[i],regExp:regexpFormM[i],required:requeridoFormM[i]}));}
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
	//tomo el valor de los campos clave de los registros seleccionados en el gridMaster
	var items=gridMaster.selection.getSelected();
	//Generación de la URL y el mensaje de advertencia
	var urlValue ='dbi/e.php?sid='+gvarSID+'&dmlid='+dmleliminarM;
	mensaje='Est&aacute; seguro que desea eliminar la tipificaci&oacute;n  del presupuesto <b>'+items[0][columnasM[2]]+'</b><br> con tipo de descuento <b>'+items[0][columnasM[3]]+'</b>';
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
			BuscarMaster();//Refresco del gridMaster
			procesando.hide();
			Mensaje('El registro ha sido eliminado exitosamente','mensaje','master');
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
function BajadaExcelMaster(){
if (dijit.byId('filtro2').attr('label') == 'Division: '){
	var urlValue ='dbi/presupuesto_region_excel_div.php?sid='+gvarSID;
    if(filtroMaster.length > 0){
		for(i=0;i<filtroMaster.length;i++){
			urlValue +='&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');}
	}
	document.location = urlValue;
	}else{var urlValue ='dbi/presupuesto_region_excel_grupo.php?sid='+gvarSID;
    if(filtroMaster.length > 0){
		for(i=0;i<filtroMaster.length;i++){
			urlValue +='&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');}
	}
	document.location = urlValue;}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMaster(){
	//Validacion de que el formulario esté bien cargado
	if(dijit.byId('tipo_ajuste').attr('value')==2 && dojo.byId('importeActual').innerHTML==0 && dojo.byId('volumenVentasActual').innerHTML==0){PopUp('Error','No es posible quitar un monto mayor al asignado al presupuesto. Por favor valide los montos ingresados');return;}
	if(dojo.byId('importeActual').innerHTML==0){
		if((!dijit.byId('importeNuevo').isValid() || !dijit.byId('importeNuevo').attr('value')>0) && dijit.byId('tipo_carga').attr('value')==1){dijit.byId('importeNuevo').attr('value',null);dijit.byId('importeNuevo').focus();return;}
		if(!dijit.byId('volumenVentasNuevo').isValid() || !dijit.byId('volumenVentasNuevo').attr('value')>0){dijit.byId('volumenVentasNuevo').attr('value',null);dijit.byId('volumenVentasNuevo').focus();return;}
		if((!dijit.byId('precioLitroNuevo').isValid() || !dijit.byId('precioLitroNuevo').attr('value')>0) && dijit.byId('tipo_carga').attr('value')==2){dijit.byId('precioLitroNuevo').attr('value',null);dijit.byId('precioLitroNuevo').focus();return;}
		if(!dijit.byId('observaciones').isValid()){dijit.byId('observaciones').focus();return;}
	}else{
		if(dijit.byId('importeNuevo').attr('value')>0 || dijit.byId('volumenVentasNuevo').attr('value')>0 || dijit.byId('precioLitroNuevo').attr('value')>0){
		}else{PopUp('Error','Debe realizar alg&uacute;n ajuste');return;}
	}
	if(!dijit.byId('importeNuevo').isValid() && dijit.byId('tipo_carga').attr('value')==1){dijit.byId('importeNuevo').attr('value',null);dijit.byId('importeNuevo').focus();return;}
	if(!dijit.byId('volumenVentasNuevo').isValid()){dijit.byId('volumenVentasNuevo').attr('value',null);dijit.byId('volumenVentasNuevo').focus();return;}
	if(!dijit.byId('precioLitroNuevo').isValid() && dijit.byId('tipo_carga').attr('value')==2){dijit.byId('precioLitroNuevo').attr('value',null);dijit.byId('precioLitroNuevo').focus();return;}
	if(dijit.byId('tipo_ajuste').attr('value')==1){
		if(dijit.byId('importeNuevo').attr('value')+parseInt(dojo.byId('importeActual').innerHTML)>9999999999.99){dijit.byId('importeNuevo').attr('value',null);dijit.byId('importeNuevo').focus();return;}
		if(dijit.byId('volumenVentasNuevo').attr('value')+parseInt(dojo.byId('volumenVentasActual').innerHTML)>9999999999.99){dijit.byId('volumenVentasNuevo').attr('value',null);dijit.byId('volumenVentasNuevo').focus();return;}
	}
	dijit.byId('dialogMaster').hide();
	procesando.show();
	//Cargo los datos del registro seleccionado
	var items = registroSeleccionado;
	//Generación de la URL
	dijit.byId('observaciones').attr('value',unescape( encodeURIComponent( dijit.byId('observaciones').attr('value') ) ) );
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM+'&presupuesto_id='+items[0][columnasM[10]]+'&subregion_id='+items[0][columnasM[2]]+'&tipo_carga='+dijit.byId(camposFormM[3]).attr('value')+'&tipo_ajuste='+dijit.byId(camposFormM[4]).attr('value')+'&importe='+dijit.byId('importeNuevo').attr('value')+'&vol_ventas='+dijit.byId('volumenVentasNuevo').attr('value')+'&precio_htl='+dijit.byId('precioLitroNuevo').attr('value')+'&observaciones='+dijit.byId('observaciones').attr('value');
	//Grabación de datos en la base de datos
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if (response.errcode==0){
			CancelarMaster();//Elimino el dialogo
			if (dijit.byId('filtro2').attr('label') == 'Division: '){
			BuscarMasterDiv();//Refresco del gridMaster
			}else{BuscarMasterGrupo();}
			procesando.hide();
			Mensaje('Los cambios se han realizado exitosamente','mensaje','master');
		}else{procesando.hide();dijit.byId('dialogMaster').show();PopUp('Error', response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	//Elimino el dialogo
	dijit.byId('dialogMaster').hide();
	dijit.byId('divCampos').destroyDescendants();
	dijit.byId('divBotones').destroyDescendants();
	//Limpio campos del formulario
	if(dijit.byId(camposFormM[0])){for(i=0;i<camposFormM.length;i++){dijit.byId(camposFormM[i]).destroy();}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarDetalle(){
	dijit.byId('dialogDetailDetail').hide();
	dijit.byId('divCamposDD').destroyDescendants();
	dijit.byId('divBotonesDD').destroyDescendants();
	dojo.byId('divTotalImporte').innerHTML='0';
	dojo.byId('divTotalBulto').innerHTML='0';
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
function Selector(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:200px;text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'50',style:'text-align:left;'});
	//Creacion de botones
	var botonAceptar = new dijit.form.Button({label:'Cargar por Divisi&oacute;n.',type:'button',iconClass:'aceptarIcon',onClick:function(){ArmadoFiltroYAuditoriaDiv();CancelarSelector();}});
	dojo.place(botonAceptar.domNode,divCamposM.domNode,'last');
	var botonAceptar1 = new dijit.form.Button({label:'Cargar Por Grupos.',type:'button',iconClass:'aceptarIcon',onClick:function(){ArmadoFiltroYAuditoriaGrupo();CancelarSelector();}});
	dojo.place(botonAceptar1.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarSelector();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');

	//Creacion del dialogo
 	dialogM = new dijit.Dialog({title:'Elija presupuesto a cargar.',id:'dialogM'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarSelector(){
	//Elimino el dialogo
	dijit.byId('dialogM').hide();
	dijit.byId('dialogM').destroy();
	//Limpio campos del formulario
	for(i=0;i<camposFormM.length;i++){if(dijit.byId(camposFormM[i])){dijit.byId(camposFormM[i]).destroy();}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ArmadoFiltroYAuditoriaGrupo(){
	if(dijit.byId('filtrMaster')){
		//Limpio Filtros
		for(i=0;i<filtroMasterG.length;i++){if(dijit.byId('filtro'+i)){dijit.byId('filtro'+i).destroy();}}
		//Creo Filtros
		var divFiltros = new dijit.layout.ContentPane({style:'width:350px;'});
		var tablaFiltros = new dojox.layout.TableContainer({cols:1});
		for(i=0;i<filtroMasterG.length;i++){
			if(tipoFiltroMasterG[i]=='TextBox'){tablaFiltros.addChild(new dijit.form.TextBox({id:'filtro'+i,label:labelFiltroMasterG[i],type:'text',promptMessage:mensajeFiltroMasterG[i]}));}
			if(tipoFiltroMasterG[i]=='ValidationTextBox'){tablaFiltros.addChild(new dijit.form.ValidationTextBox({id:'filtro'+i,label:labelFiltroMasterG[i],type:'text',promptMessage:mensajeFiltroMasterG[i],required:requeridoFiltroMasterG[i]}));}
			if(tipoFiltroMasterG[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:'filtro'+i,label:labelFiltroMasterG[i],type:'text',promptMessage:mensajeFiltroMasterG[i],required:requeridoFiltroMasterG[i],onChange:function(){dijit.byId('filtro5').constraints.min = arguments[0];}}));}if(dijit.byId('filtro5')){dijit.byId('filtro5').attr('onChange',function(){dijit.byId('filtro4').constraints.max = arguments[0];})}
			if(tipoFiltroMasterG[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:'filtro'+i,label:labelFiltroMasterG[i],type:'text',promptMessage:mensajeFiltroMasterG[i],required:requeridoFiltroMasterG[i],searchAttr:searchAttrFiltroMasterG[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMasterG[i]})}));}
			if(tipoFiltroMasterG[i]=='NumberSpinner'){tablaFiltros.addChild(new dijit.form.NumberSpinner({id:'filtro'+i,label:labelFiltroMasterG[i],type:'number',promptMessage:mensajeFiltroMasterG[i],required:requeridoFiltroMaster[i],searchAttr:searchAttrFiltroMasterG[i]}));}}
		
		//Seteo el anio actual por defecto
		var anioActual = parseInt(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}));
		dijit.byId('filtro4').constraints.max = anioActual + 100;
		dijit.byId('filtro4').constraints.min = anioActual - 100;
		dijit.byId('filtro4').attr('value',anioActual);
		
		AutoCompletar(dijit.byId('filtro0'));
		AutoCompletar(dijit.byId('filtro1'));
		//seteo el store fijo de meses
		dijit.byId('filtro3').store.url = '';
		dijit.byId('filtro3').store.data = mesesStore;
		//Seteo el anio actual por defecto
		dijit.byId('filtro4').attr('value',dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}));

		divFiltros.attr('content',tablaFiltros);
		var botonBuscar = new dijit.form.Button({label:'Buscar',type:'button',onClick:function(){VerificarFiltroGrupo();}},document.createElement('div'));
		dojo.place(botonBuscar.domNode,divFiltros.domNode,'last');
		dijit.byId('filtrosMaster').attr('content',divFiltros);}	
	if(dijit.byId('auditMaster')){
		//Limpio Filtros
		for(i=0;i<camposAuditoriaM.length;i++){if(dijit.byId(camposAuditoriaM[i])){dijit.byId(camposAuditoriaM[i]).destroy();}}
		//Creo campos de auditoria
		var tablaAuditMaster = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'width:350px;'});
		for(i=0;i<camposAuditoriaM.length;i++){tablaAuditMaster.addChild(new dijit.form.TextBox({id:camposAuditoriaM[i],label:labelAuditoria[i],disabled:true,type:'text'}));}
		dijit.byId('auditoriaMaster').attr('content',tablaAuditMaster);}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerificarFiltroGrupo(){
	//Validacion de que el formulario esté bien cargado
	if(dijit.byId('filtrosMaster').validate()){BuscarMasterGrupo();dijit.byId('filtrosMaster').onCancel();}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMasterGrupo(){
	//Limpiar el contentpane...
	valores_filtros = '';
	registroSeleccionado = null;
	dijit.byId('gridContainer').destroyDescendants();
	//Obtengo presupuestos
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarMasterGrupo;
	if(filtroMasterG.length > 0){
		for(i=0;i<filtroMasterG.length;i++){
			urlValue +='&'+filtroMasterG[i]+'='+dijit.byId('filtro'+i).attr('value');
			if(i!=3&&i!=4){valores_filtros += '<b>' + labelFiltroMaster[i] + '</b>' + dijit.byId('filtro'+i).item.detalle[0] + ' ';}
			else{valores_filtros += '<b>' + labelFiltroMaster[i] + '</b>' + dijit.byId('filtro'+i).attr('value') + ' ';}
		}
		/* var filtros = dojo.create('div',{innerHTML:valores_filtros});
		dojo.attr(filtros,'class','dijitToolbar');
		dojo.place(filtros,dojo.byId('gridContainer'),'last'); */
	}
	var presupuestoMarca = new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}); 
	//Obtengo presupuestos por marca y subregion
	var CargarGrillas = function(items,request){
		if(items.length==0){Mensaje('No se han encontrado registros','error','master');}
		for(i=0;i<items.length;i++){
			//Datos de la cabecera de la grilla
			var cabecera = dojo.create('div',{innerHTML:'<table style="width:90%;font-weight:bold;"><tr><td width="20%">Negocio: '+items[i]['negocio_desc'][0]+'</td><td width="20%">Presupuesto: $'+items[i]['importe'][0]+'</td><td width="20%">Vol. Total: '+items[i]['volumen_ventas'][0]+'</td><td width="20%">$/Htl: '+items[i]['precio_htl'][0]+'</td><td width="20%">$ Pendiente: '+items[i]['pendiente'][0]+'</td></tr></table>'});
			dojo.attr(cabecera,'class','dijitToolbar');
			dojo.place(cabecera,dojo.byId('gridContainer'),'last');
			//Creacion de grillas dinamicas
			var urlValue2 ='dbi/presupuesto_region_gruposSubregiones.php?sid='+gvarSID+'&presupuesto_id='+items[i]['presupuesto_id'][0];
        	if(filtroMasterG.length > 0){
        		for(j=0;j<filtroMasterG.length;j++){
        			urlValue2 +='&'+filtroMasterG[j]+'='+dijit.byId('filtro'+j).attr('value');}
        	}
			var grilla = new dojox.grid.DataGrid({store:new dojo.data.ItemFileWriteStore({url:urlValue2,urlPreventCache:true}),autoHeight:true,structure:layoutMaster,onSelected:function(){OnSelectedMaster(this);}},document.createElement('div'));
			dojo.place(grilla.domNode,dojo.byId('gridContainer'),'last');
			grilla.startup();
		}
        HabilitarBotonesMaster(1,false);
	}
	presupuestoMarca.fetch({query:{},onComplete:CargarGrillas});
}
////////////////////////////////////////////////////////////////////////////////////////////////////