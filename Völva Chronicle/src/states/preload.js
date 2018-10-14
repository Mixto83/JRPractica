var preloadScene = new Phaser.Scene('preload');

preloadScene.active=true;

preloadScene.preload = function (){
    var loadingText = this.add.text(80, 150, 'loading...');
    //assets tutorial
    this.load.image('sky1', 'assets/tutorial sprites/sky.png');
    this.load.image('sky2', 'assets/tutorial sprites/sky2.png');
    this.load.image('ground', 'assets/tutorial sprites/platform.png');
    this.load.image('star', 'assets/tutorial sprites/star.png');
    this.load.image('bomb', 'assets/tutorial sprites/bomb.png');
    this.load.spritesheet('dude', 'assets/tutorial sprites/dude.png', { frameWidth: 32, frameHeight: 48 });
    //tiles
    this.load.tilemapCSV('map1', 'assets/platforms/Nivel1.csv');
    this.load.image('tiles', 'assets/platforms/tiles/Tiles.png');
}

preloadScene.create = function (){
    this.scene.start('menu');
}