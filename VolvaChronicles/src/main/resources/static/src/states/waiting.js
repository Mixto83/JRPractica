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
	//Esto hay que cambiarlo
	iteraciones++;
	if(idOponente === -1 && iteraciones % 100 === 0){
		matchOpponent();
	} else if (idOponente !== -1){
		music.stop();
		waitingScene.scene.start('intro');
		waitingScene.scene.stop();
	}
	
}
