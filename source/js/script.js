'use strict'

const $menu = document.querySelector('.header__menu');

if ($menu) {
  const menuBtn = $menu.querySelector('.header__btn');
  $menu.classList.toggle('header__menu--closed');
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    $menu.classList.toggle('header__menu--closed');
  });
}
