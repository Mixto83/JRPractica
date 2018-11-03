var level1Scene = new Phaser.Scene('level1');

level1Scene.active = true;

level1Scene.preload = function (){
    
}

level1Scene.create = function (){
    currentLevel = 1;
    //Carga todas las imagenes de fondo, el tileset y la música del nivel 1
    createLevel(level1Scene, 1);
    //crea las animaciones de los 2 personajes jugables
    createAnimationPlayer('aguila', level1Scene);//solo nivel 1
    createAnimationPlayer('nidhogg', level1Scene);//solo nivel 1
    //crea los sprites de los personajes e inicializa todas sus propiedades
    createPlayers(level1Scene);
    //crea y coloca todos los powerups del nivel 1 en su sitio y les añade las colisiones
    createPowerups(level1Scene, 1);
    //Guarda los inputs de control de los jugadores en propiedades
    createInputs(level1Scene);
    //inicia las cámaras y las asocia a cada jugador
    createCameras(level1Scene);
    //crea las animaciones de los 2 tipos de enemigos
    createAnimationEnemy(enemyType1, level1Scene);//solo nivel 1
    createAnimationEnemy(enemyType2, level1Scene);//solo nivel 1
    //crea los enemigos y lanzas del nivel 1, los coloca en su sitio y les añade colisiones
    createEnemy(level1Scene, 1);
    //crea cronómetro que medirá el tiempo que tardan en completar el nivel
    createTimer(level1Scene);
}

level1Scene.update = function (){
    //Actualiza la velocidad y posicion de los personajes segun las teclas pulsadas
    updateControls(player1);
    updateControls(player2);
    //Pasa a la pantalla de recompensa si algun jugador  llega a la meta
    checkEndLevel(level1Scene);
    //Actualiza las animaciones de los personajes según su situación
    updateAnimation(player1);
    updateAnimation(player2);
    //Da velocidad a las lanzas de los enemigos
    moveLanzas();
    //Añade efectos a las camaras dependiendo del nivel de estamina de los jugadores
    updateCameras(player1,player2);
    //Mete los enemigos de cada grupo en un array y actualiza sus animaciones
    updateEnemies(penemies);
    updateEnemies(enemiesp);
}