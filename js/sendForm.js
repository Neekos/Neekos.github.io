//соединение с сервером
const server = 'http://jsonplaceholder.typicode.com/posts';

// создаем метод отправки данных в виде объекта
const sendData = (data, callBack, falseCallBack) => {
  const request = new XMLHttpRequest();
  // метод отравки и сервер
  request.open('POST', server);

  request.addEventListener('readystatechange', () => {
      if (request.readyState !==4) {
        return;
      }

      if (request.status ===200 ||  request.status === 201) {
        const response = JSON.parse(request.responseText)
        callBack(response.id);

      }else{
        falseCallBack(request.status)
         throw new Error(request.status)
      }
  })

  request.send(data);

}


// получаем формы
const formElems = document.querySelectorAll('.form');
const formHandler = (form)=>{
  form.addEventListener('submit', (event) => {
    // прерываем отправку
    event.preventDefault();
    // создаем объекта
    const data  = {};
    // получаем все элементы формы
    for(const {name, value} of form.elements){
      if (name) {
        // делегирование
        data[name] = value
      }
    }
    // Отправка
    // переводим в json строку
    sendData(JSON.stringify(data),
    (id)=>{
      alert('ваша заявка №:'+ id+'!')
    },
    (err)=>{
      alert('ошибка' + err)
    }
    );
    // отчистка полей формы
    form.reset();

  })
}
// перебераем все формы
formElems.forEach(formHandler);




// передача в видео объекта
// const dataTest = {
//   name: 'Максим',
//   phone: '9800080'
// }
