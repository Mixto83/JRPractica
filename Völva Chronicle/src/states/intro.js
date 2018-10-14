var introScene = new Phaser.Scene('intro');

introScene.active = true;

introScene.preload = function (){
    
}

introScene.create = function (){
    this.scene.start('level1');
}