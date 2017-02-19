function dispalyAbbreviations() {
	// 是否支持DOM语句
	if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	// 描述标题
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	// 从网页内取abbr
	var abbr = document.getElementsByTagName("abbr");
	if (abbr.length < 1) return false;
	var defs = Array();
	for (var i = 0; i < abbr.length; i++) {
		var definition = abbr[i].getAttribute("title");
		var key = abbr[i].lastChild.nodeValue;
		defs[key] = definition;
	}
	// 插入到body后
	var dlist = document.createElement("dl");
	for (key in defs) {
		var definition = defs[key]
		var dtitle = document.createElement("dt");
		var ddesc = document.createElement("dd");
		var dtitle_text = document.createTextNode(key);
		var ddesc_text = document.createTextNode(definition);
		dtitle.appendChild(dtitle_text);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}
addLoadEvent(dispalyAbbreviations);