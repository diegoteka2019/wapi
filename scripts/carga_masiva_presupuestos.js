//TITULOS
var titulos =  new Array('Administraci&oacute;n masiva de presupuestos por Area y Subregi&oacute;n');
//DMLs
var dmlBuscarMaster = '';
var dmlnuevoM = '';
var dmlEditarMaster = '';
var dmlCopiarMaster = '';
var dmlbuscarUnicoM = ''; 
var dmleliminarM = '11418';
var dmlAuditoriaMaster = '';
var dmlgrabarM = '';
var clavesM = new Array('presupuesto_id');
//Carga de titulos
document.getElementById('bloqueMaster').innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
//FORMULARIO
var camposFormM = new Array('division_id','area_id','subregion_id','tipo_presup_id','propuesta_id','tipo_carga','fecha_carga','tipo_descuento_id','clientes','participacion_cli','vigencia_desde','vigencia_hasta','descrip_prop_id','objetivo_prop_id','empresa_compe_id','dist_fisica_comp','bultos_afectados','op_realizar','canales_mkt','observaciones','prorratea_calibres','criterio','marca_id','concepto_id','monto','pdv');
var labelFormM = new Array('Divisi&oacute;n: ','Area: ','Subregi&oacute;n: ','Tipo: ','Nro: ','Tipo de Carga: ','Fecha de Carga: ','Tipificaci&oacute;n: ','Clientes: ','Participaci&oacute;n Dist(%): ','Vigencia Desde: ','Vigencia Hasta: ','Tipo de Acci&oacute;n: ','Objetivo: ','Contra: ','Dist. Fisica Comp(%): ','Bultos afectados por la acci&oacute;n: ','Op. a realizar: ','Canal de Mkt: ','Observaciones: ','Prorratea para todos los calibres: ','Criterio: ','Marca: ','Concepto: ','Monto: ','PDV: ');
var requeridoFormM = new Array(true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false);
var mensajesFormM = new Array('Seleccione la divisi&oacute;n','Seleccione el Area','Seleccione la Sub Regi&oacute;n','Seleccione el Tipo de Presupuesto','','','','Seleccione la Tipificaci&oacute;n','','Ingrese la Participaci&oacute;n Dist(%)','Seleccione la Vigencia Desde','Seleccione la Vigencia Hasta','Seleccione el Tipo de Acci&oacute;n','Seleccione el Objetivo','Seleccione la Empresa','Ingrese la Dist. Física Comp. (%)','Ingrese la cantidad de Bultos afecetados por la acci&oacute;n','Ingrese las Op. a Realizar','Seleccione los Canales de MKT','','','Ingrese el Monto','');
var searchAttrFormM = new Array('detalle','detalle','detalle','detalle','','','','detalle','','','','','detalle','detalle','detalle','','','','detalle','','','detalle','detalle','detalle','','');
var selectFormM = new Array('11408','11406','11629','11407','','','','11607','','','','','11608','11609','11610','','','','11611','','','','11409','11615','','');
var registroSeleccionado = null;
var mesesStore = {identifier:'id',label:'detalle',items:[{id:'01',detalle:'01'},{id:'02',detalle:'02'},{id:'03',detalle:'03'},{id:'04',detalle:'04'},{id:'05',detalle:'05'},{id:'06',detalle:'06'},{id:'07',detalle:'07'},{id:'08',detalle:'08'},{id:'09',detalle:'09'},{id:'10',detalle:'10'},{id:'11',detalle:'11'},{id:'12',detalle:'12'}]};

