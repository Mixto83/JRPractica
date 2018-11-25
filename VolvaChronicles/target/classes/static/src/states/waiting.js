var waitingScene = new Phaser.Scene('waiting');

waitingScene.active = true;

waitingScene.preload = function() {

}

waitingScene.create = function() {
	// Muestra el fondo
	createStaticBackground(waitingScene, 'Recompensa');
	// Reproduce la musica
	createMusic(waitingScene, 'reward');
	// Pone texto en pantalla
	createWaitingText(waitingScene);
}

waitingScene.update = function() {
	//cuando haya 2 jugadores salta a la intro
	getNumberOfPlayers(waitingScene);
}
