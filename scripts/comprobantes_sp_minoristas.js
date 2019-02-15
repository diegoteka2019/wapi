//TITULOS
var titulos =  new Array('Comprobantes Sin Presupuesto');
//DMLs
var dmlBuscarMaster = '12604';
var dmlNuevoMaster = '12601';
var dmlEnviarMaster = '12619';
var dmlEditarMaster = '12602';
var dmlEnviarEditarMaster = '12622';
var dmlCopiarMaster = '';
var dmlBuscarUnicoMaster = '12620'; 
var dmleliminarM = '12603';
var dmlAuditoriaMaster = 'nnnnn';
var dmlgrabarM = '';
//COLUMNAS
var columnasM = new Array('comprobante_sp_id','area','subregion','cliente','fecha','comprobante','estado','importe','adjunto','observaciones');
var columnasE = new Array('comprobante_sp_id','area','subregion','cliente','fecha','comprobante','estado','importe','adjunto','observaciones','seleccionado');
var columnasD = new Array('producto_id','producto_desc','importe','porcentaje');
var columnasDD = new Array('producto_id','producto_desc','importe');
var columnasC = new Array('cliente_id','razon_social','seleccionado');
var columnasCu = new Array('tipo_contable_id','tipo_contable_desc','seleccionado');
var columnasP = new Array('producto_id','producto_desc','seleccionado');
var columnasComp = new Array('registro_id','comprobante_sp_id','tipo','serie','numero','importe','importe_base','importe_impuestos');
//DESCRIPCIONES
var descripcionesM = new Array('N&uacute;mero','Area','Sub Regi&oacute;n','Cliente','Fecha','Comprobante','Estado','Importe','Adjunto','Observaciones','Selec.');
var descripcionesD = new Array('Id','Producto','Importe');
var descripcionesC = new Array('Id','Razon Social','Selec.');
var descripcionesCu = new Array('Id','Descripci&oacute;n','Selec.');
var descripcionesP = new Array('Id','Descripci&oacute;n','Selec.');
var descripcionesComp = new Array('','','Tipo Comp.','Serie','N&uacute;mero','Importe','Importe Base','Importe Impuesto');
//PRIMARY KEY
var clavesM = new Array('comprobante_sp_id');
var regexpFormM = new Array(".*","[a-zA-Z0-9ñÑ¿?¡! ,.()-_]+");
//FILTROS
var filtroMaster = new Array('comprobante_sp_id','area_id','subregion_id','cliente_id','desde','hasta','tipo_cbte_id','tipificacion','estado');
var labelFiltroMaster = new Array('N&uacute;mero de Solicitud: ','Area: ','Sub Regi&oacute;n: ','Cliente: ','Per&iacute;odo Desde: ','Per&iacute;odo Hasta: ','Comprobante: ','Tipificaci&oacute;n: ','Estado: ');
var mensajeFiltroMaster = new Array('Ingrese el N&uacute;mero de Solicitud','Seleccione el Area','Seleccione la Sub Regi&oacute;n','Seleccione el Cliente','Seleccione el Per&iacute;odo Desde','Seleccione el Per&iacute;odo Hasta','Seleccione el Comprobante','Seleccione la Tipificaci&oacute;n','Seleccione el Estado');
var requeridoFiltroMaster = new Array(false,false,false,false,true,true,false,false,false);
var searchAttrFiltroMaster = new Array('','detalle','detalle','detalle','','','detalle','detalle','detalle');
var tipoFiltroMaster = new Array('ValidationTextBox','FilteringSelect','FilteringSelect','FilteringSelect','DateTextBox','DateTextBox','FilteringSelect','FilteringSelect','FilteringSelect');
var selectFiltroMaster = new Array('','12606','12507','12608','','','12609','12610','12511');
//FORMULARIO
var camposFormM = new Array('fecha_actual','cod_canal_venta','area_id','subregion_id','cliente_id','deposito_id','mes_informa','anio_informa','observaciones','tipo_movimiento','archivo_id');
var labelFormM = new Array('Fecha Actual: ','Canal de Venta: ','Area: ','Subregi&oacute;n: ','Cliente: ','Dep&oacute;sito: ','Mes Informa: ','A&ntilde;o Informa: ','Observaciones: ','Tipo de Comprobante: ','Archivo Adjunto: ');
var requeridoFormM = new Array(true,true,true,true,false,true,true,true,false,false);
var mensajesFormM = new Array('','Seleccione un Canal de Ventas','Seleccione el Area','Seleccione la Sub Regi&oacute;n','Seleccione el Cliente','Seleccione el Dep&oacute;sito','Seleccione el Mes Informa','Seleccione el A&ntilde;o Informa','Ingrese las Observaciones','Seleccione el Tipo de Comprobante','');
var searchAttrFormM = new Array('','detalle','detalle','detalle','','detalle','detalle','','','detalle','');
var selectFormM = new Array('','12612','12606','12507','12626','12513','xxxxx','','','12614','');
var registroSeleccionado = null;
var storeMeses = {identifier:'mes_informa',label:'detalle',items:[{mes_informa: '01',detalle: '01'},{mes_informa: '02',detalle: '02'},{mes_informa: '03',detalle: '03'},{mes_informa: '04',detalle: '04'},{mes_informa: '05',detalle: '05'},{mes_informa: '06',detalle: '06'},{mes_informa: '07',detalle: '07'},{mes_informa: '08',detalle: '08'},{mes_informa: '09',detalle: '09'},{mes_informa: '10',detalle: '10'},{mes_informa: '11',detalle: '11'},{mes_informa: '12',detalle: '12'}]};
var financieraStore = {identifier:'id',label:'detalle',items:[{id:'1',detalle:'Productos Financieros'},{id:'2',detalle:'Cuenta Contable / Centro de Costos'}]};
var tipo_producto = null;
//Carga las estructuras de las tablas
var layoutMaster = [
    {width: "40px", field: columnasM[0], name: descripcionesM[0]},
    {width: "auto", field: columnasM[1], name: descripcionesM[1]},
    {width: "auto", field: columnasM[2], name: descripcionesM[2]},
	{width: "auto", field: columnasM[3], name: descripcionesM[3]},
	{width: "54px", field: columnasM[4], name: descripcionesM[4]},
    {width: "auto", field: columnasM[5], name: descripcionesM[5]},
	{width: "33px", field: columnasM[6], name: descripcionesM[6]},
	{width: "40px", field: columnasM[7], name: descripcionesM[7]},
    {width: "40px", field: columnasM[8], name: descripcionesM[8],formatter:formatCheckbox,styles:'text-align:center;'},
	{width: "33px", field: columnasE[10], name: descripcionesM[10],editable:true, type:dojox.grid.cells.Bool},];
