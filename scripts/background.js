
function layoutBackgrounds() {
	var header = document.getElementById("header");
	var currentBackground = document.getElementById("dbackgroundcurrent");
	var nextBackground = document.getElementById("dbackgroundnext");
	
	var documentWidth = header.getBoundingClientRect().width;
	nextBackground.style.left = String(documentWidth) + "px";
	console.log(documentWidth);

}