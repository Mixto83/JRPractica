//jugadores
var player1;
var player2;

//constantes globales

//Variables globales de control
var ciervosBool = false;
var heimdall = false;

createPlayers = function (scene) {
    player1 = scene.physics.add.sprite(-1750, 19584, 'aguila');
    player2 = scene.physics.add.sprite(1800, 19584, 'aguila');
    addPlayer(scene, player1, powerups);
    addPlayer(scene, player2, powerups);
    //animaciones (se pasaran a addPlayer cuando se implementen las del dragon)
    scene.anims.create({
        key: 'run',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 27, end: 45, zeroPad: 4 }),
        frameRate: 24,
        repeat: -1
    });
    scene.anims.create({
        key: 'idle',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 137, end: 151, zeroPad: 4 }),
        frameRate: 12,
        repeat: -1
    });
}

addPlayer = function (scene,player, powerups) {
    player.setCollideWorldBounds(true);
    player.contSalto = 0;
    player.velocidadX = 320;
    player.velocidadY = 710;
    player.contStamine = 100;
    player.invulnerable = false;
    player.facingRight = true;
    //redimensiona bounding box y le aplica un offset para ajustar su centro
    player.setSize(60, 121).setOffset(27,0);
    //colisiones
    scene.physics.add.collider(player, layer);
    //atributos referentes a controles
    player.downPulsada = false;
    player.downToque = false;
    player.upPulsada = false;
    player.upToque = false;
    player.leftPulsada = false;
    player.rightPulsada = false;
    player.dashPulsada = false;

    player.hermodr = false;
    player.njord = false;
    player.skadi = false;
    player.tir = false;
    player.bragi = false;
    player.ratatosk = 0;
    player.ciervos = 0;

    player.throwRight = false;
    player.throwLeft = false;

    player.ratatoskBool = false;//Esta variable es solo de debug
    
    //crea las colisiones entre os powerups y s j
    scene.physics.add.overlap(player, powerups, powerupsFunc, null, this);
}

function powerupsFunc(player, powerups) {
    powerups.disableBody(true, true);
}

createInputs = function (scene) {
    //  Input Events
    cursors = scene.input.keyboard.createCursorKeys();
    //inputs player 1 (WASD+B)
    player1.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    player1.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    player1.keyUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    player1.keyDown = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    player1.keyDash = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    //Controles Debug P1
    player1.keyTest = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    player1.keyTest2 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    player1.keyTest3 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    player1.keyTest4 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
    //inputs player 2 (flechas + numpad0)
    player2.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    player2.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    player2.keyUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    player2.keyDown = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    player2.keyDash = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_ZERO);
    //Controles Debug P2
    player2.keyTest = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    player2.keyTest2 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    player2.keyTest3 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    player2.keyTest4 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
}

