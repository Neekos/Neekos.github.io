// получаем селектор кнопки узанть больше
const morelElems = document.querySelector('.more');
// получаем селектор модального контейнера
const modalElems = document.querySelector('.modal');

// функция открытия
const openModal = () =>{
  // удаляем у блока класс hidden
  modalElems.classList.remove('hidden');
};
// функция закрытия
const closeModal = () =>{
  // добавляем класс hidden
  modalElems.classList.add('hidden');
};

// вызов функции открытия
morelElems.addEventListener('click', openModal);
// вызов функции закрытия
modalElems.addEventListener('click', (event) =>{
  // получаем события
  const target = event.target;
// если елемен который мы нажимаем равняется class overlay or modal__close тогда вызов функции закрытия
  if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
    closeModal()
  }
});
