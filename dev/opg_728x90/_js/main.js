import {main, masky} from '../../_common/js/common.js'

TweenLite.to(".hero", 8, {x:0, y:-216})




const start = ()=>{

	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})

	tl.from('.ion_1', .3, {opacity:0}, "+=.2")
	tl.from('.ion_2', .3, {opacity:0}, "+=.2")
	tl.from('.ion_3', .3, {opacity:0}, "+=.2")	
	tl.to('.ion', .3, {opacity:0}, "+=1.7")

	
	// tl.add(masky(list1))

	tl.from(`.t1 img`, .33, {y:"+=50", opacity:0, ease:Power1.easeOut}, "+=.2" )

	
	tl.to('.t1', .3, {opacity:0}, "+=2")

	tl.from(`.t2a img`, .33, {y:"+=50", opacity:0, ease:Power1.easeOut}, "+=.2" )

	// tl.from('.t2a', .3, {opacity:0}, "+=.1")
	tl.from('.engine', .3, {opacity:0}, "+=.5")
	tl.to(['.t2', '.engine'], .3, {opacity:0}, "+=3")


	tl.add('end', "+=.1")
	tl.to('.ion', .3, {opacity:1}, "end")
	// tl.to(".cover.static", 1, {opacity:.7}, "end-=1")
	
	

	// tl.gotoAndPlay("green")
}



const list1 = ['.t1']
const list2 = ['.t2a']

// main({list1, list2} )




start()



module.exports = {};

