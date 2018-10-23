var powerups;

var ciervosBool = false;
var heimdall = false;

function createPowerups (scene, nLevel) {
    
    if (nLevel === 1) {
        //powerups
        powerups = scene.physics.add.group();
        var pCiervo = scene.physics.add.sprite(-1968, 2208, 'ciervo');
        pCiervo.id = 0;
        powerups.add(pCiervo, true);
        var pHeimdall = scene.physics.add.sprite(-1152, 2352, 'heimdall');
        pHeimdall.id = 1;
        powerups.add(pHeimdall, true);
        var pBragi = scene.physics.add.sprite(-3120, 10752, 'bragi');
        pBragi.id = 2;
        powerups.add(pBragi, true);
        var pNjord = scene.physics.add.sprite(-768, 8256, 'njord');
        pNjord.id = 3;
        powerups.add(pNjord, true);
        var pSkadi = scene.physics.add.sprite(-3168, 5760, 'skadi');
        pSkadi.id = 4;
        powerups.add(pSkadi, true);
        var pSkadi2 = scene.physics.add.sprite(-2592, 1152, 'skadi');
        pSkadi2.id = 4;
        powerups.add(pSkadi2, true);
        
        var Ciervop = scene.physics.add.sprite(1584, 2208, 'ciervo');
        Ciervop.id = 0;
        powerups.add(Ciervop, true);
        var Heimdallp = scene.physics.add.sprite(2400, 2352, 'heimdall');
        Heimdallp.id = 1;
        powerups.add(Heimdallp, true);
        var Bragip = scene.physics.add.sprite(432, 10752, 'bragi');
        Bragip.id = 2;
        powerups.add(Bragip, true);
        var Njordp = scene.physics.add.sprite(2784, 8256, 'njord');
        Njordp.id = 3;
        powerups.add(Njordp, true);
        var Skadip = scene.physics.add.sprite(384, 5760, 'skadi');
        Skadip.id = 4;
        powerups.add(Skadip, true);
        var Skadi2p = scene.physics.add.sprite(960, 1152, 'skadi');
        Skadi2p.id = 4;
        powerups.add(Skadi2p,true);
    }

    scene.physics.add.collider(powerups, layer);
    scene.physics.add.overlap(player1, powerups, function(player1,powerups){powerupsFunc(player1,powerups,scene);}, null, this);
    scene.physics.add.overlap(player2, powerups, function(player2,powerups){powerupsFunc(player2,powerups,scene);}, null, this);
}

function powerupsFunc(player,powerups,scene) {
    powerups.disableBody(true, true);
    if (player === player1){
        adversary = player2;
    } else{
        adversary = player1;
    }
    if(powerups.id === 0)   {
        ciervosFunc(scene,player,adversary);
    }
}

//Funciones del PowerUp de Ratatosk
var reverseRatatosk = function (scene,player,adversary){
    //Funcion completa. No requiere de ninguna modificacion
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

var ratatoskFunc = function(scene, player, adversary){
    //Funcion completa. No requiere de ninguna modificacion, salvo que se quiera cambiar el tiempo que tarda en llamar a la otra funcion para revertir el efecto
    if (player === player1){
        if (player.ratatosk === 0){
            player.ratatoskBool = true;
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
var throwFunc = function (scene, player, adversary){
    //Funcion Incompleta. Esta funcion debe cambiar a true el boolean correspondiente a la direccion en la que se quiera lanzar.
    //Hay que hacer tambien que se llame a stopThrowing cuando choque con el layer.
    adversary.throwRight = true;
    //adversary.setVelocityX(1000);
    //console.log('throwFunc');
    //scene.time.delayedCall(4000, stopThrowing, [adversary], null, this);
}

var stopThrowing = function(adversary){
    adversary.throwRight = false;
    adversary.throwLeft = false;
    //console.log('throw cambiada');
}

heimdallReturn = function (player){
    //Funciona, aunque habria que modificar donde acaba posicionandose
    heimdall = false;
    player.x = -player.x;
    if (player === player2)
        camera2.setBounds(0,0,7008,19578);
    else if (player === player1)
        camera1.setBounds(-3501, 0, 3501, 19578);
}

var heimdallFunc = function (scene, player, adversary){
    //Funciona, aunque el jugador deberia posicionarse en otra X e Y. Ajustar en funcion de la jugabilidad
    //Falta gestionar la colision entre los dos jugadores y que esta llame a throwFunc
    heimdall = true;
    player.x = -player.x;
    if (player === player1){
        camera1.setBounds(0,0,7008,19578);
    } else if (player === player2){
        camera2.setBounds(-3501, 0, 3501, 19578);
    }
    //scene.physics.add.overlap(player, adversary, throwFunc, null, this);
    scene.time.delayedCall(10000, heimdallReturn, [player], scene);
}

//Funciones del powerup de los ciervos
//Funcion completa. Solamente requiere de modificar parametros de velocidad.
var ciervosFunc = function(scene, player, adversary){
    ciervosBool = true;//Variable de debug
    var nCiervo = Math.floor(Math.random()*4);
    nCiervo=3;
    //console.log('Valor de nCiervo: ' +  nCiervo);
    switch (nCiervo){
        case 0:
            //Dainn
            player.setVelocityY(-500);
            break;
        case 1:
            //Dvalinn
            player.setVelocityY(-500);
            adversary.setVelocityY(-500);
            break;
        case 2:
            //Duneyrr
            adversary.throwLeft = true;
            break;
        case 3:
            //Duraþror
            adversary.throwRight = true;
            break;
    }
}

//Runas
function eventHermodrSkadi(scene, player, playerVelocity) {
    player.velocidadX += 100;
    scene.time.delayedCall(5000, onHermodrSkadi, [player, playerVelocity], scene);
}

function eventSkadi(scene, player, playerVelocity){
    adversary.velocidadX -= 50;
    scene.time.delayedCall(5000, onHermodrSkadi, [player, playerVelocity], scene);    
}

function onHermodrSkadi (player, playerVelocity) {
    player.velocidadX = playerVelocity;
}

function eventNjord(scene, player, playerVelocity) {
    player.velocidadY += 100;
    scene.time.addEvent({delay: 5000, callback: onNjord(player), callbackScope: scene, repeat: 0});
}

function onNjord (player, playerVelocity) {
    player.velocidadY = playerVelocity;
    
}

function eventBragi(scene, player) {
    player.contStamine += 100;
    scene.time.addEvent({delay: 5000, callback: onBragi(player), callbackScope: scene, repeat: 0});
}

function onBragi (player) {
    player.contStamine = 100;
}