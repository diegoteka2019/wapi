//TITULOS
var titulos =  new Array("Consulta de Informes");
//DMLs
var dmlBuscarMaster = "12104";
var dmlReportes = "12105";
var dmlnuevoM = "";
var dmleditarM = "";
var dmlbuscarUnicoM = ""; 
var dmleliminarM = "";
var dmlAuditoriaMaster = "";
var dmlgrabarM = "";
var dmlBajarExcelMaster = "";
//COLUMNAS
var columnasM = new Array("ticket_id","reporte","fecha","header_id");
//DESCRIPCIONES
var descripcionesM = new Array("Ticket Id","Reporte","Fecha de Ejecuci&oacute;n","Encabezado Id");
//PRIMARY KEY
var clavesM = new Array("header_id");
//FILTROS
var filtroMaster = new Array('ticket_id','reporte','vigencia_desde','vigencia_hasta');
var labelFiltroMaster = new Array('Nro de Ticket: ','Reporte: ','Fecha Ejecuci&oacute;n Desde: ','Fecha Ejecuci&oacute;n Hasta: ');
var mensajeFiltroMaster = new Array('Seleccione Nro de Ticket','Seleccione Reporte','Seleccione la Fecha Ejecuci&oacute;n Desde','Seleccione la Fecha Ejecuci&oacute;n Hasta');
var requeridoFiltroMaster = new Array(false,false,false,false);
var searchAttrFiltroMaster = new Array('','detalle','','');
var tipoFiltroMaster = new Array('ValidationTextBox','FilteringSelect','DateTextBox','DateTextBox');
var selectFiltroMaster = new Array('','reportes','','');
//Mensajes de formulario
var labelFormM = new Array('Id: ','Nombre: ','Valor: ','Descripci&oacute;n: ');
var requeridoFormM = new Array(true,true,true,false);
var regexpFormM = new Array("[0-9]+",".*",".*",".*");
var mensajesFormM = new Array("Ingrese el Id del par&aacute;metro","Ingrese el nombre del par&aacute;metro","Ingrese el valor","Ingrese la descripci&oacute;n");
var dojoTypeFormM = new Array('ValidationTextBox','ValidationTextBox','ValidationTextBox','ValidationTextBox');
//Carga las estructuras de las tablas
var layoutMaster = [
    {width: '120px', field: columnasM[0], name: descripcionesM[0]},
    {width: "auto", field: columnasM[1], name: descripcionesM[1]},
	{width: '120px', field: columnasM[2], name: descripcionesM[2]},
	{width: '0px', field: columnasM[3], name: descripcionesM[3], hidden:true}];
//campos de auditoria
var camposAuditoriaM = new Array('usr_altam','fecha_altam','usr_modifm','fecha_modifm');
var labelAuditoria = new Array('Creado por: ','Fecha de creaci&oacute;n: ','Modificado por: ','Fecha de modificaci&oacute;n: ');
//Carga de titulos
document.getElementById("bloqueMaster").innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
var registroSeleccionado = null;
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	ArmadoFiltroYAuditoria();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedMaster(){
	registroSeleccionado = dijit.byId('gridMaster').selection.getSelected();
	HabilitarBotonesMaster(2,false);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function HabilitarBotonesMaster(tipo,bool){
	if(tipo==1){
		}
	if(tipo==2){
		if(dijit.byId('bajaexcelMaster')){dijit.byId('bajaexcelMaster').attr('disabled',bool);}
		if(dijit.byId('editarMaster')){dijit.byId('editarMaster').attr('disabled',bool);}
		if(dijit.byId('copiarMaster')){dijit.byId('copiarMaster').attr('disabled',bool);}
		if(dijit.byId('eliminarMaster')){dijit.byId('eliminarMaster').attr('disabled',bool);}
		if(dijit.byId('auditMaster')){dijit.byId('auditMaster').attr('disabled',bool);}
		if(dijit.byId('blanquearClaveMaster')){dijit.byId('blanquearClaveMaster').attr('disabled',bool);}
		if(dijit.byId('verDetalleMaster')){dijit.byId('verDetalleMaster').attr('disabled',bool);}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ArmadoFiltroYAuditoria(){
	if(dijit.byId('filtrMaster')){
		//Limpio Filtros
		if(dijit.byId('filtro0')){for(i=0;i<filtroMaster.length;i++){dijit.byId('filtro'+i).destroy();}}
		//Creo Filtros
		var divFiltros = new dijit.layout.ContentPane({style:'width:350px;'});
		var tablaFiltros = new dojox.layout.TableContainer({cols:1,labelWidth:'200'});
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='TextBox'){tablaFiltros.addChild(new dijit.form.TextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='ValidationTextBox'){tablaFiltros.addChild(new dijit.form.ValidationTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',constraints:{datePattern:'dd-MM-yyyy'},promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],onChange:function(){if(tipoFiltroMaster[parseInt(this.id.charAt(6))+1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))+1)).constraints.min = arguments[0];}else if(tipoFiltroMaster[parseInt(this.id.charAt(6))-1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))-1)).constraints.max = arguments[0];}}}));}
			if(tipoFiltroMaster[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlReportes})}));}}
		
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
function BuscarMaster(){
	//Limpio la pantalla
	//dijit.byId('gridContainer').destroyDescendants();
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	if(filtroMaster.length > 0){
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='DateTextBox'){urlValue+='&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).valueNode.value;}
			else{urlValue+='&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');}}
	}
    gridMaster.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	gridMaster.attr("autoWidth",true);
	gridMaster.adaptWidth();
	gridMaster.selection.clear();
	HabilitarBotonesMaster(1,false);
	HabilitarBotonesMaster(2,true);
	//Muestro la cantidad obtenida
	gridMaster.store.fetch({query:{},onComplete:function(items,request){document.getElementById("cantidadObtenidaMaster").innerHTML='Registros:'+items.length;dijit.byId("cmn_mensajes").hide();}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajadaExcelMaster() {
	var urlValue ='dbi/consulta_informes_excel.php?sid='+gvarSID+'&header_id='+registroSeleccionado[0]['header_id'][0]+'&reporte='+registroSeleccionado[0]['reporte'][0];
	//document.location = urlValue;
	window.open(urlValue,"Bajar_Informe","menubar=no,width=300,height=300,toolbar=no");
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	//Elimino el dialogo
	dijit.byId('dialogMaster').hide();
	dijit.byId('dialogMaster').destroyRecursive();
	//Limpio campos del formulario
	if(dijit.byId(columnasM[0])){for(i=0;i<columnasM.length;i++){dijit.byId(columnasM[i]).destroy();}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function Mensaje(mensaje,color,tipo){
	switch(color){
		case 'mensaje': dojo.byId('cmn_mensajes_'+tipo).style.background='#00FF00';break;
		case 'advertencia': dojo.byId('cmn_mensajes_'+tipo).style.background='yellow';break;
		case 'error': dojo.byId('cmn_mensajes_'+tipo).style.background='red';break;}
	dojo.byId('cmn_mensajes_'+tipo).innerHTML = mensaje;
	//if(color=='error'){dojo.byId('cmn_mensajes_'+tipo).innerHTML += '<img align="middle" src="images/tabClose.gif"/>';}
	dojo.fadeIn({node:'cmn_mensajes_'+tipo,duration:1000}).play();
}