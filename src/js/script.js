var modal = document.querySelector(".modal");
var closeBtn = modal.querySelector(".modal__close");
var modalBtn = document.querySelector(".ques__btn");
var question = document.querySelectorAll(".faq__question");
var i;

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

if (question) {
  for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", openAnswer);
  }
}

function openAnswer(env) {
  this.classList.toggle("active-btn");
  this.nextElementSibling.classList.toggle("faq__answer--show");
}

function openModal(evt) {
  evt.preventDefault();
  modal.style.display = "flex";
}

function closeModal(evt) {
  evt.preventDefault();
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
