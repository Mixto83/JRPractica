//jugadores
var player1;
var player2;

//constante global
var playerVelocity = 250;

createPlayers = function (scene) {
    player1 = scene.physics.add.sprite(-1750, 19584, 'aguila');
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
}

addPlayer = function (scene,player) {
    player.setCollideWorldBounds(true);
    player.contSalto = 0;
    player.velocidadX = 250;
    player.velocidadY = 250;
    player.contStamine = 100;
    player.invulnerable = false;
    player.facingRight = true;
    //colisiones
    //redimensiona bounding box y le aplica un offset para ajustar su centro
    player.setSize(70, 121).setOffset(25,0);
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
    player.heimdall = false;
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

updateControls = function (scene,player,adversary) {

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
    if (player.dashPulsada && player.contStamine > 0) {
        if (player.leftPulsada && player.upPulsada) {
            player.setVelocityX(-player.velocidadX - 100);
            player.setVelocityY(-player.velocidadY - 100);
            player.upPulsada = false;
            player.contStamine--;
        } else if (player.leftPulsada && player.downPulsada) {
            player.setVelocityX(-player.velocidadX - 100);
            player.setVelocityY(player.velocidadY + 100);
            player.contStamine--;
        } else if (player.rightPulsada && player.upPulsada) {
            player.setVelocityX(player.velocidadX + 100);
            player.setVelocityY(-player.velocidadY - 100);
            player.upPulsada = false;
            player.contStamine--;
        } else if (player.rightPulsada && player.downPulsada) {
            player.setVelocityX(player.velocidadX + 100);
            player.setVelocityY(player.velocidadY + 100);
            player.contStamine--;
        } else if (player.leftPulsada) {
            player.setVelocityX(-player.velocidadX - 100);
            player.anims.play('run', true);
            player.contStamine--;
            player.leftPulsada = false;
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
        } else if (player.rightPulsada && player.upPulsada) {
            player.setVelocityX(player.velocidadX);
            player.setVelocityY(-player.velocidadY);
            player.upPulsada = false;
        } else if (player.rightPulsada && player.downPulsada) {
            player.setVelocityX(player.velocidadX);
            player.setVelocityY(player.velocidadX);
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
        } else if (player.downPulsada && player.contSalto < 3) {
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
