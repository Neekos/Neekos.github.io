document.addEventListener('DOMContentLoaded', () =>{
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

  button.forEach((btn, index) => {
    btn.addEventListener('click', ()=>{
      spisoc.forEach((element) => {
        element.classList.add('hidden')
      });
      button.forEach((button) => {
        button.classList.remove('feature__link_active')
      });

      spisoc[index].classList.toggle('hidden')
      btn.classList.toggle('feature__link_active')
        if (btn.addEventListener('click',  ()=>{
          spisoc[index].classList.toggle('hidden')
          btn.classList.toggle('feature__link_active')
        })) {

        }
    })
  });


})
