
var styles = [];
var displayedIndex = 0;

setInterval(function() {
	cycleStyle();
	}, 18000);
function cycleStyle() {
	
	// Slide right background over left
	var backgroundWidth = header.getBoundingClientRect().width;
	var backgrounds = document.getElementsByClassName("background");
	var title = document.getElementById("lTitle");
	backgrounds[1].style.left = 0 + "px";
	title.classList.remove(styles[displayedIndex] + "-title");
	title.classList.add(styles[displayedIndex + 1] + "-title");
	
	setTimeout(function() {
		var container = document.getElementById("backgroundcontainer");
		backgrounds[0].remove();
		var newBackground = document.createElement("div");
		newBackground.classList.add("background");
		var leftBlur = document.createElement("div")
		leftBlur.classList.add("blurcontainer")
		leftBlur.style.cssFloat = "left";
		newBackground.appendChild(leftBlur);
		var spacer = document.createElement("div");
		spacer.classList.add("backgroundspacer");
		newBackground.appendChild(spacer);
		var item = document.createElement("p");
		item.classList.add("lItem");
		newBackground.appendChild(item);
		var rightBlur = document.createElement("div");
		rightBlur.classList.add("blurcontainer");
		rightBlur.style.cssFloat = "right";
		newBackground.appendChild(rightBlur);
		container.appendChild(newBackground);
		layoutBackgrounds(backgroundWidth);
		applyStyles();
		}, 15000);
}

function pageSetup() {
	layoutBackgrounds();
	shuffle();
	applyStyles();
}

function layoutBackgrounds(width) {
	// Elements
	var documentWidth = width !== undefined ? width : document.body.getBoundingClientRect().width;
	var header = document.getElementById("header");
	var backgrounds = document.getElementsByClassName("background");
	var currentBackground = backgrounds[0];
	var nextBackground = backgrounds[1];
	var underline = document.getElementById("dUnderline");
	var itemSpacers = document.getElementsByClassName("backgroundspacer");

	nextBackground.style.left = String(documentWidth) + "px";

	var underlineLeft = underline.getBoundingClientRect().left;
	for (var i = 0; i < itemSpacers.length; i++) {
		itemSpacers[i].style.width = String(underlineLeft) + "px";
	}
	
	var excessWidth = documentWidth - 1440;
	if (excessWidth > 0) {
		var blurWidth = excessWidth / 2;
		var blurcontainers = document.getElementsByClassName("blurcontainer");
		for (var i = 0; i < blurcontainers.length; i++) {
			blurcontainers[i].style.width = String(blurWidth) + "px";
		}
	} else {
		var blurcontainers = document.getElementsByClassName("blurcontainer");
		for (var i = 0; i < blurcontainers.length; i++) {
			blurcontainers[i].style.width = "0px";
		}
	}
}

function applyStyles() {
	//Indexes
	var newIndex = displayedIndex == (styles.length - 1) ? 0 : (displayedIndex + 1);
	
	// Styles
	var currentStyle = styles[displayedIndex];
	var newStyle = styles[newIndex];
	var currentBlurStyle = currentStyle + "-blur";
	var newBlurStyle = newStyle + "-blur";
	var currentItemStyle = currentStyle + "-item";
	var newItemStyle = newStyle + "-item";
	var currentTitleStyle = currentStyle + "-title";
	var newTitleStyle = newStyle + "-title";
	
	//Elements
	var backgrounds = document.getElementsByClassName("background");
	var currentBackground = backgrounds[0];
	var title = document.getElementById("lTitle");
	var currentItem = currentBackground.getElementsByTagName("p")[0];
	var underline = document.getElementById("dUnderline");
	var newBackground = backgrounds[1];
	var newItem = newBackground.getElementsByTagName("p")[0];
	var blurcontainers = document.getElementsByClassName("blurcontainer");
		
	
	// Changing classes
// 	currentBackground.classList.remove(currentStyle);
	currentBackground.classList.add(currentStyle);
// 	currentItem.classList.remove(currentItemStyle);
	currentItem.classList.add(currentItemStyle);
// 	newBackground.classList.remove(newTitleStyle);
	newBackground.classList.add(newStyle);
// 	newItem.classList.remove(newItemStyle);
	newItem.classList.add(newItemStyle);
	for (var i = 0; i < blurcontainers.length; i++) {
			blurcontainers[i].classList.remove(currentBlurStyle);
			blurcontainers[i].classList.add(newBlurStyle);
		}
	
	// Animating changing colors
	title.classList.remove(currentTitleStyle);
	title.classList.add(newTitleStyle);
	underline.classList.remove(currentTitleStyle);
	underline.classList.add(newTitleStyle);
	
	displayedIndex = newIndex;
}

function shuffle() {
	var array = ["skate", "coffee", "photographer", "shoes", "sunglasses"];
	
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  styles = array;
}