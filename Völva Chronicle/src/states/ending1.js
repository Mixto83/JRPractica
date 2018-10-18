var ending1Scene = new Phaser.Scene('ending1');

ending1Scene.active = true;

ending1Scene.preload = function (){
    
}

ending1Scene.nextScene = function(){
    music.stop();
    background.setVelocityX(0);
    particles.setGravityY(-500);
    ending1Scene.scene.start('menu');
}
ending1Scene.create = function (){
    createBackground(ending1Scene,1045,540,3,'Ending1');
    createParticles(ending1Scene,1090,3500,8,'Intro');//Placeholder: Modificar sprite de particulas y velocidad
    createMusic(ending1Scene,'ending1');
    createTextBox(ending1Scene,960,1000.5,10,0.17,'Intro');//Placeholder: Escribir guion y generar sprite
    //Teclado
    this.input.keyboard.on('keyup', function(event){
        ending1Scene.nextScene();
    });
}

ending1Scene.update = function(){
    if (background.x <= 855){
        ending1Scene.nextScene();
    }
}