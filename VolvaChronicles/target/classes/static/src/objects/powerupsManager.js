var powerups;
var heimdall = false;
var randomNumber;
var jsonReward;

// crea y coloca todos los powerups del nivel 1 en su sitio y les añade las
// colisiones
function createPowerups(scene, nLevel) {
    powerups = scene.physics.add.group();

    // Powerups del nivel 1
    if (nLevel === 1) {

        // Powerups del jugador 1

        var pCiervo = scene.physics.add.sprite(-2050, 2208, 'ciervo');
        pCiervo.id = 0;
        powerups.add(pCiervo, true);

        var pHeimdall = scene.physics.add.sprite(-1200, 2500, 'heimdall');
        pHeimdall.id = 1;
        powerups.add(pHeimdall, true);

        var pBragi = scene.physics.add.sprite(-3120, 10751, 'bragi');
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

        var pHemodr = scene.physics.add.sprite(-419, 16223, 'hemodr');
        pHemodr.id = 5;
        powerups.add(pHemodr, true);

        var pNjord2 = scene.physics.add.sprite(-1204, 13823, 'njord');
        pNjord2.id = 3;
        powerups.add(pNjord2, true);

        var pBragi2 = scene.physics.add.sprite(-2326, 4127, 'bragi');
        pBragi2.id = 2;
        powerups.add(pBragi2, true);

        // Powerups del jugador 2

        var Ciervop = scene.physics.add.sprite(1502, 2208, 'ciervo');
        Ciervop.id = 0;
        powerups.add(Ciervop, true);

        var Heimdallp = scene.physics.add.sprite(2352, 2500, 'heimdall');
        Heimdallp.id = 1;
        powerups.add(Heimdallp, true);

        var Bragip = scene.physics.add.sprite(432, 10751, 'bragi');
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

        var Hemodrp = scene.physics.add.sprite(3133, 16223, 'hemodr');
        Hemodrp.id = 5;
        powerups.add(Hemodrp, true);

        var Njord2p = scene.physics.add.sprite(2348, 13823, 'njord');
        Njord2p.id = 3;
        powerups.add(Njord2p, true);

        var Bragi2p = scene.physics.add.sprite(1226, 4127, 'bragi');
        Bragi2p.id = 2;
        powerups.add(Bragi2p, true);

    }// Nivel 2
    else if (nLevel === 2) {

        // Powerups del jugador 1

        var pHemodr = scene.physics.add.sprite(-1669, 16607, 'hemodr');
        pHemodr.id = 5;
        powerups.add(pHemodr, true);

        var pSkadi = scene.physics.add.sprite(-2880, 16022, 'skadi');
        pSkadi.id = 4;
        powerups.add(pSkadi, true);

        var pNjord = scene.physics.add.sprite(-768, 14390, 'njord');
        pNjord.id = 3;
        powerups.add(pNjord, true);

        var pBragi = scene.physics.add.sprite(-3072, 12854, 'bragi');
        pBragi.id = 2;
        powerups.add(pBragi, true);

        var pRatatosk = scene.physics.add.sprite(-1809, 10857, 'ratatosk');
        pRatatosk.id = 6;
        powerups.add(pRatatosk, true);

        var pHeimdall = scene.physics.add.sprite(-520, 6537, 'heimdall');
        pHeimdall.id = 1;
        powerups.add(pHeimdall, true);

        var pTir = scene.physics.add.sprite(-3072, 6153, 'tir');
        pTir.id = 7;
        powerups.add(pTir, true);

        var pTir2 = scene.physics.add.sprite(-1856, 2697, 'tir');
        pTir2.id = 7;
        powerups.add(pTir2, true);

        var pRatatosk2 = scene.physics.add.sprite(-1856, 2217, 'ratatosk');
        pRatatosk2.id = 6;
        powerups.add(pRatatosk2, true);
        
        var pNjord2 = scene.physics.add.sprite(-3145, 19471, 'njord');
        pNjord2.id = 3;
        powerups.add(pNjord2, true);

        var pTir3 = scene.physics.add.sprite(-1787, 11125, 'tir');
        pTir3.id = 7;
        powerups.add(pTir3, true);

        var pBragi2 = scene.physics.add.sprite(-1089, 7381, 'bragi');
        pBragi2.id = 2;
        powerups.add(pBragi2, true);

        var pNjord3 = scene.physics.add.sprite(-2983, 4021, 'njord');
        pNjord3.id = 3;
        powerups.add(pNjord3, true);

        // Powerups del jugador 2

        var Hemodrp = scene.physics.add.sprite(1881, 16607, 'hemodr');
        Hemodrp.id = 5;
        powerups.add(Hemodrp, true);

        var Skadip = scene.physics.add.sprite(670, 16022, 'skadi');
        Skadip.id = 4;
        powerups.add(Skadip, true);

        var Njordp = scene.physics.add.sprite(2784, 14390, 'njord');
        Njordp.id = 3;
        powerups.add(Njordp, true);

        var Bragip = scene.physics.add.sprite(480, 12854, 'bragi');
        Bragip.id = 2;
        powerups.add(Bragip, true);

        var Ratatoskp = scene.physics.add.sprite(1728, 10857, 'ratatosk');
        Ratatoskp.id = 6;
        powerups.add(Ratatoskp, true);

        var Heimdallp = scene.physics.add.sprite(3072, 6537, 'heimdall');
        Heimdallp.id = 1;
        powerups.add(Heimdallp, true);

        var Tirp = scene.physics.add.sprite(480, 6123, 'tir');
        Tirp.id = 7;
        powerups.add(Tirp, true);

        var Tir2p = scene.physics.add.sprite(1728, 2697, 'tir');
        Tir2p.id = 7;
        powerups.add(Tir2p, true);

        var Ratatosk2p = scene.physics.add.sprite(1728, 2217, 'ratatosk');
        Ratatosk2p.id = 6;
        powerups.add(Ratatosk2p, true);
        
        var Njord2p = scene.physics.add.sprite(407, 19471, 'njord');
        Njord2p.id = 3;
        powerups.add(Njord2p, true);

        var Tir3p = scene.physics.add.sprite(1745, 11125, 'tir');
        Tir3p.id = 7;
        powerups.add(Tir3p, true);

        var Bragi2p = scene.physics.add.sprite(2463, 7381, 'bragi');
        Bragi2p.id = 2;
        powerups.add(Bragi2p, true);

        var Njord3p = scene.physics.add.sprite(569, 4021, 'njord');
        Njord3p.id = 3;
        powerups.add(Njord3p, true);

    }// Nivel 3
    else if (nLevel === 3) {

        // Powerups del jugador 1

        var pCiervo = scene.physics.add.sprite(-2200, 16905, 'ciervo');
        pCiervo.id = 0;
        powerups.add(pCiervo, true);

        var pHemodr = scene.physics.add.sprite(-384, 16598, 'hemodr');
        pHemodr.id = 5;
        powerups.add(pHemodr, true);

        var pSkadi = scene.physics.add.sprite(-3015, 16233, 'skadi');
        pSkadi.id = 4;
        powerups.add(pSkadi, true);

        var pRatatosk = scene.physics.add.sprite(-1540, 15273, 'ratatosk');
        pRatatosk.id = 6;
        powerups.add(pRatatosk, true);

        var pHeimdall = scene.physics.add.sprite(-480, 12854, 'heimdall');
        pHeimdall.id = 1;
        powerups.add(pHeimdall, true);

        var pTir = scene.physics.add.sprite(-3072, 12556, 'tir');
        pTir.id = 7;
        powerups.add(pTir, true);

        var pNjord = scene.physics.add.sprite(-364, 12297, 'njord');
        pNjord.id = 3;
        powerups.add(pNjord, true);

        var pBragi = scene.physics.add.sprite(-1445, 10473, 'bragi');
        pBragi.id = 2;
        powerups.add(pBragi, true);

        var pHemodr2 = scene.physics.add.sprite(-3068, 8073, 'hemodr');
        pHemodr2.id = 5;
        powerups.add(pHemodr2, true);

        var pRatatosk2 = scene.physics.add.sprite(-3169, 6921, 'ratatosk');
        pRatatosk2.id = 6;
        powerups.add(pRatatosk2, true);

        var pNjord2 = scene.physics.add.sprite(-480, 6249, 'njord');
        pNjord2.id = 3;
        powerups.add(pNjord2, true);

        var pSkadi2 = scene.physics.add.sprite(-2121, 5577, 'skadi');
        pSkadi2.id = 4;
        powerups.add(pSkadi2, true);

        var pBragi2 = scene.physics.add.sprite(-2880, 2678, 'bragi');
        pBragi2.id = 2;
        powerups.add(pBragi2, true);

        var pCiervo2 = scene.physics.add.sprite(-1135, 3273, 'ciervo');
        pCiervo2.id = 0;
        powerups.add(pCiervo2, true);

        var pHemodr3 = scene.physics.add.sprite(-1637, 2025, 'hemodr');
        pHemodr3.id = 5;
        powerups.add(pHemodr3, true);

        var pBragi3 = scene.physics.add.sprite(-3090, 19093, 'bragi');
        pBragi3.id = 2;
        powerups.add(pBragi3, true);

        var pNjord3 = scene.physics.add.sprite(-406, 19093, 'njord');
        pNjord3.id = 3;
        powerups.add(pNjord3, true);

        var pTir2 = scene.physics.add.sprite(-2780, 18325, 'tir');
        pTir2.id = 7;
        powerups.add(pTir2, true);

        var pHemodr4 = scene.physics.add.sprite(-582, 13525, 'hemodr');
        pHemodr4.id = 5;
        powerups.add(pHemodr4, true);

        var pSkadi3 = scene.physics.add.sprite(-3178, 12277, 'skadi');
        pSkadi3.id = 4;
        powerups.add(pSkadi3, true);

        var pHemodr5 = scene.physics.add.sprite(-1521, 5557, 'hemodr');
        pHemodr5.id = 5;
        powerups.add(pHemodr5, true);

        var pNjord4 = scene.physics.add.sprite(-2054, 1717, 'njord');
        pNjord4.id = 3;
        powerups.add(pNjord4, true);

        var pBragi4 = scene.physics.add.sprite(-3178, 2581, 'bragi');
        pBragi4.id = 2;
        powerups.add(pBragi4, true);

        // Powerups del jugador 2

        var Ciervop = scene.physics.add.sprite(1350, 16905, 'ciervo');
        Ciervop.id = 0;
        powerups.add(Ciervop, true);

        var Hemodrp = scene.physics.add.sprite(3166, 16598, 'hemodr');
        Hemodrp.id = 5;
        powerups.add(Hemodrp, true);

        var Skadip = scene.physics.add.sprite(535, 16233, 'skadi');
        Skadip.id = 4;
        powerups.add(Skadip, true);

        var Ratatoskp = scene.physics.add.sprite(2010, 15273, 'ratatosk');
        Ratatoskp.id = 6;
        powerups.add(Ratatoskp, true);

        var Heimdallp = scene.physics.add.sprite(3070, 12854, 'heimdall');
        Heimdallp.id = 1;
        powerups.add(Heimdallp, true);

        var Tirp = scene.physics.add.sprite(478, 12566, 'tir');
        Tirp.id = 7;
        powerups.add(Tirp, true);

        var Njordp = scene.physics.add.sprite(3186, 12297, 'njord');
        Njordp.id = 3;
        powerups.add(Njordp, true);

        var Bragip = scene.physics.add.sprite(2107, 10473, 'bragi');
        Bragip.id = 2;
        powerups.add(Bragip, true);

        var Hemodr2p = scene.physics.add.sprite(484, 8073, 'hemodr');
        Hemodr2p.id = 5;
        powerups.add(Hemodr2p, true);

        var Ratatosk2p = scene.physics.add.sprite(381, 6921, 'ratatosk');
        Ratatosk2p.id = 6;
        powerups.add(Ratatosk2p, true);

        var Njord2p = scene.physics.add.sprite(3072, 6249, 'njord');
        Njord2p.id = 3;
        powerups.add(Njord2p, true);

        var Skadi2p = scene.physics.add.sprite(1431, 5577, 'skadi');
        Skadi2p.id = 4;
        powerups.add(Skadi2p, true);

        var Bragi2p = scene.physics.add.sprite(670, 2678, 'bragi');
        Bragi2p.id = 2;
        powerups.add(Bragi2p, true);

        var Ciervo2p = scene.physics.add.sprite(2415, 3273, 'ciervo');
        Ciervo2p.id = 0;
        powerups.add(Ciervo2p, true);

        var Hemodr3p = scene.physics.add.sprite(1913, 2025, 'hemodr');
        Hemodr3p.id = 5;
        powerups.add(Hemodr3p, true);

        var Bragi3p = scene.physics.add.sprite(462, 19093, 'bragi');
        Bragi3p.id = 2;
        powerups.add(Bragi3p, true);

        var Njord3p = scene.physics.add.sprite(3146, 19093, 'njord');
        Njord3p.id = 3;
        powerups.add(Njord3p, true);

        var Tir2p = scene.physics.add.sprite(772, 18325, 'tir');
        Tir2p.id = 7;
        powerups.add(Tir2p, true);

        var Hemodr4p = scene.physics.add.sprite(2970, 13525, 'hemodr');
        Hemodr4p.id = 5;
        powerups.add(Hemodr4p, true);

        var Skadi3p = scene.physics.add.sprite(374, 12277, 'skadi');
        Skadi3p.id = 4;
        powerups.add(Skadi3p, true);

        var Hemodr5p = scene.physics.add.sprite(2031, 5557, 'hemodr');
        Hemodr5p.id = 5;
        powerups.add(Hemodr5p, true);

        var Njord4p = scene.physics.add.sprite(1498, 1717, 'njord');
        Njord4p.id = 3;
        powerups.add(Njord4p, true);

        var Bragi4p = scene.physics.add.sprite(374, 2581, 'bragi');
        Bragi4p.id = 2;
        powerups.add(Bragi4p, true);
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

// Desactiva el powerup obtenido y llama a la función correspondiente
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
        eventHermodr(scene, player);
    } else if (powerups.id === 6) {
        ratatoskFunc(scene, player, adversary);
    } else if (powerups.id === 7) {
        eventTir(scene, player);
    }
}

