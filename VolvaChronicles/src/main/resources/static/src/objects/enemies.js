//Enemigos
var penemies; //array de enemigos para el player 1
var enemiesp; //arrary de enemigos para el player 2
var lanzasR; //lanzas hacia la derecha
var lanzasL; //lanzas hacia la izquierda
var lanzasDR; //lanzas abajo derecha
var lanzasDL; //lanzas abajo izquierda
var lanzasUR; //lanzas arriba derecha
var lanzasUL; //lanzas arriba izquierda
var enemyType1 = 'enemigo1';
var enemyType2 = 'enemigo2';

//crea los enemigos y lanzas del nivel, los coloca en su sitio y les añade colisiones
var createEnemy = function (scene, nLevel) {
    var enemyType = []; //array de tipos de enemgios
    //se crean los grupos de enemigos y lanzas
    penemies = scene.physics.add.group();
    enemiesp = scene.physics.add.group();
    lanzasR = scene.physics.add.group();
    lanzasL = scene.physics.add.group();
    lanzasDR = scene.physics.add.group();
    lanzasDL = scene.physics.add.group();
    lanzasUR = scene.physics.add.group();
    lanzasUL = scene.physics.add.group();

    //Se inician los enemigos del nivel 1
    if (nLevel === 1) {
        var numberEnemies = 12; //numero de enemigos en este nivel

        enemyType = randomTypeEnemies(numberEnemies); //se ponen tipos de enemigos al azar

        //Enemigos de la pantalla del jugador 1

        var penemies0;
        addEnemy(penemies0, penemies, lanzasR, -3020, 5875, 0, enemyType[0], scene, true);

        var penemies1;
        addEnemy(penemies1, penemies, lanzasDL, -2235, 2227, 135, enemyType[1],scene, false);

        var penemies2;
        addEnemy(penemies2, penemies, lanzasDR, -905, 2995, 45, enemyType[2], scene, true);

        var penemies3;
        addEnemy(penemies3, penemies, lanzasL, -2325, 17107, 180, enemyType[3], scene, false);

        var penemies4;
        addEnemy(penemies4, penemies, lanzasL, -406, 11155, 180, enemyType[4], scene, false);

        var penemies5;
        addEnemy(penemies5, penemies, lanzasR, -1208, 1651, 0, enemyType[5], scene, true);

        //Enemigos de la pantalla del jugador 2

        var enemiesp0;
        addEnemy(enemiesp0, enemiesp, lanzasR, 532, 5875, 0, enemyType[3],scene, true);

        var enemiesp1;
        addEnemy(enemiesp1, enemiesp, lanzasDL, 1317, 2208, 135, enemyType[4],scene, false);

        var enemiesp2;
        addEnemy(enemiesp2, enemiesp, lanzasDR, 2645, 2995, 45, enemyType[5], scene, true);

        var penemies3;
        addEnemy(enemiesp3, enemiesp, lanzasL, 1227, 17107, 180, enemyType[3], scene, false);

        var penemies4;
        addEnemy(enemiesp4, enemiesp, lanzasL, 3146, 11155, 180, enemyType[4], scene, false);

        var penemies5;
        addEnemy(enemiesp5, enemiesp, lanzasR, 2344, 1651, 0, enemyType[5], scene, true);

    }//Se inician los enemigos del nivel 2
    else if (nLevel === 2) {
        var numberEnemies = 24;
        enemyType = randomTypeEnemies(numberEnemies);

        //Enemigos de la pantalla del jugador 1
        var penemies0;
        addEnemy(penemies0, penemies, lanzasDL, -2217, 17472, 135, enemyType[0],scene,false);

        var penemies1;
        addEnemy(penemies1, penemies, lanzasDR, -2941, 16819, 45, enemyType[1],scene,true);

        var penemies2;
        addEnemy(penemies2, penemies, lanzasR, -1604, 11155, 0, enemyType[2],scene,true);

        var penemies3;
        addEnemy(penemies3, penemies, lanzasL, -1268, 6835, 180, enemyType[3],scene,false);

        var penemies4;
        addEnemy(penemies4, penemies, lanzasDL, -681, 5875, 135, enemyType[4],scene,false);

        var penemies5;
        addEnemy(penemies5, penemies, lanzasR, -1581, 2227, 0, enemyType[5],scene,true);

        var penemies6;
        addEnemy(penemies6, penemies, lanzasL, -2143, 2227, 180, enemyType[6],scene,false);

        // Enemigos extra
        
        var penemies7;
        addEnemy(penemies7, penemies, lanzasR, -1678, 18623, 0, enemyType[7],scene,true);

        var penemies8;
        addEnemy(penemies8, penemies, lanzasL, -406, 13919, 180, enemyType[8],scene,false);

        var penemies9;
        addEnemy(penemies9, penemies, lanzasR, -3059, 12575, 0, enemyType[9],scene,true);

        var penemies10;
        addEnemy(penemies10, penemies, lanzasL, -447, 9023, 180, enemyType[10],scene,false);

        var penemies11;
        addEnemy(penemies11, penemies, lanzasR, -3153, 9023, 0, enemyType[11],scene,true);

        //Enemigos de la pantalla del jugador 2

        var enemiesp0;
        addEnemy(enemiesp0, enemiesp, lanzasDL, 1335, 17472, 135, enemyType[7],scene,false);

        var enemiesp1;
        addEnemy(enemiesp1, enemiesp, lanzasDR, 623, 16819, 45, enemyType[8],scene,true);

        var enemiesp2;
        addEnemy(enemiesp2, enemiesp, lanzasR, 1948, 11155, 0, enemyType[9],scene,true);

        var enemiesp3;
        addEnemy(enemiesp3, enemiesp, lanzasL, 2284, 6835, 180, enemyType[10],scene,false);

        var enemiesp4;
        addEnemy(enemiesp4, enemiesp, lanzasDL, 2869, 5875, 135, enemyType[11],scene,false);

        var enemiesp5;
        addEnemy(enemiesp5, enemiesp, lanzasR, 1971, 2227, 0, enemyType[12],scene,true);

        var enemiesp6;
        addEnemy(enemiesp6, enemiesp, lanzasL, 1409, 2227, 180, enemyType[13],scene,false);

        // Enemigos extra
        
        var enemiesp7;
        addEnemy(enemiesp7, enemiesp, lanzasR, 1874, 18623, 0, enemyType[7],scene,true);

        var enemiesp8;
        addEnemy(enemiesp8, enemiesp, lanzasL, 3146, 13919, 180, enemyType[8],scene,false);

        var enemiesp9;
        addEnemy(enemiesp9, enemiesp, lanzasR, 493, 12575, 0, enemyType[9],scene,true);

        var enemiesp10;
        addEnemy(enemiesp10, enemiesp, lanzasL, 3105, 9023, 180, enemyType[10],scene,false);

        var enemiesp11;
        addEnemy(enemiesp11, enemiesp, lanzasR, 399, 9023, 0, enemyType[11],scene,true);

    //Se inician los enemigos del nivel 3
    } else if (nLevel === 3) {
        var numberEnemies = 32;
        enemyType = randomTypeEnemies(numberEnemies);

        //Enemigos de la pantalla del jugador 1

        var penemies0;
        addEnemy(penemies0, penemies, lanzasUR, -2755, 17971, 315, enemyType[0],scene,true);

        var penemies1;
        addEnemy(penemies1, penemies, lanzasR, -1540, 15667, 0, enemyType[1],scene,true);

        var penemies2;
        addEnemy(penemies2, penemies, lanzasUL, -1000, 12307, 225, enemyType[2],scene,false);

        var penemies3;
        addEnemy(penemies3, penemies, lanzasR, -2777, 6931, 0, enemyType[3],scene,true);

        var penemies4;
        addEnemy(penemies4, penemies, lanzasR, -2704, 3763, 0, enemyType[4],scene,true);

        var penemies5;
        addEnemy(penemies0, penemies, lanzasDL, -2206, 3187, 135, enemyType[5],scene,false);

        var penemies6;
        addEnemy(penemies6, penemies, lanzasDR, -1705, 2707, 45, enemyType[6],scene,true);

        var penemies7;
        addEnemy(penemies7, penemies, lanzasDR, -2769, 979, 45, enemyType[7],scene,true);

        // Enemigos extra
        
        var penemies8;
        addEnemy(penemies8, penemies, lanzasR, -2472, 13439, 0, enemyType[8],scene,true);

        var penemies9;
        addEnemy(penemies9, penemies, lanzasR, -2600, 11999, 0, enemyType[9],scene,true);

        var penemies10;
        addEnemy(penemies10, penemies, lanzasL, -364, 4127, 180, enemyType[10],scene,false);

        var penemies11;
        addEnemy(penemies11, penemies, lanzasUR, -2987, 2591, 315, enemyType[11],scene,true);

        var penemies12;
        addEnemy(penemies12, penemies, lanzasL, -397, 2015, 180, enemyType[12],scene,false);

        var penemies13;
        addEnemy(penemies13, penemies, lanzasDL, -688, 575, 135, enemyType[13],scene,false);

        var penemies14;
        addEnemy(penemies14, penemies, lanzasL, -473, 383, 180, enemyType[14],scene,false);

        var penemies15;
        addEnemy(penemies15, penemies, lanzasUL, -1680, 1343, 225, enemyType[15],scene,false);

        //Enemigos de la pantalla del jugador 2

        var enemiesp0;
        addEnemy(enemiesp0, enemiesp, lanzasUR, 795, 17971, 315, enemyType[8],scene,true);

        var enemiesp1;
        addEnemy(enemiesp1, enemiesp, lanzasR, 2010, 15667, 0, enemyType[9],scene,true);

        var enemiesp2;
        addEnemy(enemiesp2, enemiesp, lanzasUL, 2552, 12307, 225, enemyType[10],scene,false);

        var enemiesp3;
        addEnemy(enemiesp3, enemiesp, lanzasR, 773, 6931, 0, enemyType[11],scene,true);

        var enemiesp4;
        addEnemy(enemiesp4, enemiesp, lanzasR, 846, 3763, 0, enemyType[12],scene,true);

        var enemiesp5;
        addEnemy(enemiesp0, enemiesp, lanzasDL, 1344, 3187, 135, enemyType[13],scene,false);

        var enemiesp6;
        addEnemy(enemiesp6, enemiesp, lanzasDR, 1847, 2707, 45, enemyType[14],scene,true);

        var enemiesp7;
        addEnemy(enemiesp7, enemiesp, lanzasDR, 783, 979, 45, enemyType[15],scene,true);

        // Enemigos extra
        
        var enemiesp8;
        addEnemy(enemiesp8, enemiesp, lanzasR, 1080, 13439, 0, enemyType[8],scene,true);

        var enemiesp9;
        addEnemy(enemiesp9, enemiesp, lanzasR, 952, 11999, 0, enemyType[9],scene,true);

        var enemiesp10;
        addEnemy(enemiesp10, enemiesp, lanzasL, 3188, 4127, 180, enemyType[10],scene,false);

        var enemiesp11;
        addEnemy(enemiesp11, enemiesp, lanzasUR, 565, 2591, 315, enemyType[11],scene,true);

        var enemiesp12;
        addEnemy(enemiesp12, enemiesp, lanzasL, 3155, 2015, 180, enemyType[12],scene,false);

        var enemiesp13;
        addEnemy(enemiesp13, enemiesp, lanzasDL, 2864, 575, 135, enemyType[13],scene,false);

        var enemiesp14;
        addEnemy(enemiesp14, enemiesp, lanzasL, 3079, 383, 180, enemyType[14],scene,false);

        var enemiesp15;
        addEnemy(enemiesp15, enemiesp, lanzasUL, 1872, 1343, 225, enemyType[15],scene,false);
    }

    //fisicas para los enemigos
    scene.physics.add.collider(penemies, layer);
    scene.physics.add.collider(enemiesp, layer);
    scene.physics.add.collider(lanzasL, layer, function (lanzasL,layer){
        replaceLanza(lanzasL,scene);
    });
    scene.physics.add.collider(lanzasR, layer, function (lanzasR,layer){
        replaceLanza(lanzasR,scene);
    });
    scene.physics.add.collider(lanzasDL, layer, function (lanzasDL,layer){
        replaceLanza(lanzasDL,scene);
    });
    scene.physics.add.collider(lanzasDR, layer, function (lanzasDR,layer){
        replaceLanza(lanzasDR,scene);
    });
    scene.physics.add.collider(lanzasUL, layer, function (lanzasUL,layer){
        replaceLanza(lanzasUL,scene);
    });
    scene.physics.add.collider(lanzasUR, layer, function (lanzasUR,layer){
        replaceLanza(lanzasUR,scene);
    });

    //solo puede luchar cada uno con sus propios enemigos
    scene.physics.add.overlap(player1, penemies, function (player1, penemies) {
        startCombat(player1,penemies, scene);
    }, null, this);
    scene.physics.add.overlap(player2, enemiesp, function (player2, enemiesp) {
        startCombat(player2,enemiesp, scene);
    }, null, this);
    //colisiones con las lanzas
    scene.physics.add.collider(player1, lanzasR, function (player1, lanzasR) {
        hitLanza(player1, lanzasR,scene);
    }, null, this);
    scene.physics.add.collider(player2, lanzasR, function (player2, lanzasR) {
        hitLanza(player2, lanzasR,scene);
    }, null, this);
    scene.physics.add.collider(player1, lanzasDR, function (player1, lanzasDR) {
        hitLanza(player1, lanzasDR,scene);
    }, null, this);
    scene.physics.add.collider(player2, lanzasDR, function (player2, lanzasDR) {
        hitLanza(player2, lanzasDR,scene);
    }, null, this);
    scene.physics.add.collider(player1, lanzasDL, function (player1, lanzasDL) {
        hitLanza(player1, lanzasDL,scene);
    }, null, this);
    scene.physics.add.collider(player2, lanzasDL, function (player2, lanzasDL) {
        hitLanza(player2, lanzasDL,scene);
    }, null, this);
    scene.physics.add.collider(player1, lanzasL, function (player1, lanzasL) {
        hitLanza(player1, lanzasL,scene);
    }, null, this);
    scene.physics.add.collider(player2, lanzasL, function (player2, lanzasL) {
        hitLanza(player2, lanzasL,scene);
    }, null, this);
    scene.physics.add.collider(player1, lanzasUL, function (player1, lanzasUL) {
        hitLanza(player1, lanzasUL,scene);
    }, null, this);
    scene.physics.add.collider(player2, lanzasUL, function (player2, lanzasUL) {
        hitLanza(player2, lanzasUL,scene);
    }, null, this);
    scene.physics.add.collider(player1, lanzasUR, function (player1, lanzasUR) {
        hitLanza(player1, lanzasUR,scene);
    }, null, this);
    scene.physics.add.collider(player2, lanzasUR, function (player2, lanzasUR) {
        hitLanza(player2, lanzasUR,scene);
    }, null, this);
}