////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	
	if(dijit.byId('cargaMasivaMaster')){dijit.byId('cargaMasivaMaster').attr('disabled',false);}
	if(dijit.byId('eliminarMaster')){dijit.byId('eliminarMaster').attr('disabled',false);}
	//ArmadoFiltroYAuditoria();
	
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedMaster(grilla){
	registroSeleccionado = grilla.selection.getSelected();
	for(i=0;i<cantidadGrillas;i++){if(dijit.byId('grilla'+i)!=grilla){dijit.byId('grilla'+i).selection.clear();}}
	HabilitarBotonesMaster(2,false);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function HabilitarBotonesMaster(tipo,bool){
	if(tipo==1){
		if(dijit.byId('bajaexcelMaster')){dijit.byId('bajaexcelMaster').attr('disabled',bool);}}
	if(tipo==2){
		if(dijit.byId('editarMaster')){dijit.byId('editarMaster').attr('disabled',bool);}
		if(dijit.byId('editarMasterEA')){dijit.byId('editarMasterEA').attr('disabled',bool);}
		if(dijit.byId('editarMasterAW')){dijit.byId('editarMasterAW').attr('disabled',bool);}
		if(dijit.byId('enviarAMaster')){dijit.byId('enviarAMaster').attr('disabled',bool);}
		if(dijit.byId('enviarWMaster')){dijit.byId('enviarWMaster').attr('disabled',bool);}
		if(dijit.byId('enviarMasivoAMaster')){dijit.byId('enviarMasivoAMaster').attr('disabled',bool);}
		if(dijit.byId('enviarMasivoWMaster')){dijit.byId('enviarMasivoWMaster').attr('disabled',bool);}
		if(dijit.byId('copiarMaster')){dijit.byId('copiarMaster').attr('disabled',bool);}
		if(dijit.byId('copiarMasterEA')){dijit.byId('copiarMasterEA').attr('disabled',bool);}
		if(dijit.byId('eliminarMaster')){dijit.byId('eliminarMaster').attr('disabled',bool);}
		if(dijit.byId('eliminarMasterEA')){dijit.byId('eliminarMasterEA').attr('disabled',bool);}
		if(dijit.byId('auditMaster')){dijit.byId('auditMaster').attr('disabled',bool);}
		if(dijit.byId('blanquearClaveMaster')){dijit.byId('blanquearClaveMaster').attr('disabled',bool);}
		if(dijit.byId('verDetalleMaster')){dijit.byId('verDetalleMaster').attr('disabled',bool);}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ArmadoFiltroYAuditoria(){
	if(dijit.byId('filtrMaster')){
		//Limpio Filtros
		for(i=0;i<filtroMaster.length;i++){if(dijit.byId('filtro'+i)){dijit.byId('filtro'+i).destroy();}}
		//Creo Filtros
		var divFiltros = new dijit.layout.ContentPane({style:'width:350px;'});
		var tablaFiltros = new dojox.layout.TableContainer({cols:1});
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='TextBox'){tablaFiltros.addChild(new dijit.form.TextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='ValidationTextBox'){tablaFiltros.addChild(new dijit.form.ValidationTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',constraints:{datePattern:'dd-MM-yyyy'},promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],onChange:function(){if(tipoFiltroMaster[parseInt(this.id.charAt(6))+1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))+1)).constraints.min = arguments[0];}else if(tipoFiltroMaster[parseInt(this.id.charAt(6))-1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))-1)).constraints.max = arguments[0];}}}));}
			if(tipoFiltroMaster[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[i]})}));}}
		
		AutoCompletar(dijit.byId('filtro1'));
		AutoCompletar(dijit.byId('filtro3'));
		//agrego el area a la busqueda de subregion
		dijit.byId('filtro2').store.url += '&area_id='+dijit.byId('filtro1').attr('value');
		//Borrado de subregiones al cambiar el area
		dijit.byId('filtro1').onChange= function(value){dijit.byId('filtro2').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[2]+'&area_id='+value}));dijit.byId('filtro2').store.fetch();dijit.byId('filtro2').attr('value',null);AutoCompletar(dijit.byId('filtro2'));}
		//Asigno store de meses y seteo anio actual por defecto
		dijit.byId('filtro4').attr('store',new dojo.data.ItemFileReadStore({data: mesesStore}));
		dijit.byId('filtro5').attr('value',dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}));
		
		divFiltros.attr('content',tablaFiltros);
		var botonBuscar = new dijit.form.Button({label:'Buscar',type:'button',onClick:function(){VerificarFiltro();}},document.createElement('div'));
		dojo.place(botonBuscar.domNode,divFiltros.domNode,'last');
		dijit.byId('filtrosMaster').attr('content',divFiltros);}	
	if(dijit.byId('auditMaster')){
		//Limpio Filtros
		if(dijit.byId(camposAuditoriaM[0])){for(i=0;i<camposAuditoriaM.length;i++){dijit.byId(camposAuditoriaM[i]).destroy();}}
		//Creo campos de auditoria
		var tablaAuditMaster = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'width:350px;'});
		for(i=0;i<camposAuditoriaM.length;i++){tablaAuditMaster.addChild(new dijit.form.TextBox({id:camposAuditoriaM[i],label:labelAuditoria[i],disabled:true,type:'text'}));}
		dijit.byId('auditoriaMaster').attr('content',tablaAuditMaster);}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerificarFiltro(){
	//Validacion de que el formulario esté bien cargado
	if(dijit.byId('filtrosMaster').validate()){BuscarMaster();dijit.byId('filtrosMaster').onCancel();}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargaMasivaMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:410px;text-align:center;'});
	//Cracion de filtros
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'80',style:'text-align:left;'});
	//var mesesStore = {identifier:'mes',label:'mes',items:[{mes:'01'},{mes:'02'},{mes:'03'},{mes:'04'},{mes:'05'},{mes:'06'},{mes:'07'},{mes:'08'},{mes:'09'},{mes:'10'},{mes:'11'},{mes:'12'}]};
	//tablaForm.addChild(new dijit.form.FilteringSelect({id:'mes',label:'Mes: ',style:'width:141px;',promptMessage:'Seleccione un Mes',required:true,searchAttr:'mes',store: new dojo.data.ItemFileReadStore({data:mesesStore})}));
	//tablaForm.addChild(new dijit.form.NumberTextBox({id:'anio',value:dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),label:'A&ntilde;o: ',style:'width:141px;',promptMessage:'Ingrese un A&ntilde;o',required:true}));
	tablaForm.addChild(new dijit.form.ValidationTextBox({id:'archivo',label:'Archivo: ',promptMessage:'Seleccione un Archivo',required:true}));
	divCamposM.attr('content',tablaForm);
	tablaForm.startup();
	
	var widget = new extenciones.myFileInputAuto({id:'userfile',style:'width:141px;',name:'userfile',label:'Examinar',cancelText:'Cancelar',
					url: 'dbi/presupuestos_carga_masiva.php?sid='+gvarSID, //+'&mes='+dijit.byId('mes').attr('value')+'&anio='+dijit.byId('anio').attr('value'),
					onComplete: function(response,ioArgs,control){
						console.log(response);
						if (response.ticket_id){
							dijit.byId('dialogCargaMasivaMaster').hide();
                          
                            dijit.byId('archivo').destroy();
							//Elimino el dialogo
							dijit.byId('userfile').destroyRecursive();
							dijit.byId('dialogCargaMasivaMaster').destroyRecursive();
                            procesando.hide();
                          
							Mensaje('Proceso iniciado. Nro. de Ticket: '+response.ticket_id,'mensaje','master');
						}else{
							dijit.byId('dialogCargaMasivaMaster').hide();
                         
                            dijit.byId('archivo').destroy();
							//Elimino el dialogo
							dijit.byId('userfile').destroyRecursive();
							//dijit.byId('divCamposM').destroyDescendants();
							dijit.byId('dialogCargaMasivaMaster').destroyRecursive();
                            procesando.hide();
							PopUp('Error', response.errmsg);
						}
					}
				},dijit.byId('archivo').domNode);
	//dijit.byId('userfile').fileInput.readOnly = true;
	widget.startup();
	
	//Creacion de botones
	var botonCargar = new dijit.form.Button({label:'Cargar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){PopUp('Advertencia','Si existen datos registrados para el/los Presupuestos/Subpresupuestos a cargar, se actualizar&aacute;n los mismos. desea continuar?','GrabarCargaMasivaMaster()');}});
	dojo.place(botonCargar.domNode,divCamposM.domNode,'last');
	var botonPlantilla = new dijit.form.Button({label:'Descargar Plantilla',type:'button',iconClass:'excelIcon',onClick:function(){BajarPlantillaMaster();}});
	dojo.place(botonPlantilla.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){dijit.byId('dialogCargaMasivaMaster').hide();dijit.byId('dialogCargaMasivaMaster').destroyRecursive();dijit.byId('archivo').destroy();dijit.byId('userfile').destroyRecursive();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Carga Masiva de Presupuestos',id:'dialogCargaMasivaMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	//dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BajarPlantillaMaster() {
	var urlValue = 'data/carga_masiva_presupuestos.xls';
	//document.location = urlValue;
	window.open(urlValue,"Bajar_Plantilla_Presup","menubar=no,width=300,height=300,toolbar=no,resizable=yes");
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarCargaMasivaMaster(){

	if(dijit.byId('userfile').fileInput.value==''){PopUp('Error','Debe seleccionar un archivo');return;}
	var urlValue = 'dbi/presupuestos_carga_masiva.php?sid='+gvarSID;
    dijit.byId('userfile').attr('url',urlValue);
	procesando.show();
    dijit.byId('userfile')._sendFile();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:300px;text-align:center;'});
	//Cracion de filtros
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'80',style:'text-align:left;'});
	var mesesStore = {identifier:'mes',label:'mes',items:[{mes:'01'},{mes:'02'},{mes:'03'},{mes:'04'},{mes:'05'},{mes:'06'},{mes:'07'},{mes:'08'},{mes:'09'},{mes:'10'},{mes:'11'},{mes:'12'}]};
	if(dijit.byId('area')){dijit.byId('area').destroy();}tablaForm.addChild(new dijit.form.FilteringSelect({id:'area',label:'Area: ',style:'width:141px;',promptMessage:'Seleccione un &aacute;rea',required:true,searchAttr:'detalle',store: new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11415',urlPreventCache:true})}));
	if(dijit.byId('tipo_presupuesto_id')){dijit.byId('tipo_presupuesto_id').destroy();}tablaForm.addChild(new dijit.form.FilteringSelect({id:'tipo_presupuesto_id',label:'Tipo: ',style:'width:141px;',promptMessage:'Seleccione un Tipo de presupuesto',required:true,searchAttr:'detalle',store: new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11416',urlPreventCache:true})}));
	if(dijit.byId('division_id')){dijit.byId('division_id').destroy();}tablaForm.addChild(new dijit.form.FilteringSelect({id:'division_id',label:'Divisi&oacute;n: ',style:'width:141px;',promptMessage:'Seleccione una Divisi&oacute;n',required:true,searchAttr:'detalle',store: new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11417',urlPreventCache:true})}));
	if(dijit.byId('mes')){dijit.byId('mes').destroy();}tablaForm.addChild(new dijit.form.FilteringSelect({id:'mes',value:dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'}),label:'Mes: ',style:'width:141px;',required:false,promptMessage:'No se pueden eliminar presupuestos de meses anteriores al actual',searchAttr:'mes',store: new dojo.data.ItemFileReadStore({data:mesesStore})}));
	if(dijit.byId('anio')){dijit.byId('anio').destroy();}tablaForm.addChild(new dijit.form.NumberTextBox({id:'anio',value:dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),label:'A&ntilde;o: ',style:'width:141px;',promptMessage:'Ingrese un A&ntilde;o',required:true}));
	
	
	divCamposM.attr('content',tablaForm);
	tablaForm.startup();
		
	//Creacion de botones
	var botonCargar = new dijit.form.Button({label:'Eliminar',type:'button',iconClass:'eliminarIcon',onClick:function(){
	
	if(!dijit.byId('area').isValid()){dijit.byId('area').focus();return;}
	else if(!dijit.byId('tipo_presupuesto_id').isValid()){dijit.byId('tipo_presupuesto_id').focus();}
	else if(!dijit.byId('division_id').isValid()){dijit.byId('division_id').focus();}
	else if(!dijit.byId('anio').isValid()){dijit.byId('anio').focus();}
	else if(dijit.byId('mes').attr('value')!=''){
		if(dijit.byId('anio').attr('value') < dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}))
		{dijit.byId('anio').attr('value','');dijit.byId('anio').focus();}
		else if (dijit.byId('anio').attr('value') == dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}) && dijit.byId('mes').attr('value') < dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'}))
		{dijit.byId('mes').attr('value','');dijit.byId('mes').focus();}
		else{PopUp('Advertencia','Se eliminaran presupuestos, desea Continuar?','EliminarMasterM()');}
	}else{PopUp('Advertencia','Se eliminaran presupuestos desde el mes en curso en adelante, desea Continuar?','EliminarMasterM()');}
	
	}});
	
	
	dojo.place(botonCargar.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Eliminaci&oacute;n Masiva de Presupuestos',id:'dialogEliminoMasivaMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarMasterM(){
	
	//Generación de la URL
	var urlValue ='dbi/e_proc_t.php?sid='+gvarSID+'&dmlid='+dmleliminarM+'&area_id='+dijit.byId('area').attr('value')+'&tipo_presupuesto_id='+dijit.byId('tipo_presupuesto_id').attr('value')+'&division_id='+dijit.byId('division_id').attr('value')+'&mes='+dijit.byId('mes').attr('value')+'&anio='+dijit.byId('anio').attr('value');
	procesando.show();
	//Se elimina el registro de la base de datos
	dojo.xhrGet({url:urlValue,handleAs:'json',load:function(response){
		if(response.ticket_id){
			CancelarMaster();
			procesando.hide();
			Mensaje('Proceso iniciado. Nro. de Ticket: '+response.ticket_id,'mensaje','master');
		}else{procesando.hide();PopUp('Error', response.errmsg);}
		}
	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	dijit.byId('dialogEliminoMasivaMaster').hide();
	dijit.byId('dialogEliminoMasivaMaster').destroyRecursive();
	if(dijit.byId('area')){dijit.byId('area').destroy();}
	if(dijit.byId('tipo_presupuesto_id')){dijit.byId('tipo_presupuesto_id').destroy();}
	if(dijit.byId('division_id')){dijit.byId('division_id').destroy();}
	if(dijit.byId('mes')){dijit.byId('mes').destroy();}
	if(dijit.byId('anio')){dijit.byId('anio').destroy();}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ColorearFila(row){
	/* var item = gridArea.getItem(row.index);
	if(item){
		if(item['importe_ajustado'][0]>0){row.customStyles+='color:green;';}
		else{row.customStyles+='color:red;';}}
	gridArea.focus.styleRow(row);
	gridArea.edit.styleRow(row); */
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumnD(checkbox,grilla_id){
	if(dijit.byId(grilla_id).store){
		var Checkear = function(item){
			dijit.byId(grilla_id).store.setValue(item,columnasP[2],checkbox.checked);
		}
		dijit.byId(grilla_id).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId(grilla_id).store.save();}});
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumn(checkbox){
	if(dijit.byId('enviarMasivoAMaster')){dijit.byId('enviarMasivoAMaster').attr('disabled',false);}
	if(dijit.byId('enviarMasivoWMaster')){dijit.byId('enviarMasivoWMaster').attr('disabled',false);}
	for(i=0;i<cantidadGrillas;i++){	
		if(dijit.byId('grilla'+i).store){
			var Checkear = function(item){
				dijit.byId('grilla'+i).store.setValue(item,columnasE[9],checkbox.checked);
			}
			dijit.byId('grilla'+i).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId('grilla'+i).store.save();}});
		}
	}
}