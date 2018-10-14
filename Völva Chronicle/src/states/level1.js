var level1Scene = new Phaser.Scene('level1');

level1Scene.active = true;

level1Scene.preload = function (){
    
}

level1Scene.create = function (){
    createLevel(level1Scene, 1);
    createPlayer(level1Scene);
    createStars(level1Scene, 1);
    createExtras(level1Scene);
}

level1Scene.update = function (){
    updateControls(level1Scene);
}