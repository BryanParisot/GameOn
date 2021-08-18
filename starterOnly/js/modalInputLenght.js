// Inputs
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const dateNaissance = document.getElementById("birthdate");
const nombre = document.getElementById("quantity");
const condition = document.getElementById("checkbox1");

// les types radios
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");

// Validation du prenom
function validationPrenom() {
  const errPrenom = document.getElementById("errPrenom");
  if (prenom.value.trim().length <= 2 || prenom.value == "") {
    errPrenom.style.display = "block";
    errPrenom.innerText = "Le prenom doit faire plus de 2 caractères";
    console.log("Le prenom doit faire plus de 2 caractères");
    return false;
  }
  errPrenom.style.display = "none";

  return true;
}

// Validation du nom
function validationNom() {
  const errNom = document.getElementById("errNom");
  if (nom.value.length <= 2 || nom.value == "") {
    errNom.style.display = "block";
    errNom.innerText = "Le nom doit faire plus de 2 caractères";
    console.log("Le nom doit faire plus de 2 caractères");
    return false;
  }
  errNom.style.display = "none";
  return true;
}

//validation de l'email
function validationEmail() {
  const errEmail = document.getElementById("errEmail");
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(email.value) == false || email.value == "") {
    errEmail.style.display = "block";
    errEmail.innerText = "L'adresse email n'est pas correct";
    console.log("L'adresse email n'est pas correct");
    return false;
  }
  errEmail.style.display = "none";
  return true;
}

//validation de la date
function validationDate() {
  const errdate = document.getElementById("errdate");
  // dateNaissance.value == ''  ? true :  console.log('Une erreur de date est survenue')
  if (dateNaissance.value == "") {
    errdate.style.display = "block";
    errdate.innerText = "La date de naissance n'est pas entrée";
    console.log("Une erreur de date est survenue");
    return false;
  }
  errdate.style.display = "none";
  return true;
}

//validation du nombre de participation
function validationNumberParticipation() {
  const errTournoi = document.getElementById("errTournoi");
  if (nombre.value > 99 || nombre.value === "") {
    errTournoi.style.display = "block";
    errTournoi.innerText =
      "Vous devez entrer un nombre et qu'il soit inférieur à 99";
    console.log("Vous devez entrer un nombre et qu'il soit inférieur à 99");
    return false;
  }
  errTournoi.style.display = "none";
  return true;
}

//validation du choix de la ville
function validationRadio() {
  const errLoc = document.getElementById("errLoc");
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
    console.log("Vous devez choisir quelles villes");
    errLoc.style.display = "block";
    errLoc.innerText = "Vous devez choisir quelles villes";
    return false;
  } else {
    checklocation1 === true ||
      checklocation2 === true ||
      checklocation3 === true ||
      checklocation4 === true ||
      checklocation5 === true ||
      checklocation6 === true;
  }
  errLoc.style.display = "none";

  return true;
}

//validation des conditions generales
function validationCheck() {
  const errCheck = document.getElementById("errCheck");
  if (condition.checked === false) {
    errCheck.style.display = "block";
    errCheck.innerText = "Vous devez accepter les conditions générales";
    console.log("Vous devez accepter les conditions générales");

    return false;
  }
  errCheck.style.display = "none";
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
  const x = document.getElementById('x')
  const a = document.getElementById('a')
  if (allValidationsPassed()) {
    x.style.display ="none"
    a.style.display = "block"
    event.preventDefault();
    return true;
  }
  return false;
}
