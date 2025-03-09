// Sélectionne tous les éléments avec l'ID "card"
const cards = document.querySelectorAll("#card");

cards.forEach((card) => {
  // Sélectionne l'élément avec l'ID "content" à l'intérieur de chaque carte
  const content = card.querySelector("#content");
  // Sélectionne l'élément avec la classe "fleche" à l'intérieur de chaque carte
  const fleche = card.querySelector(".fleche");

  // Ajoute un écouteur d'événement de clic à chaque carte
  card.addEventListener("click", () => {
    // Vérifie si la carte est déjà étendue
    if (card.classList.contains("expanded")) {
      // Cache le contenu et réduit la taille de la carte
      content.style.visibility = "hidden";
      card.classList.remove("expanded");
      card.style.height = "90px";
      fleche.style.transform = "rotate(0deg)";
    } else {
      // Affiche le contenu et étend la taille de la carte
      content.style.visibility = "visible";
      card.classList.add("expanded");
      card.style.height = "190px";
      card.style.height = `${content.scrollHeight + 105}px`;
      fleche.style.transform = "rotate(180deg)";
    }
  });

  // Ajoute une transition pour la hauteur de la carte
  card.style.transition = "height 0.3s ease";
  // Ajoute une transition pour la visibilité du contenu
  content.style.transition = "visibility 0.1s ease";
  // Ajoute une transition pour la rotation de la flèche
  fleche.style.transition = "transform 0.3s ease";
});

// Sélectionne le conteneur du carrousel
const carouselContainer = document.querySelector(".carousel-container");
// Sélectionne tous les éléments du carrousel
const items = document.querySelectorAll(".carousel-item");

let currentIndex = 0;

// Met à jour la position du carrousel
function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Démarre le carrousel avec un intervalle de 5 secondes
function startCarousel() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }, 5000); // Change tous les 5 secondes
}

startCarousel();

// Affiche l'élément avec l'ID spécifié
function on(id) {
  document.getElementById(id).style.display = "block";
}

// Cache l'élément avec l'ID spécifié
function off(id) {
  document.getElementById(id).style.display = "none";
}
