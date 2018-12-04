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

introScene.preload = function () {

}

introScene.create = function () {
    if (isOnline) {
        wsSkip = new WebSocket(ipConfig);

        //En caso de error
        wsSkip.onerror = function (e) {
            console.log("WS error: " + e);
        }

        //Gestion de informacion recibida
        wsSkip.onmessage = function (msg) {
            console.log(msg.data);
            auxJson = JSON.parse(msg.data);
            isOpReady = auxJson.isReady;
        }
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
    if (anyKeyPressed) {
        anyKeyPressed = false;
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
                var skipMessage = introScene.physics.add.image(960, 60, 'skipCutscene1');
                skipMessage.setGravityY(-1200);
            }
        } else {//Si no jugamos Online
            nextScene(introScene, 'level1');
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
            nextScene(introScene, 'level1');
        }
    }

    if (isOnline && isOpReady && imReady) {
        //Ambas a false y salta de escena
        imReady = false;
        isOpReady = false;
        cajaCreada = false;
        //wsSkip.close();
        nextScene(introScene, 'level1');
    }

    //Reservado para luego
    /*if (isOpReady && !cajaOpCreada){
        cajaCreada = true;
        var skipMessage = scene.physics.add.image(960, 60, 'skipCutscene2');
        skipMessage.setGravityY(-1200);
    }*/
}


