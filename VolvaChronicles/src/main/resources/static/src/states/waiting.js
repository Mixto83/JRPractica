var waitingScene = new Phaser.Scene('waiting');
var iteraciones = 0;

waitingScene.active = true;

waitingScene.preload = function () {

}

waitingScene.create = function () {
	// Muestra el fondo
	createStaticBackground(waitingScene, 'Recompensa');
	// Reproduce la musica
	createMusic(waitingScene, 'reward');
	// Pone texto en pantalla
	createWaitingText(waitingScene);
	//Crea el websocket para emparejar con el oponente
	matchOpponent();
}

waitingScene.update = function () {
	//cuando haya 2 jugadores salta a la intro
	//Esto hay que cambiarlo
	if (idOponente === -1) {
		metodo = "getIdFromOpponent";
		var object = {
			"metodo": metodo,
			"id": idJugadorEnServer,
			"idOpponent": idOponente
		}
		connection.send(JSON.stringify(object));
	} else if (idOponente !== -1) {
		music.stop();
		waitingScene.scene.start('intro');
		waitingScene.scene.stop();
	}

}
