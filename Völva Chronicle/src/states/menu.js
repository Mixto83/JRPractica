var menuScene = new Phaser.Scene('menu');

var fondoMenu;
var logoStudio;
var logoGame;
var fondoMenuSombra;
var botonLocal;
var botonOnline;

menuScene.active = true;

menuScene.preload = function () {

}

menuScene.create = function () {

        //Imagen de fondo
        fondoMenu = this.add.image(960,540, 'fondoMenu');

        //Logos
        logoStudio = this.add.image(900, 550, 'logoStudio');
        logoGame = this.add.image(960, 400, 'logoGame');

        //Musica
        createMusic(menuScene,'menu');

        //Tras pulsar cualquier tecla 
        this.input.keyboard.on('keyup', function(event){

            //Nueva imagen de fondo
            fondoMenuSombra = menuScene.add.image(960, 540, 'fondoMenu2');

            //Boton "Local"
            botonLocal = menuScene.add.sprite(960, 650, 'botonLocal').setInteractive();
            botonLocal.on('pointerdown', function (pointer) {
                music.stop();
                menuScene.scene.start('intro');
            });

            //Bot�n "Online"
            botonOnline = menuScene.add.sprite(960, 800, 'botonOnline').setInteractive();
            botonLocal.on('pointerdown', function (pointer) {
                //Se implementar� m�s tarde
            });

        });
}