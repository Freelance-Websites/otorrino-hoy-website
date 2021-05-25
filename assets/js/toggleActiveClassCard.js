// select cards
// eslint-disable-next-line no-undef
const cards = document.querySelectorAll('.card');

// function to change icon
function changeIcon() {
  // find the button
  const button = this.querySelector('button');
  // find the icon
  const icon = button.querySelector('svg');
  // toggle minus class
  if (button.getAttribute('aria-expanded') === 'true') {
    icon.classList.toggle('fa-minus-square');
  } else {
    icon.classList.toggle('fa-plus-square');
  }
}

// select each panel and listen for transitionend prop
cards.forEach((card) => card.addEventListener('transitionend', changeIcon));
