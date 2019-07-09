function addClass(element, value) {
	if (!element.className) {
		element.className = value;
	} else {
		newElement = element.className;
		newElement += " ";
		newElement += value;
		element.className = newElement;
	}
}
addLoadClass(addClass);