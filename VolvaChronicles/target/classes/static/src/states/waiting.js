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
	$.ajax({
		method : "GET",
		url : 'http://localhost:8080/players',
		processData : false,
		headers : {
			"Content-Type" : "application/json"
		}
	}).done(function(players) {
		console.log("Numero actual de jugadores: " + JSON.stringify(players));
		// Jugador 1
		if (players === 2) {
			music.stop();
			waitingScene.scene.start('intro');
			waitingScene.scene.stop();		
		}
	});
}
