//TITULOS
var titulos =  new Array("Grupos de Negocio");
var filtroValue = new Array();
var marcasChecked = '';
var divisionesChecked = '';
//DMLs
var dmlBuscarMaster = "14003";
var dmlnuevoM = "14001";
var dmleditarM = "";
var dmlbuscarUnicoM = ""; 
var dmleliminarM = "14002";
var dmlAuditoriaMaster = "14007";
var dmlgrabarM = "";
//COLUMNAS
var columnasM = new Array("division_desc","marca_mostrar","seleccionado","status",'exclusivo','negocio_id','negocio_desc','division','neg_div_marca_id');
var tiposM = new Array("text","text");
var columnasC = new Array('division_id','marca_id','marca_desc','seleccionado');
var columnasD = new Array('division_id','division_desc','seleccionado','checked');
//DESCRIPCIONES
var descripcionesM = new Array("Divisi&oacute;n","Marca","Seleccionado","Habilitada","Exclusivo",'','','','');
var descripcionesC = new Array('Div','Marca','Descripcion','Selec.');
var descripcionesD = new Array('Divisi&oacute;n','Descripcion','Selec.','Checked');
//PRIMARY KEY
var clavesM = new Array("negocio_id");
//FILTROS
var filtroMaster = new Array("negocio_id","division_id","marca_id");
var labelFiltroMaster = new Array("Grupo de Negocio: ","Divisi&oacute;n: ","Marca: ");
var mensajeFiltroMaster = new Array("Ingrese el Negocio","Ingrese la Divisi&oacute;n","Ingrese la Marca");
var requeridoFiltroMaster = new Array(false,false,false);
var searchAttrFiltroMaster = new Array('detalle','division_desc','detalle');
var tipoFiltroMaster = new Array('FilteringSelect','FilteringSelect','FilteringSelect');
var selectFiltroMaster = new Array('14008','14005','14012');
//FORMULARIO
var camposFormM = new Array('grupo_id','negocio','divisiones','marcas','exclusivo');
var labelFormM = new Array('','Grupo de Negocio: ','Divisiones: ','Marcas: ');
var requeridoFormM = new Array(true,true,true,true);
var regexpFormM = new Array(".*","[a-zA-Z0-9Ò—ø?°! ,.()-_]+");
var mensajesFormM = new Array('','Ingrese el Negocio','Ingrese la o las Divisiones','Ingrese la o las Marcas');
var dojoTypeFormM = new Array('ValidationTextBox','ValidationTextBox','FilteringSelect','FilteringSelect');
var searchAttrFormM = new Array('','','detalle','detalle');
var selectFormM = new Array('','','14009','14006','14013','14014');
//Carga las estructuras de las tablas
var layoutMaster = [
    {width: "15%", field: columnasM[0], name: descripcionesM[0]},
    {width: "70%", field: columnasM[1], name: descripcionesM[1]},
	{width: '7%', field: columnasM[2], name: descripcionesM[2],editable:true, type:dojox.grid.cells.Bool,styles:'text-align:center;'},
	{width: '8%',field:columnasM[3],name: descripcionesM[3],styles:'text-align:center;'},
	{width: '8%',field:columnasM[4],name: descripcionesM[4],styles:'text-align:center;'},
	{width: 'auto',field:columnasM[5],name: descripcionesM[5],hidden:true},
	{width: 'auto',field:columnasM[6],name: descripcionesM[6],hidden:true},
	{width: 'auto',field:columnasM[7],name: descripcionesM[7],hidden:true},
	{width: '8%',field:columnasM[8],name: descripcionesM[8],hidden:true}];
