var ending2Scene = new Phaser.Scene('ending2');

ending2Scene.active = true;

ending2Scene.preload = function (){
    
}

ending2Scene.create = function (){
    if (isOnline) {
        wsSkip = new WebSocket('ws://127.0.0.1:8080/vc');
        //En caso de error
        wsSkip.onerror = function (e) {
            console.log("WS error: " + e);
        }

        //Gestion de informacion recibida
        wsSkip.onmessage = function (msg) {
            auxJson = JSON.parse(msg.data);
            isOpReady = auxJson.isReady;
        }
    }
    //Crea el fondo, que irá haciendo scroll a medida que pasa el tiempo
    createBackground(ending2Scene,1045,540,3,'Ending2');
    //Crea las párticulas en posiciones aleatorias, que se irán desplazando
    createParticles(ending2Scene,'Ending2');
    //Reproduce la música
    createMusic(ending2Scene,'ending2');
    //Crea la caja de texto con la conversación
    createTextBox(ending2Scene,960,1000.5,10,0.17,'Ending2');
    //Inicializa la variable de control de teclado
    keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
}

ending2Scene.update = function (){
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
            pressedSkip(ending2Scene);
        } else {//Si no jugamos Online
            nextScene(ending2Scene, 'credits');
        }
    }

    //Cuando el fondo llega al final (se termina la secuencia)
    if (background.x <= 855) {
        background.setVelocityX(0);
        if (isOnline) {//Manda la informacion al servidor
            pressedSkip(ending2Scene);
        } else {//Salta al nivel 1
            nextScene(ending2Scene, 'credits');
        }
    }

    if (isOnline && isOpReady && imReady) {
        skipScene(ending2Scene, 'credits');
    }
}