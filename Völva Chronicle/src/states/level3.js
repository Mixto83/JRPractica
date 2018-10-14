var level3Scene = new Phaser.Scene('level3');

level3Scene.active = true;

level3Scene.preload = function (){
    
}

level3Scene.create = function (){
    createLevel(level3Scene, 3);
    createPlayer(level3Scene);
    createStars(level3Scene, 3);
    createExtras(level3Scene);
}

level3Scene.update = function (){
    updateControls(level3Scene);
}