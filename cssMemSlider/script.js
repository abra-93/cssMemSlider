const ACTIVE_IMG = document.querySelectorAll(".slider__image");
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

const clickDot = (dot) => {
  let id = dot.dataset.id;

  LIST_DOT.forEach((el) => {
    el.classList.remove("active-dot");
  });
  dot.children[0].classList.add("active-dot");
  changeText(id);
};

SLIDER_CONTROL.forEach((dot) => {
  dot.addEventListener("click", () => clickDot(dot));
});
