var introScene = new Phaser.Scene('intro');

introScene.active = true;

var anyKeyPressed = false;//variable para comprobar la pulsacion

introScene.preload = function () {

}

introScene.create = function () {
    //Crea el fondo, que ira haciendo scroll a medida que pasa el tiempo
    createBackground(introScene, 1045, 540, 3, 'Intro');
    //Crea las párticulas en posiciones aleatorias, que se irán desplazando
    createParticles(introScene, 'Intro');
    //Reproduce la musica
    createMusic(introScene, 'intro');
    //Crea la caja de texto con la conversacion
    createTextBox(introScene, 960, 1000.5, 10, 0.17, 'Intro');
    //Cuando se pulse cualquier tecla, salta la cutscene
    this.input.keyboard.on('keyup', function (event) {
        anyKeyPressed = true;
    });
}

introScene.update = function () {
    //Si se pulsa una tecla
    if (anyKeyPressed) {
        anyKeyPressed = false;
        if (isOnline) {//Manda la informacion al servidor
            pressedSkip(true, idJugador, introScene);
        } else {//Salta al nivel 1
            nextScene(introScene, 'level1');
        }
    }
    //Cuando el fondo llega al final (se termina la secuencia)
    if (background.x <= 855) {
        if (isOnline) {//Manda la informacion al servidor
            background.setVelocityX(0);
            pressedSkip(true, idJugador, introScene);
        } else {//Salta al nivel 1
            nextScene(introScene, 'level1');
        }
    }

    if (isOnline) {
        //Pide la informacion al servidor
        
        //Salta de escena si han pulsado ambos
        if (skip) {
            skip = false;
            nextScene(introScene, 'level1');
        }
    }

}