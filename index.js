function setNavbar() {
	var navbarOffset = $('#navbar-frame').getBoundingClientRect().top + window.scrollY
	var navbar = $('#navbar')
	if(window.scrollY > navbarOffset) {
		navbar.style.position = 'fixed'
		navbar.style.top = '0'
		navbar.style.width = '160%'
		navbar.style.backgroundColor = '#0008'
		navbar.style.transform = 'scale(.625) translateY(-30%)'
	}
	else {
		navbar.style.position = 'unset'
		navbar.style.top = 'unset'
		navbar.style.width = 'unset'
		navbar.style.backgroundColor = 'unset'
		navbar.style.transform = 'scale(1) translateY(0)'
	}
}

function addNavLink() {
	$('#nav-head').$e('click',e=>{
		var target = $('#head').getBoundingClientRect().top + window.scrollY
		window.scrollTo(0,target-20*5.5)
	})
	$('#nav-about').$e('click',e=>{
		var target = $('#about').getBoundingClientRect().top + window.scrollY
		window.scrollTo(0,target-20*5.5)
	})
	$('#nav-member').$e('click',e=>{
		var target = $('#member').getBoundingClientRect().top + window.scrollY
		window.scrollTo(0,target-20*5.5)
	})
	$('#nav-programs').$e('click',e=>{
		var target = $('#programs').getBoundingClientRect().top + window.scrollY
		window.scrollTo(0,target-20*5.5)
	})
}

document.addEventListener("DOMContentLoaded",e=>{
	setNavbar()
	addNavLink()
})

window.addEventListener('resize',e=>{
	setNavbar()
})

document.addEventListener('scroll',e=>{
	setNavbar()
})