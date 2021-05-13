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
let team2 = [];

let p1 = "";
let p2 = "";




 const cambiaFase = (destino) => {

     if (destino == 'fase2') {
         pausar()
     }
     

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

            if (team2.length == 3) {
                console.log("ESTE ES EL TEAM1 ", team1);
                console.log("ESTE ES EL TEAM2 ", team2);

                llenaEquipos();
                cambiaFase("fase3");

                setTimeout(() => {
                    fighting();
                    cambiaFase("fase4");
                }, 5000);

               
            }
        }
        document.getElementById(peleadores).onclick = "";
        document.getElementById(peleadores).className = "seleccionado";

    }

    
 }


 const llenaEquipos = () => {
    let equipos = document.getElementById("equipos");

    equipos.innerHTML = `
    <div class="teamCharacters">
    <div><img class="picFighter" src="img/${team1[0].nombre}.png" alt="luchador1"></div>
    <div><img class="picFighter" src="img/${team1[1].nombre}.png" alt="luchador4"></div>
    <div><img class="picFighter" src="img/${team1[2].nombre}.png" alt="luchador6"></div>
</div>

    <div class="navePanel" onclick="cambiaFase('fase4')" ><img class="fotoNave" src="img/naveEspacial.png" alt="nave">
    <h1 id="tituloNave"  style="color: rgb(255, 255, 255);left: 30em; display: flex; position: absolute;
    top: 10em; font-size: 3em;">Click on the ship to  fase3 continue.</h1></div>


<div class="teamCharacters">
     <div><img class="picFighter" src="img/${team2[0].nombre}.png" alt="luchador3"></div>
     <div><img class="picFighter" src="img/${team2[1].nombre}.png" alt="luchador2"></div>
     <div><img class="picFighter" src="img/${team2[2].nombre}.png" alt="luchador5"></div>
 </div>
    `;
};

const startFight = (round) => {
    p1 = team1[round];
    p2 = team2[round];
 
    let versus1 = document.getElementById("round" + round);
         versus1.innerHTML=`
         <div class="teamCharacters">
         <div><img class="picFighter" src="img/${p1.nombre}.png" alt="luchador1"></div>
         </div>
         <div class="navePanel" onclick="fighting(${round})" ><img class="fotoNave" src="img/naveEspacial.png" alt="nave"></div>
         </div>
         <div class="teamCharacters">
           <div><img class="picFighter" src="img/${p2.nombre}.png" alt="luchador3"></div>
         </div>
         `;
}

const fighting = (round) => {
    p1 = team1[round];
    p2 = team2[round];

    p1.hit(p2);
    p2.hit(p1);

    console.log(`Player one life ${p1.vida} and player two life ${p2.vida}`)
    
    if(p1.vida <= 0 || p2.vida <= 0) {
        let victor

        p1.vida > p2.vida ? victor = p1 : victor = p2
           console.log("AND THE WINNER IS ", victor.nombre);
            const versus1 = document.getElementById("round" + round)
           versus1.innerHTML = `
           <div class="teamCharacters">
               <div class="containerWinner" id="winnerName">You Win!</div>
               <div><img class="winner" src="${victor.foto}" alt="luchador2"></div>
           </div>
           `
       }
}
