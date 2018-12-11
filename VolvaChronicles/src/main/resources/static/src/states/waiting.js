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
	//Si no encuentra oponente, sigue buscando
	if (idOponente === -1) {
		metodo = "getIdFromOpponent";
		var object = {
			"metodo": metodo,
			"id": idJugadorEnServer,
			"idOpponent": idOponente
		}
		if(wsMatch.readyState === wsMatch.OPEN) {
			wsMatch.send(JSON.stringify(object));
		}
	//Cuando recibe el id del oponente, salta a la intro
	} else if (idOponente !== -1) {
		music.stop();
		waitingScene.scene.start('intro');
		waitingScene.scene.stop();
	}

}
