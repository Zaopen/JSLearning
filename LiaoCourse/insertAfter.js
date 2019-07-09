function insertAfter(newElement,targetElemnet) {
    var parent = targetElemnet.parentNode;
    if (parent.lastChild == targetElemnet) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElemnet.nextSibling);
    }
}