var layoutEnvio = [
    {width: "15%", field: columnasM[0], name: descripcionesM[0]},
    {width: "70%", field: columnasM[1], name: descripcionesM[1]},
	{width: '7%', field: columnasM[2], name: descripcionesM[2],editable:true, type:dojox.grid.cells.Bool,styles:'text-align:center;'},
	{width: '8%',field:columnasM[3],name: descripcionesM[3],styles:'text-align:center;'},
	{width: '8%',field:columnasM[4],name: descripcionesM[4],styles:'text-align:center;'},
	{width: 'auto',field:columnasM[5],name: descripcionesM[5],hidden:true},
	{width: 'auto',field:columnasM[6],name: descripcionesM[6],hidden:true},
	{width: 'auto',field:columnasM[7],name: descripcionesM[7],hidden:true},
	{width: '8%',field:columnasM[8],name: descripcionesM[8],hidden:true}];
var layoutMarcasOrigen = [
	{width: "35px", field: columnasC[0], name: descripcionesC[0]},
    {width: "40px", field: columnasC[1], name: descripcionesC[1]},
    {width: "160px", field: columnasC[2], name: descripcionesC[2]},
    {width: "54px", field: columnasC[3], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridOrigenM\');"/> '+descripcionesC[3], editable:true, type:dojox.grid.cells.Bool}];
var layoutMarcasDestino = [
	{width: "35px", field: columnasC[0], name: descripcionesC[0]},
    {width: "40px", field: columnasC[1], name: descripcionesC[1]},
    {width: "160px", field: columnasC[2], name: descripcionesC[2]},
    {width: "54px", field: columnasC[3], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridDestinoM\');"/> '+descripcionesC[3], editable:true, type:dojox.grid.cells.Bool}];
var layoutDivisionesOrigen = [
    {width: "45px", field: columnasD[0], name: descripcionesD[0]},
    {width: "200px", field: columnasD[1], name: descripcionesD[1]},
    {width: "54px", field: columnasD[2], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridOrigenD\');"/> '+descripcionesD[2], editable:true, type:dojox.grid.cells.Bool}];
var layoutDivisionesDestino = [
    {width: "45px", field: columnasD[0], name: descripcionesD[0]},
    {width: "200px", field: columnasD[1], name: descripcionesD[1]},
    {width: "54px", field: columnasD[2], name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridDestinoD\');"/> '+descripcionesD[2], editable:true, type:dojox.grid.cells.Bool},
	{width: "0px", field: columnasD[3], name: descripcionesD[3],hidden:true}];	
