//TITULOS
var tituloConAyuda = 'Prorrateo por Marca &nbsp;&nbsp;<img height="12" width="12" src="images/help.gif" alt="Ayuda" onclick="PopUp(\'Ayuda\', \'Haga doble click en el porcentaje para editar\');" style="cursor:pointer;"/>';
var titulos =  new Array(tituloConAyuda);
//DMLs
var dmlBuscarMaster = '10904';
var dmlnuevoM = '';
var dmleditarM = '10902';
var dmlbuscarUnicoM = ''; 
var dmleliminarM = '';
var dmlAuditoriaMaster = '';
var dmlgrabarM = '';
//COLUMNAS
var columnasM = new Array('producto_id','producto_abrev','porcentaje');
var tiposM = new Array('text','text','text');
//DESCRIPCIONES
var descripcionesM = new Array('SKU','Producto','Porcentaje Asignado');
//PRIMARY KEY
var clavesM = new Array('tipo_descuento_id','habilitado');
//FILTROS
var filtroMaster = new Array('area_id','subregion_id','division_id','marca_id');
var labelFiltroMaster = new Array('Area: ','Sub Regi&oacute;n: ','Divisi&oacute;n: ','Marca: ');
var mensajeFiltroMaster = new Array('Elija el Area','Elija la Sub Regi&oacute;n','Elija la Divisi&oacute;n','Elija la Marca');
var requeridoFiltroMaster = new Array(true,true,true,true);
var tipoFiltroMaster = new Array('FilteringSelect','FilteringSelect','FilteringSelect','FilteringSelect');
var searchAttrFiltroMaster = new Array('detalle','detalle','detalle','detalle');
var selectFiltroMaster = new Array('10907','10908','10905','10906');
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
    {width: 'auto', field: columnasM[0], name: descripcionesM[0]},
    {width: 'auto', field: columnasM[1], name: descripcionesM[1]},
    {width: 'auto', field: columnasM[2], name: descripcionesM[2],editable:true}];
