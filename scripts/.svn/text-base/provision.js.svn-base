//TITULOS
var titulos =  new Array('Provisi&oacute;n');
//DMLs
var dmlSimularMaster = '11901';
var dmlGenerarMaster = '11902';
var dmlGrabarMaster = '';
//COLUMNAS
var columnasM = new Array('mes','anio');
//DESCRIPCIONES
var descripcionesM = new Array('Mes','A&ntilde;o');
//FORMULARIO
var camposFormM = new Array('mes','anio');
var labelFormM = new Array('Mes:','A&ntilde;o:');
var mesStore = {identifier:'codigo',label:'detalle',items:[{codigo:'01',mes: '01',detalle: '01'},{codigo:'02',mes: '02',detalle: '02'},{codigo:'03',mes: '03',detalle: '03'},{codigo:'04',mes: '04',detalle: '04'},{codigo:'05',mes: '05',detalle: '05'},{codigo:'06',mes: '06',detalle: '06'},{codigo:'07',mes: '07',detalle: '07'},{codigo:'08',mes: '08',detalle: '08'},{codigo:'09',mes: '09',detalle: '09'},{codigo:'10',mes: '10',detalle: '10'},{codigo:'11',mes: '11',detalle: '11'},{codigo:'12',mes: '12',detalle: '12'}]};
var anioStore = {identifier:'codigo',label:'detalle',items:[{codigo:dojo.date.locale.format(new Date(),{datePattern:"yyyy",selector:"date"}),detalle:dojo.date.locale.format(new Date(),{datePattern:"yyyy",selector:"date"})},{codigo:dojo.date.locale.format(new Date(),{datePattern:"yyyy",selector:"date"})-1,detalle:dojo.date.locale.format(new Date(),{datePattern:"yyyy",selector:"date"})-1}]};
var proviStore = {identifier:'codigo',label:'detalle',items:[{codigo:'01',provi:'01',detalle: 'Primer dia habil'},{codigo:'02',provi:'02',detalle: 'Ultimo dia habil'}]};
var searchAttrFormM = new Array('detalle','detalle');
var mensajesFormM = new Array('Debe elegir un Mes','Debe elegir un A&ntilde;o');
var requeridoFormM = new Array ('true','true');
//Carga de titulos
document.getElementById('bloqueMaster').innerHTML = titulos[0];
dojo.fadeOut({node:'cmn_mensajes_master'}).play();
////////////////////////////////////////////////////////////////////////////////////////////////////
function DojoAddOnLoad(){
	//Modificacion de label e iconos de los botones
	if(dijit.byId('nuevoMaster')){
		dijit.byId('nuevoMaster').attr('label','Generar');
		dijit.byId('nuevoMaster').attr('iconClass','generarIcon');}
	if(dijit.byId('editarMaster')){
		dijit.byId('editarMaster').attr('disabled',false);
		dijit.byId('editarMaster').attr('label','Simular');
		dijit.byId('editarMaster').attr('iconClass','simularIcon');}
		
	//Creo selector de reporte
	//SelectorProvi();
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function EditarMaster(){ //Simular
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:250px;text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'50',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[0],label:labelFormM[0],searchAttr:searchAttrFormM[0],promptMessage:mensajesFormM[0],required:requeridoFormM[0],store:new dojo.data.ItemFileReadStore({data: mesStore})}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[1],label:labelFormM[1],searchAttr:searchAttrFormM[1],promptMessage:mensajesFormM[1],required:requeridoFormM[1],store:new dojo.data.ItemFileReadStore({data: anioStore})}));
	//Asigno Anio dependiendo del mes a provisionar
