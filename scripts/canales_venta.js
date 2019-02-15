//TITULOS
titulos =  new Array("Canales de Venta");
//DMLs
var dmlBuscarMaster = "12301";
var dmlCanales = "12302";
var dmlnuevoM = "12303";
var dmleliminarM = "12304";
var dmlAuditoriaMaster = "12305";
var dmlgrabarM = "";
//COLUMNAS
var columnasM = new Array("cod_canal_venta","descripcion");
var tiposM = new Array("text","text");
//DESCRIPCIONES
var descripcionesM = new Array("C&oacute;digo","Descripci&oacute;n");
//PRIMARY KEY
var clavesM = new Array("cod_canal_venta");
//FILTROS
var filtroMaster = new Array("canales");
var labelFiltroMaster = new Array("Canal: ");
var mensajeFiltroMaster = new Array("Elija un Canal");
var tipoFiltroMaster = new Array('FilteringSelect');
//FORMULARIO
var camposFormM = new Array('canales');
var labelFormM = new Array('Canal de Venta: ');
var requeridoFormM = new Array(true);
var regexpFormM = new Array(".*",".{1,30}");
var mensajesFormM = new Array('Elija un Canal');
var dojoTypeFormM = new Array('FilteringSelect');
var searchAttrFiltroMaster = new Array('detalle');
//Carga las estructuras de las tablas
var layoutMaster = [
    {width: "auto", field: columnasM[0], name: descripcionesM[0]},
    {width: "auto", field: columnasM[1], name: descripcionesM[1]}];
