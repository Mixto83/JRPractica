var staticBackground;
var loadingImg;
var loadText;
var logoStudio;
var logoGame;
var fondoMenuSombra;
var botonLocal;
var botonOnline;

//crea la animación de cargando
function loadingAnimation(scene) {
    //crea fondo, texto con explicacion de pantalla completa e imagen de "cargando..."
    staticBackground = scene.add.image(960, 540, 'fondoRecompensa');
    loadText = scene.add.text(660, 740, 'Pulsa F11 y disfruta del juego en pantalla completa', { font: "30px Fantasy", fill: "#000" });
    loadingImg = scene.add.sprite(960, 540, 'loadingIcon');
    scene.anims.create({
        key: 'load',
        frames: scene.anims.generateFrameNames('loadingIcon', { prefix: 'Cargando instancia 1', start: 0, end: 7, zeroPad: 4 }),
        frameRate: 3,
        repeat: -1
    });
    loadingImg.anims.play('load', true);
}

//Muestra el fondo
function createStaticBackground(scene, id){
    staticBackground = scene.add.image(960, 540, 'fondo'+ id);
}

//Muestra los logos del juego y el estudio
function createMenuLogos(scene){
    logoStudio = scene.add.image(900, 550, 'logoStudio');
    logoGame = scene.add.image(960, 400, 'logoGame');
}

//Crea los botones y los eventos asociados a ellos
function createMenuButtons(scene) {
    //Nueva imagen de fondo
    fondoMenuSombra = scene.add.image(960, 540, 'fondoMenu2');

        //Boton "Local"
        botonLocal = scene.add.sprite(960, 650, 'botonLocal').setInteractive();
        botonLocal.on('pointerdown', function (pointer) {
            music.stop();
            scene.sound.play('menuConfirm');
            scene.time.delayedCall(2000, function () {
                scene.scene.start('intro');
                scene.scene.stop();
            }, [], scene);
        });

        //Boton "Online"
        botonOnline = scene.add.sprite(960, 800, 'botonOnline').setInteractive();
        botonLocal.on('pointerdown', function (pointer) {
            //Se implementara mas tarde
        });
}