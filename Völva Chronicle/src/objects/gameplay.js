//variables
var player;
var platforms;
var cursors;
var stars;
var score = 0;
var scoreText;
var contSaltoText;
var contStamineText;
var sPulsada = false;
var sToque = false;
var wPulsada = false;
var wToque = false;
var aPulsada = false;
var aToque = false;
var dPulsada = false;
var dToque = false;
var wPulsadaText;
var bPulsadaText;
var bPulsada = false;
var noPressW = true;
var noPressB = true;
var contStamine = 100;
var gameOver = false;
var loadingText2;
var layer;
var map;


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
    
    scene.cameras.main.setBounds(-3501, 0, 7008, 19578);
    scene.physics.world.setBounds(-3501, 0, 7008, 19578);

}

createPlayer = function (scene) {
    player = scene.physics.add.sprite(-600, 0, 'dude');
    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.1);
    player.setCollideWorldBounds(true); 
    player.contSalto = 0;
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

    scene.cameras.main.startFollow(player, true, 0.08, 0.08);
}

createStars = function (scene, nLevel) {
    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    stars = scene.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: {
            x: 12,
            y: 0,
            stepX: 70
        }
    });
    stars.children.iterate(function (child) {
        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
    bombs = scene.physics.add.group();
}

createExtras = function (scene) {
    //  Input Events
    cursors = scene.input.keyboard.createCursorKeys();
    //  The score
    scoreText = scene.add.text(16, 16, 'score: 0', {
        fontSize: '32px',
        fill: '#000'
    });
    contSaltoText = scene.add.text(150, 16, 'contSalto: 0', {
        fontSize: '32px',
        fill: '#000'
    });
    contStamineText = scene.add.text(350, 16, 'contStamine: 100', {
        fontSize: '16px',
        fill: '#000'
    });
    wPulsadaText = scene.add.text(16, 40, 'wPulsada: false', {
        fontSize: '32px',
        fill: '#000'
    });
    bPulsadaText = scene.add.text(250, 40, 'bPulsada: false', {
        fontSize: '32px',
        fill: '#000'
    });
    //  Collide the player and the stars with the platforms
    scene.physics.add.collider(player, layer);
    scene.physics.add.collider(stars, platforms);
    scene.physics.add.collider(bombs, platforms);
    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    scene.physics.add.overlap(player, stars, collectStar, null, this);
    scene.physics.add.collider(player, bombs, hitBomb, null, this);
    scene.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    scene.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    scene.keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    scene.keyS = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    scene.keyB = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
}

function collectStar(player, star) {
    star.disableBody(true, true);
    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);
    if (stars.countActive(true) === 0) {
        //  A new batch of stars to collect
        stars.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
        });
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;
    }
}

function hitBomb(player, bomb) {
    scene.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    gameOver = true;
}
updateControls = function (scene) {
    if (scene.keyA.isDown) {
        aPulsada = true;
    }
    if (scene.keyS.isDown && !sToque && player.contSalto < 2) {
        sPulsada = true;
        sToque = true;
        player.contSalto++;
        contSaltoText.setText('contSalto: ' + player.contSalto);
    }
    if (scene.keyD.isDown) {
        dPulsada = true;
    }
    if (scene.keyW.isDown && !wToque && player.contSalto < 2) {
        wPulsada = true;
        wToque = true;
        player.contSalto++;
        wPulsadaText.setText('wPulsada: true');
        contSaltoText.setText('contSalto: ' + player.contSalto);
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
            wPulsadaText.setText('wPulsada: false');
        } else if (aPulsada && sPulsada) {
            player.setVelocityX(-350);
            player.setVelocityY(350);
            contStamine--;
        } else if (dPulsada && wPulsada) {
            player.setVelocityX(350);
            player.setVelocityY(-350);
            wPulsada = false;
            contStamine--;
            wPulsadaText.setText('wPulsada: false');
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
            wPulsadaText.setText('wPulsada: false');
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
            wPulsadaText.setText('wPulsada: false');
        } else if (aPulsada && sPulsada) {
            player.setVelocityX(-250);
            player.setVelocityY(250);
        } else if (dPulsada && wPulsada) {
            player.setVelocityX(250);
            player.setVelocityY(-250);
            wPulsada = false;
            wPulsadaText.setText('wPulsada: false');
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
            wPulsadaText.setText('wPulsada: false');
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

    if (!scene.keyA.isDown) {
        aToque = false;
    }
    if (!scene.keyD.isDown) {
        dToque = false;
    }
    if (!scene.keyS.isDown) {
        sToque = false;
    }
    if (!scene.keyB.isDown && contStamine < 100) {
        contStamine++;
    }
    if (player.body.blocked.down) {
        player.contSalto = 0;
        contSaltoText.setText('contSalto: ' + player.contSalto);
    }
    contStamineText.setText('contStamine: ' + contStamine);
}
