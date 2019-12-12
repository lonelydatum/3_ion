import {masking} from '../../_common/js/common.js'

TweenLite.from(".hero", 15, {x:-150, y:0})

const list_t2 = [
	{id:'.t2a', y:120},
	{id:'.t2b', y:210},
	{id:'.t2c', y:280},
	{id:'.t2d', y:350}
]

const list_t3 = [
	{id:'.t3a', y:40},
	{id:'.t3b', y:110},
	{id:'.t3c', y:180},
	{id:'.t3d', y:240},
	{id:'.t3e', y:310},
	{id:'.t3f', y:310}
]

list_t2.map(item=>{
	TweenLite.set(item.id, {clip: `rect(${item.y}px, 320px, 1200px, 0px)`})
})

list_t3.map(item=>{
	TweenLite.set(item.id, {clip: `rect(${item.y}px, 320px, 1200px, 0px)`})
})




const start = ()=>{

	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})
	tl.set('.masker', {opacity:0})
	
	tl.to('.t1', .3, {opacity:0}, "+=1")

	tl.add(masking(list_t2))

	tl.to('.t2', .3, {opacity:0}, "+=1.5")

	tl.add(masking(list_t3))

	tl.from(".engine", .3, {opacity:0}, '+=.3')

	tl.to(".t3", .3, {opacity:0}, "+=3")

	tl.add('end', "+=.1")
	tl.to(".t1", .3, {opacity:1}, "end")
	tl.to(".cover.static", 1, {opacity:.7}, "end-=1")

	// tl.gotoAndPlay("green")
}








start()



module.exports = {};

