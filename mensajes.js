function mostrarVideo(ruta){

let video = document.getElementById("visorVideo");

video.src = ruta;
video.load();
video.play();

}