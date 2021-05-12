function toggleGif() {
    const pantalla = document.getElementById('gifScreen')
    var video=document.getElementById('video');
    if (pantalla.style.visibility == "hidden") {
        pantalla.style.visibility = "visible"
    } else {
        pantalla.style.visibility = "hidden"
    }
};



function iniciar() { 
   var boton=document.getElementById('boton'); 
   boton.addEventListener('click', presionar, false); 
} 
function presionar() { 
   var video=document.getElementById('video'); 
   video.play(); 
} 

function pausar() {
    var video=document.getElementById('video'); 
    video.pause()
}

window.addEventListener('load', iniciar, false, pausar); 

// funcion de cambiar de fase !

 const cambiaFase = (destino) => {
     let arrFase = ["fase1","fase2","fase3","fase4","fase5",];

     arrFase = arrFase.filter(val =>!destino.includes(val));

     document.getElementById(destino).style.display = "block";
     for(let _fase of arrFase){
         document.getElementById(_fase).style.display = "none";
     }
 };