function dark() {
	var chbox;
	chbox=document.getElementById('dark');
		if (chbox.checked) {
			document.getElementById("style").href = "CSS/night.css";
		}
		else {
			document.getElementById("style").href = "CSS/style.css";
		}
	}