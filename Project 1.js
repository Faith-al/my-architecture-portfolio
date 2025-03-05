

window.addEventListener('resize', adjustColumns);

function adjustColumns() {
    const gallery = document.querySelector('.gallery');
    const screenWidth = window.innerWidth;

    if (screenWidth < 600) {
        gallery.style.columnCount = 1;
    } else if (screenWidth < 900) {
        gallery.style.columnCount = 2;
    } else {
        gallery.style.columnCount = 3;
    }
}

adjustColumns(); // Zorg dat de juiste kolommen worden geladen bij het starten

// Selecteer de iframe en de knop
const speckleIframe = document.getElementById('speckleIframe');
const fullscreenButton = document.getElementById('fullscreenButton');

// Voeg click-event toe aan de knop
fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        // Activeer fullscreen-modus
        speckleIframe.requestFullscreen().catch(err => {
            alert(`Fullscreen niet beschikbaar: ${err.message}`);
        });
    } else {
        // Verlaat fullscreen-modus
        document.exitFullscreen();
    }
});


// Selecteer alle close-knoppen
const closeButtons = document.querySelectorAll('.popup .close');

closeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Voorkomt standaard gedrag (zoals scrollen)
        
        // Zoek de overlay en verberg deze
        const popup = button.closest('.overlay');
        if (popup) {
            popup.style.visibility = 'hidden'; // Verberg popup
            popup.style.opacity = '0'; // Voeg fade-out effect toe (optioneel)
        }

        // Haal focus weg van de knop
        document.body.focus();
    });
});

// Sluit de pop-up bij klikken buiten de inhoud
document.querySelectorAll('.overlay').forEach((popup) => {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.visibility = 'hidden';
            popup.style.opacity = '0';
        }
    });
});

// Array met afbeeldingen
const galleryImages = [
    "Portfolio.photo/0024.jpg",
    "Portfolio.photo/0025.jpg",
    "Portfolio.photo/0052.jpg",
    "Portfolio.photo/0033.jpg",
    "Portfolio.photo/0034.jpg",
    "Portfolio.photo/0046.jpg",
    "Portfolio.photo/0047.jpg",
];

let currentIndex = 0;

// Selecteer de popup-afbeelding en knoppen
const popupImage = document.getElementById("popupImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Functie om afbeelding te updaten
function updatePopupImage(index) {
    if (index >= 0 && index < galleryImages.length) {
        popupImage.src = galleryImages[index];
        currentIndex = index;
    }
}

// Event listeners voor de pijlen
prevButton.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length; // Ga terug, cyclisch
    updatePopupImage(newIndex);
});

nextButton.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % galleryImages.length; // Ga vooruit, cyclisch
    updatePopupImage(newIndex);
});

// Navigatie voor popups
document.querySelectorAll('.popup').forEach((popup, index, popups) => {
    const prevButton = popup.querySelector('.prev');
    const nextButton = popup.querySelector('.next');

    // Bereken de vorige en volgende index
    const prevIndex = (index - 1 + popups.length) % popups.length; // Circulair terug
    const nextIndex = (index + 1) % popups.length; // Circulair vooruit

    // Pas de href van de knoppen aan
    prevButton.setAttribute('href', `#popup${prevIndex + 1}`);
    nextButton.setAttribute('href', `#popup${nextIndex + 1}`);
});

   // Vertaalde tekst
function translateToEnglish() {
        document.getElementById('titell').innerText = "Lifetime-Adaptable Living";
        document.getElementById('inleidingl').innerText = "Welcome to my project on lifetime-adaptable living! This design focuses on creating a home that is suitable for all stages of life, with a strong emphasis on functionality, comfort, and sustainability.The project is inspired by the growing demand for homes that enable older adults to live independently, even as their needs change. Below, you can view some images of my process, sketches, and technical designs.";
        document.getElementById('overpr').innerText = "About Me";        
        document.getElementById('fullscreenButton').innerText = "Full Screen";       
        document.getElementById('plat').innerText = "Floorplan";
        document.getElementById('2punt').innerText = "Two-point perspective";   
        document.getElementById('revit').innerText = "Revit";        
        document.getElementById('constr').innerText = "Roof construction detail";        
        document.getElementById('confun').innerText = "Foundation/wall construction detail";
        document.getElementById('bouwkdak').innerText = "Architectural Roof Detail";        
        document.getElementById('bouwkfun').innerText = "Architectural Foundation/wall Detail";   
        document.getElementById('instrnl').src = "Portfolio.photo/Instructions.png";
        document.getElementById('thuis').innerText = "Home";

}




    function translateToDutch() {
        document.getElementById('titell').innerText = "Levensloopbestendig wonen";
        document.getElementById('inleidingl').innerText = "Welkom bij mijn project over levensloopbestendig wonen! Dit ontwerp richt zich op het creëren van een woning die geschikt is voor alle levensfasen, met een sterke focus op functionaliteit, comfort en duurzaamheid. Het project is geïnspireerd door de groeiende vraag naar woningen die ouderen de mogelijkheid bieden om zelfstandig te blijven wonen, zelfs als hun behoeften veranderen. Bekijk hieronder enkele afbeeldingen van mijn proces, schetsen, en technische uitwerkingen.";
        document.getElementById('overpr').innerText = "Over Mij";        
        document.getElementById('fullscreenButton').innerText = "Vergroot";        
        document.getElementById('plat').innerText = "Plattegrond";
        document.getElementById('2punt').innerText = "2 puntsperspectief";   
        document.getElementById('revit').innerText = "Revit";        
        document.getElementById('constr').innerText = "Constructie dak detail";        
        document.getElementById('confun').innerText = "Constructie dak detail";
        document.getElementById('bouwkdak').innerText = "Bouwkundige dak detail";        
        document.getElementById('bouwkfun').innerText = "Bouwkundige fundering/muur detail";        
        document.getElementById('instrnl').src= "Portfolio.photo/Instructies2.png";
        document.getElementById('thuis').innerText = "Thuis";
    }
