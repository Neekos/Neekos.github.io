const menuElems = document.querySelector('.menu');
const burgerElem = document.querySelector('.humburger-menu');

const toggleMenu = () =>{
  menuElems.classList.toggle('menu-active');
  burgerElem.classList.toggle('humburger-menu-active');
}

const closeMenu = () =>{

}

burgerElem.addEventListener('click', toggleMenu);
