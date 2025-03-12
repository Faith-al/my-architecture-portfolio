

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
    "Portfolio.photo/The%20cameleon%20Factsheet.jpg",
    "Portfolio.photo/The%20cameleon%20Factsheet2.jpg",
    "Portfolio.photo/The%20cameleon%20Factsheet3.jpg",
    "Portfolio.photo/The%20cameleon%20Factsheet4.jpg",
    "Portfolio.photo/The%20cameleon%20Factsheet5.jpg",
    "Portfolio.photo/The%20cameleon%20Factsheet6.jpg",
    "Portfolio.photo/The%20cameleon%20Factsheet7.jpg",
    "Portfolio.photo/The%20cameleon%20Factsheet8.jpg",
    "Portfolio.photo/The%20cameleon%20Factsheet9.jpg",
    "Portfolio.photo/The%20cameleon%20Factsheet10.jpg",
    "Portfolio.photo/The%20cameleon%20Factsheet11.jpg",
    "Portfolio.photo/The%20cameleon%20Factsheet12.jpg",
    "Portfolio.photo/De%20Kameleon%20Factsheet.jpg",
    "Portfolio.photo/De%20Kameleon%20Factsheet2.jpg",
    "Portfolio.photo/De%20Kameleon%20Factsheet3.jpg",
    "Portfolio.photo/De%20Kameleon%20Factsheet4.jpg",
    "Portfolio.photo/De%20Kameleon%20Factsheet5.jpg",
    "Portfolio.photo/De%20Kameleon%20Factsheet6.jpg",
    "Portfolio.photo/De%20Kameleon%20Factsheet7.jpg",
    "Portfolio.photo/De%20Kameleon%20Factsheet8.jpg",
    "Portfolio.photo/De%20Kameleon%20Factsheet9.jpg",
    "Portfolio.photo/De%20Kameleon%20Factsheet10.jpg",
    "Portfolio.photo/De%20Kameleon%20Factsheet11.jpg",
    "Portfolio.photo/De%20Kameleon%20Factsheet12.jpg",

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
        document.getElementById('titell').innerText = "Circular Building Block";
        document.getElementById('inleidingl').innerText = "Welcome to my project where I worked on a sustainable facade for the Basisschool: de Kameleon! This design focuses on creating a sustainable and future-proof learning environment, with a strong emphasis on circularity, climate adaptation, and nature inclusivity. This project has taught me a lot about sustainable construction and the importance of nature in the city. Below is the factsheet of my project where you can see my process, sketches, and developments.";
        document.getElementById('overpr').innerText = "About Me";        
        
        document.getElementById('1').src = "Portfolio.photo/The%20cameleon%20Factsheet.jpg";
        document.getElementById('2').src = "Portfolio.photo/The%20cameleon%20Factsheet2.jpg";
        document.getElementById('3').src = "Portfolio.photo/The%20cameleon%20Factsheet3.jpg";
        document.getElementById('4').src = "Portfolio.photo/The%20cameleon%20Factsheet4.jpg";
        document.getElementById('5').src = "Portfolio.photo/The%20cameleon%20Factsheet5.jpg";
        document.getElementById('6').src = "Portfolio.photo/The%20cameleon%20Factsheet6.jpg";
        document.getElementById('7').src = "Portfolio.photo/The%20cameleon%20Factsheet7.jpg";
        document.getElementById('8').src = "Portfolio.photo/The%20cameleon%20Factsheet8.jpg";
        document.getElementById('9').src = "Portfolio.photo/The%20cameleon%20Factsheet9.jpg";
        document.getElementById('10').src = "Portfolio.photo/The%20cameleon%20Factsheet10.jpg";
        document.getElementById('11').src = "Portfolio.photo/The%20cameleon%20Factsheet11.jpg";
        document.getElementById('12').src = "Portfolio.photo/The%20cameleon%20Factsheet12.jpg";
        document.getElementById('1.').src = "Portfolio.photo/The%20cameleon%20Factsheet.jpg";
        document.getElementById('2.').src = "Portfolio.photo/The%20cameleon%20Factsheet2.jpg";
        document.getElementById('3.').src = "Portfolio.photo/The%20cameleon%20Factsheet3.jpg";
        document.getElementById('4.').src = "Portfolio.photo/The%20cameleon%20Factsheet4.jpg";
        document.getElementById('5.').src = "Portfolio.photo/The%20cameleon%20Factsheet5.jpg";
        document.getElementById('6.').src = "Portfolio.photo/The%20cameleon%20Factsheet6.jpg";
        document.getElementById('7.').src = "Portfolio.photo/The%20cameleon%20Factsheet7.jpg";
        document.getElementById('8.').src = "Portfolio.photo/The%20cameleon%20Factsheet8.jpg";
        document.getElementById('9.').src = "Portfolio.photo/The%20cameleon%20Factsheet9.jpg";
        document.getElementById('10.').src = "Portfolio.photo/The%20cameleon%20Factsheet10.jpg";
        document.getElementById('11.').src = "Portfolio.photo/The%20cameleon%20Factsheet11.jpg";
        document.getElementById('12.').src = "Portfolio.photo/The%20cameleon%20Factsheet12.jpg";
        document.getElementById('levenh4').innerText = "Lifetime-Adaptable Living";
        document.getElementById('pakhuis2').innerText = "Warehouse Home";        
        document.getElementById('circb2').innerText = "Circular Building Block"; 
}




    function translateToDutch() {
        document.getElementById('thuis').innerText = "Thuis";
        document.getElementById('titell').innerText = "Circulaire Bouwsteen";
        document.getElementById('inleidingl').innerText = "Welkom bij mijn project waar ik gewerkt heb aan een duurzame gevel voor de Basisschool: de Kameleon! Dit ontwerp richt zich op het creëren van een duurzame en toekomstbestendige leeromgeving, met een sterke focus op circulariteit, klimaatadaptatie en natuurinclusiviteit. Dit project heeft me veel geleerd over duurzaam bouwen en het belang van natuur in de stad. Hieronder zijn de factsheet van mijn project waar je mijn proces, schetsen en uitwerkingen kunt zien.";
        document.getElementById('overpr').innerText = "Over Mij";        
        document.getElementById('1').src= "Portfolio.photo/De%20Kameleon%20Factsheet.jpg";
        document.getElementById('2').src = "Portfolio.photo/De%20Kameleon%20Factsheet2.jpg";
        document.getElementById('3').src = "Portfolio.photo/De%20Kameleon%20Factsheet3.jpg";
        document.getElementById('4').src = "Portfolio.photo/De%20Kameleon%20Factsheet4.jpg";
        document.getElementById('5').src = "Portfolio.photo/De%20Kameleon%20Factsheet5.jpg";
        document.getElementById('6').src = "Portfolio.photo/De%20Kameleon%20Factsheet6.jpg";
        document.getElementById('7').src = "Portfolio.photo/De%20Kameleon%20Factsheet7.jpg";
        document.getElementById('8').src = "Portfolio.photo/De%20Kameleon%20Factsheet8.jpg";
        document.getElementById('9').src = "Portfolio.photo/De%20Kameleon%20Factsheet9.jpg";
        document.getElementById('10').src = "Portfolio.photo/De%20Kameleon%20Factsheet10.jpg";
        document.getElementById('11').src = "Portfolio.photo/De%20Kameleon%20Factsheet11.jpg";
        document.getElementById('12').src = "Portfolio.photo/De%20Kameleon%20Factsheet12.jpg"; 
        document.getElementById('1.').src= "Portfolio.photo/De%20Kameleon%20Factsheet.jpg";
        document.getElementById('2.').src = "Portfolio.photo/De%20Kameleon%20Factsheet2.jpg";
        document.getElementById('3.').src = "Portfolio.photo/De%20Kameleon%20Factsheet3.jpg";
        document.getElementById('4.').src = "Portfolio.photo/De%20Kameleon%20Factsheet4.jpg";
        document.getElementById('5.').src = "Portfolio.photo/De%20Kameleon%20Factsheet5.jpg";
        document.getElementById('6.').src = "Portfolio.photo/De%20Kameleon%20Factsheet6.jpg";
        document.getElementById('7.').src = "Portfolio.photo/De%20Kameleon%20Factsheet7.jpg";
        document.getElementById('8.').src = "Portfolio.photo/De%20Kameleon%20Factsheet8.jpg";
        document.getElementById('9.').src = "Portfolio.photo/De%20Kameleon%20Factsheet9.jpg";
        document.getElementById('10.').src = "Portfolio.photo/De%20Kameleon%20Factsheet10.jpg";
        document.getElementById('11.').src = "Portfolio.photo/De%20Kameleon%20Factsheet11.jpg";
        document.getElementById('12.').src = "Portfolio.photo/De%20Kameleon%20Factsheet12.jpg";
        document.getElementById('levenh4').innerText = "Levensloopbestendig wonen";
        document.getElementById('pakhuis2').innerText = "Pakhuis woning";        
        document.getElementById('circb2').innerText = "Circulaire bouwsteen";     
}
