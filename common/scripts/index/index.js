//VARIABLES GLOBALES
var gvarSID = "";
var gvarTID = "";
//DIALOGO PROCESANDO
var procesando;
//Variable global necesaria para los permisos de cada pantalla
var storeAccion = null;
var modoLogin = null;

////////////////////////////////////////////////---CARGA INICIAL---//////////////////////////////////////////////////////////
dojo.addOnLoad(
	//al terminar de cargar la pagina
	function(){
	
		//modifico cursor al realizar una llamada xhr
		var myAlert = function() { document.body.style.cursor = 'wait'; }
		var myEndAlert = function() { document.body.style.cursor = 'default'; }
		dojo.connect(dojo,"_ioSetArgs",myAlert);
		dojo.connect(dojo.Deferred.prototype,"_fire",myEndAlert);
	
	
		dojo.fadeOut({node:'main'}).play();
		procesando = new dijit.DialogUnderlay({id:'procesando','class':'procesando'});
		
		dojo.xhrPost({url:'dbi/login.php?cod=ML',handleAs:'json',sync:'true',load:function(response){
			modoLogin = response.modoLogin;
			if(response.modoLogin == 'LOC'){
				Login();
				dojo.connect(dijit.byId('mcp'),'onLoad',function(){
						//Se agrega una llamada a la funci�n DojoAddOnLoad al final del fetch de los permisos
						CrearBotones();
					}
				);					
			} else if (response.modoLogin == 'SSO') {
				dojo.xhrPost({url:'dbi/login.php?cod=VA',handleAs:'json',sync:'true',load:function(response){
					if(response.errcode == ''){
						//alert('Valido');
						LoginLDAP(response.usuarioId);
						dojo.connect(dijit.byId('mcp'),'onLoad',function(){
								//Se agrega una llamada a la funci�n DojoAddOnLoad al final del fetch de los permisos
								CrearBotones();
							}	
						);
					} else if (response.errcode == 'SSO-1') {
						//alert('Error SS0-1');
						document.location = response.redirURL;	
					} else {
						Mensaje(response.errmsg,"error","login");
						gvarSID = ""; //Limpia la variable global de js (declarada en index.html)
					}
				}});
			}
		}});

	}
);
////////////////////////////////////////////////---SESION---//////////////////////////////////////////////////////////
function LoginLDAP(usuarioId){
	//Elimino labels viejos
	if(dijit.byId('cmn_servidor')){dijit.byId('cmn_servidor').destroy();}
	if(dijit.byId('cmn_usuario')){dijit.byId('cmn_usuario').destroy();}
	if(dijit.byId('cmn_perfil')){dijit.byId('cmn_perfil').destroy();}
	//Creacion del contenedor
	var divLogin = new dijit.layout.ContentPane({id:"test",style:'text-align:center;'});
	//Mensajes de error
	var msg = '<div id="cmn_mensajes_login" title="Click para ocultar" onclick="dojo.byId(\'cmn_mensajes_login\').innerHTML=null;dojo.fadeOut({node:\'cmn_mensajes_login\'}).play();" onmouseover="this.style.cursor=\'pointer\'" style="text-align:center;"></div>';
	divLogin.attr('content',msg);
	//Verificaci�n de login
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'80',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.FilteringSelect({id:'cmn_servidor',label:'Servidor: ',promptMessage:'Elija el servidor a conectarse',required:true,searchAttr:'srvDisp',labelAttr:'srvDetalle',labelType:'html',forceValidOption:true,store: new dojo.data.ItemFileReadStore({url:'dbi/login.php?cod=LS'})}));
	AutoCompletar(dijit.byId('cmn_servidor'));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:'cmn_usuario',label:'Usuario: ',trim:true,promptMessage:'Ingrese el nombre de usuario',required:true}));
	dojo.place(tablaForm.domNode,divLogin.domNode,'last');
	tablaForm.startup();
	dijit.byId("cmn_usuario").attr("value",usuarioId);
	dijit.byId("cmn_usuario").attr("disabled",true);
	
	//Creacion de boton verificar
	var botonVerificar = new dijit.form.Button({id:'verificarUsuario',label:'Conectar',type:'button',onClick:function(){VerificarUsuarioLDAP();}});
	dojo.place(botonVerificar.domNode,divLogin.domNode,'last');	
	//Perfil de logeo
	var perfilForm = new dojox.layout.TableContainer({cols:1,labelWidth:'80',style:'text-align:left;'});
	perfilForm.addChild(new dijit.form.FilteringSelect({id:'cmn_perfil',label:'Perfil: ',promptMessage:'Seleccione el perfil a utilizar',required:true,disabled:true,searchAttr:'NOMBRE',labelType:'html',forceValidOption:true,store:'null'}));//,onChange:function(){gvarPerfilId = dijit.byId('cmn_perfil').value;}
	dojo.place(perfilForm.domNode,divLogin.domNode,'last');
	perfilForm.startup();
	var botonPerfil = new dijit.form.Button({id:'cargarPerfil',label:'Cargar Perfil',disabled:true,onClick:function(){CargarPerfil();CargarCabecera();}});
	dojo.place(botonPerfil.domNode,divLogin.domNode,'last');
	var botonSalir = new dijit.form.Button({id:'salir',label:'Salir',iconClass:'cancelarIcon',disabled:false,onClick:function(){Salir();}})
	dojo.place(botonSalir.domNode,divLogin.domNode,'last');
	//Creacion del dialogo
	dialogLogin = new dijit.Dialog({title:'Ingrese sus datos',id:'dialogLogin',style:'width:300px;'});
	dialogLogin.attr('content',divLogin);
	dialogLogin.titleBar.children[1].style.display='none';
	dojo.fadeOut({node:'cmn_mensajes_login'}).play();
	//Se muestra el dialogo
	dialogLogin.show();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function VerificarUsuarioLDAP(){
	//Validacion del dialogo
	if(!dijit.byId('dialogLogin').validate()){return;}
	//se verifica el usuario
	dojo.xhrPost({url:'dbi/login.php?cod=CS&cmn_servidor='+dijit.byId('cmn_servidor').attr('value'),handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==0){
			gvarSID = response.sid; //Guarda el nuevo SID en la variable global de js (declarada en index.html)
			srvItem = null;
			dijit.byId("cmn_servidor").store.fetchItemByIdentity({
				identity: dijit.byId("cmn_servidor").value, 
				onItem: function(item){ srvItem = item; }
			});

			//Se cargan los perfiles para el usuario correspondiente.
			urlValue = "dbi/perfiles.php?sid=" + gvar
			SID + "&cod=LPU";
			var perfilesStore = new dojo.data.ItemFileReadStore({url: urlValue});
			dijit.byId("cmn_perfil").attr("store", perfilesStore);
			AutoCompletar(dijit.byId('cmn_perfil'));
	
			//se habilitan las opciones para la carga de perfil
			dijit.byId("cmn_usuario").attr("disabled",true);
			dijit.byId("cmn_servidor").attr("disabled",true);
			dijit.byId("verificarUsuario").attr("disabled",true);
			dijit.byId("cmn_perfil").attr("disabled",false);
			dijit.byId("cargarPerfil").attr("disabled",false);
		} else if (response.errcode == 'SSO-1') {
			document.location = response.redirURL;
			//alert('Error SS0-1');
		} else {
			Mensaje(response.errmsg,"error","login");
			gvarSID = ""; //Limpia la variable global de js (declarada en index.html)
			dijit.byId('cmn_clave').attr('value','');
		}
	}});
}
////////////////////////////////////////////////---SESION---//////////////////////////////////////////////////////////
function Login(){
	//Elimino labels viejos
	if(dijit.byId('cmn_servidor')){dijit.byId('cmn_servidor').destroy();}
	if(dijit.byId('cmn_usuario')){dijit.byId('cmn_usuario').destroy();}
	if(dijit.byId('cmn_clave')){dijit.byId('cmn_clave').destroy();}
	if(dijit.byId('cmn_perfil')){dijit.byId('cmn_perfil').destroy();}
	//Creacion del contenedor
	var divLogin = new dijit.layout.ContentPane({style:'text-align:center;'});
	//Mensajes de error
	var msg = '<div id="cmn_mensajes_login" title="Click para ocultar" onclick="dojo.byId(\'cmn_mensajes_login\').innerHTML=null;dojo.fadeOut({node:\'cmn_mensajes_login\'}).play();" onmouseover="this.style.cursor=\'pointer\'" style="text-align:center;"></div>';
	divLogin.attr('content',msg);
	//Verificaci�n de login
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'80',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.FilteringSelect({id:'cmn_servidor',label:'Servidor: ',promptMessage:'Elija el servidor a conectarse',required:true,searchAttr:'srvDisp',labelAttr:'srvDetalle',labelType:'html',forceValidOption:true,store: new dojo.data.ItemFileReadStore({url:'dbi/login.php?cod=LS'})}));
	AutoCompletar(dijit.byId('cmn_servidor'));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:'cmn_usuario',label:'Usuario: ',trim:true,promptMessage:'Ingrese el nombre de usuario',required:true}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:'cmn_clave',label:'Clave: ',type:'password',trim:true,promptMessage:'Ingrese la clave de acceso',required:true}));
	dojo.place(tablaForm.domNode,divLogin.domNode,'last');
	tablaForm.startup();
	//Creacion de boton verificar
	var botonVerificar = new dijit.form.Button({id:'verificarUsuario',label:'Verificar Usuario',type:'button',onClick:function(){VerificarUsuario();}});
	dojo.place(botonVerificar.domNode,divLogin.domNode,'last');
	//Perfil de logeo
	var perfilForm = new dojox.layout.TableContainer({cols:1,labelWidth:'80',style:'text-align:left;'});
	perfilForm.addChild(new dijit.form.FilteringSelect({id:'cmn_perfil',label:'Perfil: ',promptMessage:'Seleccione el perfil a utilizar',required:true,disabled:true,searchAttr:'NOMBRE',labelType:'html',forceValidOption:true,store:'null'}));//,onChange:function(){gvarPerfilId = dijit.byId('cmn_perfil').value;}
	dojo.place(perfilForm.domNode,divLogin.domNode,'last');
	perfilForm.startup();
	var botonPerfil = new dijit.form.Button({id:'cargarPerfil',label:'Cargar Perfil',disabled:true,onClick:function(){CargarPerfil();CargarCabecera();}});
	dojo.place(botonPerfil.domNode,divLogin.domNode,'last');
	//Creacion del dialogo
	dialogLogin = new dijit.Dialog({title:'Ingrese sus datos',id:'dialogLogin',style:'width:290px;'});
	dialogLogin.attr('content',divLogin);
	dialogLogin.titleBar.children[1].style.display='none';
	dojo.fadeOut({node:'cmn_mensajes_login'}).play();
	//Se muestra el dialogo
	dialogLogin.show();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function Salir(){
	//limpio contenedores de la pantalla
	if(modoLogin == 'SSO'){
		document.location = "https://ssod2.quinsa.com.ar/pls/orasso/orasso.wwsso_app_admin.ls_logout?p_done_url=https://portald2.quinsa.com.ar/wapiMultiPais";
	}
	
	dijit.byId("mcp").destroyDescendants(true);
	dijit.byId("cmn_cabecera").destroyDescendants(true);
	dijit.byId("menu").destroyDescendants(true);
	//gvarUsuarioId = "";
	//gvarServidor = "";
	//gvarTipoServidor = "";
	//gvarPerfilId = "";
	//Borra la sesion en la BD
	dojo.xhrPost({url:'dbi/perfiles.php?sid='+gvarSID+'&cod=BSU',handleAs:'json',sync:'true',load:function(response){
		//Limpia el Id de sesi�n
		gvarSID = ""; 
		//Muestra el login nuevamente
		dojo.fadeOut({node:'main'}).play();
		if(modoLogin == 'LOC'){
			Login();
		} else {
			document.location = "https://ssod2.quinsa.com.ar/pls/orasso/orasso.wwsso_app_admin.ls_logout?p_done_url=https://portalr2.quinsa.com.ar/wapiMultiPais";
		}
	}});
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function VerificarUsuario(){
	//Validacion del dialogo
	if(!dijit.byId('dialogLogin').validate()){return;}
	//se verifica el usuario
	dojo.xhrPost({url:'dbi/login.php?cod=CS&cmn_servidor='+dijit.byId('cmn_servidor').attr('value')+'&cmn_usuario='+dijit.byId('cmn_usuario').attr('value')+'&cmn_clave='+MD5(dijit.byId('cmn_clave').attr('value')),handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==0){
			gvarSID = response.sid; //Guarda el nuevo SID en la variable global de js (declarada en index.html)
			srvItem = null;
			dijit.byId("cmn_servidor").store.fetchItemByIdentity({
				identity: dijit.byId("cmn_servidor").value, 
				onItem: function(item){ srvItem = item; }
			});

			//Se cargan los perfiles para el usuario correspondiente.
			urlValue = "dbi/perfiles.php?sid=" + gvarSID + "&cod=LPU";
			var perfilesStore = new dojo.data.ItemFileReadStore({url: urlValue});
			dijit.byId("cmn_perfil").attr("store", perfilesStore);
			AutoCompletar(dijit.byId("cmn_perfil"));
			//se habilitan las opciones para la carga de perfil
			dijit.byId("cmn_usuario").attr("disabled",true);
			dijit.byId("cmn_servidor").attr("disabled",true);
			dijit.byId("cmn_clave").attr("disabled",true);
			dijit.byId("verificarUsuario").attr("disabled",true);
			dijit.byId("cmn_perfil").attr("disabled",false);
			dijit.byId("cargarPerfil").attr("disabled",false);			
		}else{
			Mensaje(response.errmsg,"error","login");
			gvarSID = ""; //Limpia la variable global de js (declarada en index.html)
			dijit.byId('cmn_clave').attr('value','');}
	}});
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function VerificarSesion(){
	dojo.xhrPost({url:'dbi/verificarSesion.php?sid='+gvarSID,handleAs:'json',sync:'true',load:function(response){
			if(response.ultimoAcceso){
				var tiempo = parseInt(response.tiempoParaVencer) * 1000;
				if (tiempo <= 0) {
					//Muestro dialogo de salida
					dialog = new dijit.Dialog({title:'Aviso',id:'dialogSesion'});
					var texto = '<div style="width:250px;text-align:center;">La sesion ya no esta activa<br><br>';
					texto +='<button id="salirSesion" dojoType="dijit.form.Button" iconClass="aceptarIcon" onclick="dijit.byId(\'dialogSesion\').hide();Salir();dijit.byId(\'dialogSesion\').destroyRecursive();">Aceptar</button>';
					texto +='</div>';
					pane = document.createElement('div');
					pane.innerHTML = texto;
					dialog.attr("content",pane);
					dijit.byId("dialogSesion").titleBar.children[1].style.display='none';
					dialog.show();
					return;				
				} else {
					gvarTID = setTimeout('VerificarSesion()',tiempo);
					return;
				}
			}
			else{
				if (response.errcode=='DBI-1'){
					//Muestro dialogo de salida
					dialog = new dijit.Dialog({title:'Aviso',id:'dialogSesion'});
					var texto = '<div style="width:250px;text-align:center;">'+response.errmsg+'<br><br>';
					texto +='<button id="salirSesion" dojoType="dijit.form.Button" iconClass="aceptarIcon" onclick="dijit.byId(\'dialogSesion\').hide();Salir();dijit.byId(\'dialogSesion\').destroyRecursive();">Aceptar</button>';
					texto +='</div>';
					pane = document.createElement('div');
					pane.innerHTML = texto;
					dialog.attr("content",pane);
					dijit.byId("dialogSesion").titleBar.children[1].style.display='none';
					dialog.show();
					return;
				}
			}
		}
	});
}
////////////////////////////////////////////////---PERFIL---//////////////////////////////////////////////////////////
function CargarPerfil(){
	var resp = '';
	//Validacion del dialogo
	if(dijit.byId('dialogLogin')){
		if(!dijit.byId('dialogLogin').validate()){return;}
	}
	//carga de responsabilidad_id dentro de la base de datos
	if(dijit.byId('perfil2')){
		resp=dijit.byId('perfil2').attr('value');
	}
	else{
		resp=dijit.byId('cmn_perfil').attr('value');
	}
	dojo.xhrPost({url:'dbi/perfiles.php?sid='+gvarSID+'&cod=MPU&responsabilidad_id='+resp,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==0){
			VerificarSesion();
			CargarMenu();
			if(dijit.byId("dialogLogin")){
				dijit.byId('dialogLogin').hide();
				dijit.byId("dialogLogin").destroyRecursive();
			}
			dijit.byId("mcp").destroyDescendants(true);
			dojo.fadeIn({node:'main',duration:1000}).play();
		}else{Mensaje(response.errmsg,'error','login');}
	}});
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarMenu(){
	if(dijit.byId('treeMenu')){dijit.byId('treeMenu').destroy();}
	var menuModel = new dijit.tree.ForestStoreModel({store: new dojo.data.ItemFileReadStore({url:'dbi/menu.php?sid='+gvarSID,urlPreventCache:true}),jsId: "menuModel",query: {tipo: "grupoMenu"},rootId: "menuRoot",rootLabel: "Menu",childrenAttrs: ["children"]});
	dijit.byId('menu').attr('content',new dijit.Tree({model:menuModel,id:"treeMenu",showRoot:false,onClick:function(item){ClickMenu(item);}}));
	storeAccion = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=14',urlPreventCache:true});
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function ClickMenu(item){
	if(item){
		dijit.byId("mcp").destroyDescendants();
		pages = "pages/";
		direccion = pages;
		if(dijit.byId('treeMenu').model.store.getValue(item, "url").substring(0,4)=='CMN_'){direccion = 'common/' + pages;}
		urlFinal = direccion + dijit.byId('treeMenu').model.store.getValue(item, "url");
		//if(modoLogin == 'LOC')&&(urlFinal=='CMN_usuarios.html'){urlFinal = 'CMN_usuarios_loc.html'};
		dijit.byId("mcp").attr("href", urlFinal);}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function CrearBotones(){
 	var paginaAct = dijit.byId("mcp").href.replace("pages/","");
	paginaAct = paginaAct.replace("common/","");
	var botones = function(items, request){
		var temmporal = null;
		for(var i=0;i<items.length;i++){
			if(items[i].html_id[0]=='buscarMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'buscarMaster',style:'padding-left:3px;padding-right:3px;',label:'Buscar',showLabel:false,iconClass:'buscarIcon',onClick:function(){BuscarMaster();}}),0);
				dijit.byId('toolbarMaster').addChild(new dijit.form.DropDownButton({label:'B&uacute;squeda avanzada',style:'padding-left:3px;padding-right:3px;',id:'filtrMaster',iconClass:'filtroIcon',showLabel:false,dropDown:new dijit.TooltipDialog({id:'filtrosMaster'})}),1);
				dijit.byId('toolbarMaster').addChild(new dijit.ToolbarSeparator({id:'separatorMaster',style:'padding-left:3px;padding-right:3px;'}),2);}
			if(items[i].html_id[0]=='nuevoMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'nuevoMaster',style:'padding-left:3px;padding-right:3px;',label:'Nuevo',showLabel:false,iconClass:'nuevoIcon',onClick:function(){NuevoMaster();}}),3);}
			if(items[i].html_id[0]=='depurarMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'depurarMaster',style:'padding-left:3px;padding-right:3px;',label:'Depurar',showLabel:false,iconClass:'depurarIcon',onClick:function(){DepurarMaster();}}),3);}
			if(items[i].html_id[0]=='buscarLogMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'buscarLogMaster',style:'padding-left:3px;padding-right:3px;',label:'Nuevo',showLabel:false,iconClass:'nuevoIcon',onClick:function(){NuevoMaster();}}),3);}
			if(items[i].html_id[0]=='editarMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'editarMaster',style:'padding-left:3px;padding-right:3px;',label:'Editar',showLabel:false,iconClass:'editarIcon',disabled:true,onClick:function(){EditarMaster();}}),4);}
			if(items[i].html_id[0]=='editarMasterEA')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'editarMasterEA',style:'padding-left:3px;padding-right:3px;',label:'Editar',showLabel:false,iconClass:'editarIcon',disabled:true,onClick:function(){EditarMasterEA();}}),4);}
			if(items[i].html_id[0]=='ajustarAprobadaMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'editarMasterAW',style:'padding-left:3px;padding-right:3px;',label:'Ajustar Propuestas Aprobadas',showLabel:false,iconClass:'ajustarIcon',disabled:true,onClick:function(){EditarMasterAW();}}),4);}
			if(items[i].html_id[0]=='copiarMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'copiarMaster',style:'padding-left:3px;padding-right:3px;',label:'Copiar',showLabel:false,iconClass:'copiarIcon',disabled:true,onClick:function(){CopiarMaster();}}),5);}
			if(items[i].html_id[0]=='copiarMasterEA')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'copiarMasterEA',style:'padding-left:3px;padding-right:3px;',label:'Copiar',showLabel:false,iconClass:'copiarIcon',disabled:true,onClick:function(){CopiarMasterEA();}}),5);}
			if(items[i].html_id[0]=='eliminarMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'eliminarMaster',style:'padding-left:3px;padding-right:3px;',label:'Eliminar',showLabel:false,iconClass:'eliminarIcon',disabled:true,onClick:function(){EliminarMaster();}}),6);}
			if(items[i].html_id[0]=='eliminarMasterEA')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'eliminarMasterEA',style:'padding-left:3px;padding-right:3px;',label:'Eliminar',showLabel:false,iconClass:'eliminarIcon',disabled:true,onClick:function(){EliminarMasterEA();}}),6);}
			if(items[i].html_id[0]=='enviarAMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'enviarAMaster',style:'padding-left:3px;padding-right:3px;',label:'Enviar',showLabel:false,iconClass:'envioIcon',disabled:true,onClick:function(){EnviarAMaster();}}),7);}
			if(items[i].html_id[0]=='enviarWMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'enviarWMaster',style:'padding-left:3px;padding-right:3px;',label:'Enviar',showLabel:false,iconClass:'envioLotusIcon',disabled:true,onClick:function(){EnviarWMaster();}}),7);}
			if(items[i].html_id[0]=='enviarMasivoAMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'enviarMasivoAMaster',style:'padding-left:3px;padding-right:3px;',label:'Envio Masivo',showLabel:false,iconClass:'envioMasivoIcon',disabled:true,onClick:function(){EnviarMasivoAMaster();}}),8);}
			if(items[i].html_id[0]=='enviarMasivoWMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'enviarMasivoWMaster',style:'padding-left:3px;padding-right:3px;',label:'Envio Masivo',showLabel:false,iconClass:'envioLotusMasivoIcon',disabled:true,onClick:function(){EnviarMasivoWMaster();}}),8);}
			if(items[i].html_id[0]=='auditoriaMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.DropDownButton({label:'Informaci&oacute;n de auditoria',style:'padding-left:3px;padding-right:3px;',id:'auditMaster',showLabel:false,disabled:true,iconClass:'auditIcon',dropDown:new dijit.TooltipDialog({id:'auditoriaMaster',autofocus:false,onOpen:function(){AuditoriaMaster();}})}),9);}//
			if(items[i].html_id[0]=='bajaexcelMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'bajaexcelMaster',style:'padding-left:3px;padding-right:3px;',label:'Bajar a Excel',showLabel:false,disabled:true,iconClass:'excelIcon',onClick:function(){BajadaExcelMaster();}}),10);}	
			if(items[i].html_id[0]=='bajarAdjuntoMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'bajarAdjuntoMaster',style:'padding-left:3px;padding-right:3px;',label:'Bajar archivo adjunto',showLabel:false,iconClass:'adjuntoIcon',disabled:true,onClick:function(){BajarAdjuntoMaster();}}),11);}
			if(items[i].html_id[0]=='bajarPlantillaMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'bajarPlantillaMaster',style:'padding-left:3px;padding-right:3px;',label:'Descargar Plantilla',showLabel:true,iconClass:'excelIcon',disabled:true,onClick:function(){BajarPlantillaMaster();}}),12);}
			if(items[i].html_id[0]=='cargaMasivaMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'cargaMasivaMaster',style:'padding-left:3px;padding-right:3px;',label:'Carga Masiva',showLabel:true,iconClass:'adjuntoIcon',disabled:true,onClick:function(){CargaMasivaMaster();}}),13);}
			if(items[i].html_id[0]=='blanquearClaveMaster')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'blanquearClaveMaster',style:'padding-left:3px;padding-right:3px;',label:'Cambiar contrase&ntilde;a',showLabel:false,iconClass:'claveIcon',disabled:true,onClick:function(){PreContrasenaMaster();}}),14);}
			if(items[i].html_id[0]=='bajarAdjuntoAcre')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'bajarAdjuntoAcre',style:'padding-left:3px;padding-right:3px;',label:'Bajar Adjuntos',showLabel:true,iconClass:'adjuntoIcon',disabled:true,onClick:function(){BajarAdjuntoAcre();}}),15);}	
			if(items[i].html_id[0]=='eliminarAdjuntoAcre')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'eliminarAdjuntoAcre',style:'padding-left:3px;padding-right:3px;',label:'Eliminar Adjunto',showLabel:true,disabled:true,iconClass:'eliminarIcon',disabled:true,onClick:function(){EliminarAdjuntoAcre();}}),16);}	
			if(items[i].html_id[0]=='adjuntarArchivoMasivo')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'adjuntarArchivoMasivo',style:'padding-left:3px;padding-right:3px;',label:'Adjuntar',showLabel:true,iconClass:'adjuntoIcon',disabled:true,onClick:function(){AdjuntarArchivoMasivo();}}),17);}		
			if(items[i].html_id[0]=='salir')
				{dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'salir',style:'padding-left:2px;padding-right:2px;',label:'Salir',showLabel:false,disabled:false,iconClass:'cancelarIcon',onClick:function(){Salir();}}),18);}		
			if(items[i].html_id[0]=='nuevoDetail')
				{dijit.byId('toolbarDetail').addChild(new dijit.form.Button({id:'nuevoDetail',style:'padding-left:3px;padding-right:3px;',label:'Nuevo',showLabel:false,iconClass:'nuevoIcon',disabled:true,onClick:function(){NuevoDetail();}}),0);}
			if(items[i].html_id[0]=='editarDetail')
				{dijit.byId('toolbarDetail').addChild(new dijit.form.Button({id:'editarDetail',style:'padding-left:3px;padding-right:3px;',label:'Editar',showLabel:false,iconClass:'editarIcon',disabled:true,onClick:function(){EditarDetail();}}),1);}
			if(items[i].html_id[0]=='copiarDetail')
				{dijit.byId('toolbarDetail').addChild(new dijit.form.Button({id:'copiarDetail',style:'padding-left:3px;padding-right:3px;',label:'Copiar',showLabel:false,iconClass:'copiarIcon',disabled:true,onClick:function(){CopiarDetail();}}),2);}
			if(items[i].html_id[0]=='eliminarDetail')
				{dijit.byId('toolbarDetail').addChild(new dijit.form.Button({id:'eliminarDetail',style:'padding-left:3px;padding-right:3px;',label:'Eliminar',showLabel:false,iconClass:'eliminarIcon',disabled:true,onClick:function(){EliminarDetail();}}),3);}
			if(items[i].html_id[0]=='auditoriaDetail')
				{dijit.byId('toolbarDetail').addChild(new dijit.form.DropDownButton({label:'Informaci&oacute;n de auditoria',style:'padding-left:3px;padding-right:3px;',id:'auditDetail',showLabel:false,disabled:true,iconClass:'auditIcon2',dropDown:new dijit.TooltipDialog({id:'auditoriaDetail',autofocus:false,onOpen:function(){AuditoriaDetail();}})}),4);}
			if(items[i].html_id[0]=='bajaexcelDetail')
				{dijit.byId('toolbarDetail').addChild(new dijit.form.Button({id:'bajaexcelDetail',style:'padding-left:3px;padding-right:3px;',label:'Bajar a Excel',showLabel:false,disabled:true,iconClass:'excelIcon',onClick:function(){BajadaExcelDetail();}}),5);}
		}
	if(dojo.isFunction(DojoAddOnLoad)){DojoAddOnLoad();}
	}
	storeAccion.fetch({query: {pagina:paginaAct}, onComplete: botones}); 
}
////////////////////////////////////////////////---PASSWORD---//////////////////////////////////////////////////////////
function DescargarManual(){
		var urlValue = "dbi/manual.php?sid="+gvarSID;
		window.open(urlValue,"Manual","menubar=no,width=300,height=300,toolbar=no,resizable=yes");
}
////////////////////////////////////////////////---PASSWORD---//////////////////////////////////////////////////////////
function cambiarContrasena(){
	// Re-validate form fields
	var formPass = dijit.byId("formPass");
	var firstInvalidWidget = null;

	dojo.every(formPass.getDescendants(), function(widget){
		if (firstInvalidWidget == null) { //si a�n no encontr� ninguno con valores inv�lidos...
			if (!widget.isValid || !widget.isValid()) {
				   firstInvalidWidget = widget;
			}
		}	
		return true;
	}); 

	pass1 = dijit.byId("pass1").attr("value");
	pass2 = dijit.byId("pass2").attr("value");
	
  	if ((firstInvalidWidget != null) || (pass1 != pass2)) {
		// set focus to first field with an error
		firstInvalidWidget.focus();
		console.log(firstInvalidWidget);
		return;
	}
	else {
		passOld = MD5(dijit.byId("passOld").value);
		passNew = MD5(pass1);
		var urlValue = "dbi/e.php?sid="+gvarSID+"&dmlid=16&passOld="+passOld+"&passNew="+passNew;
 		dojo.xhrPost({
			url: urlValue,
			handleAs: "json",
			sync: "true",
			load: function(response) {
				if (response.errcode == 0) {
					//cierra el dialogo de login
 					dijit.byId("dialogPass").hide();
					dijit.byId('dialogPass').destroyRecursive();
					PopUp("Mensaje", 'Contrase&ntilde;a cambiada con exito');
				} else {
					PopUp("Error", response.errmsg);
				}
			}
		});
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function cambiarPass(){
	// DIALOGO DE CAMBIO DE CONTRASE�A
	dialog = new dijit.Dialog({ title: "Ingrese sus datos", id: "dialogPass"});
	var texto ='<form name="formPass" id="formPass" dojoType="dijit.form.Form" />';
 	texto +='<table>';
	texto +='<tr><td><label for="passOld">Vieja contrase&ntilde;a:</label></td>';
	texto +='<td><input type="password" id="passOld" name="passOld" size="20" maxlength="20" dojoType="dijit.form.ValidationTextBox" required="true" promptMessage="Ingrese la vieja contrase&ntilde;a" invalidMessage="La contrase&ntilde;a es requerida" trim="true"/></td>';
	texto +='</tr>';
	texto +='<tr><td><label for="pass1">Nueva contrase&ntilde;a:</label></td>';
	texto +='<td><input type="password" id="pass1" name="pass1" size="20" maxlength="20" dojoType="dijit.form.ValidationTextBox" required="true" promptMessage="Ingrese la nueva contrase&ntilde;a" invalidMessage="Las contrase&ntilde;as nuevas deben ser iguales" trim="true"/></td>';
	texto +='</tr>';
	texto +='<tr><td><label for="pass2">Nueva contrase&ntilde;a:</label></td>';
	texto +='<td><input type="password" id="pass2" name="pass2" size="30" maxlength="30" dojoType="dijit.form.ValidationTextBox" required="true" promptMessage="Ingrese la nueva contrase&ntilde;a" invalidMessage="Las contrase&ntilde;as nuevas deben ser iguales" trim="true"/></td>';
	texto +='</tr>';
	texto +='</table>';
	texto +='</form>';
	// BOTON DE CAMBIAR CONTRASE�A Y CANCELAR
    texto +='<div style="text-align:center;"><button id="cambiarPass" dojoType="dijit.form.Button" onclick="cambiarContrasena()" label="Cambiar" iconClass="claveIcon"></button>';
	texto +='<button id="cambiarPassC" dojoType="dijit.form.Button" onclick=\'dijit.byId("dialogPass").destroyRecursive();dijit.byId("dialogPass").destroyRecursive();\' label="Cancelar" iconClass="cancelarIcon"></button></div>';
	pane = document.createElement('div');
	pane.innerHTML = texto;
	dialog.attr("content",pane);
	dijit.byId("dialogPass").titleBar.children[1].style.display='none';
	dialog.show();
}
////////////////////////////////////////////////---MENSAJES---//////////////////////////////////////////////////////////
function PopUp(titulo,msg,funcion1,funcion2,caller){
	dialog = new dijit.Dialog({ title: titulo });
	pane = document.createElement('div');
	funcionA = 'dialog.hide();' + funcion1;
	if(!funcion1){funcionA = 'dialog.hide();';}
	funcionC = 'dialog.hide();' + funcion2;
	if(!funcion2){funcionC = 'dialog.hide();';}
	botonAceptar = '<td><div style="text-align:center;"><button id='+'"btnaceptar"'+' dojoType='+'"dijit.form.Button"'+'onclick="'+funcionA+'" iconClass='+'"aceptarIcon"'+'label='+'"Aceptar"'+'/></div></td>';
	//botonAceptar = '<button dojoType='+'"dijit.form.Button"'+'onclick="'+funcionA+'" iconClass='+'"aceptarIcon"'+'label='+'"Aceptar"'+'/>';
	botonCancelar = '<td><div style="text-align:center;"><button dojoType='+'"dijit.form.Button"'+'onclick="'+funcionC+'" iconClass='+'"cancelarIcon"'+'label='+'"Cancelar"'+'/></div></td>';
	//botonCancelar = '<button dojoType='+'"dijit.form.Button"'+'onclick="'+funcionC+'" iconClass='+'"cancelarIcon"'+'label='+'"Cancelar"'+'/>';
	if(!funcion1){botonCancelar = '';}
	botones = '<table width="320px" align="center"><tr>'+ botonAceptar + botonCancelar +'</tr></table>';
	//botones = '<table><tr><td>'+'<div style='+'"text-align:center;"'+'>'+ botonAceptar +'</div></td><td>'+'<div style='+'"text-align:center;"'+'>'+ botonCancelar +'</div></td></tr></table>';
	pane.innerHTML = '<div style='+'"width:320px;text-align:center;"'+'>'+ msg +'</div>'+ '<br>' + botones;
	dialog.attr("content",pane);
	dijit.byId("btnaceptar").focus();
	var callerOldZIndex = null;
	if (caller) {
		callerOldZIndex = caller.style.zIndex;
		caller.style.zIndex = 98;
	}
	dialog.style.zIndex = 99;
	dialog.show();
	dialog.connect(dialog,"hide",function(e){
			if(caller){
				caller.style.zIndex = callerOldZIndex;
			}
			dialog.style.zIndex = null;
			dialog.destroyRecursive();
	});
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function Mensaje(mensaje,color,tipo){
	switch(color){
		case 'mensaje': dojo.byId('cmn_mensajes_'+tipo).style.background='#00FF00';break;
		case 'advertencia': dojo.byId('cmn_mensajes_'+tipo).style.background='yellow';break;
		case 'error': dojo.byId('cmn_mensajes_'+tipo).style.background='red';break;}
	dojo.byId('cmn_mensajes_'+tipo).innerHTML = mensaje;
	dojo.fadeIn({node:'cmn_mensajes_'+tipo,duration:1000}).play();
	dojo.byId('cmn_mensajes_'+tipo).style.cursor='pointer';
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarCabecera(){
	//Defino la cabecera
	var cabecera = '<table width=100%>';
	cabecera += '<TR>';
	cabecera += '<TD style="padding-bottom:4px;border-bottom:1px solid #ccc" colspan=3 width="260px"><H1 style="margin-top:0px;">WAPI</H1></TD>';
	cabecera += '<TD rowspan=4 align="RIGHT"><img src="images/abinbev.jpg"/></TD>';
	cabecera += '<TD style="width:70px;" rowspan=4 align="RIGHT"><img src="images/thinkIT.jpg"/></TD>';
	cabecera += '</TR>';
	cabecera += '<TR>';
	cabecera += '<TD style="padding-top:2px;">Servidor: </TD>';
	cabecera += '<TD style="padding-top:2px;"><div id="labelServidor"></div></TD>';
	cabecera += '<TD align="right"><div id="labelTipoServidor"></div></TD>';
	cabecera += '<TD>&nbsp;</TD>';
	cabecera += '</TR>';
	cabecera += '<TR>';
	cabecera += '<TD style="padding-top:2px;">Usuario: </TD>';
	cabecera += '<TD style="padding-top:2px;"><div id="labelUsuario"></div></TD>';
	cabecera += '<TD style="padding-top:2px;">&nbsp;</TD>';
	cabecera += '<TD style="padding-top:2px;">&nbsp;</TD>';
	cabecera += '</TR>';
	cabecera += '<TR>';
	cabecera += '<TD width="50px">Perfil: </TD>';
	cabecera += '<TD width="150px"><select style="font-size:10px;width:160px;" dojoType="dijit.form.FilteringSelect" searchAttr="NOMBRE" name="perfil2" id="perfil2" required="true" promptMessage="Seleccione el perfil a utilizar">';
	cabecera += '<script type="dojo/method" event="onChange" args="value">CargarPerfil();</script>';
	cabecera += '</select>';
	cabecera += '</TD>';
	cabecera += '<TD width="100px">';
	if (modoLogin == 'LOC'){
		cabecera += '<img id="claveImg" style="margin-left:2px;" src="images/claveIcon.gif" width="20" height="20" title="Cambiar Contrase&ntilde;a" onclick="cambiarPass()" onmouseover="this.style.cursor=\'pointer\'">';
	}
	cabecera += '<img style="margin-left:2px;" src="images/cerrarIcon2.gif" width="20" height="20" title="Salir" onclick="Salir()" onmouseover="this.style.cursor=\'pointer\'">';
	cabecera += '<img style="margin-left:2px;" src="images/help.gif" width="16" height="16" title="Manuales" onclick="DescargarManual()" onmouseover="this.style.cursor=\'pointer\'">';
	cabecera += '</TD>';
	cabecera += '<TD>&nbsp;</TD>';
	cabecera += '</TR>';
	cabecera += '</table>';
	dijit.byId('cmn_cabecera').attr('content',cabecera);
	//Cargo variables de la cabecera
	dojo.byId('labelServidor').innerHTML = dijit.byId('cmn_servidor').attr('item').srvDescripcion[0];
	dojo.byId('labelTipoServidor').innerHTML = dijit.byId('cmn_servidor').attr('item').srvTipo[0]+'&nbsp;<img style="vertical-align:middle;" width="14" height="14" src="images/'+dijit.byId('cmn_servidor').attr('item').srvTipo[0]+'.gif" />';
	dojo.byId('labelUsuario').innerHTML = dijit.byId('cmn_usuario').attr('value');
	dijit.byId('perfil2').attr('store',dijit.byId('cmn_perfil').attr('store'));
	dijit.byId('perfil2').attr('value',dijit.byId('cmn_perfil').attr('value'));
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//creacion de formato para checkbox no editable en grilla
function formatCheckbox(value){
	if(value=='on'){return '<div style="text-align:center"><img align="center" width="15" height="15" src="images/checkedIcon.gif" /></div>';}
	if(value=='false'){return '<div style="text-align:center"><img align="center" width="15" height="15" src="images/nocheckedIcon.gif" /></div>';}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//creacion de formato para checkbox no editable en grilla para los errores
function formatCheckbox2(value){
	if(value!=''){return '<div style="text-align:center"><img align="center" width="15" height="15" src="images/checkedIcon.gif" title="'+value+'" /></div>';}
	else{return '<div style="text-align:center"><img align="center" width="15" height="15" src="images/nocheckedIcon.gif" title="'+value+'" /></div>';}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Filtering Select - Posicionar un registro como default si es el unico
function AutoCompletar(filteringSelect){
	var SeleccionarItem = function(items,request){
		if(items.length==1){
			filteringSelect.attr('value',filteringSelect.store.getIdentity(items[0]));
		}
	}
	filteringSelect.store.fetch({query:{},onComplete:SeleccionarItem});
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Filtering Select - Posicionar el primer registro como default
function AutoCompletarPrimero(filteringSelect){
	var SeleccionarItem = function(items,request){
		filteringSelect.attr('value',filteringSelect.store.getIdentity(items[0]));
	}
	filteringSelect.store.fetch({query:{},onComplete:SeleccionarItem});
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Filtering Select - Posicionar X registro por descripcion como default
function AutoCompletarDesc(filteringSelect,descripcion){
	var SeleccionarItem = function(items,request){
		filteringSelect.attr('value',filteringSelect.store.getIdentity(items[0]));
	}
	filteringSelect.store.fetch({query:{detalle:descripcion},onComplete:SeleccionarItem});
}