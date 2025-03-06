

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
    "Portfolio.photo/the%20warehouse%20home.jpg",
    "Portfolio.photo/the%20warehouse%20home%202.jpg",
    "Portfolio.photo/de%20pakhuis%20woning.jpg",
    "Portfolio.photo/de%20pakhuis%20woning%202.jpg",
    "Portfolio.photo/video-png.png",
    "Portfolio.photo/Image1.png",
    "Portfolio.photo/Image2.png",
    "Portfolio.photo/Image3.png",
    "Portfolio.photo/Image4.png",
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
        document.getElementById('thuis').innerText = "Home";
        document.getElementById('titell').innerText = "Warehouse home";
        document.getElementById('inleidingl').innerText = "Welcome to My Project where I have designed a residential building for the Schiemond district in Rotterdam. The design is inspired by the old warehouses that once stood in the area. The building is intended for young couples and families, featuring 40m² apartments for couples and 70m² apartments for families, including two bedrooms. On the ground floor, there will be a communal space, such as a library and play area, where residents can meet and interact. I have carefully considered factors such as sunlight, views, and an underground cable that cannot be built over. The building features a cubical shape, similar to the old warehouses, but with a modern twist. This project has taught me a lot about combining historical inspiration with contemporary architecture and creating a functional yet aesthetically appealing living environment. Below, you can explore the posters of my project, showcasing my process, sketches, and final designs.";
        document.getElementById('overpr').innerText = "About Me";        
        document.getElementById('fullscreenButton').innerText = "Full Screen";       
        document.getElementById('instrnl').src = "Portfolio.photo/Instructions.png";  
        document.getElementById('poster1').src = "Portfolio.photo/the%20warehouse%20home.jpg";
        document.getElementById('poster1.').src = "Portfolio.photo/the%20warehouse%20home.jpg";
        document.getElementById('poster2').src = "Portfolio.photo/the%20warehouse%20home%202.jpg";
        document.getElementById('poster2.').src = "Portfolio.photo/the%20warehouse%20home%202.jpg";
}




    function translateToDutch() {
        document.getElementById('thuis').innerText = "Thuis";
        document.getElementById('titell').innerText = "Pakhuis woning";
        document.getElementById('inleidingl').innerText = "Welkom bij mijn project waar ik een woningontwerp heb gemaakt voor de wijk Schiemond in Rotterdam. Het ontwerp is geïnspireerd op de oude pakhuizen die vroeger in de wijk stonden. Het gebouw is bedoeld voor jonge stellen en gezinnen. Er zijn appartementen van 40m² voor stellen en 70m² voor gezinnen, met twee slaapkamers. Op de begane grond komt een collectieve ruimte, zoals een bibliotheek en speelplek, waar bewoners elkaar kunnen ontmoeten. Ik heb rekening gehouden met de zon, het uitzicht en een ondergrondse kabel waar niet op gebouwd mag worden. Het gebouw heeft een kubische vorm, net zoals de oude pakhuizen, maar dan moderner. Dit project heeft me veel geleerd over het combineren van geschiedenis en moderne architectuur en het creëren van een leefomgeving die zowel functioneel als esthetisch aantrekkelijk is. Hieronder zijn de posters van mijn project waar je mijn proces, schetsen en uitwerkingen kunt zien." ;
        document.getElementById('overpr').innerText = "Over Mij";        
        document.getElementById('fullscreenButton').innerText = "Vergroot";   
        document.getElementById('instrnl').src= "Portfolio.photo/Instructies2.png";
        document.getElementById('poster1').src = "Portfolio.photo/de%20pakhuis%20woning.jpg";
        document.getElementById('poster1.').src = "Portfolio.photo/de%20pakhuis%20woning.jpg";
        document.getElementById('poster2').src = "Portfolio.photo/de%20pakhuis%20woning%202.jpg";
        document.getElementById('poster2.').src = "Portfolio.photo/de%20pakhuis%20woning%202.jpg";
    }
