
var styles = [];
var displayedIndex = 0;

function pageSetup() {
	layoutBackgrounds();
	shuffle();
	applyStyles();
}

function layoutBackgrounds() {
	// Elements
	var header = document.getElementById("header");
	var currentBackground = document.getElementById("dbackgroundcurrent");
	var nextBackground = document.getElementById("dbackgroundnext");
	var underline = document.getElementById("dUnderline");
	var itemSpacers = document.getElementsByClassName("backgroundspacer");

	var documentWidth = header.getBoundingClientRect().width;
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
	var newIndex = displayedIndex == (styles.length - 1) ? 0 : displayedIndex ++;
	var nextIndex = newIndex == (styles.length - 1) ? 0 : newIndex ++;
	
	// Styles
	var currentStyle = styles[displayedIndex];
	var newStyle = styles[newIndex];
	var nextStyle = styles[nextIndex];
	var currentBlurStyle = currentStyle + "-blur";
	var newBlurStyle = newStyle + "-blur";
	var currentItemStyle = currentStyle + "-item";
	var newItemStyle = newStyle + "-item";
	var nextItemStyle = nextStyle + "-item"
	var currentTitleStyle = currentStyle + "-title";
	var newTitleStyle = newStyle + "-title";
	
	//Elements
	var currentBackground = document.getElementById("dbackgroundcurrent");
	var title = document.getElementById("lTitle");
	var currentItem = currentBackground.getElementsByTagName("p")[0];
	var underline = document.getElementById("dUnderline");
	var nextBackground = document.getElementById("dbackgroundnext");
	var nextItem = nextBackground.getElementsByTagName("p")[0];
	var blurcontainers = document.getElementsByClassName("blurcontainer");
		
	
	// Changing classes
	currentBackground.classList.remove(currentStyle);
	currentBackground.classList.add(newStyle);
	currentItem.classList.remove(currentItemStyle);
	currentItem.classList.add(newItemStyle);
	nextBackground.classList.remove(newTitleStyle);
	nextBackground.classList.add(nextStyle);
	for (var i = 0; i < blurcontainers.length; i++) {
			blurcontainers[i].classList.remove(currentBlurStyle);
			blurcontainers[i].classList.add(newBlurStyle);
		}
	
	//TODO: Animating changing colors
	title.classList.remove(currentTitleStyle);
	title.classList.add(newTitleStyle);
	underline.classList.remove(currentTitleStyle);
	underline.classList.add(newTitleStyle);
}

function shuffle() {
	var array = ["skate"];
	
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