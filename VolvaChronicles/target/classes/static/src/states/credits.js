var creditsScene = new Phaser.Scene('credits');
var creditsImg;


creditsScene.active = true;

creditsScene.preload = function () { }

creditsScene.create = function () {
    //Se crea el objeto que guarda el sprite de la imagen de creditos finales
    creditsImg = this.add.sprite(960, 540, 'creditosFinales');
    //Se establece la animacion a realizar
    this.anims.create({
        key: 'ending',
        frames: this.anims.generateFrameNames('creditosFinales', { prefix: 'Creditos instancia 1', start: 0, end: 13, zeroPad: 4 }),
        frameRate: 0.33,
        repeat: 0
    });
    //La imagen comienza su animacion, suena la musica y a los 42 segundos se llamará a la funcion de restart
    creditsImg.anims.play('ending', true);
    createMusic(creditsScene, 'menu');
    this.time.delayedCall(42000, restartFunc, [], null, this);
}

//Para la musica y la escena, reinicia variables globales y vuelve al menu
restartFunc = function () {
    music.stop();
    levelEnded = false;
    heimdall = false;
    levelTime = 0;
    if (isOnline){
        //borra los jugadores del servidor
        deletePlayerList();
    }
    creditsScene.scene.start('menu');
    creditsScene.scene.stop();
}