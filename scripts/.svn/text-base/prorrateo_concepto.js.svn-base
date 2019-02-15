//TITULOS
var titulos =  new Array("Prorrateos por Concepto");
//DMLs
var dmlBuscarMaster = "11305";
var dmlnuevoM = "11301";
var dmleditarM = "11302";
var dmlbuscarUnicoM = "11304"; 
var dmleliminarM = "11303";
var dmlAuditoriaMaster = "";
var dmlgrabarM = "";
var dmlBuscarProdSel = "11306";
var dmlbuscarUnicoMProd = "11307";
//COLUMNAS
var columnasM = new Array("concepto_id","area","subregion","division","descripcion","usr_alta");
var tiposM = new Array("text","text","text","text","text","text");
//DESCRIPCIONES
var descripcionesM = new Array("Id","Area","Subregi&oacute;n","Divisi&oacute;n","Descripci&oacute;n","Usuario Alta");
//PRIMARY KEY
var clavesM = new Array("concepto_id");
//FILTROS
var filtroMaster = new Array("area_id","sub_region_id","division_id","descripcion");
var labelFiltroMaster = new Array("Area: ","Sub-Regi&oacute;n: ","Divisi&oacute;n: ","Descripci&oacute;n: ");
var mensajeFiltroMaster = new Array("Ingrese el area","Ingrese la Sub-Ragion","Ingrese la division","Ingrese la descripcion");
var requeridoFiltroMaster = new Array(false,false,false,false);
var tipoFiltroMaster = new Array('FilteringSelect','FilteringSelect','FilteringSelect','ValidationTextBox');
var searchAttrFiltroMaster = new Array('detalle','detalle','detalle','');
var selectFiltroMaster = new Array('10907','10908','10905','');
//FORMULARIO
var camposFormM = new Array("area_id","sub_region_id","division_id","descripcion");
var labelFormM = new Array("Area: ","Sub-Regi&oacute;n: ","Divisi&oacute;n: ","Descripci&oacute;n: ");
var requeridoFormM = new Array(true,true,true,true);
var regexpFormM = new Array("","","","[a-zA-Z0-9ñÑ¿?¡! ,.()-_]+");
var mensajesFormM = new Array("Ingrese el area","Ingrese la Sub-Ragion","Ingrese la division","Ingrese la descripcion");
var dojoTypeFormM = new Array('FilteringSelect','FilteringSelect','FilteringSelect','ValidationTextBox');
var searchAttrFormM = new Array('detalle','detalle','detalle','');
var selectFormM = new Array('10907','10908','10905','');
var CalcularTotal = function(value){
	dijit.hideTooltip(dijit.byId('gridProductos').domNode);
	var suma = 0;
	var AsignarTotal = function(items,request){
		for(i=0;i<items.length;i++){
			suma+=parseFloat(dijit.byId('gridProductos').store.getValue(items[i],'porcentaje').replace(',','.'));}
		dojo.byId('divTotal').innerHTML = suma.toFixed(2);
	}
	dijit.byId('gridProductos').store.fetch({query:{},onComplete:AsignarTotal});
	return value.replace(',','.');
}
//Carga las estructuras de las tablas
var layoutMaster = [
    {width: "auto", field: columnasM[0], name: descripcionesM[0]},
	{width: "auto", field: columnasM[1], name: descripcionesM[1]},
	{width: "auto", field: columnasM[2], name: descripcionesM[2]},
	{width: "auto", field: columnasM[3], name: descripcionesM[3]},
	{width: "auto", field: columnasM[4], name: descripcionesM[4]},
    {width: "auto", field: columnasM[5], name: descripcionesM[5]}];
	
var layoutProductos = [
    {width: "40px", field: 'producto_id', name: 'Id'},
	{width: "145px", field: 'producto_desc', name: 'Descripcion'},
	{width: "50px", field: 'porcentaje', name: 'Porcentaje', editable:true,formatter:CalcularTotal},
	{width: "30px", field: 'quitar', name: 'Quitar', editable:true, type:dojox.grid.cells.Bool}];

var layoutSelProductos = [
    {width: "40px", field: 'producto_id', name: 'Id'},
	{width: "185px", field: 'producto_desc', name: 'Descripcion'},
	{width: "40px", field: 'seleccionado', name: 'Agregar', editable:true, type:dojox.grid.cells.Bool}];

var subregion_editar = null;

