const IMG = document.querySelectorAll(".slider__image");
const ACTIVE_IMG = document.querySelector(".active-image");
const NEXT_IMG = document.querySelector(".next-image");
const SLIDER_CONTROL = document.querySelectorAll(".list__item");
const LIST_DOT = document.querySelectorAll(".list__dot");
const TEXT_ITEM = document.querySelectorAll(".text__item");

const changeText = (id) => {
  TEXT_ITEM.forEach((text) => {
    text.classList.remove("active-text");
    if (+text.dataset.id == id) {
      text.classList.add("active-text");
      text.classList.add("show");

      setTimeout(() => {
        text.classList.remove("show");
      }, 500);
    }
  });
};

const changeImage = (id) => {
  IMG.forEach((el) => el.classList.remove("active-image"));
  let image = Array.from(IMG).find((s) => +s.dataset.id === id);

  image.classList.add("active-image");
  image.classList.add("show-image");

  setTimeout(() => {
    image.classList.remove("show-image");
  }, 1000);
};

const clickDot = (dot) => {
  let id = +dot.dataset.id;

  LIST_DOT.forEach((el) => {
    el.classList.remove("active-dot");
  });
  dot.children[0].classList.add("active-dot");
  changeText(id);
  changeImage(id);
};

SLIDER_CONTROL.forEach((dot) => {
  dot.addEventListener("click", () => clickDot(dot));
});
