"use strict";

$(function () {
  $('.js-burger').on('click', function (e) {
    e.preventDefault();
    $('.js-menu').toggleClass('hidden');
    $('.js-menu-icon').toggleClass('fa-bars');
    $('.js-menu-icon').toggleClass('fa-xmark');
  });
  $('.js-search').on('click', function (e) {
    if ($(window).width() < 768) {
      $('.js-search-input').toggleClass('hidden');
      $('.js-logo, .js-menu-box').toggleClass('hidden');
    }
  });

  function initSwiper() {
    var swiper = new Swiper('.swiper-index-art', {
      slidesPerView: 1,
      centeredSlides: true,

      /* 斷點設定 */
      breakpoints: {
        /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
        1100: {
          slidesPerView: 3
        },

        /* 更小時都顯示 1 欄 */
        0: {
          slidesPerView: 1
        }
      },

      /* 卡片元素的間隔 */
      // spaceBetween: 12,
      pagination: {
        /* 想將分頁圓點綁在哪個 class */
        el: '.swiper-pagination',

        /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
        clickable: true
      },
      loop: true // autoplay: {
      //     delay: 3000,
      // },

    });
  }
  /* 觸發自己定義的函式 */


  initSwiper();
});
$('.grid-art').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer'
});
//# sourceMappingURL=all.js.map
