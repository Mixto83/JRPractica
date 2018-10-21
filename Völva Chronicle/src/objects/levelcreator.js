var map;
var layer;

createLevel = function (scene, nLevel) {
    
    scene.add.image(0, 1224, 'background1Nivel1');
    scene.add.image(0, 3672, 'background2Nivel1');
    scene.add.image(0, 6120, 'background3Nivel1');
    scene.add.image(0, 8568, 'background4Nivel1');
    scene.add.image(0, 11016, 'background5Nivel1');
    scene.add.image(0, 13464, 'background6Nivel1');
    scene.add.image(0, 15912, 'background7Nivel1');
    scene.add.image(0, 18360, 'background8Nivel1');
    
    //Seleccion del mapa csv dependiendo del nivel
    if (nLevel === 1) {
        map = scene.make.tilemap({ key: 'map1', tileWidth: 48, tileHeight: 48});
    }
    else if (nLevel === 2) {
        map = scene.make.tilemap({ key: 'map2', tileWidth: 48, tileHeight: 48});
    }

    var tileset = map.addTilesetImage('tiles');
    layer = map.createStaticLayer(0, tileset, -3501,0);
    
    map.setCollisionBetween(0,115);
    
    scene.physics.world.setBounds(-3501, 0, 7008, 19578);
}

function eventHermodrSkadi(scene, player, playerVelocity) {
    scene.time.delayedCall(5000, onHermodrSkadi, [player, playerVelocity], scene);
}

function onHermodrSkadi (player, playerVelocity) {
    player.velocidadX = playerVelocity;
}

function eventNjord(scene, player, playerVelocity) {
    scene.time.addEvent({delay: 5000, callback: onNjord(player), callbackScope: scene, repeat: 0});
}

function onNjord (player, playerVelocity) {
    player.velocidadY = playerVelocity;
    
}

function eventBragi(scene, player) {
    scene.time.addEvent({delay: 5000, callback: onNjord(player), callbackScope: scene, repeat: 0});
}

function onBragi (player) {
    player.contStamine = 100;
}

//Funciones del PowerUp de Ratatosk
function reverseRatatosk(scene,player,adversary){
    if (player === player1){
            adversary.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
            adversary.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            adversary.keyDown = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
            adversary.keyUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    } else if (player === player2){
            adversary.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            adversary.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            adversary.keyDown = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
            adversary.keyUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }   
}

function ratatoskFunc(scene, player, adversary){
    if (player === player1){
        if (player.ratatosk === 0){
            adversary.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            adversary.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        } else {
            adversary.keyDown= scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
            adversary.keyUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        }
        player.ratatosk++;
    } else if (player === player2){
        if (player.ratatosk === 0){
            adversary.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            adversary.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        } else {
            adversary.keyDown= scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            adversary.keyUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        }
        player.ratatosk++;
    }
    scene.time.delayedCall(10000, reverseRatatosk, [scene, player, adversary], scene);
}

//Funciones del Power Up de Heimdall
playersInteraction = function (player, adversary){
    //PENDIENTE DE RESOLVER: ¿Cómo empujar al personaje?
    console.log('playersInteraction');
}

heimdallReturn = function (player){
    //Resolver posicionamiento
    player.heimdall = false;
    player.x = -player.x;
    if (player === player2)
        camera2.setBounds(0,0,7008,19578);
    else if (player === player1)
        camera1.setBounds(-3501, 0, 3501, 19578);
}

heimdallFunc = function (scene, player, adversary){
    //Resolver posicionamiento
    player.heimdall = true;
    player.x = -player.x;
    if (player === player1){
        camera1.setBounds(0,0,7008,19578);
    } else if (player === player2){
        camera2.setBounds(-3501, 0, 3501, 19578);
    }
    scene.physics.add.overlap(player, adversary, playersInteraction, null, this);
    scene.time.delayedCall(10000, heimdallReturn, [player], scene);
}

//Funciones del powerup de los ciervos
ciervosFunc = function(scene, player, adversary){
    var nCiervo = Math.floor(Math.random()*4);
    console.log('Valor de nCiervo: ' +  nCiervo);
    //La traslacion es para probar, tiene que realizarse esto de otra manera para hacer una transicion decente
    switch (nCiervo){
        case 0:
            //Dainn
            player.y -= 300;
            break;
        case 1:
            //Dvalinn
            player.y -= 300;
            adversary.y -= 300;
            break;
        case 2:
            adversary.x -= 300;
            //Duneyrr
            break;
        case 3:
            adversary.x += 300;
            //Duraþror
            break;
    }
}

