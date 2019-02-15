//TITULOS
var titulos =  new Array('Reemplazo de Productos Inactivos');
//Carga de titulos
document.getElementById('bloqueMaster').innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
var opcionesStore = {identifier:'id',label:'detalle',items:[{id:'1',detalle:'Masivamente'},{id:'2',detalle:'Unica Propuesta'}]};
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	//Modificacion de label e iconos de los botones
	if(dijit.byId('editarMaster')){
		dijit.byId('editarMaster').attr('label','Realizar Reemplazo');
		dijit.byId('editarMaster').attr('iconClass','guardarIcon');
		DespliegeCampos();
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function DespliegeCampos(){
	var tabla = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	if(dijit.byId('reemplaza')){dijit.byId('reemplaza').destroy();}
	tabla.addChild(new dojox.form.CheckedMultiSelect({id:'reemplaza',style:'width:180px;height:37px;',label:'Reemplazar: ',store:new dojo.data.ItemFileReadStore({data:opcionesStore}),onChange:function(value){ChangeReemplaza(value);}}));
	dijit.byId('divInicio').attr('content',tabla);
	tabla.startup();				
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ChangeReemplaza(value){
	dijit.byId('editarMaster').attr('disabled',true);
	dijit.byId('divCampos').destroyDescendants();
	if(value=='1'){
		if(dijit.byId('propuesta')){dijit.byId('propuesta').destroy();}
		if(dijit.byId('inactivo')){dijit.byId('inactivo').destroy();}
		var tablaInactivo = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
		tablaInactivo.addChild(new dijit.form.FilteringSelect({id:'inactivo',label:'Producto Inactivo: ',searchAttr:'detalle',store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=13104',urlPreventCache:true}),onChange:function(value){if(value){ChangeProducto(value);}}}));
		dojo.place(tablaInactivo.domNode,dijit.byId('divCampos').domNode,'last');
		tablaInactivo.startup();
	}else if(value=='2'){
		if(dijit.byId('propuesta')){dijit.byId('propuesta').destroy();}
		if(dijit.byId('propuesta')){dijit.byId('propuesta').destroy();}
		var tablaPropuesta = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
		tablaPropuesta.addChild(new dijit.form.FilteringSelect({id:'propuesta',label:'N&uacute;mero de Propuesta: ',searchAttr:'detalle',store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=13106',urlPreventCache:true}),onChange:function(value){if(value){ChangePropuesta(value);}}}));
		dojo.place(tablaPropuesta.domNode,dijit.byId('divCampos').domNode,'last');
		tablaPropuesta.startup();
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ChangePropuesta(value){
	dijit.byId('editarMaster').attr('disabled',true);
	if(dijit.byId('inactivo')){dijit.byId('inactivo').destroy();}
	var tablaInactivo = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	tablaInactivo.addChild(new dijit.form.FilteringSelect({id:'inactivo',label:'Producto Inactivo: ',searchAttr:'detalle',store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=13107&propuesta_id='+value,urlPreventCache:true}),onChange:function(value){if(value){ChangeProducto(value);}}}));
	dojo.place(tablaInactivo.domNode,dijit.byId('divCampos').domNode,'last');
	tablaInactivo.startup();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ChangeProducto(value){
	dijit.byId('editarMaster').attr('disabled',true);
	if(dijit.byId('reemplazo')){dijit.byId('reemplazo').destroy();}
	var tablaReemplazo = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	tablaReemplazo.addChild(new dijit.form.FilteringSelect({id:'reemplazo',label:'Reemplazo: ',searchAttr:'detalle',store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=13105&producto_id='+value,urlPreventCache:true}),onChange:function(){dijit.byId('editarMaster').attr('disabled',false);}}));
	dojo.place(tablaReemplazo.domNode,dijit.byId('divCampos').domNode,'last');
	tablaReemplazo.startup();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMaster(){ //Realizar Reemplazo
	procesando.show();
	//Generacion de la URL
	var urlValue ='dbi/e_proc_t.php?sid='+gvarSID+'&dmlid=13101&producto_anterior='+dijit.byId('inactivo').attr('value')+'&producto_nuevo='+dijit.byId('reemplazo').attr('value')+'&propuesta_id=';
	if(dijit.byId('propuesta')){urlValue+=dijit.byId('propuesta').attr('value');}
	//Grabacion de datos en la base de datos
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if (response.ticket_id){
			procesando.hide();
			dijit.byId('reemplaza').onChange(dijit.byId('reemplaza').attr('value'));
			Mensaje('Se ejecut&oacute; el proceso, consulte el Ticket: '+response.ticket_id,'mensaje','master');
		}else{procesando.hide();PopUp('Error', response.errmsg);} 
	}});
}