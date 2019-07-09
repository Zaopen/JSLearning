function getTag() {
    var tag = document.getElementsByTagName("a");
    alert(tag);
}
addLoadEvent(getTag);