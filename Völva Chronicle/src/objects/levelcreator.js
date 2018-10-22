var map;
var layer;
var powerups;

createLevel = function (scene, nLevel) {
    
    scene.add.image(0, 1224, 'background1Nivel1');
    scene.add.image(0, 3672, 'background2Nivel1');
    scene.add.image(0, 6120, 'background3Nivel1');
    scene.add.image(0, 8568, 'background4Nivel1');
    scene.add.image(0, 11016, 'background5Nivel1');
    scene.add.image(0, 13464, 'background6Nivel1');
    scene.add.image(0, 15912, 'background7Nivel1');
    scene.add.image(0, 18360, 'background8Nivel1');
    
    //Creacion del mapa dependiendo del nivel
    if (nLevel === 1) {
        //tilemap
        map = scene.make.tilemap({ key: 'map1', tileWidth: 48, tileHeight: 48});
        
        //powerups
        powerups = scene.physics.add.group();
        pCiervo = scene.physics.add.sprite(-1968, 2208, 'ciervo');
        powerups.add(pCiervo, true);
        pHeimdall = scene.physics.add.sprite(-1152, 2352, 'heimdall');
        powerups.add(pHeimdall, true);
        pBragi = scene.physics.add.sprite(-3120, 10752, 'bragi');
        powerups.add(pBragi, true);
        pNjord = scene.physics.add.sprite(-768, 8256, 'njord');
        powerups.add(pNjord, true);
        pSkadi = scene.physics.add.sprite(-3168, 5760, 'skadi');
        powerups.add(pSkadi, true);
        pSkadi2 = scene.physics.add.sprite(-2592, 1152, 'skadi');
        powerups.add(pSkadi2, true);
        
        //240
        Ciervop = scene.physics.add.sprite(1584, 2208, 'ciervo');
        powerups.add(Ciervop, true);
        Heimdallp = scene.physics.add.sprite(2400, 2352, 'heimdall');
        powerups.add(Heimdallp, true);
        Bragip = scene.physics.add.sprite(432, 10752, 'bragi');
        powerups.add(Bragip, true);
        Njordp = scene.physics.add.sprite(2784, 8256, 'njord');
        powerups.add(Njordp, true);
        Skadip = scene.physics.add.sprite(384, 5760, 'skadi');
        powerups.add(Skadip, true);
        Skadi2p = scene.physics.add.sprite(960, 1152, 'skadi');
        powerups.add(Skadi2p, true);
    }
    else if (nLevel === 2) {
        map = scene.make.tilemap({ key: 'map2', tileWidth: 48, tileHeight: 48});
    }

    var tileset = map.addTilesetImage('tiles');
    layer = map.createStaticLayer(0, tileset, -3501,0);
    
    map.setCollisionBetween(0,115);
    
    scene.physics.world.setBounds(-3501, 0, 7008, 19578);
    scene.physics.add.collider(powerups, layer);
    
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


//Funciones del Power Up de Heimdall
playersInteraction = function (player, adversary){
    //PENDIENTE DE RESOLVER: ¿Cómo empujar al personaje?
    console.log('playersInteraction');
}




