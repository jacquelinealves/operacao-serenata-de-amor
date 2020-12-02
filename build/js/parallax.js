function parallax(){
	var areas=document.getElementsByClassName("px_area");
	for(var i=0;i<areas.length;i++){
		var x=areas[i];
		var off=x.getBoundingClientRect().top;
		var layers=x.getElementsByClassName("px_layer");
		for(var j=0;j<layers.length;j++){
			var e=layers[j];
			e.style.top=Number(e.getAttribute("data-parallax"))*(off)+"px";
		}
	}
}

