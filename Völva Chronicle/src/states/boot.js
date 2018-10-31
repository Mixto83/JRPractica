var bootScene = new Phaser.Scene('boot');

bootScene.active = true;

bootScene.preload = function (){
    //carga de assets de preload
    this.load.image('fondoRecompensa', 'assets/cutscenes/pantalla_recompensa.png');
    this.load.atlas('loadingIcon','assets/cutscenes/loading_image.png','assets/cutscenes/loading_image.json');
}

bootScene.create = function (){
    this.scene.start('preload');
}