import pets from "./data.js";
import petCardTemplate from "./template.js";

const refs = {
  ulParentEl: document.querySelector(
    ".js-actions"
  ),
  allBtn: document.querySelectorAll(
    ".js-actions button"
  ),
  closeModalBtn: document.querySelector(
    '[data-action="closeModal"]'
  ),
  backdrop: document.querySelector(
    "[data-modal]"
  ),
  petContainer:
    document.querySelector("#pet-cards"),
};

refs.ulParentEl.addEventListener(
  "click",
  onPetBtnClick
);
refs.closeModalBtn.addEventListener(
  "click",
  onClosePetModal
);
refs.backdrop.addEventListener(
  "click",
  onBackdropClick
);

function onPetBtnClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  onOpenModal(event);
}

function onOpenModal(event) {
  const selectedPetName =
    event.target.dataset.action;

  const petForRender = pets.find(
    (pet) => pet.name === selectedPetName
  );

  refs.petContainer.insertAdjacentHTML(
    "beforeend",
    petCardTemplate(petForRender)
  );

  refs.backdrop.classList.toggle("is-hidden");
  document.body.classList.add("modal-open");
}

function onClosePetModal(event) {
  event.preventDefault();
  refs.backdrop.classList.toggle("is-hidden");
  document.body.classList.remove("modal-open");
  refs.petContainer.innerHTML = "";
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onClosePetModal(event);
  }
}
