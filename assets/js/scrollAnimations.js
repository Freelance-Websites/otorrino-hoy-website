/* eslint-disable no-undef */

// check position of elements on windows load
$(document).ready(() => {
  $('.fadeInOnScroll').each(function scroll() {
    // declare variables
    const imagePos = $(this).offset().top;
    const topOfWindow = $(window).scrollTop();

    // check distance between image and top of window
    if (imagePos < topOfWindow + 800) {
      $(this).addClass('fadeIn');
    }
  });
});
// function to add fade in animation as the user scrolls
$(window).scroll(() => {
  // get each element with fade on scroll class
  $('.fadeInOnScroll').each(function scroll() {
    // declare variables
    const imagePos = $(this).offset().top;
    const topOfWindow = $(window).scrollTop();

    // check distance between image and top of window
    if (imagePos < topOfWindow + 400) {
      $(this).addClass('fadeIn');
    }
  });
});
