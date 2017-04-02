function moveElement(eleID,finalX,finalY,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(eleID)) return false;
    var mes = document.getElementById(eleID);
    var x = parseInt(mes.style.left);
    var y = parseInt(mes.style.top);
    if (x == finalX && y ==finalY) return true;
    if (x < finalX) {
        x++;
    }
    if (x > finalX) {
        x--;
    }
    if (y < finalY) {
        y++;
    }
    if (y > finalY) {
        y--;
    }
    mes.style.left = x + "px";
    mes.style.top = y + "px";
    var repeat = "moveElement('"+eleID+"',"+finalX+","+finalY+","+interval+")"
    movement = setTimeout(repeat,interval);
}
addLoadEvent(moveElement);