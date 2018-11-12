var ending1Scene = new Phaser.Scene('ending1');

ending1Scene.active = true;

ending1Scene.preload = function (){
    
}

ending1Scene.create = function (){
    //Crea el fondo, que irá haciendo scroll a medida que pasa el tiempo
    createBackground(ending1Scene,1045,540,3,'Ending1');
    //Crea las párticulas en posiciones aleatorias, que se irán desplazando
    createParticles(ending1Scene,'Ending1');
    //Reproduce la música
    createMusic(ending1Scene,'ending1');
    //Crea la caja de texto con la conversación
    createTextBox(ending1Scene,960,990.5,10,0.17,'Ending1');
    //Teclado
    //keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
}

ending1Scene.update = function(){
    //Cuando el fondo llega al final (se termina la secuencia) o se presiona Z,
    //pasa a los créditos
    if (background.x <= 855){
        nextScene(ending1Scene, 'credits');
    }
    if( keyZ.isDown) {
        keyZ.isDown = false;
        nextScene(ending1Scene, 'credits');
    };
}