function fieldCheck() {
    let inputFirstName = document.getElementById("first-name");
    let inputLastName = document.getElementById("last-name");
    let inputMessage = document.getElementById("message");

    const errorMessage = document.getElementById("error-message");

    // afficher le message d'erreur selon les conditions
    if (inputFirstName.value === "" || inputLastName.value === "" || inputMessage.value === "" ) {
        errorMessage.style.display = "block";
   } else {
       errorMessage.style.display = "none";
       return true;
   } 
}

function addComment(firstName, lastName, message) {
    if (fieldCheck()) {

        const newComment = document.createElement('div');
        newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');

        // Définir le contenu HTML du commentaire avec les valeurs fournies
        newComment.innerHTML = `
        <div class="flex space-x-4 text-sm text-gray-500">
            <div class="flex-1 py-10 border-t border-gray-200">
                <div class="flex-1 py-10">
                    <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
                        <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                            <p>${message}</p>
                        </div>
                </div>
            </div>
        </div>`;
        
        // Sélectionner l'élément parent où ajouter le commentaire
        const parentElement = document.getElementById("comment-list");
        parentElement.appendChild(newComment);

        // Effacer les champs des inputs
        document.getElementById("first-name").value = '';
        document.getElementById("last-name").value = '';
        document.getElementById("message").value = '';
    }
}

const btn =  document.querySelector("button");

//Ajout d'une écoute d'événements pour le clic sur le bouton "Envoyer"
btn.addEventListener('click', function(event) {
        // Empêcher le rechargement de la page
    event.preventDefault();
    
    // Récupérer les valeurs des inputs
    let inputFirstName = document.getElementById("first-name").value;
    let inputLastName = document.getElementById("last-name").value;
    let inputMessage = document.getElementById("message").value;

    addComment(inputFirstName, inputLastName, inputMessage);
 
});
