// TweenLite.from(".hero", 15, {x:0, y:0})

const list_t2 = [
	{id:'.t2a', y:120},
	{id:'.t2b', y:210},
	{id:'.t2c', y:280},
	{id:'.t2d', y:350},
]

list_t2.map(item=>{
	TweenLite.set(item.id, {clip: `rect(${item.y}px, 320px, 1200px, 0px)`})
})

function masking(list){	
	const tl = new TimelineMax()
	list.map(item=>{
		const {id, y} = item	
		tl.from(id, .5, {clip: `rect(${y+100}px, 320px, 1200px, 0px)`, opacity:0, ease:Power2.easeOut}, '-=.3')
	})

	return tl
}



const start = ()=>{

	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	tl.set('.masker', {opacity:0})
	
	tl.to('.t1', .3, {opacity:0}, "+=1.7")
	

	

	tl.add(masking(list_t2))

	tl.to('.t2', .3, {opacity:0}, "+=1.5")


	// tl.add('t3Shift', "+=1")
	// tl.to(['.t3a', '.t3b'], .3, {x:-4, y:-15}, 't3Shift')

	
	tl.add('green', "+=1")
	
	// tl.from('.greenbar', .3, {opacity:0}, 'green')
	// tl.to(, .3, {x:50}, 'green')
	tl.from(['.t3c', '.greenbar'], .3, {opacity:0}, 'green')

	tl.to(".t3", .3, {opacity:0}, "+=2.5")

	tl.add('end', "+=.1")
	tl.to(".t1", .3, {opacity:1}, "end")
	tl.to(".cover.static", 1, {opacity:.7}, "end-=1")

	// tl.gotoAndPlay("green")
}








start()



module.exports = {};

