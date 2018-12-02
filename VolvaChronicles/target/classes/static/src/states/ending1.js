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
    //Inicializa la variable de control de teclado
    keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
}

ending1Scene.update = function(){
    if (keyZ.isDown){
        keyZ.isDown = false;
        if (isOnline){//Manda la informacion al servidor
            pressedSkip(true, idJugador, ending1Scene);
        }else{//Salta a los creditos
            nextScene(ending1Scene,'credits');
        }
    }
    //Cuando el fondo llega al final (se termina la secuencia)
    if (background.x <= 855){
        if (isOnline){//Manda la informacion al servidor
            background.setVelocityX(0);
            pressedSkip(true, idJugador, ending1Scene);
        }else{//Salta a los creditos
            nextScene(ending1Scene, 'credits');
        }
    }

    if(isOnline){
        //Pide la informacion al servidor
        
        if(skip){//Salta de escena si han pulsado ambos
            skip = false;
            nextScene(ending1Scene,'credits');
        }
    }
}