/* eslint-disable no-undef */
// function to check the url and set the active state for the header
$(document).ready(() => {
  // get url
  const url = window.location.href;

  if (
    url.indexOf('servicios/rinoplastia') > 1
    || url.indexOf('servicios') > 1
    || url.indexOf('servicios/apnea-de-suenio') > 1
    || url.indexOf('servicios/implantes-auditivos') > 1
  ) {
    $('#serviciosDropdown').addClass('active');
  } else if (url.indexOf('quienes-somos') > 1) {
    $('#quienesSomosDropdown').addClass('active');
  } else if (
    url.indexOf('preguntas-frecuentes') > 1
    || url.indexOf('preguntas-selected') > 1
    || url.indexOf('consejos-para-dejar-de-fumar') > 1
  ) {
    $('#informacionDropdown').addClass('active');
  } else if (url.indexOf('contacto') > 1) {
    $('.contact').addClass('active');
  }
});
