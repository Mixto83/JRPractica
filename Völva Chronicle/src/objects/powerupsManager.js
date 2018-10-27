var powerups;
var heimdall = false;

function createPowerups(scene, nLevel) {
    powerups = scene.physics.add.group();

    if (nLevel === 1) {
        //powerups
        var pCiervo = scene.physics.add.sprite(-1968, 2208, 'ciervo');
        pCiervo.id = 0;
        powerups.add(pCiervo, true);
        var pHeimdall = scene.physics.add.sprite(-1200, 2500, 'heimdall');
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
        var Heimdallp = scene.physics.add.sprite(2352, 2500, 'heimdall');
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
        powerups.add(Skadi2p, true);
    }
    else if (nLevel === 2) {
        
        var pHemodr = scene.physics.add.sprite(-1632, 16704, 'hemodr');
        pHemodr.id = 5;
        powerups.add(pHemodr, true);
        var pSkadi = scene.physics.add.sprite(-2880, 16032, 'skadi');
        pSkadi.id = 4;
        powerups.add(pSkadi, true);
        var pNjord = scene.physics.add.sprite(-768, 14400, 'njord');
        pNjord.id = 3;
        powerups.add(pNjord, true);
        var pBragi = scene.physics.add.sprite(-3072, 12864, 'bragi');
        pBragi.id = 2;
        powerups.add(pBragi, true);
        var pRatatosk = scene.physics.add.sprite(-1824, 10944, 'ratatosk');
        pRatatosk.id = 6;
        powerups.add(pRatatosk, true);
        var pHeimdall = scene.physics.add.sprite(-480, 6624, 'heimdall');
        pHeimdall.id = 1;
        powerups.add(pHeimdall, true);
        var pTir = scene.physics.add.sprite(-3072, 6240, 'tir');
        pTir.id = 7;
        powerups.add(pTir, true);
        var pTir2 = scene.physics.add.sprite(-1824, 2784, 'tir');
        pTir2.id = 7;
        powerups.add(pTir2, true);
        var pRatatosk2 = scene.physics.add.sprite(-1824, 2304, 'ratatosk');
        pRatatosk2.id = 6;
        powerups.add(pRatatosk2, true);
        
        var Hemodrp = scene.physics.add.sprite(1920, 16704, 'hemodr');
        Hemodrp.id = 5;
        powerups.add(Hemodrp, true);
        var Skadip = scene.physics.add.sprite(672, 16032, 'skadi');
        Skadip.id = 4;
        powerups.add(Skadip, true);
        var Njordp = scene.physics.add.sprite(2784, 14400, 'njord');
        Njordp.id = 3;
        powerups.add(Njordp, true);
        var Bragip = scene.physics.add.sprite(480, 12864, 'bragi');
        Bragip.id = 2;
        powerups.add(Bragip, true);
        var Ratatoskp = scene.physics.add.sprite(1728, 10944, 'ratatosk');
        Ratatoskp.id = 6;
        powerups.add(Ratatoskp, true);
        var Heimdallp = scene.physics.add.sprite(3072, 6624, 'heimdall');
        Heimdallp.id = 1;
        powerups.add(Heimdallp, true);
        var Tirp = scene.physics.add.sprite(480, 6240, 'tir');
        Tirp.id = 7;
        powerups.add(Tirp, true);
        var Tir2p = scene.physics.add.sprite(1728, 2784, 'tir');
        Tir2p.id = 7;
        powerups.add(Tir2p, true);
        var Ratatosk2p = scene.physics.add.sprite(1728, 2304, 'ratatosk');
        Ratatosk2p.id = 6;
        powerups.add(Ratatosk2p, true);
        
    }
    else if (nLevel === 3) {
        
        var pCiervo = scene.physics.add.sprite(-2208, 16992, 'ciervo');
        pCiervo.id = 0;
        powerups.add(pCiervo, true);
        var pHemodr = scene.physics.add.sprite(-384, 16608, 'hemodr');
        pHemodr.id = 5;
        powerups.add(pHemodr, true);
        var pSkadi = scene.physics.add.sprite(-3072, 16320, 'skadi');
        pSkadi.id = 4;
        powerups.add(pSkadi, true);
        var pRatatosk = scene.physics.add.sprite(-1536, 15360, 'ratatosk');
        pRatatosk.id = 6;
        powerups.add(pRatatosk, true);
        var pHeimdall = scene.physics.add.sprite(-480, 12864, 'heimdall');
        pHeimdall.id = 1;
        powerups.add(pHeimdall, true);
        var pTir = scene.physics.add.sprite(-3072, 12576, 'tir');
        pTir.id = 7;
        powerups.add(pTir, true);
        var pNjord = scene.physics.add.sprite(-480, 12384, 'njord');
        pNjord.id = 3;
        powerups.add(pNjord, true);
        var pBragi = scene.physics.add.sprite(-1536, 10560, 'bragi');
        pBragi.id = 2;
        powerups.add(pBragi, true);
        var pHemodr2 = scene.physics.add.sprite(-2976, 8160, 'hemodr');
        pHemodr2.id = 5;
        powerups.add(pHemodr2, true);
        var pRatatosk2 = scene.physics.add.sprite(-3072, 7008, 'ratatosk');
        pRatatosk2.id = 6;
        powerups.add(pRatatosk2, true);
        var pNjord2 = scene.physics.add.sprite(-480, 6432, 'njord');
        pNjord2.id = 3;
        powerups.add(pNjord2, true);
        var pSkadi2 = scene.physics.add.sprite(-1344, 5664, 'skadi');
        pSkadi2.id = 4;
        powerups.add(pSkadi2, true);
        var pBragi2 = scene.physics.add.sprite(-1152, 3360, 'bragi');
        pBragi2.id = 2;
        powerups.add(pBragi2, true);
        var pCiervo2 = scene.physics.add.sprite(-2880, 2688, 'ciervo');
        pCiervo2.id = 0;
        powerups.add(pCiervo2, true);
        var pHemodr3 = scene.physics.add.sprite(-1632, 2112, 'hemodr');
        pHemodr3.id = 5;
        powerups.add(pHemodr3, true);
        
        var Ciervop = scene.physics.add.sprite(1344, 16992, 'ciervo');
        Ciervop.id = 0;
        powerups.add(Ciervop, true);
        var Hemodrp = scene.physics.add.sprite(3168, 16608, 'hemodr');
        Hemodrp.id = 5;
        powerups.add(Hemodrp, true);
        var Skadip = scene.physics.add.sprite(480, 16320, 'skadi');
        Skadip.id = 4;
        powerups.add(Skadip, true);
        var Ratatoskp = scene.physics.add.sprite(2016, 15360, 'ratatosk');
        Ratatoskp.id = 6;
        powerups.add(Ratatoskp, true);
        var Heimdallp = scene.physics.add.sprite(3072, 12864, 'heimdall');
        Heimdallp.id = 1;
        powerups.add(Heimdallp, true);
        var Tirp = scene.physics.add.sprite(480, 12576, 'tir');
        Tirp.id = 7;
        powerups.add(Tirp, true);
        var Njordp = scene.physics.add.sprite(3072, 12384, 'njord');
        Njordp.id = 3;
        powerups.add(Njordp, true);
        var Bragip = scene.physics.add.sprite(2016, 10560, 'bragi');
        Bragip.id = 2;
        powerups.add(Bragip, true);
        var Hemodr2p = scene.physics.add.sprite(576, 8160, 'hemodr');
        Hemodr2p.id = 5;
        powerups.add(Hemodr2p, true);
        var Ratatosk2p = scene.physics.add.sprite(480, 7008, 'ratatosk');
        Ratatosk2p.id = 6;
        powerups.add(Ratatosk2p, true);
        var Njord2p = scene.physics.add.sprite(3072, 6432, 'njord');
        Njord2p.id = 3;
        powerups.add(Njord2p, true);
        var Skadi2p = scene.physics.add.sprite(2208, 5664, 'skadi');
        Skadi2p.id = 4;
        powerups.add(Skadi2p, true);
        var Bragi2p = scene.physics.add.sprite(2400, 3360, 'bragi');
        Bragi2p.id = 2;
        powerups.add(Bragi2p, true);
        var Ciervo2p = scene.physics.add.sprite(672, 2688, 'ciervo');
        Ciervo2p.id = 0;
        powerups.add(Ciervo2p, true);
        var Hemodr3p = scene.physics.add.sprite(1920, 2112, 'hemodr');
        Hemodr3p.id = 5;
        powerups.add(Hemodr3p, true);
    }

    scene.physics.add.collider(powerups, layer);
    scene.physics.add.overlap(player1, player2, function (player1, player2) {
        throwFunc(scene, player1, player2);
    }, null, this);
    scene.physics.add.overlap(player1, powerups, function (player1, powerups) {
        powerupsFunc(player1, powerups, scene);
    }, null, this);
    scene.physics.add.overlap(player2, powerups, function (player2, powerups) {
        powerupsFunc(player2, powerups, scene);
    }, null, this);
}

