var ending1Scene = new Phaser.Scene('ending1');

ending1Scene.active = true;

ending1Scene.preload = function () {

}

ending1Scene.create = function () {
    isOpReady = false;
    if (isOnline) {
        //Crea el websocket para enviar info sobre saltar cutscenes
        createSkipWS();
    }
    //Crea el fondo, que irá haciendo scroll a medida que pasa el tiempo
    createBackground(ending1Scene, 1045, 540, 3, 'Ending1');
    //Crea las párticulas en posiciones aleatorias, que se irán desplazando
    createParticles(ending1Scene, 'Ending1');
    //Reproduce la música
    createMusic(ending1Scene, 'ending1');
    //Crea la caja de texto con la conversación
    createTextBox(ending1Scene, 960, 990.5, 10, 0.17, 'Ending1');
    //Inicializa la variable de control de teclado
    keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
}

ending1Scene.update = function () {
    //Si es online haz la llamada
    if (isOnline) {
        //Pide la informacion al servidor del oponente
        getPressedFromOpponent();
    }
    //Si se pulsa una tecla
    if (keyZ.isDown) {
        keyZ.isDown = false;
        //Si estamos jugando online
        if (isOnline) {
            pressedSkip(ending1Scene);
        } else {//Si no jugamos Online
            nextScene(ending1Scene, 'credits');
        }
    }

    //Cuando el fondo llega al final (se termina la secuencia)
    if (background.x <= 855) {
        background.setVelocityX(0);
        if (isOnline) {//Manda la informacion al servidor
            pressedSkip(ending1Scene);
        } else {//Salta al nivel 1
            nextScene(ending1Scene, 'credits');
        }
    }

    //Salta de escena cuando ambos jugadores están listos
    if (isOnline && isOpReady && imReady) {
        skipScene(ending1Scene, 'credits');
    }

    //Si el oponente pulsa alguna tecla, sale un mensaje
    if (isOnline && isOpReady && !caja2Creada){
        createOpponentSkipMessage(ending1Scene);
    }
}