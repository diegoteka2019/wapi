//TITULOS
var titulos =  new Array("Administraci&oacute;n de Acceso a Datos");
//DMLs
var dmlBuscarMaster = "1305";
var dmlNuevoArea = "1509";
var dmlNuevoArea2 = "1514";
var dmlNuevoMasiva = "1501";
var dmlNuevoMasiva2 = "1512";
var dmlEliminarMasiva = "1503";
var dmlEliminarMasiva2 = "1513";
var dmlNuevoUsuario = "1510";
var dmlNuevoUsuario2 = "1515";
var dmleditarM = "";
var dmlbuscarUnicoM = "1304";
var dmleliminarM = "";
var dmlAuditoriaMaster = "1306";
var dmlGrabarMaster = "";
//COLUMNAS
var columnasM = new Array("parametro_id","nombre","valor","descripcion");
var tiposM = new Array("text","text","text","text");
//DESCRIPCIONES
var descripcionesM = new Array("Par&aacute;metro Id","Nombre","Valor","Descripci&oacute;n");
//PRIMARY KEY
var clavesM = new Array("parametro_id");
//FILTRO
var filtroMaster = new Array("usuario_id","perfil_id","area");
var labelFiltroMaster = new Array("Id Usuario :","Perfil :","Area :");
var requiredFiltroMaster = new Array(true,true,false);
var mensajeFiltroMaster = new Array("Ingrese el usuario a buscar","Ingrese el perfil a buscar","Ingrese el area a buscar");
//FORMULARIO
var labelFormM = new Array('Id: ','Nombre: ','Valor: ','Descripci&oacute;n: ');
var requeridoFormM = new Array(true,true,true,false);
var regexpFormM = new Array("[0-9]+",".*",".*",".*");
var mensajesFormM = new Array("Ingrese el Id del par&aacute;metro","Ingrese el nombre del par&aacute;metro","Ingrese el valor","Ingrese la descripci&oacute;n");
var dojoTypeFormM = new Array('ValidationTextBox','ValidationTextBox','ValidationTextBox','ValidationTextBox');
//Carga las estructuras de las tablas
var layoutMaster = [
    {width: "auto", field: columnasM[0], name: descripcionesM[0]},
    {width: "auto", field: columnasM[1], name: descripcionesM[1]},
	{width: "auto", field: columnasM[2], name: descripcionesM[2]},
	{width: "auto", field: columnasM[3], name: descripcionesM[3]}];
