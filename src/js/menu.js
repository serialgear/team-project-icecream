(() => {
	const refs = {
		openMobileMenuBtn: document.querySelector("[data-mobile-menu-open]"),
		closeMobileMenuBtn: document.querySelector("[data-mobile-menu-close]"),
		mobileMenu: document.querySelector("[data-mobile-menu]"),
		hiddenElementBurger: document.querySelector("[data-hidden-burger]"),
		hiddenElementButton: document.querySelector("[data-hidden-button]"),
		menuList: document.querySelector(".mob-menu__list")
	};

	refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
	refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);
	refs.menuList.addEventListener("click", toggleMobileMenu);

	function toggleMobileMenu() {
		refs.mobileMenu.classList.toggle("is-hidden");
		refs.hiddenElementBurger.classList.toggle("is-hidden");
		refs.hiddenElementButton.classList.toggle("is-hidden");
	}
})();
