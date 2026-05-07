const galeria = document.getElementById("galeria");

// 📁 CARPETA DE ESTEPHANI
const carpeta = "Fotos_tefi/";

// 📸 LISTA DE FOTOS (SOLO NOMBRES)
const imagenes = [
"20220625_224142.jpg",
"20220625_224145.jpg",
"1759183778714.jpg",
"B612_20260504_142834_501.jpg",
"B612_20260504_143434_134.jpg",
"B612_20260504_143855_798.jpg",
"B612_20260504_193417_712.jpg",
"IMG-20241213-WA0027.jpg",
"IMG-20241213-WA0028.jpg",
"IMG-20250804-WA0019.jpg",
"IMG-20250804-WA0021.jpg",
"IMG-20250804-WA0022.jpg",
"IMG-20250817-WA0132.jpg",
"IMG-20250818-WA0106.jpg",
"IMG-20260222-WA0003.jpg",
"IMG-20260430-WA0031.jpg",
"IMG-20260430-WA0032.jpg",
"IMG-20260430-WA0033.jpg",
"IMG-20260430-WA0034.jpg",
"IMG-20260430-WA0035.jpg",
"IMG-20260430-WA0036.jpg",
"IMG-20260430-WA0037.jpg",
"IMG-20260430-WA0038.jpg",
"IMG-20260430-WA0042.jpg",
"IMG-20260430-WA0050.jpg",
"IMG-20260430-WA0078.jpg",
"IMG-20260430-WA0084.jpg",
"IMG-20260430-WA0104.jpg",
"IMG-20260430-WA0106.jpg"
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