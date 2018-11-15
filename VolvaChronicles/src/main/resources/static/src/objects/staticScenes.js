var staticBackground;
var loadingImg;
var loadText;
var logoStudio;
var logoGame;
var fondoMenuSombra;
var botonLocal;
var botonOnline;
var keyZ;

//crea la animación de cargando
function loadingAnimation(scene) {
    //crea fondo, texto con explicacion de pantalla completa e imagen de "cargando..."
    staticBackground = scene.add.image(960, 540, 'fondoRecompensa');
    loadText = scene.add.text(660, 740, 'Pulsa F11 y disfruta del juego en pantalla completa', { font: "30px Fantasy", fill: "#000" });
    loadingImg = scene.add.sprite(960, 540, 'loadingIcon');
    scene.anims.create({
        key: 'load',
        frames: scene.anims.generateFrameNames('loadingIcon', { prefix: 'Cargando instancia 1', start: 0, end: 7, zeroPad: 4 }),
        frameRate: 3,
        repeat: -1
    });
    loadingImg.anims.play('load', true);
}

//Muestra el fondo
function createStaticBackground(scene, id){
    staticBackground = scene.add.image(960, 540, 'fondo'+ id);
}

//Muestra los logos del juego y el estudio
function createMenuLogos(scene){
    logoStudio = scene.add.image(900, 550, 'logoStudio');
    logoGame = scene.add.image(960, 400, 'logoGame');
}

//Crea los botones y los eventos asociados a ellos
function createMenuButtons(scene) {
    //Nueva imagen de fondo
    fondoMenuSombra = scene.add.image(960, 540, 'fondoMenu2');

        //Boton "Local"
        botonLocal = scene.add.sprite(960, 650, 'botonLocal').setInteractive();
        botonLocal.on('pointerdown', function (pointer) {
            music.stop();
            scene.sound.play('menuConfirm');
            scene.time.delayedCall(2000, function () {
                scene.scene.start('intro');
                scene.scene.stop();
            }, [], scene);
        });

        //Boton "Online"
        botonOnline = scene.add.sprite(960, 800, 'botonOnline').setInteractive();
        botonOnline.on('pointerdown', function (pointer) {
        
        	var defaultJson = {
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
				"ratatosk" : 0,
				"tir" : false,
				"heimdall" : false
        	};      	
        	
        	 $.ajax({
        	        method: "GET",
        	        url: 'http://localhost:8080/players',
        	        processData: false,
        	        headers: {
        	            "Content-Type": "application/json"
        	        }
        	        
        	 }).done(function (players) {
        	    
        	        console.log("Numero actual de jugadores: " + JSON.stringify(players));
        	        
        	        //Jugador 1
        	        if (players === 0){

        	        	$.ajax({
        	        	        method: "POST",
        	        	        url: 'http://localhost:8080/players',
        	        	        data : JSON.stringify(defaultJson),
        	        	        processData: false,
        	        	        headers: {
        	        	            "Content-Type": "application/json"
        	        	        }
        	        	    }).done(function (player) {
        	        	        console.log("Player created: " + JSON.stringify(defaultJson));
        	        	})
        	        	
        	        	console.log("Jugador 1 introducido");
        	        	
        	        	/*
        	        	//El jugador 1 pasa a la Sala de Espera (salaEspera se implementará posteriormente)
        	        	music.stop();
            			scene.sound.play('menuConfirm');
            			scene.time.delayedCall(2000, function () {
                			scene.scene.start('salaEspera); //En el update de salaEspera, pasar a escena intro cuando (players === 2), hacer GET
                			scene.scene.stop();
            			}, [], scene);
            			*/
        	        	
        	        //Jugador 2
        	        } else if (players === 1){
        	        
        	        	$.ajax({
        	        	        method: "POST",
        	        	        url: 'http://localhost:8080/players',
        	        	        data : JSON.stringify(defaultJson),
        	        	        processData: false,
        	        	        headers: {
        	        	            "Content-Type": "application/json"
        	        	        }
        	        	}).done(function (player) {
        	        	        console.log("Player created: " + JSON.stringify(defaultJson));
        	        	})

        	        	console.log("Jugador 2 introducido");
        	        	
        	        	//Cuando los 2 jugadores entran al servidor, comienza el juego
        	        	music.stop();
            			scene.sound.play('menuConfirm');
            			scene.time.delayedCall(2000, function () {
                			scene.scene.start('intro');
                			scene.scene.stop();
            			}, [], scene);
        	        
        	        }
        	    })
        });
}

//Crea el texto de enhorabuena del ganador, una imagen que representa su
//recompensa e instrucciones para pasar al siguiente nivel
function createRewardText(scene, type){
    var style1 = {font: "50px Fantasy", fill: "#000"}; 
    var style2 = {font: "30px Fantasy", fill: "#000"};
    var text = scene.add.text(700, 400, '', style1);
    var text2 = scene.add.text(800, 800, 'Pulse Z para continuar', style2);
    text.setText([
        'Ganador: ¡'+type+'!',           
        ''+type+' consigue: ' + runeName,
        'Tiempo: ' + levelTime,
    ]);
    obtainedRune = rewardScene.add.image(960, 700, runeName);
}

//Input para saltar la pantalla de Reward (Z)
function createRewardInput(scene){
    keyZ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
}

//Si se pulsa Z, pasa al nivel correspondiente
function nextLevel(scene){
    if(keyZ.isDown){
        
        if (currentLevel === 1){
            music.stop();
            keyZ.isDown = false;
            scene.scene.start('level2');
        } else if (currentLevel === 2){     
            music.stop();      
            keyZ.isDown = false;
            scene.scene.start('level3');
        }
        scene.scene.stop();
    }
}