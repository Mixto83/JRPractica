var level2Scene = new Phaser.Scene('level2');

level2Scene.active = true;

level2Scene.preload = function (){
    
}

level2Scene.create = function (){
    currentLevel = 2;
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
    createLevel(level2Scene, 2);
    createPlayers(level2Scene);
    createPowerups(level2Scene, 2);
    createInputs(level2Scene);
    createCameras(level2Scene);
    createEnemy(level2Scene, 2);
    createTimer(level2Scene);
}

level2Scene.update = function () {
    updateControls(level2Scene,player1,player2);
    updateControls(level2Scene,player2,player1);
    updateAnimation(player1);
    updateAnimation(player2);
    moveLanzas();
    updateCameras(player1,player2);
    updateEnemies(penemies);
    updateEnemies(enemiesp);

}
