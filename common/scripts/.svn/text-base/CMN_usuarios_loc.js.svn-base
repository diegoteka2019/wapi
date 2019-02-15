//TITULOS
var titulos = new Array("Administraci&oacute;n de Usuarios","Asignaci&oacute;n de perfiles a usuarios");
//DML
var dmlBuscarMaster = "105";
var dmlnuevoM = "1101";
var dmleditarM = "1102";
var dmlbuscarUnicoM = "1104"; 
var dmleliminarM = "1103";
var dmlgrabarM = "";
var dmlAuditoriaMaster = "1107";
var dmlBuscarDetail = "1115";
var dmlNuevoDetail = "111";
var dmleditarD = "xx";
var dmlbuscarUnicoD = "xx"; 
var dmleliminarD = "113";
var dmlGrabarDetail = "";
var dmlAuditoriaDetail = "1117";
//COLUMNAS
var columnasM = new Array("usuario_id","clave2","apellido","nombre");
var tiposM = new Array("text","password","text","text");
var columnasD = new Array("usuario_id2","perfil_id","nombre","descripcion");
var tiposD = new Array("text","text","text","text");
//DESCRIPCIONES
var descripcionesM = new Array("Id Usuario","Clave","Apellido","Nombre");
var descripcionesD = new Array("Id Usuario","Id Perfil","Nombre","Descripci&oacute;n");
//PRIMARY KEY
var clavesM = new Array("usuario_id");
var clavesD = new Array("usuario_id2","perfil_id");
//FILTROS
var filtroMaster = new Array("usuario_id","apellido","nombre");
var labelFiltroMaster = new Array("Id Usuario :","Apellido :","Nombre :");
var mensajeFiltroMaster = new Array("Ingrese el usuario a buscar","Ingrese el apellido a buscar","Ingrese el nombre a buscar");
//FORMULARIOS
var camposFormM = new Array('usuario_id','clave2','apellido','nombre');
var labelFormM = new Array("Id Usuario: ","Clave: ","Apellido: ","Nombre: ");
var mensajesFormM = new Array("Ingrese el c&oacute;digo del usuario","Ingrese la contrase&ntilde;a","Ingrese el apellido","Ingrese el nombre");
var requeridoFormM = new Array(true,true,true,true);
var regexpFormM = new Array('.*','.*','.*','.*');
var typeFormM = new Array('text','password','text','text');
var dojoTypeFormM = new Array('ValidationTextBox','ValidationTextBox');
var selectFormM = new Array('','');

var camposFormD = new Array("usuario_id2","perfil_id");
var labelFormD = new Array('Usuario: ','Perfil: ');
var mensajesFormD = new Array('Ingrese el c&oacute;digo del usuario','Ingrese el c&oacute;digo del perfil');
var dojoTypeFormD = new Array('ValidationTextBox','FilteringSelect');
var searchSelectFormD = new Array('','detalle');
var selectFormD = new Array('','1116');
var regexpFormD = new Array('.*','.*');
var requeridoFormD = new Array(true,true);
var trimFormD = new Array(false,false);

//Carga las estructuras de las grillas
var layoutMaster = [
    {width:"auto",field:columnasM[0],name:descripcionesM[0]},
    {width:"auto",field:columnasM[1],name:descripcionesM[1],hidden:true},
    {width:"auto",field:columnasM[2],name:descripcionesM[2]},
    {width:"auto",field:columnasM[3],name:descripcionesM[3]}];
var layoutDetail = [
    {width:"auto",field:columnasD[0],name:descripcionesD[0],hidden:true},
    {width:"auto",field:columnasD[1],name:descripcionesD[1],hidden:true},
	{width:"auto",field:columnasD[2],name:descripcionesD[2]},
	{width:"auto",field:columnasD[3],name:descripcionesD[3]}];
