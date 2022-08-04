const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger');
const body = document.querySelector('body');

if (menu && burger) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('lock');
	})

	document.querySelectorAll('.menu__link').forEach((link) => {
		link.addEventListener('click', () => {
			burger.classList.remove('active');
			menu.classList.remove('active');
			body.classList.remove('lock');
		})
	})
}

const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach((anchor) => {
	anchor.addEventListener('click', (e) => {
		if (document.querySelector('.menu__link.active')) {
			document.querySelector('.menu__link.active').classList.remove('active');
			anchor.classList.add('active');
		} else {
			anchor.classList.add('active');
		}

		const blockId = anchor.getAttribute('href').substring(1);
		document.getElementById(blockId).scrollIntoView({
			behavior: "smooth",
			block: 'start'
		})

		e.preventDefault();
	})
})