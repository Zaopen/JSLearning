function getNewContent() {
	var request = getHTTPObject();
	if (request) {
		request.open("GET", "example.txt", true);
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				alert("Response Done");
				var p = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				p.appendChild(txt);
				document.getElementById("new").appendChild(p);
			}
		};
		request.send(null);
	} else {
		alert("Sorry, your browser doesn\'t support XMLHttpRequest.");
	}
	alert("Function Done");
}
addLoadEvent(getNewContent);
