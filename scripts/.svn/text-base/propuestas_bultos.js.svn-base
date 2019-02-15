//TITULOS
var titulos =  new Array('Propuestas');
//DMLs
var dmlBuscarMaster = '11635';
var dmlnuevoM = '11701';
var dmlEditarMaster = '11702';
var dmlCopiarMaster = '11717';
var dmlbuscarUnicoM = 'nnnnn'; 
var dmleliminarM = '11703';
var dmlAuditoriaMaster = 'nnnnn';
var dmlgrabarM = '';
//COLUMNAS
var columnasM = new Array('propuesta_id','marcas','vigencia_desde','vigencia_hasta','descripcion','bultos','importe','solicitado','estado','tipo_carga','vigencia_hasta_ext');
var columnasE = new Array('propuesta_id','marcas','vigencia_desde','vigencia_hasta','descripcion','bultos','importe','solicitado','estado','seleccionado','tipo_carga','vigencia_hasta_ext');
var columnasD = new Array('producto_id','producto_desc','bultos','importe','porcentaje','valido');
var columnasC = new Array('cliente_id','razon_social','seleccionado');
var columnasP = new Array('producto_id','producto_desc','seleccionado');
//DESCRIPCIONES
var descripcionesM = new Array('Nro','Marcas','Vig. Desde','Vig. Hasta','Descripci&oacute;n','Bultos','Monto','Solicitado','Estado','Envio Masivo','Tipo de Carga','');
var descripcionesD = new Array('Id','Producto','Bultos','Importe','Porcenaje','Valido');
var descripcionesC = new Array('Id','Razon Social','Selec.');
var descripcionesP = new Array('Id','Descripci&oacute;n','Selec.');
//PRIMARY KEY
var clavesM = new Array('propuesta_id');
//FILTROS
var filtroMaster = new Array('division_id','area_id','subregion_id','tipo_presupuesto_id','mes','anio','estado');
var labelFiltroMaster = new Array('Divisi&oacute;n: ','Area: ','Sub Regi&oacute;n: ','Tipo: ','Mes: ','A&ntilde;o: ','Estado: ');
var mensajeFiltroMaster = new Array('Seleccione la Divisi&oacute;n','Seleccione el Area','Seleccione la Sub Regi&oacute;n','Seleccione el Tipo de Presupuesto','Seleccione el Mes','Seleccione el A&ntilde;o','Seleccione el Estado de la Propuesta');
var requeridoFiltroMaster = new Array(false,false,false,false,true,true,false);
var searchAttrFiltroMaster = new Array('detalle','detalle','detalle','detalle','detalle','','');
var tipoFiltroMaster = new Array('FilteringSelect','FilteringSelect','FilteringSelect','FilteringSelect','FilteringSelect','ValidationTextBox','ValidationTextBox');
var selectFiltroMaster = new Array('11408','11406','11606','11407','','','');
//FORMULARIO
var camposFormM = new Array('division_id','area_id','subregion_id','tipo_presup_id','propuesta_id','tipo_carga','fecha_carga','tipo_descuento_id','clientes','participacion_cli','vigencia_desde','vigencia_hasta','descrip_prop_id','objetivo_prop_id','empresa_compe_id','dist_fisica_comp','bultos_afectados','op_realizar','canales_mkt','observaciones','prorratea_calibres','criterio','marca_id','concepto_id','monto','pdv');
var labelFormM = new Array('Divisi&oacute;n: ','Area: ','Subregi&oacute;n: ','Tipo: ','Propuesta: ','Tipo de Carga: ','Fecha de Carga: ','Tipificaci&oacute;n: ','Clientes: ','Participaci&oacute;n Dist(%): ','Vigencia Desde: ','Vigencia Hasta: ','Tipo de Acci&oacute;n: ','Objetivo: ','Contra: ','Dist. Fisica Comp(%): ','Bultos afectados por la acci&oacute;n: ','Op. a realizar: ','Canal de Mkt: ','Observaciones: ','Prorratea para todos los calibres: ','Criterio: ','Marca: ','Concepto: ','Monto: ','PDV: ');
var requeridoFormM = new Array(true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false);
var mensajesFormM = new Array('Seleccione la divisi&oacute;n','Seleccione el Area','Seleccione la Sub Regi&oacute;n','Seleccione el Tipo de Presupuesto','','','','Seleccione la Tipificaci&oacute;n','','Ingrese la Participaci&oacute;n Dist(%)','Seleccione la Vigencia Desde','Seleccione la Vigencia Hasta','Seleccione el Tipo de Acci&oacute;n','Seleccione el Objetivo','Seleccione la Empresa','Ingrese la Dist. Física Comp. (%)','Ingrese la cantidad de Bultos afecetados por la acci&oacute;n','Ingrese las Op. a Realizar','Seleccione los Canales de MKT','','','Ingrese el Monto','');
var searchAttrFormM = new Array('detalle','detalle','detalle','detalle','','','','detalle','','','','','detalle','detalle','detalle','','','','detalle','','','detalle','detalle','detalle','','');
var selectFormM = new Array('11408','11406','11629','11407','','','','11607','','','','','11608','11609','11610','','','','11611','','','','11409','11615','','');
var registroSeleccionado = null;
var mesesStore = {identifier:'id',label:'detalle',items:[{id:'01',detalle:'01'},{id:'02',detalle:'02'},{id:'03',detalle:'03'},{id:'04',detalle:'04'},{id:'05',detalle:'05'},{id:'06',detalle:'06'},{id:'07',detalle:'07'},{id:'08',detalle:'08'},{id:'09',detalle:'09'},{id:'10',detalle:'10'},{id:'11',detalle:'11'},{id:'12',detalle:'12'}]};
//Carga las estructuras de las tablas
var layoutMaster = [
    {width: "5%", field: columnasM[0], name: descripcionesM[0]},
    {width: "auto", field: columnasM[1], name: descripcionesM[1]},
    {width: "8%", field: columnasM[2], name: descripcionesM[2]},
	{width: "8%", field: columnasM[3], name: descripcionesM[3]},
	{width: "auto", field: columnasM[4], name: descripcionesM[4]},
    {width: "8%", field: columnasM[5], name: descripcionesM[5]},
	{width: "8%", field: columnasM[6], name: descripcionesM[6]},
	{width: "8%", field: columnasM[7], name: descripcionesM[7]},
	{width: "5%", field: columnasM[8], name: descripcionesM[8]},
	{width: "5%", field: columnasM[9], name: descripcionesM[9],hidden:true},
	{width: "5%", field: columnasM[10], name: descripcionesM[10],hidden:true}];
var layoutEnvio = [
    {width: "5%", field: columnasE[0], name: descripcionesM[0]},
    {width: "auto", field: columnasE[1], name: descripcionesM[1]},
    {width: "8%", field: columnasE[2], name: descripcionesM[2]},
	{width: "8%", field: columnasE[3], name: descripcionesM[3]},
	{width: "auto", field: columnasE[4], name: descripcionesM[4]},
    {width: "8%", field: columnasE[5], name: descripcionesM[5]},
	{width: "8%", field: columnasE[6], name: descripcionesM[6]},
	{width: "8%", field: columnasE[7], name: descripcionesM[7]},
	{width: "5%", field: columnasE[8], name: descripcionesM[8]},
	{width: "5%", field: columnasE[9], name: descripcionesM[9],editable:true, type:dojox.grid.cells.Bool},
	{width: "5%", field: columnasE[10], name: descripcionesM[10],hidden:true},
	{width: "5%", field: columnasM[11], name: descripcionesM[11],hidden:true}];
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
var CalcularTotalBultos = function(value){
	bultosValorizados = false;
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	var suma = 0;
	var AsignarTotal = function(items,request){
		for(i=0;i<items.length;i++){
			suma+=parseInt(dijit.byId('gridProductos').store.getValue(items[i],'bultos'));}
		dojo.byId('divTotalBultos').innerHTML = suma;
	}
	dijit.byId('gridProductos').store.fetch({query:{},onComplete:AsignarTotal});
	return value;
}
var layoutDialog = [
    {width: "0px", field: columnasD[0], name: descripcionesD[0],hidden:true},
    {width: "105px", field: columnasD[1], name: descripcionesD[1]},
    {width: "105px", field: columnasD[2], name: descripcionesD[2],editable:true,formatter:CalcularTotalBultos},
	{width: "105px", field: columnasD[3], name: descripcionesD[3],formatter:CalcularTotal},
	{width: "0px", field: columnasD[4], name: descripcionesD[4],hidden:true},
	{width: "0px", field: columnasD[5], name: descripcionesD[5],hidden:true}];
