var menuScene = new Phaser.Scene('menu');

menuScene.active = true;

var isOnline;//Variable que permite al juego distinguir entre local y online

menuScene.preload = function () {

}

menuScene.create = function () {
    isOnline = false;
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