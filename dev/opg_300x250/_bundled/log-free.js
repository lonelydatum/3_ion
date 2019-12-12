(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var start = function start() {

	var MASK_TIME = .6;
	var mask = { clip: 'rect(0px, 0px, 500px, 0px)', ease: Power3.easeOut };

	TweenLite.to(".hero", 15, { scale: .5, x: 0, y: 0 });

	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	tl.to('.t1', .3, { opacity: 0 }, "+=1.7");
	tl.from('.t2a', MASK_TIME, _extends({}, mask), "+=.2");
	tl.from('.t2b', MASK_TIME, _extends({}, mask), '-=.2');

	tl.to('.t2', .3, { opacity: 0 }, "+=1.5");

	tl.from('.t3a', MASK_TIME, _extends({}, mask), "+=.2");
	tl.from('.t3b', MASK_TIME, _extends({}, mask), '-=.2');

	// tl.add('t3Shift', "+=1")
	// tl.to(['.t3a', '.t3b'], .3, {x:-4, y:-15}, 't3Shift')

	tl.add('green', "+=1");

	tl.from('.greenbar', .3, { opacity: 0 }, 'green');
	tl.to('.greenbar', .3, { x: 50 }, 'green');
	tl.from('.t3c', MASK_TIME, { clip: 'rect(0px, 600px, 500px, 600px)', ease: Power3.easeOut }, 'green');

	tl.to(".t3", .3, { opacity: 0 }, "+=2");

	tl.add('end', "+=.1");
	tl.to(".t1", .3, { opacity: 1 }, "end");
	tl.to(".cover", 1, { opacity: .7 }, "end-=1");

	// tl.gotoAndPlay("green")
};

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
