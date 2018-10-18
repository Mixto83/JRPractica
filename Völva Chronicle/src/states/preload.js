var preloadScene = new Phaser.Scene('preload');

preloadScene.active = true;

preloadScene.preload = function () {
    var loadingText = this.add.text(80, 150, 'loading...');
    //assets tutorial
    this.load.image('sky1', 'assets/tutorial sprites/sky.png');
    this.load.image('sky2', 'assets/tutorial sprites/sky2.png');
    this.load.image('ground', 'assets/tutorial sprites/platform.png');
    this.load.image('star', 'assets/tutorial sprites/star.png');
    this.load.image('bomb', 'assets/tutorial sprites/bomb.png');
    this.load.spritesheet('dude', 'assets/tutorial sprites/dude.png', {
        frameWidth: 32,
        frameHeight: 48
    });
    //tiles
    this.load.tilemapCSV('map1', 'assets/platforms/Nivel1.csv');
    this.load.tilemapCSV('map2', 'assets/platforms/Nivel2.csv');
    this.load.image('tiles', 'assets/platforms/tiles/Tiles.png');
    this.load.image('background1Nivel1', 'assets/Backgrounds/Background_1_Nivel1.jpg');
    this.load.image('background2Nivel1', 'assets/Backgrounds/Background_2_Nivel1.jpg');
    this.load.image('background3Nivel1', 'assets/Backgrounds/Background_3_Nivel1.jpg');
    this.load.image('background4Nivel1', 'assets/Backgrounds/Background_4_Nivel1.jpg');
    this.load.image('background5Nivel1', 'assets/Backgrounds/Background_5_Nivel1.jpg');
    this.load.image('background6Nivel1', 'assets/Backgrounds/Background_6_Nivel1.jpg');
    this.load.image('background7Nivel1', 'assets/Backgrounds/Background_7_Nivel1.jpg');
    this.load.image('background8Nivel1', 'assets/Backgrounds/Background_8_Nivel1.jpg');
}

preloadScene.create = function () {
    this.scene.start('menu');
}
