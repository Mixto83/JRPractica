var staticBackground;
var loadingImg;
var loadText;

//crea la animación de cargando
function loadingAnimation(scene){
    //crea fondo, texto con explicacion de pantalla completa e imagen de "cargando..."
    staticBackground =  scene.add.image(960,540, 'fondoRecompensa');
    loadText = scene.add.text(660, 740, 'Pulsa F11 y disfruta del juego en pantalla completa', {font: "30px Fantasy", fill: "#000"});
    loadingImg = scene.add.sprite(960,540,'loadingIcon');
    scene.anims.create({
        key: 'load',
        frames: scene.anims.generateFrameNames('loadingIcon', { prefix: 'Cargando instancia 1', start: 0, end: 7, zeroPad: 4 }),
        frameRate: 3,
        repeat: -1
    });
    loadingImg.anims.play('load',true);
}