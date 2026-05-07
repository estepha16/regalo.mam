const galeria = document.getElementById("galeria");

// 📁 CARPETA DE JHOSEP
const carpeta = "Fotos_jhosep/";

// 📸 LISTA DE FOTOS (SOLO NOMBRES)
const imagenes = [
"20250803_214921.jpg",
"B612_20260504_193330_702.jpg",
"IMG-20250817-WA0025.jpg",
"IMG-20250817-WA0084.jpg",
"IMG-20250817-WA0087.jpg",
"IMG-20250817-WA0133.jpg",
"IMG-20251207-WA0005.jpg",
"IMG-20260222-WA0016.jpg",
"20210920_163310.jpg",
"20210920_163414.jpg",
"20210920_163418.jpg",
"20220318_224607.jpg",
"20220318_224638.jpg",
"20220318_224640.jpg",
"20220625_224705.jpg",
"20220625_224714.jpg",
"20220625_224715.jpg",
"20231111_111249.jpg",
"20231111_111255.jpg",
"20231222_184142.jpg",
"20231222_184144.jpg",
"20241213_184336.jpg",
"20241213_184338.jpg",
"20241213_184345.jpg",
"20241213_184349.jpg",
"20241213_184406.jpg",
"20241213_184407.jpg",
"20241213_184408.jpg",
"20241213_184409.jpg",
"20241213_184411.jpg",
"20241213_184413.jpg",
"20241213_184414.jpg",
"20241213_184418.jpg",
"20250626_190717.jpg",
"20250626_190745.jpg",
"20250626_190752.jpg",
"20250626_190847.jpg",
"20250730_134525.jpg",
"20250730_134526.jpg"
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