var level3Scene = new Phaser.Scene('level3');

level3Scene.active = true;

level3Scene.preload = function () {

}

level3Scene.create = function () {
    currentLevel = 3;
    if (isOnline) {
        //Inicia el websocket para el nivel y sus eventos
        createLevelWS();
    }

    //Dependiendo del ganador del nivel anterior, recibe un powerup aleatorio
    if (level3Scene, player1.win) {
        chooseReward(level3Scene, player1, player2);
    } else {
        chooseReward(level3Scene, player2, player1);
    }
    //Carga todas las imagenes de fondo, el tileset y la música del nivel 3
    createLevel(level3Scene, 3);
    //Carga las metas 
    createGoal(level3Scene, -2770, 475);
    createGoal(level3Scene, 780, 475);
    //crea los sprites de los personajes e inicializa todos sus atributos
    createPlayers(level3Scene);
    //crea y coloca todos los powerups del nivel 3 en su sitio y les añade las colisiones
    createPowerups(level3Scene, 3);
    //Guarda los inputs de control de los jugadores en atributos
    if (!isOnline) {//En local, P1 se controla con WASD + B y P2 con las flechas + numpad0
        createInputs(level3Scene, player1, player2);
        //En online, ambos jugadores se controlan con WASD+B, al personaje no jugable se le
        //asignan las flechas por defecto pero no se actualizan sus inputs
    } else if (idJugador === 0) {
        createInputs(level3Scene, player1, player2);
    } else if (idJugador === 1) {
        createInputs(level3Scene, player2, player1);
    }
    //inicia las cámaras y las asocia a cada jugador
    createCameras(level3Scene);
    //crea los enemigos y lanzas del nivel 3, los coloca en su sitio y les añade colisiones
    createEnemy(level3Scene, 3);
    //crea cronómetro que medirá el tiempo que tardan en completar el nivel
    createTimer(level3Scene);
}

level3Scene.update = function () {
    //Actualiza las variables de los controles de los jugadores locales
    if (!isOnline) {
        updateControls(player1);
        updateControls(player2);
    } else if (idJugador === 0) {
        updateControls(player1);
    } else if (idJugador === 1) {
        updateControls(player2);
    }
    //Actualiza la velocidad y posicion de los personajes segun las teclas pulsadas
    updateMovement(player1);
    updateMovement(player2);
    //Pasa a la pantalla de recompensa si algun jugador  llega a la meta
    checkEndLevel(level3Scene);
    //Actualiza las animaciones de los personajes según su situación
    updateAnimation(player1);
    updateAnimation(player2);
    //Da velocidad a las lanzas de los enemigos
    moveLanzas();
    //Añade efectos a las camaras dependiendo del nivel de estamina de los jugadores
    updateCameras(player1, player2);
    //Mete los enemigos de cada grupo en un array y actualiza sus animaciones
    updateEnemies(penemies);
    updateEnemies(enemiesp);
    //Jugando online, pide al servidor la informacion del oponente
    if (isOnline) {
        getPlayerInfo(wsLevel, jsonLevel);
    }
}
