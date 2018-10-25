var preloadScene = new Phaser.Scene('preload');

preloadScene.active = true;

preloadScene.preload = function () {
    
    var loadingText = this.add.text(80, 150, 'loading...');

    //assets plataforms
    this.load.tilemapCSV('map1', 'assets/platforms/Nivel1.csv');
    this.load.tilemapCSV('map2', 'assets/platforms/Nivel2.csv');
    this.load.tilemapCSV('map3', 'assets/platforms/Nivel3.csv');
    this.load.image('tiles', 'assets/platforms/tiles/Tiles.png');
    
    //Backgrounds
    this.load.image('background1Nivel1', 'assets/Backgrounds/Background_1_Nivel1.jpg');
    this.load.image('background2Nivel1', 'assets/Backgrounds/Background_2_Nivel1.jpg');
    this.load.image('background3Nivel1', 'assets/Backgrounds/Background_3_Nivel1.jpg');
    this.load.image('background4Nivel1', 'assets/Backgrounds/Background_4_Nivel1.jpg');
    this.load.image('background5Nivel1', 'assets/Backgrounds/Background_5_Nivel1.jpg');
    this.load.image('background6Nivel1', 'assets/Backgrounds/Background_6_Nivel1.jpg');
    this.load.image('background7Nivel1', 'assets/Backgrounds/Background_7_Nivel1.jpg');
    this.load.image('background8Nivel1', 'assets/Backgrounds/Background_8_Nivel1.jpg');
    
    //Elementos de las cinemáticas y del menu
    this.load.image('fondoIntro', 'assets/cutscenes/fondo_intro.png');
    this.load.image('fondoEnding1', 'assets/cutscenes/cinematica_aguila.png');
    this.load.image('fondoEnding2', 'assets/cutscenes/cinematica_nidhogg.png');
    this.load.image('particulasIntro', 'assets/cutscenes/particulasIntro.png');
    this.load.image('particulasEnding1', 'assets/cutscenes/particulasEnding1.png');
    this.load.image('particulasEnding2', 'assets/cutscenes/particulasEnding2.png');
    this.load.image('fondoMenu', 'assets/cutscenes/fondo_menu.png');
    this.load.image('fondoMenu2', 'assets/cutscenes/fondo_menu_sombra.png');
    this.load.image('botonLocal', 'assets/cutscenes/boton_local.png');
    this.load.image('botonOnline', 'assets/cutscenes/boton_online.png');
    this.load.image('logoStudio', 'assets/cutscenes/logo_Edda_games.png');
    this.load.image('logoGame', 'assets/cutscenes/logo_Volva.png');
    this.load.spritesheet('cajaTextoIntro', 'assets/cutscenes/cajaIntro.png', {
        frameWidth: 1212,
        frameHeight: 225
    });
    this.load.spritesheet('cajaTextoEnding1', 'assets/cutscenes/cajaEnding1.png',{
        frameWidth: 1212,
        frameHeight: 225
    });
    this.load.spritesheet('cajaTextoEnding2', 'assets/cutscenes/cajaEnding2.png',{
        frameWidth: 1212,
        frameHeight: 225
    });
    
    //spritesheets
    this.load.atlas('aguila','assets/spritesheets/spritesheet_aguila.png','assets/spritesheets/spritesheet_aguila.json');

    //sprites powerups
    this.load.image('ciervo', 'assets/sprites/Ciervos.png');
    this.load.image('heimdall', 'assets/sprites/Heimdall.png');
    this.load.image('ratatosk', 'assets/sprites/Ratatosk.png');
    this.load.image('bragi', 'assets/sprites/Runa_Bragi.png');
    this.load.image('hemodr', 'assets/sprites/Runa_Hemodr.png');
    this.load.image('njord', 'assets/sprites/Runa_Njord.png');
    this.load.image('skadi', 'assets/sprites/Runa_Skadi.png');
    this.load.image('tir', 'assets/sprites/Runa_Tir.png');
    
    //sprite arma
    this.load.image('lanza', 'assets/sprites/lanza_horizontal_R.png');

    //Musica y sonido
    //Rynos Theme Kevin MacLeod (incompetech.com)
    //Black Vortex Kevin MacLeod (incompetech.com) 
    //Americana Kevin MacLeod (incompetech.com)
    //Killers Kevin MacLeod (incompetech.com)
    //Licensed under Creative Commons: By Attribution 3.0
    //http://creativecommons.org/licenses/by/3.0/
    this.load.audio('menuMusic', 'assets/music/menuMusic.mp3');
    this.load.audio('introMusic', 'assets/music/introMusic.mp3');
    this.load.audio('ending1Music', 'assets/music/ending1Music.mp3');
    this.load.audio('ending2Music', 'assets/music/ending2Music.mp3');
    

}

preloadScene.create = function () {
    this.scene.start('menu');
}
