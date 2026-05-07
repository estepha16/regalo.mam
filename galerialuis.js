const galeria = document.getElementById("galeria");

// 📁 CARPETA DE LUIS
const carpeta = "Fotos_luis/";

// 📸 LISTA DE FOTOS (SOLO NOMBRES)
const imagenes = [
"20240802_095838.jpg",
"20240802_095839.jpg",
"20240802_095843.jpg",
"20240802_095844.jpg",
"20240802_095849.jpg",
"20240802_095852.jpg",
"20240802_105705.jpg",
"20240802_105707.jpg",
"20240802_153641.jpg",
"20240802_153644.jpg",
"20240802_153702.jpg",
"20240802_153704.jpg",
"20240802_153838.jpg",
"20240802_153843.jpg",
"20240802_154019.jpg",
"20240802_154020.jpg",
"20240802_154021.jpg",
"20241207_155752.jpg",
"20241207_155754.jpg",
"B612_20260504_143045_428.jpg",
"B612_20260504_193354_833.jpg",
"IMG-20241213-WA0031.jpg",
"IMG-20241213-WA0034.jpg",
"IMG-20250817-WA0138.jpg",
"IMG-20250818-WA0034.jpg",
"IMG-20250818-WA0038.jpg",
"IMG-20260222-WA0009.jpg",
"20220625_224729.jpg",
"20220625_224745.jpg"
];

// CREAR GALERÍA
const visor = document.getElementById("visor");
const imgGrande = document.getElementById("imgGrande");
const cerrar = document.getElementById("cerrar");

imagenes.forEach(nombre=>{
    let img = document.createElement("img");
    img.src = carpeta + nombre;

    img.onclick = ()=>{
        visor.style.display = "flex";
        imgGrande.src = img.src;
    };

    galeria.appendChild(img);
});

cerrar.onclick = ()=>{
    visor.style.display = "none";
};

visor.onclick = (e)=>{
    if(e.target === visor){
        visor.style.display = "none";
    }
};