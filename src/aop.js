var anl = anl || {};

/*
 * # AOP.js
 * ### Write your code in a new way !
 * 
 * Developer:LaneSun
 * Data:2016/10/1
 */

anl.AOP = {};

anl.AOP.EfunctionModel = {};

anl.AOP.EfunctionModel.run = function (){
	for (var i = 0; i < this.onStart.length; i++){
		if (this.onStart[i] instanceof anl.AOP.Efunction || this.onStart[i] instanceof anl.AOP.Ofunction) {
			if (!this.onStart[i].run()){
				return false;
			}
		} else {
			if (!this.onStart[i]()){
				return false;
			}
		}
	}
	
	var data = this.raw();
	
	for (var i = 0; i < this.onStop.length; i++){
		if (this.onStop[i] instanceof anl.AOP.Efunction || this.onStop[i] instanceof anl.AOP.Ofunction) {
			if (!this.onStop[i].run()){
				return false;
			}
		} else {
			if (!this.onStop[i]()){
				return false;
			}
		}
	}
	
	return data;
};

anl.AOP.Efunction = function (code){
	this.raw = code;
	this.onStart = [];
	this.onStop = [];
	this.run = anl.AOP.EfunctionModel.run;
};

anl.AOP.OfunctionModel = {};

anl.AOP.OfunctionModel.run = function (object){
	for (var i = 0; i < this.onStart.length; i++){
		if (this.onStart[i] instanceof anl.AOP.Efunction || this.onStart[i] instanceof anl.AOP.Ofunction) {
			if (!this.onStart[i].run(object)){
				return false;
			}
		} else {
			if (!this.onStart[i](object)){
				return false;
			}
		}
	}
	object.theReturn = this.raw(object);
	for (var i = 0; i < this.onStop.length; i++){
		if (this.onStop[i] instanceof anl.AOP.Efunction || this.onStop[i] instanceof anl.AOP.Ofunction) {
			if (!this.onStop[i].run(object)){
				return false;
			}
		} else {
			if (!this.onStop[i](object)){
				return false;
			}
		}
	}
	return object.theReturn;
};

anl.AOP.Ofunction = function (code){
	this.raw = code;
	this.onStart = [];
	this.onStop = [];
	this.run = anl.AOP.OfunctionModel.run;
};