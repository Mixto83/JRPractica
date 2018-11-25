getNumberOfPlayers = function(){
	$.ajax({
        method: "GET",
        url: 'http://localhost:8080/players',
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
        
 }).done(function (players){
	 console.log("Numero actual de jugadores: " + JSON.stringify(players));
	 if (players === 0){
		 createPlayerInServer();
	 } else if (players === 1){
		 createPlayerInServer();
	 } else {
		 deletePlayerInfo(0);
		 deletePlayerInfo(1);
	 }
 })
}

//Creacion del perfil de jugador en el servidor
createPlayerInServer = function(id){
	idJugador = id;//Coge 0 cuando no hay nadie o 1 cuando hay otro
	$.ajax({
	        method: "POST",
	        url: 'http://localhost:8080/players',
	        processData: false,
	        headers: {
	            "Content-Type": "application/json"
	        }
	    }).done(function (status) {
	        console.log("Jugador 1 introducido");  
	    })
}

//Recogida de datos del servidor
getPlayerInfo = function (id){
	 $.ajax({
	        method: "GET",
	        url: 'http://localhost:8080/players/' + id,
	        processData: false,
	        headers: {
	            "Content-Type": "application/json"
	        }
	 }).done(function (playerInfo) {
		 if (id === 0){
			 updatePlayerFromServer(player1,playerInfo);
		 } else if (id === 1){
			 updatePlayerFromServer(player2,playerInfo);
		 }
		 //console.log("Info del jugador " + playerId + ": " + JSON.stringify(playerInfo));
	 })
}

//Actualizacion del estado interno en el cliente con los datos del servidor
updatePlayerFromServer = function (player,info){
	if (player.estado < info.estado){
        console.log("actualizando");
		player.estado = info.estado;
		player.downPulsada = info.downPulsada;
		player.downToque = info.downToque;
		player.upPulsada = info.upPulsada
		player.upToque = info.upToque;
		player.leftPulsada = info.leftPulsada;
		player.rightPulsada = info.rightPulsada;
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
		player.ratatosk = info.ratatosk;
		player.tir = info.tir;
		player.heimdall = info.heimdall;
		player.reward = info.reward;
	}
}



//Inicializacion de la informacion de cada jugador
insertPlayer = function (player, id){
	player.estado++;
	var playerInfo = {
    		"estado" : player.estado,
			"downPulsada" : player.downPulsada,
			"downToque" : player.downToque,
			"upPulsada" : player.upPulsada,
			"upToque" : player.upToque,
			"leftPulsada" : player.leftPulsada,
			"rightPulsada" : player.rightPulsada,
			"dashPulsada" : player.dashPulsada,
			"velocidadX" : player.body.velocity.x,
			"velocidadY" : player.body.velocity.y,
			"posX" : player.x,
			"posY" : player.y,
			"contStamine" : player.contStamine,
			"contSalto" : player.contSalto,
			"throwRight" : player.throwRight,
			"throwLeft" : player.throwLeft,
			"facingRight" : player.facingRight,
			"dashId" : player.dashId,
			"ratatosk" : player.ratatosk,
			"tir" : player.tir,
			"heimdall" : player.heimdall,
			"reward" : player.reward
    	};
	
	$.ajax({
        method: 'PUT',
        url: 'http://localhost:8080/players/' + id,
        data: JSON.stringify(playerInfo),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (playerInfo) {
        console.log("Created player")
    })
}


//Actualizacion del servidor con la informacion del jugador cambiada
modifyPlayerInfo = function (player, id){
	player.estado++;
	playerInfo = {
    		"estado" : player.estado,
			"downPulsada" : player.downPulsada,
			"downToque" : player.downToque,
			"upPulsada" : player.upPulsada,
			"upToque" : player.upToque,
			"leftPulsada" : player.leftPulsada,
			"rightPulsada" : player.rightPulsada,
			"dashPulsada" : player.dashPulsada,
			"velocidadX" : player.body.velocity.x,
			"velocidadY" : player.body.velocity.y,
			"posX" : player.x,
			"posY" : player.y,
			"contStamine" : player.contStamine,
			"contSalto" : player.contSalto,
			"throwRight" : player.throwRight,
			"throwLeft" : player.throwLeft,
			"facingRight" : player.facingRight,
			"dashId" : player.dashId,
			"ratatosk" : player.ratatosk,
			"tir" : player.tir,
			"heimdall" : player.heimdall,
			"reward" : player.reward
    	};
	
	$.ajax({
        method: 'PUT',
        url: 'http://localhost:8080/players/' + id,
        data: JSON.stringify(playerInfo),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (playerInfo) {
        //console.log("Updated player")
    })
}

uploadReward = function (player, id){
	playerInfo = {
		"estado" : 0,
		"downPulsada" : false,
		"downToque" : false,
		"upPulsada" : false,
		"upToque" : false,
		"leftPulsada" : false,
		"rightPulsada" : false,
		"dashPulsada" : false,
		"velocidadX" : 0,
		"velocidadY" : 0,
		"posX" : 0,
		"posY" : 0,
		"contStamine" : 100,
		"contSalto" : 0,
		"throwRight" : false,
		"throwLeft" : false,
		"facingRight" : true,
		"dashId" : 0,
		"ratatosk" : 0,
		"tir" : false,
		"heimdall" : false,
		"reward" : player.reward
	};
	$.ajax({
        method: 'PUT',
        url: 'http://localhost:8080/players/'+ id,
        data: JSON.stringify(playerInfo),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
        console.log('reward subida');
    })
}

getRewardFromServer = function (id, scene){
	$.ajax({
		   method: "GET",
		   url: 'http://localhost:8080/players/' + id,
		   processData: false,
		   headers: {
			   "Content-Type": "application/json"
		   }
	}).done(function (playerInfo) {
		if (id === 0){
			updateRewardFromServer(player1,playerInfo);
			createRewardText(scene, 'El Águila', player1);
		} else if (id === 1){
			updateRewardFromServer(player2,playerInfo);
			createRewardText(scene, 'Nidhogg', player2);
		}
		//console.log("Info del jugador " + playerId + ": " + JSON.stringify(playerInfo));
	})
}


updateRewardFromServer = function (player,info){
        console.log("actualizando reward");
		player.estado = 0;
		player.reward = info.reward;
}

//Borrado de la lista de jugadores
deletePlayerList = function(){
	 $.ajax({
	        method: 'DELETE',
	        url: 'http://localhost:8080/players'
	    }).done(function (player) {
	        console.log("Deleted players ");
	    })
}

//Control de sincronizacion
//Comprueba que un jugador ha pulsado la tecla de skip
pressedSkip = function(boolSkip, idP, scene){
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:8080/syncro/' + idP,
        data: JSON.stringify(boolSkip),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function () {
		var skipMessage = scene.physics.add.image(960, 60, 'skipCutscene1');
		skipMessage.setGravityY(-1200);
        console.log("Ha pulsado " + idP);
    })
}

//Comprueba si ambos jugadores han pulsado skip
getPressedFromOpponent = function(){
     $.ajax({
	        method: "GET",
	        url: 'http://localhost:8080/syncro/',
	        processData: false,
	        headers: {
	            "Content-Type": "application/json"
	        }
	 }).done(function (isSynced) {
		 skip = isSynced;
	 })
    
}