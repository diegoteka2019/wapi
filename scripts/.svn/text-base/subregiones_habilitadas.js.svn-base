//TITULOS
var titulos =  new Array('Sub Regiones Habilitadas');
//DMLs
var dmlBuscarMaster = '10704';
var dmlnuevoM = '';
var dmleditarM = '10702';
var dmlbuscarUnicoM = ''; 
var dmleliminarM = '';
var dmlAuditoriaMaster = '10706';
var dmlgrabarM = '';
var areas = '';
var subregiones = '';
var habilitada = '';
var onpremise = '';
var booPrimero = true;
var booInvalid = false;
//COLUMNAS
var columnasM = new Array('area_id','subregion_id','sub_region_desc','habilitada','onpremise','present');
var tiposM = new Array('text','text','text','text','text');
//DESCRIPCIONES
var descripcionesM = new Array('Area ID','Subregi&oacute;n ID','Subregi&oacute;n','Habilitada','On Premise','En Tabla');
//PRIMARY KEY
var clavesM = new Array('area_id','subregion_id');
//FILTROS
var filtroMaster = new Array('area_id');
var labelFiltroMaster = new Array('Area: ');
var mensajeFiltroMaster = new Array('Elija el Area');
var requeridoFiltroMaster = new Array(true);
var tipoFiltroMaster = new Array('FilteringSelect');
var searchAttrFiltroMaster = new Array('detalle');
var selectFiltroMaster = new Array('10707');
//FORMULARIO
var camposFormM = new Array('tipo_descuento_id','credito','debito');
var labelFormM = new Array('C&oacute;digo: ','NC (Nota de Cr&eacute;dito)','ND (Nota de D&eacute;bito)');
var requeridoFormM = new Array(true,false,false);
var regexpFormM = new Array('.*','.*','.*');
var mensajesFormM = new Array('Ingrese el Descuento','','');
var dojoTypeFormM = new Array('FilteringSelect','RadioButton','RadioButton');
var searchAttrFormM = new Array('detalle','','');
var selectFormM = new Array('10808','','');
//Carga las estructuras de las tablas
var layoutMaster = [
    {width: 'auto', field: columnasM[0], name: descripcionesM[0],hidden:true},
	{width: 'auto', field: columnasM[1], name: descripcionesM[1],hidden:true},
    {width: 'auto', field: columnasM[2], name: descripcionesM[2]},
    {width: 'auto', field: columnasM[3], name: descripcionesM[3],editable:true, type:dojox.grid.cells.Bool},
	{width: 'auto', field: columnasM[4], name: descripcionesM[4],editable:true, type:dojox.grid.cells.Bool},
	{width: 'auto', field: columnasM[5], name: descripcionesM[5],hidden:true}];
