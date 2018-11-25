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

    //Crea un número aleatorio para decidir la recompensa del ganador
    randomReward(rewardScene);
}

rewardScene.update = function(){
    
    
    if(keyZ.isDown) {
        keyZ.isDown = false;
        if(isOnline){
            pressedSkip(true, idJugador, rewardScene);
        } else {
            nextLevel(rewardScene);
        }
    }

    if(isOnline){
        getPressedFromOpponent();

        if(skip){
            skip = false;
            nextLevel(rewardScene);
        }
    }

    
}