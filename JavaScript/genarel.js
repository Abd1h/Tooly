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
  activeImg();
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
// "hid-section" class to preper section for reveling

// 1) first hidding the selected sections
allSections.forEach((section) => section.classList.add('hid-section'));
// 2) reveal sections
const obsCallbackRevealSection = function (entries, observer) {
  const entry = entries[0];

  //   reveal section when its intersecting
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('hid-section');

  //  thats it.. finish obsorving
  observer.unobserve(entry.target);
};

const obsOptions = {
  root: null,
  threshold: 0.04,
};
const observer = new IntersectionObserver(obsCallbackRevealSection, obsOptions);
allSections.forEach((section) => observer.observe(section));

// *******aplaying soomth feature reveal for features section *******
const allFeatures = document.querySelectorAll('.feature-info');

// 1) first hidding the selected sections
allFeatures.forEach((feature) => feature.classList.add('hid-features-info'));
// 2) reveal sections
const obsCallbackRevealFeature = function (entries, observer) {
  const entry = entries[0];

  //   reveal section when its intersecting
  if (!entry.isIntersecting) return;
  console.log(entry.target);
  entry.target.classList.remove('hid-features-info');

  //  thats it.. finish obsorving
  // observer.unobserve(entry.target);
};

const obsOptionsFeature = {
  root: null,
  threshold: 0.15,
};
const observerFeature = new IntersectionObserver(
  obsCallbackRevealFeature,
  obsOptionsFeature
);
allFeatures.forEach((feature) => observerFeature.observe(feature));

// *******aplaying Lazy loading for featurs section images *******
const images = document.querySelectorAll('.img-lazy');
images.forEach((img) => img.classList.add('lazy-blur'));

const obsCallbackLoadImage = function (entries, observer) {
  const entry = entries[0];

  if (!entry.isIntersecting) return;
  // 1) replace images
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
