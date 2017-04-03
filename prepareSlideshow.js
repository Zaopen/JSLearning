function prepareSlideshow() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById("linklist")) return false;
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow")
    var preview = document.createElement("img");
    preview.setAttribute("src","topic.png");
    preview.setAttribute("alt","website topic");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);
    var list = document.getElementById("linklist");
    insertAfter(slideshow,list);
    if (!document.getElementById("preview")) return false;
    var preview = document.getElementById("preview");
    // var list = document.getElementById("linklist");
    var links = document.getElementsByTagName("a");
    links[0].onmouseover = function() {
        moveElement("preview",-150,0,10);
    }
    links[1].onmouseover = function() {
        moveElement("preview",-283,0,10);
    }
    links[2].onmouseover = function() {
        moveElement("preview",-416,0,10);
    }
    var outlink = document.getElementById("linklist");
    outlink.onmouseout = function() {
        moveElement("preview",0,0,10);
    }
}
addLoadEvent(prepareSlideshow);