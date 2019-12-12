(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var masky = function masky(list) {
	var tl = new TimelineMax();
	list.map(function (item) {
		tl.from(item + " img", .4, { y: "+=50", opacity: 0, ease: Power2.easeOut }, "-=.25");
	});
	return tl;
};

var start = function start() {

	// const MASK_TIME = .6

	TweenLite.to(".hero", 15, { scale: .5, x: 0, y: 0 });

	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	tl.from('.ion_1', .3, { opacity: 0 }, "+=.2");
	tl.from('.ion_2', .3, { opacity: 0 }, "+=.2");
	tl.from('.ion_3', .3, { opacity: 0 }, "+=.2");

	tl.to('.ion', .3, { opacity: 0 }, "+=1.7");

	tl.add(masky(['.t2a', '.t2b']));

	tl.to('.t2', .3, { opacity: 0 }, "+=1.5");

	tl.add(masky(['.t3a', '.t3b']));

	tl.add('green', "+=1");

	tl.from(['.t3c', '.greenbar'], .3, { opacity: 0 }, 'green');

	tl.to(".t3", .3, { opacity: 0 }, "+=2.5");

	tl.add('end', "+=.1");

	tl.to('.ion_0', .3, { opacity: 1 }, "end");
	tl.to('.ion_1', .3, { opacity: 1 }, "+=.2");
	tl.to('.ion_2', .3, { opacity: 1 }, "+=.2");
	tl.to('.ion_3', .3, { opacity: 1 }, "+=.2");

	tl.to(".cover.static", 1, { opacity: .7 }, "end-=1");

	// tl.gotoAndPlay("green")
};

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
