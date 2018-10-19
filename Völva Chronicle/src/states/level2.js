var level2Scene = new Phaser.Scene('level2');

level2Scene.active = true;

level2Scene.preload = function (){
    
}

level2Scene.create = function (){
    createLevel(level2Scene, 2);
    createPlayers(level2Scene);
    createInputs(level2Scene);
    createCameras(level2Scene);
}

level2Scene.update = function (){
    updateControls(level2Scene,player1,player2);
    updateControls(level2Scene,player2,player1);
}