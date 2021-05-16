# *Star Fox*
<img src="https://github.com/CarlosRQuinteroM/Proyecto-3-StarFox/blob/master/img/Logo.png?raw=true" width="400" >  

>In my third project, and completing **25%** in the **Geekshub** bootcamp to become a Full Stack Web Developer, we have a classic video game inspired by Star Fox from Nintendo 64 one of my favorites when I was little in the which we try to emulate battles between 2 characters selected by the player.
***
## *Languages and technologies*
* HTML5 . <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png" width="30">
* CSS.  <img src="https://3.bp.blogspot.com/-oRSUw_TmO9o/XIb61m88fcI/AAAAAAAAIq0/vnxl2zzsXEQsnHI2fH4GjKu_ZT0urRo4wCK4BGAYYCw/s1600/icon%2Bcss%2B3.png" width="30">
* GIT. <img src="https://community.chocolatey.org/content/packageimages/git.2.31.1.svg" width="30">
* JS.  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4D-YHaNfCpYArCLz6rBu_W74dCwhReXQfIy_PI6y3NSq9r6x4FRkAFQaW90pxGyVA2fU&usqp=CAU" width="30">

* Bootstrap.   <img src="https://tiposdeide.files.wordpress.com/2018/10/bootstrap-stack.png?w=768" width="30">

* Netlify.   <img src="https://camo.githubusercontent.com/c8a3dd0309eabdf69cf932a8450e2711307502a47703c54024f4678c41d497ba/68747470733a2f2f7777772e6e65746c6966792e636f6d2f696d672f70726573732f6c6f676f732f6c6f676f6d61726b2e706e67" width="30">
***
# Details
>One of the most important aspects in my opinion of this project was the class constructors, then I leave the code so that we can see them in more details.
~~~
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
~~~
>

***
## Characters
### Next we have the iconic characters of this video game.

 >Fox McCloud 
<img src="https://github.com/CarlosRQuinteroM/Proyecto-3-StarFox/blob/master/img/fox.png?raw=true" width="30">

>Slippy Toad <img src="https://static.wikia.nocookie.net/nintendo/images/a/a5/Slippy_Toad_-_Star_Fox_Zero.png/revision/latest?cb=20190623233755&path-prefix=es" width="40">

>Peppy Hare <img src="https://github.com/CarlosRQuinteroM/Proyecto-3-StarFox/blob/master/img/Peppy.png?raw=true" width="40">

>Falco Lombardi <img src="https://github.com/CarlosRQuinteroM/Proyecto-3-StarFox/blob/master/img/falco.png?raw=true" width="40">

>Panther Caroso <img src="https://github.com/CarlosRQuinteroM/Proyecto-3-StarFox/blob/master/img/panther.png?raw=true" width="40">

>Wolf O'Donnell <img src="https://github.com/CarlosRQuinteroM/Proyecto-3-StarFox/blob/master/img/wolf.png?raw=true" width="40">

***

# ***LET'S PLAY!!!***

[Click here to play Star Fox](https://goofy-mayer-5f3310.netlify.app/)

*** 
## Other projects 
 * [Here's the link to my other repositories.](https://github.com/CarlosRQuinteroM?tab=repositories)

<a href="https://github.com/CarlosRQuinteroM"  target="_blank" > <img src="https://avatars.githubusercontent.com/u/71967401?v=4" width="150" > </a>