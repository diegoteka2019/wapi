//TITULOS
var titulos =  new Array('Generaci&oacute;n de Informes');
//DMLs
var dmlReportes = '12205';
var dmlFiltros = '12204';
var dmlGenerar = '12201';
//Store de filtros
var filtroStore;
var filtro_id;
var filtro_label;
var filtro_dojoType;
var filtro_promptMessage;
var filtro_required;
var filtro_regExp;
var filtro_searchAttr;
var filtro_dmlFilteringSelect;
var filtro_dependants;
var filtro_parent;
//Store de clientes para caso particular en Propuestas-Acreditaciones
var storeClientes;
//Carga de titulos
document.getElementById('bloqueMaster').innerHTML = titulos[0];
var layoutClientesOrigen = [
    {width: "45px", field: 'value', name: 'Id'},
    {width: "200px", field: 'detalle', name: 'Raz&oacute;n Social'},
    {width: "54px", field: 'seleccionado', name: '<input type="checkbox" title="Seleccionar Todos" name="selected" onclick="CheckColumnD(this,\'gridOrigen\');"/> Selec.', editable:true, type:dojox.grid.cells.Bool}];
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	if(dijit.byId('nuevoMaster')){
		dijit.byId('nuevoMaster').attr('label','Generar');
		dijit.byId('nuevoMaster').attr('iconClass','generarIcon');
	}
	//Creo selector de reporte
	SelectorReporte();
	//Agrego el boton limpiar para el cual no son necesarios permisos
	dijit.byId('toolbarMaster').addChild(new dijit.form.Button({id:'limpiar',style:'padding-left:3px;padding-right:3px;',iconClass:'limpiar2Icon',title:'Limpiar',showLabel:false,onClick:function(){LimpiarFiltros();}}),2);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SelectorReporte(){
	dijit.byId('divReporte').destroyDescendants();
	if(dijit.byId('reporte')){dijit.byId('reporte').destroy();}
	var reporte = new dojox.layout.TableContainer({cols:1,labelWidth:'120'});
	reporte.addChild(new dijit.form.FilteringSelect({id:'reporte',label:'Nombre del Reporte: ',style:'width:330px;',promptMessage:'Seleccione el reporte a ejecutar',searchAttr:'detalle',store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlReportes}),onChange:function(){CargarFiltros();}}));
	AutoCompletar(dijit.byId('reporte'));
	dijit.byId('divReporte').attr('content',reporte);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarFiltros(){
	BorrarFiltros();
	//Obtengo los filtros de la base de datos
	filtroStore = new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+dmlFiltros+'&reporte_id='+dijit.byId('reporte').attr('value'),urlPreventCache:true})
	//Asigno datos del store a los arrays//Creo
	var AsignarArrays = function(items, request){
		for(i=0;i<items.length;i++){
			filtro_id[i] = filtroStore.getValue(items[i],'id');
			filtro_label[i] = filtroStore.getValue(items[i],'label');
			filtro_dojoType[i] = filtroStore.getValue(items[i],'dojoType');
			filtro_promptMessage[i] = filtroStore.getValue(items[i],'promptMessage');
			filtro_required[i] = filtroStore.getValue(items[i],'required');
			filtro_regExp[i] = filtroStore.getValue(items[i],'regExp');
			filtro_searchAttr[i] = filtroStore.getValue(items[i],'searchAttr');
			filtro_dmlFilteringSelect[i] = filtroStore.getValue(items[i],'dmlFilteringSelect');
			filtro_dependants[i] = filtroStore.getValue(items[i],'dependants');
			filtro_parent[i] = filtroStore.getValue(items[i],'parent');
		}
		CrearFiltros();
	}
	filtroStore.fetch({query:{},onComplete:AsignarArrays});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CrearFiltros(){
	var tablaFiltros = new dojox.layout.TableContainer({cols:2,labelWidth:'165'});
	var multiSeleccion = false;//en caso de haber, se muestra un mensaje aclarativo
	for(i=0;i<filtro_id.length;i++){
		//Elimino el parametro si ya existia
		if(dijit.byId(filtro_id[i])){dijit.byId(filtro_id[i]).destroy();}
		//Caso particular del campo divisiones/negocios

		//Caso particular del campo Clientes
		if(filtro_id[i]=='11'||filtro_id[i]=='24'||filtro_id[i]=='106'||filtro_id[i]=='40'||filtro_id[i]=='52'||filtro_id[i]=='60'||filtro_id[i]=='73'){
			tablaFiltros.addChild(new dojox.form.CheckedMultiSelect({id:filtro_id[i],disabled:true,style:'height:72px;width:180px;',label:filtro_label[i]+'<button class="dijitButtonNode" onclick="VerDialogoClientes();" type="button">Ver</button>',multiple:true,promptMessage:filtro_promptMessage[i],required:filtro_required[i],store:null}));}
		//Autocompletado de campos con el Anio y "mostrar acreditaciones"
		if(filtro_id[i]=='5'||filtro_id[i]=='68'||filtro_id[i]=='80'){
			tablaFiltros.addChild(new dijit.form.ValidationTextBox({id:filtro_id[i],label:filtro_label[i],value:dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'}),promptMessage:filtro_promptMessage[i],required:filtro_required[i],regExp:filtro_regExp[i]}));}
		//TextBox
		if(filtro_dojoType[i]=='TextBox'){tablaFiltros.addChild(new dijit.form.TextBox({id:filtro_id[i],label:filtro_label[i],promptMessage:filtro_promptMessage[i]}));}
		//ValidationTextBox
		if(filtro_dojoType[i]=='ValidationTextBox'&&!(filtro_id[i]=='5')&&!(filtro_id[i]=='68')&&!(filtro_id[i]=='80')){
			tablaFiltros.addChild(new dijit.form.ValidationTextBox({id:filtro_id[i],label:filtro_label[i],promptMessage:filtro_promptMessage[i],required:filtro_required[i],regExp:filtro_regExp[i]}));}
		//DateTextBox
		if(filtro_dojoType[i]=='DateTextBox'){tablaFiltros.addChild(new dijit.form.DateTextBox({id:filtro_id[i],label:filtro_label[i],promptMessage:filtro_promptMessage[i],required:filtro_required[i]}));} /* ,onChange:if(filtroStore.getValue(items[i+1],'dojoType')=='DateTextBox'){dijit.byId(filtroStore.getValue(items[i+1],'id')).constraints.min = arguments[0];}else if(filtroStore.getValue(items[i-1],'dojoType')=='DateTextBox'){dijit.byId(filtroStore.getValue(items[i-1],'id')).constraints.max = arguments[0];} *///function(){if(tipoFiltroMaster[parseInt(this.id.charAt(6))+1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))+1)).constraints.min = arguments[0];}else if(tipoFiltroMaster[parseInt(this.id.charAt(6))-1]=='DateTextBox'){dijit.byId('filtro'+(parseInt(this.id.charAt(6))-1)).constraints.max = arguments[0];}}}));}
		//FilteringSelect y CheckedMultiSelect
		if(filtro_dmlFilteringSelect[i]!=''){
			//si hay que buscar los datos en la base
			if(!isNaN(filtro_dmlFilteringSelect[i])){
				//CheckedMultiSelect
				if(filtro_dojoType[i]=='CheckedMultiSelect'){
					var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid='+filtro_dmlFilteringSelect[i];
					if(filtro_parent[i]!=''){urlValue+='&filter_value='+filtro_parent[i];}
					multiSeleccion=true;
					if(filtro_id[i]=='82'||filtro_id[i]=='87'||filtro_id[i]=='92'||filtro_id[i]=='12'||filtro_id[i]=='25'||filtro_id[i]=='41'||filtro_id[i]=='107'){
					tablaFiltros.addChild(new dojox.form.CheckedMultiSelect({id:filtro_id[i],style:'height:73px;width:180px;',label:filtro_label[i],multiple:true,promptMessage:filtro_promptMessage[i],required:filtro_required[i],onChange:function(value){Filtrar(this.attr('id'));
					if(value!=''){
						if(dijit.byId('96')){dijit.byId('96').attr('readOnly',true)};
						if(dijit.byId('97')){dijit.byId('97').attr('readOnly',true)};
						if(dijit.byId('98')){dijit.byId('98').attr('readOnly',true)};
						if(dijit.byId('99')){dijit.byId('99').attr('readOnly',true)};
						if(dijit.byId('100')){dijit.byId('100').attr('readOnly',true)};
						if(dijit.byId('101')){dijit.byId('101').attr('readOnly',true)};}
					else{if(dijit.byId('96')){dijit.byId('96').attr('readOnly',false)};
						if(dijit.byId('97')){dijit.byId('97').attr('readOnly',false)};
						if(dijit.byId('98')){dijit.byId('98').attr('readOnly',false)};
						if(dijit.byId('99')){dijit.byId('99').attr('readOnly',false)};
						if(dijit.byId('100')){dijit.byId('100').attr('readOnly',false)};
						if(dijit.byId('101')){dijit.byId('101').attr('readOnly',false)};}}
						,store:new dojo.data.ItemFileReadStore({url:urlValue,urlPreventCache:true})}));
					}else if (filtro_id[i]=='96'||filtro_id[i]=='97'||filtro_id[i]=='98'||filtro_id[i]=='99'||filtro_id[i]=='100'||filtro_id[i]=='101'){
					tablaFiltros.addChild(new dojox.form.CheckedMultiSelect({id:filtro_id[i],style:'height:73px;width:180px;',label:filtro_label[i],multiple:true,promptMessage:filtro_promptMessage[i],required:filtro_required[i],onChange:function(value){Filtrar(this.attr('id'));
					if(value!=''){
						if(dijit.byId('82')){dijit.byId('82').attr('readOnly',true)};
						if(dijit.byId('87')){dijit.byId('87').attr('readOnly',true)};
						if(dijit.byId('92')){dijit.byId('92').attr('readOnly',true)};
						if(dijit.byId('12')){dijit.byId('12').attr('readOnly',true)};
						if(dijit.byId('25')){dijit.byId('25').attr('readOnly',true)};
						if(dijit.byId('41')){dijit.byId('41').attr('readOnly',true)};
						if(dijit.byId('107')){dijit.byId('107').attr('readOnly',true)};}
					else{if(dijit.byId('82')){dijit.byId('82').attr('readOnly',false)};
						if(dijit.byId('87')){dijit.byId('87').attr('readOnly',false)};
						if(dijit.byId('92')){dijit.byId('92').attr('readOnly',false)};
						if(dijit.byId('12')){dijit.byId('12').attr('readOnly',false)};
						if(dijit.byId('25')){dijit.byId('25').attr('readOnly',false)};
						if(dijit.byId('41')){dijit.byId('41').attr('readOnly',false)};
						if(dijit.byId('107')){dijit.byId('107').attr('readOnly',false)};}}
						,store:new dojo.data.ItemFileReadStore({url:urlValue,urlPreventCache:true})}));
					}else{tablaFiltros.addChild(new dojox.form.CheckedMultiSelect({id:filtro_id[i],style:'height:73px;width:180px;',label:filtro_label[i],multiple:true,promptMessage:filtro_promptMessage[i],required:filtro_required[i],onChange:function(){Filtrar(this.attr('id'));},store:new dojo.data.ItemFileReadStore({url:urlValue,urlPreventCache:true})}));}
					}
				//FilteringSelect
				if(filtro_dojoType[i]=='FilteringSelect'){
					tablaFiltros.addChild(new dijit.form.FilteringSelect({id:filtro_id[i],label:filtro_label[i],promptMessage:filtro_promptMessage[i],required:filtro_required[i],searchAttr:filtro_searchAttr[i],store:new dojo.data.ItemFileReadStore({url:'dbi/q.php?sid='+gvarSID+'&dmlid='+filtro_dmlFilteringSelect[i]})}));}
				}
			//si ya viene el store armado
			else{
				var data=eval('(' + filtro_dmlFilteringSelect[i] + ')');
				//CheckedMultiSelect
				if(filtro_dojoType[i]=='CheckedMultiSelect'){multiSeleccion=true;tablaFiltros.addChild(new dojox.form.CheckedMultiSelect({id:filtro_id[i],style:'height:73px;width:180px;',label:filtro_label[i],multiple:true,promptMessage:filtro_promptMessage[i],required:filtro_required[i],store:new dojo.data.ItemFileReadStore({data:data})}));}
				//FilteringSelect
				if(filtro_dojoType[i]=='FilteringSelect'){tablaFiltros.addChild(new dijit.form.FilteringSelect({id:filtro_id[i],label:filtro_label[i],promptMessage:filtro_promptMessage[i],required:filtro_required[i],searchAttr:filtro_searchAttr[i],store:new dojo.data.ItemFileReadStore({data:data})}));}
				}
		}
	}
	//Agrego mensaje aclarativo
	if(multiSeleccion){dijit.byId('divFiltros').attr('content','En caso de no seleccionar ning&uacute;n valor en los filtros de m&uacute;ltiple selecci&oacute;n, ser&aacute;n seleccionados todos.<br><br>');}
	//Asigno los filtros al contentpane declarado en el HTML
	dojo.place(tablaFiltros.domNode,dijit.byId('divFiltros').domNode,'last');
	tablaFiltros.startup();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function Filtrar(f_id){
	for(i=0;i<filtro_id.length;i++){
		if(filtro_id[i]==f_id){
			if(filtro_dependants[i]!=''){
				for(j=0;j<filtro_dependants[i].length;j+=4){
					for(k=0;k<filtro_id.length;k++){
						if(filtro_id[k]==filtro_dependants[i].substring(j,j+3).replace(/X/gi,'')){
							if(filtro_id[i]=='100'||filtro_id[i]=='99'){
								var urlValue = 'dbi/q.php?sid='+gvarSID;
								if(dijit.byId(filtro_id[i]).attr('value')==''){
									urlValue+='&dmlid=12211&filter_value='+filtro_parent[k];}
								else{urlValue+='&dmlid=12226&filter_value='+dijit.byId(filtro_id[i]).attr('value');}
								dijit.byId(filtro_dependants[i].substring(j,j+3).replace(/X/gi,'')).setStore(new dojo.data.ItemFileReadStore({url:urlValue,urlPreventCache:true}));
							}else{
								var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid='+filtro_dmlFilteringSelect[k];
								if(dijit.byId(filtro_id[i]).attr('value')==''){
									urlValue+='&filter_value='+filtro_parent[k];}
								else{urlValue+='&filter_value='+dijit.byId(filtro_id[i]).attr('value');}
								dijit.byId(filtro_dependants[i].substring(j,j+3).replace(/X/gi,'')).setStore(new dojo.data.ItemFileReadStore({url:urlValue,urlPreventCache:true}));
							}
						}
					}
				}
			}
			return;
		}
	}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function LimpiarFiltros(){
	//Seteo el atributo value = '' para todos los filtros
	var Limpieza = function(items,request){
		for(i=0;i<items.length;i++){
			dijit.byId(filtroStore.getValue(items[i],'id')).attr('value','');
			if(filtroStore.getValue(items[i],'id')=='11'||filtroStore.getValue(items[i],'id')=='24'||filtroStore.getValue(items[i],'id')=='106'||filtroStore.getValue(items[i],'id')=='40'||filtroStore.getValue(items[i],'id')=='52'||filtroStore.getValue(items[i],'id')=='60'||filtroStore.getValue(items[i],'id')=='73'){
				dijit.byId(filtroStore.getValue(items[i],'id')).setStore(null);}
		}}
	filtroStore.fetch({query:{},onComplete:Limpieza});
	dijit.byId('gridOrigen').setStore(null);dijit.byId('gridOrigen').update();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BorrarFiltros(){
	//borrar los objetos creados por el tablecontainer si tira error
	filtroStore = null;
	filtro_id = new Array();
	filtro_label = new Array();
	filtro_dojoType = new Array();
	filtro_promptMessage = new Array();
	filtro_required = new Array();
	filtro_regExp = new Array();
	filtro_searchAttr = new Array();
	filtro_dmlFilteringSelect = new Array();
	filtro_dependants = new Array();
	filtro_parent = new Array();
	dijit.byId('divFiltros').destroyDescendants();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function NuevoMaster(){
	//Se arma la Url
	var urlValue = 'dbi/e_proc_t.php?sid='+gvarSID+'&dmlid='+dmlGenerar+'&reporte_id='+dijit.byId('reporte').attr('value');
	var campos = '';
	var valores = '';
	for(i=0;i<filtro_id.length;i++){
		//Validación de campos
		if(filtro_dojoType[i]!='CheckedMultiSelect'){if(!dijit.byId(filtro_id[i]).validate()){dijit.byId(filtro_id[i]).focus();return;}}
		if(i!=0){campos+=';';valores+=';';}
		campos+=filtro_id[i];
		if(dijit.byId(filtro_id[i]).attr('value')==''){
			valores+='NULL';
		} else {
			if(filtro_dojoType[i]=='DateTextBox'){
				valores+=dijit.byId(filtro_id[i]).valueNode.value;
			}else{
				valores+=dijit.byId(filtro_id[i]).attr('value');}
		}
	}
	urlValue+='&campos='+campos+'&valores='+valores;
	//Se genera el informe
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if (response.ticket_id){Mensaje('Se gener&oacute; el informe. Consulte el Ticket: '+response.ticket_id,'mensaje','master');
		}else{PopUp('Error', response.errmsg);}
	}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function VerDialogoClientes(){//Función para caso particular del campo Clientes
	//verificar que haya subregion
	dijit.byId('razon').attr('value','');
	dijit.byId('gridOrigen').attr('autoWidth',true);
	dijit.byId('dialogClientes').show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarClientes(){//Función para caso particular del campo Clientes
	var urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=12215&razon_social='+dijit.byId('razon').attr('value')+'&subregion_id=';
	if(dijit.byId('7')){if(dijit.byId('7').attr('value')!=''){urlValue+=dijit.byId('7').attr('value')}else{urlValue+='SUBRF.SUB_REGION_ID'}}
	else if(dijit.byId('21')){if(dijit.byId('21').attr('value')!=''){urlValue+=dijit.byId('21').attr('value')}else{urlValue+='SUBRF.SUB_REGION_ID'}}
	else if(dijit.byId('37')){if(dijit.byId('37').attr('value')!=''){urlValue+=dijit.byId('37').attr('value')}else{urlValue+='SUBRF.SUB_REGION_ID'}}
	else if(dijit.byId('49')){if(dijit.byId('49').attr('value')!=''){urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=12215&razon_social='+dijit.byId('razon').attr('value')+'&subregion_id='+dijit.byId('49').attr('value');}else{urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=12221&razon_social='+dijit.byId('razon').attr('value')+'&subregion_id=SUBRF.SUB_REGION_ID';}}
	else if(dijit.byId('57')){if(dijit.byId('57').attr('value')!=''){urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=12215&razon_social='+dijit.byId('razon').attr('value')+'&subregion_id='+dijit.byId('57').attr('value');}else{urlValue = 'dbi/q.php?sid='+gvarSID+'&dmlid=12221&razon_social='+dijit.byId('razon').attr('value')+'&subregion_id=SUBRF.SUB_REGION_ID';}}
	else if(dijit.byId('72')){if(dijit.byId('72').attr('value')!=''){urlValue+=dijit.byId('72').attr('value')}else{urlValue+='SUBRF.SUB_REGION_ID'}}
	else if(dijit.byId('105')){if(dijit.byId('105').attr('value')!=''){urlValue+=dijit.byId('105').attr('value')}else{urlValue+='SUBRF.SUB_REGION_ID'}}
	dijit.byId('gridOrigen').setStore(new dojo.data.ItemFileWriteStore({url:urlValue,urlPreventCache:true}));
	dijit.byId('gridOrigen').attr('autoWidth',true);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CargarClientes(){//Función para caso particular del campo Clientes
	dijit.hideTooltip(dijit.byId('gridOrigen').domNode);
	if(dijit.byId('gridOrigen').store==null){return;}
	var cliente_aux = null;
	var ActualizarMultiselect = function(items,request){
		if(dijit.byId('11')){cliente_aux=dijit.byId('11')}else if(dijit.byId('24')){cliente_aux=dijit.byId('24')}else if(dijit.byId('106')){cliente_aux=dijit.byId('106')}else if(dijit.byId('40')){cliente_aux=dijit.byId('40')}else if(dijit.byId('52')){cliente_aux=dijit.byId('52')}else if(dijit.byId('60')){cliente_aux=dijit.byId('60')}else if(dijit.byId('73')){cliente_aux=dijit.byId('73')}
		while(cliente_aux.options.length>0){cliente_aux.removeOption(cliente_aux.options[0]);}
		for(i=0;i<items.length;i++){
			cliente_aux.addOption({disabled:true,selected:true,label:items[i]['detalle'],value:items[i]['value']});}
		dijit.byId("dialogClientes").hide();
	}
	dijit.byId('gridOrigen').store.fetch({query:{seleccionado:true},onComplete:ActualizarMultiselect});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CheckColumnD(checkbox,grilla_id){
	if(dijit.byId(grilla_id).store){
		var Checkear = function(item){
			dijit.byId(grilla_id).store.setValue(item,'seleccionado',checkbox.checked);
		}
		dijit.byId(grilla_id).store.fetch({query:{},onItem:Checkear,onComplete:function(){dijit.byId(grilla_id).store.save();}});
	}
}