import {masking} from '../../_common/js/common.js'

TweenLite.to(".hero", 8, {x:0, y:-216})




const start = ()=>{

	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	
	
	tl.to('.ion', .3, {opacity:0}, "+=1.5")

	

	tl.from('.t1', .3, {opacity:0}, "+=.1")
	tl.to('.t1', .3, {opacity:0}, "+=2")

	tl.from('.t2a', .3, {opacity:0}, "+=.1")
	tl.from('.t2b', .3, {opacity:0}, "+=.5")
	tl.to('.t2', .3, {opacity:0}, "+=3")


	tl.add('end', "+=.1")
	tl.to('.ion', .3, {opacity:1}, "end")
	// tl.to(".cover.static", 1, {opacity:.7}, "end-=1")
	
	

	// tl.gotoAndPlay("green")
}








start()



module.exports = {};

