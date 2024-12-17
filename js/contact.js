document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const errorMessages = document.getElementById('errorMessages');

    if (!errorMessages) {
        console.error("L'élément 'errorMessages' est introuvable dans le DOM.");
        return;
    }

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Réinitialisation des messages d'erreur
        errorMessages.textContent = "";

        // Vérifications des champs
        if (!name || !email || !message) {
            errorMessages.textContent = "Tous les champs doivent être remplis.";
            return;
        }

        // Ajoutez ici le code pour envoyer le formulaire
        console.log("Formulaire soumis :", { name, email, message });
    });
});
