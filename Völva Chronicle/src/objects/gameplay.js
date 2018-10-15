//variables
var player;
var sPulsada = false;
var sToque = false;
var wPulsada = false;
var wToque = false;
var aPulsada = false;
var dPulsada = false;
var bPulsada = false;
var contStamine = 100;

var player2;
var downPulsada = false;
var downToque = false;
var upPulsada = false;
var upToque = false;
var leftPulsada = false;
var rightPulsada = false;
var zeroPulsada = false;
var contStamine2 = 100;


createPlayer = function (scene) {
    player = scene.physics.add.sprite(-600, 0, 'dude');
    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.1);
    player.setCollideWorldBounds(true); 
    player.contSalto = 0;
    
    player2 = scene.physics.add.sprite(600, 0, 'dude');
    //  Player physics properties. Give the little guy a slight bounce.
    player2.setBounce(0.1);
    player2.setCollideWorldBounds(true); 
    player2.contSalto = 0;
    
    //  Our player animations, turning, walking left and walking right.
    scene.anims.create({
        key: 'left',
        frames: scene.anims.generateFrameNumbers('dude', {
            start: 0,
            end: 3
        }),
        frameRate: 10,
        repeat: -1
    });
    scene.anims.create({
        key: 'turn',
        frames: [{
            key: 'dude',
            frame: 4
        }],
        frameRate: 20
    });
    scene.anims.create({
        key: 'right',
        frames: scene.anims.generateFrameNumbers('dude', {
            start: 5,
            end: 8
        }),
        frameRate: 10,
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
    if (scene.keyA.isDown) {
        aPulsada = true;
    }
    if (scene.keyS.isDown && !sToque && player.contSalto < 2) {
        sPulsada = true;
        sToque = true;
        player.contSalto++;
    }
    if (scene.keyD.isDown) {
        dPulsada = true;
    }
    if (scene.keyW.isDown && !wToque && player.contSalto < 2) {
        wPulsada = true;
        wToque = true;
        player.contSalto++;
    }
    if (scene.keyB.isDown) {
        bPulsada = true;
    }
    if (bPulsada && contStamine > 0) {
        if (aPulsada && wPulsada) {
            player.setVelocityX(-350);
            player.setVelocityY(-350);
            wPulsada = false;
            contStamine--;
        } else if (aPulsada && sPulsada) {
            player.setVelocityX(-350);
            player.setVelocityY(350);
            contStamine--;
        } else if (dPulsada && wPulsada) {
            player.setVelocityX(350);
            player.setVelocityY(-350);
            wPulsada = false;
            contStamine--;
        } else if (dPulsada && sPulsada) {
            player.setVelocityX(350);
            player.setVelocityY(350);
            contStamine--;
        } else if (aPulsada) {
            player.setVelocityX(-350);
            player.anims.play('left', true);
            contStamine--;
            aPulsada = false;
        } else if (dPulsada) {
            player.setVelocityX(350);
            player.anims.play('right', true);
            contStamine--;
        } else if (wPulsada && player.contSalto < 3) {
            player.setVelocityY(-350);
            wPulsada = false;
            contStamine--;
        } else if (sPulsada && player.contSalto < 3) {
            player.setVelocityY(350);
            sPulsada = false;
            contStamine--;
        } else {
            player.anims.play('turn', true);
            player.setVelocityX(0);
            if (player.getVelocitY < 0 && wPulsada) {
                player.setVelocityY(0);
            }
        }
    } else {
        if (aPulsada && wPulsada) {
            player.setVelocityX(-250);
            player.setVelocityY(-250);
            wPulsada = false;
        } else if (aPulsada && sPulsada) {
            player.setVelocityX(-250);
            player.setVelocityY(250);
        } else if (dPulsada && wPulsada) {
            player.setVelocityX(250);
            player.setVelocityY(-250);
            wPulsada = false;
        } else if (dPulsada && sPulsada) {
            player.setVelocityX(250);
            player.setVelocityY(250);
        } else if (aPulsada) {
            if (!player.body.touching.down) {
                player.setVelocityX(-150);
                player.anims.play('left', true);
            } else {
                player.setVelocityX(-250);
                player.anims.play('left', true);
            }
        } else if (dPulsada) {
            if (!player.body.touching.down) {
                player.setVelocityX(150);
                player.anims.play('right', true);
            } else {
                player.setVelocityX(250);
                player.anims.play('right', true);
            }
        } else if (wPulsada && player.contSalto < 3) {
            player.setVelocityY(-250);
            wPulsada = false;
        } else if (sPulsada && player.contSalto < 3) {
            player.setVelocityY(250);
            sPulsada = false;
        } else {
            player.anims.play('turn', true);
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
    if (!scene.keyB.isDown && contStamine < 100) {
        contStamine++;
    }
    if (player.body.blocked.down) {
        player.contSalto = 0;
    }
    
    //Player2
    if (scene.keyLeft.isDown) {
        leftPulsada = true;
    }
    if (scene.keyDown.isDown && !downToque && player2.contSalto < 2) {
        downPulsada = true;
        downToque = true;
        player2.contSalto++;
    }
    if (scene.keyRight.isDown) {
        rightPulsada = true;
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
            player2.anims.play('left', true);
            contStamine2--;
            leftPulsada = false;
        } else if (rightPulsada) {
            player2.setVelocityX(350);
            player2.anims.play('right', true);
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
            player2.anims.play('turn', true);
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
                player2.anims.play('left', true);
            } else {
                player2.setVelocityX(-250);
                player2.anims.play('left', true);
            }
        } else if (rightPulsada) {
            if (!player2.body.touching.down) {
                player2.setVelocityX(150);
                player2.anims.play('right', true);
            } else {
                player2.setVelocityX(250);
                player2.anims.play('right', true);
            }
        } else if (upPulsada && player2.contSalto < 3) {
            player2.setVelocityY(-250);
            upPulsada = false;
        } else if (downPulsada && player2.contSalto < 3) {
            player2.setVelocityY(250);
            downPulsada = false;
        } else {
            player2.anims.play('turn', true);
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
}
