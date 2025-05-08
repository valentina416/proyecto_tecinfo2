document.addEventListener('DOMContentLoaded', function() {
    const carruselContenedor = document.querySelector('.carrusel-contenedor');
    const carruselTrack = document.querySelector('.carrusel-track');
    const botones = document.querySelectorAll('.carrusel-boton');
    const indicadoresContenedor = document.querySelector('.carrusel-nav');
    const imagenes = document.querySelectorAll('.carrusel-imagen');
    const indicadores = [];

    let indiceActual = 0;

    function actualizarCarrusel(indice) {
        const translateX = -indice * 100 + '%';
        carruselTrack.style.transform = `translateX(${translateX})`;
        actualizarIndicadores(indice);
    }

    function actualizarIndicadores(indice) {
        indicadores.forEach(indicador => indicador.classList.remove('actual'));
        indicadores[indice].classList.add('actual');
    }

    function crearIndicadores() {
        imagenes.forEach((_, indice) => {
            const indicador = document.createElement('button');
            indicador.classList.add('carrusel-indicador');
            indicador.dataset.indice = indice;
            indicador.addEventListener('click', (e) => {
                indiceActual = parseInt(e.target.dataset.indice);
                actualizarCarrusel(indiceActual);
            });
            indicadoresContenedor.appendChild(indicador);
            indicadores.push(indicador);
        });
        actualizarIndicadores(0); // Marca el primer indicador como activo
    }

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            if (boton.classList.contains('anterior')) {
                indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
            } else {
                indiceActual = (indiceActual + 1) % imagenes.length;
            }
            actualizarCarrusel(indiceActual);
        });
    });

    crearIndicadores();
    actualizarCarrusel(indiceActual); // Inicializa el carrusel
});