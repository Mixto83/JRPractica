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
						scene.scene.start('intro');
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


//Recogida de datos del servidor
getPlayerInfo = function (ws,jsonUp) {
	metodo = "getOpponent";
	jsonUp = {
		"metodo": metodo,
		"id": idJugadorEnServer,
		"idOpponent": idOponente
	}
	if (ws.readyState === ws.OPEN) {
		ws.send(JSON.stringify(jsonUp));
	}
}

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


//Actualizacion del servidor con la informacion del jugador cambiada
modifyPlayerInfo = function (player) {
	metodo = "updatePlayer";
	player.estado++;
	infoCambiada = {
		"metodo": metodo,
		"id": idJugadorEnServer,
		"idOpponent": idOponente,
		"sync": false,
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
}

//Sube la informacion de la recompensa y resetea el resto
uploadReward = function (player, id) {}

//Recoge la informacion de la recompensa
getRewardFromServer = function (id, scene) {
	/*$.ajax({
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
	})*/
}

//Recoge la informacion de la recompensa
updateRewardFromServer = function (player, info) {
	player.estado = 0;
	player.reward = info.reward;
}

//Borrado de la lista de jugadores
deletePlayerList = function () {}

//Control de sincronizacion
//Comprueba que un jugador ha pulsado la tecla de skip
pressedSkip = function (boolSkip, idP, scene) {}

//Comprueba si ambos jugadores han pulsado skip
getPressedFromOpponent = function () {}