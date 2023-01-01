const data = [
  {
    name: "Oskar",
    img: "./assets/images/1-oskar.png",
  },
  {
    name: "Rikki",
    img: "./assets/images/2-rikki.png",
  },
  {
    name: "Dingo",
    img: "./assets/images/3-dingo.png",
  },
  {
    name: "Winni",
    img: "./assets/images/4-winni.png",
  },
  {
    name: "Jessica",
    img: "./assets/images/5-jessica.png",
  },
  {
    name: "Rex",
    img: "./assets/images/6-rex.png",
  },
  {
    name: "Nikki",
    img: "./assets/images/7-nikki.png",
  },
  {
    name: "Barry",
    img: "./assets/images/8-barri.png",
  },
];

const refs = {
  btnLeft: document.querySelector("#btn-left"),
  btnRight: document.querySelector("#btn-right"),
  carousel: document.querySelector("#carousel"),
  itemLeft: document.querySelector("#items-left"),
  itemRight: document.querySelector(
    "#items-right"
  ),
  itemActive: document.querySelector(
    "#items-active"
  ),

  container: document.querySelector(
    "#cardContainer"
  ),
};

const createCardTemplate = ({ name, img }) => {
  return `<li class="friends__item">
      <img src="${img}" alt="${name}"/>
      <h3 class="subheading">${name}</h3>
      <button type="button" class="button--friends" data-action=${name}>Learn more</button>
      </li>`;
};

refs.btnRight.addEventListener(
  "click",
  onBtnRightClick
);
refs.btnLeft.addEventListener(
  "click",
  onBtnLeftClick
);

const elements = data.map((el) =>
  createCardTemplate(el)
);

let state = [
  elements[3],
  elements[4],
  elements[5],
];
let n = 3;

function randomArr() {
  let newArr = [];
  while (newArr.length < n) {
    let item =
      elements[Math.floor(Math.random() * 8)];
    if (
      !state.includes(item) &&
      !newArr.includes(item)
    ) {
      newArr.push(item);
    }
  }
  state = newArr;
}

refs.carousel.addEventListener(
  "animationend",
  (animationEvent) => {
    if (
      animationEvent.animationName ===
      "move-right"
    ) {
      refs.carousel.classList.remove(
        "transition-right"
      );
      refs.itemActive.innerHTML =
        refs.itemRight.innerHTML;
    } else {
      refs.carousel.classList.remove(
        "transition-left"
      );
      refs.itemActive.innerHTML =
        refs.itemLeft.innerHTML;
    }

    refs.btnRight.addEventListener(
      "click",
      onBtnRightClick
    );
    refs.btnLeft.addEventListener(
      "click",
      onBtnLeftClick
    );
  }
);

function onBtnRightClick() {
  refs.carousel.classList.add("transition-right");
  refs.btnRight.removeEventListener(
    "click",
    onBtnRightClick
  );
  refs.btnLeft.removeEventListener(
    "click",
    onBtnLeftClick
  );
  refs.itemRight.innerHTML = "";
  randomArr();
  refs.itemRight.insertAdjacentHTML(
    "beforeend",
    state.join("")
  );
}

function onBtnLeftClick() {
  refs.carousel.classList.add("transition-left");
  refs.btnLeft.removeEventListener(
    "click",
    onBtnLeftClick
  );
  refs.btnRight.removeEventListener(
    "click",
    onBtnRightClick
  );
  refs.itemLeft.innerHTML = "";
  randomArr();
  refs.itemLeft.insertAdjacentHTML(
    "beforeend",
    state.join("")
  );
}
