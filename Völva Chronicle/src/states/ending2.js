var ending2Scene = new Phaser.Scene('ending2');

//Variables globales para el ending de Nidhögg
var cajaTexto3;
var particulas3;
var fondoNidhogg;
var music3;

ending2Scene.active = true;

ending2Scene.preload = function (){
    
}

ending2Scene.nextScene = function(){
    music.stop();
    background.setVelocityX(0);
    particles.setGravityY(-500);
    ending2Scene.scene.start('menu');
}

ending2Scene.create = function (){
    createBackground(ending2Scene,1045,540,3,'Ending2');
    createParticles(ending2Scene,1090,3500,8,'Intro');//Placeholder: Modificar sprite de particulas y velocidad
    createMusic(ending2Scene,'ending2');
    createTextBox(ending2Scene,960,1000.5,10,0.17,'Intro');//Placeholder: Escribir guion y generar sprite

    //Teclado
    this.input.keyboard.on('keyup', function(event){
        ending2Scene.nextScene();
    });
}

ending2Scene.update = function (){
    if (background.x <= 855){
        ending2Scene.nextScene();
    }
}