function toggleGif() {
    const pantalla = document.getElementById('gifScreen')
    if (pantalla.style.visibility == "hidden") {
        pantalla.style.visibility = "visible"
    } else {
        pantalla.style.visibility = "hidden"
    }
}

function iniciar() { 
   var boton=document.getElementById('boton'); 
   boton.addEventListener('click', presionar, false); 
} 
function presionar() { 
   var video=document.getElementById('video'); 
   video.play(); 
} 
window.addEventListener('load', iniciar, false); 