var staticBackground;
var loadingImg;
var loadText;
var logoStudio;
var logoGame;
var fondoMenuSombra;
var botonLocal;
var botonOnline;
var keyZ;
var idJugador; // Variable que asigna a cada jugador su personaje y con ello
// sus llamadas
var iconoPersonaje;

// crea la animación de cargando
function loadingAnimation(scene) {
	// crea fondo, texto con explicacion de pantalla completa e imagen de
	// "cargando..."
	staticBackground = scene.add.image(960, 540, 'fondoRecompensa');
	loadText = scene.add.text(660, 740,
		'Pulsa F11 y disfruta del juego en pantalla completa', {
			font: "30px Fantasy",
			fill: "#000"
		});
	loadingImg = scene.add.sprite(960, 540, 'loadingIcon');
	scene.anims.create({
		key: 'load',
		frames: scene.anims.generateFrameNames('loadingIcon', {
			prefix: 'Cargando instancia 1',
			start: 0,
			end: 7,
			zeroPad: 4
		}),
		frameRate: 3,
		repeat: -1
	});
	loadingImg.anims.play('load', true);
}

// Muestra el fondo
function createStaticBackground(scene, id) {
	staticBackground = scene.add.image(960, 540, 'fondo' + id);
}

// Muestra los logos del juego y el estudio
function createMenuLogos(scene) {
	logoStudio = scene.add.image(900, 550, 'logoStudio');
	logoGame = scene.add.image(960, 400, 'logoGame');
}

// Crea los botones y los eventos asociados a ellos
function createMenuButtons(scene) {
	// Nueva imagen de fondo
	fondoMenuSombra = scene.add.image(960, 540, 'fondoMenu2');

	// Boton "Local"
	botonLocal = scene.add.sprite(960, 650, 'botonLocal').setInteractive();
	botonLocal.on('pointerdown', function (pointer) {
		isOnline = false;
		music.stop();
		scene.sound.play('menuConfirm');
		scene.time.delayedCall(2000, function () {
			scene.scene.start('intro');
			scene.scene.stop();
		}, [], scene);
	});

	// Boton "Online"
	botonOnline = scene.add.sprite(960, 800, 'botonOnline').setInteractive();

	botonOnline.on('pointerdown', function (pointer) {
		music.stop();
		scene.sound.play('menuConfirm');
		scene.time.delayedCall(2000, function () {
			isOnline = true;
			$.ajax({
				method: "GET",
				url: 'http://localhost:8080/players',
				processData: false,
				headers: {
					"Content-Type": "application/json"
				}

			}).done(
				function (players) {

					console.log("Numero actual de jugadores: "
						+ JSON.stringify(players));

					// Jugador 1
					if (players === 0) {
						createPlayerInServer(0);
						scene.scene.start('waiting');
						scene.scene.stop();

					} else if (players === 1) {
						createPlayerInServer(1);
						scene.scene.start('intro');
						scene.scene.stop();
					}
				})
		}, [], scene);
	});

}

//Crea el texto de la sala de espera del jugador 1, con una animacion del personaje
function createWaitingText(scene, type) {
	var style1 = { font: "50px Fantasy", fill: "#000" };
	var style2 = { font: "30px Fantasy", fill: "#000" };
	var text = scene.add.text(700, 400, 'Eres el jugador 1: ¡Águila!', style1);
	var text2 = scene.add.text(800, 750, 'Esperando al jugador 2...', style2);

	iconoPersonaje = scene.add.sprite(960, 600, 'aguila');
	scene.anims.create({
		key: 'runWaiting',
		frames: scene.anims.generateFrameNames('aguila', { prefix: 'aguila instancia 1', start: 22, end: 40, zeroPad: 4 }),
		frameRate: 24,
		repeat: -1
	});
	iconoPersonaje.anims.play('runWaiting', true);
}

// Crea el texto de enhorabuena del ganador, una imagen que representa su
// recompensa e instrucciones para pasar al siguiente nivel
function createRewardText(scene, type, player) {
	var style1 = {
		font: "50px Fantasy",
		fill: "#000"
	};
	var style2 = {
		font: "30px Fantasy",
		fill: "#000"
	};
	var text = scene.add.text(700, 400, '', style1);
	var text2 = scene.add.text(800, 800, 'Pulse Z para continuar', style2);
	text.setText(['Ganador: ¡' + type + '!',
	'' + type + ' consigue: ' + player.reward, 'Tiempo: ' + levelTime,]);
	obtainedRune = rewardScene.add.image(960, 700, player.reward);
}

// Input para saltar la pantalla de Reward (Z)
function createRewardInput(scene) {
	keyZ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
}

// Si se pulsa Z, pasa al nivel correspondiente
function nextLevel(scene) {
	if (currentLevel === 1) {
		music.stop();
		scene.scene.start('level2');
	} else if (currentLevel === 2) {
		music.stop();
		scene.scene.start('level3');
	}
	scene.scene.stop();
}