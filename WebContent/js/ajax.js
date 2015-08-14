var request;
var request1;
var request2;
var request3;
var request4;
//send name info
function runTogether(){
	sendInfo();
	sendInfo_avl();
	sendInfo_total();
	sendInfo_unrealized();
	sendInfo_cash();
}
function sendInfo() {
	var v = document.vinform.t1.value;
	var url = "index.jsp?val=" + v;

	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}

	try {
		request.onreadystatechange = getInfo;
		request.open("GET", url, true);
		request.send();
	} catch (e) {
		alert("Unable to connect to server");
	}
}

function getInfo() {
	if (request.readyState == 4) {
		var val = request.responseText;
		document.getElementById('info').innerHTML = val;
	}
}
//send avl info
function sendInfo_avl() {
	var v = document.vinform.t1.value;
	var url = "index_avl.jsp?val=" + v;

	if (window.XMLHttpRequest) {
		request1 = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		request1 = new ActiveXObject("Microsoft.XMLHTTP");
	}

	try {
		request1.onreadystatechange = getInfo_avl;
		request1.open("GET", url, true);
		request1.send();
	} catch (e) {
		alert("Unable to connect to server");
	}
}

function getInfo_avl() {
	if (request1.readyState == 4) {
		var val = request1.responseText;
		document.getElementById('avl').innerHTML = val;
	}
}
//send total info
function sendInfo_total() {
	var v = document.vinform.t1.value;
	var url = "index_total.jsp?val=" + v;

	if (window.XMLHttpRequest) {
		request2 = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		request2 = new ActiveXObject("Microsoft.XMLHTTP");
	}

	try {
		request2.onreadystatechange = getInfo_total;
		request2.open("GET", url, true);
		request2.send();
	} catch (e) {
		alert("Unable to connect to server");
	}
}

function getInfo_total() {
	if (request2.readyState == 4) {
		var val = request2.responseText;
		document.getElementById('total').innerHTML = val;
	}
}
//send unrealized P/L info
function sendInfo_unrealized() {
	var v = document.vinform.t1.value;
	var url = "index_unrealized.jsp?val=" + v;

	if (window.XMLHttpRequest) {
		request3 = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		request3 = new ActiveXObject("Microsoft.XMLHTTP");
	}

	try {
		request3.onreadystatechange = getInfo_unrealized;
		request3.open("GET", url, true);
		request3.send();
	} catch (e) {
		alert("Unable to connect to server");
	}
}

function getInfo_unrealized() {
	if (request3.readyState == 4) {
		var val = request3.responseText;
		document.getElementById('unr').innerHTML = val;
	}
}
//send cash info
function sendInfo_cash() {
	var v = document.vinform.t1.value;
	var url = "index_cash.jsp?val=" + v;

	if (window.XMLHttpRequest) {
		request4 = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		request4 = new ActiveXObject("Microsoft.XMLHTTP");
	}

	try {
		request4.onreadystatechange = getInfo_cash;
		request4.open("GET", url, true);
		request4.send();
	} catch (e) {
		alert("Unable to connect to server");
	}
}

function getInfo_cash() {
	if (request4.readyState == 4) {
		var val = request4.responseText;
		document.getElementById('cash').innerHTML = val;
	}
}