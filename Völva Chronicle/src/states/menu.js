var menuScene = new Phaser.Scene('menu');

var fondoMenu;
var logoStudio;
var logoGame;

menuScene.active = true;

menuScene.preload = function (){
}

menuScene.create = function (){
        //Imagen de fondo
        fondoMenu = this.add.image(960,540, 'fondoMenu');

        //Logos
        logoStudio = this.add.image(900, 550, 'logoStudio');
        logoGame = this.add.image(960, 400, 'logoGame');

        //Musica
        createMusic(menuScene,'menu');
        //Teclado
        this.input.keyboard.on('keyup', function(event){
            //TODO: Se implementaran botones
            music.stop();
            menuScene.scene.start('intro');
        });
}