// Funciones del PowerUp de Ratatosk
function reverseRatatosk(scene, player, adversary) {
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
// Funciones del Power Up de Heimdall
function throwFunc(scene, player1, player2) {
    if (player1.heimdall === true) {
        adversary = player2;
        player = player1;
    } else {
        adversary = player1;
        player = player2;
    }
    heimdallReturn(player);

    // dependiendo de por donde viniera el golpe se desplaza hacia un lado u
    // otro
    scene.sound.play('impactSound');
    if (player.x > adversary.x) {
        adversary.throwLeft = true;
    } else {
        adversary.throwRight = true;
    }

    scene.time.delayedCall(5000, stopThrowing, [adversary], null, this);
}

//Detiene el lanzamiento del adversario
function stopThrowing(adversary) {
    adversary.throwRight = false;
    adversary.throwLeft = false;
}

//Devuelve al jugador a su pantalla
function heimdallReturn(player) {
    if (player.heimdall === true) {
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
        player.y = adversary.y - 500;
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

// Funciones del powerup de los ciervos
function ciervosFunc(scene, player, adversary) {
    var nCiervo = Math.floor(Math.random() * 4);
    scene.sound.play('deerSound');
    switch (nCiervo) {
        case 0:
            // Dainn
            player.setMaxVelocity(1100, 5000);
            player.setVelocityY(-4000);
            scene.time.delayedCall(1000, defaultMaxVelocity, [player], null, this);
            break;
        case 1:
            // Dvalinn
            player.setMaxVelocity(1100, 5000);
            player.setVelocityY(-4000);
            adversary.setVelocityY(-4000);
            scene.time.delayedCall(1000, defaultMaxVelocity, [player], null, this);
            break;
        case 2:
            // Duneyrr
            adversary.throwLeft = true;
            scene.time.delayedCall(2000, stopThrowing, [adversary], null, this);
            break;
        case 3:
            // Duraþror
            adversary.throwRight = true;
            scene.time.delayedCall(2000, stopThrowing, [adversary], null, this);
            break;
    }
}

// Runas
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
    scene.time.delayedCall(5000, onNjord, [player], scene);
}

function onNjord(player) {
    player.velocidadY = playerVelocityY;

}

function eventBragi(scene, player) {
    scene.sound.play('runeObtained');
    player.contStamine += 100;
    scene.time.delayedCall(5000, onBragi, [player], scene);
}

function onBragi(player) {
    player.contStamine = 100;
}

function eventTir(scene, player) {
    scene.sound.play('runeObtained');
    player.tir = true;
}

//Si el jugador que ha ganado es el jugador local, calcula una recompensa aleatoria y la sube al servidor
//Si el jugador que ha ganado es el contrincante, descarga la informacion de la recompensa aleatoria
//Si se esta jugando offline, se calcula la recompensa
randomReward = function (scene) {
    if (player1.win) {
        if (!isOnline || (isOnline && idJugador === 0)) {
            randomNumber = Phaser.Math.Between(1, 5);
            if (randomNumber === 1) {
                rewardRune = 'hemodr';
            } else if (randomNumber === 2) {
                rewardRune = 'njord';
            } else if (randomNumber === 3) {
                rewardRune = 'skadi';
            } else if (randomNumber === 4) {
                rewardRune = 'tir';
            } else {
                rewardRune = 'bragi';
            }
            createRewardText(scene, 'El Águila', player1);
            if (isOnline) {
                //Sube la info de la recompensa que ha ganado el jugador 1
                metodo = "updatePlayer";
                jsonReward = {
                    "metodo": metodo,
                    "id": idJugadorEnServer,
                    "idOpponent": idOponente,
                    "sync": imReady,
                    "estado": 0,
                    "downPulsada": false,
                    "downToque": false,
                    "upPulsada": false,
                    "upToque": false,
                    "leftPulsada": false,
                    "rightPulsada": false,
                    "dashPulsada": false,
                    "velocidadX": 0.0,
                    "velocidadY": 0.0,
                    "posX": 0.0,
                    "posY": 0.0,
                    "contStamine": 0,
                    "contSalto": 0,
                    "throwRight": false,
                    "throwLeft": false,
                    "facingRight": true,
                    "dashId": -1,
                    "dashBool": false,
                    "ratatosk": -1,
                    "tir": false,
                    "heimdall": false,
                    "reward": rewardRune
                };
                if (wsReward.readyState === wsReward.OPEN) {
                    wsReward.send(JSON.stringify(jsonReward));
                }
            }
        } else if (isOnline && idJugador === 1) {
            metodo = "getReward";
            jsonReward = {
                "metodo": metodo,
                "id": idJugadorEnServer,
                "idOpponent": idOponente,
            }
            if (wsReward.readyState === wsReward.OPEN) {
                scene.time.delayedCall(100, function () {
                    wsReward.send(JSON.stringify(jsonReward));
                });
            }
        }
    } else if (player2.win) {
        if (!isOnline || (isOnline && idJugador === 1)) {
            randomNumber = Phaser.Math.Between(1, 5);
            if (randomNumber === 1) {
                rewardRune = 'hemodr';
            } else if (randomNumber === 2) {
                rewardRune = 'njord';
            } else if (randomNumber === 3) {
                rewardRune = 'skadi';
            } else if (randomNumber === 4) {
                rewardRune = 'tir';
            } else {
                rewardRune = 'bragi';
            }
            createRewardText(scene, 'Nidhogg', player2);
            if (isOnline) {
                //Sube la recompensa del jugador2
                metodo = "updatePlayer";
                jsonReward = {
                    "metodo": metodo,
                    "id": idJugadorEnServer,
                    "idOpponent": idOponente,
                    "sync": imReady,
                    "estado": 0,
                    "downPulsada": false,
                    "downToque": false,
                    "upPulsada": false,
                    "upToque": false,
                    "leftPulsada": false,
                    "rightPulsada": false,
                    "dashPulsada": false,
                    "velocidadX": 0.0,
                    "velocidadY": 0.0,
                    "posX": 0.0,
                    "posY": 0.0,
                    "contStamine": 0,
                    "contSalto": 0,
                    "throwRight": false,
                    "throwLeft": false,
                    "facingRight": true,
                    "dashId": -1,
                    "dashBool": false,
                    "ratatosk": -1,
                    "tir": false,
                    "heimdall": false,
                    "reward": rewardRune
                };
                if (wsReward.readyState === wsReward.OPEN) {
                    wsReward.send(JSON.stringify(jsonReward));
                }
                //uploadReward(player2, idJugador);
            }
        } else if (isOnline && idJugador === 0) {
            metodo = "getReward";
            jsonReward = {
                "metodo": metodo,
                "id": idJugadorEnServer,
                "idOpponent": idOponente,
            }
            if (wsReward.readyState === wsReward.OPEN) {
                scene.time.delayedCall(100, function () {
                    wsReward.send(JSON.stringify(jsonReward));
                });
            }
        }
    }
}

// Escoge un powerup para el jugador en funcion del número aleatorio calculado en randomReward
function chooseReward(scene, player) {
    if (rewardRune === 'hemodr') {
        eventHermodr(scene, player);
    } else if (rewardRune === 'njord') {
        eventNjord(scene, player);
    } else if (rewardRune === 'skadi') {
        eventSkadi(scene, adversary);
    } else if (rewardRune === 'tir') {
        player.tir = true;
    } else if (rewardRune === 'bragi') {
        eventBragi(scene, player);
    }
    rewardRune = "";
}