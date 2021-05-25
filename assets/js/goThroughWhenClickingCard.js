/* eslint-disable no-undef */
$('.category-card').click(function goThroughLinkWhenClicking() {
  const link = $(this)
    .find('a')
    .attr('href');
  window.location.replace(link);
});
