var waitingScene = new Phaser.Scene('waiting');
var iteraciones = 0;

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
	/*getNumberOfPlayers();
	if (numPlayersInServer % 2 === 0) {
		music.stop();
		scene.scene.start('intro');
		scene.scene.stop();
	}*/
	iteraciones++;
	if(idOponente === -1 && iteraciones % 100 === 0){
		matchOpponent();
	} else if (idOponente !== -1){
		console.log("oye que se ha hecho el else");
		/**/music.stop();
		waitingScene.scene.start('intro');
		waitingScene.scene.stop();
	}
	
}
