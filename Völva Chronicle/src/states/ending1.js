var ending1Scene = new Phaser.Scene('ending1');

ending1Scene.active = true;

ending1Scene.preload = function (){
    
}

ending1Scene.nextScene = function(){
    stopCinematics();
    ending1Scene.scene.start('credits');
    ending1Scene.scene.stop();
}
ending1Scene.create = function (){
    createBackground(ending1Scene,1045,540,3,'Ending1');
    createParticles(ending1Scene,1090,3500,8,'Ending1');//Placeholder: Modificar sprite de particulas y velocidad
    createMusic(ending1Scene,'ending1');
    createTextBox(ending1Scene,960,990.5,10,0.17,'Ending1');
    //Teclado
    keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
}

ending1Scene.update = function(){
    if (background.x <= 855){
        ending1Scene.nextScene();
    }
    if( keyZ.isDown) {
        keyZ.isDown = false;
        ending1Scene.nextScene();
    };
}