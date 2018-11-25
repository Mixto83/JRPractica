var level2Scene = new Phaser.Scene('level2');

level2Scene.active = true;

level2Scene.preload = function () {

}

level2Scene.create = function () {
    currentLevel = 2;
    //Dependiendo del ganador del nivel anterior, recibe un powerup aleatorio
    if (player1.win) {
        chooseReward(player1);
    } else {
        chooseReward(player2);
    }
    //Carga todas las imagenes de fondo, el tileset y la música del nivel 2
    createLevel(level2Scene, 2);
    //Carga las metas 
    createGoal(level2Scene, -1725, 280);
    createGoal(level2Scene, 1825, 280);
    //crea los sprites de los personajes e inicializa todos sus atributos    
    createPlayers(level2Scene);
    //crea y coloca todos los powerups del nivel 2 en su sitio y les añade las colisiones
    createPowerups(level2Scene, 2);
    //Guarda los inputs de control de los jugadores en atributos
    createInputs(level2Scene);
    //inicia las cámaras y las asocia a cada jugador
    createCameras(level2Scene);
    //crea los enemigos y lanzas del nivel 2, los coloca en su sitio y les añade colisiones
    createEnemy(level2Scene, 2);
    //crea cronómetro que medirá el tiempo que tardan en completar el nivel
    createTimer(level2Scene);
}

level2Scene.update = function () {
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
    checkEndLevel(level2Scene);
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
        if (idJugador === 0) {
            getPlayerInfo(1);
        } else if (idJugador === 1) {
            getPlayerInfo(0);
        }
    }
}
