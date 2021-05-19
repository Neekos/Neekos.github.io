// слушатель событий
document.addEventListener('DOMContentLoaded', () =>{
  // отлавливаем селекторы классов
  const button = document.querySelectorAll('.feature__link')
  const spisoc = document.querySelectorAll('.feature-sub')

  // for (let i = 0; i < button.length; i++) {
  //   button[i].addEventListener('click', () =>{
  //       spisoc[i].classList.toggle('hidden')
  //       button[i].classList.toggle('feature__link_active')
  //
  //   })
  // }

  // Второй вариан
// через foreach переберам все кнопки
  button.forEach((btn, index) => {
    // по клюку добавляем или удалем определенные классы
    btn.addEventListener('click', ()=>{
        // если есть класс active  тогда удаляем его и до бавляем списку класс hidden
        if (btn.classList.contains('feature__link_active')) {
            btn.classList.remove('feature__link_active');
            spisoc[index].classList.add('hidden');
        }else{
          spisoc.forEach((element) => {
            element.classList.add('hidden')
          });
          button.forEach((button) => {
            button.classList.remove('feature__link_active')
          });
          spisoc[index].classList.toggle('hidden')
          btn.classList.toggle('feature__link_active')
        }
    })
  });


})
