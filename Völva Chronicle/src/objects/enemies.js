//Enemigos
var penemies; //array de enemigos para el player 1
var enemiesp; //arrary de enemigos para el player 2
var lanzasR; //lanzas hacia la derecha
var lanzasL; //lanzas hacia la izquierda
var lanzasDR; //lanzas abajo derecha
var lanzasDL; //lanzas abajo izquierda
var lanzasUR; //lanzas arriba derecha
var lanzasUL; //lanzas arriba izquierda
var enemyType1 = 'aguila';
var enemyType2 = 'aguila';

var createEnemy = function (scene, nLevel) {
    var ranEnemy; //variable para el numero random
    var enemyType = []; //array de tipos de enemgios
    penemies = scene.physics.add.group();
    enemiesp = scene.physics.add.group();
    lanzasR = scene.physics.add.group();
    lanzasL = scene.physics.add.group();
    lanzasDR = scene.physics.add.group();
    lanzasDL = scene.physics.add.group();
    lanzasUR = scene.physics.add.group();
    lanzasUL = scene.physics.add.group();


    if (nLevel === 1) {
        var numberEnemies = 6; //numero de enemigos en este nive

        enemyType = randomTypeEnemies(numberEnemies); //se ponen tipos de enemigos al azar

        var penemies0 = scene.physics.add.sprite(-3020, 5760, enemyType[0]);
        penemies.add(penemies0, true);
        penemies0.lanza = scene.physics.add.sprite(-3020, 5760, 'lanza');
        lanzasR.add(penemies0.lanza, true);
        penemies0.lanza.posX = -3020;
        penemies0.lanza.posY = 5760;

        var penemies1 = scene.physics.add.sprite(-2168, 2208, enemyType[1]);
        penemies.add(penemies1, true);
        penemies1.lanza = scene.physics.add.sprite(-2168, 2208, 'lanza');
        penemies1.lanza.angle = 135;
        lanzasDL.add(penemies1.lanza, true);
        penemies1.lanza.posX = -2168;
        penemies1.lanza.posY = 2208;

        var penemies2 = scene.physics.add.sprite(-1100, 2500, enemyType[2]);
        penemies.add(penemies2, true);
        penemies2.lanza = scene.physics.add.sprite(-1100, 2500, 'lanza');
        penemies2.lanza.angle = 45;
        lanzasDR.add(penemies2.lanza, true);
        penemies2.lanza.posX = -1100;
        penemies2.lanza.posY = 2500;


        var enemiesp0 = scene.physics.add.sprite(532, 5760, enemyType[3]);
        enemiesp.add(enemiesp0, true);
        enemiesp0.lanza = scene.physics.add.sprite(532, 5760, 'lanza');
        lanzasR.add(enemiesp0.lanza, true);
        enemiesp0.lanza.posX = 532;
        enemiesp0.lanza.posY = 5760;

        var enemiesp1 = scene.physics.add.sprite(1384, 2208, enemyType[4]);
        enemiesp.add(enemiesp1, true);
        enemiesp1.lanza = scene.physics.add.sprite(1384, 2208, 'lanza');
        enemiesp1.lanza.angle = 135;
        lanzasDL.add(enemiesp1.lanza, true);
        enemiesp1.lanza.posX = 1384;
        enemiesp1.lanza.posY = 2208;

        var enemiesp2 = scene.physics.add.sprite(2452, 2500, enemyType[5]);
        enemiesp.add(enemiesp2, true);
        enemiesp2.lanza = scene.physics.add.sprite(2452, 2500, 'lanza');
        enemiesp2.lanza.angle = 45;
        lanzasDR.add(enemiesp2.lanza, true);
        enemiesp2.lanza.posX = 2452;
        enemiesp2.lanza.posY = 2500;
        
    } 
    else if (nLevel === 2) {
        var numberEnemies = 14;
        enemyType = randomTypeEnemies(numberEnemies);


        var penemies0 = scene.physics.add.sprite(-2112, 17472, enemyType[0]);
        penemies.add(penemies0, true);
        penemies0.lanza = scene.physics.add.sprite(-2112, 17472, 'lanza');
        penemies0.lanza.angle = 180;
        lanzasDL.add(penemies0.lanza, true);
        penemies0.lanza.posX = -2112;
        penemies0.lanza.posY = 17472;

        var penemies1 = scene.physics.add.sprite(-3072, 16896, enemyType[1]);
        penemies.add(penemies1, true);
        penemies1.lanza = scene.physics.add.sprite(-3072, 16896, 'lanza');
        penemies1.lanza.angle = 45;
        lanzasDR.add(penemies1.lanza, true);
        penemies1.lanza.posX = -3072;
        penemies1.lanza.posY = 16896;

        var penemies2 = scene.physics.add.sprite(-1824, 11232, enemyType[2]);
        penemies.add(penemies2, true);
        penemies2.lanza = scene.physics.add.sprite(-1824, 11232, 'lanza');
        lanzasR.add(penemies2.lanza, true);
        penemies2.lanza.posX = -1824;
        penemies2.lanza.posY = 11232;

        var penemies3 = scene.physics.add.sprite(-1248, 6912, enemyType[2]);
        penemies.add(penemies3, true);
        penemies3.lanza = scene.physics.add.sprite(-1248, 6912, 'lanza');
        lanzasL.add(penemies3.lanza, true);
        penemies3.lanza.posX = -1248;
        penemies3.lanza.posY = 6912;

        var penemies4 = scene.physics.add.sprite(-576, 5952, enemyType[2]);
        penemies.add(penemies4, true);
        penemies4.lanza = scene.physics.add.sprite(-576, 5952, 'lanza');
        penemies4.lanza.angle = 135;
        lanzasDL.add(penemies4.lanza, true);
        penemies4.lanza.posX = -576;
        penemies4.lanza.posY = 5952;

        var penemies5 = scene.physics.add.sprite(-1536, 2304, enemyType[2]);
        penemies.add(penemies5, true);
        penemies5.lanza = scene.physics.add.sprite(-1536, 2304, 'lanza');
        lanzasR.add(penemies5.lanza, true);
        penemies5.lanza.posX = -1536;
        penemies5.lanza.posY = 2304;

        var penemies6 = scene.physics.add.sprite(-2112, 2304, enemyType[2]);
        penemies.add(penemies6, true);
        penemies6.lanza = scene.physics.add.sprite(-2112, 2304, 'lanza');
        penemies6.lanza.angle = 180;
        lanzasL.add(penemies6.lanza, true);
        penemies6.lanza.posX = -2112;
        penemies6.lanza.posY = 2304;


        var enemiesp0 = scene.physics.add.sprite(1440, 17472, enemyType[0]);
        enemiesp.add(enemiesp0, true);
        enemiesp0.lanza = scene.physics.add.sprite(1440, 17472, 'lanza');
        enemiesp0.lanza.angle = 135;
        lanzasDL.add(enemiesp0.lanza, true);
        enemiesp0.lanza.posX = 1440;
        enemiesp0.lanza.posY = 17472;

        var enemiesp1 = scene.physics.add.sprite(480, 16896, enemyType[1]);
        enemiesp.add(enemiesp1, true);
        enemiesp1.lanza = scene.physics.add.sprite(480, 16896, 'lanza');
        enemiesp1.lanza.angle = 45;
        lanzasDR.add(enemiesp1.lanza, true);
        enemiesp1.lanza.posX = 480;
        enemiesp1.lanza.posY = 16896;

        var enemiesp2 = scene.physics.add.sprite(1728, 11232, enemyType[2]);
        enemiesp.add(enemiesp2, true);
        enemiesp2.lanza = scene.physics.add.sprite(1728, 11232, 'lanza');
        lanzasR.add(enemiesp2.lanza, true);
        enemiesp2.lanza.posX = 1728;
        enemiesp2.lanza.posY = 11232;

        var enemiesp3 = scene.physics.add.sprite(2304, 6912, enemyType[2]);
        enemiesp.add(enemiesp3, true);
        enemiesp3.lanza = scene.physics.add.sprite(2304, 6912, 'lanza');
        enemiesp3.lanza.angle = 180;
        lanzasL.add(enemiesp3.lanza, true);
        enemiesp3.lanza.posX = 2304;
        enemiesp3.lanza.posY = 6912;

        var enemiesp4 = scene.physics.add.sprite(2976, 5952, enemyType[2]);
        enemiesp.add(enemiesp4, true);
        enemiesp4.planza = scene.physics.add.sprite(2976, 5952, 'lanza');
        enemiesp4.lanza.angle = 135;
        lanzasDL.add(enemiesp4.lanza, true);
        enemiesp4.lanza.posX = 2976;
        enemiesp4.lanza.posY = 5952;

        var enemiesp5 = scene.physics.add.sprite(2016, 2304, enemyType[2]);
        enemiesp.add(enemiesp5, true);
        enemiesp5.lanza = scene.physics.add.sprite(2016, 2304, 'lanza');
        lanzasR.add(enemiesp5.lanza, true);
        enemiesp5.lanza.posX = 2016;
        enemiesp5.lanza.posY = 2304;

        var enemiesp6 = scene.physics.add.sprite(1440, 2304, enemyType[2]);
        enemiesp.add(enemiesp6, true);
        enemiesp6.lanza = scene.physics.add.sprite(1440, 2304, 'lanza');
        enemiesp6.lanza.angle = 180;
        lanzasL.add(enemiesp6.lanza, true);
        enemiesp6.lanza.posX = 1440;
        enemiesp6.lanza.posY = 2304;
    } else if (nLevel === 3) {
        var numberEnemies = 16;
        enemyType = randomTypeEnemies(numberEnemies);

        var penemies0 = scene.physics.add.sprite(-2592, 17952, enemyType[0]);
        penemies.add(penemies0, true);
        penemies0.lanza = scene.physics.add.sprite(-2592, 17952, 'lanza');
        penemies0.lanza.angle = 315;
        lanzasUR.add(penemies0.lanza, true);
        penemies0.lanza.posX = -2592;
        penemies0.lanza.posY = 17952;

        var penemies1 = scene.physics.add.sprite(-1536, 15744, enemyType[0]);
        penemies.add(penemies1, true);
        penemies1.lanza = scene.physics.add.sprite(-1536, 15744, 'lanza');
        lanzasR.add(penemies1.lanza, true);
        penemies1.lanza.posX = -1536;
        penemies1.lanza.posY = 15744;

        var penemies2 = scene.physics.add.sprite(-672, 12384, enemyType[2]);
        penemies.add(penemies2, true);
        penemies2.lanza = scene.physics.add.sprite(-672, 12384, 'lanza');
        penemies2.lanza.angle = 225;
        lanzasUL.add(penemies2.lanza, true);
        penemies2.lanza.posX = -672;
        penemies2.lanza.posY = 12384;

        var penemies3 = scene.physics.add.sprite(-2784, 7008, enemyType[2]);
        penemies.add(penemies3, true);
        penemies3.lanza = scene.physics.add.sprite(-2784, 7008, 'lanza');
        lanzasR.add(penemies3.lanza, true);
        penemies3.lanza.posX = -2784;
        penemies3.lanza.posY = 7008;

        var penemies4 = scene.physics.add.sprite(-2688, 3840, enemyType[2]);
        penemies.add(penemies4, true);
        penemies4.lanza = scene.physics.add.sprite(-2688, 3840, 'lanza');
        lanzasR.add(penemies4.lanza, true);
        penemies4.lanza.posX = -2688;
        penemies4.lanza.posY = 3840;

        var penemies5 = scene.physics.add.sprite(-2112, 3264, enemyType[2]);
        penemies.add(penemies5, true);
        penemies5.lanza = scene.physics.add.sprite(-2112, 3264, 'lanza');
        penemies5.lanza.angle = 135;
        lanzasDL.add(penemies5.lanza, true);
        penemies5.lanza.posX = -2112;
        penemies5.lanza.posY = 3264;

        var penemies6 = scene.physics.add.sprite(-1824, 2784, enemyType[2]);
        penemies.add(penemies6, true);
        penemies6.lanza = scene.physics.add.sprite(-1824, 2784, 'lanza');
        penemies6.lanza.angle = 180;
        lanzasL.add(penemies6.lanza, true);
        penemies6.lanza.posX = -1824;
        penemies6.lanza.posY = 2784;

        var penemies7 = scene.physics.add.sprite(-2400, 1056, enemyType[2]);
        penemies.add(penemies7, true);
        penemies7.lanza = scene.physics.add.sprite(-2400, 1056, 'lanza');
        penemies7.lanza.angle = 45;
        lanzasDR.add(penemies7.lanza, true);
        penemies7.lanza.posX = -2400;
        penemies7.lanza.posY = 1056;



        var enemiesp0 = scene.physics.add.sprite(960, 17952, enemyType[0]);
        enemiesp.add(enemiesp0, true);
        enemiesp0.lanza = scene.physics.add.sprite(960, 17952, 'lanza');
        enemiesp0.lanza.angle = 315;
        lanzasUR.add(enemiesp0.lanza, true);
        enemiesp0.lanza.posX = 960;
        enemiesp0.lanza.posY = 17952;

        var enemiesp1 = scene.physics.add.sprite(2016, 15744, enemyType[1]);
        enemiesp.add(enemiesp1, true);
        enemiesp1.lanza = scene.physics.add.sprite(2016, 15744, 'lanza');
        lanzasR.add(enemiesp1.lanza, true);
        enemiesp1.lanza.posX = 2016;
        enemiesp1.lanza.posY = 15744;

        var enemiesp2 = scene.physics.add.sprite(2880, 12384, enemyType[2]);
        enemiesp.add(enemiesp2, true);
        enemiesp2.lanza = scene.physics.add.sprite(2880, 12384, 'lanza');
        enemiesp2.lanza.angle = 225;
        lanzasUL.add(enemiesp2.lanza, true);
        enemiesp2.lanza.posX = 2880;
        enemiesp2.lanza.posY = 12384;

        var enemiesp3 = scene.physics.add.sprite(768, 7008, enemyType[2]);
        enemiesp.add(enemiesp3, true);
        enemiesp3.lanza = scene.physics.add.sprite(768, 7008, 'lanza');
        lanzasR.add(enemiesp3.lanza, true);
        enemiesp3.lanza.posX = 768;
        enemiesp3.lanza.posY = 7008;

        var enemiesp4 = scene.physics.add.sprite(864, 3840, enemyType[2]);
        enemiesp.add(enemiesp4, true);
        enemiesp4.planza = scene.physics.add.sprite(864, 59384052, 'lanza');
        lanzasR.add(enemiesp4.lanza, true);
        enemiesp4.lanza.posX = 864;
        enemiesp4.lanza.posY = 3840;

        var enemiesp5 = scene.physics.add.sprite(1440, 3264, enemyType[2]);
        enemiesp.add(enemiesp5, true);
        enemiesp5.lanza = scene.physics.add.sprite(1440, 3264, 'lanza');
        enemiesp5.lanza.angle = 135;
        lanzasDL.add(enemiesp5.lanza, true);
        enemiesp5.lanza.posX = 1440;
        enemiesp5.lanza.posY = 3264;

        var enemiesp6 = scene.physics.add.sprite(1728, 2784, enemyType[2]);
        enemiesp.add(enemiesp6, true);
        enemiesp6.lanza = scene.physics.add.sprite(1728, 2784, 'lanza');
        enemiesp6.lanza.angle = 180;
        lanzasL.add(enemiesp6.lanza, true);
        enemiesp6.lanza.posX = 1728;
        enemiesp6.lanza.posY = 2784;

        var enemiesp7 = scene.physics.add.sprite(1152, 1056, enemyType[2]);
        enemiesp.add(enemiesp7, true);
        enemiesp7.lanza = scene.physics.add.sprite(1152, 1056, 'lanza');
        enemiesp7.lanza.angle = 45;
        lanzasDR.add(enemiesp7.lanza, true);
        enemiesp7.lanza.posX = 1152;
        enemiesp7.lanza.posY = 1056;
    }

    //fisicas para los enemigos
    scene.physics.add.collider(penemies, layer);
    scene.physics.add.collider(enemiesp, layer);
    scene.physics.add.collider(lanzasL, layer, remplaceLanza);
    scene.physics.add.collider(lanzasR, layer, remplaceLanza);
    scene.physics.add.collider(lanzasDL, layer, remplaceLanza);
    scene.physics.add.collider(lanzasDR, layer, remplaceLanza);
    scene.physics.add.collider(lanzasUL, layer, remplaceLanza);
    scene.physics.add.collider(lanzasUR, layer, remplaceLanza);

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
    scene.physics.add.overlap(player1, lanzasDR, function (player1, lanzasR) {
        hitLanza(scene, player1, lanzasR);
    }, null, this);
    scene.physics.add.overlap(player2, lanzasDR, function (player2, lanzasR) {
        hitLanza(scene, player2, lanzasR);
    }, null, this);
    scene.physics.add.overlap(player1, lanzasDL, function (player1, lanzasR) {
        hitLanza(scene, player1, lanzasR);
    }, null, this);
    scene.physics.add.overlap(player2, lanzasDL, function (player2, lanzasR) {
        hitLanza(scene, player2, lanzasR);
    }, null, this);
    scene.physics.add.overlap(player1, lanzasL, function (player1, lanzasL) {
        hitLanza(scene, player1, lanzasR);
    }, null, this);
    scene.physics.add.overlap(player2, lanzasL, function (player2, lanzasL) {
        hitLanza(scene, player2, lanzasL);
    }, null, this);
    scene.physics.add.overlap(player1, lanzasUL, function (player1, lanzasL) {
        hitLanza(scene, player1, lanzasR);
    }, null, this);
    scene.physics.add.overlap(player2, lanzasUL, function (player2, lanzasL) {
        hitLanza(scene, player2, lanzasL);
    }, null, this);
    scene.physics.add.overlap(player1, lanzasUR, function (player1, lanzasL) {
        hitLanza(scene, player1, lanzasR);
    }, null, this);
    scene.physics.add.overlap(player2, lanzasUR, function (player2, lanzasL) {
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
    enemies.lanza.disableBody(true, true);
}

//movimiento lanzas
function moveLanzas() {
    lanzasR.setVelocityX(400);
    lanzasL.setVelocityX(-400);
    lanzasR.setVelocityY(0);
    lanzasL.setVelocityY(0);
    lanzasDR.setVelocity(400,400);
    lanzasDL.setVelocity(-400,400);
    lanzasUR.setVelocity(400,-400);
    lanzasUL.setVelocity(-400,-400);
}
