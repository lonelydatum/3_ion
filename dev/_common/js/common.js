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


export {size, masking}