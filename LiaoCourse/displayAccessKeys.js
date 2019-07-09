function displayAccessKeys() {
    if (!document.getElementsByTagName || !document.createTextNode || !document.createElement) return false;
    var link = document.getElementsByTagName("a");
    var akeys = new Array();
    for (var i = 0; i < link.length; i++) {
        if (!link[i].getAttribute("accesskey")) continue;
        var key = link[i].getAttribute("accesskey");
        var link_text = link[i].lastChild.nodeValue;
        akeys[key] =link_text;
    }
    var list = document.createElement("ul")
    for (key in akeys) {
        var text = akeys[key];
        var str = key + ":" + text;
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header = document.createElement("h3");
    var header_text =document.createTextNode("Accesskey");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}
addLoadEvent(displayAccessKeys);