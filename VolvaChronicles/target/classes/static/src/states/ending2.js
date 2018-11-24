var ending2Scene = new Phaser.Scene('ending2');

ending2Scene.active = true;

ending2Scene.preload = function (){
    
}

ending2Scene.create = function (){
    //Crea el fondo, que irá haciendo scroll a medida que pasa el tiempo
    createBackground(ending2Scene,1045,540,3,'Ending2');
    //Crea las párticulas en posiciones aleatorias, que se irán desplazando
    createParticles(ending2Scene,'Ending2');
    //Reproduce la música
    createMusic(ending2Scene,'ending2');
    //Crea la caja de texto con la conversación
    createTextBox(ending2Scene,960,1000.5,10,0.17,'Ending2');

    //Teclado
    keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
}

ending2Scene.update = function (){
    //Cuando el fondo llega al final (se termina la secuencia) o se presiona Z,
    //pasa a los créditos
    if (keyZ.isDown){
        keyZ.isDown = false;
        if (isOnline){
            pressedSkip(true, idJugador);
        }else{
            nextScene(ending2Scene,'credits');
        }
        
    }
    if (background.x <= 855){
        if (isOnline){
            pressedSkip(true, idJugador);
        }else{
            nextScene(ending2Scene, 'credits');
        }
    }

    if(isOnline){
        getPressedFromOpponent();

        if(skip){
            skip = false;
            nextScene(ending2Scene,'credits');
        }
    }
}