//campos de auditoria
var camposAuditoriaM = new Array('usr_altam','fecha_altam','usr_modifm','fecha_modifm');
var labelAuditoria = new Array('Creado por: ','Fecha de creaci&oacute;n: ','Modificado por: ','Fecha de modificaci&oacute;n: ');
//Carga de titulos
document.getElementById('bloqueMaster').innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
function test(){console.log('hola');}
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	//Modificacion de label e iconos de los botones
	if(dijit.byId('buscarMaster')){dijit.byId('buscarMaster').destroy();}
	if(dijit.byId('editarMaster')){
		dijit.byId('editarMaster').attr('label','Actualizar');
		dijit.byId('editarMaster').attr('iconClass','guardarIcon');
		dojo.place('<div id="habilitarS" class="dijitToolbar" style="text-align:right;height:24px;padding-right:300px"><label for="selec">Habilitar/Deshabilitar Todas</label><input id="selec" type="checkbox" title="Habilitar/Deshabilitar Todas" onclick="CheckColumnH(this);"/><id="onPremiseS" class="dijitToolbar" style="text-align:right;height:24px;padding-left:180px;"><label for="selec">Habilitar Todos On Premise</label><input id="selec" type="checkbox" title="Habilitar Todos On Premise" onclick="CheckColumnO(this);"/></div>',dojo.byId('cabecera'));
		}
	ArmadoFiltroYAuditoria();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedMaster(){
	HabilitarBotonesMaster(2,false);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function HabilitarBotonesMaster(tipo,bool){
	if(tipo==1){
		if(dijit.byId('bajaexcelMaster')){dijit.byId('bajaexcelMaster').attr('disabled',bool);}}
	if(tipo==2){
		if(dijit.byId('editarMaster')){dijit.byId('editarMaster').attr('disabled',bool);}
		if(dijit.byId('copiarMaster')){dijit.byId('copiarMaster').attr('disabled',bool);}
		if(dijit.byId('eliminarMaster')){dijit.byId('eliminarMaster').attr('disabled',bool);}
		if(dijit.byId('auditMaster')){dijit.byId('auditMaster').attr('disabled',bool);}
		if(dijit.byId('blanquearClaveMaster')){dijit.byId('blanquearClaveMaster').attr('disabled',bool);}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ArmadoFiltroYAuditoria(){
	if(dijit.byId('filtrMaster')){
		//Limpio Filtros
		if(dijit.byId('filtro0')){for(i=0;i<filtroMaster.length;i++){dijit.byId('filtro'+i).destroy();}}
		//Creo Filtros
		var divFiltros = new dijit.layout.ContentPane({style:'width:350px;'});
		var tablaFiltros = new dojox.layout.TableContainer({cols:1});
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='TextBox'){tablaFiltros.addChild(new dijit.form.TextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],onChange:function(){dijit.byId('filtro5').constraints.min = arguments[0];}}));}if(dijit.byId('filtro5')){dijit.byId('filtro5').attr('onChange',function(){dijit.byId('filtro4').constraints.max = arguments[0];})}
			if(tipoFiltroMaster[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i],required:requeridoFiltroMaster[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[i]})}));}}
		
		AutoCompletar(dijit.byId('filtro0'));
		
		divFiltros.attr('content',tablaFiltros);
		var botonBuscar = new dijit.form.Button({label:'Buscar',type:'button',onClick:function(){VerificarFiltro();}},document.createElement('div'));
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
		if(dojoTypeFormM[i]=='FilteringSelect'){tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[i],label:labelFormM[i],searchAttr:searchAttrFormM[i],promptMessage:mensajesFormM[i],required:requeridoFormM[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[i]})}));}
		if(dojoTypeFormM[i]=='CheckBox'){tablaForm.addChild(new dijit.form.CheckBox({id:camposFormM[i],title:labelFormM[i],promptMessage:mensajesFormM[i],required:requeridoFormM[i]}));}
		if(dojoTypeFormM[i]=='RadioButton'){tablaForm.addChild(new dijit.form.RadioButton({id:camposFormM[i],title:labelFormM[i],value:i}));}
	}
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
function VerificarFiltro(){
	//Validacion de que el formulario esté bien cargado
	if(dijit.byId('filtrosMaster').validate()){BuscarMaster();dijit.byId('filtrosMaster').onCancel();}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMaster(){
	//Armado de URL
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	if(filtroMaster.length>0){
		for(i=0;i<filtroMaster.length;i++){
		urlValue = urlValue +'&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');}}
	gridMaster.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	gridMaster.attr('autoWidth',true);
	gridMaster.update();
	gridMaster.selection.clear();
	HabilitarBotonesMaster(1,false);
	HabilitarBotonesMaster(2,true);
	//Muestro la cantidad obtenida
	gridMaster.store.fetch({query:{},onComplete:function(items,request){document.getElementById('cantidadObtenidaMaster').innerHTML='Registros:'+items.length;dijit.byId('cmn_mensajes').hide();}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMaster(){
		 areas = '';
		 subregiones = '';
		 habilitada = '';
		 onpremise = '';
		 booPrimero = true;
		 booInvalid = false;
		//recorro el store
		var generarArrays = function(item){
				var hab = dijit.byId('gridMaster').store.getValue(item, columnasM[3]);
				var onp = dijit.byId('gridMaster').store.getValue(item, columnasM[4]);
				var pres = dijit.byId('gridMaster').store.getValue(item, columnasM[5]);
				if ((hab == false) && (onp == true)){
					booInvalid = true;
				}
					if (!((pres == false) && (hab == false))){
					if (booPrimero == true) {
						booPrimero = false;
					} else {
						areas = areas + ',';
						subregiones = subregiones + ',';
						habilitada = habilitada + ',';
						onpremise = onpremise + ',';
					}
					areas = areas + dijit.byId('gridMaster').store.getValue(item, columnasM[0]);
					subregiones = subregiones + dijit.byId('gridMaster').store.getValue(item, columnasM[1]);
					habilitada = habilitada + dijit.byId('gridMaster').store.getValue(item, columnasM[3]);
					onpremise = onpremise + dijit.byId('gridMaster').store.getValue(item, columnasM[4]);
				}
		}
		var grabarCambios = function(items, request){
			if(booInvalid==true){
				PopUp('Atenci&oacute;n', 'Solo puede marcar una Subregion onpremise si la misma se encuentra habilitada');
				return;
			}
			if(areas==''||subregiones==''||habilitada==''||onpremise==''){return;}
			dmlgrabarM = dmleditarM;
			procesando.show();
			//Generación de la URL
			var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM+'&areas='+areas+'&subregiones='+subregiones+'&habilitada='+habilitada+'&onpremise='+onpremise;
			//Grabación de datos en la base de datos
			dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
				if (response.errcode==0){
					BuscarMaster();//Refresco del gridMaster
					procesando.hide();
					dijit.byId('gridMaster').store.save();
					Mensaje('Los cambios se han realizado exitosamente','mensaje','master');
				}else{
					//BuscarMaster();//Refresco del gridMaster
					procesando.hide();
					PopUp('Error', response.errmsg);
				}
			}});
		}
		dijit.byId('gridMaster').store.fetch({query: {}, onItem: generarArrays, onComplete: grabarCambios});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CopiarMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.BorderContainer({style:'text-align:center;background-color:white;'});
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
	var urlValue ='dbi/e.php?sid='+gvarSID+'&dmlid='+dmleliminarM;
	mensaje='Est&aacute; seguro que desea eliminar el Tipo de Descuento <b>'+items[0][columnasM[1]]+'</b>';
	for(i=0;i<clavesM.length;i++){
		urlValue+='&'+clavesM[i]+'='+items[0][clavesM[i]];
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
			Mensaje('El registro ha sido eliminado exitosamente','mensaje','master');
		}else{procesando.hide();PopUp('Error', response.errmsg);}
		}
	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function AuditoriaMaster(){
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlAuditoriaMaster;
	var items = gridMaster.selection.getSelected();
	for(i=0;i<clavesM.length;i++){urlValue +='&'+clavesM[i]+'='+items[0][clavesM[i]];}
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
	if(dijit.byId('gridMaster').canEdit()){
		procesando.show();
		//Generación de la URL
		var urlValue ='dbi/e.php?sid='+gvarSID+'&dmlid='+dmlgrabarM;
		for(i=0;i<camposFormM.length;i++){
			urlValue = urlValue +'&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).attr('value');}
	}
	else{//Validacion de que el formulario esté bien cargado
		for(i=0;i<camposFormM.length;i++){
			if(!dijit.byId(dojoTypeFormM[i])=='CheckBox'){if(!dijit.byId(camposFormM[i]).isValid()){dijit.byId(camposFormM[i]).focus();return;}}}
		dijit.byId('dialogMaster').hide();
		procesando.show();
		//Habilito los campos primary de vuelta, de lo contrario no se pasan por post
		for(i=0;i<clavesM.length;i++){dijit.byId(camposFormM[i]).attr('disabled',false);}
		//Generación de la URL
		var urlValue ='dbi/e.php?sid='+gvarSID+'&dmlid='+dmlgrabarM;
		for(i=0;i<camposFormM.length;i++){
			urlValue = urlValue +'&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).attr('value');}
	}
	//Grabación de datos en la base de datos
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if (response.errcode==0){
			CancelarMaster();//Elimino el dialogo
			BuscarMaster();//Refresco del gridMaster
			procesando.hide();
			Mensaje('Los cambios se han realizado exitosamente','mensaje','master');
		}else{procesando.hide();dijit.byId('dialogMaster').show();PopUp('Error', response.errmsg);}
	}});
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
function CheckColumnH(checkbox){
	if(dijit.byId('gridMaster').store){
		 areas = '';
		 subregiones = '';
		 habilitada = '';
		 onpremise = '';
		 booPrimero = true;
		 booInvalid = false;
				var Checkear = function(item){
				var hab = dijit.byId('gridMaster').store.getValue(item, columnasM[3]);
				var onp = dijit.byId('gridMaster').store.getValue(item, columnasM[4]);
				var pres = dijit.byId('gridMaster').store.getValue(item, columnasM[5]);
				if ((hab == false) && (onp == true)){
					booInvalid = true;
				}
					if (!((pres == false) && (hab == false))){
					if (booPrimero == true) {
						booPrimero = false;
					} else {
						areas = areas + ',';
						subregiones = subregiones + ',';
						habilitada = habilitada + ',';
						onpremise = onpremise + ',';
					}
					areas = areas + dijit.byId('gridMaster').store.getValue(item, columnasM[0]);
					subregiones = subregiones + dijit.byId('gridMaster').store.getValue(item, columnasM[1]);
					habilitada = habilitada + dijit.byId('gridMaster').store.getValue(item, columnasM[3]);
					onpremise = onpremise + dijit.byId('gridMaster').store.getValue(item, columnasM[4]);
				}
						if(dijit.byId('editarMaster')){dijit.byId('editarMaster').attr('disabled',false);}
					dijit.byId('gridMaster').store.setValue(item,columnasM[3],checkbox.checked);
				}
				dijit.byId('gridMaster').store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId('gridMaster').store.save();}});
			}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumnO(checkbox){
	if(dijit.byId('gridMaster').store){
		 areas = '';
		 subregiones = '';
		 habilitada = '';
		 onpremise = '';
		 booPrimero = true;
		 booInvalid = false;
				var Checkear = function(item){
				var hab = dijit.byId('gridMaster').store.getValue(item, columnasM[3]);
				var onp = dijit.byId('gridMaster').store.getValue(item, columnasM[4]);
				var pres = dijit.byId('gridMaster').store.getValue(item, columnasM[5]);
				if ((hab == false) && (onp == true)){
					booInvalid = true;
				}
					if (!((pres == false) && (hab == false))){
					if (booPrimero == true) {
						booPrimero = false;
					} else {
						areas = areas + ',';
						subregiones = subregiones + ',';
						habilitada = habilitada + ',';
						onpremise = onpremise + ',';
					}
					areas = areas + dijit.byId('gridMaster').store.getValue(item, columnasM[0]);
					subregiones = subregiones + dijit.byId('gridMaster').store.getValue(item, columnasM[1]);
					habilitada = habilitada + dijit.byId('gridMaster').store.getValue(item, columnasM[3]);
					onpremise = onpremise + dijit.byId('gridMaster').store.getValue(item, columnasM[4]);
				}
					if(dijit.byId('editarMaster')){dijit.byId('editarMaster').attr('disabled',false);}
					dijit.byId('gridMaster').store.setValue(item,columnasM[4],checkbox.checked);
				}
				dijit.byId('gridMaster').store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId('gridMaster').store.save();}});
			}
}	