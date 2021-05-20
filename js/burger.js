// получаем селекторы
const menuElems = document.querySelector('.menu');
const burgerElem = document.querySelector('.humburger-menu');
const menuList  = document.querySelectorAll('.menu-list__item');
// создаем функцию открытия и закрытия
const toggleMenu = () =>{
  menuElems.classList.toggle('menu-active');
  burgerElem.classList.toggle('humburger-menu-active');
}
// создаем функцию закрытия
const closeMenu = () =>{
  burgerElem.classList.remove('humburger-menu-active');
  menuElems.classList.remove('menu-active');
}
// вызов функции
burgerElem.addEventListener('click', toggleMenu);
// перебераю все элементы списка и вызываю на каждый функцию закрытия
menuList.forEach((menu, index) => {
  menuList[index].addEventListener('click', closeMenu);
});
