const start = ()=>{

	
	const MASK_TIME = .6
	const mask = {clip: `rect(0px, 0px, 500px, 0px)`, ease:Power3.easeOut}

	TweenLite.to(".hero", 15, {scale:.5, x:0, y:0})


	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	
	tl.to('.t1', .3, {opacity:0}, "+=1.7")
	tl.from('.t2a', MASK_TIME, {...mask}, "+=.2" )
	tl.from('.t2b', MASK_TIME, {...mask}, '-=.2')

	tl.to('.t2', .3, {opacity:0}, "+=1.5")

	tl.from('.t3a', MASK_TIME, {...mask}, "+=.2" )
	tl.from('.t3b', MASK_TIME, {...mask}, '-=.2')


	// tl.add('t3Shift', "+=1")
	// tl.to(['.t3a', '.t3b'], .3, {x:-4, y:-15}, 't3Shift')

	
	tl.add('green', "+=1")
	
	tl.from('.greenbar', .3, {opacity:0}, 'green')
	tl.to('.greenbar', .3, {x:50}, 'green')
	tl.from('.t3c', MASK_TIME, {clip: `rect(0px, 600px, 500px, 600px)`, ease:Power3.easeOut}, 'green')

	tl.to(".t3", .3, {opacity:0}, "+=2")

	tl.add('end', "+=.1")
	tl.to(".t1", .3, {opacity:1}, "end")
	tl.to(".cover", 1, {opacity:.7}, "end-=1")

	// tl.gotoAndPlay("green")
}

start()



module.exports = {};

