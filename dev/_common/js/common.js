const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut

function masking(list){	
	const tl = new TimelineMax()
	list.map(item=>{
		const {id, y} = item	
		tl.from(id, .5, {clip: `rect(${y+100}px, 320px, 1200px, 0px)`, opacity:0, ease:Power2.easeOut}, '-=.3')
	})

	return tl
}


const masky = (list)=>{
	const tl = new TimelineMax()
	list.map(item=>{
		console.log(item);
		tl.from(`${item} img`, .33, {y:"+=50", opacity:0, ease:Power2.easeOut}, "-=.2" )
	})
	return tl
}

const main = ({list1, list2})=>{

	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})

	tl.from('.ion_1', .3, {opacity:0}, "+=.2")
	tl.from('.ion_2', .3, {opacity:0}, "+=.2")
	tl.from('.ion_3', .3, {opacity:0}, "+=.2")	
	tl.to('.ion', .3, {opacity:0}, "+=1.7")
	


	tl.add(masky(list1))
	tl.to('.t2', .3, {opacity:0}, "+=1.5")


	tl.add(masky(list2))
	tl.from('.engine', .3, {opacity:0}, "+=.5")

	
	
	tl.add('green', "+=1")
	
	
	

	tl.to(".t3", .3, {opacity:0}, "+=2.5")

	tl.add('end', "+=.1")
	
	tl.to('.ion_0', .3, {opacity:1}, "end")
	tl.to('.ion_1', .3, {opacity:1}, "+=.2")
	tl.to('.ion_2', .3, {opacity:1}, "+=.2")
	tl.to('.ion_3', .3, {opacity:1}, "+=.2")


	tl.to(".cover.static", 1, {opacity:.7}, "end-=1")
}

export {size, masky, main}