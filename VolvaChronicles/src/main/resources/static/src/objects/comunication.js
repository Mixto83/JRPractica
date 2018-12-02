var metodo = "";
var idJugadorEnServer = -1;
var idOponente = -1;
var numPlayersInServer = -1;


//Pide al servidor el numero de jugadores
getNumberOfPlayers = function (scene){
	console.log("Busqueda de numero de jugadores llamada");
	
	$(document).ready(function(){
		var connection = new WebSocket('ws://127.0.0.1:8080/vc');
		
		//Envio de informacion
		connection.onopen = function(){
			metodo = "getNumPlayers";
			var object = { "metodo" : metodo,
							"id": idJugadorEnServer,
							"idOpponent": idOponente}
		    connection.send(JSON.stringify(object));
		}
		
		//En caso de error
		connection.onerror = function(e) {
			  console.log("WS error: " + e);
		}
		
		//Gestion de informacion recibida
		connection.onmessage = function(msg){
			var mes = JSON.parse(msg.data);
			numPlayersInServer = mes.size;
			console.log("Numero de jugadores: " + numPlayersInServer);
			if(scene === menuScene){
				if (numPlayersInServer % 2 === 0){
					createPlayerInServer();//Jugador Par
					idJugador = 0; //Localmente, el cliente sabe que eres el J1.
					scene.scene.start('waiting');
					scene.scene.stop();
				} else if (numPlayersInServer % 2 !== 0){
					createPlayerInServer();//Jugador Impar
					matchOpponent();
					idJugador = 1; //Localmente, el cliente sabe que eres el J2.
					scene.time.delayedCall(2000, function () {
						scene.scene.start('level1');
						scene.scene.stop();
					})				
				}
			}
		}
	})
}

//Mete al jugador al servidor
createPlayerInServer = function () {
	console.log("Insercion de jugador llamada");
	
	$(document).ready(function(){
		//Envio de informacion
		var connection = new WebSocket('ws://127.0.0.1:8080/vc');
		connection.onopen = function(){
			metodo = "addPlayer";
			var object = { "metodo" : metodo,
							"id": idJugadorEnServer,
							"idOpponent": idOponente}
		    connection.send(JSON.stringify(object));
		}
		
		//En caso de error
		connection.onerror = function(e) {
			  console.log("WS error: " + e);
		}
		
		//Gestion de informacion recibida
		connection.onmessage = function(msg){
			var mes2 = JSON.parse(msg.data);
			console.log("Todo el JSON: " + msg.data);
			idJugadorEnServer = mes2.id;
			console.log("Jugador Creado, Id: " + idJugadorEnServer);			
		}
	})
}

//Emparejamiento
matchOpponent = function(){
	$(document).ready(function(){
		var connection = new WebSocket('ws://127.0.0.1:8080/vc');
		//Envio de informacion
		connection.onopen = function(){
			metodo = "getIdFromOpponent";
			var object = { "metodo" : metodo,
						"id": idJugadorEnServer,
						"idOpponent": idOponente}
			connection.send(JSON.stringify(object));
		}
		//En caso de error
		connection.onerror = function(e) {
			  console.log("WS error: " + e);
		}
		
		//Gestion de informacion recibida
		connection.onmessage = function(msg){
			var mes = JSON.parse(msg.data);
			idOponente = mes.idOpponent;
			if (idOponente !== -1){
				//console.log("Todo el JSON: " + msg.data);
				console.log("Tu oponente es: " + idOponente);
			}
						
		}
	})
}


//APIREST
//Recogida de datos del servidor
getPlayerInfo = function (id) {
	$.ajax({
		method: "GET",
		url: 'http://localhost:8080/players/' + id,
		processData: false,
		headers: {
			"Content-Type": "application/json"
		}
	}).done(function (playerInfo) {
		//Cuando se han recogido los datos, se actualiza el jugador
		if (id === 0) {
			updatePlayerFromServer(player1, playerInfo);
		} else if (id === 1) {
			updatePlayerFromServer(player2, playerInfo);
		}
	})
}

//ESTA NO CAMBIA
//Actualizacion del estado interno del oponente en el cliente con los datos del servidor
updatePlayerFromServer = function (player, info) {
	//Solo actualiza los datos del jugador cuando la informacion recogida tiene cambios
	if (player.estado < info.estado) {
		player.estado = info.estado;
		player.downPulsada = info.downPulsada;
		player.downToque = info.downToque;
		player.upPulsada = info.upPulsada
		player.upToque = info.upToque;
		player.leftPulsada = info.leftPulsada;
		player.rightPulsada = info.rightPulsada;
		player.dashPulsada = info.dashPulsada
		player.body.velocity.x = info.velocidadX;
		player.body.velocity.y = info.velocidadY;
		player.x = info.posX;
		player.y = info.posY;
		player.contStamine = info.contStamine;
		player.contSalto = info.contSalto;
		player.throwRight = info.throwRight;
		player.throwLeft = info.throwLeft;
		player.facingRight = info.facingRight;
		player.dashId = info.dashId;
		player.dashBool = info.dashBool;
		player.ratatosk = info.ratatosk;
		player.tir = info.tir;
		player.heimdall = info.heimdall;
		player.reward = info.reward;
	}
}


