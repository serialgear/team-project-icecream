// import Masonry from 'masonry-layout';

window.onload = () => {
  const grid = document.querySelector('.grid');

  const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',

    gutter: 2,
    stagger: 30,
    // horizontalOrder: true,
    columnWidth: '.grid-sizer',
    percentPosition: true,
  });

  if (window.matchMedia('(min-width: 1200px)').matches) {
    masonry = new Masonry(grid, {
      gutter: 8,
    });
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    masonry = new Masonry(grid, {
      gutter: 6,
    });
  }
};