//campos de auditoria
var camposAuditoriaM = new Array('usr_altam','fecha_altam','usr_modifm','fecha_modifm');
var labelAuditoria = new Array('Creado por: ','Fecha de creaci&oacute;n: ','Modificado por: ','Fecha de modificaci&oacute;n: ');
//Carga de titulos
document.getElementById("bloqueMaster").innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	//Modificacion de label e iconos de los botones
	if(dijit.byId('filtrMaster')){dijit.byId('filtrMaster').destroyRecursive();}
	ArmadoFiltroYAuditoria();
	BuscarMaster();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedMaster(){
	HabilitarBotonesMaster(2,false);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function HabilitarBotonesMaster(tipo,bool){
	if(tipo==1){
		if(dijit.byId("bajaexcelMaster")){dijit.byId("bajaexcelMaster").attr('disabled',bool);}}
	if(tipo==2){
		if(dijit.byId("editarMaster")){dijit.byId("editarMaster").attr('disabled',bool);}
		if(dijit.byId("copiarMaster")){dijit.byId("copiarMaster").attr('disabled',bool);}
		if(dijit.byId("eliminarMaster")){dijit.byId("eliminarMaster").attr('disabled',bool);}
		if(dijit.byId("auditMaster")){dijit.byId("auditMaster").attr('disabled',bool);}
		if(dijit.byId("blanquearClaveMaster")){dijit.byId("blanquearClaveMaster").attr('disabled',bool);}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ArmadoFiltroYAuditoria(){
	if(dijit.byId('filtrMaster')){
		//Limpio Filtros
		if(dijit.byId("filtro0")){for(i=0;i<filtroMaster.length;i++){dijit.byId('filtro'+i).destroy();}}
		//Creo Filtros
		var divFiltros = new dijit.layout.ContentPane({style:'width:350px;'});
		var tablaFiltros = new dojox.layout.TableContainer({cols:1});
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='TextBox'){tablaFiltros.addChild(new dijit.form.TextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],onChange:function(){dijit.byId('filtro5').constraints.min = arguments[0];}}));}if(dijit.byId('filtro5')){dijit.byId('filtro5').attr('onChange',function(){dijit.byId('filtro4').constraints.max = arguments[0];})}}
			if(tipoFiltroMaster[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i]}));}
		divFiltros.attr('content',tablaFiltros);
		var botonBuscar = new dijit.form.Button({label:'Buscar',type:'submit',onClick:function(){BuscarMaster();}},document.createElement('div'));
		dojo.place(botonBuscar.domNode,divFiltros.domNode,'last');
		dijit.byId('filtrosMaster').attr('content',divFiltros);}	
	if(dijit.byId('auditMaster')){
		//Limpio Filtros
		if(dijit.byId(camposAuditoriaM[0])){for(i=0;i<camposAuditoriaM.length;i++){dijit.byId(camposAuditoriaM[i]).destroy();}}
		//Creo campos de auditoria
		var tablaAuditMaster = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:"width:350px;"});
		for(i=0;i<camposAuditoriaM.length;i++){tablaAuditMaster.addChild(new dijit.form.TextBox({id:camposAuditoriaM[i],label:labelAuditoria[i],disabled:true,type:'text'}));}
		dijit.byId('auditoriaMaster').attr('content',tablaAuditMaster);}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function NuevoMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:350px;text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<camposFormM.length;i++){
		if(dojoTypeFormM[i]=='ValidationTextBox'){tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[i],label:labelFormM[i],trim:true,promptMessage:mensajesFormM[i],regExp:regexpFormM[i],required:requeridoFormM[i]}));}
		if(dojoTypeFormM[i]=='FilteringSelect'){tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[i],label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFormM[i],searchAttr:searchAttrFiltroMaster[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlCanales})}));}}
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
function BuscarMaster(){
	//Armado de URL
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	gridMaster.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	gridMaster.attr("autoWidth",true);
	gridMaster.update();
	gridMaster.selection.clear();
	HabilitarBotonesMaster(1,false);
	HabilitarBotonesMaster(2,true);
	//Muestro la cantidad obtenida
	gridMaster.store.fetch({query:{},onComplete:function(items,request){document.getElementById("cantidadObtenidaMaster").innerHTML='Registros:'+items.length;dijit.byId("cmn_mensajes").hide();}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarMaster(){
	//tomo el valor de los campos clave de los registros seleccionados en el gridMaster
	var items=gridMaster.selection.getSelected();
	//Generación de la URL y el mensaje de advertencia
	var urlValue ='dbi/e.php?sid='+gvarSID+'&dmlid='+dmleliminarM;
	mensaje='Est&aacute; seguro que desea eliminar el tipo de presupuesto ';
	for(i=0;i<clavesM.length;i++){
		urlValue+='&'+clavesM[i]+'='+items[0][columnasM[i]];
		mensaje+='<br><b>'+items[0][columnasM[i+1]]+'</b>';
	}
	PopUp("Advertencia!", mensaje, "Eliminar('"+urlValue+"');");
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
		}else{procesando.hide();PopUp("Error", response.errmsg);}
		}
	});
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
function GrabarMaster(){
	//Validacion de que el formulario esté bien cargado
	for(i=0;i<camposFormM.length;i++){
		if(!dijit.byId(camposFormM[i]).isValid()){dijit.byId(camposFormM[i]).focus();return;}
	}
	dijit.byId('dialogMaster').hide();
	procesando.show();
	//Habilito los campos primary de vuelta, de lo contrario no se pasan por post
	for(i=0;i<clavesM.length;i++){dijit.byId(camposFormM[i]).attr('disabled',false);}
	//Generación de la URL
	var urlValue ='dbi/e.php?sid='+gvarSID+'&dmlid='+dmlgrabarM;
	for(i=0;i<camposFormM.length;i++){
		urlValue = urlValue +'&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).attr('value');
	}
	//Grabación de datos en la base de datos
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if (response.errcode==0){
			CancelarMaster();//Elimino el dialogo
			BuscarMaster();//Refresco del gridMaster
			procesando.hide();
			Mensaje('Los cambios se han realizado exitosamente','mensaje','master');
		} else {
			procesando.hide();dijit.byId('dialogMaster').show();
			if(response.errmsg=='Registro duplicado'){PopUp('Error', 'El canal de Venta ya existe');}
			else{PopUp('Error', response.errmsg);}}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	//Elimino el dialogo
	dijit.byId('dialogMaster').hide();
	dijit.byId('dialogMaster').destroyRecursive();
	//Limpio campos del formulario
	for(i=0;i<camposFormM.length;i++){if(dijit.byId(camposFormM[i])){dijit.byId(camposFormM[i]).destroy();}}
}