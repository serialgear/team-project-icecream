const targetElement = document.querySelector('body'); //ScrollLock

$('.js-open-modal').click(function () {
  event.preventDefault();

  var modalName = $(this).attr('data-modal');
  var modal = $('.js-modal[data-modal="' + modalName + '"]');

  modal.addClass('is-shown');
  $('.js-modal-overlay').addClass('is-shown');
  disableScroll();
});

$('.js-modal-close').click(function () {
  $(this).parent('.js-modal').removeClass('is-shown');
  $('.js-modal-overlay').removeClass('is-shown');
  enableScroll();
});

$('.js-modal-overlay').click(function () {
  $('.js-modal.is-shown').removeClass('is-shown');
  $(this).removeClass('is-shown');
  enableScroll();
});

//ScrollLock
function enableScroll() {
  bodyScrollLock.enableBodyScroll(targetElement);
}

//ScrollLock
function disableScroll() {
  bodyScrollLock.disableBodyScroll(targetElement);
}
