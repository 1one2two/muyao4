videos.forEach((e,i,a)=>{
/*	if(i>8) return
	var iframe = $n('iframe')
	iframe.attr('width','50%')
	iframe.attr('height','400')
	iframe.attr('src',`https://www.youtube.com/embed/${e}`)
	iframe.attr('frameborder','0')
	iframe.attr('allow','accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture')
	iframe.attr('allowfullscreen','')
	$('#content').apnd(iframe)*/
	var div = $n('a',`preview${e}`,'preview')
	div.style.background = `url('https://i.ytimg.com/vi/${e}/hqdefault.jpg') center/cover no-repeat`
	div.attr('href',`https://www.youtube.com/watch?v=${e}`)
	div.attr('target','_blank')
	$('#content').apnd(div)
})