//TITULOS
var titulos =  new Array('Presupuesto por Area');
//DMLs
var dmlBuscarMaster = '11404';
var dmlnuevoM = '';
var dmleditarM = '11402';
var dmlbuscarUnicoM = '11410'; 
var dmleliminarM = '';
var dmlAuditoriaMaster = '';
var dmlgrabarM = '';
//COLUMNAS
var columnasM = new Array('presupuesto_id','mes','importe','volumen_ventas','precio_htl');
var tiposM = new Array('text','text','text','text','text');
var columnasD = new Array('presup_ajuste_id','fecha','usuario','importe_ajustado','vol_ventas_ajustado','precio_htl_ajustado','observaciones');
var columnasDD = new Array('campos','actual','ajuste');
//DESCRIPCIONES
var descripcionesM = new Array('Presupuesto ID','Mes','Presupuesto $','Vol. Venta','$/ Htl. Pres.');
var descripcionesD = new Array('Presupuesto Ajuste ID','Fecha','Usuario','Importe','Vol. Venta','$/ Htl.','Observaciones');
var descripcionesDD = new Array('','Actual','Ajuste');
//PRIMARY KEY
var clavesM = new Array('presupuesto_id');
//FILTROS
var filtroMaster = new Array('area_id','tipo_presupuesto_id','division_id','marca_id','anio');
var labelFiltroMaster = new Array('Area: ','Tipo: ','Division: ','Marca: ','A&ntilde;o: ');
var mensajeFiltroMaster = new Array('Seleccione el Area','Seleccione el Tipo de Presupuesto','Seleccione la Divisi&oacute;n','Seleccione la Marca','Ingrese el A&ntilde;o');
var requeridoFiltroMaster = new Array(true,true,true,true,true);
var tipoFiltroMaster = new Array('FilteringSelect','FilteringSelect','FilteringSelect','FilteringSelect','ValidationTextBox');
var searchAttrFiltroMaster = new Array('detalle','detalle','detalle','detalle','');
var selectFiltroMaster = new Array('11406','11407','11408','11409','');
//FORMULARIO
var camposFormM = new Array('mes','tipo_carga','tipo_ajuste');
var labelFormM = new Array('Mes: ','Tipo de Carga: ','Tipo de Ajuste: ');
var requeridoFormM = new Array(false,true,true);
var regexpFormM = new Array('.*','.*','.*');
var mensajesFormM = new Array('','Elija el tipo de carga','Elija el tipo de ajuste');
var dojoTypeFormM = new Array('TextBox','FilteringSelect','FilteringSelect');
var searchAttrFormM = new Array('','detalle','detalle');
var selectFormM = new Array('','','');
var cargaStore = {identifier:'codigo',label:'tipo_carga',items:[{codigo:'1',tipo_carga:'importe',detalle: 'Importe'},{codigo:'2',tipo_carga: 'hectolitro',detalle:'$ por Htl'}]};
var ajusteStore = {identifier:'codigo',label:'tipo_ajuste',items:[{codigo:'1',tipo_ajuste: 'positivo',detalle: 'Positivo'},{codigo:'2',tipo_ajuste: 'negativo',detalle:'Negativo'}]};
//Carga las estructuras de las tablas
var layoutMaster = [
    {width: "auto", field: columnasM[0], name: descripcionesM[0],hidden:true},
    {width: "auto", field: columnasM[1], name: descripcionesM[1]},
    {width: "auto", field: columnasM[2], name: descripcionesM[2]},
	{width: "auto", field: columnasM[3], name: descripcionesM[3]},
	{width: "auto", field: columnasM[4], name: descripcionesM[4]}];
var layoutDialog = [
    {width: "auto", field: columnasD[0], name: descripcionesD[0],hidden:true},
    {width: "auto", field: columnasD[1], name: descripcionesD[1]},
    {width: "auto", field: columnasD[2], name: descripcionesD[2]},
	{width: "auto", field: columnasD[3], name: descripcionesD[3]},
	{width: "auto", field: columnasD[4], name: descripcionesD[4]},
	{width: "auto", field: columnasD[5], name: descripcionesD[5]},
	{width: "auto", field: columnasD[6], name: descripcionesD[6]}];
var layoutDialogDatos = [
    {width: "auto", field: columnasDD[0], name: descripcionesDD[0]},
    {width: "auto", field: columnasDD[1], name: descripcionesDD[1]},
    {width: "auto", field: columnasDD[2], name: descripcionesDD[2]}];
