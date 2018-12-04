//jugadores
var player1;
var player2;
var playerVelocityY = 900;
var playerVelocityX = 500;

//cronometro
var levelTime = 0;

//nivel actual
var currentLevel = 0;
var levelEnded = false;

//Conexion websocket
var wsGameplay;
var infoCambiada;

//crea los sprites de los jugadores y los inicializa
createPlayers = function (scene) {
    player1 = scene.physics.add.sprite(-1750, 19584, 'aguila');
    player2 = scene.physics.add.sprite(1800, 19584, 'nidhogg');
    addPlayer(scene, player1, 'aguila');
    addPlayer(scene, player2, 'nidhogg');

    //Inicializa al jugador en el servidor
    if (isOnline) {
        if (idJugador === 0) {
            modifyPlayerInfo(player1);
            wsGameplay = new WebSocket(ipConfig);
            //En caso de error
            wsGameplay.onerror = function (e) {
                console.log("WS error: " + e);
            }

            wsGameplay.onopen = function () {
                console.log("He enviado la info");
                wsGameplay.send(JSON.stringify(infoCambiada));
            }

            //Gestion de informacion recibida
            wsGameplay.onmessage = function (msg) {
                console.log(msg.data);
            }
        } else if (idJugador === 1) {
            modifyPlayerInfo(player2);
            wsGameplay = new WebSocket(ipConfig);
            //En caso de error
            wsGameplay.onerror = function (e) {
                console.log("WS error: " + e);
            }

            wsGameplay.onopen = function () {
                console.log("He enviado la info");
                wsGameplay.send(JSON.stringify(infoCambiada));
            }

            //Gestion de informacion recibida
            wsGameplay.onmessage = function (msg) {
                console.log(msg.data);
            }
        }
    }
}

//Inicializa las físicas y todas los atributos de los jugadores
addPlayer = function (scene, player, type) {
    player.setCollideWorldBounds(true);
    player.type = type;
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
    player.dashId = 0; //indica en que tipo de dash se encuentra el personaje
    //0:sin dash, 1:dash arriba, , 3:de frente
    //4: diagonal abajo, 5:abajo
    player.falling = false;
    player.win = false;
    //redimensiona bounding box y le aplica un offset para ajustar su centro
    player.setSize(66, 121).setOffset(72, 57);
    //colisiones
    scene.physics.add.collider(player, layer);
    //atributos referentes a controles
    player.downPulsada = false;
    player.downToque = false;
    player.upPulsada = false;
    player.upToque = false;
    player.leftPulsada = false;
    player.rightPulsada = false;
    player.leftAnterior = false;
    player.rightAnterior = false;
    player.leftCambioTeclas = false;
    player.rightCambioTeclas = false;
    player.dashPulsada = false;
    player.dashAnterior = false;
    player.dashCambioTeclas = false;
    //Atributo para la comunicacion online
    player.estado = 0;
    //atributos referentes a los powerups
    //if (currentLevel === 1) {
        player.tir = false;
    //}
    player.ratatosk = 0;
    player.heimdall = false;
    player.throwRight = false;
    player.throwLeft = false;

    player.combat = false;

    player.ratatoskBool = false;

    createAnimationEvents(player);
}

