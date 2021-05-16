class Peleadores{

    constructor(nombre,ataque,defensa,tecnica,velocidad, fotoUrl){
        this.vida = 800;
        this.suerte = Math.floor(Math.random() *21);
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.tecnica = tecnica;
        this.velocidad = velocidad;
        this.foto = fotoUrl
    }


    hit(enemy){
        enemy.vida -= this.ataque - (enemy.defensa * (enemy.suerte / this.velocidad));
    }

    
    specialHit(enemy){
        enemy.vida -= this.ataque + this.tecnica - (enemy.defensa * (enemy.suerte / this.velocidad));
    }
}


//Instancio luchadores
let player1 = new Peleadores("falco",40,12,5,20, "/img/falco.png");
let player2 = new Peleadores("fox",45,12,12,12, "/img/fox.png");
let player3 = new Peleadores("lylat",45,12,7,15, "/img/lylat.png");
let player4 = new Peleadores("peppy",40,12,8,18, "/img/Peppy.png");
let player5 = new Peleadores("wolf",40,8,12,18, "/img/wolf.png");
let player6 = new Peleadores("panther",40,12,8,18, "/img/panther.png");


let allPlayers = {
    "1" : player1,
    "2" : player2,
    "3" : player3,
    "4" : player4,
    "5" : player5,
    "6" : player6
};