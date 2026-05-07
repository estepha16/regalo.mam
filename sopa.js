
/* =========================
   🧩 SOPA DE LETRAS FINAL
========================= */

const tablero = document.getElementById("tablero");

const palabras = ["JHOSEP", "LUIS", "ESTEPHANI", "JULISA", "MAMA", "AMOR"];
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const filas = 10;
const columnas = 10;

let grid = [];
let seleccion = [];

/* =========================
   CREAR TABLERO
========================= */
for (let i = 0; i < filas * columnas; i++) {
    let celda = document.createElement("div");
    celda.textContent = letras[Math.floor(Math.random() * letras.length)];

    tablero.appendChild(celda);
    grid.push(celda);
}

/* =========================
   COLOCAR PALABRAS (HORIZONTAL)
========================= */
function ponerPalabra(palabra, fila) {
    let inicio = Math.floor(Math.random() * (columnas - palabra.length));

    for (let i = 0; i < palabra.length; i++) {
        let index = fila * columnas + (inicio + i);

        if (grid[index]) {
            grid[index].textContent = palabra[i];
            grid[index].dataset.palabra = palabra;
        }
    }
}

palabras.forEach((p, i) => {
    ponerPalabra(p, i);
});

/* =========================
   LISTA VISUAL
========================= */
const lista = document.querySelector(".lista-palabras");
lista.innerHTML = "";

palabras.forEach(p => {
    let div = document.createElement("div");
    div.textContent = p;
    div.id = "word-" + p;
    lista.appendChild(div);
});

/* =========================
   CLICK EN CASILLAS
========================= */
grid.forEach(celda => {
    celda.addEventListener("click", () => {
        celda.classList.toggle("found");

        seleccion.push(celda.textContent);

        verificar();
    });
});

/* =========================
   VERIFICAR PALABRAS
========================= */
function verificar() {
    let texto = seleccion.join("");

    palabras.forEach(p => {
        if (texto.includes(p)) {

            // marcar lista
            let item = document.getElementById("word-" + p);
            if (item) {
                item.classList.add("encontrada");
            }

            // marcar tablero
            grid.forEach(celda => {
                if (celda.dataset.palabra === p) {
                    celda.classList.add("found");
                }
            });

            seleccion = [];
        }
    });
}