var layoutDialogDetalle = [
    {width: "0px", field: columnasD[0], name: descripcionesD[0],hidden:true},
    {width: "105px", field: columnasD[1], name: descripcionesD[1]},
    {width: "105px", field: columnasD[2], name: descripcionesD[2]},
	{width: "105px", field: columnasD[3], name: descripcionesD[3]},
	{width: "0px", field: columnasD[4], name: descripcionesD[4],hidden:true},
	{width: "0px", field: columnasD[5], name: descripcionesD[5],hidden:true}];
var layoutClientesOrigen = [
    {width: "45px", field: columnasC[0], name: descripcionesC[0]},
    {width: "200px", field: columnasC[1], name: descripcionesC[1]},
    {width: "54px", field: columnasC[2], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridOrigen\');"/> '+descripcionesC[2], editable:true, type:dojox.grid.cells.Bool}];
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
    {width: "54px", field: columnasP[2], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridDestinoP\');"/> '+descripcionesP[2], editable:true, type:dojox.grid.cells.Bool}];
var cantidadGrillas = 0;
var bultosValorizados = false;
//campos de auditoria
var camposAuditoriaM = new Array('usr_altam','fecha_altam','usr_modifm','fecha_modifm');
var labelAuditoria = new Array('Creado por: ','Fecha de creaci&oacute;n: ','Modificado por: ','Fecha de modificaci&oacute;n: ');
//Carga de titulos
document.getElementById('bloqueMaster').innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	ArmadoFiltroYAuditoria();
	if(dijit.byId('buscarMaster')){
	    dijit.byId('buscarMaster').destroy();
        dijit.byId('separatorMaster').destroy();
        dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'verDetalleMaster',style:'padding-left:3px;padding-right:3px;',label:'Ver Detalle',showLabel:false,iconClass:'verDetalleIcon',disabled:true,onClick:function(){VerDetalleMaster();}}));    
    }
	if(dijit.byId('enviarMasivoAMaster') || dijit.byId('enviarMasivoWMaster')){
		columnasM = columnasE;layoutMaster = layoutEnvio;
		dojo.place('<div id="masivo" class="dijitToolbar" style="text-align:right;height:24px;"><label for="selec">Seleccionar Todos</label><input id="selec" type="checkbox" title="Seleccionar Todos" onclick="CheckColumn(this);"/></div>',dojo.byId('cabecera'));
		//dojo.byId('masivo').innerHTML='<label for="selec">Seleccionar Todos</label><input id="selec" type="checkbox" title="Seleccionar Todos" onclick="CheckColumn(this);"/>';
    }
	if(dijit.byId('cargaMasivaMaster')){dijit.byId('cargaMasivaMaster').attr('disabled',false);}
	if(dijit.byId('editarMasterAW')){dijit.byId('editarMasterAW').destroy();}
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
			if(tipoFiltroMaster[i]=='ValidationTextBox'){tablaFiltros.addChild(new dijit.form.ValidationTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',constraints:{datePattern:'dd-MM-yyyy'},promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],onChange:function(){if(tipoFiltroMaster[parseInt(this.id.charAt(6))+1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))+1)).constraints.min = arguments[0];}else if(tipoFiltroMaster[parseInt(this.id.charAt(6))-1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))-1)).constraints.max = arguments[0];}}}));}
			if(tipoFiltroMaster[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[i],preventCache:true})}));}}
		AutoCompletar(dijit.byId('filtro1'));
		AutoCompletar(dijit.byId('filtro3'));
		//agrego el area a la busqueda de subregion
		dijit.byId('filtro2').store.url += '&area_id='+dijit.byId('filtro1').attr('value');
		//Borrado de subregiones al cambiar el area
		dijit.byId('filtro1').onChange= function(value){dijit.byId('filtro2').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[2]+'&area_id='+value}));dijit.byId('filtro2').store.fetch();dijit.byId('filtro2').attr('value',null);AutoCompletar(dijit.byId('filtro2'));}
		//Asigno store de meses y seteo anio actual por defecto
		dijit.byId('filtro4').attr('store',new dojo.data.ItemFileReadStore({data: mesesStore}));
		dijit.byId('filtro5').attr('value',dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}));
		
		divFiltros.attr('content',tablaFiltros);
		var botonBuscar = new dijit.form.Button({label:'Buscar',type:'button',onClick:function(){VerificarFiltro();}},document.createElement('div'));
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
function VerificarFiltro(){
	//Validacion de que el formulario esté bien cargado
	if(dijit.byId('filtrosMaster').validate()){BuscarMaster();dijit.byId('filtrosMaster').onCancel();}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargaMasivaMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'text-align:center;width:390px;'});
	//Cracion de filtros
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'70',style:'text-align:left;'});
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
							//dijit.byId('divCamposM').destroyDescendants();
							dijit.byId('dialogCargaMasivaMaster').destroyRecursive();
                            procesando.hide();
                            BuscarMaster();
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
	dijit.byId('userfile').fileInput.readOnly = true;
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
	window.open(urlValue,"Bajar_Plantilla_Prop_Bult","menubar=no,width=300,height=300,toolbar=no,resizable=yes");
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
	dijit.byId('clientes_desc').attr('value','');
	dijit.byId('clientes').attr('value','');
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
	var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[0],style:'width:130px;',label:labelFormM[0],searchAttr:searchAttrFormM[0],promptMessage:mensajesFormM[0],required:requeridoFormM[0],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[0]}),onChange:function(value){dijit.byId('gridOrigenP').setStore(null);dijit.byId('gridOrigenP').update();dijit.byId('gridDestinoP').setStore(null);dijit.byId('gridDestinoP').update();dijit.byId('gridProductos').setStore(null);dijit.byId('gridProductos').update();dijit.byId(camposFormM[12]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[12]+'&division_id='+value}));dijit.byId(camposFormM[12]).store.fetch();dijit.byId(camposFormM[12]).attr('value',null);AutoCompletar(dijit.byId(camposFormM[12]));dijit.byId(camposFormM[13]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[13]+'&division_id='+value}));dijit.byId(camposFormM[13]).store.fetch();dijit.byId(camposFormM[13]).attr('value',null);AutoCompletar(dijit.byId(camposFormM[13]));dijit.byId(camposFormM[14]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[14]+'&division_id='+value}));dijit.byId(camposFormM[14]).store.fetch();dijit.byId(camposFormM[14]).attr('value',null);dijit.byId('marc').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11409&division_id='+value}));dijit.byId('contrato').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11730&division_id='+value+'&distribuidor_id='+dijit.byId('clientes_desc').attr('value')}));dijit.byId('contrato').store.fetch();dijit.byId('contrato').attr('value',null);ObtenerNoAplica();}}));
	(dijit.byId('filtro0').attr('value'))?dijit.byId(camposFormM[0]).attr('value',dijit.byId('filtro0').attr('value')):AutoCompletar(dijit.byId(camposFormM[0]));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[1],value:(dijit.byId('filtro1').attr('value'))?dijit.byId('filtro1').attr('value'):null,style:'width:130px;',label:labelFormM[1],searchAttr:searchAttrFormM[1],promptMessage:mensajesFormM[1],required:requeridoFormM[1],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[1]}),onChange:function(value){CambiarCliente();dijit.byId(camposFormM[2]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[2]+'&area_id='+value}));dijit.byId(camposFormM[2]).store.fetch();dijit.byId(camposFormM[2]).attr('value',(dijit.byId('filtro2').attr('value'))?dijit.byId('filtro2').attr('value'):null);AutoCompletar(dijit.byId(camposFormM[2]));}}));
	AutoCompletar(dijit.byId(camposFormM[1]));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[2],style:'width:130px;',label:labelFormM[2],searchAttr:searchAttrFormM[2],promptMessage:mensajesFormM[2],required:requeridoFormM[2],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[2]+'&area_id='+dijit.byId(camposFormM[1]).attr('value')}),onChange:function(value){CambiarCliente();}}));
	AutoCompletar(dijit.byId(camposFormM[2]));
	if(dijit.byId('filtro1').attr('value')){dijit.byId(camposFormM[2]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[2]+'&area_id='+dijit.byId('filtro1').attr('value')}));dijit.byId(camposFormM[2]).store.fetch();dijit.byId(camposFormM[2]).attr('value',(dijit.byId('filtro2').attr('value'))?dijit.byId('filtro2').attr('value'):null);AutoCompletar(dijit.byId(camposFormM[2]));}
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[3],style:'width:130px;',label:labelFormM[3],searchAttr:searchAttrFormM[3],promptMessage:mensajesFormM[3],required:requeridoFormM[3],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[3]}),onChange:function(value){dijit.byId(camposFormM[7]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[7]+'&tipo_presupuesto_id='+value}));dijit.byId(camposFormM[7]).store.fetch();dijit.byId(camposFormM[7]).attr('value',null);AutoCompletar(dijit.byId(camposFormM[7]));}}));
	(dijit.byId('filtro3').attr('value'))?dijit.byId(camposFormM[3]).attr('value',dijit.byId('filtro3').attr('value')):AutoCompletar(dijit.byId(camposFormM[3]));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[5],value:'Bultos',style:'width:130px;',label:labelFormM[5],readOnly:true,required:requeridoFormM[5]}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[25],style:'width:130px;',label:labelFormM[25],required:requeridoFormM[25]}));
	tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[10],value:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,1),constraints:{datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[10],label:labelFormM[10],onChange:function(){dijit.byId(camposFormM[11]).constraints.min = arguments[0];dijit.byId(camposFormM[11]).constraints.max = new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(arguments[0]));}}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[7],style:'width:130px;',label:labelFormM[7],searchAttr:searchAttrFormM[7],promptMessage:mensajesFormM[7],required:requeridoFormM[7],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[7]+'&tipo_presupuesto_id='+dijit.byId(camposFormM[3]).attr('value')})}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[12],style:'width:130px;',label:labelFormM[12],searchAttr:searchAttrFormM[12],promptMessage:mensajesFormM[12],required:requeridoFormM[12],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[12]+'&division_id='+dijit.byId(camposFormM[0]).attr('value')})}));
	tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[11],value:new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(new Date())),constraints:{datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[11],label:labelFormM[11]}));
	dijit.byId(camposFormM[11]).constraints.min = dijit.byId(camposFormM[10]).attr('value');
	dijit.byId(camposFormM[11]).constraints.max = new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(dijit.byId(camposFormM[10]).attr('value')));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[13],style:'width:130px;',label:labelFormM[13],searchAttr:searchAttrFormM[13],promptMessage:mensajesFormM[13],required:requeridoFormM[13],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[13]+'&division_id='+dijit.byId(camposFormM[0]).attr('value')})}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[14],style:'width:130px;',label:labelFormM[14],searchAttr:searchAttrFormM[14],promptMessage:mensajesFormM[14],required:requeridoFormM[14],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[14]+'&division_id='+dijit.byId(camposFormM[0]).attr('value')})}));
	tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'clientes_desc',style:'width:130px;height:58px;',required:requeridoFormM[8],multiple:true,label:(labelFormM[8]+'<button class="dijitButtonNode" onclick="VerDialogoClientes();" type="button">Ver</button>'),readOnly:true}));
	tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[18],required:requeridoFormM[18],style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,onClick:function(){dijit.hideTooltip(this.domNode);},store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[18]})}));
	tablaForm.addChild(new dijit.form.SimpleTextarea({id:camposFormM[19],maxLength:'100',required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
	tablaForm.addChild(new dijit.form.TextBox({id:camposFormM[8],style:'visibility:hidden;width:0px;',label:''}));
	if(dijit.byId('contrato')){dijit.byId('contrato').destroy();}tablaForm.addChild(new dijit.form.FilteringSelect({id:'contrato',style:'width:130px;',label:'Contrato: ',searchAttr:'detalle',promptMessage:'Seleccione un Contrato',required:false,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11730&division_id='+dijit.byId(camposFormM[0]).attr('value')+'&distribuidor_id='+dijit.byId('clientes_desc').attr('value')}),onChange:function(value){dijit.byId('gridDestinoP').setStore(null);dijit.byId('gridDestinoP').update();dijit.byId('gridProductos').setStore(null);dijit.byId('gridProductos').update();if(value==''){dijit.byId('marc').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11409&division_id='+dijit.byId('division_id').attr('value')}));dijit.byId(camposFormM[25]).attr('value','');dijit.byId(camposFormM[25]).attr('readOnly',false);}else{dijit.byId(camposFormM[25]).attr('value',dijit.byId('contrato').item['pdv_cliente'][0]);dijit.byId(camposFormM[25]).attr('readOnly',true);dijit.byId('marc').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11731&division_id='+dijit.byId('division_id').attr('value')+'&contrato_id='+value}));}}}));
	dijit.byId('divCampos').attr('content',tablaForm);
	tablaForm.startup();
	
	var botonProd = new dijit.form.Button({label:'Ver Productos',type:'button',onClick:function(){dijit.byId('gridOrigenP').attr('autoWidth',true);dijit.hideTooltip(dijit.byId('gridProductos').domNode);dijit.byId('dialogProductos').show();}});
	dojo.place(botonProd.domNode,dijit.byId('divCargaProductos').domNode,'last');
	var botonProd = new dijit.form.Button({label:'Valorizar',type:'button',onClick:function(){Valorizar();}});
	dojo.place(botonProd.domNode,dijit.byId('divCargaProductos').domNode,'last');
	
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
function VerDialogoClientes(){
	//verificar que haya subregion
	if(!dijit.byId(camposFormM[2]).isValid()){dijit.byId(camposFormM[2]).focus();return;}
	dijit.byId('cli_id').attr('value','');
	dijit.byId('razon').attr('value','');
	dijit.byId('gridOrigen').attr('autoWidth',true);
	dijit.hideTooltip(dijit.byId('clientes_desc').domNode);
	dijit.byId('dialogClientes').show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarClientes(){
	while(dijit.byId('clientes_desc').options.length>0){
		dijit.byId('clientes_desc').removeOption(dijit.byId('clientes_desc').options[0]);}
	if(dijit.byId('gridDestino').store==null){return;}
	var ActualizarMultiselect = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('clientes_desc').addOption({disabled:true,selected:true,label:items[i]['cliente_id']+'-'+items[i]['razon_social'],value:items[i]['cliente_id']});}
		dijit.byId("dialogClientes").hide();
	}
	dijit.byId('gridDestino').store.fetch({query:{},onComplete:ActualizarMultiselect});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function Valorizar(){
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	dijit.byId('gridProductos').edit.apply();
	if(dijit.byId('clientes_desc').attr('value')==''){dijit.showTooltip('Debe seleccionar un Cliente',dijit.byId('clientes_desc').domNode,'above');return;}
	var CompletarJSON = function(items,request){
		var ids = '';
		var bultos = '';
		for(i=0;i<items.length;i++){
			console.log(dijit.byId('gridProductos').store.getValue(items[i],'bultos'));
			if(dijit.byId('gridProductos').store.getValue(items[i],'bultos')<1||dijit.byId('gridProductos').store.getValue(items[i],'bultos')>9999){dijit.showTooltip('Los productos deben tener cargado bultos mayores a 0 y menores a 10000',dijit.byId('gridProductos').domNode,'above');return;}
			if(isNaN(dijit.byId('gridProductos').store.getValue(items[i],'bultos'))||dijit.byId('gridProductos').store.getValue(items[i],'bultos').indexOf('.')!=-1){dijit.showTooltip('Los productos deben tener bultos enteros',dijit.byId('gridProductos').domNode,'above');return;}
			ids+=dijit.byId('gridProductos').store.getValue(items[i],'producto_id');
			bultos+=dijit.byId('gridProductos').store.getValue(items[i],'bultos');
			if(i!=items.length-1){ids+='-';bultos+='-';}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
		procesando.show();
		var valorizado = new dojo.data.ItemFileWriteStore({url:'dbi/propuestas_valorizacion.php?sid='+gvarSID+'&productos='+ids+'&bultos_productos='+bultos+'&cliente_id='+dijit.byId('clientes_desc').attr('value')});
		var EliminarInvalidos = function(items,request){
			var eliminados = '';
			for(i=0;i<items.length;i++){
				if(i!=0){eliminados+=', ';}
				eliminados+=valorizado.getValue(items[i],'producto_id');
				valorizado.deleteItem(items[i]);}
			if(eliminados){PopUp('Advertencia','Los productos '+eliminados+' han sido removidos por no estar valorizados.');}
			dijit.byId('gridProductos').setStore(valorizado);
			dijit.byId('gridProductos').attr('autoWidth',true);
			bultosValorizados = true;
			procesando.hide();
		}
		valorizado.fetch({query:{valido:'0'},onComplete:EliminarInvalidos});
	}
	if(dijit.byId('gridProductos').store){dijit.byId('gridProductos').store.fetch({query:{},onComplete:CompletarJSON});}
	else{dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ValorizarEdicion(){
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	dijit.byId('gridProductos').edit.apply();
	if(dijit.byId('clientes_desc').attr('value')==''){dijit.showTooltip('Debe seleccionar un Cliente',dijit.byId('clientes_desc').domNode,'above');return;}
	var CompletarJSON = function(items,request){
		var ids = '';
		var bultos = '';
		for(i=0;i<items.length;i++){
			console.log(dijit.byId('gridProductos').store.getValue(items[i],'bultos'));
			if(dijit.byId('gridProductos').store.getValue(items[i],'bultos')<1||dijit.byId('gridProductos').store.getValue(items[i],'bultos')>9999){dijit.showTooltip('Los productos deben tener cargado bultos mayores a 0 y menores a 10000',dijit.byId('gridProductos').domNode,'above');return;}
			if(isNaN(dijit.byId('gridProductos').store.getValue(items[i],'bultos'))||dijit.byId('gridProductos').store.getValue(items[i],'bultos').indexOf('.')!=-1){dijit.showTooltip('Los productos deben tener bultos enteros',dijit.byId('gridProductos').domNode,'above');return;}
			ids+=dijit.byId('gridProductos').store.getValue(items[i],'producto_id');
			bultos+=dijit.byId('gridProductos').store.getValue(items[i],'bultos');
			if(i!=items.length-1){ids+='-';bultos+='-';}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
		procesando.show();
		var valorizado = new dojo.data.ItemFileWriteStore({url:'dbi/propuestas_valorizacion.php?sid='+gvarSID+'&productos='+ids+'&bultos_productos='+bultos+'&cliente_id='+dijit.byId('clientes').attr('value')});
		var EliminarInvalidos = function(items,request){
			var eliminados = '';
			for(i=0;i<items.length;i++){
				if(i!=0){eliminados+=', ';}
				eliminados+=valorizado.getValue(items[i],'producto_id');
				valorizado.deleteItem(items[i]);}
			if(eliminados){PopUp('Advertencia','Los productos '+eliminados+' han sido removidos por no estar valorizados.');}
			dijit.byId('gridProductos').setStore(valorizado);
			dijit.byId('gridProductos').attr('autoWidth',true);
			bultosValorizados = true;
			procesando.hide();
		}
		valorizado.fetch({query:{valido:'0'},onComplete:EliminarInvalidos});
	}
	if(dijit.byId('gridProductos').store){dijit.byId('gridProductos').store.fetch({query:{},onComplete:CompletarJSON});}
	else{dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
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
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11614&subregion_id='+dijit.byId('subregion_id').attr('value')+'&division_id='+dijit.byId('division_id').attr('value')+'&marca_id='+dijit.byId('marca_id').attr('value')+'&monto='+dijit.byId('monto').attr('value');
	gridProductos.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	gridProductos.attr("autoWidth",true);
	gridProductos.update();
	gridProductos.selection.clear();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductosC(){
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11616&concepto_id='+dijit.byId('concepto_id').attr('value')+'&monto='+dijit.byId('monto').attr('value');
	gridProductos.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	gridProductos.attr("autoWidth",true);
	gridProductos.update();
	gridProductos.selection.clear();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarProductos(){
	if(dijit.byId('gridDestinoP').store==null){return;}
	dojo.byId('divTotalImporte').innerHTML = '0';
	dojo.byId('divTotalBultos').innerHTML = '0';
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
					if(!item){dijit.byId('gridProductos').store.newItem({producto_id:dijit.byId('gridDestinoP').store.getValue(items[i],'producto_id'), producto_desc:dijit.byId('gridDestinoP').store.getValue(items[i],'producto_desc'),bultos:'0',importe:'0',porcentaje:'',valido:'1'});}
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
function CargarClientes1(){
	dijit.hideTooltip(dijit.byId('gridOrigen').domNode);
	if(dijit.byId('gridOrigen').store==null){return;}
	dijit.byId('clientes').destroyDescendants();
	if(dojo.byId('clientes').hasChildNodes()){
		while(dojo.byId('clientes').childNodes.length)
		{dojo.byId('clientes').removeChild(dojo.byId('clientes').childNodes[0]);}
	}
	var ActualizarMultiselect = function(items,request){
		if(items.length>1){dijit.showTooltip('Seleccione solo un cliente',dijit.byId('gridOrigen').domNode,'above');return;}
		if(items.length==0){dijit.showTooltip('Seleccione al menos un cliente',dijit.byId('gridOrigen').domNode,'above');return;}
		dijit.byId('clientes').attr('value',items[0]['cliente_id']);
		dijit.byId('clientes_desc').attr('value',items[0]['razon_social']);
		dijit.byId('contrato').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11730&division_id='+dijit.byId(camposFormM[0]).attr('value')+'&distribuidor_id='+dijit.byId('clientes_desc').attr('value')}));
		dijit.byId('contrato').store.fetch();
		dijit.byId('contrato').attr('value',null);
		dijit.byId("dialogClientes").hide();
	}
	dijit.byId('gridOrigen').store.fetch({query:{seleccionado:true},onComplete:ActualizarMultiselect});
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
function BuscarMaster(){
	//Limpiar el contentpane...
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
			var urlValue2 ='dbi/propuestas_clientePropuestas1.php?sid='+gvarSID+'&cliente_id='+items[i]['cliente_id'][0];
        	if(filtroMaster.length > 0){
        		for(j=0;j<filtroMaster.length;j++){
        			if(tipoFiltroMaster[j]=='DateTextBox'){urlValue2+='&'+filtroMaster[j]+'='+dijit.byId('filtro'+j).valueNode.value;}
					else{urlValue2+='&'+filtroMaster[j]+'='+dijit.byId('filtro'+j).attr('value');}}
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
	if(dijit.byId('contrato').attr('value')!=''){var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11732&division_id='+dijit.byId('division_id').attr('value')+'&marca_id='+dijit.byId('marc').attr('value')+'&producto_id='+dijit.byId('prod_id').valueNode.value+'&producto_desc='+dijit.byId('desc').attr('value')+'&contrato_id='+dijit.byId('contrato').attr('value');
	}else{var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=11612&division_id='+dijit.byId('division_id').attr('value')+'&marca_id='+dijit.byId('marc').attr('value')+'&producto_id='+dijit.byId('prod_id').valueNode.value+'&producto_desc='+dijit.byId('desc').attr('value');}
	dijit.byId('gridOrigenP').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigenP').attr('autoWidth',true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMaster(){
	dijit.byId('gridProductos').attr('structure',layoutDialog);
	//Validacion
	if(registroSeleccionado[0][columnasM[8]]!='PEA'){Mensaje('Solo puede editar Propuestas en Estado PEA','error','master');return;}
	if(registroSeleccionado[0]['tipo_carga']=='IM'){Mensaje('Solo puede editar Propuestas de tipo de carga BULTOS','error','master');return;}
	var fechaActual = dojo.date.locale.format(new Date(),{datePattern:'yyyyMMdd',selector:'date'});
	var vigencia = registroSeleccionado[0][columnasM[3]][0].substring(6,11) + registroSeleccionado[0][columnasM[3]][0].substring(3,5) + registroSeleccionado[0][columnasM[3]][0].substring(0,2);
	if(fechaActual>vigencia){Mensaje('Solo puede editar Propuestas vigentes','error','master');return;}
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11618&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Bultos',style:'width:130px;',label:labelFormM[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['fecha_carga'][0],style:'width:130px;',label:labelFormM[6],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipificacion'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({id:'clientes_desc',value:items[0]['cliente'][0],style:'width:130px;',label:labelFormM[8],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({id:'clientes',value:items[0]['cliente_id'][0],style:'visibility:hidden;width:0px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_desde'][0],style:'width:130px;',label:labelFormM[10],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_hasta'][0],style:'width:130px;',label:labelFormM[11],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['pdv'][0],style:'width:130px;',label:labelFormM[25],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_accion'][0],style:'width:130px;',label:labelFormM[12],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['objetivo'][0],style:'width:130px;',label:labelFormM[13],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contra'][0],style:'width:130px;',label:labelFormM[14],readOnly:true}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'canales_mkt',readOnly:true,style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,readOnly:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11619&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})}));
		tablaForm.addChild(new dijit.form.SimpleTextarea({id:camposFormM[19],value:items[0]['observaciones'][0],required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contrato_id'][0],style:'width:130px;',label:'Contrato: ',readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		dijit.byId('marc').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11409&division_id='+dijit.byId('division_id').attr('value')}));
		dijit.byId('divCampos').attr('content',tablaForm);
		tablaForm.startup();
		//Muestro el dialogo
		dijit.byId('dialogMaster').show();
		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=11620&propuesta_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarProductosEdicion(urlValue);
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
	dijit.byId('divBotones').destroyDescendants();
	var botonProd = new dijit.form.Button({label:'Ver Productos',type:'button',onClick:function(){CargarProductosInversa();}});
	dojo.place(botonProd.domNode,dijit.byId('divCargaProductos').domNode,'last');
	var botonProd = new dijit.form.Button({label:'Valorizar',type:'button',onClick:function(){ValorizarEdicion();}});
	dojo.place(botonProd.domNode,dijit.byId('divCargaProductos').domNode,'last');
	//Creacion de botones
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
	if(registroSeleccionado[0]['tipo_carga']=='IM'){Mensaje('Solo puede editar Propuestas de tipo de carga BULTOS','error','master');return;}
	var fechaActual = dojo.date.locale.format(new Date(),{datePattern:'yyyyMMdd',selector:'date'});
	var vigencia = registroSeleccionado[0][columnasM[3]][0].substring(6,11) + registroSeleccionado[0][columnasM[3]][0].substring(3,5) + registroSeleccionado[0][columnasM[3]][0].substring(0,2);
	if(fechaActual>vigencia){Mensaje('Solo puede editar Propuestas vigentes','error','master');return;}
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11618&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Bultos',style:'width:130px;',label:labelFormM[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['fecha_carga'][0],style:'width:130px;',label:labelFormM[6],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipificacion'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({id:'clientes_desc',value:items[0]['cliente'][0],style:'width:130px;',label:labelFormM[8],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({id:'clientes',value:items[0]['cliente_id'][0],style:'visibility:hidden;width:0px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_desde'][0],style:'width:130px;',label:labelFormM[10],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_hasta'][0],style:'width:130px;',label:labelFormM[11],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['pdv'][0],style:'width:130px;',label:labelFormM[25],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_accion'][0],style:'width:130px;',label:labelFormM[12],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['objetivo'][0],style:'width:130px;',label:labelFormM[13],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contra'][0],style:'width:130px;',label:labelFormM[14],readOnly:true}));
		if(dijit.byId('canales_mkt')){dijit.byId('canales_mkt').destroy();}tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'canales_mkt',readOnly:true,style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11619&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})}));
		tablaForm.addChild(new dijit.form.SimpleTextarea({id:camposFormM[19],value:items[0]['observaciones'][0],required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contrato_id'][0],style:'width:130px;',label:'Contrato: ',readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		dijit.byId('marc').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11409&division_id='+dijit.byId('division_id').attr('value')}));
		dijit.byId('divCampos').attr('content',tablaForm);
		tablaForm.startup();
		//Muestro el dialogo
		dijit.byId('dialogMaster').show();
		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=11620&propuesta_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarProductosEdicion(urlValue);
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
	var botonProd = new dijit.form.Button({label:'Ver Productos',type:'button',onClick:function(){CargarProductosInversa();}});
	dojo.place(botonProd.domNode,dijit.byId('divCargaProductos').domNode,'last');
	var botonProd = new dijit.form.Button({label:'Valorizar',type:'button',onClick:function(){ValorizarEdicion();}});
	dojo.place(botonProd.domNode,dijit.byId('divCargaProductos').domNode,'last');
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
	dijit.byId('gridProductos').attr('structure',layoutDialog);
	//Validacion
	if(registroSeleccionado[0][columnasM[8]]!='AW'){Mensaje('Solo se pueden ajustar Propuestas en Estado AW','error','master');return;}
	if(registroSeleccionado[0]['tipo_carga']=='IM'){Mensaje('Solo puede ajustar Propuestas de tipo de carga BULTOS','error','master');return;}
	var fechaActual = dojo.date.locale.format(new Date(),{datePattern:'yyyyMMdd',selector:'date'});
	var vigencia = registroSeleccionado[0]['vigencia_hasta_ext'][0].substring(6,11) + registroSeleccionado[0]['vigencia_hasta_ext'][0].substring(3,5) + registroSeleccionado[0]['vigencia_hasta_ext'][0].substring(0,2);
	if(fechaActual>vigencia){Mensaje('Solo puede ajustar Propuestas vigentes','error','master');return;}
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11618&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Bultos',style:'width:130px;',label:labelFormM[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['fecha_carga'][0],style:'width:130px;',label:labelFormM[6],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipificacion'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({id:'clientes_desc',value:items[0]['cliente'][0],style:'width:130px;',label:labelFormM[8],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({id:'clientes',value:items[0]['cliente_id'][0],style:'visibility:hidden;width:0px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_desde'][0],style:'width:130px;',label:labelFormM[10],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_hasta'][0],style:'width:130px;',label:labelFormM[11],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['pdv'][0],style:'width:130px;',label:labelFormM[25],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_accion'][0],style:'width:130px;',label:labelFormM[12],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['objetivo'][0],style:'width:130px;',label:labelFormM[13],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contra'][0],style:'width:130px;',label:labelFormM[14],readOnly:true}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'canales_mkt',readOnly:true,style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,readOnly:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11619&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})}));
		tablaForm.addChild(new dijit.form.SimpleTextarea({id:camposFormM[19],value:items[0]['observaciones'][0],required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contrato_id'][0],style:'width:130px;',label:'Contrato: ',readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		dijit.byId('marc').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11409&division_id='+dijit.byId('division_id').attr('value')}));
		dijit.byId('divCampos').attr('content',tablaForm);
		tablaForm.startup();
		//Muestro el dialogo
		dijit.byId('dialogMaster').show();
		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=11620&propuesta_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarProductosEdicion(urlValue);
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
	var botonProd = new dijit.form.Button({label:'Ver Productos',type:'button',onClick:function(){CargarProductosInversa();}});
	dojo.place(botonProd.domNode,dijit.byId('divCargaProductos').domNode,'last');
	var botonProd = new dijit.form.Button({label:'Valorizar',type:'button',onClick:function(){ValorizarEdicion();}});
	dojo.place(botonProd.domNode,dijit.byId('divCargaProductos').domNode,'last');
	//Creacion de botones
	dijit.byId('divBotones').destroyDescendants();
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMasterEditar();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	//Seteo propiedades para Editar
	dmlgrabarM = '11728';
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
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=11625&propuesta_id='+registroSeleccionado[0][columnasM[0]];
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
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=11627&propuestas='+propuestasChecked;
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==0){
			BuscarMaster();
			Mensaje(response.errmsg,'mensaje','master');
		}else{
			PopUp('Error',response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EnviarMasivo(dmlid){
	dijit.hideTooltip(dijit.byId('gridContainerEnvio').domNode);
	dijit.byId('dialogEnvio').hide();
	var propuestasChecked = '';
	for(i=0;i<cantidadGrillas;i++){
		if(dijit.byId('grilla'+i).store){
			var ObtenerPropuestas = function(item){propuestasChecked+=item['propuesta_id'][0]+',';}
			dijit.byId('grilla'+i).store.fetch({query:{seleccionado:'true'},onItem:ObtenerPropuestas});
		}
	}
	if(propuestasChecked==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridContainerEnvio').domNode,'above');dijit.byId('dialogEnvio').show();return;}
	//Grabación de datos en la base de datos
	propuestasChecked = propuestasChecked.substr(0,propuestasChecked.length-1);
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlid+'&propuesta_id='+propuestasChecked;
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==0){
			dijit.byId('gridContainerEnvio').destroyDescendants();
			dijit.byId('gridContainerEnvioBotones').destroyDescendants();
			Mensaje(response.errmsg,'mensaje','master');
		}else{
			dijit.byId('dialogEnvio').show();
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
					if(!item){dijit.byId('gridProductos').store.newItem({producto_id:storeProductos.getValue(items[i],'producto_id'), producto_desc:storeProductos.getValue(items[i],'producto_desc'),bultos:storeProductos.getValue(items[i],'bultos'),importe:storeProductos.getValue(items[i],'importe'),porcentaje:storeProductos.getValue(items[i],'porcentaje')});}
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
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11618&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Bultos',style:'width:130px;',label:labelFormM[5],readOnly:true}));
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
		tablaForm.addChild(new dijit.form.SimpleTextarea({id:camposFormM[19],readOnly:true,value:items[0]['observaciones'][0],required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contrato_id'][0],style:'width:130px;',label:'Contrato: ',readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		dijit.byId('marc').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11409&division_id='+dijit.byId('division_id').attr('value')}));
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
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Bultos',style:'width:130px;',label:labelFormM[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['fecha_carga'][0],style:'width:130px;',label:labelFormM[6],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipificacion'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
		if(dijit.byId('clientes_desc')){dijit.byId('clientes_desc').destroy();}tablaForm.addChild(new dijit.form.TextBox({id:'clientes_desc',value:items[0]['cliente'][0],style:'width:130px;',label:labelFormM[8],readOnly:true}));
		if(dijit.byId('clientes')){dijit.byId('clientes').destroy();}tablaForm.addChild(new dijit.form.TextBox({id:'clientes',value:items[0]['cliente_id'][0],style:'visibility:hidden;width:0px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['pdv'][0],style:'width:130px;',label:labelFormM[25],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_accion'][0],style:'width:130px;',label:labelFormM[12],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['objetivo'][0],style:'width:130px;',label:labelFormM[13],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contra'][0],style:'width:130px;',label:labelFormM[14],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contrato_id'][0],style:'width:130px;',label:'Contrato: ',readOnly:true}));
		if(dijit.byId('canales_mkt')){dijit.byId('canales_mkt').destroy();}tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'canales_mkt',readOnly:true,style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11619&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})}));
		if(dijit.byId(camposFormM[19])){dijit.byId(camposFormM[19]).destroy();}tablaForm.addChild(new dijit.form.SimpleTextarea({id:camposFormM[19],value:items[0]['observaciones'][0],required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
		
		//Carga de vigencias
		if(dijit.byId(camposFormM[10])){dijit.byId(camposFormM[10]).destroy();}tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[10],value:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,1),style:'width:130px;',constraints:{min:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,1),datePattern:'dd-MM-yyyy'},required:requeridoFormM[10],label:labelFormM[10],onChange:function(){dijit.byId(camposFormM[11]).constraints.min = arguments[0];dijit.byId(camposFormM[11]).constraints.max = new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(arguments[0]));}}));
		if(dijit.byId(camposFormM[11])){dijit.byId(camposFormM[11]).destroy();}tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[11],value:new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(new Date())),style:'width:130px;',constraints:{min:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,dojo.date.locale.format(new Date(),{datePattern:'dd',selector:'date'})),max:new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(new Date())),datePattern:'dd-MM-yyyy'},required:requeridoFormM[11],label:labelFormM[11]}));
		
		if(dijit.byId('division_id')){dijit.byId('division_id').destroy();}tablaForm.addChild(new dijit.form.TextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		if(dijit.byId('area_id')){dijit.byId('area_id').destroy();}tablaForm.addChild(new dijit.form.TextBox({id:'area_id',value:items[0]['area_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		if(dijit.byId('subregion_id')){dijit.byId('subregion_id').destroy();}tablaForm.addChild(new dijit.form.TextBox({id:'subregion_id',value:items[0]['subregion_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		dijit.byId('marc').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11409&division_id='+dijit.byId('division_id').attr('value')}));
		
		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=11620&propuesta_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarProductosEdicion(urlValue);
		
		var botonProd = new dijit.form.Button({label:'Ver Productos',type:'button',onClick:function(){CargarProductosInversa();}});
		dojo.place(botonProd.domNode,dijit.byId('divCargaProductos').domNode,'last');
		var botonProd = new dijit.form.Button({label:'Valorizar',type:'button',onClick:function(){Valorizar();}});
		dojo.place(botonProd.domNode,dijit.byId('divCargaProductos').domNode,'last');
		
		//Seteo parametros para Copiar
		dmlgrabarM = dmlnuevoM +'&area_id='+items[0]['area_id'][0]+'&pdv='+items[0]['pdv'][0]+'&division_id='+items[0]['division_id'][0]+'&subregion_id='+items[0]['subregion_id'][0]+'&contrato_id='+items[0]['contrato_id'][0]+'&tipo_carga=BU'+'&tipo_presup_id='+items[0]['tipo_presupuesto_id'][0]+'&canales_mkt='+dijit.byId('canales_mkt').attr('value')+'&empresa_compe_id='+items[0]['contra_id'][0]+'&descrip_prop_id='+items[0]['tipo_accion_id'][0]+'&objetivo_prop_id='+items[0]['objetivo_id'][0]+'&tipo_descuento_id='+items[0]['tipificacion_id'][0];
		
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
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Bultos',style:'width:130px;',label:labelFormM[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['fecha_carga'][0],style:'width:130px;',label:labelFormM[6],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipificacion'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
		if(dijit.byId('clientes_desc')){dijit.byId('clientes_desc').destroy();}tablaForm.addChild(new dijit.form.TextBox({id:'clientes_desc',value:items[0]['cliente'][0],style:'width:130px;',label:labelFormM[8],readOnly:true}));
		if(dijit.byId('clientes')){dijit.byId('clientes').destroy();}tablaForm.addChild(new dijit.form.TextBox({id:'clientes',value:items[0]['cliente_id'][0],style:'visibility:hidden;width:0px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['pdv'][0],style:'width:130px;',label:labelFormM[25],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_accion'][0],style:'width:130px;',label:labelFormM[12],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['objetivo'][0],style:'width:130px;',label:labelFormM[13],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contra'][0],style:'width:130px;',label:labelFormM[14],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contrato_id'][0],style:'width:130px;',label:'Contrato: ',readOnly:true}));
		if(dijit.byId('canales_mkt')){dijit.byId('canales_mkt').destroy();}tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'canales_mkt',readOnly:true,style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11619&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})}));
		if(dijit.byId(camposFormM[19])){dijit.byId(camposFormM[19]).destroy();}tablaForm.addChild(new dijit.form.SimpleTextarea({id:camposFormM[19],value:items[0]['observaciones'][0],required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
		
		//Carga de vigencias
		if(dijit.byId(camposFormM[10])){dijit.byId(camposFormM[10]).destroy();}tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[10],value:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,1),style:'width:130px;',constraints:{min:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,1),datePattern:'dd-MM-yyyy'},required:requeridoFormM[10],label:labelFormM[10],onChange:function(){dijit.byId(camposFormM[11]).constraints.min = arguments[0];dijit.byId(camposFormM[11]).constraints.max = new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(arguments[0]));}}));
		if(dijit.byId(camposFormM[11])){dijit.byId(camposFormM[11]).destroy();}tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[11],value:new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(new Date())),style:'width:130px;',constraints:{min:new Date(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1,dojo.date.locale.format(new Date(),{datePattern:'dd',selector:'date'})),max:new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(new Date())),datePattern:'dd-MM-yyyy'},required:requeridoFormM[11],label:labelFormM[11]}));
		
		if(dijit.byId('division_id')){dijit.byId('division_id').destroy();}tablaForm.addChild(new dijit.form.TextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		if(dijit.byId('area_id')){dijit.byId('area_id').destroy();}tablaForm.addChild(new dijit.form.TextBox({id:'area_id',value:items[0]['area_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		if(dijit.byId('subregion_id')){dijit.byId('subregion_id').destroy();}tablaForm.addChild(new dijit.form.TextBox({id:'subregion_id',value:items[0]['subregion_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		dijit.byId('marc').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11409&division_id='+dijit.byId('division_id').attr('value')}));
		
		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=11620&propuesta_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarProductosEdicion(urlValue);
		
		var botonProd = new dijit.form.Button({label:'Ver Productos',type:'button',onClick:function(){CargarProductosInversa();}});
		dojo.place(botonProd.domNode,dijit.byId('divCargaProductos').domNode,'last');
		var botonProd = new dijit.form.Button({label:'Valorizar',type:'button',onClick:function(){Valorizar();}});
		dojo.place(botonProd.domNode,dijit.byId('divCargaProductos').domNode,'last');
		
		//Seteo parametros para Copiar
		dmlgrabarM = dmlnuevoM +'&area_id='+items[0]['area_id'][0]+'&contrato_id='+items[0]['contrato_id'][0]+'&observaciones='+items[0]['observaciones'][0]+'&pdv='+items[0]['pdv'][0]+'&division_id='+items[0]['division_id'][0]+'&subregion_id='+items[0]['subregion_id'][0]+'&tipo_carga=BU'+'&tipo_presup_id='+items[0]['tipo_presupuesto_id'][0]+'&canales_mkt='+dijit.byId('canales_mkt').attr('value')+'&empresa_compe_id='+items[0]['contra_id'][0]+'&descrip_prop_id='+items[0]['tipo_accion_id'][0]+'&objetivo_prop_id='+items[0]['objetivo_id'][0]+'&tipo_descuento_id='+items[0]['tipificacion_id'][0];
		
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
	if(registroSeleccionado[0][columnasM[8]]!='PEA'){Mensaje('Solo puede eliminar Propuestas en Estado PEA','error','master');return;}
	//Generación de la URL y el mensaje de advertencia
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmleliminarM;
	mensaje='Est&aacute; seguro que desea eliminar la propuesta <b>'+registroSeleccionado[0][columnasM[0]]+'</b>';
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
			BuscarMaster();//Refresco del gridMaster
			procesando.hide();
			Mensaje('La propuesta '+registroSeleccionado[0][columnasM[0]]+' ha sido eliminada exitosamente','mensaje','master');
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
	window.open(urlValue,"Bajar_Informe_Prop_Bult","menubar=no,width=300,height=300,toolbar=no,resizable=yes");
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMaster(){
	dijit.byId('gridProductos').edit.apply();
	if(!bultosValorizados){PopUp('Error','Debe valorizar nuevamente antes de grabar');return;}
	//Validacion de que el formulario esté bien cargado
	for(i=0;i<requeridoFormM.length;i++){
		if(camposFormM[i]!='participacion_cli' &&camposFormM[i]!='dist_fisica_comp' &&camposFormM[i]!='bultos_afectados' &&camposFormM[i]!='op_realizar' &&camposFormM[i]!='observaciones' && camposFormM[i]!='canales_mkt' && camposFormM[i]!='clientes' && camposFormM[i]!='propuesta_id' && camposFormM[i]!='tipo_carga' && camposFormM[i]!='fecha_carga' && camposFormM[i]!='prorratea_calibres' && !dijit.byId(camposFormM[i]).isValid()){dijit.byId(camposFormM[i]).focus();return;}
	}
	//Generacion de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM;
	for(i=0;i<camposFormM.length;i++){
		if(camposFormM[i]!='fecha_carga' &&camposFormM[i]!='propuesta_id' &&camposFormM[i]!='participacion_cli' &&camposFormM[i]!='dist_fisica_comp' &&camposFormM[i]!='bultos_afectados' &&camposFormM[i]!='op_realizar' &&camposFormM[i]!='prorratea_calibres' && camposFormM[i]!='criterio' && camposFormM[i]!='marca_id' && camposFormM[i]!='concepto_id' && camposFormM[i]!='monto'){
			if(camposFormM[i]=='tipo_carga'){
				urlValue+='&'+camposFormM[i]+'=BU';
			}else if(dijit.byId(camposFormM[i]).declaredClass=='dijit.form.DateTextBox'){
				urlValue+='&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).valueNode.value;
			}else if(camposFormM[i]=='observaciones'){
				urlValue+='&'+camposFormM[i]+'='+unescape( encodeURIComponent( dijit.byId(camposFormM[i]).attr('value')));
			} else if (camposFormM[i]=='clientes') {		
				urlValue+='&'+camposFormM[i]+'='+ dijit.byId('clientes_desc').attr('value');
			}else{
				urlValue+='&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).attr('value');
			}
		}
	}
	urlValue+='&contrato_id='+dijit.byId('contrato').attr('value');
	var CompletarJSON = function(items,request){
		var ids = '';
		var bultos = '';
		var importes = '';
		var porcentajes = '';
		for(i=0;i<items.length;i++){
			if(dijit.byId('gridProductos').store.getValue(items[i],'importe')<1){dijit.showTooltip('Los productos deben tener un importe mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}
			if(dijit.byId('gridProductos').store.getValue(items[i],'bultos')<1){dijit.showTooltip('Los productos deben tener bultos mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}
			if(isNaN(dijit.byId('gridProductos').store.getValue(items[i],'bultos'))){dijit.showTooltip('Los productos deben tener bultos enteros',dijit.byId('gridProductos').domNode,'above');return;}
			ids+=dijit.byId('gridProductos').store.getValue(items[i],'producto_id');
			bultos+=dijit.byId('gridProductos').store.getValue(items[i],'bultos');
			importes+=dijit.byId('gridProductos').store.getValue(items[i],'importe');
			porcentajes+=dijit.byId('gridProductos').store.getValue(items[i],'porcentaje');
			if(i!=items.length-1){ids+=',';bultos+=',';importes+='-';if(porcentajes!=''){porcentajes+='-';}}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
		dijit.byId('dialogMaster').hide();
		procesando.show();
		urlValue+='&productos='+ids+'&bultos_productos='+bultos+'&importes_productos='+importes+'&porcentajes='+porcentajes;
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
function GrabarMasterCopiar(){
	dijit.byId('gridProductos').edit.apply();
	//Validacion de que el formulario esté bien cargado
	if(!dijit.byId(camposFormM[10]).isValid()){dijit.byId(camposFormM[10]).focus();return;}
	if(!dijit.byId(camposFormM[11]).isValid()){dijit.byId(camposFormM[11]).focus();return;}
	//Generación de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM+'&'+camposFormM[10]+'='+dijit.byId(camposFormM[10]).valueNode.value+'&'+camposFormM[11]+'='+dijit.byId(camposFormM[11]).valueNode.value+'&'+camposFormM[8]+'='+dijit.byId(camposFormM[8]).attr('value')+'&'+camposFormM[19]+'='+dijit.byId(camposFormM[19]).attr('value');
	var CompletarJSON = function(items,request){
		var ids = '';
		var importes = '';
		var bultos = '';
		var porcentajes = '';
		for(i=0;i<items.length;i++){
			if(dijit.byId('gridProductos').store.getValue(items[i],'importe')<1){dijit.showTooltip('Los productos deben tener un importe mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}
			if(dijit.byId('gridProductos').store.getValue(items[i],'bultos')<1){dijit.showTooltip('Los productos deben tener bultos mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}
			ids+=dijit.byId('gridProductos').store.getValue(items[i],'producto_id');
			importes+=dijit.byId('gridProductos').store.getValue(items[i],'importe');
			bultos+=dijit.byId('gridProductos').store.getValue(items[i],'bultos');
			porcentajes+=dijit.byId('gridProductos').store.getValue(items[i],'porcentaje');
			if(i!=items.length-1){ids+=',';bultos+=',';importes+='-';if(porcentajes!=''){porcentajes+='-';}}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
		dijit.byId('dialogMaster').hide();
		procesando.show();
		urlValue+='&productos='+ids+'&bultos_productos='+bultos+'&importes_productos='+importes+'&porcentajes='+porcentajes;
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
	if(!bultosValorizados){PopUp('Error','Debe valorizar nuevamente antes de grabar');return;}
	//Generación de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM+'&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]+'&observaciones='+dijit.byId(camposFormM[19]).attr('value');
	var CompletarJSON = function(items,request){
		var ids = '';
		var bultos = '';
		var importes = '';
		var porcentajes = '';
		for(i=0;i<items.length;i++){
			if(dijit.byId('gridProductos').store.getValue(items[i],'importe')<1){dijit.showTooltip('Los productos deben tener un importe mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}
			if(dijit.byId('gridProductos').store.getValue(items[i],'bultos')<1){dijit.showTooltip('Los productos deben tener bultos mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}
			ids+=dijit.byId('gridProductos').store.getValue(items[i],'producto_id');
			bultos+=dijit.byId('gridProductos').store.getValue(items[i],'bultos');
			importes+=dijit.byId('gridProductos').store.getValue(items[i],'importe');
			porcentajes+=dijit.byId('gridProductos').store.getValue(items[i],'porcentaje');
			if(i!=items.length-1){ids+=',';bultos+=',';importes+='-';if(porcentajes!=''){porcentajes+='-';}}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
		dijit.byId('dialogMaster').hide();
		procesando.show();
		urlValue+='&productos='+ids+'&bultos_productos='+bultos+'&importes_productos='+importes+'&porcentajes='+porcentajes;
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
	dijit.byId('divCargaProductos').destroyDescendants();
	dijit.byId('cli_id').attr('value','');
	dijit.byId('razon').attr('value','');
	dijit.byId('marc').attr('value','');
	dijit.byId('prod_id').attr('value','');
	dijit.byId('desc').attr('value','');
	if(dijit.byId('clientes_desc')){dijit.byId('clientes_desc').destroy();}
	if(dijit.byId('contrato')){dijit.byId('contrato').destroy();}
	dijit.byId('gridDestinoP').setStore(null);dijit.byId('gridDestinoP').update();
	dijit.byId('gridOrigen').setStore(null);dijit.byId('gridOrigen').update();
	dijit.byId('gridOrigenP').setStore(null);dijit.byId('gridOrigenP').update();
	dijit.byId('gridProductos').setStore(null);dijit.byId('gridProductos').update();
	dojo.byId('divTotalImporte').innerHTML='0';
	dojo.byId('divTotalBultos').innerHTML='0';
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
			dijit.byId(grilla_id).store.setValue(item,'seleccionado',checkbox.checked);
		}
		dijit.byId(grilla_id).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId(grilla_id).store.save();}});
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumn(checkbox){
	if(dijit.byId('enviarMasivoAMaster')){dijit.byId('enviarMasivoAMaster').attr('disabled',false);}
	if(dijit.byId('enviarMasivoWMaster')){dijit.byId('enviarMasivoWMaster').attr('disabled',false);}
	for(i=0;i<cantidadGrillas;i++){	
		if(dijit.byId('grilla'+i).store){
			var Checkear = function(item){
				dijit.byId('grilla'+i).store.setValue(item,columnasE[9],checkbox.checked);
			}
			var Grabar = function(items,request){
				dijit.byId('grilla'+i).store.save();
			}
			dijit.byId('grilla'+i).store.fetch({query:{},onItem:Checkear,onComplete:Grabar});
		}
	}
}