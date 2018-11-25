var rewardScene = new Phaser.Scene('reward');

rewardScene.active = true;

rewardScene.preload = function (){
    
}

rewardScene.create = function () {
    //crea y reproduce la música de la escena
    createMusic(rewardScene,'reward');

    //Input para saltar la pantalla de Reward (Z)
    createRewardInput(rewardScene);

    //Imagen de fondo
    createStaticBackground(rewardScene,'Recompensa');

    //Decide la recompensa del ganador
    randomReward(rewardScene);
}

rewardScene.update = function(){
    if(keyZ.isDown) {
        keyZ.isDown = false;
        if(isOnline){//Manda la informacion al servidor
            pressedSkip(true, idJugador, rewardScene);
        } else {//Pasa de escena
            nextLevel(rewardScene);
        }
    }

    if(isOnline){
        //Pide la informacion al servidor
        getPressedFromOpponent();
        //Salta de escena si han pulsado ambos
        if(skip){
            skip = false;
            nextLevel(rewardScene);
        }
    }

    
}