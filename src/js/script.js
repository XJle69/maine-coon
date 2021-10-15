var modal = document.querySelector(".modal");
var closeBtn = modal.querySelector(".modal__close");
var modalBtn = document.querySelector(".ques__btn");
var question = document.querySelectorAll(".faq__question");
var burger = document.querySelector(".navbar__burger");
var navbarMenu = document.querySelector(".navbar-menu");

modalBtn.addEventListener("click", openModal);
burger.addEventListener("click", openCloseNavbar);

for (var i = 0; i < question.length; i++) {
  question[i].addEventListener("click", openAnswer);
}

function init() {
  burger.classList.toggle("navbar__burger--none");
  navbarMenu.classList.toggle("navbar__menu--none");
}

init();

function openAnswer(env) {
  this.classList.toggle("active-btn");
  this.nextElementSibling.classList.toggle("faq__answer--show");
}

function addCloseListner() {
  window.addEventListener("keydown", escapeCloseModal);
  window.addEventListener("click", outsideClick);
  closeBtn.addEventListener("click", closeModal);
}

function removeCloseListner() {
  window.removeEventListener("keydown", escapeCloseModal);
  window.removeEventListener("click", outsideClick);
  closeBtn.removeEventListener("click", closeModal);
}

function openModal(evt) {
  evt.preventDefault();
  modal.classList.toggle("modal--hide");
  addCloseListner();
}

function closeModal(evt) {
  evt.preventDefault();
  modal.classList.toggle("modal--hide");
  removeCloseListner();
}

function escapeCloseModal(evt) {
  if (evt.key === "Escape") {
    modal.classList.toggle("modal--hide");
    removeCloseListner();
  }
}

function outsideClick(evt) {
  if (evt.target == modal) {
    modal.classList.toggle("modal--hide");
    removeCloseListner();
  }
}

function openCloseNavbar(evt) {
  evt.preventDefault();
  navbarMenu.classList.toggle("navbar__menu--none");
  burger.classList.toggle("navbar__burger--active");
}
