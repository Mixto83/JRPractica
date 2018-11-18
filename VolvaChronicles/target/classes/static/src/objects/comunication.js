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

createPlayerInServer = function(id){
	isOnline = true;
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

updatePlayerFromServer = function (player,info){
	player.estado = info.estado;
	player.downPulsada = info.downPulsada;
	player.downToque = info.downToque;
	player.upPulsada = info.upPulsada
	player.upToque = info.upToque;
	player.leftPulsada = info.leftPulsada;
	player.rightPulsada = info.rightPulsada;
	player.velocidadX = info.velocidadX;
	player.velocidadY = info.velocidadY;
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
}

insertPlayer = function (player, id){
	var playerInfo = {
    		"estado" : player.estado,
			"downPulsada" : player.downPulsada,
			"downToque" : player.downToque,
			"upPulsada" : player.upPulsada,
			"upToque" : player.upToque,
			"leftPulsada" : player.leftPulsada,
			"rightPulsada" : player.rightPulsada,
			"dashPulsada" : player.dashPulsada,
			"velocidadX" : player.velocidadX,
			"velocidadY" : player.velocidadY,
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
			"heimdall" : player.heimdall
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
			"velocidadX" : player.velocidadX,
			"velocidadY" : player.velocidadY,
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
			"heimdall" : player.heimdall
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

deletePlayerList = function(){
	 $.ajax({
	        method: 'DELETE',
	        url: 'http://localhost:8080/players'
	    }).done(function (player) {
	        console.log("Deleted players ");
	    })
}