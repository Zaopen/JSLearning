function displayCitations() {
    // check dom
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    // loop through all the blockquote
    var quote = document.getElementsByTagName("blockquote");
    for (var i = 0; i < quote.length; i++) {
        if (!quote[i].getAttribute("cite")) continue;
        var url = quote[i].getAttribute("cite");
        var quoteChild = quote[i].getElementsByTagName("*");
        if (quoteChild.length < 1) continue;
        var elem = quoteChild[quoteChild.length - 1];
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href", url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}
addLoadEvent(displayCitations);