//campos de auditoria
var camposAuditoriaM = new Array('usr_altam','fecha_altam','usr_modifm','fecha_modifm');
var labelAuditoria = new Array('Creado por: ','Fecha de creaci&oacute;n: ','Modificado por: ','Fecha de modificaci&oacute;n: ');
//Carga de titulos
document.getElementById("bloqueMaster").innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
//limpio campos que no se eliminan bien
if(dijit.byId("usuario")){dijit.byId("usuario").destroy();}
if(dijit.byId("perfil")){dijit.byId("perfil").destroy();}
if(dijit.byId("usuarioP")){dijit.byId("usuarioP").destroy();}
if(dijit.byId("perfilP")){dijit.byId("perfilP").destroy();}
if(dijit.byId("area")){dijit.byId("area").destroy();}
if(dijit.byId("region")){dijit.byId("region").destroy();}
if(dijit.byId("subregion")){dijit.byId("subregion").destroy();}
if(dijit.byId("tipoPresupuesto")){dijit.byId("tipoPresupuesto").destroy();}
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	//Modificacion de label e iconos de los botones
	if(dijit.byId('filtrMaster')){dijit.byId('filtrMaster').destroyRecursive();}
	if(dijit.byId('nuevoMaster')){
		btn = dijit.byId('nuevoMaster');
		btn.attr('label','Asignar');
		btn.attr('disabled',true);
		dijit.byId('toolbarMaster').removeChild(btn);
		dijit.byId('toolbarMaster').addChild(btn,2);
	}
	if(dijit.byId('eliminarMaster')){
		btn2 = dijit.byId('eliminarMaster');
		btn2.attr('label','Desasignar');
		btn2.attr('disabled',true);
		dijit.byId('toolbarMaster').removeChild(btn2);
		dijit.byId('toolbarMaster').addChild(btn2,3);
	}

	ArmadoFiltroYAuditoria();
	//Busqueda de usuarios
	var usuarioStore = new dojo.data.ItemFileReadStore({id:"usuarioStore",url:"dbi/q.php?sid="+gvarSID+"&dmlid=1504",preventCache:true});
	dijit.byId('usuario').attr('store',usuarioStore);
	dijit.byId('usuarioP').attr('store',usuarioStore);
	//Busqueda de Areas
	var areaStore = new dojo.data.ItemFileReadStore({id:"areaStore",url:"dbi/q.php?sid="+gvarSID+"&dmlid=1506",preventCache:true});
	dijit.byId('area').attr('store',areaStore);
	//Busqueda de Presupuestos
	var presupuestoStore = new dojo.data.ItemFileReadStore({id:"presupuestoStore",url:"dbi/q.php?sid="+gvarSID+"&dmlid=1511",preventCache:true});
	dijit.byId('tipoPresupuesto').attr('store',presupuestoStore);
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
		if(dijit.byId("auditMaster")){dijit.byId("auditMaster").attr('disabled',bool);}
		if(dijit.byId("blanquearClaveMaster")){dijit.byId("blanquearClaveMaster").attr('disabled',bool);}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ArmadoFiltroYAuditoria(){
	if(dijit.byId('filtrMaster')){
		//Limpio Filtros
		if(dijit.byId("filtro0")){for(i=0;i<filtroMaster.length;i++){dijit.byId('filtro'+i).destroy();}}
		//Creo Filtros
		var divFiltros = new dijit.layout.LayoutContainer();
		var tablaFiltros = new dojox.layout.TableContainer({cols:1});
		for(i=0;i<filtroMaster.length;i++){
			tablaFiltros.addChild(new dijit.form.TextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i]}));}
		divFiltros.addChild(tablaFiltros);
		var botonBuscar = new dijit.form.Button({label:'Buscar',type:'submit',onClick:function(){BuscarMaster();}},document.createElement('div'));
		divFiltros.addChild(botonBuscar);
		dijit.byId('filtrosMaster').attr('content',divFiltros);}	
	if(dijit.byId('auditMaster')){
		//Limpio Filtros
		if(dijit.byId(camposAuditoriaM[0])){for(i=0;i<camposAuditoriaM.length;i++){dijit.byId(camposAuditoriaM[i]).destroy();}}
		//Creo campos de auditoria
		var tablaAuditMaster = new dojox.layout.TableContainer({cols:1,labelWidth:'140'});
		for(i=0;i<camposAuditoriaM.length;i++){tablaAuditMaster.addChild(new dijit.form.TextBox({id:camposAuditoriaM[i],label:labelAuditoria[i],disabled:true,type:'text'}));}
		dijit.byId('auditoriaMaster').attr('content',tablaAuditMaster);}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function NuevoMaster(){
	if(dijit.byId('asignacionArea').attr('selected')){
		if(dijit.byId('masiva').attr('selected')){
			if((!dijit.byId('treeUsuarios'))||(!dijit.byId('treeAreas'))){
				Mensaje('Seleccione perfiles y subregiones','error','master');
				BuscarMaster();
			}else{
				//Creacion del contenedor
				var divCamposM = new dijit.layout.ContentPane({style:'width:350px;text-align:center;'});
				divCamposM.attr('content','Esta a punto de realizar una asignaci&oacute;n masiva<br><br>');
				//Creacion de botones
				var botonGrabar = new dijit.form.Button({label:'Asignar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
				dojo.place(botonGrabar.domNode,divCamposM.domNode,'last');
				var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
				dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
				//Creacion del dialogo
				dialogM = new dijit.Dialog({title:'Confirmar asignaci&oacute;n',id:'dialogMaster'});
				dialogM.attr('content',divCamposM);
				dialogM.titleBar.children[1].style.display='none';
				//Seteo propiedades para Nuevo
				dmlGrabarMaster = dmlNuevoMasiva;
				//Se muestra el dialogo
				dialogM.show();
			}
		}
		if(dijit.byId('porArea').attr('selected')){
			if(dijit.byId('perfil').attr('value')==''){Mensaje('Seleccione un perfil','error','master');return;}
			//Creacion del contenedor
			var divCamposM = new dijit.layout.ContentPane({style:'text-align:center;background-color:white;'});
			// Muestro Responsabilidad a modificar
			var responsabilidad = 'Usuario: '+dijit.byId('usuario').attr('displayedValue')+'<BR>Perfil: '+dijit.byId('perfil').attr('displayedValue');
			divCamposM.attr('content',responsabilidad);
			//Creo arbol de acceso a datos
			myStore = new dojo.data.ItemFileWriteStore({url:'dbi/subregionesChecks.php?sid='+gvarSID+'&resp_id='+dijit.byId('perfil').attr('value'),urlPreventCache:true});
			var myModel = new extenciones.CheckboxForestStoreModel({store:myStore,childrenAttrs:["children"]});
			var treeArea = new extenciones.CheckboxTree({id:'treeArea',model:myModel,showRoot:false,persist:false,childrenAttrs:["children"], openOnClick : false, setCheckboxOnClick : true});
			var arbolPane = new dijit.layout.ContentPane({style:'width:250px;text-align:left;background-color:white;height:250px;margin:5px;padding:5px;border:solid 1px #E9E9E9'});
			arbolPane.attr('content',treeArea);
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
			dmlGrabarMaster = dmlNuevoArea;
			//Se muestra el dialogo
			dialogM.show();
		}
		if(dijit.byId('porUsuario').attr('selected')){
			if(dijit.byId('subregion').attr('value')==''){Mensaje('Seleccione una Sub-Region','error','master');return;}
			//Creacion del contenedor
			var divCamposM = new dijit.layout.ContentPane({style:'text-align:center;background-color:white;'});
			// Muestro Responsabilidad a modificar
			var responsabilidad = 'Area: '+dijit.byId('area').attr('displayedValue')+'<BR>Region: '+dijit.byId('region').attr('displayedValue')+'<BR>Sub-Region: '+dijit.byId('subregion').attr('displayedValue');
			divCamposM.attr('content',responsabilidad);
			//Creo arbol de acceso a datos
			myStore = new dojo.data.ItemFileWriteStore({url:'dbi/usuariosChecks.php?sid='+gvarSID+'&subregion_id='+dijit.byId('subregion').attr('value'),urlPreventCache:true});
			var myModel = new extenciones.CheckboxForestStoreModel({store:myStore,childrenAttrs:["children"]});
			var treeUsuario = new extenciones.CheckboxTree({id:'treeUsuario',model:myModel,showRoot:false,persist:false,childrenAttrs:["children"], openOnClick : false, setCheckboxOnClick : true});
			var arbolPane = new dijit.layout.ContentPane({style:'width:250px;text-align:left;background-color:white;height:250px;margin:5px;padding:5px;border:solid 1px #E9E9E9'});
			arbolPane.attr('content',treeUsuario);
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
			dmlGrabarMaster = dmlNuevoUsuario;
			//Se muestra el dialogo
			dialogM.show();
		}
	}
	if(dijit.byId('asignacionTipoPresupuesto').attr('selected')){
		if(dijit.byId('masiva2').attr('selected')){
			if((!dijit.byId('treeUsuarios2'))||(!dijit.byId('treeAreas2'))){
				Mensaje('Seleccione perfiles y tipos de presupuesto','error','master');
				BuscarMaster();
			}else{
				//Creacion del contenedor
				var divCamposM = new dijit.layout.ContentPane({style:'width:350px;text-align:center;'});
				divCamposM.attr('content','Esta a punto de realizar una asignaci&oacute;n masiva<br><br>');
				//Creacion de botones
				var botonGrabar = new dijit.form.Button({label:'Asignar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
				dojo.place(botonGrabar.domNode,divCamposM.domNode,'last');
				var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
				dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
				//Creacion del dialogo
				dialogM = new dijit.Dialog({title:'Confirmar asignaci&oacute;n',id:'dialogMaster2'});
				dialogM.attr('content',divCamposM);
				dialogM.titleBar.children[1].style.display='none';
				//Seteo propiedades para Nuevo
				dmlGrabarMaster = dmlNuevoMasiva2;
				//Se muestra el dialogo
				dialogM.show();
			}
		}
		if(dijit.byId('porArea2').attr('selected')){
			if(dijit.byId('perfilP').attr('value')==''){Mensaje('Seleccione un perfil','error','master');return;}
			//Creacion del contenedor
			var divCamposM = new dijit.layout.ContentPane({style:'text-align:center;background-color:white;'});
			// Muestro Responsabilidad a modificar
			var responsabilidad = 'Usuario: '+dijit.byId('usuarioP').attr('displayedValue')+'<BR>Perfil: '+dijit.byId('perfilP').attr('displayedValue');
			divCamposM.attr('content',responsabilidad);
			//Creo arbol de acceso a datos
			myStore = new dojo.data.ItemFileWriteStore({url:'dbi/tiposPresupChecks.php?sid='+gvarSID+'&resp_id='+dijit.byId('perfilP').attr('value'),urlPreventCache:true});
			var myModel = new extenciones.CheckboxForestStoreModel({store:myStore,childrenAttrs:["children"]});
			var treeArea2 = new extenciones.CheckboxTree({id:'treeArea2',model:myModel,showRoot:false,persist:false,childrenAttrs:["children"], openOnClick : false, setCheckboxOnClick : true});
			var arbolPane = new dijit.layout.ContentPane({style:'width:250px;text-align:left;background-color:white;height:250px;margin:5px;padding:5px;border:solid 1px #E9E9E9'});
			arbolPane.attr('content',treeArea2);
			dojo.place(arbolPane.domNode,divCamposM.domNode,'last');
			//Creacion de botones
			var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
			dojo.place(botonGrabar.domNode,divCamposM.domNode,'last');
			var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
			dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
			//Creacion del dialogo
			dialogM = new dijit.Dialog({title:'Ingreso de datos',id:'dialogMaster2'});
			dialogM.attr('content',divCamposM);
			dialogM.titleBar.children[1].style.display='none';
			//Seteo propiedades para Nuevo
			dmlGrabarMaster = dmlNuevoArea2;
			//Se muestra el dialogo
			dialogM.show();
		}
		if(dijit.byId('porUsuario2').attr('selected')){
			if(dijit.byId('tipoPresupuesto').attr('value')==''){Mensaje('Seleccione un Tipo de Presupuesto','error','master');return;}
			//Creacion del contenedor
			var divCamposM = new dijit.layout.ContentPane({style:'text-align:center;background-color:white;'});
			// Muestro Responsabilidad a modificar
			var responsabilidad = 'Tipo de Presupuesto: '+dijit.byId('tipoPresupuesto').attr('displayedValue');
			divCamposM.attr('content',responsabilidad);
			//Creo arbol de acceso a datos
			myStore = new dojo.data.ItemFileWriteStore({url:'dbi/usuariosTipoChecks.php?sid='+gvarSID+'&tipo_presupuesto_id='+dijit.byId('tipoPresupuesto').attr('value'),urlPreventCache:true});
			var myModel = new extenciones.CheckboxForestStoreModel({store:myStore,childrenAttrs:["children"]});
			var treeUsuario2 = new extenciones.CheckboxTree({id:'treeUsuario2',model:myModel,showRoot:false,persist:false,childrenAttrs:["children"], openOnClick : false, setCheckboxOnClick : true});
			var arbolPane = new dijit.layout.ContentPane({style:'width:250px;text-align:left;background-color:white;height:250px;margin:5px;padding:5px;border:solid 1px #E9E9E9'});
			arbolPane.attr('content',treeUsuario2);
			dojo.place(arbolPane.domNode,divCamposM.domNode,'last');
			//Creacion de botones
			var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
			dojo.place(botonGrabar.domNode,divCamposM.domNode,'last');
			var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
			dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
			//Creacion del dialogo
			dialogM = new dijit.Dialog({title:'Ingreso de datos',id:'dialogMaster2'});
			dialogM.attr('content',divCamposM);
			dialogM.titleBar.children[1].style.display='none';
			//Seteo propiedades para Nuevo
			dmlGrabarMaster = dmlNuevoUsuario2;
			//Se muestra el dialogo
			dialogM.show();
		}
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMaster(){
	if(dijit.byId('asignacionArea').attr('selected')){
		if(dijit.byId('masiva').attr('selected')){
			if(dijit.byId('nuevoMaster')){dijit.byId('nuevoMaster').attr('disabled',false);}
			if(dijit.byId('eliminarMaster')){dijit.byId('eliminarMaster').attr('disabled',false);}
			dijit.byId('arbolMaster1').destroyDescendants();
			dijit.byId('arbolDetail1').destroyDescendants();
			//Seteo la url para la busqueda del arbol
			myStore = new dojo.data.ItemFileWriteStore({url:'dbi/usuariosChecks.php?sid='+gvarSID,urlPreventCache:true});
			var myModel = new extenciones.CheckboxForestStoreModel({store:myStore,childrenAttrs:["children"]});
			var treeUsuarios = new extenciones.CheckboxTree({id:'treeUsuarios',model:myModel,showRoot:false,persist:false,childrenAttrs:["children"], openOnClick : false, setCheckboxOnClick : true});
			dijit.byId('arbolMaster1').attr('content',treeUsuarios);
			//Agregar Arbol
			myStore2 = new dojo.data.ItemFileWriteStore({url:'dbi/subregionesChecks.php?sid='+gvarSID,urlPreventCache:true});
			var myModel2 = new extenciones.CheckboxForestStoreModel({store:myStore2,childrenAttrs:["children"]});
			var treeAreas = new extenciones.CheckboxTree({id:'treeAreas',model:myModel2,showRoot:false,persist:false,childrenAttrs:["children"], openOnClick : false, setCheckboxOnClick : true});
			dijit.byId('arbolDetail1').attr('content',treeAreas);}
		if(dijit.byId('porArea').attr('selected')){
			if(dijit.byId('perfil').attr('value')==''){Mensaje('Seleccione un perfil','error','master');return;}
			dijit.byId('arbolMaster2').destroyDescendants();
			//Seteo la url para la busqueda del arbol
			myStore = new dojo.data.ItemFileWriteStore({url:'dbi/subregiones.php?sid='+gvarSID+'&resp_id='+dijit.byId('perfil').attr('value'),urlPreventCache:true});
			var myModel = new dijit.tree.ForestStoreModel({store:myStore,childrenAttrs:["children"]});
			var treePorArea = new dijit.Tree({id:'treePorArea',model:myModel,showRoot:false,persist:false,childrenAttrs:["children"]});
			dijit.byId('arbolMaster2').attr('content',treePorArea);
			var MostrarMensaje = function(items,request){if(items.length==0){Mensaje('No se han encontrado registros','error','master');}}
			myStore.fetch({query:{},onComplete:MostrarMensaje});}
		if(dijit.byId('porUsuario').attr('selected')){
			if(dijit.byId('subregion').attr('value')==''){Mensaje('Seleccione una sub-regi&oacute;n','error','master');return;}
			dijit.byId('arbolMaster3').destroyDescendants();
			//Seteo la url para la busqueda del arbol
			myStore = new dojo.data.ItemFileWriteStore({url:'dbi/usuarios.php?sid='+gvarSID+'&subregion_id='+dijit.byId('subregion').attr('value'),urlPreventCache:true});
			var myModel = new dijit.tree.ForestStoreModel({store:myStore,childrenAttrs:["children"]});
			var treePorUsuario = new dijit.Tree({id:'treePorUsuario',model:myModel,showRoot:false,persist:false,childrenAttrs:["children"]});
			dijit.byId('arbolMaster3').attr('content',treePorUsuario);
			var MostrarMensaje = function(items,request){if(items.length==0){Mensaje('No se han encontrado registros','error','master');}}
			myStore.fetch({query:{},onComplete:MostrarMensaje});}
	}
	if(dijit.byId('asignacionTipoPresupuesto').attr('selected')){
		if(dijit.byId('masiva2').attr('selected')){
			if(dijit.byId('nuevoMaster')){dijit.byId('nuevoMaster').attr('disabled',false);}
			if(dijit.byId('eliminarMaster')){dijit.byId('eliminarMaster').attr('disabled',false);}
			dijit.byId('arbolMaster4').destroyDescendants();
			dijit.byId('arbolDetail4').destroyDescendants();
			//Seteo la url para la busqueda del arbol
			myStore = new dojo.data.ItemFileWriteStore({url:'dbi/usuariosTipoChecks.php?sid='+gvarSID,urlPreventCache:true});
			var myModel = new extenciones.CheckboxForestStoreModel({store:myStore,childrenAttrs:["children"]});
			var treeUsuarios2 = new extenciones.CheckboxTree({id:'treeUsuarios2',model:myModel,showRoot:false,persist:false,childrenAttrs:["children"], openOnClick : false, setCheckboxOnClick : true});
			dijit.byId('arbolMaster4').attr('content',treeUsuarios2);
			//Agregar Arbol
			myStore2 = new dojo.data.ItemFileWriteStore({url:'dbi/tiposPresupChecks.php?sid='+gvarSID,urlPreventCache:true});
			var myModel2 = new extenciones.CheckboxForestStoreModel({store:myStore2,childrenAttrs:["children"]});
			var treeAreas2 = new extenciones.CheckboxTree({id:'treeAreas2',model:myModel2,showRoot:false,persist:false,childrenAttrs:["children"], openOnClick : false, setCheckboxOnClick : true});
			dijit.byId('arbolDetail4').attr('content',treeAreas2);}
		if(dijit.byId('porArea2').attr('selected')){
			if(dijit.byId('perfilP').attr('value')==''){Mensaje('Seleccione un perfil','error','master');return;}
			dijit.byId('arbolMaster5').destroyDescendants();
			//Seteo la url para la busqueda del arbol
			myStore = new dojo.data.ItemFileWriteStore({url:'dbi/tiposPresup.php?sid='+gvarSID+'&resp_id='+dijit.byId('perfilP').attr('value'),urlPreventCache:true});
			var myModel = new dijit.tree.ForestStoreModel({store:myStore,childrenAttrs:["children"]});
			var treePorArea2 = new dijit.Tree({id:'treePorArea2',model:myModel,showRoot:false,persist:false,childrenAttrs:["children"]});
			dijit.byId('arbolMaster5').attr('content',treePorArea2);
			var MostrarMensaje = function(items,request){if(items.length==0){Mensaje('No se han encontrado registros','error','master');}}
			myStore.fetch({query:{},onComplete:MostrarMensaje});}
		if(dijit.byId('porUsuario2').attr('selected')){
			if(dijit.byId('tipoPresupuesto').attr('value')==''){Mensaje('Seleccione un Tipo de Presupuesto','error','master');return;}
			dijit.byId('arbolMaster6').destroyDescendants();
			//Seteo la url para la busqueda del arbol
			myStore = new dojo.data.ItemFileWriteStore({url:'dbi/usuariosTipo.php?sid='+gvarSID+'&tipo_presupuesto_id='+dijit.byId('tipoPresupuesto').attr('value'),urlPreventCache:true});
			var myModel = new dijit.tree.ForestStoreModel({store:myStore,childrenAttrs:["children"]});
			var treePorUsuario2 = new dijit.Tree({id:'treePorUsuario2',model:myModel,showRoot:false,persist:false,childrenAttrs:["children"]});
			dijit.byId('arbolMaster6').attr('content',treePorUsuario2);
			var MostrarMensaje = function(items,request){if(items.length==0){Mensaje('No se han encontrado registros','error','master');}}
			myStore.fetch({query:{},onComplete:MostrarMensaje});}
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarDetail(){
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
function EditarMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.BorderContainer({style:'width:350px;text-align:center;background-color:white;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<columnasM.length;i++){
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:columnasM[i],label:labelFormM[i],trim:true,promptMessage:mensajesFormM[i],regExp:regexpFormM[i],required:requeridoFormM[i]}));}
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
	//Seteo propiedades para Editar
	dmlGrabarMaster = dmleditarM;
	//Inhabilito campos claves para que no se modifiquen
	for(i=0;i<clavesM.length;i++){dijit.byId(clavesM[i]).attr('disabled',true);}
	//tomo los registros seleccionados en el gridMaster
	var items = gridMaster.selection.getSelected();
	//Generacion de la URL para obtener el registro seleccionado completo
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlbuscarUnicoM;
	for(i=0;i<clavesM.length;i++){urlValue = urlValue+'&'+clavesM[i]+'='+items[0][columnasM[i]];}
	//Carga los valores del registro seleccionado
	var registroCargado = new dojo.data.ItemFileReadStore({url: urlValue});
	var gotData = function(items, request){
		for(i=0;i<columnasM.length;i++){dijit.byId(columnasM[i]).attr('value',registroCargado.getValue(items[0], columnasM[i]));}
		//Se muestra el dialogo
		dialogM.show();
	}
	registroCargado.fetch({query: {}, onComplete: gotData});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CopiarMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.BorderContainer({style:'width:350px;text-align:center;background-color:white;'});
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
	dmlGrabarMaster = dmlNuevoArea;
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
	if(dijit.byId('asignacionArea').attr('selected')){
		if(dijit.byId('masiva').attr('selected')){
			//Creacion del contenedor
			var divCamposM = new dijit.layout.ContentPane({style:'text-align:center;'});
			divCamposM.attr('content','Esta a punto de realizar una desasignaci&oacute;n masiva<br><br>');
			//Creacion de botones
			var botonGrabar = new dijit.form.Button({label:'Desasignar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
			dojo.place(botonGrabar.domNode,divCamposM.domNode,'last');
			var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
			dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
			//Creacion del dialogo
			dialogM = new dijit.Dialog({title:'Confirmar desasignaci&oacute;n',id:'dialogMaster'});
			dialogM.attr('content',divCamposM);
			dialogM.titleBar.children[1].style.display='none';
			//Seteo propiedades para Nuevo
			dmlGrabarMaster = dmlEliminarMasiva;
			//Se muestra el dialogo
			dialogM.show();
		}
	}
	if(dijit.byId('asignacionTipoPresupuesto').attr('selected')){
		if(dijit.byId('masiva2').attr('selected')){
			//Creacion del contenedor
			var divCamposM = new dijit.layout.ContentPane({style:'text-align:center;'});
			divCamposM.attr('content','Esta a punto de realizar una desasignaci&oacute;n masiva<br><br>');
			//Creacion de botones
			var botonGrabar = new dijit.form.Button({label:'Desasignar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
			dojo.place(botonGrabar.domNode,divCamposM.domNode,'last');
			var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
			dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
			//Creacion del dialogo
			dialogM = new dijit.Dialog({title:'Confirmar desasignaci&oacute;n',id:'dialogMaster2'});
			dialogM.attr('content',divCamposM);
			dialogM.titleBar.children[1].style.display='none';
			//Seteo propiedades para Nuevo
			dmlGrabarMaster = dmlEliminarMasiva2;
			//Se muestra el dialogo
			dialogM.show();
		}
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function Eliminar(urlValue){
	procesando.show();
	//Se elimina el registro de la base de datos
	dojo.xhrGet({url:urlValue,handleAs:'json',load:function(response){
		if(response.errcode==0){
			BuscarMaster();//Refresco del gridMaster
			procesando.hide();
			//document.getElementById('cmn_mensajes').innerHTML = 'Eliminaci&oacute;n satisfactoria!';
			//dijit.byId('cmn_mensajes').show();
			Mensaje('Eliminaci&oacute;n exitosa!','mensaje','master');
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
	var registroCargado = new dojo.data.ItemFileReadStore({url:urlValue});
	var gotData = function(items,request){
		for(i=0;i<camposAuditoriaM.length;i++){dijit.byId(camposAuditoriaM[i]).attr('value',registroCargado.getValue(items[0],camposAuditoriaM[i]));}}
	registroCargado.fetch({query:{},onComplete:gotData});	
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajadaExcelMaster(){
	var urlValue ='dbi/bajaExcel.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	document.location = urlValue;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMaster(){
	if(dijit.byId('asignacionArea').attr('selected')){
		if(dijit.byId('masiva').attr('selected')){
			procesando.show();
			//Obtengo el arbol para pasarlo como un string
			var usuarios = '';
			var getUsuarios = function(items){
				for(i=0;i<items.length;i++){
					if(i!=0){usuarios += ',';}
					usuarios += dijit.byId('treeUsuarios').model.store.getValue(items[i],'id');}
				if(usuarios==''||accesos==''){
					procesando.hide();
					Mensaje('Seleccione perfiles y subregiones','error','master');
					CancelarMaster();
					return;}
				else{
					//Generación de la URL
					var urlValue ='dbi/e_proc_t.php?sid='+gvarSID+'&dmlid='+dmlGrabarMaster+'&respons='+usuarios+'&subregiones='+accesos;
					//Grabación de datos en la base de datos
					dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
						if (response.ticket_id){
							CancelarMaster();//Elimino el dialogo
							procesando.hide();
							Mensaje('N&uacute;mero de Ticket: '+response.ticket_id,'mensaje','master');
						}else{procesando.hide();PopUp('Error', response.errmsg);}
					}});
				}
			}
			var accesos = '';
			var getAccesos = function(items){
				for(i=0;i<items.length;i++){
					if(i!=0){accesos += ',';}
					accesos += dijit.byId('treeAreas').model.store.getValue(items[i],'id');}
				dijit.byId('treeUsuarios').model.store.fetch({query:{checked:'true',tipo:'perfil'},queryOptions:{deep:true},onComplete:getUsuarios});
			}
			dijit.byId('treeAreas').model.store.fetch({query:{checked:'true',tipo:'Subregion'},queryOptions:{deep:true},onComplete:getAccesos});
		}
		if(dijit.byId('porArea').attr('selected')){
			procesando.show();
			//Obtengo el arbol para pasarlo como un string
			var accesos = '';
			var getAccesos = function(items){
				for(i=0;i<items.length;i++){
					if(i!=0){accesos += ',';}
					accesos += dijit.byId('treeArea').model.store.getValue(items[i],'id');}				//Generación de la URL
				var urlValue ='dbi/e_proc_t.php?sid='+gvarSID+'&dmlid='+dmlGrabarMaster+'&resp_id='+dijit.byId('perfil').attr('value')+'&subregiones='+accesos;
				//Grabación de datos en la base de datos
				dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
					if (response.ticket_id){
						CancelarMaster();//Elimino el dialogo
						procesando.hide();
						BuscarMaster();
						Mensaje('N&uacute;mero de Ticket: '+response.ticket_id,'mensaje','master');
					}else{procesando.hide();PopUp('Error', response.errmsg);}
				}});
			}
			dijit.byId('treeArea').model.store.fetch({query:{checked:'true',tipo:'Subregion'},queryOptions:{deep:true},onComplete:getAccesos});
		}
		if(dijit.byId('porUsuario').attr('selected')){
			procesando.show();
			//Obtengo el arbol para pasarlo como un string
			var responsabilidades = '';
			var getUsuarios = function(items){
				for(i=0;i<items.length;i++){
					if(i!=0){responsabilidades += ',';}
					responsabilidades += dijit.byId('treeUsuario').model.store.getValue(items[i],'id');}				//Generación de la URL
				var urlValue ='dbi/e_proc_t.php?sid='+gvarSID+'&dmlid='+dmlGrabarMaster+'&subreg_id='+dijit.byId('subregion').attr('value')+'&respons='+responsabilidades;
				//Grabación de datos en la base de datos
				dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
					if (response.ticket_id){
						CancelarMaster();//Elimino el dialogo
						procesando.hide();
						BuscarMaster();
						Mensaje('N&uacute;mero de Ticket: '+response.ticket_id,'mensaje','master');
					}else{procesando.hide();PopUp('Error', response.errmsg);}
				}});
			}
			dijit.byId('treeUsuario').model.store.fetch({query:{checked:'true',tipo:'perfil'},queryOptions:{deep:true},onComplete:getUsuarios});
		}
	}
	if(dijit.byId('asignacionTipoPresupuesto').attr('selected')){
		if(dijit.byId('masiva2').attr('selected')){
			procesando.show();
			//Obtengo el arbol para pasarlo como un string
			var usuarios = '';
			var getUsuarios = function(items){
				for(i=0;i<items.length;i++){
					if(i!=0){usuarios += ',';}
					usuarios += dijit.byId('treeUsuarios2').model.store.getValue(items[i],'id');}
				if(usuarios==''||accesos==''){
					procesando.hide();
					Mensaje('Seleccione perfiles y tipos de presupuesto','error','master');
					CancelarMaster();
					return;}
				else{
					//Generación de la URL
					var urlValue ='dbi/e_proc_t.php?sid='+gvarSID+'&dmlid='+dmlGrabarMaster+'&respons='+usuarios+'&tipos='+accesos;
					//Grabación de datos en la base de datos
					dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
						if (response.ticket_id){
							CancelarMaster();//Elimino el dialogo
							procesando.hide();
							Mensaje('N&uacute;mero de Ticket: '+response.ticket_id,'mensaje','master');
						}else{procesando.hide();PopUp('Error', response.errmsg);}
					}});
				}
			}
			var accesos = '';
			var getAccesos = function(items){
				for(i=0;i<items.length;i++){
					if(i!=0){accesos += ',';}
					accesos += dijit.byId('treeAreas2').model.store.getValue(items[i],'id');}
				dijit.byId('treeUsuarios2').model.store.fetch({query:{checked:'true',tipo:'perfil'},queryOptions:{deep:true},onComplete:getUsuarios});
			}
			dijit.byId('treeAreas2').model.store.fetch({query:{checked:'true',tipo:'Presupuesto'},queryOptions:{deep:true},onComplete:getAccesos});
		}
		if(dijit.byId('porArea2').attr('selected')){
			procesando.show();
			//Obtengo el arbol para pasarlo como un string
			var accesos = '';
			var getAccesos = function(items){
				console.log("entre");
				for(i=0;i<items.length;i++){
					if(i!=0){accesos += ',';}
					accesos += dijit.byId('treeArea2').model.store.getValue(items[i],'id');}				//Generación de la URL
				var urlValue ='dbi/e_proc_t.php?sid='+gvarSID+'&dmlid='+dmlGrabarMaster+'&resp_id='+dijit.byId('perfilP').attr('value')+'&tipos='+accesos;
				//Grabación de datos en la base de datos
				dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
					if (response.ticket_id){
						CancelarMaster();//Elimino el dialogo
						procesando.hide();
						BuscarMaster();
						Mensaje('N&uacute;mero de Ticket: '+response.ticket_id,'mensaje','master');
					}else{procesando.hide();PopUp('Error', response.errmsg);}
				}});
			}
			dijit.byId('treeArea2').model.store.fetch({query:{checked:'true',tipo:'Presupuesto'},queryOptions:{deep:true},onComplete:getAccesos});
		}
		if(dijit.byId('porUsuario2').attr('selected')){
			procesando.show();
			//Obtengo el arbol para pasarlo como un string
			var responsabilidades = '';
			var getUsuarios = function(items){
				for(i=0;i<items.length;i++){
					if(i!=0){responsabilidades += ',';}
					responsabilidades += dijit.byId('treeUsuario2').model.store.getValue(items[i],'id');}				//Generación de la URL
				var urlValue ='dbi/e_proc_t.php?sid='+gvarSID+'&dmlid='+dmlGrabarMaster+'&tipo_presupuesto_id='+dijit.byId('tipoPresupuesto').attr('value')+'&respons='+responsabilidades;
				//Grabación de datos en la base de datos
				dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
					if (response.ticket_id){
						CancelarMaster();//Elimino el dialogo
						procesando.hide();
						BuscarMaster();
						Mensaje('N&uacute;mero de Ticket: '+response.ticket_id,'mensaje','master');
					}else{procesando.hide();PopUp('Error', response.errmsg);}
				}});
			}
			dijit.byId('treeUsuario2').model.store.fetch({query:{checked:'true',tipo:'perfil'},queryOptions:{deep:true},onComplete:getUsuarios});
		}
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	//Elimino el dialogo
	if(dijit.byId('dialogMaster')){
		dijit.byId('dialogMaster').hide();
		dijit.byId('dialogMaster').destroyRecursive();}
	if(dijit.byId('dialogMaster2')){
		dijit.byId('dialogMaster2').hide();
		dijit.byId('dialogMaster2').destroyRecursive();}
	//Limpio campos del formulario
	if(dijit.byId(columnasM[0])){for(i=0;i<columnasM.length;i++){dijit.byId(columnasM[i]).destroy();}}
}