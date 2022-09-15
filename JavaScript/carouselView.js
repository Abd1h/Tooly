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
    console.log(reviews);
    review.style.transform = ` translateX(${(i - currentReview) * 100}%) `;
  });
  currentReview++;
};
moveToRight();

btnRight.addEventListener('click', function () {
  if (reviewsNumber === currentReview) {
    currentReview = 0;
  }
  moveToRight();
});
