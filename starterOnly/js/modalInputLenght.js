const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const dateNaissance = document.getElementById("birthdate");
const nombre = document.getElementById("quantity");
const condition = document.getElementsByClassName("checkbox2-label");
const erreurMessage = document.querySelector(".messageErreur");

const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");

function validationPrenom() {
  if (prenom.value.trim().length <= 2 || prenom.value == "") {
      console.log("eeerrreeeuuurrr prenom");
    return false;
  } else {
    return true;
  }
}

function validationNom() {
  if (nom.value.length <= 2 || nom.value == "") {
    console.log("eeerrreeeuuurrr nom");
    return false;
  }
}
// function validationEmail() {
//   const regex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (email.match(regex)) {
//     console.log("eeerrreeeuuurrr email");
//     return false;
//   }
//   return true;
// }

function validationEmail() {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(email.value) == false) {
    console.log("erreur email");
    return false;
  }
  return true;
}

function validationDate() {
  // dateNaissance.value == ''  ? true :  console.log('Une erreur de date est survenue')
  if (dateNaissance.value == "") {
    console.log("Une erreur de date est survenue");
    return false;
  }
  console.log(dateNaissance.value)
  return true
}

  

function validationCheck() {
  if (condition.checked === false) {
    console.log("formulaire n'est pas accpté");
    return false;
  }
  return true;
}



function allValidationsPassed() {
  return (
    validationPrenom() &&
    validationNom() &&
    validationEmail() &&
    validationDate() &&
    validationCheck()
  );
}

function validate(event) {
  if (allValidationsPassed()) {
    console.log("ggggg");

  }
  event.preventDefault();
  console.log(event);
  return false;
}