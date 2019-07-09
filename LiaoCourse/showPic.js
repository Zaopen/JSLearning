function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	var blank = document.getElementById("blank");
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	blank.setAttribute("src", source);
	description.firstChild.nodeValue = text;
}
function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = links.length - 1; i >= 0; i--) {
		links[i].onclick = function() {
			showPic(this);
			return false;
		}
	}
}
function prepareBlank() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	if (!document.createTextNode) return false;
	var blank = document.createElement("img");
	var p = document.createElement("p");
	var description = document.createTextNode("选择你的照片（Choose your photo）");
	var gallery = document.getElementById("imagegallery");
	blank.setAttribute("id", "blank");
	blank.setAttribute("src", "blank.png");
	blank.setAttribute("alt", "My image gallery");
	p.setAttribute("id", "description");
	p.appendChild(description);
	insertAfter(blank, gallery);
	insertAfter(p, blank);
}
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
addLoadEvent(prepareGallery);
addLoadEvent(prepareBlank);