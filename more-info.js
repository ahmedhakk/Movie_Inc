"use-strict";

const reviewShowBtn = document.querySelector(".reviewBtn");
const reviewModel = document.querySelector(".review-model");
const reviewOverlay = document.querySelector(".review-overlay");

const openModel = (model, overlay) => {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModel = (model, overlay) => {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};

reviewShowBtn.addEventListener(
  "click",
  openModel.bind(null, reviewModel, reviewOverlay)
);

reviewOverlay.addEventListener(
  "click",
  closeModel.bind(null, reviewModel, reviewOverlay)
);

// Stars
let rating;
const form = document.querySelector(".review-form");
const stars = document.querySelectorAll(".star");

stars.forEach(function (star) {
  star.addEventListener("click", setRating);
});

function setRating(ev) {
  const clickedStar = ev.currentTarget;
  rating = clickedStar.getAttribute("data-value");

  stars.forEach(function (star) {
    if (star.getAttribute("data-value") <= rating) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  rating = +rating + 1;
  if (rating) {
    console.log("Selected rating: " + rating);
    closeModel.call(null, reviewModel, reviewOverlay);
  }
});
