var level3Scene = new Phaser.Scene('level3');

level3Scene.active = true;

level3Scene.preload = function (){
    
}

level3Scene.create = function (){
    currentLevel = 3;
    if (player1.win) {
        if (randomNumber === 1) {
            player1.hermodr = true;
        } else if (randomNumber === 2) {
            player1.njord = true;
        } else if (randomNumber === 3) {
            player1.skadi = true;
        } else if (randomNumber === 4) {
            player1.tir = true;
        } else {
            player1.bragi = true;
        }
    } else {
        if (randomNumber === 1) {
            player2.hermodr = true;
        } else if (randomNumber === 2) {
            player2.njord = true;
        } else if (randomNumber === 3) {
            player2.skadi = true;
        } else if (randomNumber === 4) {
            player2.tir = true;
        } else {
            player2.bragi = true;
        }
    } 
    createLevel(level3Scene, 3);
    createPlayers(level3Scene);
    createPowerups(level3Scene, 3);
    createInputs(level3Scene);
    createCameras(level3Scene);
    createEnemy(level3Scene, 3);
    createTimer(level3Scene);
}

level3Scene.update = function () {
    updateControls(level3Scene,player1,player2);
    updateControls(level3Scene,player2,player1);
    updateAnimation(player1);
    updateAnimation(player2);
    moveLanzas();
    updateCameras(player1,player2);
    updateEnemies(penemies);
    updateEnemies(enemiesp);
}
