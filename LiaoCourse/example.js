window.onload = function() {
	var testdiv = document.getElementById("testdiv");
	var point = document.createElement("p");
	testdiv.appendChild(point);
	var text = document.createTextNode("My best friend.");
	point.appendChild(text);
}

// function nsertParagraph(text) {
// 	var string = "<p>";
// 	string += text;
// 	string += "</p>";
// 	document.write(text);
// }

// window.onload = function() {
// 	var testdiv = document.getElementById("testdiv");
// 	testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
// }

// window.onload = function() {
// 	var text = document.createElement("p");
// 	var info = "nodeName: ";
// 	info += text.nodeName;
// 	info += " nodeType: ";
// 	info += text.nodeType;
// 	alert(info);
// }
