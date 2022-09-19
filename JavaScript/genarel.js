// ******* apllying smooth scrolling *******
const navlinks = document.querySelectorAll('.link');
const logoLink = document.querySelectorAll('.logo');
const soomthScrollLinks = [...navlinks, ...logoLink];
console.log(logoLink, soomthScrollLinks);
soomthScrollLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    // 1)getting the id value for the targeted section
    const target = e.target.getAttribute('href').slice(1);
    // 2) selecting targeted seciton
    const section = document.getElementById(target);
    //2) apply smooth scolling
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
// ******* hero Section img random activation *******
const heroImgs = document.querySelectorAll('.single-hero-img');
const heroImgsContainer = document.querySelector('.hero-imgs-container');
const CHANGE_IMG_SEC = 5000;
// if (true) we went to stop animation and listen to hover from css
let hoverState = false;

const activeImg = function () {
  // check if there is a hover
  if (hoverState) return;
  // number of images
  const imgsNumber = heroImgs.length;
  // to active image rondomly
  const randomNum = Math.floor(Math.random() * imgsNumber);

  heroImgs.forEach((img, i) => {
    if (i !== randomNum) return;
    deactivateAllImgs();
    img.classList.add('active-img');
  });
};

const deactivateAllImgs = function () {
  heroImgs.forEach((img) => {
    // if (!img.classList.contains('active-img')) return;
    img.classList.remove('active-img');
  });
};

setInterval(activeImg, CHANGE_IMG_SEC);
activeImg(); //initial start

heroImgsContainer.addEventListener('mouseover', function () {
  deactivateAllImgs();
  hoverState = true;
});
heroImgsContainer.addEventListener('mouseout', function () {
  hoverState = false;
});
//

// const heroImgs = document.querySelectorAll('.hero-img');

// const deActiveAllimgs = function () {
//   heroImgs.forEach((img) =>
//     img.closest('.single-hero-img').classList.remove('active-hero-img')
//   );
// };

// heroImgs.forEach((img) => {
//   img.addEventListener('mouseover', function (e) {
//     deActiveAllimgs();
//     const target = e.target.closest('.single-hero-img');

//     target.classList.add('active-hero-img');
//   });
// });

// *******aplaying soomth section reveal while scrolling *******
const allSections = document.querySelectorAll('.section-smooth-reveal');
const allFeatures = document.querySelectorAll('.feature-info');

// "hid-section" class to preper section for reveling

// 1) first hidding the selected sections
allSections.forEach((section) => section.classList.add('hid-section'));
allFeatures.forEach((feature) => feature.classList.add('hid-features-info'));
// 2) reveal sections
const obsCallbackRevealSection = function (entries, observer) {
  const entry = entries[0];

  //checking if sections is intersecting
  if (!entry.isIntersecting) return;
  //checking if target is from features section "reveal form left side"
  if (entry.target.classList.contains('feature-info')) {
    entry.target.classList.remove('hid-features-info');
  }
  //reveal section "from bottom"
  entry.target.classList.remove('hid-section');

  //  thats it.. finish obsorving
  observer.unobserve(entry.target);
};

const obsOptions = {
  root: null,
  threshold: 0.05,
};

const observer = new IntersectionObserver(obsCallbackRevealSection, obsOptions);
allSections.forEach((section) => observer.observe(section));
allFeatures.forEach((feature) => observer.observe(feature));

// *******aplaying Lazy loading for featurs section images *******

// import pictur from '../images/featurse' cuz parcel has no way of knowing the url for data-src after building;

import featureImg2 from 'url:../images/featurse/greyson-joralemon-A1g0oeX29ec-unsplash (1).jpg';
import featureImg3 from 'url:../images/featurse/marissa-daeger-jCctpZe3sZo-unsplash (1).jpg';
import featureImg1 from 'url:../images/featurse/pexels-yura-forrat-8642037 (2).jpg';
//
const highImages = [featureImg1, featureImg2, featureImg3];
const images = document.querySelectorAll('.img-lazy');
images.forEach((img, i) => {
  //1)adding blur effect
  img.classList.add('lazy-blur');
  //2) setting the data-src with the high images url
  img.dataset.src = highImages[i];
});

const obsCallbackLoadImage = function (entries, observer) {
  const entry = entries[0];

  if (!entry.isIntersecting) return;
  // 1) replace images
  console.log('done');
  entry.target.src = entry.target.dataset.src;
  // 2) remove the blur filter after the new image is loaded
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-blur');
  });
  //that it.. unobserve
  observer.unobserve(entry.target);
};

const obsOptionsLoadImage = {
  root: null,
  threshold: 0.2,
  rootMargin: '200px', //run call back 200px before intersecting
};

const LazyImagesObserver = new IntersectionObserver(
  obsCallbackLoadImage,
  obsOptionsLoadImage
);
images.forEach((img) => LazyImagesObserver.observe(img));

// *******getting copyrights year for footer *******
const copyRightsYear = document.querySelector('.copyrights-year');
const date = new Date();
const year = String(date.getFullYear());

copyRightsYear.textContent = year;

// *******action for btns *******
const btns = document.querySelectorAll('.btn');
const links = document.querySelectorAll('[href="#"]');
const messageExitBtn = document.querySelector('.message-btn');
const messageContainer = document.querySelector('.message-container');
const targetedBtns = [...btns, ...links];

targetedBtns.forEach((btn) =>
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('click');
    messageContainer.classList.add('open');
    setTimeout(() => {
      if (messageContainer.classList.contains('open'))
        messageContainer.classList.remove('open');
    }, 5000);
  })
);

messageExitBtn.addEventListener('click', function () {
  messageContainer.classList.remove('open');
});
