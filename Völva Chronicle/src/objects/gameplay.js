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
}

addPlayer = function (scene,player) {
    player.setCollideWorldBounds(true);
    player.contSalto = 0;
    player.velocidadX = playerVelocityX;
    player.velocidadY = playerVelocityY;
    player.setMaxVelocity(1100,1100);
    player.velocidadX = 500;
    player.velocidadY = 900;
    player.contStamine = 100;
    player.lastX = 0;
    player.lastY = 0;
    player.invulnerable = false;
    player.facingRight = true;
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

updateAnimation = function (player) {
    if (player.body.velocity.y === -player.velocidadY) {
        player.anims.play('jump', false);
    } else if (player.body.velocity.x === 0 && player.body.blocked.down) {
        player.anims.play('idle', true);
    } else if (!player.body.blocked.down && !player.anims.isPlaying) {
        player.anims.play('idleAir', true);
    } else if (player.body.velocity.x != 0 && player.body.blocked.down) {
        player.anims.play('run', true);
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

    //Primero comprueba si el jugador esta siendo lanzado hacia alguno de los lados. De no ser asi, comprueba pulsaciones de botones.
    if (player.throwRight){
        player.setVelocityX(500);
    }else if(player.throwLeft){
        player.setVelocityX(-500);
    }
    else if (player.dashPulsada && player.contStamine > 0) {
        if (player.leftPulsada && player.upPulsada) {
            player.setVelocityX(-player.velocidadX - 100);
            player.setVelocityY(-player.velocidadY - 100);
            player.upPulsada = false;
            player.contStamine--;
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
        } else if (player.rightPulsada && player.downPulsada && !player.body.blocked.down) {
            player.setVelocityX(player.velocidadX + 100);
            player.setVelocityY(500);
            player.contStamine--;
            player.downPulsada = false;
        } else if (player.leftPulsada) {
            player.setVelocityX(-player.velocidadX - 100);
            player.contStamine--;
        } else if (player.rightPulsada) {
            player.setVelocityX(player.velocidadX + 100);
            player.contStamine--;
        } else if (player.upPulsada && player.contSalto < 3) {
            player.setVelocityY(-player.velocidadY - 100);
            player.upPulsada = false;
            player.contStamine--;
        } else if (player.downPulsada && player.contSalto < 3 && !player.body.blocked.down) {
            player.setVelocityY(500);
            player.downPulsada = false;
            player.contStamine--;
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
        } else if (player.rightPulsada && player.upPulsada) {
            player.setVelocityX(player.velocidadX);
            player.setVelocityY(-player.velocidadY);
            player.upPulsada = false;
        } else if (player.rightPulsada && player.downPulsada && !player.body.blocked.down) {
            player.setVelocityX(player.velocidadX);
            player.setVelocityY(500);
            player.downPulsada = false;
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
        } else {
            player.setVelocityX(0);
        }
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
