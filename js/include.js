// Attendre que le document soit chargé
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner tous les éléments avec l'attribut data-include
    const includeElements = document.querySelectorAll('[data-include]');

    includeElements.forEach(function(element) {
        // Récupérer le chemin du fichier à inclure
        const file = element.getAttribute('data-include');

        // Faire une requête pour charger le fichier HTML
        fetch(file)
            .then(response => response.text())  // Obtenir le contenu du fichier
            .then(data => {
                // Insérer le contenu du fichier dans l'élément sélectionné
                element.innerHTML = data;
            })
            .catch(error => {
                console.error('Erreur lors de l\'inclusion du fichier:', error);
            });
    });
    document.getElementById('aboutBtn').addEventListener('click', function() {
        window.location.href = 'about.html'; // Redirige vers la page "À propos"
    });
});
