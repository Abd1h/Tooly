const btnRight = document.querySelector('.reviews-chevron--right');
const btnLeft = document.querySelector('.reviews-chevron--left');
const reviews = document.querySelectorAll('.single-review-container');
const caouselDots = document.querySelectorAll('.dot');
// "dot-active" class
let currentReview = 0;
const reviewsNumber = reviews.length;

// currentReview =0 |             0% 100% 200%
// *btnRight clicked*
// currentReview =1 |       -100% 0%  200%
// *btnRight clicked*
// currentReview =2 | -200% -100% 0%

const moveToReview = function () {
  reviews.forEach((review, i) => {
    review.style.transform = ` translateX(${(i - currentReview) * 100}%) `;
  });
};
moveToReview(); //to set the initial position for all reviews

const UpdateActiveDot = function () {
  caouselDots.forEach((dot) => {
    // 1) remove dot-active class from all dots
    dot.classList.remove('dot-active');
    // 2) adding dot-active to the matching dot
    const dotNumber = +dot.dataset.dot; //1 , 2 , 3

    if (dotNumber === currentReview + 1) {
      dot.classList.add('dot-active');
    }
  });
};
UpdateActiveDot(); //to set the initial active dot

btnRight.addEventListener('click', function () {
  // 1)if its the last review than go back to the first
  if (reviewsNumber - 1 === currentReview) {
    currentReview = 0;
  }
  // moveing and updating the active dot
  else {
    currentReview++;
  }
  moveToReview();
  UpdateActiveDot();
});

btnLeft.addEventListener('click', function () {
  // 1)if its the first review than do nothing
  if (currentReview === 0) return;
  // moveing and updating the active dot
  currentReview--;
  moveToReview();
  UpdateActiveDot();
});

caouselDots.forEach((dot) => {
  dot.addEventListener('click', function () {
    currentReview = dot.dataset.dot - 1;

    // moveing and updating the active dot
    moveToReview();
    UpdateActiveDot();
  });
});
