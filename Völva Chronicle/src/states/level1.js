var level1Scene = new Phaser.Scene('level1');

level1Scene.active = true;

level1Scene.preload = function (){
    
}

level1Scene.create = function (){
    createLevel(level1Scene, 1);
    createPlayers(level1Scene);
    createPowerups(level1Scene, 1);
    createInputs(level1Scene);
    createCameras(level1Scene);
}

level1Scene.update = function (){
    updateControls(level1Scene,player1,player2);
    updateControls(level1Scene,player2,player1);
    updateAnimation(player1);
    updateAnimation(player2);
}