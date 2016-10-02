/*globals anl */
/*eslint-env browser */
var OutPut = document.getElementById("output");  //$NON-NLS-1$

function outPut(string){
	OutPut.innerHTML += string;
	OutPut.innerHTML += "<br>"; //$NON-NLS-1$
}

//function former1(){
//	outPut("========= the former1 ========="); //$NON-NLS-1$
//	return true;
//}
//
//function later1(){
//	outPut("========= the later1 =========="); //$NON-NLS-1$
//	return true;
//}
//
//function former2(){
//	outPut("========= the former2 ========="); //$NON-NLS-1$
//	return true;
//}
//
//function later2(){
//	outPut("========= the later2 =========="); //$NON-NLS-1$
//	return true;
//}
//
//function stopFormer(){
//	outPut("============ Stop ============="); //$NON-NLS-1$
//	return false;
//}

var tester = new anl.AOP.Ofunction(function (data){
	outPut("+++++++++++++++++++++++++++++++"); //$NON-NLS-1$
	outPut("data:" + data); //$NON-NLS-1$
	outPut("MAIN"); //$NON-NLS-1$
	outPut("return 2"); //$NON-NLS-1$
	outPut("+++++++++++++++++++++++++++++++"); //$NON-NLS-1$
	return 2;
});
//
//tester.onStart.push(former1);
//tester.onStop.push(later1);
//tester.onStart.push(former2);
//tester.onStop.push(later2);
//
//tester.run();
//
//outPut("");
//
//tester.onStart.push(stopFormer);
//
//tester.run();

function former(){
	outPut("========= the former1 ========="); //$NON-NLS-1$
	return true;
}

function later(){
	outPut("========= the later1 =========="); //$NON-NLS-1$
	return true;
}

var formerl = new anl.AOP.Ofunction(function (data){
	outPut("+++++++++++++++++++++++++++++++"); //$NON-NLS-1$
	outPut("data:" + data.theReturn); //$NON-NLS-1$
	outPut("TWICE"); //$NON-NLS-1$
	outPut("return data + 1"); //$NON-NLS-1$
	outPut("+++++++++++++++++++++++++++++++"); //$NON-NLS-1$
	data.theReturn += 2;
});

formerl.onStart.push(former);
formerl.onStop.push(later);
tester.onStop.push(formerl);

var data = {a:1};

tester.run(data);