var layoutEnvio = [
    {width: "40px", field: columnasM[0], name: descripcionesM[0]},
    {width: "auto", field: columnasM[1], name: descripcionesM[1]},
    {width: "auto", field: columnasM[2], name: descripcionesM[2]},
	{width: "auto", field: columnasM[3], name: descripcionesM[3]},
	{width: "54px", field: columnasM[4], name: descripcionesM[4]},
    {width: "auto", field: columnasM[5], name: descripcionesM[5]},
	{width: "33px", field: columnasM[6], name: descripcionesM[6]},
	{width: "40px", field: columnasM[7], name: descripcionesM[7]},
    {width: "40px", field: columnasM[8], name: descripcionesM[8],formatter:formatCheckbox,styles:'text-align:center;'},
	{width: "33px", field: columnasE[10], name: descripcionesM[10],editable:true, type:dojox.grid.cells.Bool},];
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
    {width: "0px", field: columnasD[0], name: descripcionesD[0],hidden:true},
    {width: "235px", field: columnasD[1], name: descripcionesD[1]},
	{width: "90px", field: columnasD[2], name: descripcionesD[2],editable:true,formatter:CalcularTotal}];
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
	{width: "auto", field: columnasComp[0], name: descripcionesComp[0],hidden:true},
    {width: "auto", field: columnasComp[1], name: descripcionesComp[1],hidden:true},
    {width: "40px", field: columnasComp[2], name: descripcionesComp[2]},
	{width: "auto", field: columnasComp[3], name: descripcionesComp[3]},
	{width: "auto", field: columnasComp[4], name: descripcionesComp[4]},
    {width: "auto", field: columnasComp[5], name: descripcionesComp[5]},
	{width: "54px", field: columnasComp[6], name: descripcionesComp[6]},
    {width: "auto", field: columnasComp[7], name: descripcionesComp[7]}];
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
		columnasM = columnasE;layoutMaster = layoutEnvio;
		dojo.place('<div id="masivo" class="dijitToolbar" style="text-align:right;height:24px;"><label for="selec">Seleccionar Todos</label><input id="selec" type="checkbox" title="Seleccionar Todos" onclick="CheckColumn(this);"/></div>',dojo.byId('cabecera'));
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
		
		AutoCompletar(dijit.byId('filtro1'));
		//agrego el area a la busqueda de subregion
		dijit.byId('filtro2').store.url += '&area_id='+dijit.byId('filtro1').attr('value');
		//Borrado de subregiones al cambiar el area
		dijit.byId('filtro1').onChange= function(value){dijit.byId('filtro2').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[2]+'&area_id='+value}));dijit.byId('filtro2').store.fetch();dijit.byId('filtro2').attr('value',null);}
		//agrego la subregion a la busqueda de cliente
		dijit.byId('filtro3').store.url += '&subregion_id='+dijit.byId('filtro2').attr('value');
		//Borrado de clientes al cambiar la subregion
		dijit.byId('filtro2').onChange= function(value){dijit.byId('filtro3').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[3]+'&subregion_id='+value}));dijit.byId('filtro3').store.fetch();dijit.byId('filtro3').attr('value',null);}
		//agrego el tipo comprobante a la busqueda de tipificacion
		/* dijit.byId('filtro6').store.fetchItemByIdentity({identity:value,onItem:function(item){
			dijit.byId('filtro7').store.url += '&tipo_movimiento='+dijit.byId('filtro6').store.getValue(item,'tipo_movimiento_id')+'&tipo_producto='+dijit.byId('filtro6').store.getValue(item,'tipo_producto');}});
		 *///Borrado de tipicacion al cambiar el tipo comprobante
		dijit.byId('filtro6').onChange= function(value){
			dijit.byId('filtro6').store.fetchItemByIdentity({identity:value,onItem:function(item){
				dijit.byId('filtro7').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[7]+'&tipo_movimiento='+dijit.byId('filtro6').store.getValue(item,'tipo_movimiento_id')+'&tipo_producto='+dijit.byId('filtro6').store.getValue(item,'tipo_producto')}));
				dijit.byId('filtro7').store.fetch();
				dijit.byId('filtro7').attr('value',null);}});
		}

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
	if(dijit.byId('filtro0').attr('value')){BuscarMaster();dijit.byId('filtrosMaster').onCancel();}
	else if(dijit.byId('filtrosMaster').validate()){BuscarMaster();dijit.byId('filtrosMaster').onCancel();}
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
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:'archivo',maxLength:'40',label:'Archivo: ',promptMessage:'Seleccione un Archivo',required:true}));
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
	document.location = urlValue;
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
function NuevoMaster(){
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[0],maxLength:'40',value:dojo.date.locale.format(new Date(),{datePattern:'dd-MM-yyyy',selector:'date'}),style:'width:130px;',label:labelFormM[0],readOnly:true,required:requeridoFormM[0]}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[1],style:'width:130px;',label:labelFormM[1],searchAttr:searchAttrFormM[1],promptMessage:mensajesFormM[1],required:requeridoFormM[1],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[1]}),onChange:function(value){dijit.byId('gridOrigen').setStore(null);dijit.byId('gridOrigen').update();dijit.byId('cliente_id').attr('value','');dijit.byId('clientes_desc').attr('value','');dijit.byId(camposFormM[9]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[9]+'&cod_canal_venta='+value}));dijit.byId(camposFormM[9]).store.fetch();dijit.byId(camposFormM[9]).attr('value',null);AutoCompletar(dijit.byId(camposFormM[1]));}}));
	AutoCompletar(dijit.byId(camposFormM[1]));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[2],style:'width:130px;',label:labelFormM[2],searchAttr:searchAttrFormM[2],promptMessage:mensajesFormM[2],required:requeridoFormM[2],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[2]}),onChange:function(value){dijit.byId(camposFormM[3]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[3]+'&area_id='+value}));dijit.byId(camposFormM[3]).store.fetch();dijit.byId(camposFormM[3]).attr('value',null);AutoCompletar(dijit.byId(camposFormM[2]));}}));
	AutoCompletar(dijit.byId(camposFormM[2]));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[3],style:'width:130px;',label:labelFormM[3],searchAttr:searchAttrFormM[3],promptMessage:mensajesFormM[3],required:requeridoFormM[3],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[3]+'&area_id='+dijit.byId(camposFormM[2]).attr('value')}),onChange:function(){dijit.byId('gridOrigen').setStore(null);dijit.byId('gridOrigen').update();dijit.byId('cliente_id').attr('value','');dijit.byId('clientes_desc').attr('value','');}}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:'clientes_desc',maxLength:'40',style:'width:130px;',required:requeridoFormM[4],label:(labelFormM[4]+'<button class="dijitButtonNode" onclick="VerDialogoClientes();" type="button">Ver</button>'),readOnly:true}));
	tablaForm.addChild(new dijit.form.TextBox({id:camposFormM[4],style:'display:none;',label:'',onChange:function(value){dijit.byId(camposFormM[5]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[5]+'&cliente_id='+value}));dijit.byId(camposFormM[5]).store.fetch();dijit.byId(camposFormM[5]).attr('value',null);AutoCompletar(dijit.byId(camposFormM[5]));}}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[5],style:'width:130px;',label:labelFormM[5],searchAttr:searchAttrFormM[5],promptMessage:mensajesFormM[5],required:requeridoFormM[5],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[5]+'&cliente_id='+dijit.byId(camposFormM[4]).attr('value')})}));
	AutoCompletar(dijit.byId(camposFormM[5]));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[6],style:'width:130px;',label:labelFormM[6],searchAttr:searchAttrFormM[6],promptMessage:mensajesFormM[6],required:requeridoFormM[6],store:new dojo.data.ItemFileReadStore({data: storeMeses}),onChange:function(){dijit.hideTooltip(dijit.byId('anio_informa').domNode);dijit.hideTooltip(dijit.byId('mes_informa').domNode);}}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[7],maxLength:'40',value:dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),style:'width:130px;',label:labelFormM[7],required:requeridoFormM[7],onChange:function(){dijit.hideTooltip(dijit.byId('anio_informa').domNode);dijit.hideTooltip(dijit.byId('mes_informa').domNode);}}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[8],maxLength:'40',required:requeridoFormM[8],regExp:regexpFormM[1],style:'width:130px;height:58px;',label:labelFormM[8],maxLength:"499"}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[9],style:'width:130px;',label:labelFormM[9],searchAttr:searchAttrFormM[9],promptMessage:mensajesFormM[9],required:requeridoFormM[9],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[9]+'&cod_canal_venta='+dijit.byId(camposFormM[1]).attr('value')}),onChange:function(value){dijit.hideTooltip(dijit.byId('tipo_movimiento').domNode);MostrarGrillasMaster(value);}}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[10],maxLength:'40',style:'width:130px;',label:labelFormM[10],promptMessage:mensajesFormM[10],readOnly:true,required:requeridoFormM[10]}));
	dijit.byId('divCampos').attr('content',tablaForm);
	tablaForm.startup();
	
	//Creacion de botones
	var botonAdjuntar = new dijit.form.Button({id:'botonAdjuntar', label:'Adjuntar',type:'button',iconClass:'adjuntoIcon',onClick:function(){AdjuntarMaster();}});
	dojo.place(botonAdjuntar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlgrabarM = dmlNuevoMaster;GrabarMaster();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonGrabarEnviar = new dijit.form.Button({label:'Grabar y Enviar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlgrabarM = dmlEnviarMaster;GrabarMaster();}});
	dojo.place(botonGrabarEnviar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){if(dijit.byId('archivo_id').attr('value')!=''){PopUp('Error','A&uacute;n existe un archivo adjunto');return;}CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	dijit.byId("dialogMaster").show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDialogoClientes(){
	//verificar que haya subregion
	if(!dijit.byId(camposFormM[1]).isValid()){dijit.byId(camposFormM[1]).focus();return;}
	if(!dijit.byId(camposFormM[3]).isValid()){dijit.byId(camposFormM[3]).focus();return;}
	dijit.byId('cli_id').attr('value','');
	dijit.byId('razon').attr('value','');
	dijit.byId('gridOrigen').attr('autoWidth',true);
	dijit.hideTooltip(dijit.byId('clientes_desc').domNode);
	dijit.byId('dialogClientes').show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function MostrarGrillasMaster(value){
	if(dijit.byId('tipo_movimiento').attr('value')==''){return;}
	dijit.byId('gridDestinoP').setStore(null);dijit.byId('gridDestinoP').update();
	dijit.byId('gridOrigenP').setStore(null);dijit.byId('gridOrigenP').update();
	dijit.byId('gridProductos').setStore(null);dijit.byId('gridProductos').update();
	dijit.byId('tipo_movimiento').store.fetchItemByIdentity({
		identity:value,
		onItem:function(item){
			if(dijit.byId('tipo_movimiento').store.getValue(item,'tipo_producto')=='P'){
				dijit.byId('divFinanciera').destroyDescendants();
				if(dijit.byId('tipo_cbte_id')){dijit.byId('tipo_cbte_id').destroy();}
				tipo_producto = 'P';
				var tablaFinanciera = new dojox.layout.TableContainer({cols:1,labelWidth:'75',style:'text-align:left;'});
				if(dijit.byId('tipo_cbte_id')){dijit.byId('tipo_cbte_id').destroy();}tablaFinanciera.addChild(new dijit.form.FilteringSelect({id:'tipo_cbte_id',style:'width:260px;',label:'Tipificaci&oacute;n: ',searchAttr:'detalle',promptMessage:'Seleccione una Tipificaci&oacute;n',required:false,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12615&cod_canal_venta='+dijit.byId('cod_canal_venta').attr('value')+'&tipo_movimiento='+dijit.byId('tipo_movimiento').store.getValue(item,'tipo_movimiento_id')+'&tipo_producto='+tipo_producto})}));
				AutoCompletar(dijit.byId('tipo_cbte_id'));
				dijit.byId('divFinanciera').attr('content',tablaFinanciera);
				tablaFinanciera.startup();
				dojo.byId('divFin').style.display = 'block';
				ChangeFinanciera('1');
			}else if(dijit.byId('tipo_movimiento').store.getValue(item,'tipo_producto')=='M'){
				dijit.byId('divFinanciera').destroyDescendants();
				if(dijit.byId('cuenta_desc')){dijit.byId('cuenta_desc').destroy();}
				if(dijit.byId('tipo_contable_id')){dijit.byId('tipo_contable_id').destroy();}
				tipo_producto = 'M';
				var tablaFinanciera = new dojox.layout.TableContainer({cols:1,labelWidth:'75',style:'text-align:left;'});
				if(dijit.byId('tipo_cbte_id')){dijit.byId('tipo_cbte_id').destroy();}tablaFinanciera.addChild(new dijit.form.FilteringSelect({id:'tipo_cbte_id',style:'width:260px;',label:'Tipificaci&oacute;n: ',searchAttr:'detalle',promptMessage:'Seleccione una Tipificaci&oacute;n',required:false,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12615&cod_canal_venta='+dijit.byId('cod_canal_venta').attr('value')+'&tipo_movimiento='+dijit.byId('tipo_movimiento').store.getValue(item,'tipo_movimiento_id')+'&tipo_producto='+tipo_producto})}));
				AutoCompletar(dijit.byId('tipo_cbte_id'));
				dijit.byId('divFinanciera').attr('content',tablaFinanciera);
				tablaFinanciera.startup();
				dojo.byId('divFin').style.display = 'block';
				ChangeFinanciera('1');
			}
		}
	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ChangeFinanciera(value){
	dijit.byId('gridDestinoP').setStore(null);dijit.byId('gridDestinoP').update();
	dijit.byId('gridOrigenP').setStore(null);dijit.byId('gridOrigenP').update();
	dijit.byId('gridProductos').setStore(null);dijit.byId('gridProductos').update();
	if(value=='1'){
		dojo.byId('botonProductos').style.display = 'block';
		dojo.byId('botonCuenta').style.display = 'none';
		if(dijit.byId('cuenta_desc')){dijit.byId('cuenta_desc').destroy();}
		if(dijit.byId('tipo_contable_id')){dijit.byId('tipo_contable_id').destroy();}
	}else if(value=='2'){
		var tablaCuenta = new dojox.layout.TableContainer({cols:1,labelWidth:'60',style:'text-align:left;'});
		if(dijit.byId('cuenta_desc')){dijit.byId('cuenta_desc').destroy();}
		if(dijit.byId('tipo_contable_id')){dijit.byId('tipo_contable_id').destroy();}
		tablaCuenta.addChild(new dijit.form.TextBox({id:'cuenta_desc',style:'width:257px;',readOnly:true,label:'<button class="dijitButtonNode" onclick="dijit.byId(\'dialogCuenta\').show()" type="button">Cuenta</button>',promptMessage:'Seleccione una Cuenta Contable',required:false}));
		tablaCuenta.addChild(new dijit.form.TextBox({id:'tipo_contable_id',style:'display:none;',label:''}));
		dijit.byId('cuentaCentro').attr('content',tablaCuenta);
		tablaCuenta.startup();
		dojo.byId('botonProductos').style.display = 'none';
		dojo.byId('botonCuenta').style.display = 'block';
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function AdjuntarMaster(){
	//Creacion del contenedor
	var divCamposA = new dijit.layout.ContentPane({style:'width:400px;text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'70',style:'text-align:left;'});
	if(dijit.byId('archivo')){dijit.byId('archivo').destroy();}tablaForm.addChild(new dijit.form.ValidationTextBox({id:'archivo',maxLength:'40',style:'width:141px;',label:'Archivo: ',promptMessage:'Seleccione un archivo',required:true}));
	divCamposA.attr('content',tablaForm);
	tablaForm.startup();
	//Agrego funcionalidad para cargar Archivo Adjunto
	if(dijit.byId('userfile')){dijit.byId('userfile').destroy();}
	var widget = new extenciones.myFileInputAuto({id:'userfile',style:'width:141px;',name:'userfile',label:'Examinar',cancelText:'Quitar',
					url: 'dbi/comprobantes_sp_subirArchivo.php?sid='+gvarSID,
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
	//dijit.byId('userfile').fileInput.readOnly = true;
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
	dijit.hideTooltip(dijit.byId('gridOrigen').domNode);
	if(dijit.byId('gridOrigen').store==null){return;}
	var ActualizarMultiselect = function(items,request){
		if(items.length>1){dijit.showTooltip('Seleccione solo un cliente',dijit.byId('gridOrigen').domNode,'above');return;}
		if(items.length==0){dijit.showTooltip('Seleccione al menos un cliente',dijit.byId('gridOrigen').domNode,'above');return;}
		dijit.byId('cliente_id').attr('value',items[0]['cliente_id']);
		dijit.byId('clientes_desc').attr('value',items[0]['razon_social']);
		dijit.byId("dialogClientes").hide();
	}
	dijit.byId('gridOrigen').store.fetch({query:{seleccionado:true},onComplete:ActualizarMultiselect});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarCuentas(){
	dijit.hideTooltip(dijit.byId('gridOrigenCuenta').domNode);
	if(dijit.byId('gridOrigenCuenta').store==null){return;}
	var ActualizarMultiselect = function(items,request){
		if(items.length>1){dijit.showTooltip('Seleccione solo una cuenta',dijit.byId('gridOrigenCuenta').domNode,'above');return;}
		if(items.length==0){dijit.showTooltip('Seleccione al menos una cuenta',dijit.byId('gridOrigenCuenta').domNode,'above');return;}
		dijit.byId('tipo_contable_id').attr('value',items[0]['tipo_contable_id']);
		dijit.byId('cuenta_desc').attr('value',items[0]['tipo_contable_desc']);
		dijit.byId("dialogCuenta").hide();
	}
	dijit.byId('gridOrigenCuenta').store.fetch({query:{seleccionado:true},onComplete:ActualizarMultiselect});
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
	//Limpiar el contentpane
	registroSeleccionado = null;
	//dijit.byId('gridContainer').destroyDescendants();
	//Obtengo comprobantes SP
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	if(filtroMaster.length > 0){
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='DateTextBox'){urlValue = urlValue +'&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).valueNode.value;}
			else if(filtroMaster[i]!='tipo_cbte_id'){
					urlValue +='&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');}
			else if(filtroMaster[i]=='tipo_cbte_id'){
				urlValue+='&tipo_movimiento=';
				if(dijit.byId('filtro'+i).attr('value')!=''){
					dijit.byId('filtro'+i).store.fetchItemByIdentity({
						identity:dijit.byId('filtro'+i).attr('value'),
						onItem:function(item){
							urlValue+=dijit.byId('filtro'+i).store.getValue(item,'tipo_movimiento_id');
						}
					});}
			}
		}
	}
	gridMaster.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	gridMaster.attr("autoWidth",true);
	gridMaster.adaptWidth();
	gridMaster.selection.clear();
	HabilitarBotonesMaster(1,false);
	HabilitarBotonesMaster(2,true);
	//var grilla = new dojox.grid.DataGrid({id:'grillaMaster',store:new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}),autoHeight:true,structure:layoutMaster,onSelected:function(){OnSelectedMaster(this);}},document.createElement('div'));
	//dojo.place(grilla.domNode,dojo.byId('gridContainer'),'last');
	//grilla.startup();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarClientes(){
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=12626&subregion_id='+dijit.byId('subregion_id').attr('value')+'&cod_canal_venta='+dijit.byId('cod_canal_venta').attr('value')+'&cliente_id='+dijit.byId('cli_id').valueNode.value+'&razon_social='+dijit.byId('razon').attr('value');
	dijit.byId('gridOrigen').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigen').attr('autoWidth',true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarCuentas(){
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=12518&tipo_contable_id='+dijit.byId('cuen_id').valueNode.value+'&tipo_contable_desc='+dijit.byId('desc2').attr('value');
	dijit.byId('gridOrigenCuenta').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigenCuenta').attr('autoWidth',true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarProductos(){ 
	if(tipo_producto=='P'){var dml='12517';}else if(tipo_producto=='M'){var dml='12516';}
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dml+'&tipo_producto='+tipo_producto+'&producto_id='+dijit.byId('prod_id').valueNode.value+'&producto_desc='+dijit.byId('desc').attr('value');
	dijit.byId('gridOrigenP').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigenP').attr('autoWidth',true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarAdjuntoEdicion(){
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=12527&comprobante_sp_id='+registroSeleccionado[0][columnasM[0]][0];
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
	if(registroSeleccionado[0][columnasM[6]]!='ED'){Mensaje('No se puede modificar el comprobante, pues no se encuentra en estado de EDICION','error','master');return;}
	var fechaActual = dojo.date.locale.format(new Date(),{datePattern:'yyyyMM',selector:'date'});
	var vigencia = registroSeleccionado[0][columnasM[4]][0].substring(6,11) + registroSeleccionado[0][columnasM[4]][0].substring(3,5);
	if(fechaActual>vigencia){Mensaje('No se puede modificar el comprobante pues est&aacute; fuera de vigencia','error','master');return;}
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarUnicoMaster+'&comprobante_sp_id='+registroSeleccionado[0][columnasM[0]][0],urlPreventCache:true})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['fecha'][0],readOnly:true,style:'width:130px;',label:'Fecha: '}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['cod_canal_venta'][0]+' - '+items[0]['canal_venta'][0],readOnly:true,style:'width:130px;',label:labelFormM[1]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['area_id'][0]+' - '+items[0]['area'][0],readOnly:true,style:'width:130px;',label:labelFormM[2]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['subregion_id'][0]+' - '+items[0]['subregion'][0],readOnly:true,style:'width:130px;',label:labelFormM[3]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['cliente_id'][0]+' - '+items[0]['cliente'][0],readOnly:true,style:'width:130px;',label:labelFormM[4]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['deposito_id'][0]+' - '+items[0]['deposito'][0],readOnly:true,style:'width:130px;',label:labelFormM[5]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['mes_informa'][0],readOnly:true,style:'width:130px;',label:labelFormM[6]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['anio_informa'][0],readOnly:true,style:'width:130px;',label:labelFormM[7]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['observaciones'][0],regExp:regexpFormM[1],readOnly:true,style:'width:130px;height:58px;',label:labelFormM[8]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['tipo_movimiento'][0]+' - '+items[0]['tipo_cbte'][0],style:'width:130px;',readOnly:true,label:labelFormM[9]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['archivo_id'][0],readOnly:true,id:camposFormM[10],style:'width:130px;',label:labelFormM[10],promptMessage:mensajesFormM[10],readOnly:true,required:requeridoFormM[10]}));
		if(items[0]['archivo_id'][0]){
			dijit.byId('botonAdjuntar').attr('label','Eliminar Adj.');
			dijit.byId('botonAdjuntar').onClick=function(){EliminarAdjuntoEdicion();}}
		if(items[0]['tipo_producto'][0]=='F'){
			tipo_producto = 'F';
			if(items[0]['cuenta_contable_id'][0]!='0'){
				tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['cuenta_contable_id'][0]+' - '+items[0]['cuenta_contable'][0],readOnly:true,style:'width:130px;',label:'Cuenta Contable: '}));
				dojo.byId('botonCuenta').style.display = 'block'; 
			}else{
				dojo.byId('botonProductos').style.display = 'block';
			}
		}else if(items[0]['tipo_producto'][0]=='M'){
			tablaForm.addChild(new dijit.form.FilteringSelect({value:items[0]['tipo_cbte_id'][0],readOnly:true,style:'width:130px;',label:'Tipificaci&oacute;n: ',searchAttr:'detalle',store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12515&cod_canal_venta='+items[0]['cod_canal_venta'][0]+'&tipo_movimiento='+items[0]['tipo_movimiento'][0]})}));
			tipo_producto = 'M';
			dojo.byId('botonProductos').style.display = 'block';
		}
		dijit.byId('divCampos').attr('content',tablaForm);
		tablaForm.startup();
		//Muestro el dialogo
		dijit.byId('dialogMaster').show();
		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=12521&comprobante_sp_id='+registroSeleccionado[0][columnasM[0]][0];
		CargarProductosEdicion(urlValue);
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
	//Creacion de botones
	var botonAdjuntar = new dijit.form.Button({id:'botonAdjuntar', label:'Adjuntar',type:'button',iconClass:'adjuntoIcon',onClick:function(){AdjuntarMaster();}});
	dojo.place(botonAdjuntar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlgrabarM = dmlEditarMaster;GrabarMasterEditar();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonGrabarEnviar = new dijit.form.Button({label:'Grabar y Enviar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){dmlgrabarM = dmlEnviarEditarMaster;GrabarMasterEditar();}});
	dojo.place(botonGrabarEnviar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMasterEA(){
	//Validacion
	if(registroSeleccionado[0][columnasM[8]]!='EA'){Mensaje('Solo puede editar Propuestas en Estado EA','error','master');return;}
	if(registroSeleccionado[0]['tipo_carga']=='BU'){Mensaje('Solo puede editar Propuestas de tipo de carga IMPORTE','error','master');return;}
	var fechaActual = dojo.date.locale.format(new Date(),{datePattern:'yyyyMMdd',selector:'date'});
	var vigencia = registroSeleccionado[0][columnasM[3]][0].substring(6,11) + registroSeleccionado[0][columnasM[3]][0].substring(3,5) + registroSeleccionado[0][columnasM[3]][0].substring(0,2);
	if(fechaActual>vigencia){Mensaje('Solo puede editar Propuestas vigentes','error','master');return;}
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11618&propuesta_id='+registroSeleccionado[0][columnasM[0]][0],urlPreventCache:true})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Importe',style:'width:130px;',label:labelFormM[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['fecha_carga'][0],style:'width:130px;',label:labelFormM[6],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipificacion'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['cliente'][0],style:'width:130px;',label:labelFormM[8],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['participacion_dist'][0],style:'width:130px;',label:labelFormM[9],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_desde'][0],style:'width:130px;',label:labelFormM[10],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_hasta'][0],style:'width:130px;',label:labelFormM[11],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_accion'][0],style:'width:130px;',label:labelFormM[12],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['objetivo'][0],style:'width:130px;',label:labelFormM[13],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contra'][0],style:'width:130px;',label:labelFormM[14],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['dist_fisica_comp'][0],style:'width:130px;',label:labelFormM[15],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['bultos_afectados'][0],style:'width:130px;',label:labelFormM[16],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['op_realizar'][0],style:'width:130px;',label:labelFormM[17],readOnly:true}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'canales_mkt',readOnly:true,style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,readOnly:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11619&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[19],value:items[0]['observaciones'][0],maxLength:'40',regExp:regexpFormM[1],required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
		tablaForm.addChild(new dijit.form.TextBox({id:'division_id',value:items[0]['division_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({id:'area_id',value:items[0]['area_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		tablaForm.addChild(new dijit.form.TextBox({id:'subregion_id',value:items[0]['subregion_id'][0],style:'visibility:hidden;width:130px;',label:''}));
		dijit.byId('marc').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11409&division_id='+dijit.byId('division_id').attr('value')}));
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
		
		var botonProd = new dijit.form.Button({label:'Ver Productos',type:'button',onClick:function(){CargarProductosInversa();}});
		dojo.place(botonProd.domNode,dijit.byId('divProrrateoProductos').domNode,'last');
		
		var tablaProrrateoDefine = new dojox.layout.TableContainer({id:'tablaProrrateoDefine',cols:1,labelWidth:'190',style:'text-align:left;'});
		var criterios = {identifier:'id',label:'detalle',items:[{id:'1',detalle:'Por Marca'},{id:'2',detalle:'Por Concepto'}]};
		tablaProrrateoDefine.addChild(new dijit.form.FilteringSelect({id:camposFormM[21],style:'width:130px;',label:labelFormM[21],searchAttr:searchAttrFormM[21],store:new dojo.data.ItemFileReadStore({data:criterios}),onChange:function(){DefinoProrrateo(this.value);}}));
		tablaProrrateoDefine.addChild(new dijit.form.NumberTextBox({id:camposFormM[24],value:'0',style:'width:130px;',label:labelFormM[24]}));
		dijit.byId('divProrrateoDefine').attr('content',tablaProrrateoDefine);
		tablaProrrateoDefine.startup(); 
		
		var tablaProrrateoPorMarca = new dojox.layout.TableContainer({id:'tablaProrrateoPorMarca',cols:1,labelWidth:'190',style:'text-align:left;'});
		tablaProrrateoPorMarca.addChild(new dijit.form.FilteringSelect({id:camposFormM[22],style:'width:130px;',label:labelFormM[22],searchAttr:searchAttrFormM[22],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[22]+'&division_id='+dijit.byId('division_id').attr('value')})}));
		var botonCargarM = new dijit.form.Button({label:'Cargar',type:'button',onClick:function(){CargarProductosM();}});
		dijit.byId('divProrrateoPorMarca').attr('content',tablaProrrateoPorMarca);
		dojo.place(botonCargarM.domNode,dijit.byId('divProrrateoPorMarca').domNode,'last');
		tablaProrrateoPorMarca.startup(); 
		
		var tablaProrrateoPorConcepto = new dojox.layout.TableContainer({id:'tablaProrrateoPorConcepto',cols:1,labelWidth:'190',style:'text-align:left;'});
		tablaProrrateoPorConcepto.addChild(new dijit.form.FilteringSelect({id:camposFormM[23],style:'width:130px;',label:labelFormM[23],searchAttr:searchAttrFormM[23],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[23]+'&area_id='+dijit.byId('area_id').attr('value')+'&subregion_id='+dijit.byId('subregion_id').attr('value')+'&division_id='+dijit.byId('division_id').attr('value')})}));
		var botonCargarC = new dijit.form.Button({label:'Cargar',type:'button',onClick:function(){CargarProductosC();}});
		dijit.byId('divProrrateoPorConcepto').attr('content',tablaProrrateoPorConcepto);
		dojo.place(botonCargarC.domNode,dijit.byId('divProrrateoPorConcepto').domNode,'last');
		tablaProrrateoPorConcepto.startup(); 
		
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
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
function EditarMasterAW(){
	//Validacion
	if(registroSeleccionado[0][columnasM[8]]!='AW'){Mensaje('Solo se pueden ajustar Propuestas en Estado AW','error','master');return;}
	if(registroSeleccionado[0]['tipo_carga']=='BU'){Mensaje('Solo puede ajustar Propuestas de tipo de carga IMPORTE','error','master');return;}
	var fechaActual = dojo.date.locale.format(new Date(),{datePattern:'yyyyMMdd',selector:'date'});
	var vigencia = registroSeleccionado[0][columnasM[3]][0].substring(6,11) + registroSeleccionado[0][columnasM[3]][0].substring(3,5) + registroSeleccionado[0][columnasM[3]][0].substring(0,2);
	if(fechaActual>vigencia){Mensaje('Solo puede ajusar Propuestas vigentes','error','master');return;}
	//Cargo los datos
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11618&propuesta_id='+registroSeleccionado[0][columnasM[0]][0],urlPreventCache:true})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['division_desc'][0],style:'width:130px;',label:labelFormM[0],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['area_desc'][0],style:'width:130px;',label:labelFormM[1],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['subregion_desc'][0],style:'width:130px;',label:labelFormM[2],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_presupuesto_desc'][0],style:'width:130px;',label:labelFormM[3],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['propuesta_id'][0],style:'width:130px;',label:labelFormM[4],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:'Importe',style:'width:130px;',label:labelFormM[5],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['fecha_carga'][0],style:'width:130px;',label:labelFormM[6],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipificacion'][0],style:'width:130px;',label:labelFormM[7],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['cliente'][0],style:'width:130px;',label:labelFormM[8],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['participacion_dist'][0],style:'width:130px;',label:labelFormM[9],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_desde'][0],style:'width:130px;',label:labelFormM[10],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['vigencia_hasta'][0],style:'width:130px;',label:labelFormM[11],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['tipo_accion'][0],style:'width:130px;',label:labelFormM[12],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['objetivo'][0],style:'width:130px;',label:labelFormM[13],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['contra'][0],style:'width:130px;',label:labelFormM[14],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['dist_fisica_comp'][0],style:'width:130px;',label:labelFormM[15],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['bultos_afectados'][0],style:'width:130px;',label:labelFormM[16],readOnly:true}));
		tablaForm.addChild(new dijit.form.TextBox({value:items[0]['op_realizar'][0],style:'width:130px;',label:labelFormM[17],readOnly:true}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'canales_mkt',readOnly:true,style:'width:130px;height:58px;',label:labelFormM[18],multiple:true,readOnly:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11619&propuesta_id='+registroSeleccionado[0][columnasM[0]][0]})}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[19],maxLength:'40',value:items[0]['observaciones'][0],regExp:regexpFormM[1],required:requeridoFormM[19],style:'width:130px;height:58px;',label:labelFormM[19]}));
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
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMasterEditar();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	//Seteo propiedades para Editar
	dmlgrabarM = '11628';
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
function EnviarMasivoWMaster(){
	var comprobantesChecked = '';
	var mensaje = null;
			var ObtenerPropuestas = function(item){
				if(item['estado'][0]!='ED'){mensaje = 'Debe seleccionar solo Comprobantes SP con Estado ED';return;}
				comprobantesChecked+=item['comprobante_sp_id'][0]+',';
			}
			dijit.byId('gridMaster').store.fetch({query:{seleccionado:'true'},onItem:ObtenerPropuestas});
	if(mensaje){Mensaje(mensaje,'error','master');return;}
	if(comprobantesChecked==''){Mensaje('Seleccione al menos un Comprobante SP','error','master');return;}
	//Grabación de datos en la base de datos
	comprobantesChecked = comprobantesChecked.substr(0,comprobantesChecked.length-1);
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=12623&comprobantes='+comprobantesChecked;
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
					if(!item){dijit.byId('gridProductos').store.newItem({producto_id:storeProductos.getValue(items[i],'producto_id'), producto_desc:storeProductos.getValue(items[i],'producto_desc'),importe:storeProductos.getValue(items[i],'importe')});}
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
	var camposStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarUnicoMaster+'&comprobante_sp_id='+registroSeleccionado[0][columnasM[0]][0]})
	var LlenarParametros = function(items,request){
		var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'150',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['fecha'][0],readOnly:true,style:'width:130px;',label:'Fecha: '}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['cod_canal_venta'][0]+' - '+items[0]['canal_venta'][0],readOnly:true,style:'width:130px;',label:labelFormM[1]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['area_id'][0]+' - '+items[0]['area'][0],readOnly:true,style:'width:130px;',label:labelFormM[2]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['subregion_id'][0]+' - '+items[0]['subregion'][0],readOnly:true,style:'width:130px;',label:labelFormM[3]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['cliente_id'][0]+' - '+items[0]['cliente'][0],readOnly:true,style:'width:130px;',label:labelFormM[4]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['deposito_id'][0]+' - '+items[0]['deposito'][0],readOnly:true,style:'width:130px;',label:labelFormM[5]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['mes_informa'][0],readOnly:true,style:'width:130px;',label:labelFormM[6]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['anio_informa'][0],readOnly:true,style:'width:130px;',label:labelFormM[7]}));
		tablaForm.addChild(new dijit.form.SimpleTextarea({value:items[0]['observaciones'][0],readOnly:true,style:'width:130px;height:58px;',label:labelFormM[8]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['tipo_movimiento'][0]+' - '+items[0]['tipo_cbte'][0],style:'width:130px;',readOnly:true,label:labelFormM[9]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['archivo_id'][0],readOnly:true,style:'width:130px;',label:labelFormM[10]}));
		if(items[0]['tipo_producto'][0]=='F'){
			tablaForm.addChild(new dijit.form.ValidationTextBox({value:items[0]['cuenta_contable_id'][0]+' - '+items[0]['cuenta_contable'][0],readOnly:true,style:'width:130px;',label:'Cuenta Contable: '}));
		}else if(items[0]['tipo_producto'][0]=='M'){
			tablaForm.addChild(new dijit.form.FilteringSelect({value:items[0]['tipo_cbte_id'][0],readOnly:true,style:'width:130px;',label:'Tipificaci&oacute;n: ',searchAttr:'detalle',store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12515&cod_canal_venta='+items[0]['cod_canal_venta'][0]+'&tipo_movimiento='+items[0]['tipo_movimiento'][0]})}));
		}
		dijit.byId('divCamposD').attr('content',tablaForm);
		tablaForm.startup();
		//Muestro el dialogo
		dijit.byId('dialogDetail').show();
		//Obtengo datos de productos
		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=12521&comprobante_sp_id='+registroSeleccionado[0][columnasM[0]][0];
		dijit.byId('gridProductosD').setStore(new dojo.data.ItemFileWriteStore({urlPreventCache:true,url:urlValue}));
		dijit.byId('gridProductosD').attr("autoWidth",true);
		dijit.byId('gridProductosD').update();
		//Obtengo datos de Comprobantes
		var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=12524&comprobante_sp_id='+registroSeleccionado[0][columnasM[0]][0];
		dijit.byId('gridComprobantesD').setStore(new dojo.data.ItemFileWriteStore({urlPreventCache:true,url:urlValue}));
		dijit.byId('gridComprobantesD').attr("autoWidth",true);
		dijit.byId('gridComprobantesD').update();
	}
	camposStore.fetch({query:{},onComplete:LlenarParametros});
	//Creacion de botones
	var botonCancelar = new dijit.form.Button({label:'Aceptar',type:'button',iconClass:'aceptarIcon',onClick:function(){CancelarDetail();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotonesD").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogDetail").titleBar.children[1].style.display='none';
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CopiarMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({id:'contenedor',style:'text-align:center;background-color:white;'});
	//Creacion del formulario
	dijit.byId('contenedor').attr('content','Solo se incluir&aacute;n los productos activos de la propuesta seleccionada');
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[10],constraints:{datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[10],label:labelFormM[10],onChange:function(){dijit.byId(camposFormM[11]).constraints.min = arguments[0];dijit.byId(camposFormM[11]).constraints.max = new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(arguments[0]));}}));
	tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[11],constraints:{datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[11],label:labelFormM[11]}));
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
	dmlgrabarM = dmlCopiarMaster;
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CopiarMasterEA(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({id:'contenedor',style:'text-align:center;background-color:white;'});
	dijit.byId('contenedor').attr('content','Solo se incluir&aacute;n los productos activos de la propuesta seleccionada');
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[10],constraints:{datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[10],label:labelFormM[10],onChange:function(){dijit.byId(camposFormM[11]).constraints.min = arguments[0];dijit.byId(camposFormM[11]).constraints.max = new Date(dijit.byId(camposFormM[10]).valueNode.value.substring(0,4),dijit.byId(camposFormM[10]).valueNode.value.substring(5,7)-1,dojo.date.getDaysInMonth(arguments[0]));}}));
	tablaForm.addChild(new dijit.form.DateTextBox({id:camposFormM[11],constraints:{datePattern:'dd-MM-yyyy'},style:'width:130px;',required:requeridoFormM[11],label:labelFormM[11]}));
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
	dmlgrabarM = dmlCopiarMaster;
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarMaster(){
	//Validacion
	if(registroSeleccionado[0][columnasM[6]]!='ED'){Mensaje('Solo se pueden eliminar Comprobantes SP en estado ED','error','master');return;}
	//Generación de la URL y el mensaje de advertencia
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmleliminarM;
	mensaje='Est&aacute; seguro que desea eliminar el Comprobante Sin Presupuesto <b>'+registroSeleccionado[0][columnasM[0]]+' ?</b>';
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
	document.location = urlValue;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMaster(){
	dijit.byId('gridProductos').edit.apply();
	//Validacion de que el formulario esté bien cargado
	for(i=0;i<requeridoFormM.length;i++){
		if(camposFormM[i]!='fecha_actual' && camposFormM[i]!='tipo_movimiento' && camposFormM[i]!='cliente_id' && !dijit.byId(camposFormM[i]).isValid()){dijit.byId(camposFormM[i]).focus();return;}
	}
	if(dijit.byId('anio_informa').attr('value')<dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'})){dijit.showTooltip('El a&ntilde;o debe ser mayor o igual al actual',dijit.byId('anio_informa').domNode,'above');return;}
	else if(dijit.byId('anio_informa').attr('value')==dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}) && dijit.byId('mes_informa').attr('value')<dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})){dijit.showTooltip('El mes/a&ntilde;o debe ser mayor o igual al actual',dijit.byId('mes_informa').domNode,'above');return;}
	if(dijit.byId('clientes_desc').attr('value')==''){dijit.byId('gridOrigen').attr('autoWidth',true);dijit.byId('dialogClientes').show();return;}
	if(dijit.byId('tipo_movimiento').attr('value')==''){dijit.showTooltip('Seleccione un Tipo de Comprobante',dijit.byId('tipo_movimiento').domNode,'above');return;}
	if(dijit.byId('tipo_contable_id') && dijit.byId('tipo_contable_id').attr('value')==''){dijit.byId("dialogCuenta").show();return;}
	//Generación de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM;
	for(i=0;i<camposFormM.length;i++){
		if(camposFormM[i]!='tipo_movimiento' && camposFormM[i]!='fecha_actual' && camposFormM[i]!='area_id'){
			urlValue+='&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).attr('value');
		}
	}
	dijit.byId('tipo_movimiento').store.fetchItemByIdentity({
		identity:dijit.byId('tipo_movimiento').attr('value'),
		onItem:function(item){
			urlValue+='&tipo_producto='+dijit.byId('tipo_movimiento').store.getValue(item,'tipo_producto');
			urlValue+='&tipo_movimiento='+dijit.byId('tipo_movimiento').store.getValue(item,'tipo_movimiento_id');
		}
	});
	if(dijit.byId('tipo_contable_id')){urlValue+='&tipo_contable_id='+dijit.byId('tipo_contable_id').attr('value');}
	else{urlValue+='&tipo_contable_id=';}
	urlValue+='&tipo_cbte_id=';if(dijit.byId('tipo_cbte_id')){urlValue+=dijit.byId('tipo_cbte_id').attr('value');}
	var CompletarJSON = function(items,request){
		var ids = '';
		var importes = '';
		for(i=0;i<items.length;i++){
			if(dijit.byId('gridProductos').store.getValue(items[i],'importe')<1){dijit.showTooltip('Los productos deben tener un importe mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}
			ids+=dijit.byId('gridProductos').store.getValue(items[i],'producto_id');
			importes+=dijit.byId('gridProductos').store.getValue(items[i],'importe');
			if(i!=items.length-1){ids+=',';importes+='-';}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
		dijit.byId('dialogMaster').hide();
		procesando.show();
		urlValue+='&productos='+ids+'&importes_productos='+importes;
		//Grabación de datos en la base de datos
		dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		console.log(response.errcode);
			if(response.errcode==""){
				BuscarMaster();
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
	//Validacion
	if(!dijit.byId(camposFormM[10]).isValid()){dijit.byId(camposFormM[10]).focus();return;}
	if(!dijit.byId(camposFormM[11]).isValid()){dijit.byId(camposFormM[11]).focus();return;}
	//Generación de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM+'&propuesta_id='+registroSeleccionado[0][columnasM[0]]+'&vigencia_desde='+dijit.byId(camposFormM[10]).valueNode.value+'&vigencia_hasta='+dijit.byId(camposFormM[11]).valueNode.value;
	dijit.byId('dialogM').hide();
	procesando.show();
	//Grabación de datos en la base de datos
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
			console.log(response.errcode);
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
	dijit.byId('gridProductos').edit.apply();
	//Generación de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM;
	urlValue+='&comprobante_sp_id='+registroSeleccionado[0][columnasM[0]][0];
	urlValue+='&archivo_id='+dijit.byId('archivo_id').attr('value');
	var CompletarJSON = function(items,request){
		var ids = '';
		var importes = '';
		for(i=0;i<items.length;i++){
			if(dijit.byId('gridProductos').store.getValue(items[i],'importe')<1){dijit.showTooltip('Los productos deben tener un importe mayor a 0(cero)',dijit.byId('gridProductos').domNode,'above');return;}
			ids+=dijit.byId('gridProductos').store.getValue(items[i],'producto_id');
			importes+=dijit.byId('gridProductos').store.getValue(items[i],'importe');
			if(i!=items.length-1){ids+=',';importes+='-';}
		}
		if(ids==''){dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
		dijit.byId('dialogMaster').hide();
		procesando.show();
		urlValue+='&productos='+ids+'&importes_productos='+importes;
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
	if(dijit.byId('gridProductos').store){dijit.byId('gridProductos').store.fetch({query:{},onComplete:CompletarJSON});}
	else{dijit.showTooltip('Ingrese al menos un producto',dijit.byId('gridProductos').domNode,'above');return;}
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
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	if(dijit.byId('tipo_movimiento')){dijit.hideTooltip(dijit.byId('tipo_movimiento').domNode);}
	//Elimino el dialogo
	dijit.byId('dialogMaster').hide();
	dijit.byId('divCampos').destroyDescendants();
	dijit.byId('divBotones').destroyDescendants();
	dijit.byId('cuentaCentro').destroyDescendants();
	dijit.byId('divFinanciera').destroyDescendants();
	dojo.byId('botonProductos').style.display = 'none';
	dojo.byId('botonCuenta').style.display = 'none';
	if(dijit.byId('clientes_desc')){dijit.byId('clientes_desc').destroy();}
	dijit.byId('prod_id').attr('value','');
	dijit.byId('desc').attr('value','');
	dijit.byId('gridOrigen').setStore(null);dijit.byId('gridOrigen').update();
	dijit.byId('gridDestinoP').setStore(null);dijit.byId('gridDestinoP').update();
	dijit.byId('gridOrigenP').setStore(null);dijit.byId('gridOrigenP').update();
	dijit.byId('gridProductos').setStore(null);dijit.byId('gridProductos').update();
	dojo.byId('divTotalImporte').innerHTML='0';
	//Limpio campos del formulario
	for(i=0;i<camposFormM.length;i++){if(dijit.byId(camposFormM[i])){dijit.byId(camposFormM[i]).destroy();}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarDetail(){
	dijit.hideTooltip(dijit.byId('gridProductosD').domNode);
	//Elimino el dialogo
	dijit.byId('dialogDetail').hide();
	dijit.byId('divCamposD').destroyDescendants();
	dijit.byId('divBotonesD').destroyDescendants();
	//dijit.byId('divFinancieraD').destroyDescendants();
	dojo.byId('divTotalImporteD').innerHTML='0';
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
			dijit.byId(grilla_id).store.setValue(item,columnasP[2],checkbox.checked);
		}
		dijit.byId(grilla_id).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId(grilla_id).store.save();}});
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumn(checkbox){
	//if(dijit.byId('enviarMasivoWMaster')){dijit.byId('enviarMasivoWMaster').attr('disabled',false);}
	//var Checkear = function(item){dijit.byId('gridMaster').store.setValue(item,'seleccionado',checkbox.checked);}
	//dijit.byId('gridMaster').store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId('gridMaster').store.save();}});
	if(dijit.byId('enviarMasivoWMaster')){
		dijit.byId('enviarMasivoWMaster').attr('disabled',false);
	}		
			if(dijit.byId('gridMaster').store){
				var Checkear = function(item){
					if(item['estado'][0]=='ED'){
						dijit.byId('gridMaster').store.setValue(item,'seleccionado',checkbox.checked);
					}
				}
				dijit.byId('gridMaster').store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId('gridMaster').store.save();}});
			}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajarAdjunto(){
	var idCbte = registroSeleccionado[0][columnasM[0]][0];
	dijit.byId('grillaMaster').store.fetchItemByIdentity({identity:idCbte,onItem:function(item){
		var adjValue = dijit.byId('gridMaster').store.getValue(item,'adjunto');		
		if (adjValue == "on"){
			var urlValue ='dbi/comprobantes_sp_verAdjunto.php?sid='+gvarSID+'&comprobante_sp_id='+registroSeleccionado[0][columnasM[0]][0];
			//document.location = urlValue;
			window.open(urlValue,"Bajar_Adjunto2","menubar=no,width=300,height=300,toolbar=no,resizable=yes");
		} else {
			Mensaje('El comprobante seleccionado no posee adjunto','error','master');return;
		}
	}});
}