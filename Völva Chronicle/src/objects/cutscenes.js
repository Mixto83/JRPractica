//Variables globales
var background;
var particles;
var music;
var textBox;

createBackground = function(scene, x, y, velocity, idCutscene){
     //Imagen de fondo desplazandose a la derecha
    background = scene.physics.add.image(x,y,'fondo'+idCutscene);
    background.setGravityY(-500);
    background.setVelocityX(-velocity);
}

createParticles = function(scene, x, y, velocity, idCutscene){
    particles = scene.physics.add.sprite(x,y,'particulas'+idCutscene);
    particles.setGravityY(-500);
    particles.setVelocityY(-velocity);
}

createMusic = function(scene,idCutscene){
    music = scene.sound.add(idCutscene+'Music');
    music.play();
}

createTextBox = function(scene, x, y, nFrames, fRate, idCutscene){
    var config = {
        key: 'texto'+idCutscene,
        frames: scene.anims.generateFrameNumbers('cajaTexto'+idCutscene, {
            start: 0,
            end: nFrames - 1
        }),
        repeat: 0,
        frameRate: fRate
    };
    scene.anims.create(config);
    textBox = scene.add.sprite(x,y,'cajaTexto'+idCutscene);
    textBox.anims.play('texto'+idCutscene);
}

