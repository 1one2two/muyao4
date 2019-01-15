$('#content #video>.close').$e('click',e=>{$('#content #video').style.display = 'none'})
$('#menu').$e('click',e=>{$('#content #video').style.display = 'none'})

videos.forEach((e,i,a)=>{
	var div = $n('div',`preview${e}`,'preview')
	div.style.background = `url('https://i.ytimg.com/vi/${e}/hqdefault.jpg') center/cover no-repeat`
	div.$e('click',ele=>{
		$('#content #video>iframe').attr('src',`https://www.youtube.com/embed/${e}`)
		$('#content #video').style.display = 'block'
	})
	div.attr('href',`https://www.youtube.com/watch?v=${e}`)
	div.attr('target','_blank')
	$('#content #context').apnd(div)
})