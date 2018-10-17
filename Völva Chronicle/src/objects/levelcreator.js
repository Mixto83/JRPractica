var map;
var layer;

createLevel = function (scene, nLevel) {
    //  A simple background for our game
    scene.add.image(0, 1224, 'background1Nivel1');
    scene.add.image(0, 3672, 'background2Nivel1');
    scene.add.image(0, 6120, 'background3Nivel1');
    scene.add.image(0, 8568, 'background4Nivel1');
    scene.add.image(0, 11016, 'background5Nivel1');
    scene.add.image(0, 13464, 'background6Nivel1');
    scene.add.image(0, 15912, 'background7Nivel1');
    scene.add.image(0, 18360, 'background8Nivel1');
    
    map = scene.make.tilemap({ key: 'map1', tileWidth: 48, tileHeight: 48});
    var tileset = map.addTilesetImage('tiles');
    layer = map.createStaticLayer(0, tileset, -3501,0);
    
    map.setCollisionBetween(0,100);
    
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