//campos de auditoria
var camposAuditoriaM = new Array('usr_altam','fecha_altam','usr_modifm','fecha_modifm');
var camposAuditoriaD = new Array('usr_altad','fecha_altad','usr_modifd','fecha_modifd');
var labelAuditoria = new Array('Creado por: ','Fecha de creaci&oacute;n: ','Modificado por: ','Fecha de modificaci&oacute;n: ');
//Carga de titulos
document.getElementById("bloqueMaster").innerHTML = titulos[0];
document.getElementById("bloqueDetail").innerHTML = titulos[1];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
dojo.fadeOut({node:'cmn_mensajes_detail'}).play();
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	ArmadoFiltroYAuditoria();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedMaster(){
	BuscarDetail();
	HabilitarBotonesMaster(2,false);
	HabilitarBotonesDetail(1,false);
	HabilitarBotonesDetail(2,true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedDetail(){
	HabilitarBotonesDetail(2,false);
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
		if(dijit.byId("bajarAdjuntoMaster")){dijit.byId("bajarAdjuntoMaster").attr('disabled',bool);}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function HabilitarBotonesDetail(tipo,bool){
	if(tipo==1){
		if(dijit.byId("nuevoDetail")){dijit.byId("nuevoDetail").attr('disabled',bool);}
		if(dijit.byId("bajaexcelDetail")){dijit.byId("bajaexcelDetail").attr('disabled',bool);}}
	if(tipo==2){
		if(dijit.byId("editarDetail")){dijit.byId("editarDetail").attr('disabled',bool);}
		if(dijit.byId("copiarDetail")){dijit.byId("copiarDetail").attr('disabled',bool);}
		if(dijit.byId("eliminarDetail")){dijit.byId("eliminarDetail").attr('disabled',bool);}
		if(dijit.byId("auditDetail")){dijit.byId("auditDetail").attr('disabled',bool);}}
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
			tablaFiltros.addChild(new dijit.form.TextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i]}));}
		divFiltros.attr('content',tablaFiltros);
		var botonBuscar = new dijit.form.Button({label:'Buscar',type:'submit',onClick:function(){BuscarMaster();}},document.createElement('div'));
		dojo.place(botonBuscar.domNode,divFiltros.domNode,'last');
		dijit.byId('filtrosMaster').attr('content',divFiltros);}
	if(dijit.byId('auditMaster')){
		//Limpio Filtros
		if(dijit.byId(camposAuditoriaM[0])){for(i=0;i<camposAuditoriaM.length;i++){dijit.byId(camposAuditoriaM[i]).destroy();}}
		//Creo campos de auditoria
		var tablaAuditMaster = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'width:350px;'});
		for(i=0;i<camposAuditoriaM.length;i++){tablaAuditMaster.addChild(new dijit.form.TextBox({id:camposAuditoriaM[i],label:labelAuditoria[i],disabled:true,type:'text'}));}
		dijit.byId('auditoriaMaster').attr('content',tablaAuditMaster);}
	if(dijit.byId('auditDetail')){
		//Limpio Filtros
		if(dijit.byId(camposAuditoriaD[0])){for(i=0;i<camposAuditoriaD.length;i++){dijit.byId(camposAuditoriaD[i]).destroy();}}
		//Creo campos de auditoria
		var tablaAuditDetail = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'width:350px;'});
		for(i=0;i<camposAuditoriaD.length;i++){
			tablaAuditDetail.addChild(new dijit.form.TextBox({id:camposAuditoriaD[i],label:labelAuditoria[i],disabled:true,type:'text'}));}
		dijit.byId('auditoriaDetail').attr('content',tablaAuditDetail);}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function NuevoMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:350px;text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<camposFormM.length;i++){
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[i],type:typeFormM[i],label:labelFormM[i],trim:true,promptMessage:mensajesFormM[i],regExp:regexpFormM[i],required:requeridoFormM[i]}));}
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
function NuevoDetail(){
	//Creacion del contenedor
	var divCamposD = new dijit.layout.ContentPane({style:'width:350px;text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<camposFormD.length;i++){
		if(dojoTypeFormD[i]=='ValidationTextBox'){tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormD[i],label:labelFormD[i],trim:true,promptMessage:mensajesFormD[i],regExp:regexpFormD[i],required:requeridoFormD[i]}));}
		if(dojoTypeFormD[i].substring(0,15)=='FilteringSelect'){tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormD[i],label:labelFormD[i],searchAttr:searchSelectFormD[i],promptMessage:mensajesFormD[i],required:requeridoFormD[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormD[i]})}));}}
	divCamposD.attr('content',tablaForm);
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarDetail();}});
	dojo.place(botonGrabar.domNode,divCamposD.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarDetail();}});
	dojo.place(botonCancelar.domNode,divCamposD.domNode,'last');
	//Creacion del dialogo
	dialogD = new dijit.Dialog({title:'Ingreso de datos',id:'dialogDetail',closable:false});
	dialogD.attr('content',divCamposD);
	dialogD.titleBar.children[1].style.display='none';
	//Seteo propiedades para Nuevo
	dmlGrabarDetail = dmlNuevoDetail;
	var items = gridMaster.selection.getSelected();
	dijit.byId(camposFormD[0]).attr('value',items[0][columnasM[0]]);
	dijit.byId(camposFormD[0]).attr('disabled',true);
	dijit.byId(camposFormD[1]).focus();
	//Se muestra el dialogo
	dialogD.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMaster(){
	//Armado de URL
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	for(i=0;i<filtroMaster.length;i++){
		urlValue = urlValue +'&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');}
	gridMaster.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	gridMaster.attr("autoWidth",true);
	gridMaster.adaptWidth();
	gridMaster.selection.clear();
	HabilitarBotonesMaster(1,false);
	HabilitarBotonesMaster(2,true);
	gridDetail.setStore();gridDetail.update();
	//Informo la cantidad de registros obtenida
	gridMaster.store.fetch({query: {}, onComplete: function(items, request){document.getElementById("cantidadObtenidaMaster").innerHTML = 'Registros: ' + items.length;}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarDetail(){
	if(gridMaster.selection.getSelected().length){
		//tomo los registros seleccionados en el gridMaster
		var itemsM = gridMaster.selection.getSelected();
		//Genero la URL
		var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarDetail+'&'+columnasD[0]+'='+itemsM[0][columnasM[0]];
		gridDetail.setStore(new dojo.data.ItemFileReadStore({url: urlValue,urlPreventCache:true}));
		gridDetail.selection.clear();
		//Muestro la cantidad obtenida
		gridDetail.store.fetch({query: {}, onComplete: function(items, request){document.getElementById("cantidadObtenidaDetail").innerHTML = 'Registros: ' + items.length;}});}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<camposFormM.length;i++){
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[i],type:typeFormM[i],label:labelFormM[i],type:tiposM[i],trim:true,promptMessage:mensajesFormM[i],regExp:regexpFormM[i],required:requeridoFormM[i]}));}
	//Saco el campo de la contraseña
	tablaForm.removeChild(dijit.byId('clave2'));
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
	//Seteo propiedades para Editar
	dmlgrabarM = dmleditarM;
	//Inhabilito campos claves para que no se modifiquen
	for(i=0;i<clavesM.length;i++){dijit.byId(clavesM[i]).attr('disabled',true);}
	dijit.byId(camposFormM[1]).attr('disabled',true);
	//tomo los registros seleccionados en el gridMaster
	var items = gridMaster.selection.getSelected();
	//Generacion de la URL para obtener el registro seleccionado completo
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlbuscarUnicoM;
	for(i=0;i<clavesM.length;i++){urlValue = urlValue+'&'+clavesM[i]+'='+items[0][columnasM[i]];}
	//Carga los valores del registro seleccionado
	var registroCargado = new dojo.data.ItemFileReadStore({url: urlValue});
	var gotData = function(items, request){
		for(i=0;i<camposFormM.length;i++){dijit.byId(camposFormM[i]).attr('value',registroCargado.getValue(items[0], camposFormM[i]));}
		//Se muestra el dialogo
		dialogM.show();
	}
	registroCargado.fetch({query: {}, onComplete: gotData});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CopiarMaster(){ 
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<camposFormM.length;i++){
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[i],type:typeFormM[i],label:labelFormM[i],type:tiposM[i],trim:true,promptMessage:mensajesFormM[i],regExp:regexpFormM[i],required:requeridoFormM[i]}));}
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
		for(i=0;i<camposFormM.length;i++){dijit.byId(camposFormM[i]).attr('value',registroCargado.getValue(items[0], camposFormM[i]));}
		dijit.byId(camposFormM[0]).attr('value','');
		dijit.byId(camposFormM[1]).attr('value','');
		//Se muestra el dialogo
		dialogM.show();
	}
	registroCargado.fetch({query: {}, onComplete: gotData});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarMaster(){
	//tomo el valor de los campos clave de los registros seleccionados en el gridMaster
	var items = gridMaster.selection.getSelected();
	//Generación de la URL y el mensaje de advertencia
	var urlValue ='dbi/e.php?sid='+gvarSID+'&dmlid='+dmleliminarM;
	mensaje = 'Realmente desea eliminar el registro?';
	for(i=0;i<clavesM.length;i++){
		urlValue+='&'+clavesM[i]+'='+items[0][columnasM[i]];
		mensaje+='<br><b>'+descripcionesM[i]+': '+items[0][columnasM[i]]+'</b>';}
	mensaje+='<br>Tambi&eacute;n se eliminar&aacute;n los perfiles asignados.';
	PopUp('Advertencia!', mensaje,"Eliminar('"+urlValue+"',\'master\');");
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarDetail(){
	//tomo el valor de los campos clave de los registros seleccionados en el gridMaster
	var items = gridDetail.selection.getSelected();
	//Generación de la URL y el mensaje de advertencia
	var urlValue ='dbi/e.php?sid='+gvarSID+'&dmlid='+dmleliminarD;
	mensaje = 'Realmente desea eliminar el registro?';
	for(i=0;i<clavesD.length;i++){
		urlValue = urlValue +'&'+clavesD[i]+'='+items[0][columnasD[i]];
		mensaje = mensaje + '<br><b>'+descripcionesD[i]+': '+items[0][columnasD[i]]+'</b>';}
	PopUp("Advertencia!", mensaje, "Eliminar('"+urlValue+"',\'detail\');");
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function Eliminar(urlValue,tipo){
	procesando.show();
	//Se elimina el registro de la base de datos
	dojo.xhrGet({url:urlValue,handleAs:"json",load:function(response){
		if(response.errcode == 0){
			//Refresco del gridMaster
			if(tipo=='master'){BuscarMaster();}else{BuscarDetail();}
			procesando.hide();
			Mensaje('Eliminaci&oacute;n satisfactoria!','mensaje',tipo);
		}else{procesando.hide();PopUp("Error", response.errmsg);}}
	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMaster(){
	//Validacion del formulario
	for(i=0;i<camposFormM.length;i++){if(!dijit.byId(camposFormM[i]).isValid()){dijit.byId(camposFormM[i]).focus();return;}}
	dijit.byId('dialogMaster').hide();
	procesando.show();
	//Habilito los campos de vuelta, de lo contrario no se pasan por post
	for(i=0;i<camposFormM.length;i++){dijit.byId(camposFormM[i]).attr('disabled',false);}
	//Generación de la URL
	var urlValue ='dbi/e.php?sid='+gvarSID+'&dmlid='+dmlgrabarM;
	for(i=0;i<camposFormM.length;i++){
		if(camposFormM[i]=='clave2'){urlValue = urlValue +'&'+camposFormM[i]+'='+MD5(dijit.byId(camposFormM[i]).attr('value'));}else{
		urlValue = urlValue +'&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).attr('value');
		}
	}
	//Grabación de datos en la base de datos
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if (response.errcode==0){
			CancelarMaster();//Elimino el dialogo
			BuscarMaster();//Refresco del gridMaster
			procesando.hide();
			Mensaje('Grabaci&oacute;n exitosa!','mensaje','master');
		}else{procesando.hide();PopUp('Error', response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarDetail(){
	//Validacion del formulario
	for(i=0;i<camposFormD.length;i++){if(!dijit.byId(camposFormD[i]).isValid()){dijit.byId(camposFormD[i]).focus();return;}}
	dijit.byId('dialogDetail').hide();
	procesando.show();
	//Habilito los campos de vuelta, de lo contrario no se pasan por post
	for(i=0;i<camposFormD.length;i++){dijit.byId(camposFormD[i]).attr('disabled',false);}
	//Generación de la URL
	var urlValue ='dbi/e.php?sid='+gvarSID+'&dmlid='+dmlGrabarDetail;
	for(i=0;i<camposFormD.length;i++){urlValue = urlValue +'&'+camposFormD[i]+'='+dijit.byId(camposFormD[i]).attr('value');}
	//Grabación de datos en la base de datos
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if (response.errcode==0){
			CancelarDetail();//Elimino el dialogo
			BuscarDetail();//Refresco del gridMaster
			procesando.hide();
			Mensaje('Grabaci&oacute;n exitosa!','mensaje','detail');
		}else{procesando.hide();PopUp('Error', response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function PreContrasenaMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'text-align:center;'});
	//Limpio campos del formulario
	if(dijit.byId('contrasena0')){for(i=0;i<2;i++){dijit.byId('contrasena'+i).destroy();}}
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	for(i=0;i<2;i++){
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:'contrasena'+i,label:'Nueva contrase&ntilde;a: ',type:'password',trim:true,promptMessage:'Ingrese la nueva contrase&ntilde;a',required:true}));}
	divCamposM.attr('content',tablaForm);
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({label:'Cambiar',type:'button',iconClass:'claveIcon',onClick:function(){ContrasenaMaster();}});
	dojo.place(botonGrabar.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){dialogM.hide();dialogM.destroyRecursive();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Ingreso de datos',id:'dialogMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ContrasenaMaster(){
	// foco en campo invalido
	if (dijit.byId("contrasena0").attr("value") != dijit.byId("contrasena1").attr("value")){
			dijit.byId("contrasena0").attr("value",""); 
			dijit.byId("contrasena1").attr("value","");
			dijit.byId("contrasena0").focus();
			dijit.byId("contrasena0").displayMessage('Las contrase&ntilde;as nuevas deben ser iguales');
	} else {
		dijit.byId('dialogMaster').hide();
		procesando.show();
		//Convierte la clave de texto plano a un digest hasheado Así se guarda en la DB
		passNew = MD5(dijit.byId("contrasena0").attr("value"));
		//tomo el valor de los campos clave del usuario seleccionado
		var items = gridMaster.selection.getSelected();
		//carga la nueva contrasena
		dojo.xhrPost({
			url: "dbi/e.php?sid="+gvarSID+"&dmlid=1106&usuario="+items[0][clavesM[0]]+"&passNew="+passNew,
			handleAs: "json",
			sync: "true",
			load: function(response) {
				if (response.errcode == 0) {
					dijit.byId('dialogMaster').hide();
					dijit.byId("dialogMaster").destroyRecursive();
					procesando.hide();
					Mensaje('Contrase&ntilde;a modificada con &eacute;xito!','mensaje','master');
				} else {
				procesando.hide();
					PopUp("Error", response.errmsg);
				}
			}
		});
	}
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
function AuditoriaDetail(){
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlAuditoriaDetail;
	var items = gridDetail.selection.getSelected();
	for(i=0;i<clavesD.length;i++){urlValue +='&'+clavesD[i]+'='+items[0][columnasD[i]];}
	//Carga los valores del registro seleccionado
	var registroCargado = new dojo.data.ItemFileReadStore({url:urlValue});
	var gotData = function(items,request){
		for(i=0;i<camposAuditoriaD.length;i++){dijit.byId(camposAuditoriaD[i]).attr('value',registroCargado.getValue(items[0],camposAuditoriaD[i]));}}
	registroCargado.fetch({query:{},onComplete:gotData});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajadaExcelMaster() {
	//Armado de URL
	var urlValue ='dbi/bajaExcel.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	for(i=0;i<filtroMaster.length;i++){
		urlValue = urlValue +'&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');}
	document.location = urlValue;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajadaExcelDetail(){
	var itemsM = gridMaster.selection.getSelected();
	var urlValue ='dbi/bajaExcel.php?sid='+gvarSID+'&dmlid='+dmlBuscarDetail+'&'+columnasD[0]+'='+itemsM[0][columnasM[0]];
	document.location = urlValue;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajarAdjuntoMaster(){

}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	//Elimino el dialogo
	dijit.byId('dialogMaster').hide();
	dijit.byId('dialogMaster').destroyRecursive();
	//Limpio campos del formulario
	if(dijit.byId(camposFormM[0])){for(i=0;i<camposFormM.length;i++){dijit.byId(camposFormM[i]).destroy();}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarDetail(){
	//Elimino el dialogo
	dijit.byId('dialogDetail').hide();
	dijit.byId('dialogDetail').destroyRecursive();
	//Limpio campos del formulario
	if(dijit.byId(camposFormD[0])){for(i=0;i<camposFormD.length;i++){dijit.byId(camposFormD[i]).destroy();}}
}