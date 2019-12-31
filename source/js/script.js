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

// Yandex карта

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.936397, 30.321166],
      zoom: 16,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    }),

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'PINK',
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-marker.svg',
      iconImageSize: [36, 36],
      iconImageOffset: [0, 0]
    });

  myMap.geoObjects
    .add(myPlacemark);
});
