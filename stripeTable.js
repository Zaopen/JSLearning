function stripeTables() {
	if (!document.getElementsByTagName) return false;
	var table = document.getElementsByTagName("table");
	var odd, rows;
	for (var i = 0; i < table.length; i++) {
		odd = false;
		rows = table[i].getElementsByTagName("tr")
		for (var r = 1; r < rows.length; r++) {
			if (odd) {
				rows[r].style.backgroundColor = "#ffc";
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}
addLoadEvent(stripeTables);