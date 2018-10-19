//variables para el jugador 1
var player;
var playerVelocity = 250;
var sPulsada = false;
var sToque = false;
var wPulsada = false;
var wToque = false;
var aPulsada = false;
var dPulsada = false;
var bPulsada = false;
var facingRight1 = true;

//variables para los powerups del jugador 1
var hermodr = false;
var njord = false;
var skadi = false;
var tir = false;
var bragi = false;
var ratatosk = 0; //poner a cero al terminar el nivel
var ciervos = 0;//poner a cero al terminar el nivel
var heimdall = false;

var player2;
var downPulsada = false;
var downToque = false;
var upPulsada = false;
var upToque = false;
var leftPulsada = false;
var rightPulsada = false;
var zeroPulsada = false;
var contStamine2 = 100;
var facingRight2 = true;


createPlayer = function (scene) {
    player = scene.physics.add.sprite(-1750, 19584, 'aguila');
    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.1);
    player.setCollideWorldBounds(true); 
    player.contSalto = 0;
    player.velocidadX = 250;
    player.velocidadY = 250;
    player.contStamine = 100;
    player.invulnerable = false;
    
    player2 = scene.physics.add.sprite(1800, 19584, 'dude');
    //  Player physics properties. Give the little guy a slight bounce.
    player2.setBounce(0.1);
    player2.setCollideWorldBounds(true); 
    player2.contSalto = 0;
    
    //  Our player animations, turning, walking left and walking right.
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

createExtras = function (scene) {
    //  Input Events
    cursors = scene.input.keyboard.createCursorKeys();
    //  Collide the player and the stars with the platforms
    scene.physics.add.collider(player, layer);
    scene.physics.add.collider(player2, layer);
    
    scene.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    scene.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    scene.keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    scene.keyS = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    scene.keyB = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    scene.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    scene.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    scene.keyUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    scene.keyDown = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    scene.keyZero = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_ZERO);
}

