//jugadores
var player1;
var player2;
var playerVelocityY = 900;
var playerVelocityX = 500;

createPlayers = function (scene) {
    player1 = scene.physics.add.sprite(-1750, 19584, 'aguila');//3552
    player2 = scene.physics.add.sprite(1800, 19584, 'aguila');
    addPlayer(scene, player1);
    addPlayer(scene, player2);
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
    scene.anims.create({
        key: 'idleAir',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 290, end: 297, zeroPad: 4 }),
        frameRate: 12,
        repeat: -1
    });
    scene.anims.create({
        key: 'jump',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 0, end: 23, zeroPad: 4 }),
        frameRate: 24
    });
    scene.anims.create({
        key: 'dashDown',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 152, end: 168, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashDownFall',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 180, end: 189, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashDownDiagonal',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 213, end: 228, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashDownDiagonalFall',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 239, end: 246, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashUp',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 247, end: 266, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashForward',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 90, end: 103, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashForwardHold',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 103, end: 105, zeroPad: 4 }),
        frameRate: 24,
        repeat: -1
    });
    scene.anims.create({
        key: 'dashForwardEnd',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 106, end: 117, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashForwardAir',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 118, end: 125, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashForwardAirHold',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 126, end: 126, zeroPad: 4 }),
        frameRate: 24,
        repeat: -1
    });
    scene.anims.create({
        key: 'dashForwardAirEnd',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 127, end: 136, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'knockback',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 46, end: 52, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'knockbackHold',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 52, end: 52, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'crouch',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 69, end: 71, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'crouchHold',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 72, end: 72, zeroPad: 4 }),
        frameRate: 24,
        repeat: -1
    });
    scene.anims.create({
        key: 'crouchEnd',
        frames: scene.anims.generateFrameNames('aguila', { prefix: 'Aguila instancia 1', start: 73, end: 75, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
}

addPlayer = function (scene, player) {
    player.setCollideWorldBounds(true);
    player.contSalto = 0;
    player.velocidadX = playerVelocityX;
    player.velocidadY = playerVelocityY;
    player.setMaxVelocity(1100, 1100);
    player.velocidadX = 500;
    player.velocidadY = 900;
    player.contStamine = 100;
    player.lastX = 0;
    player.lastY = 0;
    player.invulnerable = false;
    player.facingRight = true;
    player.crouch = false;
    player.dashBool = false;
    player.animEnd = false;
    player.dashId = 0;//indica en que tipo de dash se encuentra el personaje
    //0:sin dash, 1:dash arriba, , 3:de frente
    //4: diagonal abajo, 5:abajo
    player.falling = false;
    //redimensiona bounding box y le aplica un offset para ajustar su centro
    player.setSize(66, 121).setOffset(29, 0);
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

    player.ratatosk = 0;
    player.tir = false;
    player.heimdall = false;

    player.throwRight = false;
    player.throwLeft = false;

    player.ratatoskBool = false;//Esta variable es solo de debug  

    createAnimationEvents(player);
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
    //inputs player 2 (flechas + numpad0)
    player2.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    player2.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    player2.keyUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    player2.keyDown = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    player2.keyDash = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_ZERO);
}

createAnimationEvents = function (player) {
    player.on('animationcomplete', function () {
        if (player.anims.currentAnim.key === 'dashDown') {
            player.dashId = 0;
        }
        if (player.anims.currentAnim.key === 'dashDownDiagonal') {
            player.dashId = 0;
        }
        if (player.anims.currentAnim.key === 'dashDownFall') {
            player.animEnd = false;
        }
        if (player.anims.currentAnim.key === 'dashDownDiagonalFall') {
            player.animEnd = false;
        }
        if (player.anims.currentAnim.key === 'dashUp') {
            player.dashId = 0;
        }
        if (player.anims.currentAnim.key === 'dashForward') {
            player.anims.play('dashForwardHold', true);
        }
        if (player.anims.currentAnim.key === 'dashForwardHold') {
            player.dashId = 0;
        }
        if (player.anims.currentAnim.key === 'dashForwardEnd') {
            player.animEnd = false;
        }
        if (player.anims.currentAnim.key === 'dashForwardAir') {
            player.anims.play('dashForwardAirHold', true);
        }
        if (player.anims.currentAnim.key === 'dashForwardAirHold') {
            player.dashId = 0;
        }
        if (player.anims.currentAnim.key === 'dashForwardAirEnd') {
            player.animEnd = false;
        }
        if (player.anims.currentAnim.key === 'knockback') {
            player.anims.play('knockbackHold',true);
        }
        if (player.anims.currentAnim.key === 'crouch') {
            player.anims.play('crouchHold', true);
        }
        if (player.anims.currentAnim.key === 'crouchHold') {
            player.crouch = false;
        }
        if (player.anims.currentAnim.key === 'crouchEnd') {
            player.animEnd = false;
        }
    });
}
updateAnimation = function (player) {
    if (!player.throwRight && !player.throwLeft) {
        if (player.dashId === 0) {
            if (player.body.velocity.y === -player.velocidadY) {
                player.anims.play('jump', false);
            } else if (player.body.velocity.x === 0 && player.body.blocked.down && !player.animEnd && !player.crouch) {
                player.anims.play('idle', true);
            } else if (!player.body.blocked.down && !player.anims.isPlaying) {
                player.anims.play('idleAir', true);
            } else if (player.body.velocity.x !== 0 && player.body.blocked.down && !player.animEnd) {
                player.anims.play('run', true);
            }else if (player.crouch && player.anims.currentAnim.key !== 'crouchHold'){
                player.anims.play('crouch', true);
                player.anims.stopOnRepeat();
            }
        } else {
            if (player.dashId === 5 && !player.body.blocked.down) {
                player.anims.play('dashDown', true);
                player.anims.stopOnRepeat();
            } else if (player.dashId === 1) {
                player.anims.play('dashUp', true);
                player.anims.stopOnRepeat();
            } else if (player.dashId === 3) {
                if (player.body.blocked.down){
                    if (player.anims.currentAnim.key !== 'dashForwardHold') {
                        player.anims.play('dashForward', true);
                        player.anims.stopOnRepeat();
                    }
                }else{
                    if (player.anims.currentAnim.key !== 'dashForwardAirHold') {
                        player.anims.play('dashForwardAir', true);
                        player.anims.stopOnRepeat();
                    }
                }
                
            }else if (player.dashId === 4 && !player.body.blocked.down) {
                player.anims.play('dashDownDiagonal', true);
                player.anims.stopOnRepeat();
            }
            if (player.anims.currentAnim.key === 'dashDown' && player.body.blocked.down) {
                player.anims.stop();
                player.anims.play('dashDownFall', true);
                player.animEnd = true;
            }
            if (player.anims.currentAnim.key === 'dashDownDiagonal' && player.body.blocked.down) {
                player.anims.stop();
                player.anims.play('dashDownDiagonalFall', true);
                player.animEnd = true;
            }
            if (player.anims.currentAnim.key === 'dashForwardHold' && !player.dashBool) {
                player.anims.stop();
                player.anims.play('dashForwardEnd', true);
                player.animEnd = true;
            }
            if (player.anims.currentAnim.key === 'dashForwardAirHold' && !player.dashBool) {
                player.anims.stop();
                player.anims.play('dashForwardAirEnd', true);
                player.animEnd = true;
            }
            if (player.anims.currentAnim.key === 'crouchHold' && !player.keyDown.isDown) {
                player.anims.stop();
                player.anims.play('crouchEnd', true);
                player.animEnd = true;
            }
        }
    } else {
        if (player.anims.currentAnim.key !== 'knockbackHold') {
        player.anims.play('knockback', true);
        player.anims.stopOnRepeat();
    }
        if (player.throwLeft) {
            player.facingRight = true;
        } else if (player.throwRight) {
            player.facingRight = false;
        }
    }
}
updateControls = function (scene, player, adversary) {

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

    if(player.keyDown.isDown && player.body.blocked.down){
        player.crouch = true;
    }else{
        player.crouch = false;
    }

    //Primero comprueba si el jugador esta siendo lanzado hacia alguno de los lados. De no ser asi, comprueba pulsaciones de botones.
    if (player.throwRight) {
        player.setVelocityX(500);
    } else if (player.throwLeft) {
        player.setVelocityX(-500);
    }
    else if (player.dashPulsada && player.contStamine > 0) {
        if (player.leftPulsada && player.upPulsada) {
            player.setVelocityX(-player.velocidadX - 100);
            player.setVelocityY(-player.velocidadY - 100);
            player.upPulsada = false;
            player.contStamine--;
            player.dashId = 2;
        } else if (player.leftPulsada && player.downPulsada && !player.body.blocked.down) {
            player.setVelocityX(-player.velocidadX - 100);
            player.setVelocityY(500);
            player.contStamine--;
            player.downPulsada = false;
        } else if (player.rightPulsada && player.upPulsada) {
            player.setVelocityX(player.velocidadX + 100);
            player.setVelocityY(-player.velocidadY - 100);
            player.upPulsada = false;
            player.contStamine--;
            player.dashId = 2;
        } else if (player.rightPulsada && player.downPulsada && !player.body.blocked.down) {
            player.setVelocityX(player.velocidadX + 100);
            player.setVelocityY(500);
            player.contStamine--;
            player.downPulsada = false;
        } else if (player.leftPulsada) {
            player.setVelocityX(-player.velocidadX - 100);
            player.contStamine--;
            player.dashId = 3;
        } else if (player.rightPulsada) {
            player.setVelocityX(player.velocidadX + 100);
            player.contStamine--;
            player.dashId = 3;
        } else if (player.upPulsada && player.contSalto < 3) {
            player.setVelocityY(-player.velocidadY - 100);
            player.upPulsada = false;
            player.contStamine--;
            player.dashId = 1;
        } else if (player.downPulsada && player.contSalto < 3 && !player.body.blocked.down) {
            player.setVelocityY(500);
            player.downPulsada = false;
            player.contStamine--;
            player.dashId = 5;
        } else {
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
        } else if (player.leftPulsada && player.downPulsada && !player.body.blocked.down) {
            player.setVelocityX(-player.velocidadX);
            player.setVelocityY(500);
            player.downPulsada = false;
            player.dashId = 4;
        } else if (player.rightPulsada && player.upPulsada) {
            player.setVelocityX(player.velocidadX);
            player.setVelocityY(-player.velocidadY);
            player.upPulsada = false;
        } else if (player.rightPulsada && player.downPulsada && !player.body.blocked.down) {
            player.setVelocityX(player.velocidadX);
            player.setVelocityY(500);
            player.downPulsada = false;
            player.dashId = 4;
        } else if (player.leftPulsada) {
            if (!player.body.blocked.down) {
                player.setVelocityX(-player.velocidadX + 100);
            } else {
                player.setVelocityX(-player.velocidadX);
            }
        } else if (player.rightPulsada) {
            if (!player.body.blocked.down) {
                player.setVelocityX(player.velocidadX - 100);
            } else {
                player.setVelocityX(player.velocidadX);
            }
        } else if (player.upPulsada && player.contSalto < 3) {
            player.setVelocityY(-player.velocidadY);
            player.upPulsada = false;
        } else if (player.downPulsada && !player.body.blocked.down) {
            player.setVelocityY(500);
            player.downPulsada = false;
            player.dashId = 5;
        } else {
            player.setVelocityX(0);
        }
    }
    if (!player.dashPulsada || player.contStamine <= 0) {
        player.dashBool = false;
    } else if (player.dashPulsada && player.contStamine > 0) {
        player.dashBool = true;
    }
    
    //control de las teclas
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
