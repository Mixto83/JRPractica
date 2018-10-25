var level3Scene = new Phaser.Scene('level3');

level3Scene.active = true;

level3Scene.preload = function () {

}

level3Scene.create = function () {
    createLevel(level3Scene, 3);
    createPlayers(level3Scene);
    createPowerups(level3Scene, 3);
    createInputs(level3Scene);
    createCameras(level3Scene);
    createEnemy(level3Scene, 3);
}

level3Scene.update = function () {
    updateControls(level3Scene, player1, player2);
    updateControls(level3Scene, player2, player1);
    updateAnimation(player1);
    updateAnimation(player2);
    moveLanzas();
}
