/*!
 * ScriptName: shared.js
 *
 * FoodConnection
 * http://foodconnection.jp/
 * http://foodconnection.vn/
 *
 */


/* =======================================  ................... ============================================ */

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh + 'px');

$(document).ready(function () {
  $('.slick-auto').on('touchstart', function (e) {
    $(this).slick('slickPlay');
  });
});

$(document).ready(function () {
  'use strict';
  $('.scroll_box').slideUp(0);
  $('.btn-acc').click(function () {
    if ($(this).hasClass('close')) {
      $(this).next().slideDown(1000);
      $(this).removeClass('close').addClass('open');
    } else {
      $(this).next().slideUp(500);
      $(this).removeClass('open').addClass('close');
    }
  });
});
/* =======================================  ................... ============================================ */


/* =======================================  Menu toggle ============================================ */
$(function () {
  $('body').removeClass('navOpen');
  $(".hamburger,.brand_ham").click(function () {
    if ($('body').hasClass('navOpen')) {
      $('body').addClass('navClose');
      $('body').removeClass('navOpen');
      $(".hamburger,.brand_ham").removeClass('is-active');
    } else {
      $('body').addClass('navOpen');
      $('body').removeClass('navClose');
      $(".hamburger,.brand_ham").addClass('is-active');
      return false;
    }
  });
  $("#navigation  a, .nav-close ,#navigation  .tel a,#navigation .soc a").click(function () {
    $('body').removeClass('navOpen');
    $('body').addClass('navClose');
    $(".hamburger,.brand_ham").removeClass('is-active');
  });
  $(".btn-copy").click(function () {
    $(".btn-copy").addClass('hs-copie')
  });
});
/* =======================================  END ============================================ */


/* =======================================.............============================================ */
$(document).ready(function () {
  $(window).scroll(function () {
    var TargetPos = $("section").offset().top;
    var ScrollPos = $(window).scrollTop();
    if (ScrollPos > TargetPos) {
      $("body").addClass('has-nav');
    } else {
      $("body").removeClass('has-nav');
    }
  });
});
/* =======================================.............============================================ */


/* =======================================.............============================================ */
function objectFitPolyfill() {
  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;
  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;
  if (isIE === true || isEdge === true) {
    $('.object-fit-cover').each(function (index, element) {
      let src = $(element).attr('data-src');
      if (src === undefined) {
        src = $(element).attr('src')
      }
      $(element).css('display', 'none');
      $(element).parent().css({
        'background-image': "url('" + src + "')",
        'background-repear': 'no-repeat',
        'background-size': 'cover',
        'background-position': 'center center'
      });
    });
  }
}
$(document).ready(function () {
  objectFitPolyfill()
})
/* =======================================.............============================================ */


/* ======================================= JS Active ============================================ */
$(document).ready(function () {
  if ($('.js-scroll[scroll-active]').length && $('.js-scroll').attr('scroll-active') === "true")
    $(document).on('scroll', onScroll)
  $('.js-scroll a[href*="#"]').on('click', function () {
    var e = $(this).attr('href')
    var h = 0
    var b = $(e).length ? $(e).offset().top : 0
    $('html, body').animate({
      scrollTop: (b + 1 - h)
    }, 1000)
  })
});

function onScroll() {
  var scrollPos = $(document).scrollTop(),
    $navOffset = 0;
  if ($(window).width() < 1000) {
    $navOffset = 10;
  }
  if ($(window).width() > 999) {
    $navOffset = 10;
  }
  $("a[href*='#'][target!='_blank']:not([class*='btn-popup']):not([href*='html'])").removeClass("active");
  $("a[href*='#'][target!='_blank']:not([class*='btn-popup']):not([href*='html'])").each(function () {
    var $this = $(this);
    if ($this.attr("href")) {
      var csslide = $($this.attr("href"));
      // console.log($this.attr("href"));
      if (csslide.length > 0) {
        if ((csslide.offset().top - $navOffset < scrollPos || csslide.offset().top - $navOffset == scrollPos) && csslide.offset().top + csslide.outerHeight() - $navOffset > scrollPos) {
          $this.addClass("active");
        } else {
          $this.removeClass("active");
        }
      }
    }
  });
}
var lastScrollTop = 0;
/* ======================================= END ============================================ */


/* ======================================= Fix Scroll IOS ============================================ */
var overflowIsHidden = function (node) {
  var style = getComputedStyle(node);
  return style.overflow === "hidden" || style.overflowX === "hidden" || style.overflowY === "hidden";
}
var isItScrollableWithoutVisibleScrollbars = function (el) {
  if (el === null) return false;
  var isScrollable = false,
    hasScrollbars = false;
  isScrollable = el.scrollHeight > el.offsetHeight ? true : false; // first, lets find out if it has scrollable content
  // isScrollable = el.scrollHeight + 1 > el.clientHeight ? true : false; // first, lets find out if it has scrollable content
  if (isScrollable) hasScrollbars = (el.offsetWidth > el.scrollWidth) ? true : false; // if it's scrollable, let's see if it likely has scrollbars
  // if (isScrollable) hasScrollbars = (el.offsetWidth > el.scrollWidth - 1) ? true : false; // if it's scrollable, let's see if it likely has scrollbars
  if (isScrollable && !hasScrollbars && !overflowIsHidden(el)) return true;
  else return false;
};
document.addEventListener("touchmove", function (e) {
  if (document.body.classList.contains("navOpen") && !isItScrollableWithoutVisibleScrollbars(document.getElementById("navigation"))) e.preventDefault();
}, {
  passive: false
});
/* ======================================= END ============================================ */


/* ======================================= Magic scroll ============================================ */
function autoplaySlick($slide) {
  if ($slide.offset().top - $(window).scrollTop() < $(window).height() || ($slide.offset().top + $slide.outerHeight()) - $(window).scrollTop() < 0) {
    $slide.slick('slickPlay');
  } else {
    $slide.slick('slickPause');
  }
  $(window).scroll(function () {
    if ($slide.offset().top - $(window).scrollTop() < $(window).height() || ($slide.offset().top + $slide.outerHeight()) - $(window).scrollTop() < 0) {
      $slide.slick('slickPlay');
    } else {
      $slide.slick('slickPause');
    }
  });
}
/* ============================================ END ================================================= */


/* ======================================= Clear header height when next page  ============================================ */
$(window).load(function (e) {
  var hash1 = location.hash;
  var $root = $('html, body');
  if (hash1 != '') {
    var top01 = $(hash1).offset();
    if ($(window).width() < 768) {
      $root.animate({ scrollTop: top01.top - 0 }, 500);
    }
    if ($(window).width() > 768) {
      $root.animate({ scrollTop: top01.top - 80 }, 500);
    }
  }
});
/* ======================================= END  ============================================ */

new WOW().init();