//campos de auditoria
var camposAuditoriaM = new Array('usr_altam','fecha_altam','usr_modifm','fecha_modifm');
var labelAuditoria = new Array('Creado por: ','Fecha de creaci&oacute;n: ','Modificado por: ','Fecha de modificaci&oacute;n: ');
//Carga de titulos
document.getElementById('bloqueMaster').innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	//Modificacion de label e iconos de los botones
	if(dijit.byId('buscarMaster')){dijit.byId('buscarMaster').destroy();}
	if(dijit.byId('editarMaster')){
		btn = dijit.byId('editarMaster');
		btn.attr('label','Guardar');
		btn.attr('iconClass','guardarIcon');
	}  
	dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'limpiarMaster',style:'padding-left:3px;padding-right:3px;',label:'Limpiar',showLabel:false,disabled:true,iconClass:'limpiarIcon',onClick:function(){LimpiarMaster();}}))
	ArmadoFiltroYAuditoria();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedMaster(){
	HabilitarBotonesMaster(2,false);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function HabilitarBotonesMaster(tipo,bool){
	if(tipo==1){
		if(dijit.byId('cargaMasivaMaster')){dijit.byId('cargaMasivaMaster').attr('disabled',bool);}
	}
	if(tipo==2){
		if(dijit.byId('editarMaster')){dijit.byId('editarMaster').attr('disabled',bool);}
		if(dijit.byId('copiarMaster')){dijit.byId('copiarMaster').attr('disabled',bool);}
		if(dijit.byId('eliminarMaster')){dijit.byId('eliminarMaster').attr('disabled',bool);}
		if(dijit.byId('auditMaster')){dijit.byId('auditMaster').attr('disabled',bool);}
		if(dijit.byId('blanquearClaveMaster')){dijit.byId('blanquearClaveMaster').attr('disabled',bool);}
		if(dijit.byId('limpiarMaster')){dijit.byId('limpiarMaster').attr('disabled',bool);}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function LimpiarMaster(){
		var ilmpiarItem = function(item){
			dijit.byId('gridMaster').store.setValue(item, columnasM[2], '0.0');
		}
		var aviso = function(items, request){
			var msg = 'Se han colocado todos los porcentajes en 0. <br>'+
					  'Haga clik en Guardar en este momento para borrar el prorrateo correspondiente a:<br>'+
					  'Subregion: <b>'+dijit.byId('filtro1').attr('displayedValue')+'</b> - Marca: <b>'+dijit.byId('filtro3').attr('displayedValue')+'</b>';
			PopUp('Atenci&oacute;n', msg);
			dijit.byId('editarMaster').attr('disabled',false);
		}
		dijit.byId('gridMaster').store.fetch({query: {}, onItem: ilmpiarItem, onComplete: aviso});
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
		//Seteos Especiales para los filtros
		AutoCompletar(dijit.byId('filtro0'));
		//agrego el area a la busqueda de subregion
		dijit.byId('filtro1').store.url += '&area_id='+dijit.byId('filtro0').attr('value');
		//Borrado de subregiones al cambiar el area
		dijit.byId('filtro0').onChange= function(value){dijit.byId('filtro1').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=10908&area_id='+value}));dijit.byId('filtro1').store.fetch();dijit.byId('filtro1').attr('value',null);AutoCompletar(dijit.byId('filtro1'));}
		//agrego division a la busqueda de marcas
		dijit.byId('filtro3').store.url += '&division_id='+dijit.byId('filtro2').attr('value');
		//Borrado de marcas al cambiar la division
		dijit.byId('filtro2').onChange= function(value){dijit.byId('filtro3').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=10906&division_id='+value}));dijit.byId('filtro3').store.fetch();dijit.byId('filtro3').attr('value',null);}
		
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
	dijit.byId('gridMaster').edit.apply();
	if(dijit.byId('gridMaster').store.isDirty()){
		dijit.byId('gridMaster').edit.apply();
		var productos = '';
		var porcentajes = '';
		var porcentajeStr = '';
		var porcentaje = 0;
		var total = 0;
		var booPrimero = true;
		var booInvalid = false;
		var booTodosCero = true;
		//recorro el store
		var generarArrays = function(item){
			porcentajeStr = dijit.byId('gridMaster').store.getValue(item, columnasM[2]);
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
							productos = productos + dijit.byId('gridMaster').store.getValue(item, columnasM[0]);
							porcentajes = porcentajes + porcentajeStr;
							total = total + parseFloat(porcentaje);
						}
					}
				} else {
					booInvalid = true;		
				}
			}
		}
		var grabarCambios = function(items, request){
			if(booTodosCero == false){
				if(productos == '' || porcentajes == ''){return;}
				if(booInvalid==true){
					PopUp('Atenci&oacute;n', 'S&oacute;lo puede ingresar valores num&eacute;ricos entre 0 y 100');
					return;
				}
				if(total != 100){
					PopUp('Atenci&oacute;n', 'La sumatoria de porcentajes debe ser 100');
					total = 0;
					return;
				}				
			}
			dmlgrabarM = dmleditarM;
			procesando.show();
			//Generación de la URL
			var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM+'&productos='+productos+'&porcentajes='+porcentajes+'&subregion_id='+dijit.byId('filtro1').attr('value')+'&marca_id='+dijit.byId('filtro3').attr('value')+'&division_id='+dijit.byId('filtro2').attr('value');
			//Grabación de datos en la base de datos
			dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
				if (response.errcode==0){
					BuscarMaster();//Refresco del gridMaster
					dijit.byId('gridMaster').store.save();
					procesando.hide();
					Mensaje('Los cambios se han realizado exitosamente','mensaje','master');
				}else{
					//BuscarMaster();
					procesando.hide();
					PopUp('Error', response.errmsg);
				}
			}});
		}
		dijit.byId('gridMaster').store.fetch({query: {}, onItem: generarArrays, onComplete: grabarCambios});
	} else {
		PopUp('Atenci&oacute;n', 'No ha realizado ningun cambio<br>Para editar, haga doble click en el porcentaje ');
	}
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
function BajadaExcelMaster() {
	var urlValue ='dbi/bajaExcel.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	document.location = urlValue;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajarPlantillaMaster() {
	var urlValue = 'data/Carga_Masiva_Prorrateos_Marca.xls';
	document.location = urlValue;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargaMasivaMaster() {
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'text-align:center;width:350px;'});

    //var divTexto = new dijit.layout.ContentPane({style:'text-align:left'});
    //dojo.place(divTexto.domNode,divCamposM.domNode,'last');
    //var cabecera = dojo.create('div',{style:'margin-bottom:10px;text-align:left;',innerHTML:'Subregion: ' + dijit.byId('filtro'+1).attr('displayedValue') + '<br/>Marca: ' + dijit.byId('filtro'+3).attr('displayedValue') + '<br/>Division: ' + dijit.byId('filtro'+2).attr('displayedValue')});
    //dojo.place(cabecera,divCamposM.domNode,'last');
    
    var node = document.createElement('input'); 
	//dojo.byId('subida').appendChild(node);
	dojo.place(node,divCamposM.domNode,'last');
	var widget = new extenciones.myFileInputAuto({
					id: "userfile",
					url: "dbi/prorrateo_marca_masivo.php?sid="+gvarSID+"&subregion_id=" + dijit.byId('filtro'+1).attr('value') + '&marca=' + dijit.byId('filtro'+3).attr('value') + '&division_id=' + dijit.byId('filtro'+2).attr('value'),
					name: "userfile",
					onComplete: function(response,ioArgs,control){
						if (response.ticket_id){
							CancelarCargaMasivaMaster();
							//procesando.hide();
                            BuscarMaster();
							Mensaje('Proceso iniciado. Nro. de Ticket: '+response.ticket_id,'mensaje','master');
						}else{
							CancelarCargaMasivaMaster();
							//procesando.hide();
							PopUp('Error', response.errmsg);
						}
					},
					label: "Examinar...",
					cancelText: "Cancelar"
				},node);
	widget.startup();

	//Creacion de botones
	var botonCargar = new dijit.form.Button({label:'Cargar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarCargaMasivaMaster();}});
	dojo.place(botonCargar.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarCargaMasivaMaster();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	var botonPlantilla = new dijit.form.Button({label:'Descargar Plantilla',type:'button',style:"margin-left:20px;",iconClass:'excelIcon',onClick:function(){BajarPlantillaMaster();}});
	dojo.place(botonPlantilla.domNode,divCamposM.domNode,'last');
    
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Carga Masiva - ' + dijit.byId('filtro'+1).attr('displayedValue') + ' . ' + dijit.byId('filtro'+2).attr('displayedValue') + ' . ' + dijit.byId('filtro'+3).attr('displayedValue'),id:'dialogCargaMasivaMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarCargaMasivaMaster(){
	//Limpio campos del formulario
	dijit.byId('userfile').destroyRecursive();
	//Elimino el dialogo
	dijit.byId('dialogCargaMasivaMaster').hide();
	dijit.byId('dialogCargaMasivaMaster').destroyRecursive();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarCargaMasivaMaster(){
	//alert('Carga Masiva no implementada');
	dijit.byId("userfile")._sendFile();
	/*var urlValue = "dbi/prorrateo_marca_masivo.php?sid="+gvarSID+"&subregion_id=" + dijit.byId('filtro'+1).attr('value') + '&marca=' + dijit.byId('filtro'+3).attr('value');
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if (response.errcode==0){
			alert(response.dml);
		}else{alert(response.errmsg);}
	}});*/
}
////////////////////////////////////////////////////////////////////////////////////////////////////
/*function crearCargador(){
	dijit.byId("userfile").destroyRecursive();
	var node = document.createElement('input'); 
	dojo.byId('subida').appendChild(node);
	var widget = new extenciones.myFileInputAuto({
					id: "userfile",
					url: "dbi/upload2.php",
					name: "userfile",
					onComplete: notif,
					label: "Examinar...",
					cancelText: "Cancelar"
				},node);
	widget.startup();
}*/
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