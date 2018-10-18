var level2Scene = new Phaser.Scene('level2');

level2Scene.active = true;

level2Scene.preload = function (){
    
}

level2Scene.create = function (){
    createLevel(level2Scene, 2);
    createPlayer(level2Scene);
    createExtras(level2Scene);
    createCameras(level2Scene);
}

level2Scene.update = function (){
    updateControls(level2Scene);
}