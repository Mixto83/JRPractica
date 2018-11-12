//Variables globales
var background;
var particles;
var music;
var textBox;
var randomX = 0;
var randomY = 0;
createBackground = function(scene, x, y, velocity, idCutscene){
    //Imagen de fondo desplazandose a la derecha
    background = scene.physics.add.image(x,y,'fondo'+idCutscene);
    background.setGravityY(-1200);
    background.setVelocityX(-velocity);
}

doRandom = function(){
    randomX = Phaser.Math.Between(0,1080);
    randomY = Phaser.Math.Between(1100,20000);

    
}
createParticles = function(scene, x, y, velocity, idCutscene){
    particles = [];
    for (var i = 0; i < 100; i++){
            doRandom();
            particles[i] = scene.physics.add.sprite(randomX,randomY,'particula'+idCutscene);
        
        particles[i].setGravityY(-1200);
        particles[i].setVelocityY(-45);
    }
}

createMusic = function(scene,idCutscene){
    music = scene.sound.add(idCutscene+'Music');
    if (idCutscene === 'ending2'){
        music.setVolume(0.2);
    } else{
        music.setVolume(0.4);
    }
    music.setLoop(true);
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

stopCinematics = function(){
    music.stop();
    background.setVelocityX(0);
    for (var i = 0; i < 100; i++){
        particles[i].setVelocityY(0);
    }
}