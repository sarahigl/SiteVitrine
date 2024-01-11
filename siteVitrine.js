//! event scroll page
document.addEventListener('scroll',(event)=>{
    let scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    let scrollY = window.scrollY;
    // var dans la fonction pour surveiller et se mettre a jour sinon X
    let onEstOu = (scrollY/scrollMax)*100;
    //connection bar en fonction du % scroll
    document.getElementById('myBar').style.width = onEstOu  + "%";
});

//! ajout de du titre acceuil cliquable
let titrePageAcceuil = document.querySelector(".h3-2");
let link = document.createElement("a");
let texteExistant = titrePageAcceuil.textContent;
titrePageAcceuil.textContent = "";
link.href = "http://127.0.0.1:5500/application.html";
link.textContent = texteExistant;
titrePageAcceuil.appendChild(link);

link.style.textDecoration = "none";
//link.style.color = "#707070";
link.style.cursor = "pointer";

// Ajouter un écouteur d'événement pour le survol
link.addEventListener("mouseover", function() {
    link.style.color = "#FFD800";
});

// Ajouter un écouteur d'événement pour la fin du survol
link.addEventListener("mouseout", function() {
    link.style.color = "#707070";
});

//! EVENT pour fleche qui remonte écran
let boutonArrow = document.querySelector('#arrow');

boutonArrow.addEventListener('click',()=>{
    console.log('ok')
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


//! EVENT POUR SLIDE IMAGE PARGE ACCUEIL
// bouton suivant et precedant slide
let boutonNext = document.querySelector('#suivant');
let boutonPrevious = document.querySelector('#precedent');
let image = document.querySelector('#image');
let imageTitle = document.querySelector('#image-title'); // Ajout de l'élément du titre
const images = ['img2.png', 'img3.png', 'img1.png'];
const titles = ['Consulte', 'Partage', 'Répertoire']; // Tableau de titres

let currentImageIndex = 0;

// Fonction pour mettre à jour l'image et le titre
function updateImage() {
    image.src = images[currentImageIndex];
    imageTitle.textContent = titles[currentImageIndex];
}

// Événement pour le bouton Suivant
boutonNext.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateImage(); // Mettre à jour l'image et le titre lorsque vous cliquez sur Suivant
});

// Événement pour le bouton Précédent
boutonPrevious.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateImage(); // Mettre à jour l'image et le titre lorsque vous cliquez sur Précédent
});

updateImage();


//! mise en place bouton vers un lien exterieur // BOUTON TÉLÉCHARGEMENT APPLICATION
let boutonApplication = document.querySelector('button');
boutonApplication.classList.add('boutonApp');

boutonApplication.addEventListener('click',(event)=>{
    if(event){
        window.open("https://play.google.com/store/apps?hl=fr&gl=US", "_blank");
    }
});
