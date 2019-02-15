//TITULOS
var titulos = new Array("Administraci&oacute;n de Perfiles");
//DML
var dmlnuevoM = "1201";
var dmleditarM = "1202";
var dmleliminarM = "1203";
var dmlbuscarM = "1205";
var dmlgrabarM = "";
var dmlbuscarCantidadM = "1206"; //Dml para buscar la cantidad de usuarios asociados al perfil a eliminar

//COLUMNAS
var columnasM = new Array("perfil_id","nombre","descripcion");
var tiposM = new Array("text","text","text");
var descripcionesM = new Array("Perfil Id","Nombre","Descripci&oacute;n");
//PRIMARY KEY
var clavesM = new Array("perfil_id");
//FORMULARIO
var camposFormM = new Array('nombre','descripcion');
var labelFormM = new Array('Nombre: ','Descripci&oacute;n: ');
var mensajesFormM = new Array('Ingrese el nombre del perfil','Ingrese la descripci&oacute;n');
var regexpFormM = new Array("[a-zA-Z0-9ñÑ¿?¡! ,.()-_]+","[a-zA-Z0-9ñÑ¿?¡! ,.()-_]+");
//Carga las estructuras de las tablas
var layoutMaster = [
    {width: "auto", field: columnasM[1], name: descripcionesM[1]},
    {width: "auto", field: columnasM[2], name: descripcionesM[2]}];
