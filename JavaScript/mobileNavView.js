// ******* nav mobile menu functionality*******
const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.nav-links-container');
const btnLines = document.querySelectorAll('.line');
const navLinks = document.querySelectorAll('.link');

const overlay = document.querySelector('.overlay-blur');

// "open" class that opens burgerMenu
// "line-1 ,line-2,line-3" classes that manipulate burgerBtn shape

const toggleBurgerMenu = function () {
  // 1) slide the menu to the view
  burgerMenu.classList.toggle('open');
  // 2) change burger btn style (open/close)
  btnLines.forEach((line, i) => {
    line.classList.toggle(`line-${i + 1}`);
  });
  // 3)display an overlay for background
  overlay.classList.toggle('hid-blur');
};

// when user click burger btn
burgerBtn.addEventListener('click', function () {
  toggleBurgerMenu();
});
// when user click on the overlay "clocs"
overlay.addEventListener('click', function () {
  toggleBurgerMenu();
});

// close menu when user click on a link only one mobile

navLinks.forEach((link) =>
  link.addEventListener('click', function () {
    // if its on mobile and window is open
    if (burgerMenu.classList.contains('open')) {
      toggleBurgerMenu();
    }
  })
);

// ====== if menu is open and user scroll ==>close window======
const header = document.querySelector('.hero-section');

const obsCallbackNav = function (entries, observer) {
  const entry = entries[0];
  //if its intersecting fine
  if (entry.isIntersecting) return;

  //when user scrool down "not intersecting" close menu
  if (burgerMenu.classList.contains('open')) {
    toggleBurgerMenu();
  }
  observer.unobserve(entry.target);
};
const obsOptionsNav = {
  root: null,
  threshold: 0.7,
};

const navObserver = new IntersectionObserver(obsCallbackNav, obsOptionsNav);
navObserver.observe(header);
