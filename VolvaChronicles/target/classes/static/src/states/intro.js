var introScene = new Phaser.Scene('intro');

introScene.active = true;

var anyKeyPressed = false;

introScene.preload = function (){
    
}

introScene.create = function (){
    //Crea el fondo, que irá haciendo scroll a medida que pasa el tiempo
    createBackground(introScene,1045,540,3,'Intro');
    //Crea las párticulas en posiciones aleatorias, que se irán desplazando
    createParticles(introScene,'Intro');
    //Reproduce la música
    createMusic(introScene,'intro');
    //Crea la caja de texto con la conversación
    createTextBox(introScene,960,1000.5,10,0.17,'Intro');
    //Cuando se pulse cualquier tecla, salta la cutscene
    this.input.keyboard.on('keyup', function(event){
            anyKeyPressed = true;
        //nextScene(introScene, 'level1');
        //pressedSkip(true, idJugador);
    });
}

introScene.update = function (){
    //Cuando el fondo llega al final (se termina la secuencia), pasa al nivel 1
    if (anyKeyPressed){
        anyKeyPressed = false;
        if (isOnline){
            pressedSkip(true, idJugador, introScene);
        }else{
            nextScene(introScene,'level1');
        }
        
    }
    if (background.x <= 855){
        if (isOnline){
            pressedSkip(true, idJugador, introScene);
        }else{
            nextScene(introScene, 'level1');
        }
    }

    if(isOnline){
        getPressedFromOpponent();

        if(skip){
            skip = false;
            nextScene(introScene,'level1');
        }
    }
    
}