//	if(parseInt(dojo.date.locale.format(new Date(),{datePattern:'MM',selector:"date"})) == 1){
//		dijit.byId(camposFormM[0]).attr('value',parseInt(dojo.date.locale.format(new Date(),{datePattern:"MM",selector:"date"})));
//		dijit.byId(camposFormM[1]).attr('value',parseInt(dojo.date.locale.format(new Date(),{datePattern:"yyyy",selector:"date"})));
//		 }
//	else{
		var mes = '';
		var temp = dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'});
		if(temp<10){mes=mes.concat(temp.toString());}else{mes=temp.toString();}
		dijit.byId(camposFormM[0]).attr('value',mes);
		dijit.byId(camposFormM[1]).attr('value',parseInt(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'})));
//		}
	divCamposM.attr('content',tablaForm);
	//Creacion de botones
	var botonAceptar = new dijit.form.Button({label:'Aceptar',type:'button',iconClass:'aceptarIcon',onClick:function(){GrabarMaster();}});
	dojo.place(botonAceptar.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
 	dialogM = new dijit.Dialog({title:'Simular Provisi&oacute;n',id:'dialogMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	dmlGrabarMaster = dmlSimularMaster;
	//Se muestra el dialogo
	dialogM.show();

}
///////////////////////////////////////////////////////////////////////////////////////////////////
function NuevoMaster(){
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:200px;text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'50',style:'text-align:left;'});
	//Creacion de botones
	var botonAceptar = new dijit.form.Button({label:'Primer dia habil',type:'button',iconClass:'aceptarIcon',onClick:function(){SelectorProvi();}});
	dojo.place(botonAceptar.domNode,divCamposM.domNode,'last');
	var botonAceptar1 = new dijit.form.Button({label:'Ultimo dia habil',type:'button',iconClass:'aceptarIcon',onClick:function(){SelectorProvi2();}});
	dojo.place(botonAceptar1.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');

	//Creacion del dialogo
 	dialogM = new dijit.Dialog({title:'Escoja el dia para provisionar',id:'dialogMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	//Se muestra el dialogo
	dialogM.show();
	
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SelectorProvi(){ //Generar en el primer dia habil
	dijit.byId('dialogMaster').destroyRecursive();
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:250px;text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'50',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[0],readOnly:true,label:labelFormM[0],searchAttr:searchAttrFormM[0],promptMessage:mensajesFormM[0],required:requeridoFormM[0],store:new dojo.data.ItemFileReadStore({data: mesStore})}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[1],readOnly:true,label:labelFormM[1],searchAttr:searchAttrFormM[1],promptMessage:mensajesFormM[1],required:requeridoFormM[1],store:new dojo.data.ItemFileReadStore({data: anioStore})}));
	//Asigno Anio dependiendo del mes a provisionar
	if(parseInt(dojo.date.locale.format(new Date(),{datePattern:"MM",selector:"date"})) == 1)
		{dijit.byId(camposFormM[0]).attr('value',parseInt(dojo.date.locale.format(new Date(),{datePattern:"MM",selector:"date"}))+11);
		dijit.byId(camposFormM[1]).attr('value',parseInt(dojo.date.locale.format(new Date(),{datePattern:"yyyy",selector:"date"}))-1);}
	else{
		var mes = '0';
		var temp = dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'})-1;
		if(temp<10){mes=mes.concat(temp.toString());}else{mes=temp.toString();}
		dijit.byId(camposFormM[0]).attr('value',mes);
		dijit.byId(camposFormM[1]).attr('value',parseInt(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'})));}
	divCamposM.attr('content',tablaForm);
	//Creacion de botones
	var botonAceptar = new dijit.form.Button({label:'Aceptar',type:'button',iconClass:'aceptarIcon',onClick:function(){GrabarMaster();}});
	dojo.place(botonAceptar.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
 	dialogM = new dijit.Dialog({title:'Generar Provisi&oacute;n',id:'dialogMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	dmlGrabarMaster = dmlGenerarMaster;
	//Se muestra el dialogo
	dialogM.show();

}
////////////////////////////////////////////////////////////////////////////////////////////////////
function SelectorProvi2(){ //Generar en el ultimo dia habil
	dijit.byId('dialogMaster').destroyRecursive();
	//Creacion del contenedor
	var divCamposM = new dijit.layout.ContentPane({style:'width:250px;text-align:center;'});
	//Creacion del formulario
	var tablaForm = new dojox.layout.TableContainer({cols:1,labelWidth:'50',style:'text-align:left;'});
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[0],readOnly:true,label:labelFormM[0],searchAttr:searchAttrFormM[0],promptMessage:mensajesFormM[0],required:requeridoFormM[0],store:new dojo.data.ItemFileReadStore({data: mesStore})}));
	tablaForm.addChild(new dijit.form.FilteringSelect({id:camposFormM[1],readOnly:true,label:labelFormM[1],searchAttr:searchAttrFormM[1],promptMessage:mensajesFormM[1],required:requeridoFormM[1],store:new dojo.data.ItemFileReadStore({data: anioStore})}));
	//Asigno Anio dependiendo del mes a provisionar
	if(parseInt(dojo.date.locale.format(new Date(),{datePattern:"MM",selector:"date"})) == 1)
		{dijit.byId(camposFormM[0]).attr('value',parseInt(dojo.date.locale.format(new Date(),{datePattern:"MM",selector:"date"})));
		dijit.byId(camposFormM[1]).attr('value',parseInt(dojo.date.locale.format(new Date(),{datePattern:"yyyy",selector:"date"})));}
	else{
		var mes = '';
		var temp = dojo.date.locale.format(new Date(),{datePattern:'MM',selector:'date'});
		if(temp<10){mes=mes.concat(temp.toString());}else{mes=temp.toString();}
		dijit.byId(camposFormM[0]).attr('value',mes);
		dijit.byId(camposFormM[1]).attr('value',parseInt(dojo.date.locale.format(new Date(),{datePattern:'yyyy',selector:'date'})));}
	divCamposM.attr('content',tablaForm);
	//Creacion de botones
	var botonAceptar = new dijit.form.Button({label:'Aceptar',type:'button',iconClass:'aceptarIcon',onClick:function(){GrabarMaster();}});
	dojo.place(botonAceptar.domNode,divCamposM.domNode,'last');
	var botonCancelar = new dijit.form.Button({label:'Cancelar',type:'button',iconClass:'cancelarIcon',onClick:function(){CancelarMaster();}});
	dojo.place(botonCancelar.domNode,divCamposM.domNode,'last');
	//Creacion del dialogo
 	dialogM = new dijit.Dialog({title:'Generar Provisi&oacute;n',id:'dialogMaster'});
	dialogM.attr('content',divCamposM);
	dialogM.titleBar.children[1].style.display='none';
	dmlGrabarMaster = dmlGenerarMaster;
	//Se muestra el dialogo
	dialogM.show();

}
////////////////////////////////////////////////////////////////////////////////////////////////////
function GrabarMaster(){
	//Validacion de campos correctos
	if(!dijit.byId('mes').isValid()) {dijit.byId('mes').focus();return;}
	if(!dijit.byId('anio').isValid()) {dijit.byId('anio').focus();return;}
	procesando.show();
	//Generacion de la URL
	var urlValue ='dbi/e_proc_t.php?sid='+gvarSID+'&dmlid='+dmlGrabarMaster+'&mes='+dijit.byId('mes').attr('value')+'&anio='+dijit.byId('anio').attr('value');
	//Grabacion de datos en la base de datos
	dojo.xhrPost({url:urlValue,handleAs:'json',sync:'true',load:function(response){
		if (response.ticket_id){
			CancelarMaster();//Elimino el dialogo
			procesando.hide();
			Mensaje('Se ejecut&oacute; el proceso, consulte el Ticket: '+response.ticket_id,'mensaje','master');
		}else{procesando.hide();dijit.byId('dialogMaster').show();PopUp('Error', response.errmsg);} 
	}});
	
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function CancelarMaster(){
	//Elimino el dialogo
	dijit.byId('dialogMaster').destroy();
	//Limpio campos del formulario
	for(i=0;i<camposFormM.length;i++){if(dijit.byId(camposFormM[i])){dijit.byId(camposFormM[i]).destroy();}}
}