// const FeaturedInSection = document.querySelector(".featured-in-section");

// document.addEventListener("scroll", function (e) {
//   e.preventDefault();

//   FeaturedInSection.style.animationName = "logos-right";
//   console.log("fire");
// });

// var checkScrollSpeed = (function (settings) {
//   settings = settings || {};

//   var lastPos,
//     newPos,
//     timer,
//     delta,
//     delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

//   function clear() {
//     lastPos = null;
//     delta = 0;
//   }

//   clear();

//   return function () {
//     newPos = window.scrollY;
//     if (lastPos != null) {
//       // && newPos < maxScroll
//       delta = newPos - lastPos;
//     }
//     lastPos = newPos;
//     clearTimeout(timer);
//     timer = setTimeout(clear, delay);
//     return delta;
//   };
// })();

// // listen to "scroll" event
// window.onscroll = function () {
//   console.log(checkScrollSpeed());
// };