//Crea las animaciones del jugador indicado
createAnimationPlayer = function (key, scene) {
    scene.anims.create({
        key: 'run' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 22,
            end: 40,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: -1
    });
    scene.anims.create({
        key: 'idle' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 134,
            end: 148,
            zeroPad: 4
        }),
        frameRate: 12,
        repeat: -1
    });
    scene.anims.create({
        key: 'idleAir' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 284,
            end: 291,
            zeroPad: 4
        }),
        frameRate: 12,
        repeat: -1
    });
    scene.anims.create({
        key: 'jump' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 0,
            end: 18,
            zeroPad: 4
        }),
        frameRate: 24
    });
    scene.anims.create({
        key: 'dashDown' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 149,
            end: 164,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashDownFall' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 177,
            end: 186,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashDownDiagonal' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 210,
            end: 225,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashDownDiagonalFall' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 235,
            end: 243,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashUp' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 244,
            end: 259,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashForward' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 85,
            end: 97,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashForwardHold' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 98,
            end: 102,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: -1
    });
    scene.anims.create({
        key: 'dashForwardEnd' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 103,
            end: 114,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashForwardAir' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 115,
            end: 122,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'dashForwardAirHold' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 123,
            end: 123,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: -1
    });
    scene.anims.create({
        key: 'dashForwardAirEnd' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 124,
            end: 133,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'knockback' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 41,
            end: 47,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'knockbackHold' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 47,
            end: 47,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'crouch' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 64,
            end: 66,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'crouchHold' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 67,
            end: 67,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: -1
    });
    scene.anims.create({
        key: 'crouchEnd' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 68,
            end: 70,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: 0
    });
    scene.anims.create({
        key: 'combat' + key,
        frames: scene.anims.generateFrameNames(key, {
            prefix: key + ' instancia 1',
            start: 292,
            end: 468,
            zeroPad: 4
        }),
        frameRate: 24,
        repeat: 0
    });
}
//Guarda los inputs de control de los jugadores en atributos
createInputs = function (scene) {
    //Input Events
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
//para hacer controles genericos en websockets
/*
createInputs1P = function (scene, player){
    //Input Events
    cursors = scene.input.keyboard.createCursorKeys();
    //inputs player (WASD+B)
    player.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    player.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    player.keyUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    player.keyDown = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    player.keyDash = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
}*/

//actualiza el cronómetro
updateTimer = function () {
    if (!levelEnded) {
        levelTime++;
    }
}

//inicia el cronometro al principio de cada nivel
createTimer = function (scene) {
    levelTime = 0;
    levelEnded = false;
    scene.time.addEvent({
        delay: 1000,
        callback: updateTimer,
        callbackScope: scene,
        loop: true
    });
}

//Funcion para terminar el nivel al llegar a la meta
endLevel = function (scene, player) {
    levelEnded = true;
    scene.sound.play('victorySound');
    music.stop();
    player.win = true;

    /*if (currentLevel === 1) {
        scene.scene.start('level2');
    } else if (currentLevel === 2) {
        scene.scene.start('level3');
    }*/
    if (currentLevel === 1 || currentLevel === 2) {
        scene.scene.start('reward');
    } else if (currentLevel === 3 && player === player1) {
        scene.scene.start('ending1');
    } else if (currentLevel === 3 && player === player2) {
        scene.scene.start('ending2');
    }
    scene.scene.stop();

}

//Crea los eventos necesarios para cuando termina una animación
createAnimationEvents = function (player) {
    player.on('animationcomplete', function () {
        if (player.anims.currentAnim.key === 'dashDown' + player.type) {
            player.dashId = 0;
        }
        if (player.anims.currentAnim.key === 'dashDownDiagonal' + player.type) {
            player.dashId = 0;
        }
        if (player.anims.currentAnim.key === 'dashDownFall' + player.type) {
            player.animEnd = false;
        }
        if (player.anims.currentAnim.key === 'dashDownDiagonalFall' + player.type) {
            player.animEnd = false;
        }
        if (player.anims.currentAnim.key === 'dashUp' + player.type) {
            player.dashId = 0;
        }
        if (player.anims.currentAnim.key === 'dashForward' + player.type) {
            player.anims.play('dashForwardHold' + player.type, true);
        }
        if (player.anims.currentAnim.key === 'dashForwardHold' + player.type) {
            player.dashId = 0;
        }
        if (player.anims.currentAnim.key === 'dashForwardEnd' + player.type) {
            player.animEnd = false;
        }
        if (player.anims.currentAnim.key === 'dashForwardAir' + player.type) {
            player.anims.play('dashForwardAirHold' + player.type, true);
        }
        if (player.anims.currentAnim.key === 'dashForwardAirHold' + player.type) {
            player.dashId = 0;
        }
        if (player.anims.currentAnim.key === 'dashForwardAirEnd' + player.type) {
            player.animEnd = false;
        }
        if (player.anims.currentAnim.key === 'knockback' + player.type) {
            player.anims.play('knockbackHold' + player.type, true);
        }
        if (player.anims.currentAnim.key === 'crouch' + player.type) {
            player.anims.play('crouchHold' + player.type, true);
        }
        if (player.anims.currentAnim.key === 'crouchHold' + player.type) {
            player.crouch = false;
        }
        if (player.anims.currentAnim.key === 'crouchEnd' + player.type) {
            player.animEnd = false;
        }
    });
}

//Actualiza las animaciones de los personajes según su situación
updateAnimation = function (player) {
    if (!player.combat) {
        if (!player.throwRight && !player.throwLeft) {
            if (player.dashId === 0) {
                if (player.anims.isPlaying) {
                    if ((!isOnline) && !player.keyDown.isDown && player.anims.currentAnim.key === 'crouchHold' + player.type) {
                        player.anims.stop();
                        player.anims.play('crouchEnd' + player.type, true);
                        player.animEnd = true;
                    }
                }
                if (player.body.velocity.y === -player.velocidadY) {
                    player.anims.play('jump' + player.type, false);
                } else if (player.crouch && player.anims.currentAnim.key !== 'crouchHold' + player.type) {
                    player.anims.play('crouch' + player.type, true);
                    player.anims.stopOnRepeat();
                } else if (player.body.velocity.x === 0 && player.body.blocked.down && !player.animEnd && !player.crouch) {
                    player.anims.play('idle' + player.type, true);
                } else if (!player.body.blocked.down && !player.anims.isPlaying) {
                    player.anims.play('idleAir' + player.type, true);
                } else if (player.body.velocity.x !== 0 && player.body.blocked.down && !player.animEnd) {
                    player.anims.play('run' + player.type, true);
                }
            } else {
                if (player.dashId === 5 && !player.body.blocked.down) {
                    player.anims.play('dashDown' + player.type, true);
                    player.anims.stopOnRepeat();
                } else if (player.dashId === 1) {
                    player.anims.play('dashUp' + player.type, true);
                    player.anims.stopOnRepeat();
                } else if (player.dashId === 3) {
                    if (player.body.blocked.down) {
                        if (player.anims.currentAnim.key !== 'dashForwardHold' + player.type) {
                            player.anims.play('dashForward' + player.type, true);
                            player.anims.stopOnRepeat();
                        }
                    } else {
                        if (player.anims.currentAnim.key !== 'dashForwardAirHold' + player.type) {
                            player.anims.play('dashForwardAir' + player.type, true);
                            player.anims.stopOnRepeat();
                        }
                    }

                } else if (player.dashId === 4 && !player.body.blocked.down) {
                    player.anims.play('dashDownDiagonal' + player.type, true);
                    player.anims.stopOnRepeat();
                }
                if (player.anims.currentAnim.key === 'dashDown' + player.type && player.body.blocked.down) {
                    player.anims.stop();
                    player.anims.play('dashDownFall' + player.type, true);
                    player.animEnd = true;
                }
                if (player.anims.currentAnim.key === 'dashDownDiagonal' + player.type && player.body.blocked.down) {
                    player.anims.stop();
                    player.anims.play('dashDownDiagonalFall' + player.type, true);
                    player.animEnd = true;
                }
                if (player.anims.currentAnim.key === 'dashForwardHold' + player.type && !player.dashBool) {
                    player.anims.stop();
                    player.anims.play('dashForwardEnd' + player.type, true);
                    player.animEnd = true;
                }
                if (player.anims.currentAnim.key === 'dashForwardAirHold' + player.type && !player.dashBool) {
                    player.anims.stop();
                    player.anims.play('dashForwardAirEnd' + player.type, true);
                    player.animEnd = true;
                }
            }
        } else {
            if (player.anims.currentAnim.key !== 'knockbackHold' + player.type) {
                player.anims.play('knockback' + player.type, true);
                player.anims.stopOnRepeat();
            }
            if (player.throwLeft) {
                player.facingRight = true;
            } else if (player.throwRight) {
                player.facingRight = false;
            }
        }
    }
}

//Pasa a la pantalla de recompensa si algun jugador  llega a la meta
checkEndLevel = function (scene) {
    if (currentLevel === 1) {
        if ((player1.x >= -550) && (player1.y <= 300) && !levelEnded) {
            endLevel(scene, player1);
        } else if ((player2.x >= 3000) && (player2.y <= 300) && !levelEnded) {
            endLevel(scene, player2);
        }
    }
    if (currentLevel === 2) {
        if ((player1.x >= -1800) && (player1.x <= -1600) && (player1.y <= 400) && !levelEnded) {
            endLevel(scene, player1);
        } else if ((player2.x >= 1750) && (player2.x <= 1950) && (player2.y <= 400) && !levelEnded) {
            endLevel(scene, player2);
        }
    }
    if (currentLevel === 3) {
        if ((player1.x <= -2750) && (player1.y <= 600) && !levelEnded) {
            endLevel(scene, player1);
        } else if ((player2.x <= 800) && (player2.y <= 600) && !levelEnded) {
            endLevel(scene, player2);
        }
    }
}

//Actualiza las variables de los controles
updateControls = function (player) {
    if (!player.combat) {
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

        if (player.keyDown.isDown && player.body.blocked.down) {
            player.crouch = true;
        } else {
            player.crouch = false;
        }
    }
}
//Actualiza la velocidad y posicion de los personajes segun las teclas pulsadas
updateMovement = function (player) {

    //Limita la velocidad en y para evitar problemas de colision
    if (player.body.velocity.y > 1000) {
        player.setVelocityY(950);
    }

    if (!player.combat) {
        //Primero comprueba si el jugador esta siendo lanzado hacia alguno de los lados. De no ser asi, comprueba pulsaciones de botones.
        if (player.throwRight) {
            player.setVelocityX(500);
        } else if (player.throwLeft) {
            player.setVelocityX(-500);
        } else if (player.dashPulsada && player.contStamine > 0) {
            if (player.leftPulsada && player.upPulsada) {
                player.setVelocityX(-player.velocidadX - 100);
                player.setVelocityY(-player.velocidadY - 100);
                player.contStamine--;
                player.dashId = 2;
            } else if (player.leftPulsada && player.downPulsada && !player.body.blocked.down) {
                player.setVelocityX(-player.velocidadX - 100);
                player.setVelocityY(500);
                player.contStamine--;
            } else if (player.rightPulsada && player.upPulsada) {
                player.setVelocityX(player.velocidadX + 100);
                player.setVelocityY(-player.velocidadY - 100);
                player.contStamine--;
                player.dashId = 2;
            } else if (player.rightPulsada && player.downPulsada && !player.body.blocked.down) {
                player.setVelocityX(player.velocidadX + 100);
                player.setVelocityY(500);
                player.contStamine--;
            } else if (player.leftPulsada) {
                player.setVelocityX(-player.velocidadX - 100);
                player.contStamine--;
                player.dashId = 3;
            } else if (player.rightPulsada) {
                player.setVelocityX(player.velocidadX + 100);
                player.contStamine--;
                player.dashId = 3;
            } else if (player.upPulsada && player.contSalto < 3) {
                player.setVelocityY(-player.velocidadY - 150);
                player.contStamine--;
                player.dashId = 1;
            } else if (player.downPulsada && player.contSalto < 3 && !player.body.blocked.down) {
                player.setVelocityY(500);
                player.contStamine--;
                player.dashId = 5;
            } else {
                player.setVelocityX(0);
            }
        } else {
            if (player.leftPulsada && player.upPulsada) {
                player.setVelocityX(-player.velocidadX);
                player.setVelocityY(-player.velocidadY);
            } else if (player.leftPulsada && player.downPulsada && !player.body.blocked.down) {
                player.setVelocityX(-player.velocidadX);
                player.setVelocityY(500);
                player.dashId = 4;
            } else if (player.rightPulsada && player.upPulsada) {
                player.setVelocityX(player.velocidadX);
                player.setVelocityY(-player.velocidadY);
            } else if (player.rightPulsada && player.downPulsada && !player.body.blocked.down) {
                player.setVelocityX(player.velocidadX);
                player.setVelocityY(500);
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
            } else if (player.downPulsada && !player.body.blocked.down) {
                player.setVelocityY(500);
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
        if (!player.dashPulsada && player.contStamine < 100) {
            player.contStamine++;
        }
        //Controla las pulsaciones a los lados
        if (isOnline) {
            if (idJugador === 0) {
                if (!player1.keyRight.isDown) {
                    player1.rightPulsada = false;
                }
                if (!player1.keyLeft.isDown) {
                    player1.leftPulsada = false;
                }
            } else if (idJugador === 1) {
                if (!player2.keyRight.isDown) {
                    player2.rightPulsada = false;
                }
                if (!player2.keyLeft.isDown) {
                    player2.leftPulsada = false;
                }
            }
        } else {
            if (!player.keyRight.isDown) {
                player.rightPulsada = false;
            }
            if (!player.keyLeft.isDown) {
                player.leftPulsada = false;
            }
        }

        if (player.leftAnterior != player.leftPulsada) {
            player.leftAnterior = player.leftPulsada;
            player.leftCambioTeclas = true;
        } else {
            player.leftCambioTeclas = false;
        }

        if (player.rightAnterior != player.rightPulsada) {
            player.rightAnterior = player.rightPulsada;
            player.rightCambioTeclas = true;
        } else {
            player.rightCambioTeclas = false;
        }
        //Controla las pulsaciones de dash
        if (isOnline) {
            if (idJugador === 0) {
                if (!player1.keyDash.isDown) {
                    player1.dashPulsada = false;
                }
            } else if (idJugador === 1) {
                if (!player2.keyDash.isDown) {
                    player2.dashPulsada = false;
                }
            }
        } else {
            if (!player.keyDash.isDown) {
                player.dashPulsada = false;
            }
        }

        if (player.dashAnterior != player.dashPulsada) {
            player.dashAnterior = player.dashPulsada;
            player.dashCambioTeclas = true;
        } else {
            player.dashCambioTeclas = false;
        }


        if (isOnline) {
            //Envio de la informacion al servidor cuando se produce un cambio de estado interno del personaje controlable
            if (player.downPulsada || player.upPulsada || player.rightCambioTeclas || player.leftCambioTeclas || player.dashCambioTeclas) {
                if (idJugador === 0) {
                    modifyPlayerInfo(player1);
                    wsGameplay.send(JSON.stringify(infoCambiada));
                } else if (idJugador === 1) {
                    modifyPlayerInfo(player2);
                    wsGameplay.send(JSON.stringify(infoCambiada));
                    console.log("jugador2 va");
                }
            }
        }
        //Reinicio de variables
        player.upPulsada = false;
        player.downPulsada = false;
        if (!player.keyUp.isDown) {
            player.upToque = false;
        }
        if (!player.keyDown.isDown) {
            player.downToque = false;
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
    } else { //Si el jugador está en combate, le detiene y baja al suelo
        player.setVelocityX(0);
        player.setVelocityY(player.velocidadY);
    }
}


