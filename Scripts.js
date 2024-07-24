// Menu toggle for small screens
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
});

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje, nos pondremos en contacto contigo pronto.');
    document.getElementById('contact-form').reset();
});

// Gallery item click handler
var galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(function(item) {
    item.addEventListener('click', function() {
        alert('Has seleccionado ' + item.alt);
    });
});


