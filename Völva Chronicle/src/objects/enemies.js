//Enemigos
var penemies; //array de enemigos para el player 1
var enemiesp; //arrary de enemigos para el player 2
var lanzasR; //lanzas hacia la derecha
var lanzasL; //lanzas hacia la izquierda
var enemyType1 = 'aguila';
var enemyType2 = 'aguila';

var createEnemy = function (scene, nLevel) {
    var ranEnemy; //variable para el numero random
    var enemyType = []; //array de tipos de enemgios


    if (nLevel === 1) {
        var numberEnemies = 6; //numero de enemigos en este nive
        penemies = scene.physics.add.group();
        enemiesp = scene.physics.add.group();
        lanzasR = scene.physics.add.group();
        lanzasL = scene.physics.add.group();

        enemyType = randomTypeEnemies(numberEnemies); //se ponen tipos de enemigos al azar

        var penemies0 = scene.physics.add.sprite(-3020, 5760, enemyType[0]);
        penemies.add(penemies0, true);
        var planza0 = scene.physics.add.sprite(-3020, 5760, 'lanzaR');
        lanzasR.add(planza0, true);
        planza0.posX = -3020;
        planza0.posY = 5760;

        var penemies1 = scene.physics.add.sprite(-2168, 2208, enemyType[1]);
        penemies.add(penemies1, true);
        var planza1 = scene.physics.add.sprite(-2168, 2208, 'lanzaL');
        lanzasL.add(planza1, true);
        planza1.posX = -2168;
        planza1.posY = 2208;

        var penemies2 = scene.physics.add.sprite(-1100, 2500, enemyType[2]);
        penemies.add(penemies2, true);
        var planza2 = scene.physics.add.sprite(-1100, 2500, 'lanzaR');
        lanzasR.add(planza2, true);
        planza2.posX = -1100;
        planza2.posY = 2500;


        var enemiesp0 = scene.physics.add.sprite(532, 5760, enemyType[3]);
        enemiesp.add(enemiesp0, true);
        var lanzap0 = scene.physics.add.sprite(532, 5760, 'lanzaR');
        lanzasR.add(lanzap0, true);
        lanzap0.posX = 532;
        lanzap0.posY = 5760;

        var enemiesp1 = scene.physics.add.sprite(1384, 2208, enemyType[4]);
        enemiesp.add(enemiesp1, true);
        var lanzap1 = scene.physics.add.sprite(1384, 2208, 'lanzaL');
        lanzasL.add(lanzap1, true);
        lanzap1.posX = 1384;
        lanzap1.posY = 2208;

        var enemiesp2 = scene.physics.add.sprite(2452, 2500, enemyType[5]);
        enemiesp.add(enemiesp2, true);
        var lanzap2 = scene.physics.add.sprite(2452, 2500, 'lanzaR');
        lanzasR.add(lanzap2, true);
        lanzap2.posX = 2452;
        lanzap2.posY = 2500;
    }

    //fisicas para los enemigos
    scene.physics.add.collider(penemies, layer);
    scene.physics.add.collider(enemiesp, layer);
    scene.physics.add.collider(lanzasL, layer, remplaceLanza);
    scene.physics.add.collider(lanzasR, layer, remplaceLanza);

    //solo puede luchar cada uno con sus propios enemigos
    scene.physics.add.overlap(player1, penemies, function (player1, penemies) {
        fightEnemies(scene, player1, penemies);
    }, null, this);
    scene.physics.add.overlap(player2, enemiesp, function (player2, enemiesp) {
        fightEnemies(scene, player2, enemiesp);
    }, null, this);
    scene.physics.add.overlap(player1, lanzasR, function (player1, lanzasR) {
        hitLanza(scene, player1, lanzasR);
    }, null, this);
    scene.physics.add.overlap(player2, lanzasR, function (player2, lanzasR) {
        hitLanza(scene, player2, lanzasR);
    }, null, this);
    scene.physics.add.overlap(player1, lanzasL, function (player1, lanzasL) {
        hitLanza(scene, player1, lanzasR);
    }, null, this);
    scene.physics.add.overlap(player2, lanzasL, function (player2, lanzasL) {
        hitLanza(scene, player2, lanzasL);
    }, null, this);
    
}

//reemplaza la lanza
function remplaceLanza(lanza) {
    lanza.x = lanza.posX;
    lanza.y = lanza.posY;
}

//colision lanza con jugador
function hitLanza(scene, player, lanza) {
    if (lanza.x > player.x) {
        player.throwLeft = true;
    } else {
        player.throwRight = true;
    }
    remplaceLanza(lanza);
    scene.time.delayedCall(1000, stopThrowing, [player], null, this); //emplea el metodo de powerupsManager
}

//funcion enemigos al azar
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

//funcion que se ejecuta en la lucha
function fightEnemies(scene, player, enemies) {
    //se ejecuta la animacion de lucha
    //depende de como se controle la animacion
    enemies.disableBody(true, true);
}

//movimiento lanzas
function moveLanzas() {
    lanzasR.setVelocityX(400);
    lanzasL.setVelocityX(-400);
    lanzasR.setVelocityY(0);
    lanzasL.setVelocityY(0);
}