function powerupsFunc(player, powerups, scene) {
    powerups.disableBody(true, true);

    if (player === player1) {
        adversary = player2;
    } else {
        adversary = player1;
    }

    if (powerups.id === 0) {
        ciervosFunc(scene, player, adversary);
    } else if (powerups.id === 1) {
        heimdallFunc(scene, player, adversary);
    } else if (powerups.id === 2) {
        eventBragi(scene, player);
    } else if (powerups.id === 3) {
        eventNjord(scene, player);
    } else if (powerups.id === 4) {
        eventSkadi(scene, adversary);
    } else if (powerups.id === 5) {
        eventHermodr(scene,player);
    } else if (powerups.id === 6){
        ratatoskFunc(scene,player,adversary);
    } else if (powerups.id === 7){
        eventTir(scene,player);
    }
}

//Funciones del PowerUp de Ratatosk
function reverseRatatosk(scene, player, adversary) {
    //Funcion completa. No requiere de ninguna modificacion
    if (player === player1) {
        adversary.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        adversary.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        adversary.keyDown = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        adversary.keyUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    } else if (player === player2) {
        adversary.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        adversary.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        adversary.keyDown = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        adversary.keyUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }
}

function ratatoskFunc(scene, player, adversary) {
    //Funcion completa. No requiere de ninguna modificacion, salvo que se quiera cambiar el tiempo que tarda en llamar a la otra funcion para revertir el efecto
    scene.sound.play('ratatoskSound');

    if (player === player1) {
        if (player.ratatosk === 0) {
            player.ratatoskBool = true;
            adversary.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            adversary.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        } else {
            adversary.keyDown = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
            adversary.keyUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        }
        player.ratatosk++;
    } else if (player === player2) {
        if (player.ratatosk === 0) {
            adversary.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            adversary.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        } else {
            adversary.keyDown = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            adversary.keyUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        }
        player.ratatosk++;
    }
    scene.time.delayedCall(10000, reverseRatatosk, [scene, player, adversary], scene);
}

