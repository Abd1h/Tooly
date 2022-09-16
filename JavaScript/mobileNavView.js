// ******* nav mobile menu functionality*******
const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.nav-links-container');
const btnLines = document.querySelectorAll('.line');
const navLinks = document.querySelectorAll('.link');

// "open" class that opens burgerMenu
// "line-1 ,line-2,line-3" classes that manipulate burgerBtn shape

const toggleBurgerMenu = function () {
  // 1) slide the menu to the view
  burgerMenu.classList.toggle('open');
  // 2) change burger btn style (open/close)
  btnLines.forEach((line, i) => {
    line.classList.toggle(`line-${i + 1}`);
  });
};

// when user click burger btn
burgerBtn.addEventListener('click', function () {
  toggleBurgerMenu();
});
// close menu when user click on a link
navLinks.forEach((link) =>
  link.addEventListener('click', function () {
    toggleBurgerMenu();
  })
);
