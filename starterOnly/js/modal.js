function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const formClose = document.getElementsByClassName("close")
const close2 = document.getElementsByClassName('btn-submit2')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form&
function launchModal() {
  modalbg.style.display = "block";
}

//close la fenêtre modal
function closeModal() {
  modalbg.style.display = "none";
}

formClose[0].addEventListener('click', closeModal);
close2[0].addEventListener('click', closeModal);



