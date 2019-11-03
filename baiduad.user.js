// ==UserScript==
// @name 关闭edu.51cto.com弹窗
// @namespace Violentmonkey Scripts
// @author       lg0805
// @match        *://edu.51cto.com/*
// @grant none
// ==/UserScript==

(function(){
	aP = document.getElementsByTagName('div');
	
	for(var i=0; i<aP.length; i++){
		
		if(!aP[i].className.indexOf("ins") || aP[i].className=='ins'|| aP[i].className=='upopbg' || aP[i].className=="upopbox_bot" || aP[i].className=="upopbox_mid"){
			aP[i].style.display='none';
		}
	}
})();