//campos de auditoria
var camposAuditoriaM = new Array('usr_altam','fecha_altam','usr_modifm','fecha_modifm');
var labelAuditoria = new Array('Creado por: ','Fecha de creaci&oacute;n: ','Modificado por: ','Fecha de modificaci&oacute;n: ');
//Carga de titulos
document.getElementById("bloqueMaster").innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	//Modificacion de label e iconos de los botones
	//if(dijit.byId('filtrMaster')){dijit.byId('filtrMaster').destroyRecursive();}
	
	/*dojo.connect(dijit.byId("dialogMProd"),"onHide",CancelarProdSel);
	dojo.connect(dijit.byId("dialogM"),"onHide",CancelarMaster);*/
	dojo.connect(dijit.byId("dialogMProd").containerNode, 'onkeypress', function(evt){
		key = evt.keyCode;
		if (key == dojo.keys.ESCAPE) {
			console.debug("Escape trapped !!")
			dojo.stopEvent(evt);
		}
	});
	dojo.connect(dijit.byId("dialogM").containerNode, 'onkeypress', function(evt){
		key = evt.keyCode;
		if (key == dojo.keys.ESCAPE) {
			console.debug("Escape trapped 2!!")
			dojo.stopEvent(evt);
		}
	});
		
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
			if(tipoFiltroMaster[i]=='ValidationTextBox'){tablaFiltros.addChild(new dijit.form.ValidationTextBox({id:'filtro'+i,maxLength:'40',label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],onChange:function(){dijit.byId('filtro5').constraints.min = arguments[0];}}));}if(dijit.byId('filtro5')){dijit.byId('filtro5').attr('onChange',function(){dijit.byId('filtro4').constraints.max = arguments[0];})}
			if(tipoFiltroMaster[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i],required:requeridoFiltroMaster[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[i]})}));}}
		
		AutoCompletar(dijit.byId('filtro0'));
		//agrego el area a la busqueda de subregion
		dijit.byId('filtro1').store.url += '&area_id='+dijit.byId('filtro0').attr('value');
		//Borrado de subregiones al cambiar el area
		dijit.byId('filtro0').onChange= function(value){dijit.byId('filtro1').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[1]+'&area_id='+value}));dijit.byId('filtro1').store.fetch();dijit.byId('filtro1').attr('value',null);AutoCompletar(dijit.byId('filtro1'));}

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
	//var divCamposM = new dijit.layout.ContentPane({id:"divCampos", style:'text-align:center;width:350px'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<camposFormM.length;i++){
		if(dojoTypeFormM[i]=='ValidationTextBox'){tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[i],maxLength:'40',label:labelFormM[i],trim:true,promptMessage:mensajesFormM[i],regExp:regexpFormM[i],required:requeridoFormM[i]}));}
		if(dojoTypeFormM[i]=='FilteringSelect'){tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[i],label:labelFormM[i],searchAttr:searchAttrFormM[i],promptMessage:mensajesFormM[i],required:requeridoFormM[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[i]})}));}
		if(dojoTypeFormM[i]=='CheckBox'){tablaForm.addChild(new dijit.form.CheckBox({id:camposFormM[i],title:labelFormM[i],promptMessage:mensajesFormM[i],required:requeridoFormM[i]}));}
	}
	AutoCompletar(dijit.byId(camposFormM[0]));
	//agrego el area a la busqueda de subregion
	dijit.byId(camposFormM[1]).store.url += '&area_id='+dijit.byId(camposFormM[0]).attr('value');
	//Borrado de subregiones al cambiar el area
	dijit.byId(camposFormM[0]).onChange= function(value){dijit.byId(camposFormM[1]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[1]+'&area_id='+value}));dijit.byId(camposFormM[1]).store.fetch();dijit.byId(camposFormM[1]).attr('value',null);AutoCompletar(dijit.byId(camposFormM[1]));}

	//divCamposM.attr('content',tablaForm);
	dijit.byId("divCampos").attr('content',tablaForm);
	tablaForm.startup();
	
	gridProductos.attr("autoWidth",true);
	
	sep = document.createElement('div');
	sep.style.height = '5px';
	sep.style.padding = '0px';
	sep.style.margin = '0px';
	dojo.place(sep,dijit.byId("divCampos").domNode,'last');
	//dojo.place(sep,divCamposM.domNode,'last');
	//dojo.place(divCamposM.domNode, dijit.byId("dialogM").domNode, 'first');
	
	/*var gridProductos = new dojox.grid.DataGrid({id:'gridProductos', store: null, structure: layoutProductos, style:'height:200px;'});
	dojo.place(gridProductos.domNode,divCamposM.domNode,'last');
	gridProductos.startup();*/
	
	sep2 = document.createElement('div');
	sep2.style.height = '5px';
	sep2.style.padding = '0px';
	sep2.style.margin = '0px';
	//dojo.place(sep2,divCamposM.domNode,'last');
	dojo.place(sep2,dijit.byId("divBotones").domNode,'last');
	
	//Creacion de botones
	/*var botonProductos = new dijit.form.Button({id:"agregarProductos",label:'Ver Productos',type:'button',iconClass:'nuevoIcon',onClick:function(){dojo.fx.wipeIn({node: "divDer",duration: 1000});}});
	dojo.place(botonProductos.domNode,dijit.byId("divBotones").domNode,'last');*/
	//dojo.place(botonProductos.domNode,divCamposM.domNode,'last');
	var botonGrabar = new dijit.form.Button({id:"grabarMaster",label:'Grabar',type:'button',disabled:true,iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	//dojo.place(botonGrabar.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	var botonQuitar = new dijit.form.Button({label:'Quitar',type:'button',iconClass:'eliminarIcon',onClick:function(){QuitarProd();}});
	dojo.place(botonQuitar.domNode,dijit.byId("divBotones").domNode,'last');

	/*--------------------------------- BLOQUE PRODUCTOS ---------------------------------*/
	var tablaFormProd = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	tablaFormProd.addChild(new dijit.form.ValidationTextBox({id:'idProdSel',label:'Codigo de Producto',maxLength:'40',trim:true,promptMessage:'Ingrese Id',required:false}));
	tablaFormProd.addChild(new dijit.form.ValidationTextBox({id:'descProdSel',label:'Descripcion',maxLength:'40',trim:true,promptMessage:'Ingrese Descripcion',required:false}));

	dijit.byId("divCamposProd").attr('content',tablaFormProd);

	var botonBuscar = new dijit.form.Button({label:'Buscar',type:'button',iconClass:'buscarIcon',onClick:function(){BuscarProdSel();}});
	dojo.place(botonBuscar.domNode,dijit.byId("divCamposProd").domNode,'last');
	
	sep4 = document.createElement('div');
	sep4.style.height = '5px';
	sep4.style.padding = '0px';
	sep4.style.margin = '0px';
	dojo.place(sep4,dijit.byId("divCamposProd").domNode,'last');

	sep5 = document.createElement('div');
	sep5.style.height = '5px';
	sep5.style.padding = '0px';
	sep5.style.margin = '0px';
	dojo.place(sep5,dijit.byId("divBotonesProd").domNode,'last');
	
	var botonGrabar = new dijit.form.Button({id:"aceptarProdSel",label:'Agregar',iconClass:'nuevoIcon',type:'button',onClick:function(){GrabarProdSel(true);}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotonesProd").domNode,'last');
	
	gridSelProductos.attr("autoWidth",true);
	/*--------------------------------------------------------------------------------------*/

	/*dialogM = new dijit.Dialog({title:'Ingreso de datos',id:'dialogM'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';*/
	dijit.byId("dialogM").titleBar.children[1].style.display='none';
	//Seteo propiedades para Nuevo
	dmlgrabarM = dmlnuevoM;
	//Se muestra el dialogo
	dijit.byId("dialogM").show();
	//dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMaster(){
	//Armado de URL
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	if(filtroMaster.length > 0){
		for(i=0;i<filtroMaster.length;i++){
			urlValue = urlValue +'&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');
		}
	}
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
function EditarMaster(){
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<camposFormM.length;i++){
		if(dojoTypeFormM[i]=='ValidationTextBox'){tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[i],maxLength:'40',label:labelFormM[i],trim:true,promptMessage:mensajesFormM[i],regExp:regexpFormM[i],required:requeridoFormM[i]}));}
		if(dojoTypeFormM[i]=='FilteringSelect'){tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[i],label:labelFormM[i],searchAttr:searchAttrFormM[i],promptMessage:mensajesFormM[i],required:requeridoFormM[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[i]})}));}
		if(dojoTypeFormM[i]=='CheckBox'){tablaForm.addChild(new dijit.form.CheckBox({id:camposFormM[i],title:labelFormM[i],promptMessage:mensajesFormM[i],required:requeridoFormM[i]}));}
	}
	//agrego el area a la busqueda de subregion
	dijit.byId(camposFormM[1]).store.url += '&area_id='+dijit.byId(camposFormM[0]).attr('value');
	//Borrado de subregiones al cambiar el area
	dijit.byId(camposFormM[0]).onChange= function(value){dijit.byId(camposFormM[1]).attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[1]+'&area_id='+value}));dijit.byId(camposFormM[1]).store.fetch();dijit.byId(camposFormM[1]).attr('value',subregion_editar);}
	
	dijit.byId(camposFormM[0]).attr('disabled',true);
	dijit.byId(camposFormM[1]).attr('disabled',true);
	dijit.byId(camposFormM[2]).attr('disabled',true);
	dijit.byId(camposFormM[3]).attr('disabled',true);

	dijit.byId("divCampos").attr('content',tablaForm);
	tablaForm.startup();
	
	sep = document.createElement('div');
	sep.style.height = '5px';
	sep.style.padding = '0px';
	sep.style.margin = '0px';
	dojo.place(sep,dijit.byId("divCampos").domNode,'last');

	sep2 = document.createElement('div');
	sep2.style.height = '5px';
	sep2.style.padding = '0px';
	sep2.style.margin = '0px';
	dojo.place(sep2,dijit.byId("divBotones").domNode,'last');
	
	//Creacion de botones
	/*var botonProductos = new dijit.form.Button({id:"agregarProductos",label:'Ver Productos',type:'button',iconClass:'nuevoIcon',onClick:function(){VerProductos();}});
	dojo.place(botonProductos.domNode,dijit.byId("divBotones").domNode,'last');*/
	var botonGrabar = new dijit.form.Button({id:"grabarMaster",label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonQuitar = new dijit.form.Button({label:'Quitar',type:'button',iconClass:'eliminarIcon',onClick:function(){QuitarProd();}});
	dojo.place(botonQuitar.domNode,dijit.byId("divBotones").domNode,'last');
	
	/*//////////////////////////////// BLOQUE PRODUCTOS ////////////////////////////////*/
	var tablaFormProd = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	tablaFormProd.addChild(new dijit.form.ValidationTextBox({id:'idProdSel',label:'Codigo de Producto',maxLength:'40',trim:true,promptMessage:'Ingrese Id',required:false}));
	tablaFormProd.addChild(new dijit.form.ValidationTextBox({id:'descProdSel',label:'Descripcion',maxLength:'40',trim:true,promptMessage:'Ingrese Descripcion',required:false}));

	dijit.byId("divCamposProd").attr('content',tablaFormProd);

	var botonBuscar = new dijit.form.Button({label:'Buscar',type:'button',iconClass:'buscarIcon',onClick:function(){BuscarProdSel();}});
	dojo.place(botonBuscar.domNode,dijit.byId("divCamposProd").domNode,'last');
	
	sep4 = document.createElement('div');
	sep4.style.height = '5px';
	sep4.style.padding = '0px';
	sep4.style.margin = '0px';
	dojo.place(sep4,dijit.byId("divCamposProd").domNode,'last');

	sep5 = document.createElement('div');
	sep5.style.height = '5px';
	sep5.style.padding = '0px';
	sep5.style.margin = '0px';
	dojo.place(sep5,dijit.byId("divBotonesProd").domNode,'last');
	
	var botonGrabar = new dijit.form.Button({id:"aceptarProdSel",label:'Agregar',iconClass:'nuevoIcon',type:'button',onClick:function(){GrabarProdSel(true);}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotonesProd").domNode,'last');
	
	gridSelProductos.attr("autoWidth",true);
	/*///////////////////////////////////////////////////////////////////////////////////*/
	
	dijit.byId("dialogM").titleBar.children[1].style.display='none';
	//Seteo propiedades para Editar
	dmlgrabarM = dmleditarM;
	
	var items = gridMaster.selection.getSelected();
	/*--- Llenado del formulario con los datos del registro elegido ---*/
	//Generacion de la URL para obtener el registro seleccionado completo
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlbuscarUnicoM;
	for(i=0;i<clavesM.length;i++){urlValue = urlValue+'&'+clavesM[i]+'='+items[0][columnasM[i]];}
	//Carga los valores del registro seleccionado
	var registroCargado = new dojo.data.ItemFileReadStore({url: urlValue});
	var gotData = function(items, request){
		for(i=0;i<camposFormM.length;i++){
				dijit.byId(camposFormM[i]).attr('value',registroCargado.getValue(items[0], camposFormM[i]));
				if(dojoTypeFormM[i]=='CheckBox' && registroCargado.getValue(items[0], camposFormM[i]) == 'false'){dijit.byId(camposFormM[i]).attr('checked',false);}
		}
		subregion_editar = registroCargado.getValue(items[0], camposFormM[1]);
		//Se muestra el dialogo
		dijit.byId("dialogM").show();
	}
	registroCargado.fetch({query: {}, onComplete: gotData});	
	
	//Cargo los productos del prorrateo
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlbuscarUnicoMProd;
	for(i=0;i<clavesM.length;i++){urlValue = urlValue+'&'+clavesM[i]+'='+items[0][columnasM[i]];}
	gridProductos.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	gridProductos.attr("autoWidth",true);
	gridProductos.update();
	//gridProductos.selection.clear();
	//gridProductos.render();
	//gridProductos.store.fetch();
	/*------------------------------------------------------------------*/
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CopiarMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.BorderContainer({style:'text-align:center;background-color:white;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<columnasM.length;i++){
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:columnasM[i],label:labelFormM[i],trim:true,maxLength:'40',promptMessage:mensajesFormM[i],regexp:regexpFormM[i],regExp:regexpFormM[i],required:requeridoFormM[i]}));}
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
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmleliminarM;
	mensaje='Est&aacute; seguro que desea eliminar el prorrateo por concepto ';
	for(i=0;i<clavesM.length;i++){
		urlValue+='&'+clavesM[i]+'='+items[0][columnasM[i]];
	}
	mensaje+='<br><b>'+items[0][columnasM[4]]+'</b>';
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
function BajadaExcelMaster() {
	var urlValue ='dbi/bajaExcel.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	document.location = urlValue;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMaster(){
	
	for(i=0;i<camposFormM.length;i++){
		if(!dijit.byId(camposFormM[i]).isValid()){
			dijit.byId(camposFormM[i]).focus();
			return;
		}
	}

	gridProductos.edit.apply();
	
	//if(gridProductos.store.isDirty()){
		var area = dijit.byId(camposFormM[0]).attr('value');
		var subregion = dijit.byId(camposFormM[1]).attr('value');
		var division = dijit.byId(camposFormM[2]).attr('value');
		unescape(encodeURIComponent(dijit.byId(camposFormM[3]).attr('value')));
	
		var descripcion = unescape(encodeURIComponent(dijit.byId(camposFormM[3]).attr('value')));
		var productos = '';
		var porcentajes = '';
		var porcentajeStr = '';
		var porcentaje = 0;
		var total = 0;
		var booPrimero = true;
		var booInvalid = false;
		var booInvalid2 = false;
		var booTodosCero = true;
		//recorro el store
		var generarArrays = function(item){
			porcentajeStr = dijit.byId('gridProductos').store.getValue(item, "porcentaje");
			if ((porcentajeStr != '0.0') && (porcentajeStr != '0')) {
				booTodosCero = false;
				if(parseFloat(porcentajeStr)){
					porcentaje = parseFloat(porcentajeStr);
					if (porcentaje != 0) {
						if(porcentaje < 0 || porcentaje > 100){
							booInvalid = true;
						} else {
							if (booPrimero == true) {
								booPrimero = false;
							} else {
								productos = productos + ',';
								porcentajes = porcentajes + ',';
							}
							productos = productos + dijit.byId('gridProductos').store.getValue(item, "producto_id");
							porcentajes = porcentajes + porcentajeStr;
							total = total + parseFloat(porcentaje);
						}
					}
				} else {
					booInvalid = true;		
				}
			} else {
				booInvalid2 = true;	
			}
		}
		var grabarCambios = function(items, request){
			if(booTodosCero == false){
				if(productos == '' || porcentajes == ''){return;}
				if(booInvalid==true){
					PopUp('Atenci&oacute;n', 'S&oacute;lo puede ingresar valores num&eacute;ricos entre 0 y 100');
					return;
				}
				if(booInvalid2==true){
					PopUp('Atenci&oacute;n', 'Debe ingresar porcentajes en todos los productos');
					return;
				}
				if(total != 100){
					PopUp('Atenci&oacute;n', 'La sumatoria de porcentajes debe ser 100');
					total = 0;
					return;
				}				
				procesando.show();
				
				if(dmlgrabarM==dmlnuevoM){
					//Generación de la URL
					var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM+'&productos='+productos+'&porcentajes='+porcentajes+'&area_id='+area+'&subregion_id='+subregion+'&division_id='+division+'&descripcion='+descripcion;
				} else if(dmlgrabarM==dmleditarM) {
					var items = gridMaster.selection.getSelected();
					var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM+'&productos='+productos+'&porcentajes='+porcentajes+'&concepto_id='+items[0][columnasM[0]];
				}

				//Grabación de datos en la base de datos
				dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
					if (response.errcode==0){
						BuscarMaster();//Refresco del gridMaster
						CancelarMaster();
						procesando.hide();
						Mensaje('Los cambios se han realizado exitosamente','mensaje','master');
					}else{
						//BuscarMaster();
						procesando.hide();
						PopUp('Error', response.errmsg);
					}
				}});
			} else {
				PopUp('Atenci&oacute;n', 'Debe ingresar porcentajes en todos los productos');
				return;
			}
		}
		dijit.byId('gridProductos').store.fetch({query: {}, onItem: generarArrays, onComplete: grabarCambios});
	//} else {
	//	PopUp('Atenci&oacute;n', 'No ha realizado ningun cambio<br>Para editar, haga doble click en el porcentaje ');
	//}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	if(gridProductos.store){
		gridProductos.setStore(null);
		gridProductos.update();
	}
	//Limpio campos del formulario
	if(dijit.byId(camposFormM[0])){
		for(i=0;i<camposFormM.length;i++){
			if(dijit.byId(camposFormM[i])){dijit.byId(camposFormM[i]).destroy();}
		}
	}
	dijit.byId("divCampos").destroyDescendants();
	dijit.byId("divBotones").destroyDescendants();
	//dijit.byId("gridNode").destroyDescendants();
	
	/*------- BLOQUE PRODUCTOS ----------*/
	if(gridSelProductos.store){
		gridSelProductos.setStore(null);
		gridSelProductos.update();
	}
	if(dijit.byId('idProdSel')){dijit.byId('idProdSel').destroy();}
	if(dijit.byId('descProdSel')){dijit.byId('descProdSel').destroy();}
	dijit.byId("divCamposProd").destroyDescendants();
	dijit.byId("divBotonesProd").destroyDescendants();
	/*-----------------------------------*/
	
	dijit.byId('dialogM').hide();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function AgregarProductos(){

	for(i=0;i<camposFormM.length;i++){
		if(!dijit.byId(camposFormM[i]).isValid()){
			dijit.byId(camposFormM[i]).focus();
			return;
		}
	}
	dijit.byId("dialogMProd").attr("title","Agregar Productos - Division: "+dijit.byId("division_id").attr("displayedValue"));

	var tablaFormProd = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	tablaFormProd.addChild(new dijit.form.ValidationTextBox({id:'idProdSel',maxLength:'40',label:'Codigo de Producto',trim:true,promptMessage:'Ingrese Id',required:false}));
	tablaFormProd.addChild(new dijit.form.ValidationTextBox({id:'descProdSel',maxLength:'40',label:'Descripcion',trim:true,promptMessage:'Ingrese Descripcion',required:false}));

	//divCamposM.attr('content',tablaForm);
	dijit.byId("divCamposProd").attr('content',tablaFormProd);

	var botonBuscar = new dijit.form.Button({label:'Buscar',type:'button',iconClass:'buscarIcon',onClick:function(){BuscarProdSel();}});
	dojo.place(botonBuscar.domNode,dijit.byId("divCamposProd").domNode,'last');
	
	sep4 = document.createElement('div');
	sep4.style.height = '2px';
	sep4.style.padding = '0px';
	sep4.style.margin = '0px';
	//dojo.place(sep,divCamposM.domNode,'last');
	dojo.place(sep4,dijit.byId("divCamposProd").domNode,'last');

	//var gridSelProductos = new dojox.grid.DataGrid({id:'gridSelProductos', store: null, structure: layoutSelProductos, style:'height:200px;'},"gridNodeProd");
	//dojo.place(gridProductos.domNode,divCamposM.domNode,'last');
	//gridSelProductos.startup();
	
	sep5 = document.createElement('div');
	sep5.style.height = '2px';
	sep5.style.padding = '0px';
	sep5.style.margin = '0px';
	dojo.place(sep5,dijit.byId("divBotonesProd").domNode,'last');
	
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({id:"aceptarProdSel",label:'Aceptar',type:'button',iconClass:'aceptarIcon',onClick:function(){GrabarProdSel(true);}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotonesProd").domNode,'last');
	/*var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarProdSel();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotonesProd").domNode,'last');*/
	
	//dialogM = new dijit.Dialog({title:'Ingreso de datos',id:'dialogMaster'});
	//dialogM.attr('content',divCamposM);
	dijit.byId("dialogMProd").titleBar.children[1].style.display='none';
	//Seteo propiedades para Nuevo
	dmlgrabarM = dmlnuevoM;
	
	/*if(gridSelProductos.store){
		gridSelProductos.setStore(null);
		gridSelProductos.update();
		gridSelProductos.atrr("autoWidth",true);
	}*/
	BuscarProdSel();
	//Se muestra el dialogo
	//dijit.byId("dialogM").hide();
	dijit.byId("dialogMProd").show();
	
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarProdSel(){
	
	/*for(i=0;i<camposFormM.length;i++){*/
		if(!dijit.byId(camposFormM[2]).isValid()){
			dijit.byId(camposFormM[2]).focus();
			return;
		}
	/*}*/

	//Armado de URL
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarProdSel;
	urlValue = urlValue +'&'+'division_id'+'='+dijit.byId('division_id').attr('value');
	urlValue = urlValue +'&'+'producto_id'+'='+dijit.byId('idProdSel').attr('value');
	urlValue = urlValue +'&'+'producto_desc'+'='+dijit.byId('descProdSel').attr('value');

	gridSelProductos.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	gridSelProductos.attr("autoWidth",true);
	gridSelProductos.update();
	gridSelProductos.selection.clear();
	
	//dijit.byId("aceptarProdSel").attr("disabled",false);
	//HabilitarBotonesMaster(1,false);
	//HabilitarBotonesMaster(2,true);
	//Muestro la cantidad obtenida
	//gridSelProductos.store.fetch({query:{},onComplete:function(items,request){document.getElementById("cantidadObtenidaMaster").innerHTML='Registros:'+items.length;dijit.byId("cmn_mensajes").hide();}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarProdSel(disableBtn){
	//varSalida = '';
	cant = 0;
	if(!gridProductos.store){
		var storeProductos = {identifier: 'producto_id', label: 'producto_desc', items: []};
		gridProductos.setStore(new dojo.data.ItemFileWriteStore({data: storeProductos}));
		gridProductos.attr("autoWidth",true);
		gridProductos.update();
	}
	/*gridProductos.setStore(new dojo.data.ItemFileWriteStore({data: storeProductos}));
	gridProductos.update();*/
	if(dijit.byId('gridSelProductos').store.isDirty()){
		//var booPrimero = true;
		var booInvalid = false;
		//varSalida = '{identifier:"producto_id",label:"producto_desc",items:[';
		//recorro el store
		var generarJson = function(item){
			if (dijit.byId('gridSelProductos').store.isDirty(item)) {
				/*var sel = dijit.byId('gridSelProductos').store.getValue(item, 'seleccionado');
				if(sel==true){*/
					prodId = dijit.byId('gridSelProductos').store.getValue(item, "producto_id");
					prodDesc = dijit.byId('gridSelProductos').store.getValue(item, "producto_desc");
					//gridProductos.store.newItem({producto_id:prodId, producto_desc:prodDesc, porcentaje:"0.0"});
					/*if (booPrimero == true){
						booPrimero = false;
					} else {
						varSalida = varSalida + ',';
					}
					varSalida = varSalida + '{producto_id:"'+prodId+'",producto_desc:"'+prodDesc+'",porcentaje:"0.0"}';*/
					cant = cant + 1;
					var prodItem = null;
					gridProductos.store.fetchItemByIdentity({
						identity: prodId,
						onItem : function(item) {
							if(item == null){
								gridProductos.store.newItem({producto_id:prodId, producto_desc:prodDesc, porcentaje:"0.0"});
							}
						},
						onError : function(item) {
							prodItem = null;
						}
					});
				/*}*/
			}
		}
		var grabarCambios = function(items, request){
			if(cant==0){
				PopUp('Atenci&oacute;n','Debe marcar al menos un producto');
			} else {
				//procesando.show();
				//varSalida = varSalida + ']}';
				//varDatos = eval('(' + varSalida + ')');
				//gridProductos.setStore(new dojo.data.ItemFileWriteStore({data: varDatos}));
				//gridProductos.update();
				

				gridProductos.store.save({onComplete:function(){
					//gridProductos.selection.clear();

					//gridProductos.attr("autoWidth",true);
					gridProductos.render();
					/*for(i=0;i<camposFormM.length;i++){*/
					dijit.byId(camposFormM[2]).attr("disabled",true);
					/*}*/
					dijit.byId("grabarMaster").attr("disabled",false);
					//BuscarProdSel(); //Llamo a esta funcion para evitar errores si se vuelve a apretar el boton de agregar				
				}});

				//dijit.byId("agregarProductos").attr("disabled",disableBtn);
				//CancelarProdSel();
				//procesando.hide();
			}
		}
		dijit.byId('gridSelProductos').store.fetch({query: {seleccionado:true}, onItem: generarJson, onComplete: grabarCambios});
	} else {
		PopUp('Atenci&oacute;n', 'Debe marcar al menos un producto');
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarProdSel(){
	if(gridSelProductos.store){
		gridSelProductos.setStore(null);
		gridSelProductos.update();
	}
	if(dijit.byId('idProdSel')){dijit.byId('idProdSel').destroy();}
	if(dijit.byId('descProdSel')){dijit.byId('descProdSel').destroy();}
	dijit.byId("divCamposProd").destroyDescendants();
	dijit.byId("divBotonesProd").destroyDescendants();
	//dijit.byId("gridNodeProd").destroyDescendants();
	//if(dijit.byId('gridSelProductos')){dijit.byId('gridSelProductos').destroy();}
	dijit.byId('dialogMProd').hide();
	//dijit.byId('dialogM').show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerProductos(){
	
	dijit.byId("dialogMProd").attr("title","Agregar Productos - Division: "+dijit.byId("division_id").attr("displayedValue"));

	var tablaFormProd = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	tablaFormProd.addChild(new dijit.form.ValidationTextBox({id:'idProdSel',maxLength:'40',label:'Codigo de Producto',trim:true,promptMessage:'Ingrese Id',required:false}));
	tablaFormProd.addChild(new dijit.form.ValidationTextBox({id:'descProdSel',label:'Descripcion',maxLength:'40',trim:true,promptMessage:'Ingrese Descripcion',required:false}));

	dijit.byId("divCamposProd").attr('content',tablaFormProd);

	var botonBuscar = new dijit.form.Button({label:'Buscar',type:'button',iconClass:'buscarIcon',onClick:function(){BuscarProdSel();}});
	dojo.place(botonBuscar.domNode,dijit.byId("divCamposProd").domNode,'last');
	
	sep4 = document.createElement('div');
	sep4.style.height = '2px';
	sep4.style.padding = '0px';
	sep4.style.margin = '0px';
	dojo.place(sep4,dijit.byId("divCamposProd").domNode,'last');

	sep5 = document.createElement('div');
	sep5.style.height = '2px';
	sep5.style.padding = '0px';
	sep5.style.margin = '0px';
	dojo.place(sep5,dijit.byId("divBotonesProd").domNode,'last');
	
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({id:"aceptarProdSel",label:'Aceptar',type:'button',iconClass:'aceptarIcon',onClick:function(){GrabarProdSel(false);}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotonesProd").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarProdSel();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotonesProd").domNode,'last');
	
	dijit.byId("dialogMProd").titleBar.children[1].style.display='none';
	
	BuscarProdSel();
	var marcarItem = function(item){
		gridSelProductos.store.setValue(item, 'seleccionado', true);	
	}	
	var buscarItem = function(item){
		prodId = gridProductos.store.getValue(item, 'producto_id');
		gridSelProductos.store.fetchItemByIdentity({identity:prodId, onItem:marcarItem})
	}
	gridProductos.store.fetch({query:{},onItem: buscarItem});
	
	//Se muestra el dialogo
	//dijit.byId("dialogM").hide();
	dijit.byId("dialogMProd").show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function QuitarProd(){
	cant = 0;
	//var items = new Array();
	//gridProductos.selection.deselectAll();
	gridProductos.selection.clear();
	//console.log('rendering');
	//gridProductos.render();
	//var storeProd = new dojo.data.ItemFileWriteStore({data: storeProductos})
	//if(dijit.byId('gridProductos').store.isDirty()){
		gridProductos.store.save({onComplete:function(){
			//recorro el store
			var quitarItem = function(item){
				/*if (dijit.byId('gridSelProductos').store.isDirty(item)) {*/
					/*var sel = dijit.byId('gridSelProductos').store.getValue(item, 'seleccionado');
					if(sel==true){*/
						/*prodId = dijit.byId('gridProductos').store.getValue(item, "producto_id");
						prodDesc = dijit.byId('gridProductos').store.getValue(item, "producto_desc");
						prodPorc = dijit.byId('gridProductos').store.getValue(item, "porcentaje");
						storeProd.newItem({producto_id:prodId, producto_desc:prodDesc, porcentaje:prodPorc, quitar:false});*/
						gridProductos.store.deleteItem(item);
						cant = cant + 1;
					/*}*/
				/*}*/
			}
			var grabarCambios = function(){
				if(cant==0){
					PopUp('Atenci&oacute;n','Debe marcar al menos un producto');
				} else {
					//storeProd.save({onComplete:function(){
						//gridProductos.setStore(null);
						//gridProductos.update();
						//gridProductos.setStore(storeProd);
					gridProductos.store.save({onComplete:function(){
						gridProductos.render();	
					}});
							
					//}});
					//gridProductos.selection.clear();
					//gridProductos.update();
					//gridProductos.render();
					/*dijit.byId('gridProductos').store.fetch({query: {}, onComplete: function(items,request){
						if(cant==items.length){
							dijit.byId(camposFormM[2]).attr("disabled",false);
							dijit.byId("grabarMaster").attr("disabled",true);
						}
					}});*/
				}
			}
			dijit.byId('gridProductos').store.fetch({query: {quitar:true}, onItem: quitarItem, onComplete: grabarCambios});
		}});
	//} else {
	//	PopUp('Atenci&oacute;n', 'Debe marcar al menos un producto');
	//}
	
	
}