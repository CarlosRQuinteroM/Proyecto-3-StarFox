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

let team1 = [];
let team2= [];

let p1 = "";
let p2 = "";




 const cambiaFase = (destino) => {
     let arrFase = ["fase1","fase2","fase3","fase4","fase5"];

     arrFase = arrFase.filter(val =>!destino.includes(val));

     document.getElementById(destino).style.display = "block";

       for(let _fase of arrFase){
        document.getElementById(_fase).style.display = "none";
       };
 };


 // peleadores 


 const elegirPeleadores = (peleadores) => {

    if (team2.length < 3 ) {
        
        if (team1.length < 3) {
            team1.push(allPlayers[peleadores]);

        } else {
            
            team2.push(allPlayers[peleadores]);

            if (team2.length === 3) {
                console.log("equipo1",team1);
                console.log("equipo2",team2);
                llenaEquipos();
                cambiaFase("fase3");

                setTimeout(() => {
                    cambiaFase("fase4");
                }, 5000);


                
            }
        }
        document.getElementById(peleadores).onclick = "";
        document.getElementById(peleadores).className = "seleccionado";

    }


 }