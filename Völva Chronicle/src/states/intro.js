var introScene = new Phaser.Scene('intro');

introScene.active = true;

introScene.preload = function (){
    
}

introScene.nextScene = function(){
    stopCinematics();
    introScene.scene.start('level1');
    introScene.scene.stop();
}

introScene.create = function (){
    createBackground(introScene,1045,540,3,'Intro');
    createParticles(introScene,1090,3500,8,'Intro');//Placeholder: Modificar sprite de particulas y velocidad
    createMusic(introScene,'intro');
    createTextBox(introScene,960,1000.5,10,0.17,'Intro');
    //Teclado
    this.input.keyboard.on('keyup', function(event){
        introScene.nextScene();
    });
}

introScene.update = function (){
    if (background.x <= 855){
        introScene.nextScene();
    }
}