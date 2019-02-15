//TITULOS
var titulos =  new Array('Reportes Por Perfil');
//DMLs
var dmlnuevoM = '12002';
//COLUMNAS
var columnasM = new Array('reportes','perfil');
//DESCRIPCIONES
var descripcionesM = new Array('Reportes','Perfil');
//FORMULARIO
var camposFormM = new Array('reportes','rep_perfil');
//Carga de titulos
document.getElementById('bloqueMaster').innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	CrearFiltros();
	//Modificacion de label e iconos de los botones
	if(dijit.byId('editarMaster')){
		dijit.byId('editarMaster').attr('label','Guardar');
		dijit.byId('editarMaster').attr('iconClass','guardarIcon');
		dijit.byId('editarMaster').attr('disabled',false);}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CrearFiltros(){
	dijit.byId('divParametros').destroyDescendants();
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'70',style:'text-align:left;'});
	if(dijit.byId('reportes')){dijit.byId('reportes').destroy();}tablaForm.addChild(new dijit.form.FilteringSelect({id:'reportes',style:'width:320px;',label:'Reportes: ',searchAttr:'detalle',promptMessage:'Debe seleccionar un Reporte',required:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=12008',preventCache:true}),onChange:function(){ObtenerPerfiles();}}));
	dijit.byId('divParametros').attr('content',tablaForm);
	tablaForm.startup();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ObtenerPerfiles(){
	dijit.byId('divParametros2').destroyDescendants();
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'70',style:'text-align:left;'});
	if(dijit.byId('rep_perfil')){dijit.byId('rep_perfil').destroy();}
	if(dijit.byId('seleccionar')){dijit.byId('seleccionar').destroy();}
	tablaForm.addChild(new dijit.form.CheckBox({id:'seleccionar',title:'Selec. Todos',onClick:function(){Seleccionar(this.checked);}}));
	tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'rep_perfil',style:'width:600px;height:440px;',label:'Perfiles: ',multiple:true,store:null}));
	var storePerfiles = new dojo.data.ItemFileWriteStore({url:"dbi/q.php?sid="+gvarSID+"&dmlid=12007&reporte="+dijit.byId('reportes').attr('value'),preventCache:true, urlPreventCache:true});
	//while(dijit.byId('rep_perfil').options.length>0){dijit.byId('rep_perfil').removeOption(dijit.byId('rep_perfil').options[0]);}
	var CargarMultiSelect = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('rep_perfil').addOption({disabled:false,selected:items[i]['selected'][0]?true:false,label:items[i]['detalle'],value:items[i]['perfil_id']});
		console.log('selected: '+items[i]['selected'][0]?true:false+ 'value: '+items[i]['perfil_id']);
		}
		dijit.byId('divParametros2').attr('content',tablaForm);
		tablaForm.startup();
	}
	storePerfiles.fetch({query:{},onComplete:CargarMultiSelect});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMaster(){
	//Validación de campos correctos
	if(!dijit.byId('reportes').isValid()) {dijit.byId('reportes').focus();return;}
	procesando.show();
	//Generación de la URL
	var urlValue ='dbi/e_proc_t.php?sid='+gvarSID+'&dmlid='+dmlnuevoM+'&reporte='+dijit.byId('reportes').attr('value')+'&perfiles='+dijit.byId('rep_perfil').attr('value');
	//Grabación de datos en la base de datos
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if (response.ticket_id){
			procesando.hide();
			ObtenerPerfiles();
			Mensaje('Se ejecut&oacute; el proceso. Consulte el Ticket nro: '+response.ticket_id,'mensaje','master');
		}else{procesando.hide();PopUp('Error', response.errmsg);} 
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function Seleccionar(checked){
	if(checked==true){
	while(dijit.byId('rep_perfil').options.length>0){dijit.byId('rep_perfil').removeOption(dijit.byId('rep_perfil').options[0]);}
	var storePerfiles = new dojo.data.ItemFileWriteStore({url:"dbi/q.php?sid="+gvarSID+"&dmlid=12007&reporte="+dijit.byId('reportes').attr('value'),preventCache:true, urlPreventCache:true});
	var CargarMultiSelect = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('rep_perfil').addOption({disabled:false,selected:true,label:items[i]['detalle'],value:items[i]['perfil_id']});
		}
		dijit.byId('divParametros2').attr('content',tablaForm);
		tablaForm.startup();
	}
	storePerfiles.fetch({query:{},onComplete:CargarMultiSelect});
	}
	else if(checked==false){
	while(dijit.byId('rep_perfil').options.length>0){dijit.byId('rep_perfil').removeOption(dijit.byId('rep_perfil').options[0]);}
	var storePerfiles = new dojo.data.ItemFileWriteStore({url:"dbi/q.php?sid="+gvarSID+"&dmlid=12007&reporte="+dijit.byId('reportes').attr('value'),preventCache:true, urlPreventCache:true});
	var CargarMultiSelect = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('rep_perfil').addOption({disabled:false,selected:false,label:items[i]['detalle'],value:items[i]['perfil_id']});
		}
		dijit.byId('divParametros2').attr('content',tablaForm);
		tablaForm.startup();
	}
	storePerfiles.fetch({query:{},onComplete:CargarMultiSelect});
	}
}