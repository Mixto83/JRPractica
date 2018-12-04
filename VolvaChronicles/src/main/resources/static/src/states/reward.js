var rewardScene = new Phaser.Scene('reward');

rewardScene.active = true;

var wsReward;

rewardScene.preload = function () {

}

rewardScene.create = function () {
    isOpReady = false;
    if (isOnline) {
        wsReward = new WebSocket(ipConfig);

        //En caso de error
        wsReward.onerror = function (e) {
            console.log("WS error: " + e);
        }

        //Gestion de informacion recibida
        wsReward.onmessage = function (msg) {
            if (idJugador === 0 && player2.win) {
                    rewardRune = JSON.parse(msg.data).reward;
                    createRewardText(rewardScene, 'Nidhogg');
            } else if (idJugador === 1 && player1.win) {
                    rewardRune = JSON.parse(msg.data).reward;
                    createRewardText(rewardScene, 'El Águila');
            }
        }
    }


    //crea y reproduce la música de la escena
    createMusic(rewardScene, 'reward');

    //Input para saltar la pantalla de Reward (Z)
    createRewardInput(rewardScene);

    //Imagen de fondo
    createStaticBackground(rewardScene, 'Recompensa');
    if (isOnline) {
        wsReward.onopen = function () {
            randomReward(rewardScene);
        }
    } else {
        randomReward(rewardScene);
    }

}

rewardScene.update = function () {
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
                "reward": rewardRune
            };
            if (wsSkip.readyState === wsSkip.OPEN) {
                wsSkip.send(JSON.stringify(jsonSync));
            }

            //Crea la caja de comentario
            if (!cajaCreada && !caja2Creada) {
                cajaCreada = true;
                skipMessage = rewardScene.physics.add.image(960, 60, 'skipCutscene1');
                skipMessage.setGravityY(-1200);
            }
        } else {//Si no jugamos Online
            nextLevel(rewardScene);
        }
    }

    if (isOnline && isOpReady && imReady) {
        //Ambas a false y salta de escena
        imReady = false;
        isOpReady = false;
        cajaCreada = false;
        caja2Creada = false;
        //wsSkip.close();
        nextLevel(rewardScene);
    }
    //Reservado para luego
    if (isOpReady && !caja2Creada){
        console.log("isOpReady:"+isOpReady+" caja2Creada:"+caja2Creada);
        caja2Creada = true;
        skipMessage2 = rewardScene.physics.add.image(960, 60, 'skipCutscene2');
        skipMessage2.setGravityY(-1200);
    }
}