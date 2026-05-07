const galeria = document.getElementById("galeria");

// 🔥 RUTA DE TU CARPETA (IMPORTANTE)
const carpeta = "Fotos_mama_sola/";

// LISTA DE TUS FOTOS
const imagenes = [
"20230802_161008.jpg",
"20230802_161011.jpg",
"20231222_184059.jpg",
"20231222_184122.jpg",
"20231222_184123.jpg",
"20240802_095445.jpg",
"20240802_095455.jpg",
"20240802_095458.jpg",
"20240802_095459.jpg",
"20240802_105652.jpg",
"20240802_105655.jpg",
"20240802_105829.jpg",
"20240802_105832.jpg",
"20240802_151719.jpg",
"20240802_151721.jpg",
"20240802_151725.jpg",
"20240802_151822.jpg",
"20240802_151827.jpg",
"20240802_152236.jpg",
"20240802_152240.jpg",
"20240802_152242.jpg",
"20240802_154039.jpg",
"20240802_154040.jpg",
"20240802_154041.jpg",
"20250506_150943.jpg",
"20250506_151847.jpg",
"20250506_151852.jpg",
"20250506_151922.jpg",
"20250726_133907.jpg",
"20250726_133913.jpg",
"20250730_153912.jpg",
"20250803_214632.jpg",
"B612_20240802_100223_401.jpg",
"B612_20240802_100226_037.jpg",
"B612_20240802_100237_260.jpg",
"B612_20240802_151815_161.jpg",
"B612_20241213_201307_397.jpg",
"B612_20241213_201438_663.jpg",
"B612_20241213_201446_048.jpg",
"B612_20260504_142618_556.jpg",
"B612_20260504_142633_929.jpg",
"B612_20260504_142654_420.jpg",
"B612_20260504_142712_384.jpg",
"B612_20260504_143403_171.jpg",
"B612_20260504_193314_432.jpg",
"B612_20260504_193440_818.jpg",
"IMG-20250817-WA0029.jpg",
"IMG-20250817-WA0033.jpg",
"IMG-20250817-WA0095.jpg",
"IMG-20250817-WA0099.jpg",
"IMG-20250817-WA0118.jpg",
"IMG-20250817-WA0140.jpg",
"IMG-20250817-WA0165.jpg",
"IMG-20251207-WA0014.jpg",
"IMG-20260222-WA0011.jpg",
"IMG-20260430-WA0040.jpg",
"IMG-20260430-WA0041.jpg",
"IMG-20260430-WA0043.jpg",
"IMG-20260430-WA0044.jpg"
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