//Funciones del PowerUp de Ratatosk
reverseRatatosk = function (scene,player,adversary){
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

ratatoskFunc = function(scene, player, adversary){
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

//TODA ESTA PARTE SE MOVERA A UN NUEVO OBJETO
//Funciones del Power Up de Heimdall
throwFunc = function (scene, player, adversary){
    //Funcion Incompleta. Esta funcion debe cambiar a true el boolean correspondiente a la direccion en la que se quiera lanzar.
    //Hay que hacer tambien que se llame a stopThrowing cuando choque con el layer.
    adversary.throwRight = true;
    //adversary.setVelocityX(1000);
    //console.log('throwFunc');
    //scene.time.delayedCall(4000, stopThrowing, [adversary], null, this);
}

stopThrowing = function(adversary){
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

heimdallFunc = function (scene, player, adversary){
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
ciervosFunc = function(scene, player, adversary){
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
//HASTA AQUI

updateControls = function (scene,player,adversary) {
    //CONTROLES DE DEBUG
    if(player.keyTest.isDown && !player.ratatoskBool){
        ratatoskFunc(scene, player, adversary);
    }

    if(player.keyTest2.isDown && !heimdall){
        heimdallFunc(scene,player,adversary);
    }

    if(player.keyTest3.isDown && !ciervosBool){
        ciervosFunc(scene,player,adversary);
    }

    if(player.keyTest4.isDown){
        stopThrowing(adversary);
    }
    //HASTA AQUI

    if (player.hermodr) {
        player.velocidadX += 100;
        player.hermodr = false;
        eventHermodrSkadi(scene, player, playerVelocity);
    }

    if (player.njord) {
        player.velocidadY += 100;
        player.njord = false;
        eventNjord(scene, player, playerVelocity)
    }

    if (player.skadi) {
        adversary.velocidadX -= 50;
        player.skadi = false;
        eventHermodrSkadi(scene, adversary, playerVelocity);
    }

    if (player.tir) {
        player.tir = false;
        player.invulnerable = true;
    }

    if (player.bragi) {
        player.bragi = false;
        player.contStamine += 100;
        eventBragi(scene, player);
    }

    if (player.keyLeft.isDown) {
        player.leftPulsada = true;
        player.facingRight = false;
    }
    if (player.keyDown.isDown && !player.downToque && player.contSalto < 2) {
        player.downPulsada = true;
        player.downToque = true;
        player.contSalto++;
    }
    if (player.keyRight.isDown) {
        player.rightPulsada = true;
        player.facingRight = true;
    }
    if (player.keyUp.isDown && !player.upToque && player.contSalto < 2) {
        player.upPulsada = true;
        player.upToque = true;
        player.contSalto++;
    }
    if (player.keyDash.isDown) {
        player.dashPulsada = true;
    }

    //Primero comprueba si el jugador esta siendo lanzado hacia alguno de los lados. De no ser asi, comprueba pulsaciones de botones.
    if (player.throwRight){
        player.setVelocityX(500);
    }else if(player.throwLeft){
        player.setVelocityX(-500);
    }else if (player.dashPulsada && player.contStamine > 0) {
        if (player.leftPulsada && player.upPulsada) {
            player.setVelocityX(-player.velocidadX - 100);
            player.setVelocityY(-player.velocidadY - 100);
            player.upPulsada = false;
            player.contStamine--;
        } else if (player.leftPulsada && player.downPulsada) {
            player.setVelocityX(-player.velocidadX - 100);
            player.setVelocityY(player.velocidadY + 100);
            player.contStamine--;
            player.downPulsada = false;
        } else if (player.rightPulsada && player.upPulsada) {
            player.setVelocityX(player.velocidadX + 100);
            player.setVelocityY(-player.velocidadY - 100);
            player.upPulsada = false;
            player.contStamine--;
        } else if (player.rightPulsada && player.downPulsada) {
            player.setVelocityX(player.velocidadX + 100);
            player.setVelocityY(player.velocidadY + 100);
            player.contStamine--;
            player.downPulsada = false;
        } else if (player.leftPulsada) {
            player.setVelocityX(-player.velocidadX - 100);
            player.anims.play('run', true);
            player.contStamine--;
        } else if (player.rightPulsada) {
            player.setVelocityX(350);
            player.anims.play('run', true);
            player.contStamine--;
        } else if (player.upPulsada && player.contSalto < 3) {
            player.setVelocityY(-player.velocidadY - 100);
            player.upPulsada = false;
            player.contStamine--;
        } else if (player.downPulsada && player.contSalto < 3) {
            player.setVelocityY(player.velocidadY + 100);
            player.downPulsada = false;
            player.contStamine--;
        } else {
            player.anims.play('idle', true);
            player.setVelocityX(0);
            if (player.getVelocityY < 0 && player.upPulsada) {
                player.setVelocityY(0);
            }
        }
    } else {
        if (player.leftPulsada && player.upPulsada) {
            player.setVelocityX(-player.velocidadX);
            player.setVelocityY(-player.velocidadY);
            player.upPulsada = false;
        } else if (player.leftPulsada && player.downPulsada) {
            player.setVelocityX(-player.velocidadX);
            player.setVelocityY(player.velocidadY);
            player.downPulsada = false;
        } else if (player.rightPulsada && player.upPulsada) {
            player.setVelocityX(player.velocidadX);
            player.setVelocityY(-player.velocidadY);
            player.upPulsada = false;
        } else if (player.rightPulsada && player.downPulsada) {
            player.setVelocityX(player.velocidadX);
            player.setVelocityY(player.velocidadY);
            player.downPulsada = false;
        } else if (player.leftPulsada) {
            if (!player.body.touching.down) {
                player.setVelocityX(-player.velocidadX + 100);
                player.anims.play('run', true);
            } else {
                player.setVelocityX(-player.velocidadX);
                player.anims.play('run', true);
            }
        } else if (player.rightPulsada) {
            if (!player.body.touching.down) {
                player.setVelocityX(player.velocidadX - 100);
                player.anims.play('run', true);
            } else {
                player.setVelocityX(player.velocidadX);
                player.anims.play('run', true);
            }
        } else if (player.upPulsada && player.contSalto < 3) {
            player.setVelocityY(-player.velocidadY);
            player.upPulsada = false;
        } else if (player.downPulsada) {
            player.setVelocityY(player.velocidadY);
            player.downPulsada = false;
        } else {
            player.anims.play('idle', true);
            player.setVelocityX(0);
        }
    }
    player.leftPulsada = false;
    player.rightPulsada = false;
    player.dashPulsada = false;
    if (!player.keyUp.isDown) {
        player.upToque = false;
    }


    if (!player.keyDown.isDown) {
        player.downToque = false;
    }
    if (!player.keyDash.isDown && player.contStamine < 100) {
        player.contStamine++;
    }
    if (player.body.blocked.down) {
        player.contSalto = 0;
    }

    //Gira el sprite del personaje en la dirección a la que está mirando
    if (player.facingRight) {
        player.flipX = false;
    } else {
        player.flipX = true;
    }
}
