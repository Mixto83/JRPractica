var introScene = new Phaser.Scene('intro');

introScene.active = true;

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
        nextScene(introScene, 'level1');
    });
}

introScene.update = function (){
    //Cuando el fondo llega al final (se termina la secuencia), pasa al nivel 1
    if (background.x <= 855){
        nextScene(introScene, 'level1');
    }
}