function moveElement(eleID,finalX,finalY,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(eleID)) return false;
    var mes = document.getElementById(eleID);
    if (mes.movement) {
        clearTimeout(mes.movement);
    }
    if (!mes.style.left) {
        mes.style.left = "0px";
    }
    if (!mes.style.top) {
        mes.style.top = "0px";
    }
    var x = parseInt(mes.style.left);
    var y = parseInt(mes.style.top);
    var dist = 0;
    if (x == finalX && y ==finalY) return true;
    if (x < finalX) {
        dist = Math.ceil((finalX - x)/10);
        x = x + dist;
    }
    if (x > finalX) {
        dist = Math.ceil((x - finalX)/10);
        x = x - dist;
    }
    if (y < finalY) {
        dist = Math.ceil((finalY - y)/10);
        y = y + dist;
    }
    if (y > finalY) {
        dist = Math.ceil((y - finalY)/10);
        y = y - dist;
    }
    mes.style.left = x + "px";
    mes.style.top = y + "px";
    var repeat = "moveElement('"+eleID+"',"+finalX+","+finalY+","+interval+")"
    mes.movement = setTimeout(repeat,interval);
}
addLoadEvent(moveElement);