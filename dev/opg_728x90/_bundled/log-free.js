(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

function masking(list) {
	var tl = new TimelineMax();
	list.map(function (item) {
		var id = item.id;
		var y = item.y;

		tl.from(id, .5, { clip: 'rect(' + (y + 100) + 'px, 320px, 1200px, 0px)', opacity: 0, ease: Power2.easeOut }, '-=.3');
	});

	return tl;
}

exports.size = size;
exports.masking = masking;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

TweenLite.to(".hero", 8, { x: 0, y: -216 });

var start = function start() {

	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	tl.to('.ion', .3, { opacity: 0 }, "+=1.5");

	tl.from('.t1', .3, { opacity: 0 }, "+=.1");
	tl.to('.t1', .3, { opacity: 0 }, "+=2");

	tl.from('.t2a', .3, { opacity: 0 }, "+=.1");
	tl.from('.t2b', .3, { opacity: 0 }, "+=.5");
	tl.to('.t2', .3, { opacity: 0 }, "+=3");

	tl.add('end', "+=.1");
	tl.to('.ion', .3, { opacity: 1 }, "end");
	// tl.to(".cover.static", 1, {opacity:.7}, "end-=1")

	// tl.gotoAndPlay("green")
};

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
