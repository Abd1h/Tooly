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

const moveToRight = function () {
  reviews.forEach((review, i) => {
    review.style.transform = ` translateX(${(i - currentReview) * 100}%) `;
  });
};
moveToRight();

const moveToLeft = function () {
  reviews.forEach((review, i) => {
    review.style.transform = ` translateX(${(i - currentReview) * 100}%) `;
  });
};
moveToLeft();

btnRight.addEventListener('click', function () {
  // 1)if its the last review than go back to the first
  if (reviewsNumber - 1 === currentReview) {
    currentReview = 0;
    moveToRight();
  }
  // moveing and updating the active dot
  else {
    currentReview++;
    moveToRight();
  }
});

btnLeft.addEventListener('click', function () {
  // 1)if its the last review than go back to the first
  if (currentReview === 0) return;
  // moveing and updating the active dot
  currentReview--;
  moveToLeft();
});
