$('#content #video>#close').$e('click',e=>{
	$('#content #video>iframe').removeAttribute('src')
	$('#content #video').style.display = 'none'
})

$('#menu').$e('click',e=>{
	$('#menu').style.left = null
	$('#show-menu').style.display = null
})
$('#show-menu').$e('click',e=>{
	$('#menu').style.left = '0'
	$('#show-menu').style.display = 'none'
})

videos.forEach((e,i,a)=>{
	var div = $n('div',`preview-${e}`,'preview')
	var img = $n('div',null,'image')
	img.style.background = `url('https://i.ytimg.com/vi/${e}/hqdefault.jpg') center/cover no-repeat`
	var iframeTrigger = $n('div',null,'iframe-trigger')
	iframeTrigger.$e('click',ele=>{
		$('#content #video>iframe').attr('src',`https://www.youtube.com/embed/${e}`)
		$('#content #video').style.display = 'block'
	})
	var link = $n('a',null,'link')
	link.attr('href',`https://www.youtube.com/watch?v=${e}`)
	link.attr('target','_blank')
	div.apnd(img)
	div.apnd(iframeTrigger)
	div.apnd(link)
	$('#content #context').apnd(div)
})