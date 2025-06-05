document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const infographicTitle = document.getElementById('infographic-title');
    const infographicContent = document.getElementById('infographic-content');

    const infographicData = {
        europa: {
            title: 'Educación en Europa 🇪🇺',
            content: `
                <h3>Excelencia Académica y Diversidad</h3>
                <p>En Europa, la educación de bachillerato se caracteriza por su alta calidad y diversidad de sistemas educativos. Países como Finlandia, Alemania y Suiza son conocidos por sus enfoques innovadores y resultados excepcionales.</p>
                <div class="infographic-detail">
                    <strong>Finlandia:</strong> Énfasis en la igualdad, profesores altamente calificados, y pocas pruebas estandarizadas. Ambiente de aprendizaje relajado pero efectivo.
                </div>
                <div class="infographic-detail">
                    <strong>Alemania:</strong> Diferenciación temprana de vías educativas (Gymnasium, Realschule, Hauptschule) con un fuerte enfoque en habilidades vocacionales y académicas.
                </div>
                <div class="infographic-detail">
                    <strong>Suiza:</strong> Bilingüismo/multilingüismo, currículos rigurosos y una fuerte inversión en investigación y desarrollo en las escuelas.
                </div>
                <p>La movilidad estudiantil y programas como Erasmus+ enriquecen la experiencia de bachillerato.</p>
            `
        },
        norteamerica: {
            title: 'Educación en Norteamérica 🇺🇸🇨🇦',
            content: `
                <h3>Flexibilidad y Oportunidades</h3>
                <p>En Norteamérica, especialmente en Estados Unidos y Canadá, la educación de bachillerato ofrece una amplia gama de cursos y actividades extracurriculares que preparan a los estudiantes para la universidad y el mercado laboral.</p>
                <div class="infographic-detail">
                    <strong>Estados Unidos:</strong> Bachillerato flexible con opciones AP (Advanced Placement) y IB (International Baccalaureate) para créditos universitarios. Gran enfoque en la participación estudiantil.
                </div>
                <div class="infographic-detail">
                    <strong>Canadá:</strong> Sistemas provinciales de alta calidad, con énfasis en el pensamiento crítico, la resolución de problemas y la inclusión. Diversidad cultural en el aula.
                </div>
                <p>Ambos países valoran la autonomía del estudiante y la preparación para la vida universitaria.</p>
            `
        },
        asia: {
            title: 'Educación en Asia 🌏',
            content: `
                <h3>Disciplina y Rendimiento Riguroso</h3>
                <p>Muchos países asiáticos, como Singapur, Corea del Sur y Japón, son reconocidos por sus sistemas educativos de bachillerato altamente competitivos y por los resultados excepcionales de sus estudiantes en pruebas internacionales.</p>
                <div class="infographic-detail">
                    <strong>Singapur:</strong> Currículo riguroso centrado en matemáticas y ciencias, con énfasis en el pensamiento crítico y la innovación.
                </div>
                <div class="infographic-detail">
                    <strong>Corea del Sur:</strong> Horas de estudio extensas, fuerte presión académica y enfoque en la memorización y la preparación para exámenes de ingreso a la universidad.
                </div>
                <div class="infographic-detail">
                    <strong>Japón:</strong> Equilibrio entre la disciplina académica y el desarrollo integral, con un fuerte sentido de comunidad y respeto en las escuelas.
                </div>
                <p>La cultura del esfuerzo y la excelencia son pilares fundamentales.</p>
            `
        },
        latinoamerica: {
            title: 'Educación en Latinoamérica 🇧🇷🇲🇽🇦🇷',
            content: `
                <h3>Desafíos y Avances Hacia la Calidad</h3>
                <p>Latinoamérica enfrenta diversos desafíos en la educación de bachillerato, pero varios países están implementando reformas significativas para mejorar la calidad, el acceso y la equidad.</p>
                <div class="infographic-detail">
                    <strong>Chile:</strong> Reformas educativas enfocadas en la equidad y el fortalecimiento de la educación pública.
                </div>
                <div class="infographic-detail">
                    <strong>México:</strong> Programas para reducir el abandono escolar y mejorar los planes de estudio, con énfasis en habilidades para el siglo XXI.
                </div>
                <div class="infographic-detail">
                    <strong>Uruguay:</strong> Destaca por su inversión en tecnología educativa (Plan Ceibal) y la inclusión digital desde temprana edad.
                </div>
                <p>La región busca consolidar sistemas educativos que impulsen el desarrollo social y económico.</p>
            `
        },
        africa: {
            title: 'Educación en África 🌍',
            content: `
                <h3>Crecimiento y Oportunidades Emergentes</h3>
                <p>A pesar de los desafíos estructurales, muchos países africanos están logrando avances significativos en la expansión y mejora de la calidad de la educación de bachillerato, con un enfoque en la inclusión y la relevancia local.</p>
                <div class="infographic-detail">
                    <strong>Sudáfrica:</strong> Sistema en evolución con esfuerzos para mejorar la calidad en escuelas desfavorecidas y programas de apoyo a estudiantes.
                </div>
                <div class="infographic-detail">
                    <strong>Kenia:</strong> Enfoque en la ciencia, tecnología, ingeniería y matemáticas (STEM), con un crecimiento notable en la tasa de matriculación.
                </div>
                <div class="infographic-detail">
                    <strong>Ruanda:</strong> Destaca por su inversión en educación y la introducción de programas innovadores para mejorar los resultados de aprendizaje.
                </div>
                <p>La educación es vista como una herramienta clave para el desarrollo sostenible del continente.</p>
            `
        },
        oceania: {
            title: 'Educación en Oceanía 🇦🇺🇳🇿',
            content: `
                <h3>Innovación y Adaptabilidad</h3>
                <p>Australia y Nueva Zelanda ofrecen sistemas de bachillerato de alta calidad, reconocidos por su enfoque en la innovación pedagógica, el pensamiento crítico y la preparación para un mundo globalizado.</p>
                <div class="infographic-detail">
                    <strong>Australia:</strong> Diversidad de currículos estatales y territoriales, con fuerte énfasis en habilidades prácticas y programas vocacionales junto a la preparación universitaria.
                </div>
                <div class="infographic-detail">
                    <strong>Nueva Zelanda:</strong> Sistema basado en el NCEA (National Certificate of Educational Achievement) que permite flexibilidad y reconoce una amplia gama de logros estudiantiles, incluyendo habilidades interculturales.
                </div>
                <p>Ambos países valoran la educación al aire libre y el aprendizaje experiencial.</p>
            `
        }
    };

    // Función para actualizar la infografía
    const updateInfographic = (region) => {
        const data = infographicData[region];
        if (data) {
            infographicTitle.textContent = data.title;
            infographicContent.classList.remove('fade-in'); // Reinicia la animación
            void infographicContent.offsetWidth; // Truco para forzar el reflow y reiniciar la animación
            infographicContent.innerHTML = data.content;
            infographicContent.classList.add('fade-in'); // Añade la clase para la animación
        } else {
            infographicTitle.textContent = 'Región no disponible';
            infographicContent.innerHTML = '<p>Lo sentimos, no hay información detallada para esta región aún. Por favor, selecciona otra.</p>';
            infographicContent.classList.add('fade-in');
        }

        // Remover clase 'active' de todos los botones
        navButtons.forEach(button => {
            button.classList.remove('active');
        });
        // Añadir clase 'active' al botón clickeado
        document.querySelector(`[data-region="${region}"]`).classList.add('active');
    };

    // Event Listeners para los botones de navegación
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const region = button.dataset.region;
            updateInfographic(region);
        });
    });

    // Cargar contenido inicial (opcional, podrías dejarlo en blanco o mostrar una bienvenida)
    // updateInfographic('europa'); // Descomentar para cargar Europa al inicio
});
