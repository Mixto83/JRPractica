var level1Scene = new Phaser.Scene('level1');

level1Scene.active = true;

level1Scene.preload = function (){
    
}

level1Scene.create = function (){
    currentLevel = 1;
    createLevel(level1Scene, 1);
    createAnimationPlayer('aguila', level1Scene);
    createAnimationPlayer('nidhogg', level1Scene);
    createPlayers(level1Scene);
    createPowerups(level1Scene, 1);
    createInputs(level1Scene);
    createCameras(level1Scene);
    createAnimationEnemy(enemyType1, level1Scene);//solo nivel 1
    createAnimationEnemy(enemyType2, level1Scene);//solo nivel 1
    createEnemy(level1Scene, 1);
    createTimer(level1Scene);
}

level1Scene.update = function (){
    updateControls(level1Scene,player1,player2);
    updateControls(level1Scene,player2,player1);
    updateAnimation(player1);
    updateAnimation(player2);
    moveLanzas();
    updateCameras(player1,player2);
    updateEnemies(penemies);
    updateEnemies(enemiesp);
}