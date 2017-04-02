function positionMes() {
    if (!document.getElementById) return false;
    if (!document.getElementById("mes")) return false;
    var ele = document.getElementById("mes");
    ele.style.position = "absolute";
    ele.style.left = "50px";
    ele.style.top = "100px";
    moveElement("mes",200,250,10);
}
addLoadEvent(positionMes);