!function(){$(".single-item").slick({dots:!0,arrows:!1}),$(".grid").masonry({itemSelector:".grid-item",stamp:".stamp",columnWidth:".grid-sizer",percentPosition:!1}),window.matchMedia("(min-width: 1200px)").matches?$(".grid").masonry({gutter:8}):window.matchMedia("(min-width: 768px)").matches?$(".grid").masonry({gutter:6}):window.matchMedia("(max-width: 767px)").matches&&$(".grid").masonry({gutter:2}),window.addEventListener("resize",(function(){window.matchMedia("(min-width: 1200px)").matches?$(".grid").masonry({gutter:8}):window.matchMedia("(min-width: 768px)").matches?$(".grid").masonry({gutter:6}):window.matchMedia("(max-width: 767px)").matches&&$(".grid").masonry({gutter:2})})),function(){var e={openMobileMenuBtn:document.querySelector("[data-mobile-menu-open]"),closeMobileMenuBtn:document.querySelector("[data-mobile-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]"),hiddenElementBurger:document.querySelector("[data-hidden-burger]"),hiddenElementButton:document.querySelector("[data-hidden-button]"),menuList:document.querySelector(".mob-menu__list")},t=document.querySelector("body");function n(){e.mobileMenu.classList.toggle("is-hidden"),e.hiddenElementBurger.classList.toggle("is-hidden"),e.hiddenElementButton.classList.toggle("is-hidden")}function o(){bodyScrollLock.enableBodyScroll(t)}e.openMobileMenuBtn.addEventListener("click",n),e.openMobileMenuBtn.addEventListener("click",(function(){bodyScrollLock.disableBodyScroll(t)})),e.closeMobileMenuBtn.addEventListener("click",n),e.closeMobileMenuBtn.addEventListener("click",o),e.menuList.addEventListener("click",n),e.menuList.addEventListener("click",o)}();var e=document.querySelector("body");function t(){bodyScrollLock.enableBodyScroll(e)}$(".js-open-modal").click((function(){event.preventDefault();var t=$(this).attr("data-modal");$('.js-modal[data-modal="'+t+'"]').addClass("is-shown"),$(".js-modal-overlay").addClass("is-shown"),bodyScrollLock.disableBodyScroll(e)})),$(".js-modal-close").click((function(){$(this).parent(".js-modal").removeClass("is-shown"),$(".js-modal-overlay").removeClass("is-shown"),t()})),$(".js-modal-overlay").click((function(){$(".js-modal.is-shown").removeClass("is-shown"),$(this).removeClass("is-shown"),t()})),document.querySelectorAll(".readMore").forEach((function(e){e.addEventListener("click",(function(){var e,t,n;e=document.getElementById("dots"),t=document.getElementById("more"),n=document.getElementById("btn"),"none"===e.style.display?(e.style.display="inline",n.innerHTML="read more",t.style.display="none"):(e.style.display="none",n.innerHTML="hide",t.style.display="inline")}))})),document.querySelectorAll(".readMoreFirst").forEach((function(e){e.addEventListener("click",(function(){var e,t,n;e=document.getElementById("dotsFirst"),t=document.getElementById("moreFirst"),n=document.getElementById("btnFirst"),"none"===e.style.display?(e.style.display="inline",n.innerHTML="read more",t.style.display="none"):(e.style.display="none",n.innerHTML="hide",t.style.display="inline")}))})),document.querySelectorAll(".readMoreSecond").forEach((function(e){e.addEventListener("click",(function(){var e,t,n;e=document.getElementById("dotsSecond"),t=document.getElementById("moreSecond"),n=document.getElementById("btnSecond"),"none"===e.style.display?(e.style.display="inline",n.innerHTML="read more",t.style.display="none"):(e.style.display="none",n.innerHTML="hide",t.style.display="inline")}))}));var n=document.querySelectorAll('a[href*="#"]'),o=!0,i=!1,d=void 0;try{for(var l,r=function(e,t){var n=t.value;n.addEventListener("click",(function(e){e.preventDefault();var t=n.getAttribute("href");document.querySelector(""+t).scrollIntoView({behavior:"smooth",block:"start"})}))},a=n[Symbol.iterator]();!(o=(l=a.next()).done);o=!0)r(0,l)}catch(e){i=!0,d=e}finally{try{o||null==a.return||a.return()}finally{if(i)throw d}}document.querySelector(".button-arrow").onclick=function(){document.querySelector(".info-hero__secret-box").classList.toggle("active")};var c,s,u=document.querySelector(".scroll-top");window.addEventListener("scroll",(function(){(window.pageYOffset||document.documentElement.scrollTop)>300?u.classList.add("scroll-top--active"):u.classList.remove("scroll-top--active")})),u.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),c=document.querySelector("[data-menu-button]"),s=document.querySelector("[data-menu]"),c.addEventListener("click",(function(){var e="true"===c.getAttribute("aria-expanded")||!1;c.classList.toggle("is-open"),c.setAttribute("aria-expanded",!e),s.classList.toggle("is-open")})),function(){var e=document.querySelector("[data-menu-button-3]"),t=document.querySelector("[data-menu-3]");e.addEventListener("click",(function(){var n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open")}))}(),function(){var e=document.querySelector("[data-menu-button-2]"),t=document.querySelector("[data-menu-2]");e.addEventListener("click",(function(){var n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open")}))}()}();
//# sourceMappingURL=index.174abfe9.js.map
