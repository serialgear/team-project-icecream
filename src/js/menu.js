(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector('[data-mobile-menu-open]'),
    closeMobileMenuBtn: document.querySelector('[data-mobile-menu-close]'),
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    hiddenElementBurger: document.querySelector('[data-hidden-burger]'),
    hiddenElementButton: document.querySelector('[data-hidden-button]'),
    menuList: document.querySelector('.mob-menu__list'),
  };

  const targetElement = document.querySelector('body'); //ScrollLock

  refs.openMobileMenuBtn.addEventListener('click', toggleMobileMenu);
  refs.openMobileMenuBtn.addEventListener('click', disableScroll); //ScrollLock
  refs.closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener('click', enableScroll); //ScrollLock
  refs.menuList.addEventListener('click', toggleMobileMenu);
  refs.menuList.addEventListener('click', enableScroll); //ScrollLock

  function toggleMobileMenu() {
    refs.mobileMenu.classList.toggle('is-hidden');
    refs.hiddenElementBurger.classList.toggle('is-hidden');
    refs.hiddenElementButton.classList.toggle('is-hidden');
  }

  //ScrollLock
  function enableScroll() {
    bodyScrollLock.enableBodyScroll(targetElement);
  }

  //ScrollLock
  function disableScroll() {
    bodyScrollLock.disableBodyScroll(targetElement);
  }
})();
