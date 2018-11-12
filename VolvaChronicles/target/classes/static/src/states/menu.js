var menuScene = new Phaser.Scene('menu');

menuScene.active = true;

menuScene.preload = function () {

}

menuScene.create = function () {
    //Muestra el fondo
    createStaticBackground(menuScene, 'Menu');
    //Muestra los logos del juego y el estudio
    createMenuLogos(menuScene);
    //Reproduce la musica del menu
    createMusic(menuScene, 'menu');
    //Tras pulsar cualquier tecla
    this.input.keyboard.on('keyup', function (event) {
        //Crea los botones y los eventos asociados a ellos
        createMenuButtons(menuScene);
    });
}