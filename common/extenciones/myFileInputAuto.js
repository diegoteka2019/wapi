/*
	Copyright (c) 2004-2009, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


if(!dojo._hasResource["extenciones.myFileInputAuto"]){
dojo._hasResource["extenciones.myFileInputAuto"]=true;
dojo.provide("extenciones.myFileInputAuto");
dojo.require("dojox.form.FileInput");
dojo.require("dojo.io.iframe");
dojo.declare("extenciones.myFileInputAuto",dojox.form.FileInput,{url:"",blurDelay:2000,duration:500,uploadMessage:"Cargando...",triggerEvent:"onblur",_sent:false,templateString:"<div class=\"dijitFileInput\">\n\t<input id=\"${id}\" name=\"${name}\" class=\"dijitFileInputReal\" type=\"file\" dojoAttachPoint=\"fileInput\" />\n\t<div class=\"dijitFakeInput\" dojoAttachPoint=\"fakeNodeHolder\">\n\t\t<input class=\"dijitFileInputVisible\" type=\"text\" dojoAttachPoint=\"focusNode, inputNode\" />\n\t\t<div class=\"dijitInline dijitFileInputText\" dojoAttachPoint=\"titleNode\">${label}</div>\n\t\t<div class=\"dijitInline dijitFileInputButton\" dojoAttachPoint=\"cancelNode\" dojoAttachEvent=\"onclick:reset\">${cancelText}</div>\n\t</div>\n\t<div class=\"dijitProgressOverlay\" dojoAttachPoint=\"overlay\">&nbsp;</div>\n</div>\n",startup:function(){
this._blurListener=this.connect(this.fileInput,this.triggerEvent,"_onBlur");
this._focusListener=this.connect(this.fileInput,"onfocus","_onFocus");
this.inherited(arguments);
},_onFocus:function(){
	if(this._blurTimer){
	clearTimeout(this._blurTimer);
	}
},_onBlur:function(){
	/*if(this._blurTimer){
		clearTimeout(this._blurTimer);
	}
	if(!this._sent){
		this._blurTimer=setTimeout(dojo.hitch(this,"_sendFile"),this.blurDelay);
	}*/
},setMessage:function(_1){
	this.overlay.removeChild(this.overlay.firstChild);
	this.overlay.appendChild(document.createTextNode(_1));
},_sendFile:function(e){
	if(this._sent||this._sending||!this.fileInput.value){
		return;
	}
	this._sending=true;
	dojo.style(this.fakeNodeHolder,"display","none");
	dojo.style(this.overlay,{opacity:0,display:"block"});
	this.setMessage(this.uploadMessage);
	dojo.fadeIn({node:this.overlay,duration:this.duration}).play();
	var _3;
	if(dojo.isIE){
		_3=document.createElement("<form enctype=\"multipart/form-data\" method=\"post\">");
		_3.encoding="multipart/form-data";
	}else{
		_3=document.createElement("form");
		_3.setAttribute("enctype","multipart/form-data");
	}
	_3.appendChild(this.fileInput);
	dojo.body().appendChild(_3);
	dojo.io.iframe.send({url:this.url,form:_3,handleAs:"json",handle:dojo.hitch(this,"_handleSend")});
},_handleSend:function(_4,_5){
	this.overlay.removeChild(this.overlay.firstChild);
	this._sent=true;
	this._sending=false;
	dojo.style(this.overlay,{opacity:0,border:"none",background:"none"});
	this.overlay.style.backgroundImage="none";
	this.fileInput.style.display="none";
	this.fakeNodeHolder.style.display="none";
	dojo.fadeIn({node:this.overlay,duration:this.duration}).play(250);
	this.disconnect(this._blurListener);
	this.disconnect(this._focusListener);
	dojo.body().removeChild(_5.args.form);
	this.fileInput=null;
	this.onComplete(_4,_5,this);
},reset:function(e){
	if(this._blurTimer){
		clearTimeout(this._blurTimer);
	}
	this.disconnect(this._blurListener);
	this.disconnect(this._focusListener);
	this.overlay.style.display="none";
	this.fakeNodeHolder.style.display="";
	this.inherited(arguments);
	this._sent=false;
	this._sending=false;
	this._blurListener=this.connect(this.fileInput,this.triggerEvent,"_onBlur");
	this._focusListener=this.connect(this.fileInput,"onfocus","_onFocus");
},onComplete:function(_7,_8,_9){
}});
}