updateControls = function (scene) {
    
    if (hermodr) {
        player.velocidadX += 100;
        hermodr = false;
        eventHermodrSkadi(scene, player, playerVelocity);
    }
    
    if (njord) {
        player.velocidadY += 100;
        njord = false;
        eventNjord(scene,player, playerVelocity)
    }
    
    if (skadi) {
        player2.velocidadX -= 50;
        skadi = false;
        eventHermodrSkadi(scene,player2, playerVelocity);
    }
    
    if (tir) {
        tir = false;
        player.invulnerable = true;
    }
    
    if (bragi) {
        bragi = false;
        player.contStamine += 100;
        eventBragi(scene,player);
    }
    
    
    if (scene.keyA.isDown) {
        aPulsada = true;
        facingRight1 = false;
    }
    if (scene.keyS.isDown && !sToque && player.contSalto < 2) {
        sPulsada = true;
        sToque = true;
        player.contSalto++;
    }
    if (scene.keyD.isDown) {
        dPulsada = true;
        facingRight1 = true;
    }
    if (scene.keyW.isDown && !wToque && player.contSalto < 2) {
        wPulsada = true;
        wToque = true;
        player.contSalto++;
    }
    if (scene.keyB.isDown) {
        bPulsada = true;
    }
    if (bPulsada && player.contStamine > 0) {
        if (aPulsada && wPulsada) {
            player.setVelocityX(-player.velocidadX-100);
            player.setVelocityY(-player.velocidadY-100);
            wPulsada = false;
            player.contStamine--;
        } else if (aPulsada && sPulsada) {
            player.setVelocityX(-player.velocidadX-100);
            player.setVelocityY(player.velocidadY+100);
            player.contStamine--;
        } else if (dPulsada && wPulsada) {
            player.setVelocityX(player.velocidadX+100);
            player.setVelocityY(-player.velocidadY-100);
            wPulsada = false;
            player.contStamine--;
        } else if (dPulsada && sPulsada) {
            player.setVelocityX(player.velocidadX+100);
            player.setVelocityY(player.velocidadY+100);
            player.contStamine--;
        } else if (aPulsada) {
            player.setVelocityX(-player.velocidadX-100);
            player.anims.play('run', true);
            player.contStamine--;
            aPulsada = false;
        } else if (dPulsada) {
            player.setVelocityX(350);
            player.anims.play('run', true);
            player.contStamine--;
        } else if (wPulsada && player.contSalto < 3) {
            player.setVelocityY(-player.velocidadY-100);
            wPulsada = false;
            player.contStamine--;
        } else if (sPulsada && player.contSalto < 3) {
            player.setVelocityY(player.velocidadY+100);
            sPulsada = false;
            player.contStamine--;
        } else {
            player.anims.play('idle', true);
            player.setVelocityX(0);
            if (player.getVelocityY < 0 && wPulsada) {
                player.setVelocityY(0);
            }
        }
    } else {
        if (aPulsada && wPulsada) {
            player.setVelocityX(-player.velocidadX);
            player.setVelocityY(-player.velocidadY);
            wPulsada = false;
        } else if (aPulsada && sPulsada) {
            player.setVelocityX(-player.velocidadX);
            player.setVelocityY(player.velocidadY);
        } else if (dPulsada && wPulsada) {
            player.setVelocityX(player.velocidadX);
            player.setVelocityY(-player.velocidadY);
            wPulsada = false;
        } else if (dPulsada && sPulsada) {
            player.setVelocityX(player.velocidadX);
            player.setVelocityY(player.velocidadX);
        } else if (aPulsada) {
            if (!player.body.touching.down) {
                player.setVelocityX(-player.velocidadX+100);
                player.anims.play('run', true);
            } else {
                player.setVelocityX(-player.velocidadX);
                player.anims.play('run', true);
            }
        } else if (dPulsada) {
            if (!player.body.touching.down) {
                player.setVelocityX(player.velocidadX-100);
                player.anims.play('run', true);
            } else {
                player.setVelocityX(player.velocidadX);
                player.anims.play('run', true);
            }
        } else if (wPulsada && player.contSalto < 3) {
            player.setVelocityY(-player.velocidadY);
            wPulsada = false;
        } else if (sPulsada && player.contSalto < 3) {
            player.setVelocityY(player.velocidadY);
            sPulsada = false;
        } else {
            player.anims.play('idle', true);
            player.setVelocityX(0);
        }
    }
    aPulsada = false;
    dPulsada = false;
    bPulsada = false;
    if (!scene.keyW.isDown) {
        wToque = false;
    }


    if (!scene.keyS.isDown) {
        sToque = false;
    }
    if (!scene.keyB.isDown && player.contStamine < 100) {
        player.contStamine++;
    }
    if (player.body.blocked.down) {
        player.contSalto = 0;
    }

    //Gira el sprite del personaje en la dirección a la que está mirando
    if (facingRight1) {
        player.flipX = false;
    } else {
        player.flipX = true;
    }
    
    //Player2
    if (scene.keyLeft.isDown) {
        leftPulsada = true;
        facingRight2 = false;
    }
    if (scene.keyDown.isDown && !downToque && player2.contSalto < 2) {
        downPulsada = true;
        downToque = true;
        player2.contSalto++;
    }
    if (scene.keyRight.isDown) {
        rightPulsada = true;
        facingRight2 = true;
    }
    if (scene.keyUp.isDown && !upToque && player2.contSalto < 2) {
        upPulsada = true;
        upToque = true;
        player2.contSalto++;
    }
    if (scene.keyZero.isDown) {
        zeroPulsada = true;
    }
    if (zeroPulsada && contStamine2 > 0) {
        if (leftPulsada && upPulsada) {
            player2.setVelocityX(-350);
            player2.setVelocityY(-350);
            upPulsada = false;
            contStamine2--;
        } else if (leftPulsada && downPulsada) {
            player2.setVelocityX(-350);
            player2.setVelocityY(350);
            contStamine2--;
        } else if (rightPulsada && upPulsada) {
            player2.setVelocityX(350);
            player2.setVelocityY(-350);
            upPulsada = false;
            contStamine2--;
        } else if (rightPulsada && downPulsada) {
            player2.setVelocityX(350);
            player2.setVelocityY(350);
            contStamine2--;
        } else if (leftPulsada) {
            player2.setVelocityX(-350);
            player2.anims.play('run', true);
            contStamine2--;
            leftPulsada = false;
        } else if (rightPulsada) {
            player2.setVelocityX(350);
            player2.anims.play('run', true);
            contStamine2--;
        } else if (upPulsada && player2.contSalto < 3) {
            player2.setVelocityY(-350);
            upPulsada = false;
            contStamine2--;
        } else if (downPulsada && player2.contSalto < 3) {
            player2.setVelocityY(350);
            downPulsada = false;
            contStamine2--;
        } else {
            player2.anims.play('idle', true);
            player2.setVelocityX(0);
            if (player2.getVelocitY < 0 && upPulsada) {
                player2.setVelocityY(0);
            }
        }
    } else {
        if (leftPulsada && upPulsada) {
            player2.setVelocityX(-250);
            player2.setVelocityY(-250);
            upPulsada = false;
        } else if (leftPulsada && downPulsada) {
            player2.setVelocityX(-250);
            player2.setVelocityY(250);
        } else if (rightPulsada && upPulsada) {
            player2.setVelocityX(250);
            player2.setVelocityY(-250);
            upPulsada = false;
        } else if (rightPulsada && downPulsada) {
            player2.setVelocityX(250);
            player2.setVelocityY(250);
        } else if (leftPulsada) {
            if (!player2.body.touching.down) {
                player2.setVelocityX(-150);
                player2.anims.play('run', true);
            } else {
                player2.setVelocityX(-250);
                player2.anims.play('run', true);
            }
        } else if (rightPulsada) {
            if (!player2.body.touching.down) {
                player2.setVelocityX(150);
                player2.anims.play('run', true);
            } else {
                player2.setVelocityX(250);
                player2.anims.play('run', true);
            }
        } else if (upPulsada && player2.contSalto < 3) {
            player2.setVelocityY(-250);
            upPulsada = false;
        } else if (downPulsada && player2.contSalto < 3) {
            player2.setVelocityY(250);
            downPulsada = false;
        } else {
            player2.anims.play('idle', true);
            player2.setVelocityX(0);
        }
    }
    leftPulsada = false;
    rightPulsada = false;
    zeroPulsada = false;
    if (!scene.keyUp.isDown) {
        upToque = false;
    }


    if (!scene.keyDown.isDown) {
        downToque = false;
    }
    if (!scene.keyZero.isDown && contStamine2 < 100) {
        contStamine2++;
    }
    if (player2.body.blocked.down) {
        player2.contSalto = 0;
    }
    //Gira el sprite del personaje en la dirección a la que está mirando
    if (facingRight2) {
        player2.flipX = false;
    } else {
        player2.flipX = true;
    }
}
