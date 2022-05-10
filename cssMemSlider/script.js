const IMG = document.querySelectorAll(".slider__image");
const ACTIVE_IMG = document.querySelector(".active-image");
const NEXT_IMG = document.querySelector(".next-image");
const SLIDER_CONTROL = document.querySelectorAll(".list__item");
const LIST_DOT = document.querySelectorAll(".list__dot");
const TEXT_ITEM = document.querySelectorAll(".text__item");

const changeText = (id) => {
  NEXT_IMG.children[0].src = `./assets/gif/${+id}.gif`;
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
  let nextImg = ACTIVE_IMG.nextElementSibling || IMG[0];
  ACTIVE_IMG.classList.add("hide");
  nextImg.classList.add("show");
  console.log(id);
  setTimeout(() => {
    ACTIVE_IMG.classList.remove("hide");
    nextImg.classList.remove("show");
    ACTIVE_IMG.children[0].src = `./assets/gif/${id}.gif`;
  }, 500);

  console.log(nextImg);
};

const clickDot = (dot) => {
  let id = dot.dataset.id;

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