function defaultMaxVelocity(player) {
    player.setMaxVelocity(1100, 1100);
}
//Funciones del Power Up de Heimdall
function throwFunc(scene, player1, player2) {
    if (player1.heimdall === true) {
        adversary = player2;
        player = player1;
    } else {
        adversary = player1;
        player = player2;
    }
    heimdallReturn(player);
    
    //dependiendo de por donde viniera el golpe se desplaza hacia un lado u otro
    scene.sound.play('impactSound');
    if (player.x > adversary.x) {
        adversary.throwLeft = true;
    } else {
        adversary.throwRight = true;
    }

    scene.time.delayedCall(5000, stopThrowing, [adversary], null, this);
}

function stopThrowing(adversary) {
    adversary.throwRight = false;
    adversary.throwLeft = false;
}

function heimdallReturn(player) {
    if (player.heimdall === true) { //para que el evento no se active al terminar el tiempo
        player.x = player.lastX;
        player.y = player.lastY;
        player.heimdall = false;
        if (player === player2) {
            camera2.setBounds(0, 0, 7008, 19578);
        } else if (player === player1) {
            camera1.setBounds(-3501, 0, 3501, 19578);
        }
    }
}

function heimdallFunc(scene, player, adversary) {
    if (adversary.tir === false) {
        scene.sound.play('portalSound');
        heimdall = true;
        player.heimdall = true;
        player.lastY = player.y;
        player.lastX = player.x;
        player.y = adversary.y + 500;
        player.x = adversary.x;
        if (player === player1) {
            camera1.setBounds(0, 0, 7008, 19578);
        } else if (player === player2) {
            camera2.setBounds(-3501, 0, 3501, 19578);
        }
        scene.time.delayedCall(10000, heimdallReturn, [player], scene);
    } else {
        scene.sound.play('shieldSound');
        adversary.tir = false;
    }

}

//Funciones del powerup de los ciervos
function ciervosFunc(scene, player, adversary) {
    var nCiervo = Math.floor(Math.random() * 4);
    scene.sound.play('deerSound');
    switch (nCiervo) {
        case 0:
            //Dainn
            player.setMaxVelocity(1100, 5000);
            player.setVelocityY(-4000);
            scene.time.delayedCall(1000, defaultMaxVelocity, [player], null, this);
            break;
        case 1:
            //Dvalinn
            player.setMaxVelocity(1100, 5000);
            player.setVelocityY(-4000);
            adversary.setVelocityY(-4000);
            scene.time.delayedCall(1000, defaultMaxVelocity, [player], null, this);
            break;
        case 2:
            //Duneyrr
            adversary.throwLeft = true;
            scene.time.delayedCall(2000, stopThrowing, [adversary], null, this);
            break;
        case 3:
            //Duraþror
            adversary.throwRight = true;
            scene.time.delayedCall(2000, stopThrowing, [adversary], null, this);
            break;
    }
}

//Runas
function eventHermodr(scene, player) {
    scene.sound.play('runeObtained');
    player.velocidadX += 100;
    scene.time.delayedCall(5000, onHermodrSkadi, [player], scene);
}

function eventSkadi(scene, adversary) {
    scene.sound.play('runeObtained');
    adversary.velocidadX -= 100;
    scene.time.delayedCall(5000, onHermodrSkadi, [adversary], scene);
}

function onHermodrSkadi(adversary) {
    adversary.velocidadX = playerVelocityX;
}

function eventNjord(scene, player) {
    scene.sound.play('runeObtained');
    player.velocidadY += 100;
    scene.time.addEvent({
        delay: 5000,
        callback: onNjord(player),
        callbackScope: scene,
        repeat: 0
    });
}

function onNjord(player) {
    player.velocidadY = playerVelocityY;

}

function eventBragi(scene, player) {
    scene.sound.play('runeObtained');
    player.contStamine += 100;
    scene.time.addEvent({
        delay: 5000,
        callback: onBragi(player),
        callbackScope: scene,
        repeat: 0
    });
}

function onBragi(player) {
    player.contStamine = 100;
}

function eventTir(scene,player){
    scene.sound.play('runeObtained');
    player.tir = true;
}