//REDUNDANTE, ES IGUAL QUE MODIFYPLAYERINFO
//Inicializacion de la informacion del jugador
insertPlayer = function (player, id) {
	player.estado++;
	var playerInfo = {
		"estado": player.estado,
		"downPulsada": player.downPulsada,
		"downToque": player.downToque,
		"upPulsada": player.upPulsada,
		"upToque": player.upToque,
		"leftPulsada": player.leftPulsada,
		"rightPulsada": player.rightPulsada,
		"dashPulsada": player.dashPulsada,
		"velocidadX": player.body.velocity.x,
		"velocidadY": player.body.velocity.y,
		"posX": player.x,
		"posY": player.y,
		"contStamine": player.contStamine,
		"contSalto": player.contSalto,
		"throwRight": player.throwRight,
		"throwLeft": player.throwLeft,
		"facingRight": player.facingRight,
		"dashId": player.dashId,
		"dashBool": player.dashBool,
		"ratatosk": player.ratatosk,
		"tir": player.tir,
		"heimdall": player.heimdall,
		"reward": player.reward
	};

	$.ajax({
		method: 'PUT',
		url: 'http://localhost:8080/players/' + id,
		data: JSON.stringify(playerInfo),
		processData: false,
		headers: {
			"Content-Type": "application/json"
		}
	}).done(function (playerInfo) { })
}


//Actualizacion del servidor con la informacion del jugador cambiada
modifyPlayerInfo = function (player, id) {
	player.estado++;
	playerInfo = {
		"estado": player.estado,
		"downPulsada": player.downPulsada,
		"downToque": player.downToque,
		"upPulsada": player.upPulsada,
		"upToque": player.upToque,
		"leftPulsada": player.leftPulsada,
		"rightPulsada": player.rightPulsada,
		"dashPulsada": player.dashPulsada,
		"velocidadX": player.body.velocity.x,
		"velocidadY": player.body.velocity.y,
		"posX": player.x,
		"posY": player.y,
		"contStamine": player.contStamine,
		"contSalto": player.contSalto,
		"throwRight": player.throwRight,
		"throwLeft": player.throwLeft,
		"facingRight": player.facingRight,
		"dashId": player.dashId,
		"dashBool": player.dashBool,
		"ratatosk": player.ratatosk,
		"tir": player.tir,
		"heimdall": player.heimdall,
		"reward": player.reward
	};
	$.ajax({
		method: 'PUT',
		url: 'http://localhost:8080/players/' + id,
		data: JSON.stringify(playerInfo),
		processData: false,
		headers: {
			"Content-Type": "application/json"
		}
	}).done(function (playerInfo) { })
}

//Sube la informacion de la recompensa y resetea el resto
uploadReward = function (player, id) {
	playerInfo = {
		"estado": 0,
		"downPulsada": false,
		"downToque": false,
		"upPulsada": false,
		"upToque": false,
		"leftPulsada": false,
		"rightPulsada": false,
		"dashPulsada": false,
		"velocidadX": 0,
		"velocidadY": 0,
		"posX": 0,
		"posY": 0,
		"contStamine": 100,
		"contSalto": 0,
		"throwRight": false,
		"throwLeft": false,
		"facingRight": true,
		"dashId": 0,
		"dashBool": false,
		"ratatosk": 0,
		"tir": false,
		"heimdall": false,
		"reward": player.reward
	};
	$.ajax({
		method: 'PUT',
		url: 'http://localhost:8080/players/' + id,
		data: JSON.stringify(playerInfo),
		processData: false,
		headers: {
			"Content-Type": "application/json"
		}
	}).done(function () { })
}
//Recoge la informacion de la recompensa
getRewardFromServer = function (id, scene) {
	$.ajax({
		method: "GET",
		url: 'http://localhost:8080/players/' + id,
		processData: false,
		headers: {
			"Content-Type": "application/json"
		}
	}).done(function (playerInfo) {
		//Actualiza la informacion de la recompensa y la muestra por pantalla
		if (id === 0) {
			updateRewardFromServer(player1, playerInfo);
			createRewardText(scene, 'El Águila', player1);
		} else if (id === 1) {
			updateRewardFromServer(player2, playerInfo);
			createRewardText(scene, 'Nidhogg', player2);
		}
	})
}

//Recoge la informacion de la recompensa
updateRewardFromServer = function (player, info) {
	player.estado = 0;
	player.reward = info.reward;
}

//Borrado de la lista de jugadores
deletePlayerList = function () {
	$.ajax({
		method: 'DELETE',
		url: 'http://localhost:8080/players'
	}).done(function (player) { })
}

//Control de sincronizacion
//Comprueba que un jugador ha pulsado la tecla de skip
pressedSkip = function (boolSkip, idP, scene) {
	$.ajax({
		method: 'PUT',
		url: 'http://localhost:8080/syncro/' + idP,
		data: JSON.stringify(boolSkip),
		processData: false,
		headers: {
			"Content-Type": "application/json"
		}
	}).done(function () {
		//Manda un mensaje de espera
		if (boolSkip) {
			var skipMessage = scene.physics.add.image(960, 60, 'skipCutscene1');
			skipMessage.setGravityY(-1200);
		}
	})
}

//Comprueba si ambos jugadores han pulsado skip
getPressedFromOpponent = function () {
	$.ajax({
		method: "GET",
		url: 'http://localhost:8080/syncro/',
		processData: false,
		headers: {
			"Content-Type": "application/json"
		}
	}).done(function (isSynced) {
		//Recoge la informacion
		skip = isSynced;
	})

}