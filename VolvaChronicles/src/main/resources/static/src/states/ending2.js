var ending2Scene = new Phaser.Scene('ending2');

ending2Scene.active = true;

ending2Scene.preload = function (){
    
}

ending2Scene.create = function (){
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
        metodo = "isSyncOpponent";
        jsonSkip = {
            "metodo": metodo,
            "id": idJugadorEnServer,
            "idOpponent": idOponente,
        }
        if (wsSkip.readyState === wsSkip.OPEN) {
            wsSkip.send(JSON.stringify(jsonSkip));
        }
    }
    //Si se pulsa una tecla
    if (keyZ.isDown) {
        keyZ.isDown = false;
        //Si estamos jugando online
        if (isOnline) {
            metodo = "updatePlayer";
            imReady = true;
            jsonSync = {
                "metodo": metodo,
                "id": idJugadorEnServer,
                "idOpponent": idOponente,
                "sync": imReady,
                "estado": 0,
                "downPulsada": false,
                "downToque": false,
                "upPulsada": false,
                "upToque": false,
                "leftPulsada": false,
                "rightPulsada": false,
                "dashPulsada": false,
                "velocidadX": 0.0,
                "velocidadY": 0.0,
                "posX": 0.0,
                "posY": 0.0,
                "contStamine": 0,
                "contSalto": 0,
                "throwRight": false,
                "throwLeft": false,
                "facingRight": true,
                "dashId": -1,
                "dashBool": false,
                "ratatosk": -1,
                "tir": false,
                "heimdall": false,
                "reward": ""
            };
            if (wsSkip.readyState === wsSkip.OPEN) {
                wsSkip.send(JSON.stringify(jsonSync));
            }
            
            //Crea la caja de comentario
            if (!cajaCreada) {
                cajaCreada = true;
                skipMessage = ending2Scene.physics.add.image(960, 60, 'skipCutscene1');
                skipMessage.setGravityY(-1200);
            }
        } else {//Si no jugamos Online
            nextScene(ending2Scene, 'credits');
        }
    }

    //Cuando el fondo llega al final (se termina la secuencia)
    if (background.x <= 855) {
        if (isOnline) {//Manda la informacion al servidor
            background.setVelocityX(0);
            imReady = true;
            jsonSync = {
                "metodo": metodo,
                "id": idJugadorEnServer,
                "idOpponent": idOponente,
                "sync": imReady,
                "estado": 0,
                "downPulsada": false,
                "downToque": false,
                "upPulsada": false,
                "upToque": false,
                "leftPulsada": false,
                "rightPulsada": false,
                "dashPulsada": false,
                "velocidadX": 0.0,
                "velocidadY": 0.0,
                "posX": 0.0,
                "posY": 0.0,
                "contStamine": 0,
                "contSalto": 0,
                "throwRight": false,
                "throwLeft": false,
                "facingRight": true,
                "dashId": -1,
                "dashBool": false,
                "ratatosk": -1,
                "tir": false,
                "heimdall": false,
                "reward": ""
            };
            if (wsSkip.readyState === wsSkip.OPEN) {
                wsSkip.send(JSON.stringify(jsonSync));
            }
        } else {//Salta al nivel 1
            nextScene(ending2Scene, 'credits');
        }
    }

    if (isOnline && isOpReady && imReady) {
        //Ambas a false y salta de escena
        imReady = false;
        isOpReady = false;
        cajaCreada = false;
        //wsSkip.close();
        nextScene(ending2Scene, 'credits');
    }
}