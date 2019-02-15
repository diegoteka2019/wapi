//TITULOS
var titulos = new Array("Administraci&oacute;n de Perfiles");
//DMLS
var dmlbuscarM = "13";
var dmlnuevoM = "9";
var dmleditarM = "10";
var dmlbuscarUnicoM = "12"; 
var dmleliminarM = "11";
var dmlgrabarM = "";
//TABLAS
var columnasM = new Array("usuario_id","clave2","apellido","nombre");
var anchosM = new Array("8%","25%","25%","8%");
var tiposM = new Array("text","password","text","text");
var descripcionesM = new Array("Id Usuario","Clave","Apellido","Nombre");
var clavesM = new Array("usuario_id");
//FILTROS
var filtrosM = new Array("usuario_id","apellido","nombre");
var labelFiltroM = new Array("Id Usuario :","Apellido :","Nombre :");
var mensajesFiltroM = new Array("Ingrese el usuario a buscar","Ingrese el apellido a buscar","Ingrese el nombre a buscar");
//FORMULARIOS
var tipoFormM = new Array("ValidationTextBox","ValidationTextBox","ValidationTextBox","ValidationTextBox")
var regexpFormM = new Array("","","","");
var requeridoFormM = new Array(true,false,false,false);
var trimFormM = new Array(true,true,true,true);
var mensajesFormM = new Array("","","","");
var mensajesInvFormM = new Array("","","","");
//ESTRUCTURAS DE LAS TABLAS
var layoutM = [
    {width: anchosM[0], field: columnasM[0], name: descripcionesM[0]},
    {width: anchosM[1], field: columnasM[1], name: descripcionesM[1]},
    {width: anchosM[2], field: columnasM[2], name: descripcionesM[2]},
    {width: anchosM[3], field: columnasM[3], name: descripcionesM[3]}];
