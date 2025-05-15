

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
    "Portfolio.photo/Instructies2.png",
    "Portfolio.photo/Instructions.png",
    "Portfolio.photo/Skihut1nl.jpg",
    "Portfolio.photo/Skihut2nl.jpg",
    "Portfolio.photo/Skihut1eng.jpg",
    "Portfolio.photo/Skihut2eng.jpg",
    "Portfolio.photo/Image16.png",
    "Portfolio.photo/Image21.png",
    "Portfolio.photo/Image11.png",
    "Portfolio.photo/Image12.png",
    "Portfolio.photo/Image9.png",
    "Portfolio.photo/Image7.png",
    "Portfolio.photo/Image8.png",
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
        document.getElementById('inleidingl').innerText = "This project revolves around the design of a ski station on the ski slope in Winterberg, Germany: a place where skiers can take a break, warm up and enjoy their surroundings. The design focuses on sustainability, comfort and experience, with a strong relationship to the local architecture and landscape. We combine traditional elements, such as the use of wood and a recognizable building style, with modern technologies such as solar panels, wind turbines and a biodigester. This mix not only creates a warm, inviting atmosphere that matches the image of the region, but also makes the building energy efficient and partly self-sufficient. See below some images of my process, sketches, and technical elaborations.";
        document.getElementById('thuis').innerText = "Home";
        document.getElementById('overpr').innerText = "About Me";    
        document.getElementById('levenh4').innerText = "Lifetime-Adaptable Living";
        document.getElementById('pakhuis2').innerText = "Warehouse Home";        
        document.getElementById('circb2').innerText = "Circular Building Block"; 
        document.getElementById('skipiste2').innerText = "Mountain ski station";    
        document.getElementById('fullscreenButton').innerText = "Full Screen";       
        document.getElementById('instrnl').src = "Portfolio.photo/Instructions.png";
        document.getElementById('1').src = "Portfolio.photo/Skihut1eng.jpg";
        document.getElementById('2').src = "Portfolio.photo/Skihut2eng.jpg";
}




    function translateToDutch() {
        document.getElementById('titell').innerText = "Tussenstation skipiste";
        document.getElementById('inleidingl').innerText = "Dit project draait om het ontwerpen van een tussenstation op de skipiste in Winterberg, Duitsland: een plek waar skiërs kunnen pauzeren, opwarmen en genieten van hun omgeving. Het ontwerp legt de focus op duurzaamheid, comfort en beleving, met een sterke relatie tot de lokale architectuur en het landschap. We combineren traditionele elementen, zoals het gebruik van hout en een herkenbare bouwstijl, met moderne technologieën zoals zonnepanelen, windturbines en een biovergister. Deze mix zorgt niet alleen voor een warme, uitnodigende sfeer die aansluit bij de uitstraling van de regio, maar maakt het gebouw ook energiezuinig en deels zelfvoorzienend. Bekijk hieronder enkele afbeeldingen van mijn proces, schetsen, en technische uitwerkingen.";
        document.getElementById('thuis').innerText = "Thuis";
        document.getElementById('overpr').innerText = "Over Mij"; 
        document.getElementById('levenh4').innerText = "Levensloopbestendig wonen";
        document.getElementById('pakhuis2').innerText = "Pakhuis woning";        
        document.getElementById('circb2').innerText = "Circulaire bouwsteen";
        document.getElementById('skipiste2').innerText = "Tussenstation skipiste"; 
        document.getElementById('fullscreenButton').innerText = "Vergroot";       
        document.getElementById('instrnl').src= "Portfolio.photo/Instructies2.png";
        document.getElementById('1').src = "Portfolio.photo/Skihut1nl.jpg";
        document.getElementById('2').src = "Portfolio.photo/Skihut2nl.jpg";
        document.getElementById('').innerText = "";

    }
