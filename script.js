window.addEventListener("load", function () {

    const musica = document.getElementById("musica");
    const overlay = document.getElementById("overlay");

    // 1. Configuración del volumen (0.7 es un buen nivel)
    if (musica) {
        musica.volume = 0.7;
    }

    // 🎵 Función para intentar reproducir la música
    function iniciarMusica() {
        if (musica) {
            musica.play().then(() => {
                console.log("Música iniciada correctamente");
            }).catch(error => {
                console.log("Error al reproducir (necesita clic):", error);
            });
        }
    }

    // 👉 LÓGICA DEL CLIC INVISIBLE
    // Cuando el usuario toque cualquier parte por primera vez:
    if (overlay) {
        overlay.addEventListener("click", function () {
            
            iniciarMusica(); // 🎶 Arranca la música

            // 💨 Desaparece la capa invisible para dejar usar los botones
            overlay.style.display = "none";
            
            console.log("Capa eliminada, ya puedes usar el menú");
        });
    }

    // 👉 BOTONES DE NAVEGACIÓN (Efecto fade)
    document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", function () {
            document.body.classList.add("fade");
            // El redireccionamiento lo maneja el 'onclick' de tu HTML
        });
    });

});


// =========================
// 🌻 GIRASOLES
// =========================
function crearGirasol() {
    let flor = document.createElement("div");
    flor.classList.add("girasol");
    flor.innerHTML = "🌻";

    // Posición y estilo
    flor.style.left = Math.random() * 100 + "vw";
    flor.style.fontSize = (20 + Math.random() * 20) + "px";
    flor.style.animationDuration = (4 + Math.random() * 4) + "s";
    
    // IMPORTANTE: Para que las flores no bloqueen los clics del menú
    flor.style.position = "fixed";
    flor.style.top = "-50px";
    flor.style.pointerEvents = "none"; 
    flor.style.zIndex = "1000";

    document.body.appendChild(flor);

    setTimeout(() => flor.remove(), 8000);
}

// Genera un girasol cada 900ms
setInterval(crearGirasol, 900);


// =========================
// ⏳ CARGA + REDIRECCIÓN
// =========================
// (Este bloque solo funcionará si existe un elemento .progreso en la página)
let progreso = document.querySelector(".progreso");

if (progreso) {
    let ancho = 0;
    let intervalo = setInterval(() => {
        ancho++;
        progreso.style.width = ancho + "%";

        if (ancho >= 100) {
            clearInterval(intervalo);
            setTimeout(() => {
                window.location.href = "principal.html";
            }, 500);
        }
    }, 30);
}