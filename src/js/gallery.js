// import Masonry from 'masonry-layout';

screen.addEventListener('orientationchange', function (event) {
  console.log('The orientation of the screen is: ' + screen.orientation);
});

$('.grid').masonry({
  itemSelector: '.grid-item',
  stamp: '.stamp',
  // gutter: 2,
  // horizontalOrder: true,
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
} else if (window.matchMedia('(min-width: 320px)').matches) {
  $('.grid').masonry({
    gutter: 2,
  });
}

window.addEventListener('resize', function () {
  console.log('Размер окна теперь равен ' + window.screen.width + 'px');

  if (window.matchMedia('(min-width: 1200px)').matches) {
    $('.grid').masonry({
      gutter: 8,
    });
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    $('.grid').masonry({
      gutter: 6,
    });
  } else if (window.matchMedia('(min-width: 320px)').matches) {
    $('.grid').masonry({
      gutter: 2,
    });
  }
});
