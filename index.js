document.addEventListener("DOMContentLoaded", () => {
    const test = document.querySelector('.main-img');
    const close = document.querySelector('.close');
    const popup = document.querySelector('.popup');
    const moreInfo = document.querySelector('.more-info')


    popup.addEventListener('click', (e) => {
      console.log(e.target)
      if(e.target.classList.contains("popup") ||
         e.target.classList.contains("icon") ||
         e.target.classList.contains("iconX")
      ){
              popup.style.display = 'none'
      }
    })

    moreInfo.addEventListener('click', (e) => {
      console.log(e.currentTarget)
      if(e.currentTarget.classList.contains("more-info") ){
              popup.style.display = 'block'
      }
    })


  anime(
    {
      targets: test,
      rotate: '10turn',
      direction: 'alternate',
      loop: true,
      easing: 'spring(1, 80, 10, 0)',
      duration: 800
    }, 
    {
      targets: test,
      rotate: '10turn',
      direction: 'alternate',
      loop: true,
      easing: 'spring(1, 80, 10, 0)',
      duration: 800
    }
  );
});


