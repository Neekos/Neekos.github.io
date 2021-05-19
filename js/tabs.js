// получаем  атрибутты data-tabs-handler
const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
//получаем атрибуты data-tabs-field
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
//переберам через for of
for (const tab of tabsHandlerElems) {
  //при нажатии на кнопку
  tab.addEventListener('click', ()=>{
    // перебераем все подобные елементы
    tabsHandlerElems.forEach((item) => {
      // и если tab совпадает с item добавляем класс active иначе удаляем
      if (tab === item) {
        item.classList.add('design-list__item_active')
      }else{
        item.classList.remove('design-list__item_active')
      }
    });
      // перебераем все поля
    tabsFieldElems.forEach((item) => {
      // и если item.dataset.tabsField === tab.dataset.tabsHandler совпадают
      if (item.dataset.tabsField === tab.dataset.tabsHandler) {
        //удаляем
        item.classList.remove('hidden')
      }else{
        // добавляем
        item.classList.add('hidden')
      }
    });
  })
}
