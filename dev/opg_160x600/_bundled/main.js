(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// TweenLite.from(".hero", 15, {x:0, y:0})

'use strict';

var list_t2 = [{ id: '.t2a', y: 120 }, { id: '.t2b', y: 210 }, { id: '.t2c', y: 280 }, { id: '.t2d', y: 350 }];

var list_t3 = [{ id: '.t3a', y: 40 }, { id: '.t3b', y: 110 }, { id: '.t3c', y: 180 }, { id: '.t3d', y: 240 }, { id: '.t3e', y: 310 }, { id: '.t3f', y: 310 }];

list_t2.map(function (item) {
	TweenLite.set(item.id, { clip: 'rect(' + item.y + 'px, 320px, 1200px, 0px)' });
});

list_t3.map(function (item) {
	TweenLite.set(item.id, { clip: 'rect(' + item.y + 'px, 320px, 1200px, 0px)' });
});

function masking(list) {
	var tl = new TimelineMax();
	list.map(function (item) {
		var id = item.id;
		var y = item.y;

		tl.from(id, .5, { clip: 'rect(' + (y + 100) + 'px, 320px, 1200px, 0px)', opacity: 0, ease: Power2.easeOut }, '-=.3');
	});

	return tl;
}

var start = function start() {

	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });
	tl.set('.masker', { opacity: 0 });

	tl.to('.t1', .3, { opacity: 0 }, "+=1");

	tl.add(masking(list_t2));

	tl.to('.t2', .3, { opacity: 0 }, "+=1.5");

	tl.add(masking(list_t3));

	tl.from(".engine", .3, { opacity: 0 }, '+=.3');

	tl.to(".t3", .3, { opacity: 0 }, "+=3");

	tl.add('end', "+=.1");
	tl.to(".t1", .3, { opacity: 1 }, "end");
	tl.to(".cover.static", 1, { opacity: .7 }, "end-=1");

	// tl.gotoAndPlay("green")
};

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
