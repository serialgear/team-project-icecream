//Masonry Gallery;

$('.grid').masonry({
  itemSelector: '.grid-item',
  stamp: '.stamp',
  // gutter: 2,
  columnWidth: '.grid-sizer',
  percentPosition: false,
});

if (window.matchMedia('(min-width: 1200px)').matches) {
  $('.grid').masonry({
    gutter: 8,
  });
} else if (window.matchMedia('(min-width: 768px)').matches) {
  $('.grid').masonry({
    gutter: 6,
  });
} else if (window.matchMedia('(max-width: 767px)').matches) {
  $('.grid').masonry({
    gutter: 2,
  });
}

window.addEventListener('resize', function () {
  // console.log('The window size is ' + window.screen.width + 'px');

  if (window.matchMedia('(min-width: 1200px)').matches) {
    $('.grid').masonry({
      gutter: 8,
    });
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    $('.grid').masonry({
      gutter: 6,
    });
  } else if (window.matchMedia('(max-width: 767px)').matches) {
    $('.grid').masonry({
      gutter: 2,
    });
  }
});
