let inputFirstName = document.getElementById("first-name");
let inputLastName = document.getElementById("last-name");
let inputMessage = document.getElementById("message");
const errorMessage = document.getElementById("error-message");


function fieldCheck() {
    // afficher le message d'erreur selon les conditions
    if (inputFirstName.value === "" || inputLastName.value === "" || inputMessage.value === "" ) {
        errorMessage.style.display = "block";
   } else {
       errorMessage.style.display = "none";
   } 
}

const btn = document.querySelector("button");
    btn.addEventListener("click", function(event) {
    // Empêcher le comportement par défaut du bouton (raffraîchissement de la page)
    event.preventDefault();
    // Appel de la fonction pour vérifier les champs
    fieldCheck();
});