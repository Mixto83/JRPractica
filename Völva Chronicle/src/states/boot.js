var bootScene = new Phaser.Scene('boot');

bootScene.active = true;

bootScene.preload = function (){
    var loadingText = this.add.text(80, 150, 'boot...');
    //podemos usar boot para cargar imagenes como un fondo y barra para
    //la pantalla de carga (preload)
}

bootScene.create = function (){
    this.scene.start('preload');
}