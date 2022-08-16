// Opens a secret box in the hero-section
document.querySelector('.button-arrow').onclick = function () {
	document.querySelector('.info-hero__secret-box').classList.toggle('active');
}

// Scroll Top
const offset = 300;
const scrollTop = document.querySelector('.scroll-top');
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
const updateDashOffset = () => { };

window.addEventListener("scroll", () => {
	updateDashOffset();
	if (getTop() > offset) {
		scrollTop.classList.add('scroll-top--active');
	} else {
		scrollTop.classList.remove('scroll-top--active');
	}
});

scrollTop.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});