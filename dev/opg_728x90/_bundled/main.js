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

var masky = function masky(list) {
	var tl = new TimelineMax();
	list.map(function (item) {
		console.log(item);
		tl.from(item + ' img', .33, { y: "+=50", opacity: 0, ease: Power2.easeOut }, "-=.2");
	});
	return tl;
};

var main = function main(_ref) {
	var list1 = _ref.list1;
	var list2 = _ref.list2;

	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	tl.from('.ion_1', .3, { opacity: 0 }, "+=.2");
	tl.from('.ion_2', .3, { opacity: 0 }, "+=.2");
	tl.from('.ion_3', .3, { opacity: 0 }, "+=.2");
	tl.to('.ion', .3, { opacity: 0 }, "+=1.7");

	tl.add(masky(list1));
	tl.to('.t2', .3, { opacity: 0 }, "+=1.5");

	tl.add(masky(list2));
	tl.from('.engine', .3, { opacity: 0 }, "+=.5");

	tl.add('green', "+=1");

	tl.to(".t3", .3, { opacity: 0 }, "+=2.5");

	tl.add('end', "+=.1");

	tl.to('.ion_0', .3, { opacity: 1 }, "end");
	tl.to('.ion_1', .3, { opacity: 1 }, "+=.2");
	tl.to('.ion_2', .3, { opacity: 1 }, "+=.2");
	tl.to('.ion_3', .3, { opacity: 1 }, "+=.2");

	tl.to(".cover.static", 1, { opacity: .7 }, "end-=1");
};

exports.size = size;
exports.masky = masky;
exports.main = main;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

TweenLite.to(".hero", 8, { x: 0, y: -216 });

var start = function start() {

	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	tl.from('.ion_1', .3, { opacity: 0 }, "+=.2");
	tl.from('.ion_2', .3, { opacity: 0 }, "+=.2");
	tl.from('.ion_3', .3, { opacity: 0 }, "+=.2");
	tl.to('.ion', .3, { opacity: 0 }, "+=1.7");

	// tl.add(masky(list1))

	tl.from('.t1 img', .33, { y: "+=50", opacity: 0, ease: Power1.easeOut }, "+=.2");

	tl.to('.t1', .3, { opacity: 0 }, "+=2");

	tl.from('.t2a img', .33, { y: "+=50", opacity: 0, ease: Power1.easeOut }, "+=.2");

	// tl.from('.t2a', .3, {opacity:0}, "+=.1")
	tl.from('.engine', .3, { opacity: 0 }, "+=.5");
	tl.to(['.t2', '.engine'], .3, { opacity: 0 }, "+=3");

	tl.add('end', "+=.1");
	tl.to('.ion', .3, { opacity: 1 }, "end");
	// tl.to(".cover.static", 1, {opacity:.7}, "end-=1")

	// tl.gotoAndPlay("green")
};

var list1 = ['.t1'];
var list2 = ['.t2a'];

// main({list1, list2} )

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
