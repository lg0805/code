(function(){
	aDiv = document.getElementsByTagName("div");
	for(var i=0; i<aDiv.length; i++){
		if(aDiv[i].style.display && aDiv[i].style.visibility){
			
			aDiv[i].style.display = 'none';
		}
	}
})()
