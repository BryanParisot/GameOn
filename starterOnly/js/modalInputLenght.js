const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const dateNaissance = document.getElementById("birthdate");
const nombre = document.getElementById("quantity");
const condition = document.getElementById("checkbox1");
const erreurMessage = document.querySelector(".messageErreur");

// les types radios
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");

// Validation du prenom
function validationPrenom() {
  if (prenom.value.trim().length <= 2 || prenom.value == "") {
    erreurMessage.style.display = "block";
    erreurMessage.innerText = "Le prenom doit faire plus de 2 caractères";
    console.log("erreur prenom");
    return false;
  }
  erreurMessage.style.display = "none";

  return true;
}

// Validation du nom
function validationNom() {
  if (nom.value.length <= 2 || nom.value == "") {
    erreurMessage.style.display = "block";
    erreurMessage.innerText = "Le nom doit faire plus de 2 caractères";
    console.log("erreur nom");
    return false;
  }
  return true;
}

//validation de l'email
function validationEmail() {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(email.value) == false || email.value == "") {
    erreurMessage.style.display = "block";
    erreurMessage.innerText = "L'adresse email n'est pas correct";
    console.log("erreur email");
    return false;
  }
  return true;
}

//validation de la date
function validationDate() {
  // dateNaissance.value == ''  ? true :  console.log('Une erreur de date est survenue')
  if (dateNaissance.value == "") {
    erreurMessage.style.display = "block";
    erreurMessage.innerText = "La date de naissance n'est pas entrée";
    console.log("Une erreur de date est survenue");
    return false;
  }
  console.log(dateNaissance.value);
  return true;
}

//validation du nombre de participation
function validationNumberParticipation() {
  if (nombre.value > 99 || nombre.value === "") {
    erreurMessage.style.display = "block";
    erreurMessage.innerText =
      "Voys devez entrer un nombre et qu'il soit inférieur à 99";
    console.log("vous devez entrer un nombre");
    return false;
  }
  return true;
}

//validation du choix de la ville
function validationRadio() {
  const checklocation1 = location1.checked;
  const checklocation2 = location2.checked;
  const checklocation3 = location3.checked;
  const checklocation4 = location4.checked;
  const checklocation5 = location5.checked;
  const checklocation6 = location6.checked;

  if (
    checklocation1 === false &&
    checklocation2 === false &&
    checklocation3 === false &&
    checklocation4 === false &&
    checklocation5 === false &&
    checklocation6 === false
  ) {
    erreurMessage.style.display = "block";
    erreurMessage.innerText = "Vous devez choisir quelles villes";
    return false;
  } else {
    checklocation1 === true ||
      checklocation2 === true ||
      checklocation3 === true ||
      checklocation4 === true ||
      checklocation5 === true ||
      checklocation6 === true;
  }
  return true;
}

//validation des conditions generales
function validationCheck() {
  if (condition.checked === false) {
    erreurMessage.style.display = "block";
    erreurMessage.innerText = "Vous devez accepter les conditions générales";
    console.log("formulaire n'est pas accpté");

    return false;
  }

  return true;
}

// Verfication des functions
function allValidationsPassed() {
  return (
    validationPrenom() &&
    validationNom() &&
    validationEmail() &&
    validationDate() &&
    validationNumberParticipation() &&
    validationCheck() &&
    validationRadio()
  );
}

//validation du formulaire une fois que tout est à true
function validate(event) {
  if (allValidationsPassed()) {
    alert('Nous avons bien pris en compte vos informations')
    console.log("ggggg");
    return true
  }
  event.preventDefault();
  return false;
}
