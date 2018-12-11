var introScene = new Phaser.Scene('intro');

introScene.active = true;

var anyKeyPressed = false;//variable para comprobar la pulsacion
var wsSkip;
var isOpReady = false;
var imReady = false;
var jsonSkip;
var jsonSync;
var auxJson;
var cajaCreada = false;
var caja2Creada = false;
var skipMessage;
var skipMessage2;
introScene.preload = function () {

}

introScene.create = function () {
    isOpReady = false;
    if (isOnline) {
        //Crea el websocket para enviar info sobre saltar cutscenes
       createSkipWS();
    }
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

    //Si es online haz la llamada
    if (isOnline) {
        //Pide la informacion al servidor del oponente
        getPressedFromOpponent();
    }
    //Si se pulsa una tecla
    if (anyKeyPressed) {
        anyKeyPressed = false;
        //Si estamos jugando online
        if (isOnline) {
           pressedSkip(introScene);
        } else {//Si no jugamos Online
            nextScene(introScene, 'level1');
        }
    }

    //Cuando el fondo llega al final (se termina la secuencia)
    if (background.x <= 855) {
        background.setVelocityX(0);
        if (isOnline) {//Manda la informacion al servidor
            pressedSkip(introScene);
        } else {//Salta al nivel 1
            nextScene(introScene, 'level1');
        }
    }

    //Salta de escena cuando ambos jugadores están listos
    if (isOnline && isOpReady && imReady) {
        skipScene(introScene, 'level1');
    }

    //Si el oponente pulsa alguna tecla, sale un mensaje
    if (isOnline && isOpReady && !caja2Creada){
        createOpponentSkipMessage(introScene);
    }
}