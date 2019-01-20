function setNavbar() {
	var navbarOffset = $('#navbar-frame').getBoundingClientRect().top + window.scrollY
	document.addEventListener('scroll',e=>{
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
	})
}

function addNavLink() {

}

document.addEventListener("DOMContentLoaded",()=>{
	setNavbar()
})

window.addEventListener('resize',()=>{
	setNavbar()
})