//crea las animaciones de los 2 tipos de enemigos
function createAnimationEnemy(key, scene){
    //Animación cuando el enemigo está quieto
    scene.anims.create({
        key: 'idle'+key,
        frames: scene.anims.generateFrameNames(key, { prefix: key+' instancia 1', start: 0, end: 0, zeroPad: 4 }),
        frameRate: 24,
        repeat: -1
    });
    //Cuando lanza el proyectil
    scene.anims.create({
        key: 'throw'+key,
        frames: scene.anims.generateFrameNames(key, { prefix: key+' instancia 1', start: 0, end: 15, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
    //Cuando termina de lanzarlo
    scene.anims.create({
        key: 'throwEnd'+key,
        frames: scene.anims.generateFrameNames(key, { prefix: key+' instancia 1', start: 16, end: 23, zeroPad: 4 }),
        frameRate: 24,
        repeat: 0
    });
    //Cuando está combatiendo contra el jugador
    scene.anims.create({
        key: 'combat'+key,
        frames: scene.anims.generateFrameNames(key, { prefix: key+' instancia 1', start: 24, end: 49, zeroPad: 4 }),
        frameRate: 24,
        repeat: -1
    });
}


//Crea un enemigo en la posición indicada y la lanza que tira
function addEnemy(enemy, enemygroup, lanzagroup, posX, posY, angle, type, scene, facingRight){
    enemy = scene.physics.add.sprite(posX, posY, type);
    enemygroup.add(enemy, true);
    enemy.flipX = !facingRight;
    enemy.setSize(66, 121).setOffset(110, 35);
    enemy.lanza = scene.physics.add.sprite(posX, posY + 0, 'lanza');
    enemy.lanza.onHand = true;
    lanzagroup.add(enemy.lanza, true);
    enemy.lanza.posX = posX;
    enemy.lanza.posY = posY + 0;
    enemy.lanza.combat = false;
    //Ajusta la hitbox según el ángulo
    if (angle === 0){
        enemy.lanza.setSize(20, 20).setOffset(159, 0);
    } else if (angle === 180){
        enemy.lanza.setSize(20, 20).setOffset(0, 0);
    } else if (angle === 45){
        enemy.lanza.setSize(20, 20).setOffset(90, 90);
    }else if (angle === 135){
        enemy.lanza.setSize(20, 20).setOffset(0, 90);
    }else if (angle === 225){
        enemy.lanza.setSize(20, 20).setOffset(159, 0);
    }else if (angle === 315){
        enemy.lanza.setSize(20, 20).setOffset(90, 0);
    }
    enemy.lanza.angle = angle;
    enemy.type = type;
    enemy.anims.play('throw'+type,true);
    //Evento que controla que las animaciones transicionen unas a otras al acabar
    enemy.on('animationcomplete', function () {
        if (enemy.anims.currentAnim.key === 'throw'+type && !enemy.combat) {
            enemy.play('throwEnd'+type,true);
            enemy.anims.stopOnRepeat();
            enemy.lanza.onHand = false;
        } else if (enemy.anims.currentAnim.key === 'throwEnd'+type && !enemy.combat){
            enemy.play('idle'+enemy.type,true);
        }
    });
}

//Reproduce los efectos de sonido y animaciones necesarias para el combate, ademas de desactivar la lanza y
//crear un evento para desactivar al enemigo tras acabar la animación
function startCombat(player,enemygroup, scene){
    if (player.combat === false) {
        scene.sound.play('combatSound');
    } 
    player.combat = true;
    enemygroup.lanza.combat = true;
    player.anims.play('combat'+player.type, true);
    player.anims.stopOnRepeat();
    enemygroup.anims.play('combat'+enemygroup.type,true);
    player.on('animationcomplete', function () {
        if(player.anims.currentAnim.key === 'combat'+player.type){
            enemygroup.disableBody(true, true);
            enemygroup.lanza.disableBody(true, true);
            player.combat = false;
            enemygroup.lanza.combat = false;
        }    
    });
}

//Desactiva la lanza y la spawnea en la mano del enemigo cuando termina su animacion de lanzarla
function replaceLanza(lanza,scene) {
    if(!lanza.combat){
        lanza.onHand = true;
        lanza.disableBody(false,true);
        scene.time.delayedCall(666, function (lanza) {
            lanza.enableBody(true,lanza.posX, lanza.posY, true, true);
        },[lanza], null, this);
    }
}



//colision lanza con jugador
function hitLanza(player, lanza,scene) {
    scene.sound.play('spearSound');
    if (lanza.x > player.x) {
        player.throwLeft = true;
    } else {
        player.throwRight = true;
    }
    replaceLanza(lanza, scene);
    scene.time.delayedCall(1000, stopThrowing, [player], null, this); //emplea el metodo de powerupsManager
}

//Asigna un tipo aleatorio a cada enemigo
function randomTypeEnemies(numberEnemies) {
    var enemyType = [];
    for (var i = 0; i < numberEnemies; i++) {
        ranEnemy = Math.floor(Math.random() * 2);
        switch (ranEnemy) {
            case 0:
                enemyType[i] = enemyType1;
                break;
            case 1:
                enemyType[i] = enemyType2;
                break;
        }
    }
    return enemyType;
}

//movimiento lanzas
function moveLanzas() {
    lanzasR.setVelocityX(400);
    lanzasL.setVelocityX(-400);
    lanzasR.setVelocityY(0);
    lanzasL.setVelocityY(0);
    lanzasDR.setVelocity(400, 400);
    lanzasDL.setVelocity(-400, 400);
    lanzasUR.setVelocity(400, -400);
    lanzasUL.setVelocity(-400, -400);
}

//Actualiza la animación del enemigo cuando no está en combate
function updateAnimationEnemy (enemy){
    if(enemy.lanza.onHand && !enemy.lanza.combat){
        enemy.anims.play('throw'+enemy.type,true);
        enemy.anims.stopOnRepeat();
    }
}

//Guarda los enemigos del grupo en un array y actualiza sus animaciones
function updateEnemies(enemies){
    var enemyArray=enemies.getChildren();
    for(var i=0; i < enemies.getLength();i++){
        updateAnimationEnemy(enemyArray[i]);
    }
}

