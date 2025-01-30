document.addEventListener("DOMContentLoaded", () => {
  // Récupérer les paramètres de l'URL
  const params = new URLSearchParams(window.location.search);
  const titre = params.get("titre"); // Récupère la valeur du paramètre 'titre'

  // Récupérer le div overlay
  const textOverlay = document.getElementById("text-overlay");

  // Vérifier si le div existe
  if (!textOverlay) {
    console.error("Le div avec l'id 'text-overlay' n'existe pas.");
    return;
  }

  // Logique d'affichage selon la valeur de 'titre'
  if (titre === "start") {
    textOverlay.innerHTML = '<img src="pictures/start.png" alt="Image 1" id="img-start">';
  } else if (titre === "stop") {
    textOverlay.innerHTML = '<img src="pictures/stop.png" alt="Image 2" id="img-stop">';
  } else {
    textOverlay.innerHTML = ''; // Afficher rien si 'titre' est absent ou non reconnu
  }
});
