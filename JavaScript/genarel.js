// *******aplaying soomth section reveal while scrolling *******
const heroImgs = document.querySelectorAll('.hero-img');

const deActiveAllimgs = function () {
  heroImgs.forEach((img) =>
    img.closest('.single-hero-img').classList.remove('active-hero-img')
  );
};

heroImgs.forEach((img) => {
  img.addEventListener('mouseover', function (e) {
    deActiveAllimgs();
    const target = e.target.closest('.single-hero-img');

    target.classList.add('active-hero-img');
  });
});

// *******aplaying soomth section reveal while scrolling *******
const AllSections = document.querySelectorAll('.section-smooth-reveal');
// "hid-section" class to preper section for reveling

// 1) first hidding the selected sections
AllSections.forEach((section) => section.classList.add('hid-section'));

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
  threshold: 0.15,
};

const observer = new IntersectionObserver(obsCallbackRevealSection, obsOptions);
AllSections.forEach((section) => observer.observe(section));

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
