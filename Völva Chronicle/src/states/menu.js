var menuScene = new Phaser.Scene('menu');

menuScene.active = true;

menuScene.preload = function (){
    
}

menuScene.create = function (){
    this.scene.start('intro');
}