//campos de auditoria
var camposAuditoriaM = new Array('usr_altam','fecha_altam','usr_modifm','fecha_modifm');
var labelAuditoria = new Array('Creado por: ','Fecha de creaci&oacute;n: ','Modificado por: ','Fecha de modificaci&oacute;n: ');
//Carga de titulos
document.getElementById('bloqueMaster').innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	dojo.connect(gridArea,'onStyleRow',function(row){ColorearFila(row);});
	if(dijit.byId('buscarMaster')){
		dijit.byId('buscarMaster').destroy();
		dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'verDetalleMaster',style:'padding-left:3px;padding-right:3px;',label:'Ver Detalle',showLabel:false,iconClass:'verDetalleIcon',disabled:true,onClick:function(){VerDetalleMaster();}}));    
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
			if(tipoFiltroMaster[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],onChange:function(){dijit.byId('filtro5').constraints.min = arguments[0];}}));}if(dijit.byId('filtro5')){dijit.byId('filtro5').attr('onChange',function(){dijit.byId('filtro4').constraints.max = arguments[0];})}
			if(tipoFiltroMaster[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[i]})}));}}
		
		AutoCompletar(dijit.byId('filtro0'));
		AutoCompletar(dijit.byId('filtro1'));
		//agrego la division a la busqueda de marcas
		dijit.byId('filtro3').store.url += '&division_id='+dijit.byId('filtro2').attr('value');
		//Borrado de subregiones al cambiar la division
		dijit.byId('filtro2').onChange= function(value){dijit.byId('filtro3').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[3]+'&division_id='+value}));
		dijit.byId('filtro3').store.fetch();
		dijit.byId('filtro3').attr('value',null);}
		//Seteo el anio actual por defecto
		dijit.byId('filtro4').attr('value',dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}));

		divFiltros.attr('content',tablaFiltros);
		var botonBuscar = new dijit.form.Button({label:'Buscar',type:'button',onClick:function(){VerificarFiltro();}},document.createElement('div'));
		dojo.place(botonBuscar.domNode,divFiltros.domNode,'last');
		dijit.byId('filtrosMaster').attr('content',divFiltros);}	
	if(dijit.byId('auditMaster')){
		//Limpio Filtros
		for(i=0;i<camposAuditoriaM.length;i++){if(dijit.byId(camposAuditoriaM[i])){dijit.byId(camposAuditoriaM[i]).destroy();}}
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
function NuevoMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:350px;text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'140',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.TextBox({id:camposFormM[0],label:labelFormM[0],readOnly:true}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[1],label:labelFormM[1],searchAttr:searchAttrFormM[1],promptMessage:mensajesFormM[1],required:requeridoFormM[1],store:new dojo.data.ItemFileReadStore({data: cargaStore})}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[2],label:labelFormM[2],searchAttr:searchAttrFormM[2],promptMessage:mensajesFormM[2],required:requeridoFormM[2],store:new dojo.data.ItemFileReadStore({data: ajusteStore})}));
	divCamposM.attr('content',tablaForm);
	tablaForm.startup();
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
function BuscarMaster(){
	//Armado de URL
	dojo.byId('mostrarFiltros').innerHTML = '&nbsp;';
	var urlValue ='dbi/presupuesto_area_meses.php?sid='+gvarSID;
	if(filtroMaster.length > 0){
		for(i=0;i<filtroMaster.length;i++){
			urlValue = urlValue +'&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');
			if(i!=4){dojo.byId('mostrarFiltros').innerHTML += '<b>' + labelFiltroMaster[i] + '</b>' + dijit.byId('filtro'+i).item.detalle[0] + ' ';}
			else{dojo.byId('mostrarFiltros').innerHTML += '<b>' + labelFiltroMaster[i] + '</b>' + dijit.byId('filtro'+i).attr('value');}
		}
	}
	gridMaster.setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	gridMaster.attr('autoWidth',true);
	gridMaster.update();
	gridMaster.selection.clear();
	HabilitarBotonesMaster(1,false);
	HabilitarBotonesMaster(2,true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMaster(){
	dijit.byId('precioLitroNuevo').attr('readOnly',true);
	dijit.byId('importeNuevo').attr('readOnly',false);
	dijit.byId('volumenVentasNuevo').attr('readOnly',false);
	dijit.byId('observaciones').attr('readOnly',false);
	//Blanqueo importes
	dijit.byId('importeNuevo').attr('value',0);
	dijit.byId('volumenVentasNuevo').attr('value',0);
	dijit.byId('precioLitroNuevo').attr('value',0);
	dijit.byId('observaciones').attr('value','');
	//Cargo los datos del registro seleccionado
	var items = gridMaster.selection.getSelected();
	var mesActual = dojo.date.locale.format(new Date(),{datePattern:"MM",selector:"date"});
	var anioActual = dojo.date.locale.format(new Date(),{datePattern:"yyyy",selector:"date"});
	if(anioActual>dijit.byId('filtro4').attr('value')){Mensaje('No es posible modificar el presupuesto de un a&ntilde;o vencido','advertencia','master');return;}
	if(mesActual>items[0][columnasM[1]] && anioActual==dijit.byId('filtro4').attr('value')){Mensaje('No es posible modificar el presupuesto de un mes vencido','advertencia','master');return;}
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:4,labelWidth:'90',style:'text-align:left;'});
	if(dijit.byId(camposFormM[0])){dijit.byId(camposFormM[0]).destroy();}tablaForm.addChild(new dijit.form.TextBox({id:camposFormM[0],style:'width:90px;',label:labelFormM[0],readOnly:true}));
	
	var storeMails = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11414&area_id='+dijit.byId('filtro0').attr('value')+'&tipo_presupuesto_id='+dijit.byId('filtro1').attr('value')+'&marca_id='+dijit.byId('filtro3').attr('value')+'&division_id='+dijit.byId('filtro2').attr('value')+'&anio='+dijit.byId('filtro4').attr('value')+'&mes='+items[0][columnasM[1]],urlPreventCache:true})
	var hayDatos = function(items,request){
		if(items.length==0){
			if(dijit.byId('mails')){dijit.byId('mails').destroy();}
			tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'mails',required:false,style:'width:130px;height:58px;',label:'Notificar a: ',multiple:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=11412&area_id='+dijit.byId('filtro0').attr('value')})}));
		}
		tablaForm.startup();
		dijit.byId("divCampos").attr('content',tablaForm);
		dijit.byId("dialogMaster").show();
	}
	storeMails.fetch({query: {}, onComplete: hayDatos});
	
	if(dijit.byId(camposFormM[1])){dijit.byId(camposFormM[1]).destroy();}tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[1],style:'width:90px;',value:"1",label:labelFormM[1],searchAttr:searchAttrFormM[1],promptMessage:mensajesFormM[1],required:requeridoFormM[1],store:new dojo.data.ItemFileReadStore({data: cargaStore}),onChange:function test(){if(this.attr('value')==1){dijit.byId('importeNuevo').attr('readOnly',false);dijit.byId('precioLitroNuevo').attr('value','0');dijit.byId('precioLitroNuevo').attr('readOnly',true);}else{dijit.byId('importeNuevo').attr('readOnly',true);dijit.byId('importeNuevo').attr('value','0');dijit.byId('precioLitroNuevo').attr('readOnly',false);}}}));
	if(dijit.byId(camposFormM[2])){dijit.byId(camposFormM[2]).destroy();}tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[2],style:'width:90px;',value:"1",label:labelFormM[2],searchAttr:searchAttrFormM[2],promptMessage:mensajesFormM[2],required:requeridoFormM[2],store:new dojo.data.ItemFileReadStore({data: ajusteStore})}));
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
	dojo.place(botonGrabar.domNode,dijit.byId("divBotones").domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	//Seteo propiedades para Editar
	dmlgrabarM = dmleditarM;
	/*--- Llenado del formulario con los datos del registro elegido ---*/
	//Cargo el mes, importe, volumen de ventas y $ por hlt.
	dijit.byId(camposFormM[0]).attr('value',items[0][columnasM[1]]);
	dojo.byId('importeActual').innerHTML=items[0][columnasM[2]]; 
	dojo.byId('volumenVentasActual').innerHTML=items[0][columnasM[3]];
	dojo.byId('precioLitroActual').innerHTML=items[0][columnasM[4]];
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlbuscarUnicoM+'&'+columnasM[0]+'='+items[0][columnasM[0]];
	gridArea.setStore(new dojo.data.ItemFileReadStore({url:urlValue,urlPreventCache:true}));
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDetalleMaster(){
	//Blanqueo importes
	dijit.byId('importeNuevo').attr('value',0);
	dijit.byId('volumenVentasNuevo').attr('value',0);
	dijit.byId('precioLitroNuevo').attr('value',0);
	dijit.byId('observaciones').attr('value','');
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:3,labelWidth:'90',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.TextBox({id:camposFormM[0],readOnly:true,style:'width:90px;',label:labelFormM[0]}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[1],readOnly:true,style:'width:90px;',value:"1",label:labelFormM[1],searchAttr:searchAttrFormM[1],promptMessage:mensajesFormM[1],required:requeridoFormM[1],store:new dojo.data.ItemFileReadStore({data: cargaStore}),onChange:function test(){if(this.attr('value')==1){dijit.byId('importeNuevo').attr('readOnly',false);dijit.byId('precioLitroNuevo').attr('value','0');dijit.byId('precioLitroNuevo').attr('readOnly',true);}else{dijit.byId('importeNuevo').attr('readOnly',true);dijit.byId('importeNuevo').attr('value','0');dijit.byId('precioLitroNuevo').attr('readOnly',false);}}}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[2],readOnly:true,style:'width:90px;',value:"1",label:labelFormM[2],searchAttr:searchAttrFormM[2],promptMessage:mensajesFormM[2],required:requeridoFormM[2],store:new dojo.data.ItemFileReadStore({data: ajusteStore})}));
	dijit.byId("divCampos").attr('content',tablaForm);
	tablaForm.startup();
	//Bloqueo de parametros
	dijit.byId('importeNuevo').attr('readOnly',true);
	dijit.byId('volumenVentasNuevo').attr('readOnly',true);
	dijit.byId('precioLitroNuevo').attr('readOnly',true);
	dijit.byId('observaciones').attr('readOnly',true);	//Creacion de botones
	var botonCancelar = new dijit.form.Button({label:'Aceptar',type:'button',iconClass:'aceptarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,dijit.byId("divBotones").domNode,'last');
	//Elimino la capacidad de cerrar el dialogo por medio de la "X"
	dijit.byId("dialogMaster").titleBar.children[1].style.display='none';
	//Seteo propiedades para Editar
	dmlgrabarM = dmleditarM;
	/*--- Llenado del formulario con los datos del registro elegido ---*/
	//Cargo el mes, importe, volumen de ventas y $ por hlt.
	var items = gridMaster.selection.getSelected();
	dijit.byId(camposFormM[0]).attr('value',items[0][columnasM[1]]);
	dojo.byId('importeActual').innerHTML=items[0][columnasM[2]]; 
	dojo.byId('volumenVentasActual').innerHTML=items[0][columnasM[3]];
	dojo.byId('precioLitroActual').innerHTML=items[0][columnasM[4]];
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlbuscarUnicoM+'&'+columnasM[0]+'='+items[0][columnasM[0]];
	gridArea.setStore(new dojo.data.ItemFileReadStore({url:urlValue,urlPreventCache:true}));
	dijit.byId("dialogMaster").show();
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
	mensaje='Est&aacute; seguro que desea eliminar la tipificaci&oacute;n  del presupuesto <b>'+items[0][columnasM[2]]+'</b><br> con tipo de descuento <b>'+items[0][columnasM[3]]+'</b>';
	for(i=0;i<clavesM.length;i++){
		urlValue+='&'+clavesM[i]+'='+items[0][columnasM[i]];
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
	for(i=0;i<clavesM.length;i++){urlValue +='&'+clavesM[i]+'='+items[0][columnasM[i]];}
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
function GrabarMaster(){
	//Validacion de que el formulario esté bien cargado
	if(dijit.byId('tipo_ajuste').attr('value')==2 && dojo.byId('importeActual').innerHTML==0 && dojo.byId('volumenVentasActual').innerHTML==0){PopUp('Error','No es posible quitar un monto mayor al asignado al presupuesto. Por favor valide los montos ingresados');return;}
	if(dojo.byId('importeActual').innerHTML==0){
		if((!dijit.byId('importeNuevo').isValid() || !dijit.byId('importeNuevo').attr('value')>0) && dijit.byId('tipo_carga').attr('value')==1){dijit.byId('importeNuevo').attr('value',null);dijit.byId('importeNuevo').focus();return;}
		if(!dijit.byId('volumenVentasNuevo').isValid() || !dijit.byId('volumenVentasNuevo').attr('value')>0){dijit.byId('volumenVentasNuevo').attr('value',null);dijit.byId('volumenVentasNuevo').focus();return;}
		if((!dijit.byId('precioLitroNuevo').isValid() || !dijit.byId('precioLitroNuevo').attr('value')>0) && dijit.byId('tipo_carga').attr('value')==2){dijit.byId('precioLitroNuevo').attr('value',null);dijit.byId('precioLitroNuevo').focus();return;}
	}else{
		if(dijit.byId('importeNuevo').attr('value')>0 || dijit.byId('volumenVentasNuevo').attr('value')>0 || dijit.byId('precioLitroNuevo').attr('value')>0){
		}else{PopUp('Error','Debe realizar alg&uacute;n ajuste');return;}
	}
	if(!dijit.byId('importeNuevo').isValid() && dijit.byId('tipo_carga').attr('value')==1){dijit.byId('importeNuevo').attr('value',null);dijit.byId('importeNuevo').focus();return;}
	if(!dijit.byId('volumenVentasNuevo').isValid()){dijit.byId('volumenVentasNuevo').attr('value',null);dijit.byId('volumenVentasNuevo').focus();return;}
	if(!dijit.byId('precioLitroNuevo').isValid() && dijit.byId('tipo_carga').attr('value')==2){dijit.byId('precioLitroNuevo').attr('value',null);dijit.byId('precioLitroNuevo').focus();return;}
	if(dijit.byId('tipo_ajuste').attr('value')==1){
		if(dijit.byId('importeNuevo').attr('value')+parseInt(dojo.byId('importeActual').innerHTML)>9999999999.99){dijit.byId('importeNuevo').attr('value',null);dijit.byId('importeNuevo').focus();return;}
		if(dijit.byId('volumenVentasNuevo').attr('value')+parseInt(dojo.byId('volumenVentasActual').innerHTML)>9999999999.99){dijit.byId('volumenVentasNuevo').attr('value',null);dijit.byId('volumenVentasNuevo').focus();return;}
	}
	dijit.byId('dialogMaster').hide();
	procesando.show();
	//Generación de la URL
	dijit.byId('observaciones').attr('value',unescape( encodeURIComponent( dijit.byId('observaciones').attr('value') ) ) );
	var urlValue ='dbi/presupuesto_area_grabar.php?sid='+gvarSID+'&dmlid='+dmlgrabarM+'&area_id='+dijit.byId('filtro0').attr('value')+'&tipo_presup='+dijit.byId('filtro1').attr('value')+'&marca_id='+dijit.byId('filtro3').attr('value')+'&division_id='+dijit.byId('filtro2').attr('value')+'&anio='+dijit.byId('filtro4').attr('value')+'&mes='+dijit.byId(camposFormM[0]).attr('value')+'&tipo_carga='+dijit.byId(camposFormM[1]).attr('value')+'&tipo_ajuste='+dijit.byId(camposFormM[2]).attr('value')+'&importe='+dijit.byId('importeNuevo').attr('value')+'&vol_ventas='+dijit.byId('volumenVentasNuevo').attr('value')+'&precio_htl='+dijit.byId('precioLitroNuevo').attr('value')+'&observaciones='+dijit.byId('observaciones').attr('value');
	if(dijit.byId('mails')){urlValue +='&mails='+dijit.byId('mails').attr('value');}
	//Grabación de datos en la base de datos
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if (response.errcode==0){
			CancelarMaster();//Elimino el dialogo
			BuscarMaster();//Refresco del gridMaster
			procesando.hide();
			Mensaje('Los cambios se han realizado exitosamente','mensaje','master');
		} else if(response.errcode=="MN"){
			CancelarMaster();//Elimino el dialogo
			BuscarMaster();//Refresco del gridMaster
			procesando.hide();
			Mensaje(response.errmsg,'advertencia','master');			
		} else{
			procesando.hide();
			dijit.byId('dialogMaster').show();
			PopUp('Error', response.errmsg);
		}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	//Elimino el dialogo
	dijit.byId('dialogMaster').hide();
	dijit.byId('divCampos').destroyDescendants();
	dijit.byId('divBotones').destroyDescendants();
	//Limpio campos del formulario
	for(i=0;i<camposFormM.length;i++){if(dijit.byId(camposFormM[i])){dijit.byId(camposFormM[i]).destroy();}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ColorearFila(row){
	var item = gridArea.getItem(row.index);
	if(item){
		if(item['importe_ajustado'][0]>0){row.customStyles+='color:green;';}
		else{row.customStyles+='color:red;';}}
	gridArea.focus.styleRow(row);
	gridArea.edit.styleRow(row);
}