//Carga de titulos
document.getElementById("bloqueMaster").innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
var seguro = false;
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	//Modificacion de label e iconos de los botones
	if(dijit.byId('filtrMaster')){dijit.byId('filtrMaster').destroyRecursive();}
	BuscarMaster();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedMaster(){
	BuscarDetail();
	HabilitarBotonesMaster(false);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function HabilitarBotonesMaster(bool){
	if(dijit.byId("editarMaster")){dijit.byId("editarMaster").attr('disabled',bool);}
	if(dijit.byId("copiarMaster")){dijit.byId("copiarMaster").attr('disabled',bool);}
	if(dijit.byId("eliminarMaster")){dijit.byId("eliminarMaster").attr('disabled',bool);}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMaster(){
	urlValue="dbi/q.php?sid="+gvarSID+"&dmlid="+dmlbuscarM;
	var storeMaster = new dojo.data.ItemFileWriteStore({url: urlValue,urlPreventCache:true});
	gridMaster.setStore(storeMaster);
	gridMaster.selection.clear();
	//Muestro la cantidad obtenida
	storeMaster.fetch({query: {}, onComplete: function(items, request){document.getElementById("cantidadObtenidaMaster").innerHTML ='Registros: '+items.length;dijit.byId("cmn_mensajes").hide();}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarDetail(){
	//Seteo la url para la busqueda del menu
	urlValue = "dbi/acciones.php?sid="+gvarSID;
	//Si ya existe lo elimino y limpio
	if(dijit.byId("tree")){CancelarDetail();}
	//Cargo el arbol y demás datos
	var itemsM = gridMaster.selection.getSelected();
	urlValue += "&perfil_id=" + itemsM[0][columnasM[0]];
	myStore = new dojo.data.ItemFileWriteStore({url: urlValue,urlPreventCache:true});
	var myModel = new dijit.tree.ForestStoreModel({store:myStore,childrenAttrs:['children']});
	var tree = new dijit.Tree({id:'tree',style:'padding:10px;',model:myModel,showRoot:false,persist:false,childrenAttrs:['children']});
	//Asignacion del arbol al div correspondiente
	dijit.byId('Arbol').addChild(tree);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function NuevoMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:350px;text-align:center;width:350px;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<camposFormM.length;i++){
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[i],label:labelFormM[i],maxLength:'40',regExp:regexpFormM[i],trim:true,promptMessage:mensajesFormM[i],required:true}));}
	divCamposM.attr('content',tablaForm);
	//Agregar Arbol
	if(dijit.byId('treeForm')){dijit.byId('treeForm').destroyRecursive();}
	var myStore = new dojo.data.ItemFileWriteStore({url:'dbi/accionesChecks.php?sid='+gvarSID});
	var myModel = new extenciones.CheckboxForestStoreModel({store:myStore,childrenAttrs:["children"]});
	var arbolForm = new extenciones.CheckboxTree({id:'treeForm',model:myModel,showRoot:false,persist:false,childrenAttrs:["children"]});
	var arbolPane = new dijit.layout.ContentPane({style:'text-align:left;background-color:white;height:250px;margin:5px;padding:5px;border:solid 1px #E9E9E9'});
	arbolPane.attr('content',arbolForm);
	dojo.place(arbolPane.domNode,divCamposM.domNode,'last');
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
	dmlgrabarM = dmlnuevoM;seguro = false;
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:350px;text-align:center;width:350px;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<camposFormM.length;i++){
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[i],label:labelFormM[i],maxLength:'40',regExp:regexpFormM[i],trim:true,promptMessage:mensajesFormM[i],required:true}));}
	divCamposM.attr('content',tablaForm);
	//Agregar Arbol
	if(dijit.byId('treeForm')){dijit.byId('treeForm').destroyRecursive();}
	var itemsM = gridMaster.selection.getSelected();
	myStore = new dojo.data.ItemFileWriteStore({url:'dbi/accionesChecks.php?sid='+gvarSID+'&perfil_id='+itemsM[0][columnasM[0]]});
	var myModel = new extenciones.CheckboxForestStoreModel({store:myStore,childrenAttrs:["children"]});
	var arbolForm = new extenciones.CheckboxTree({id:'treeForm',model:myModel,showRoot:false,persist:false,childrenAttrs:["children"], openOnClick : false, setCheckboxOnClick : true});
	var arbolPane = new dijit.layout.ContentPane({style:'text-align:left;background-color:white;height:250px;margin:5px;padding:5px;border:solid 1px #E9E9E9'});
	arbolPane.attr('content',arbolForm);
	dojo.place(arbolPane.domNode,divCamposM.domNode,'last');
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
	dojo.place(botonGrabar.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Ingreso de datos',id:'dialogMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Seteo propiedades para Editar
	dmlgrabarM = dmleditarM;seguro = false;
	dijit.byId(camposFormM[0]).attr('value',itemsM[0][camposFormM[0]]);
	dijit.byId(camposFormM[1]).attr('value',itemsM[0][camposFormM[1]]);
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CopiarMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:350px;text-align:center;width:350px;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<camposFormM.length;i++){
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[i],regExp:regexpFormM[i],maxLength:'40',label:labelFormM[i],trim:true,promptMessage:mensajesFormM[i],required:true}));}
	divCamposM.attr('content',tablaForm);
	//Agregar Arbol
	if(dijit.byId('treeForm')){dijit.byId('treeForm').destroyRecursive();}
	var itemsM = gridMaster.selection.getSelected();
	myStore = new dojo.data.ItemFileWriteStore({url:'dbi/accionesChecks.php?sid='+gvarSID+'&perfil_id='+itemsM[0][columnasM[0]]});
	var myModel = new extenciones.CheckboxForestStoreModel({store:myStore,childrenAttrs:["children"]});
	var arbolForm = new extenciones.CheckboxTree({id:'treeForm',model:myModel,showRoot:false,persist:false,childrenAttrs:["children"], openOnClick : false, setCheckboxOnClick : true});
	var arbolPane = new dijit.layout.ContentPane({style:'text-align:left;background-color:white;height:250px;margin:5px;padding:5px;border:solid 1px #E9E9E9'});
	arbolPane.attr('content',arbolForm);
	dojo.place(arbolPane.domNode,divCamposM.domNode,'last');
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
	dojo.place(botonGrabar.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Ingreso de datos',id:'dialogMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Seteo propiedades para Editar
	dmlgrabarM = dmlnuevoM;seguro = false;
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarMaster(){
	//tomo el valor de los campos clave de los registros seleccionados en el gridMaster
	var items = gridMaster.selection.getSelected();
	var mensaje = '';
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlbuscarCantidadM;
	for(i=0;i<clavesM.length;i++){
		urlValue = urlValue +'&'+clavesM[i]+'='+items[0][columnasM[i]];
	}
	dojo.xhrPost({url:urlValue,handleAs:'json',load:function(response){
		if(!response.errcode){
			if (response.items[0].cant > 0) {
				mensaje = 'Hay ' + response.items[0].cant + ' usuarios asociados a este perfil.';
			}
		}
		
		//Generación de la URL y el mensaje de advertencia
		urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmleliminarM;
		mensaje = mensaje + '<br>Realmente desea eliminar el registro?';
		for(i=0;i<clavesM.length;i++){
			urlValue = urlValue +'&'+clavesM[i]+'='+items[0][columnasM[i]];
			mensaje = mensaje + '<br><b>'+descripcionesM[i+1]+': '+items[0][columnasM[i+1]]+'</b>';
		}
		PopUp("Advertencia!", mensaje, "Eliminar('"+urlValue+"');");

	}});
	
	/*
	//Generación de la URL y el mensaje de advertencia
	urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+accioneliminarM;
	mensaje = mensaje + '<br>Realmente desea eliminar el registro?';
	for(i=0;i<clavesM.length;i++){
		urlValue = urlValue +'&'+clavesM[i]+'='+items[0][columnasM[i]];
		mensaje = mensaje + '<br><b>'+descripcionesM[i+1]+': '+items[0][columnasM[i+1]]+'</b>';
	}
	PopUp("Advertencia!", mensaje, "Eliminar('"+urlValue+"');");*/
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function Eliminar(urlValue){
	procesando.show();
	//Se elimina el registro de la base de datos
	dojo.xhrGet({url:urlValue,handleAs:'json',load:function(response){
		if(response.errcode==0){
			CancelarDetail();//Limpio los datos cargados
			BuscarMaster();//Refresco del gridMaster
			procesando.hide();
			Mensaje('Eliminaci&oacute;n exitosa!','mensaje','master');}
		else{
			procesando.hide();
			PopUp('Error',response.errmsg);}
		}
	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMaster(){
	//Validacion del formulario
	for(i=0;i<camposFormM.length;i++){if(!dijit.byId(camposFormM[i]).isValid()){dijit.byId(camposFormM[i]).focus();return;}}
	if(!seguro){
		var NombreDuplicado = function(item){
			dijit.showTooltip('<b>Advertencia, ya existe un perfil de igual nombre</b>',dijit.byId(camposFormM[0]).domNode,'below');
			seguro = true;}
		gridMaster.store.fetch({query:{nombre:dijit.byId(camposFormM[0]).attr('value')},onItem:NombreDuplicado});
		if(seguro){return;}}
	procesando.show();
	dijit.hideTooltip(dijit.byId(camposFormM[0]).domNode);
	//Obtengo el arbol para pasarlo como un string
	var acciones = '';
	var getAcciones = function(items){
		for(i=0;i<items.length;i++){
			if(i!=0){acciones += ',';}
			acciones += dijit.byId('treeForm').model.store.getValue(items[i],'id').substr(1);}
	}
	dijit.byId('treeForm').model.store.fetch({query:{checked:'true',tipo:'accion'},queryOptions:{deep:true},onComplete:getAcciones});
	//Generación de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM;
	for(i=0;i<camposFormM.length;i++){urlValue +='&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).attr('value');}
	urlValue +='&acciones='+acciones;
	//Grabación del perfil en la base de datos
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==0){
			CancelarMaster();//Inicializa el formulario
			BuscarMaster();//Refresco del gridMaster
			procesando.hide();
			Mensaje('Grabaci&oacute;n exitosa!','mensaje','master');}
		else{procesando.hide();PopUp('Error',response.errmsg);}
		}
	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	dijit.hideTooltip(dijit.byId(camposFormM[0]).domNode);
	//Elimino el dialogo
	dijit.byId('dialogMaster').hide();
	dijit.byId('dialogMaster').destroyRecursive();
	//Limpio campos del formulario
	if(dijit.byId(camposFormM[0])){for(i=0;i<camposFormM.length;i++){dijit.byId(camposFormM[i]).destroy();}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarDetail(){
	dijit.byId("tree").destroyRecursive();
}