var creditsScene = new Phaser.Scene('credits');
var otherScene;
var creditsImg;

creditsScene.active = true;

creditsScene.preload = function () {}

creditsScene.create = function () {
    creditsImg = this.add.sprite(960,540,'creditosFinales');

    this.anims.create({
        key: 'ending',
        frames: this.anims.generateFrameNames('creditosFinales', { prefix: 'Creditos instancia 1', start: 0, end: 13, zeroPad: 4 }),
        frameRate: 0.33,
        repeat: 0
    });
    
    creditsImg.anims.play('ending',true);
    createMusic(creditsScene,'menu');
    this.time.delayedCall(42000, restartFunc, [], null, this);
}

restartFunc = function(){
    music.stop();
    menuScene.scene.restart();
    levelEnded = false;
    heimdall = false;
    levelTime = 0;
    creditsScene.scene.start('menu');
}