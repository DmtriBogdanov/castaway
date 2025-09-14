const burgerMenuBtn = document.querySelector('.burger-menu');
const headerMenu = document.querySelector('.header__menu');
const menuLinks = document.querySelectorAll('.menu__link');

burgerMenuBtn.addEventListener('click', () => {
  burgerMenuBtn.classList.toggle('is-active');
  headerMenu.classList.toggle('is-active');
  document.body.classList.toggle('is-lock');
})

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenuBtn.classList.remove('is-active');
    headerMenu.classList.remove('is-active');
    document.body.classList.remove('is-lock');
  })
})