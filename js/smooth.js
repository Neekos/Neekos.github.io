//Отлавливаем отрибут href который начинается с # и исключаем ссылки надругие страницы
const smothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
  //проходимся по всем ссылкам и создаем callback function
smothScrollElems.forEach((link) => {
    // callback
    link.addEventListener('click', (event)=>{
      // отключате стандартное браузерное поведение
       event.preventDefault();
       // получаем id и обрезаем #
       const id = link.getAttribute('href').substring(1)
       // получаем елемент и в метод передаем объект с параметрами
       document.getElementById(id).scrollIntoView({
         behavior:'smooth'
       })
    })
});
