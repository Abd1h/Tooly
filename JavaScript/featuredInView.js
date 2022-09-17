// ******* featured in seciton scroll animation*******

const FeaturedInSection = document.querySelector('.featured-in-section');

// observe a couple of sections only
const targetedSections = document.querySelector('.observer');

let scrollEventSwitch = false;
const screenWidth = window.screen.width;

const mobileScreenWidth =
  +getComputedStyle(document.documentElement)
    .getPropertyValue('--screen-Max-Width')
    .slice(0, -2) - 200; // slice for (px) / conver to number / -200 to make it smaller
let isMobile = false;

// eslint-disable-next-line no-unused-vars
const obsCallbackTranslateX = function (entries, observe) {
  const entry = entries[0];

  // checking if it mobile screen to make the animation faster
  if (screenWidth <= mobileScreenWidth) {
    isMobile = true;
  }

  const translateEl = function () {
    // 1) getting scroll distance value
    const translateValue = +window.pageYOffset;
    // 2) apply animation with it
    FeaturedInSection.style.transform = `translateX(${
      isMobile ? translateValue / 4 : translateValue / 20
    }%)`;
    //2) Stoping the scroll event when sections is not intersecting
    if (scrollEventSwitch === true) {
      document.removeEventListener('scroll', translateEl);

      scrollEventSwitch = false;
    }
  };

  if (!entry.isIntersecting) {
    scrollEventSwitch = true;
    checkForMoreMarkup();
  }
  if (entry.isIntersecting) {
    document.addEventListener('scroll', translateEl);
  }
};

const obsOptionsTranslateX = {
  root: null,
  threshold: 0.25,
};

const FeaturedInSectionObserver = new IntersectionObserver(
  obsCallbackTranslateX,
  obsOptionsTranslateX
);
FeaturedInSectionObserver.observe(targetedSections);

// =======creating more HTML markup when the screen is really wide======

const checkForMoreMarkup = function () {
  // getting current width value
  const FeaturedInSectionWidth = FeaturedInSection.scrollWidth;
  const CurrentScreenWidth = window.screen.width;
  // chacking if our section is smaller then the screen width
  if (FeaturedInSectionWidth < CurrentScreenWidth) {
    const markup = generateHTMLMarkup();
    FeaturedInSection.insertAdjacentHTML('beforeend', markup);
    console.log('moreMarkup was generated');
  }
};

const generateHTMLMarkup = function () {
  return `<!-- added Markup JS -->
          <div class="divider"></div>
          <div class="single-featured--container">
            <img
              src="images/logos/DeWalt_logo.png"
              alt=""
              class="single-featured"
            />
          </div>
          <div class="single-featured--container">
            <img
              src="images/logos/ryobi-logo-png-transparent.png"
              alt=""
              class="single-featured"
            />
          </div>
          <div class="single-featured--container">
            <img
              src="images/logos/Milwaukee_Logo.png"
              alt=""
              class="single-featured"
            />
          </div>
          <div class="single-featured--container">
            <img
              src="images/logos/Makita_logo.png"
              alt=""
              class="single-featured"
            />
          </div>

          <div class="single-featured--container">
            <img
              src="images/logos/hitachi-logo.png"
              alt=""
              class="single-featured"
            />
          </div>

          <!-- added Markup JS -->
          <div class="divider"></div>
          <div class="single-featured--container">
            <img
              src="images/logos/DeWalt_logo.png"
              alt=""
              class="single-featured"
            />
          </div>
          <div class="single-featured--container">
            <img
              src="images/logos/ryobi-logo-png-transparent.png"
              alt=""
              class="single-featured"
            />
          </div>
          <div class="single-featured--container">
            <img
              src="images/logos/Milwaukee_Logo.png"
              alt=""
              class="single-featured"
            />
          </div>
          <div class="single-featured--container">
            <img
              src="images/logos/Makita_logo.png"
              alt=""
              class="single-featured"
            />
          </div>

          <div class="single-featured--container">
            <img
              src="images/logos/hitachi-logo.png"
              alt=""
              class="single-featured"
            />
          </div>`;
};
// FeaturedInSectionObserver.observe(FeaturedInSection);

// ==================================================================//
// const obsCallbackTranslateX = function (entries, observer) {
//   const entry = entries[0];
//   const delay = 50;
//   //
//   const translateEl = function () {
//     const translateValue = +window.pageYOffset;
//     console.log(translateValue);
//     entry.target.style.transform = `translateX(${translateValue - 500}%)`;
//   };
//   let handler;
//   if (entry.isIntersecting) {
//     handler = setInterval(translateEl, delay);
//   }
//   if (!entry.isIntersecting) {
//     clearInterval(handler);
//     console.log('not intersecting');
//   }
//   observer.unobserve(entry.target);
// };
// const obsOptionsTranslateX = {
//   root: null,
//   threshold: 0.15,
// };

// const FeaturedInSectionObserver = new IntersectionObserver(
//   obsCallbackTranslateX,
//   obsOptionsTranslateX
// );

// FeaturedInSectionObserver.observe(FeaturedInSection);
