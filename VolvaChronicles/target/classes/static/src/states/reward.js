var rewardScene = new Phaser.Scene('reward');

rewardScene.active = true;

rewardScene.preload = function (){
    
}

rewardScene.create = function () {
    //crea y reproduce la música de la escena
    createMusic(rewardScene,'reward');

    //Input para saltar la pantalla de Reward (Z)
    createRewardInput(rewardScene);

    //Crea un número aleatorio para decidir la recompensa del ganador
    randomReward(randomNumber, runeName);

    //Imagen de fondo
    createStaticBackground(rewardScene,'Recompensa');

    //Crea el texto de enhorabuena del ganador, una imagen que representa su
    //recompensa e instrucciones para pasar al siguiente nivel
    if (player1.win) {
        if(idJugador === 1){
            getPlayerInfo(0);
        }
        createRewardText(rewardScene, 'El Águila', player1);
    } else {
        if(idJugador === 0){
            getPlayerInfo(1);
        }
        createRewardText(rewardScene, 'Nidhogg', player2);
    }
}

rewardScene.update = function(){
	
    if(keyZ.isDown) {
        keyZ.isDown = false;
        pressedSkip(true, idJugador);
    }

    getPressedFromOpponent();

    if(skip){
        skip = false;
        nextLevel(rewardScene);
    }
}