document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.contenedor-imagenes img');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            // Acción al hacer clic en la imagen. Puedes personalizar esto.
            alert(`¡Hiciste clic en la imagen con el alt "${this.alt}"!`);
            // Otra opción podría ser abrir la imagen en un modal o realizar otra acción.
        });
    });
});