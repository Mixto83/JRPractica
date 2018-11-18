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
	var textWait = this.add.text(700, 400, '', {
		font : "50px Fantasy",
		fill : "#000"
	});
	textWait
			.setText([ 'Eres el jugador 1 y manejaras al Aguila. \nEsperando al jugador 2...' ]);
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
			waitingScene.scene.start('intro');
		}
	});
}
