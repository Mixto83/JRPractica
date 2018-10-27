var ending2Scene = new Phaser.Scene('ending2');

ending2Scene.active = true;

ending2Scene.preload = function (){
    
}

ending2Scene.nextScene = function(){
    stopCinematics();
    ending2Scene.scene.start('menu');
}

ending2Scene.create = function (){
    createBackground(ending2Scene,1045,540,3,'Ending2');
    createParticles(ending2Scene,1090,3500,8,'Ending2');
    createMusic(ending2Scene,'ending2');
    createTextBox(ending2Scene,960,1000.5,10,0.17,'Ending2');

    //Teclado
    keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
}

ending2Scene.update = function (){
    if (background.x <= 855){
        ending2Scene.nextScene();
    }
    if( keyZ.isDown) {
        keyZ.isDown = false;
        ending2Scene.nextScene();
    };
}