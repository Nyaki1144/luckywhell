document.addEventListener("DOMContentLoaded", () => {
    const test = document.querySelector('.main-img')


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