//Carga de titulos
dojo.byId("bloqueMaster").title = titulos[0];
//Armado de filtro dinámico
ArmadoFiltro();
////////////////////////////////////////////////////////////////////////////////////////////////////
function ArmadoFiltro(){
	filtroMaster = '<table style="width:95%;">';
	for(i=0;i<filtrosM.length;i++){
		if(i%2==0){filtroMaster += '<tr>';}
		filtroMaster += '<td><label for="filtro'+i+'">'+labelFiltroM[i]+'</label></td>';
		filtroMaster += '<td><input id="filtro'+i+'" name="filtro'+i+'" type="text" dojoType="dijit.form.ValidationTextBox" promptMessage="'+mensajesFiltroM[i]+'"/></td>';
		if(i%2==1){filtroMaster += '</tr>';}
	}
	filtroMaster += '</tr></table>';
	document.getElementById("filtroMaster").innerHTML = filtroMaster;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function DialogFormM(tipo){
	//Creacion del dialogo
	dialog = new dijit.Dialog({ title: "Ingreso de datos", id: "dialogMaster"});
	//Creacion del formulario
	var form = '<form action='+'"dbi/e.php"'+' method='+'"post"'+' name='+'"formMaster"'+' id='+'"formMaster"'+' dojoType='+'"dijit.form.Form"'+'/>';
	form += '<table>';
	for(i=0;i<columnasM.length;i++){
		form += '<tr><td><label for="'+columnasM[i]+'">'+descripcionesM[i]+'</label></td>';
		form += '<td><input id="'+columnasM[i]+'" name="'+columnasM[i]+'" type="'+tiposM[i]+'" dojoType='+'"dijit.form.'+tipoFormM[i]+'" trim="'+trimFormM[i]+'" promptMessage="'+mensajesFormM[i]+'"';
		//Seteo reglas de expresion para las validaciones
		if(regexpFormM[i]){form += 'regexp="'+regexpForm[i]+'"';}
		//Seteo los campos requeridos(claves)
		if (requeridoFormM[i]){form += 'required='+'"true"'+' invalidMessage="'+mensajesInvFormM[i]+'"';}
		form += '/></td></tr>';
	}
	form += '</table></form>';
	//Creacion de botones
	botones = '<button dojoType="dijit.form.Button" onclick="GrabarM()" iconClass="dijitEditorIcon dijitEditorIconSave" label="Grabar"></button><button dojoType="dijit.form.Button" onclick="GrabarCM()" iconClass="cancelarIcon" label="Cancelar"></button>';
	//Aplicar form y botones al dialog
	pane = document.createElement('div');
	pane.innerHTML = form + botones;
	dialog.attr("content",pane);
	//Seteo propiedades para Nuevo o Editar
	if(tipo == "E"){EditarM();}
	else if(tipo == "N"){dmlgrabarM = dmlnuevoM;}
	else if(tipo == "C"){CopiarM();}
	//Se muestra el dialogo
	dialog.show();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function BuscarM(){
	//Armado de URL
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlbuscarM;
	for(i=0;i<filtrosM.length;i++){
		filtro = 'filtro'+(i);
		urlValue = urlValue +'&'+filtrosM[i]+'='+dijit.byId(filtro).attr("value");
	}
	var storeGrid = new dojo.data.ItemFileWriteStore({url: urlValue});
	gridMaster.setStore(storeGrid);
	dijit.byId("gridMaster").attr("autoWidth",true);
	gridMaster.update();
	//Muestro la cantidad obtenida
	storeGrid.fetch({query: {}, onComplete: function(items, request){document.getElementById("cantidadObtenidaM").innerHTML = 'Registros: ' + items.length;}});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarM(){ 
	dmlgrabarM = dmleditarM;
	//Verifico que se halla seleccionado algún registro
	if(!gridMaster.selection.getSelected().length){PopUp("Error","Por favor seleccione un registro");GrabarCM();return;}
	//Inhabilito campos claves para que no se modifiquen
	for(i=0;i<clavesM.length;i++){dijit.byId(clavesM[i]).attr("disabled",true);}
	//tomo los registros seleccionados en el gridMaster
	var items = gridMaster.selection.getSelected();
	//Generación de la URL para obtener el registro seleccionado completo
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlbuscarUnicoM;
	for(i=0;i<clavesM.length;i++){urlValue = urlValue+'&'+clavesM[i]+'='+items[0][columnasM[i]];}
	//Carga los valores del registro seleccionado
	var registroCargado = new dojo.data.ItemFileReadStore({url: urlValue});
	var gotData = function(items, request){
		for(i=0;i<columnasM.length;i++){dojo.byId(columnasM[i]).value = registroCargado.getValue(items[0], columnasM[i]);}
	}
	registroCargado.fetch({query: {}, onComplete: gotData});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CopiarM(){ 
	dmlgrabarM = dmlnuevoM;
	//Verifico que se halla seleccionado algún registro
	if(!gridMaster.selection.getSelected().length){PopUp("Error","Por favor seleccione un registro");GrabarCM();return;}
	//tomo los registros seleccionados en el gridMaster
	var items = gridMaster.selection.getSelected();
	//Generación de la URL
	var urlValue ='dbi/q.php?sid='+gvarSID+'&dmlid='+dmlbuscarUnicoM;
	for(i=0;i<clavesM.length;i++){urlValue = urlValue +'&'+clavesM[i]+'='+items[0][columnasM[i]];}
	var registroCargado = new dojo.data.ItemFileReadStore({url: urlValue});
	//Carga los valores del registro seleccionado
	var gotData = function(items, request){
		for(i=0;i<columnasM.length;i++){
			if(columnasM[i]!=clavesM[i]){//Salteo la clave
				dojo.byId(columnasM[i]).value = registroCargado.getValue(items[0], columnasM[i]);}
		}
	}
	registroCargado.fetch({query: {}, onComplete: gotData});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function PreEliminarM(){
	//Verifico que se halla seleccionado algún registro
	if(gridMaster.selection.getSelected().length){
		//tomo el valor de los campos clave de los registros seleccionados en el gridMaster
		var items = gridMaster.selection.getSelected();
		//Generación de la URL y el mensaje de advertencia
		var urlValue ='dbi/e.php?sid='+gvarSID+'&dmlid='+dmleliminarM;
		mensaje = 'Realmente desea eliminar el registro?';
		for(i=0;i<clavesM.length;i++){
			urlValue = urlValue +'&'+clavesM[i]+'='+items[0][columnasM[i]];
			mensaje = mensaje + '<br>'+clavesM[i]+': '+items[0][columnasM[i]];
		}
		PopUp("Advertencia!", mensaje, "EliminarM('"+urlValue+"');");
	}else{
		PopUp("Error","Por favor seleccione un registro");
		return;}
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EliminarM(urlValue){
	procesando.show();
	//Se elimina el registro de la base de datos
	dojo.xhrGet({
		url: urlValue,
		handleAs: "json",
		load: function(response) {
			if (response.errcode == 0) {
				BuscarM();//Refresco del gridMaster
				procesando.hide();
			} else {
				procesando.hide();
				PopUp("Error", response.errmsg);
			}
		}
	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarM(){
	//Validacion de que el formulario esté bien cargado
	for(i=0;i<columnasM.length;i++){
		if(!dijit.byId(columnasM[i]).isValid()){dijit.byId(columnasM[i]).focus();return;}
	}
	procesando.show();
	//Habilito los campos primary de vuelta, de lo contrario no se pasan por post
	for(i=0;i<clavesM.length;i++){dijit.byId(columnasM[i]).attr("disabled",false);}
	//Grabación de datos en la base de datos
	dojo.xhrPost({
		url: "dbi/e.php?sid="+gvarSID+"&dmlid="+dmlgrabarM,
		handleAs: "json",
		sync: "true",
		form: "formMaster",
		load: function(response) {
			if (response.errcode == 0) {
				GrabarCM();//Inicializa el formulario
				BuscarM();//Refresco del gridMaster
				procesando.hide();
			} else {
				procesando.hide();
				PopUp("Error", response.errmsg);
			}
		}
	});
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarCM(){dijit.byId('dialogMaster').destroyRecursive();}