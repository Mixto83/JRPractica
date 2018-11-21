//Variables globales
var background;
var particles;
var music;
var textBox;
var randomX = 0;
var randomY = 0;
var skip = false;

//Crea el fondo de la escena indicada, que irá haciendo scroll a medida que pasa el tiempo
createBackground = function(scene, x, y, velocity, idCutscene){
    //Imagen de fondo desplazandose a la derecha
    background = scene.physics.add.image(x,y,'fondo'+idCutscene);
    background.setGravityY(-1200);
    background.setVelocityX(-velocity);
}

//Genera una posición aleatoria para una partícula
doRandom = function(){
    randomX = Phaser.Math.Between(0,1080);
    randomY = Phaser.Math.Between(1100,20000);    
}

//Crea las párticulas en posiciones aleatorias, que se irán desplazando
createParticles = function(scene, idCutscene){
    particles = [];
    for (var i = 0; i < 100; i++){
            doRandom();
            particles[i] = scene.physics.add.sprite(randomX,randomY,'particula'+idCutscene);
        
        particles[i].setGravityY(-1200);
        particles[i].setVelocityY(-45);
    }
}

//Reproduce la música de la escena indicada
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

//Crea la caja de texto con la conversación. Le asigna la spritesheet correspondiente y crea la animación, que
//se irá reproduciendo a lo largo de la secuencia
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

//Para la escena actual y pasa a la escena indicada
function nextScene(scene, destination){
    stopCinematics();
    scene.scene.start(destination);
    scene.scene.stop();
}

//Para la música y el movimiento del fondo y partículas de la escena
stopCinematics = function(){
    music.stop();
    background.setVelocityX(0);
    for (var i = 0; i < 100; i++){
        particles[i].setVelocityY(0);
    }
}