var cantidadGrillas = 0;
//campos de auditoria
var camposAuditoriaM = new Array('usr_altam','fecha_altam','usr_modifm','fecha_modifm');
var labelAuditoria = new Array('Creado por: ','Fecha de creaci&oacute;n: ','Modificado por: ','Fecha de modificaci&oacute;n: ');
//Carga de titulos
document.getElementById("bloqueMaster").innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	if(dijit.byId('buscarMaster')){
		dijit.byId('buscarMaster').destroy();
		dijit.byId('separatorMaster').destroy();
	}
	if(dijit.byId('habilitarMaster')){
		dijit.byId('habilitarMaster').attr('disabled',false);
		layoutMaster = layoutEnvio;
		dojo.place('<div id="masivo" class="dijitToolbar" style="text-align:right;height:24px;padding-right:12%;"><label for="selec">Seleccionar Todos</label><input id="selec" type="checkbox" title="Seleccionar Todos" onclick="CheckColumn(this);"/></div>',dojo.byId('cabecera'));
	}
	if(dijit.byId('eliminarMaster')){
		dijit.byId('eliminarMaster').attr('disabled',false);}
		
	if(dijit.byId('editarMaster')){
		dijit.byId('editarMaster').attr('label','Agregar Marca');}
	//Modificacion de label e iconos de los botones
	ArmadoFiltroYAuditoria();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function OnSelectedMaster(grilla){
	for(i=0;i<cantidadGrillas;i++){if(dijit.byId('grilla'+i)!=grilla){dijit.byId('grilla'+i).selection.clear();}}
	registroSeleccionado = grilla.selection.getSelected();
	
	HabilitarBotonesMaster(2,false);
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
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function ArmadoFiltroYAuditoria(){
	if(dijit.byId('filtrMaster')){
		//Limpio Filtros
		for(i=0;i<filtroMaster.length;i++){if(dijit.byId('filtro'+i)){dijit.byId('filtro'+i).destroy();}}
		//Creo Filtros
		var divFiltros = new dijit.layout.ContentPane({style:'width:330px;'});
		var tablaFiltros = new dojox.layout.TableContainer({cols:1,labelWidth:'150'});
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='TextBox'){tablaFiltros.addChild(new dijit.form.TextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='ValidationTextBox'){tablaFiltros.addChild(new dijit.form.ValidationTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',maxLength:'40',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i]}));}
			if(tipoFiltroMaster[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',constraints:{datePattern:'dd-MM-yyyy'},promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],onChange:function(){if(tipoFiltroMaster[parseInt(this.id.charAt(6))+1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))+1)).constraints.min = arguments[0];}else if(tipoFiltroMaster[parseInt(this.id.charAt(6))-1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))-1)).constraints.max = arguments[0];}}}));}
			if(tipoFiltroMaster[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:'filtro'+i,label:labelFiltroMaster[i],type:'text',promptMessage:mensajeFiltroMaster[i],required:requeridoFiltroMaster[i],searchAttr:searchAttrFiltroMaster[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[i]})}));}}
		
		dijit.byId('filtro2').attr('disabled',true);

		//agrego la division a la busqueda de marcas
		dijit.byId('filtro2').store.url += '&division_id='+dijit.byId('filtro1').attr('value');
		//Le agrego el filtro de negocio al filtro de Division
		dijit.byId('filtro0').onChange= function(value){
			if(value!=''){
				dijit.byId('filtro1').attr('disabled',false);
				dijit.byId('filtro1').attr('required',false);
				dijit.byId('filtro1').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[1]+'&negocio_id='+value}));
				dijit.byId('filtro1').store.fetch();}
			else{dijit.byId('filtro1').attr('disabled',false);
				dijit.byId('filtro1').attr('required',false);
				dijit.byId('filtro1').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[1]+'&negocio_id='+value}));}
				dijit.byId('filtro1').attr('value',null);
		}
		//Le agrego el filtro de division al filtro de marca
		dijit.byId('filtro1').onChange= function(value){
			if(value!=''){
				dijit.byId('filtro2').attr('disabled',false);
				dijit.byId('filtro2').attr('required',false);
				dijit.byId('filtro2').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFiltroMaster[2]+'&division_id='+value+'&negocio_id='+dijit.byId('filtro0').attr('value')}));
				dijit.byId('filtro2').store.fetch();}
			else{dijit.byId('filtro2').attr('disabled',true);
				dijit.byId('filtro2').attr('required',false);}
				dijit.byId('filtro2').attr('value',null);
		}
				
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
	//Validacion de que el formulario estÈ bien cargado
	if(dijit.byId('filtro0').attr('value')){BuscarMaster();dijit.byId('filtrosMaster').onCancel();}
	else if(dijit.byId('filtrosMaster').validate()){BuscarMaster();dijit.byId('filtrosMaster').onCancel();}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function NuevoMaster(){

	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:300px;text-align:center;'});
	//Creacion del formulario
	var exclusivo = {identifier:'id',label:'detalle',items:[{id:'S',detalle:'SI'},{id:'N',detalle:'NO'}]};
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'180',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[0],maxLength:'40',style:'visibility:hidden;width:0px;',label:labelFormM[0],trim:true,promptMessage:mensajesFormM[0],regExp:regexpFormM[0],value:0,required:requeridoFormM[0]}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:camposFormM[1],maxLength:'40',label:labelFormM[1],trim:true,promptMessage:mensajesFormM[1],regExp:regexpFormM[1],required:requeridoFormM[1]}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[2],required:requeridoFormM[2],style:'width:180px;height:170px;',label:labelFormM[2],multiple:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[2]}),onChange:function(value){dijit.byId('marcas').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[3]+'&division_id='+value}));}}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[3],style:'width:180px;height:190px;',required:requeridoFormM[3],multiple:true,label:('<button class="dijitButtonNode" onclick="MostrarMarcas();" type="button">Marcas</button>'),readOnly:false}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:camposFormM[4],style:'width:180px;height:40px;',required:requeridoFormM[3],multiple:false,label:'Exclusivo: ',readOnly:false,store:new dojo.data.ItemFileReadStore({data:exclusivo})}));
		
	divCamposM.attr('content',tablaForm);
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
	dojo.place(botonGrabar.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Alta de Negocio.',id:'dialogMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Seteo propiedades para Nuevo
	dmlgrabarM = dmlnuevoM;
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDialogoMarcas(){
	//verificar que haya subregion
	if(!dijit.byId('division_id').isValid()){dijit.byId('division_id').focus();return;}
	dijit.byId('marca_id').attr('value','');
	dijit.byId('marca_desc').attr('value','');
	dijit.byId('gridOrigenM').attr('autoWidth',true);
	
	//Seteo los valores de las Marcas Existentes en el negocio
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=14018&negocio_id='+registroSeleccionado[0]['negocio_id'][0];
	dijit.byId('gridDestinoM').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridDestinoM').attr('autoWidth',true);
	
	dijit.byId('dialogMarcas').show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SeteoMarcas(){
	while(dijit.byId('marcas').options.length>0){
		dijit.byId('marcas').removeOption(dijit.byId('marcas').options[0]);}
var ActualizarMultiselect = function(items,request){
		for(i=0;i<items.length;i++){
		if(items[i]['marcado']=='true'){
			dijit.byId('marcas').addOption({disabled:true,selected:false,label:items[i]['division_id']+' - '+items[i]['marca_id']+' - '+items[i]['marca_desc'],value:items[i]['division_id']+'-'+items[i]['marca_id']});
			}
			else{dijit.byId('marcas').addOption({disabled:false,selected:false,label:items[i]['division_id']+' - '+items[i]['marca_id']+' - '+items[i]['marca_desc'],value:items[i]['division_id']+'-'+items[i]['marca_id']});}
			}
	}
dijit.byId('marcas').store.fetch({query:{},onComplete:ActualizarMultiselect});

}
////////////////////////////////////////////////////////////////////////////////////////////////////
function MostrarMarcas(){
dijit.byId('marcas').store.fetch();
dijit.byId('marcas').startup();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMaster(){
	//Limpiar el contentpane...
	registroSeleccionado = null;
	dijit.byId('gridContainer').destroyDescendants();
	//Obtengo propuestas
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlBuscarMaster;
	if(filtroMaster.length > 0){
		for(i=0;i<filtroMaster.length;i++){
			if(tipoFiltroMaster[i]=='DateTextBox'){urlValue = urlValue +'&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).valueNode.value;}
			else{urlValue +='&'+filtroMaster[i]+'='+dijit.byId('filtro'+i).attr('value');
				}
			 filtroValue[i]=dijit.byId('filtro'+i).attr('value');
			}
		}
	var storeCabecera = new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}); 
	//Obtengo Grupos de Negocios, Divisiones y Marcas
	var CargarGrillas = function(items,request){
		if(items.length==0){Mensaje('No se han encontrado registros','error','master');}
		cantidadGrillas = items.length;
		for(i=0;i<items.length;i++){
			//Datos de la cabecera de la grilla
			var cabecera = dojo.create('div',{innerHTML:'<table><tr><td width="100%">'+items[i]['negocio_id']+' - '+items[i]['negocio_desc']+'</td></tr></table>'});
			dojo.attr(cabecera,'class','dijitToolbar');
			dojo.place(cabecera,dojo.byId('gridContainer'),'last');
			//Creacion de grillas dinamicas
			var urlValue2 ='dbi/negocios_divisionDetalle.php?sid='+gvarSID+'&negocio_id='+items[i]['negocio_id'][0];
        	if(filtroMaster.length > 0){
        		for(j=0;j<filtroMaster.length;j++){
					if (filtroMaster[j] != filtroMaster[0]){
						if(tipoFiltroMaster[j]=='DateTextBox'){urlValue2 +='&'+filtroMaster[j]+'='+filtroValue[j];} //+dijit.byId('filtro'+j).valueNode.value;}
						else{urlValue2 +='&'+filtroMaster[j]+'='+filtroValue[j];} //dijit.byId('filtro'+j).attr('value');}
					}
				}
				
			}	

			var grilla = new dojox.grid.DataGrid({id:'grilla'+i,store:new dojo.data.ItemFileWriteStore({url:urlValue2,urlPreventCache:true}),autoHeight:true,structure:layoutMaster,onSelected:function(){OnSelectedMaster(this);}},document.createElement('div'));
			dojo.place(grilla.domNode,dojo.byId('gridContainer'),'last');
			grilla.startup();
			}
		}

		storeCabecera.fetch({query:{},onComplete:CargarGrillas});

}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:300px;text-align:center;'});
	//Creacion del formulario
	
	var exclusivo = {identifier:'id',label:'detalle',items:[{id:'S',detalle:'SI'},{id:'N',detalle:'NO'}]};
	if(registroSeleccionado[0]['exclusivo'][0] == 'SI'){registroSeleccionado[0]['exclusivo'][0] = 'S'};
	if(registroSeleccionado[0]['exclusivo'][0] == 'NO'){registroSeleccionado[0]['exclusivo'][0] = 'N'};
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'180',style:'text-align:left;'});
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:'grupo_id',maxLength:'40',style:'visibility:hidden;width:0px;',value:registroSeleccionado[0]['negocio_id'][0],label:'',readOnly:true}));
		tablaForm.addChild(new dijit.form.ValidationTextBox({id:'negocio',maxLength:'40',value:registroSeleccionado[0]['negocio_desc'][0],style:'width:180px;',regExp:regexpFormM[1],label:labelFormM[0],readOnly:false}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'divisiones',required:requeridoFormM[2],style:'width:180px;height:170px;',label:labelFormM[2],multiple:true,store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+selectFormM[2]}),onChange:function(value){dijit.byId('marcas').attr('store',new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid=14018&division_id='+value+'&negocio_id='+registroSeleccionado[0]['negocio_id'][0]}));}}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'marcas',style:'width:180px;height:190px;',required:requeridoFormM[3],multiple:true,label:('<button class="dijitButtonNode" onclick="SeteoMarcas();" type="button">Marcas</button>'),readOnly:false}));
		tablaForm.addChild(new dojox.form.CheckedMultiSelect({id:'exclusivo',value:registroSeleccionado[0]['exclusivo'][0],style:'width:180px;height:40px;',required:requeridoFormM[3],multiple:false,label:'Exclusivo: ',readOnly:false,store:new dojo.data.ItemFileReadStore({data:exclusivo})}));
	divCamposM.attr('content',tablaForm);
	//Creacion de botones
	var botonGrabar = new dijit.form.Button({label:'Grabar',type:'button',iconClass:'dijitEditorIcon dijitEditorIconSave',onClick:function(){GrabarMaster();}});
	dojo.place(botonGrabar.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
	dialogM = new dijit.Dialog({title:'Agregar Marcas al Grupo.',id:'dialogMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Seteo propiedades para Nuevo
	dmlgrabarM = dmlnuevoM;
	//Se muestra el dialogo
	dialogM.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarMaster(){
	marcasChecked = '';
	for(i=0;i<cantidadGrillas;i++){
		if(dijit.byId('grilla'+i).store){
			var ObtenerMarcas = function(item){
				marcasChecked+=item['neg_div_marca_id'][0]+',';
			}
			dijit.byId('grilla'+i).store.fetch({query:{seleccionado:'true'},onItem:ObtenerMarcas});
		}
	}
	if(marcasChecked==''){Mensaje('Seleccione al menos una Marca','error','master');return;}
PopUp('Advertencia','Se eliminaran las Marcas seleccionadas.','EliminarMasivo()');
	
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function Eliminar(){
	var mensaje = null;
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmleliminarM+'&negocio_id='+registroSeleccionado[0]['negocio_id'][0];

	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==''){
			Mensaje(response.errmsg,'mensaje','master');
			BuscarMaster();
			procesando.hide();
		}else{
			PopUp('Error',response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarMasivo(){

	var mensaje = null;

	//GrabaciÛn de datos en la base de datos
	marcasChecked = marcasChecked.substr(0,marcasChecked.length-1);
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmleliminarM+'&marcas='+marcasChecked;
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==''){
			BuscarMaster();
			Mensaje(response.errmsg,'mensaje','master');
		}else{
			PopUp('Error',response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function AuditoriaMaster(){
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlAuditoriaMaster;
	//for(i=0;i<cantidadGrillas;i++){if(dijit.byId('grilla'+i)!=grilla){dijit.byId('grilla'+i).selection.clear();}}
	var items = registroSeleccionado[i];
	for(i=0;i<clavesM.length;i++){urlValue +='&'+clavesM[i]+'='+registroSeleccionado[0]['negocio_id'][0];}
	//Carga los valores del registro seleccionado
	var registroCargado = new dojo.data.ItemFileReadStore({url:urlValue});
	var gotData = function(items,request){
		for(i=0;i<camposAuditoriaM.length;i++){dijit.byId(camposAuditoriaM[i]).attr('value',registroCargado.getValue(items[0],camposAuditoriaM[i]));}}
	registroCargado.fetch({query:{},onComplete:gotData});	
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMaster(){
	
	if(!dijit.byId('negocio').isValid()){dijit.byId('negocio').focus();return;}
	//Habilito los campos primary de vuelta, de lo contrario no se pasan por post
	for(i=0;i<clavesM.length;i++){dijit.byId(camposFormM[i]).attr('disabled',false);}
	//GeneraciÛn de la URL
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid='+dmlgrabarM;
	for(i=0;i<camposFormM.length;i++){
		urlValue = urlValue +'&'+camposFormM[i]+'='+dijit.byId(camposFormM[i]).attr('value');}
	//GrabaciÛn de datos en la base de datos
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if (response.errcode==''){
			Mensaje(response.errmsg,'mensaje','master');
			CancelarMaster();//Elimino el dialogo
			BuscarMaster();//Refresco del gridMaster
			procesando.hide();

		} else {
			PopUp('Error', response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarMarcas(){
	while(dijit.byId('marcas').options.length>0){
		dijit.byId('marcas').removeOption(dijit.byId('marcas').options[0]);}
	if(dijit.byId('gridDestinoM').store==null){return;}
	var ActualizarMultiselect = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId('marcas').addOption({disabled:true,selected:true,label:items[i]['marca_id']+'-'+items[i]['marca_desc'],value:items[i]['marca_id']});}
		dijit.byId("dialogMarcas").hide();
	}
	dijit.byId('gridDestinoM').store.fetch({query:{},onComplete:ActualizarMultiselect});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarMarca(){
	if(!dijit.byId('gridDestinoM').store){
		var storeDestino = {identifier: 'marca_id', label: 'marca_desc', items: []};
		dijit.byId('gridDestinoM').setStore(new dojo.data.ItemFileWriteStore({data: storeDestino}));
		dijit.byId('gridDestinoM').attr('autoWidth',true);
	}
	var AgregarItem = function(item){
		var marId = dijit.byId('gridOrigenM').store.getValue(item,'marca_id');
		var marDesc = dijit.byId('gridOrigenM').store.getValue(item,'marca_desc');
		var divId = dijit.byId('gridOrigenM').store.getValue(item,'division_id');
		dijit.byId('gridDestinoM').store.fetchItemByIdentity({identity:marId,onItem:function(item){
			if(item == null){dijit.byId('SacarM').attr('disabled',false);dijit.byId('gridDestinoM').store.newItem({division_id:divId,marca_id:marId,marca_desc:marDesc,seleccionado:false});}}});
	}
	var ActualizarGrilla = function(items,request){dijit.byId('gridDestinoM').store.save();}
	dijit.byId('gridOrigenM').store.fetch({query:{seleccionado:true},onItem:AgregarItem,onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SacarMarca(){
	var QuitarItem = function(item){dijit.byId('gridDestinoM').store.deleteItem(item);}
	var ActualizarGrilla = function(items,request){dijit.byId('gridDestinoM').store.save();}
	dijit.byId('gridDestinoM').store.fetch({query:{seleccionado:true},onItem:QuitarItem,onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarMarcas(){
	var divisionId = dijit.byId('divisiones').attr('value');
	//extraigo solo el codigo de la divisionId.
	var ind0 = divisionId.indexOf('-');
	if (ind0 > 0) {divisionId = divisionId.substring(0,ind0);}
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=14014&division_id='+divisionId;
	dijit.byId('gridOrigenM').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigenM').attr('autoWidth',true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDialogoDivisiones(){
	//verificar que haya subregion
	dijit.byId('division_id').attr('value','');
	dijit.byId('division_desc').attr('value','');
	dijit.byId('gridOrigenD').attr('autoWidth',true);
	//Seteo los valores de las divisiones Existentes en el negocio
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=14017&negocio_id='+registroSeleccionado[0]['negocio_id'][0];
	dijit.byId('gridDestinoD').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridDestinoD').attr('autoWidth',true);
	dijit.byId('dialogDivisiones').show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SetearDivisiones(){
	//Seteo los valores de las divisiones Existentes en el negocio
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=14017&negocio_id='+registroSeleccionado[0]['negocio_id'][0];
	storeTemporalD = new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true});
	
	var ActualizarMultiselect = function(items,request){
		for(i=0;i<items.length;i++){
		if(items[i]['marcado']=='true'){
			dijit.byId('divisiones').addOption({disabled:true,selected:false,label:items[i]['division_id']+'-'+items[i]['division_desc'],value:items[i]['division_id']});
			}
			else{dijit.byId('divisiones').addOption({disabled:false,selected:false,label:items[i]['division_id']+'-'+items[i]['division_desc'],value:items[i]['division_id']});}
			}
	}
	storeTemporalD.fetch({query:{},onComplete:ActualizarMultiselect});
	
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarDivisiones(){
	while(dijit.byId('divisiones').options.length>0){
		dijit.byId('divisiones').removeOption(dijit.byId('divisiones').options[0]);}
	if(dijit.byId('gridDestinoD').store==null){return;}
	var ActualizarMultiselect = function(items,request){
		for(i=0;i<items.length;i++){
		
			dijit.byId('divisiones').addOption({disabled:true,selected:true,label:items[i]['division_id']+'-'+items[i]['division_desc'],value:items[i]['division_id']});}
		dijit.byId("dialogDivisiones").hide();
	}
	dijit.byId('gridDestinoD').store.fetch({query:{},onComplete:ActualizarMultiselect});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarDivision(){
	if(!dijit.byId('gridDestinoD').store){
		var storeDestino = {identifier: 'division_id', label: 'division_desc', items: []};
		dijit.byId('gridDestinoD').setStore(new dojo.data.ItemFileWriteStore({data: storeDestino}));
		dijit.byId('gridDestinoD').attr('autoWidth',true);
	}
	var AgregarItem = function(item){
		var divId = dijit.byId('gridOrigenD').store.getValue(item,'division_id');
		var divDesc = dijit.byId('gridOrigenD').store.getValue(item,'division_desc');
		dijit.byId('gridDestinoD').store.fetchItemByIdentity({identity:divId,onItem:function(item){
			if(item == null){dijit.byId('SacarD').attr('disabled',false);dijit.byId('gridDestinoD').store.newItem({division_id:divId,division_desc:divDesc,seleccionado:false});}}});
	}
	var ActualizarGrilla = function(items,request){dijit.byId('gridDestinoD').store.save();}
	dijit.byId('gridOrigenD').store.fetch({query:{seleccionado:true},onItem:AgregarItem,onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SacarDivision(){
	var QuitarItem = function(item){dijit.byId('gridDestinoD').store.deleteItem(item);}
	var ActualizarGrilla = function(items,request){dijit.byId('gridDestinoD').store.save();}
	dijit.byId('gridDestinoD').store.fetch({query:{seleccionado:true},onItem:QuitarItem,onComplete:ActualizarGrilla});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarDivisiones(){
	var divisionId = dijit.byId('divisiones').attr('value');
	//extraigo solo el codigo de la divisionId.
	var ind0 = divisionId.indexOf('-');
	if (ind0 > 0) {divisionId = divisionId.substring(0,ind0);}
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid=14015';
	dijit.byId('gridOrigenD').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigenD').attr('autoWidth',true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	//Elimino el dialogo
	dijit.byId('dialogMaster').hide();
	dijit.byId('dialogMaster').destroyRecursive();
	dijit.byId('marcas').destroy();
	dijit.byId('divisiones').destroy();
	dijit.byId('negocio').destroy();
	dijit.byId('grupo_id').destroy();
	dijit.byId('exclusivo').destroy();
	//Limpio campos del formulario
	if(dijit.byId(camposFormM[0])){for(i=0;i<camposFormM.length;i++){if(dijit.byId(camposFormM[i])!=null){dijit.byId(camposFormM[i]).destroy();}}}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumnD(checkbox,grilla_id){
	if(dijit.byId(grilla_id).store){
		var Checkear = function(item){
			dijit.byId(grilla_id).store.setValue(item,columnasC[3],checkbox.checked);
		}
		dijit.byId(grilla_id).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId(grilla_id).store.save();}});
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function HabilitarMaster(){
	var marcasChecked = '';
	var statusChecked = '';
	var mensaje = null;
	for(i=0;i<cantidadGrillas;i++){
		if(dijit.byId('grilla'+i).store){
			var ObtenerMarcas = function(item){
				marcasChecked+=item['neg_div_marca_id'][0]+',';
				var status = item['status'][0];
					if (status == 'SI'){status = 'NO'}else{status = 'SI'}
				statusChecked+=status+',';
			}
			dijit.byId('grilla'+i).store.fetch({query:{seleccionado:'true'},onItem:ObtenerMarcas});
		}
	}
	if(marcasChecked==''){Mensaje('Seleccione al menos una Marca','error','master');return;}
	//GrabaciÛn de datos en la base de datos
	marcasChecked = marcasChecked.substr(0,marcasChecked.length-1);
	statusChecked = statusChecked.substr(0,statusChecked.length-1);
	var urlValue ='dbi/e_proc_m.php?sid='+gvarSID+'&dmlid=14011&marca='+marcasChecked+'&status='+statusChecked;
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if(response.errcode==''){
			BuscarMaster();
			Mensaje(response.errmsg,'mensaje','master');
		}else{
			PopUp('Error',response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumn(checkbox){
		for(i=0;i<cantidadGrillas;i++){	
				var Checkear = function(item){
						dijit.byId('grilla'+i).store.setValue(item,'seleccionado',checkbox.checked);
				}
				dijit.byId('grilla'+i).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId('grilla'+i).store.save();}});
		}
}