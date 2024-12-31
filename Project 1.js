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
