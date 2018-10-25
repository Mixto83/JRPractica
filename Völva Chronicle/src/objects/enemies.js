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
    penemies = scene.physics.add.group();
    enemiesp = scene.physics.add.group();
    lanzasR = scene.physics.add.group();
    lanzasL = scene.physics.add.group();


    if (nLevel === 1) {
        var numberEnemies = 6; //numero de enemigos en este nive

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
    else if (nLevel === 2) {
        var numberEnemies = 14;
        enemyType = randomTypeEnemies(numberEnemies);
        
        
        var penemies0 = scene.physics.add.sprite(-2112, 17472, enemyType[0]);
        penemies.add(penemies0, true);
        var planza0 = scene.physics.add.sprite(-2112, 17472, 'lanzaL');
        lanzasL.add(planza0, true);
        planza0.posX = -2112;
        planza0.posY = 17472;

        var penemies1 = scene.physics.add.sprite(-3072, 16896, enemyType[1]);
        penemies.add(penemies1, true);
        var planza1 = scene.physics.add.sprite(-3072, 16896, 'lanzaR');
        lanzasR.add(planza1, true);
        planza1.posX = -3072;
        planza1.posY = 16896;

        var penemies2 = scene.physics.add.sprite(-1824, 11232, enemyType[2]);
        penemies.add(penemies2, true);
        var planza2 = scene.physics.add.sprite(-1824, 11232, 'lanzaR');
        lanzasR.add(planza2, true);
        planza2.posX = -1824;
        planza2.posY = 11232;
        
        var penemies3 = scene.physics.add.sprite(-1248, 6912, enemyType[2]);
        penemies.add(penemies3, true);
        var planza3 = scene.physics.add.sprite(-1248, 6912, 'lanzaL');
        lanzasL.add(planza3, true);
        planza3.posX = -1248;
        planza3.posY = 6912;
        
        var penemies4 = scene.physics.add.sprite(-576, 5952, enemyType[2]);
        penemies.add(penemies4, true);
        var planza4 = scene.physics.add.sprite(-576, 5952, 'lanzaL');
        lanzasL.add(planza4, true);
        planza4.posX = -576;
        planza4.posY = 5952;
        
        var penemies5 = scene.physics.add.sprite(-1536, 2304, enemyType[2]);
        penemies.add(penemies5, true);
        var planza5 = scene.physics.add.sprite(-1536, 2304, 'lanzaR');
        lanzasR.add(planza5, true);
        planza5.posX = -1536;
        planza5.posY = 2304;
        
        var penemies6 = scene.physics.add.sprite(-2112, 2304, enemyType[2]);
        penemies.add(penemies6, true);
        var planza6 = scene.physics.add.sprite(-2112, 2304, 'lanzaL');
        lanzasL.add(planza6, true);
        planza6.posX = -2112;
        planza6.posY = 2304;
        
        
        var enemiesp0 = scene.physics.add.sprite(1440, 17472, enemyType[0]);
        enemiesp.add(enemiesp0, true);
        var lanzap0 = scene.physics.add.sprite(1440, 17472, 'lanzaL');
        lanzasL.add(lanzap0, true);
        lanzap0.posX = 1440;
        lanzap0.posY = 17472;

        var enemiesp1 = scene.physics.add.sprite(480, 16896, enemyType[1]);
        enemiesp.add(enemiesp1, true);
        var lanzap1 = scene.physics.add.sprite(480, 16896, 'lanzaR');
        lanzasR.add(lanzap1, true);
        lanzap1.posX = 480;
        lanzap1.posY = 16896;

        var enemiesp2 = scene.physics.add.sprite(1728, 11232, enemyType[2]);
        enemiesp.add(enemiesp2, true);
        var lanzap2 = scene.physics.add.sprite(1728, 11232, 'lanzaR');
        lanzasR.add(lanzap2, true);
        lanzap2.posX = 1728;
        lanzap2.posY = 11232;
        
        var enemiesp3 = scene.physics.add.sprite(2304, 6912, enemyType[2]);
        enemiesp.add(enemiesp3, true);
        var lanzap3 = scene.physics.add.sprite(2304, 6912, 'lanzaL');
        lanzasL.add(lanzap3, true);
        lanzap3.posX = 2304;
        lanzap3.posY = 6912;
        
        var enemiesp4 = scene.physics.add.sprite(2976, 5952, enemyType[2]);
        enemiesp.add(enemiesp4, true);
        var planzap4 = scene.physics.add.sprite(2976, 5952, 'lanzaL');
        lanzasL.add(lanzap4, true);
        lanzap4.posX = 2976;
        lanzap4.posY = 5952;
        
        var enemiesp5 = scene.physics.add.sprite(2016, 2304, enemyType[2]);
        enemiesp.add(enemiesp5, true);
        var lanzap5 = scene.physics.add.sprite(2016, 2304, 'lanzaR');
        lanzasR.add(lanzap5, true);
        lanzap5.posX = 2016;
        lanzap5.posY = 2304;
        
        var enemiesp6 = scene.physics.add.sprite(1440, 2304, enemyType[2]);
        enemiesp.add(enemiesp6, true);
        var lanzap6 = scene.physics.add.sprite(1440, 2304, 'lanzaL');
        lanzasL.add(lanzap6, true);
        lanzap6.posX = 1440;
        lanzap6.posY = 2304;
    } 
    else if (nLevel === 3) {
        var numberEnemies = 16;
        enemyType = randomTypeEnemies(numberEnemies);
        
        
        var penemies0 = scene.physics.add.sprite(-2592, 17952, enemyType[0]);
        penemies.add(penemies0, true);
        var planza0 = scene.physics.add.sprite(-2592, 17952, 'lanzaR');
        lanzasR.add(planza0, true);
        planza0.posX = -2592 ;
        planza0.posY = 17952;
        
        var penemies1 = scene.physics.add.sprite(-1536, 15744, enemyType[0]);
        penemies.add(penemies1, true);
        var planza1 = scene.physics.add.sprite(-1536, 15744, 'lanzaR');
        lanzasR.add(planza1, true);
        planza1.posX = -1536 ;
        planza1.posY = 15744;
        
        var penemies2 = scene.physics.add.sprite(-672, 12384, enemyType[2]);
        penemies.add(penemies2, true);
        var planza2 = scene.physics.add.sprite(-672, 12384, 'lanzaL');
        lanzasL.add(planza2, true);
        planza2.posX = -672;
        planza2.posY = 12384;
        
        var penemies3 = scene.physics.add.sprite(-2784, 7008, enemyType[2]);
        penemies.add(penemies3, true);
        var planza3 = scene.physics.add.sprite(-2784, 7008, 'lanzaR');
        lanzasR.add(planza3, true);
        planza3.posX = -2784;
        planza3.posY = 7008;
        
        var penemies4 = scene.physics.add.sprite(-2688, 3840, enemyType[2]);
        penemies.add(penemies4, true);
        var planza4 = scene.physics.add.sprite(-2688, 3840, 'lanzaR');
        lanzasR.add(planza4, true);
        planza4.posX = -2688;
        planza4.posY = 3840;
        
        var penemies5 = scene.physics.add.sprite(-2112, 3264, enemyType[2]);
        penemies.add(penemies5, true);
        var planza5 = scene.physics.add.sprite(-2112, 3264, 'lanzaL');
        lanzasL.add(planza5, true);
        planza5.posX = -2112;
        planza5.posY = 3264;
        
        var penemies6 = scene.physics.add.sprite(-1824, 2784, enemyType[2]);
        penemies.add(penemies6, true);
        var planza6 = scene.physics.add.sprite(-1824, 2784, 'lanzaL');
        lanzasL.add(planza6, true);
        planza6.posX = -1824;
        planza6.posY = 2784;
        
        var penemies7 = scene.physics.add.sprite(-2400, 1056, enemyType[2]);
        penemies.add(penemies7, true);
        var planza7 = scene.physics.add.sprite(-2400, 1056, 'lanzaR');
        lanzasR.add(planza7, true);
        planza7.posX = -2400;
        planza7.posY = 1056;
        
        
        
        var enemiesp0 = scene.physics.add.sprite(960, 17952, enemyType[0]);
        enemiesp.add(enemiesp0, true);
        var lanzap0 = scene.physics.add.sprite(960, 17952, 'lanzaL');
        lanzasL.add(lanzap0, true);
        lanzap0.posX = 960;
        lanzap0.posY = 17952;

        var enemiesp1 = scene.physics.add.sprite(2016, 15744, enemyType[1]);
        enemiesp.add(enemiesp1, true);
        var lanzap1 = scene.physics.add.sprite(2016, 15744, 'lanzaR');
        lanzasR.add(lanzap1, true);
        lanzap1.posX = 2016;
        lanzap1.posY = 15744;

        var enemiesp2 = scene.physics.add.sprite(2880, 12384, enemyType[2]);
        enemiesp.add(enemiesp2, true);
        var lanzap2 = scene.physics.add.sprite(2880, 12384, 'lanzaR');
        lanzasR.add(lanzap2, true);
        lanzap2.posX = 2880;
        lanzap2.posY = 12384;
        
        var enemiesp3 = scene.physics.add.sprite(768, 7008, enemyType[2]);
        enemiesp.add(enemiesp3, true);
        var lanzap3 = scene.physics.add.sprite(768, 7008, 'lanzaL');
        lanzasL.add(lanzap3, true);
        lanzap3.posX = 768;
        lanzap3.posY = 7008;
        
        var enemiesp4 = scene.physics.add.sprite(864, 3840, enemyType[2]);
        enemiesp.add(enemiesp4, true);
        var planzap4 = scene.physics.add.sprite(864, 59384052, 'lanzaL');
        lanzasL.add(lanzap4, true);
        lanzap4.posX = 864;
        lanzap4.posY = 3840;
        
        var enemiesp5 = scene.physics.add.sprite(1440, 3264, enemyType[2]);
        enemiesp.add(enemiesp5, true);
        var lanzap5 = scene.physics.add.sprite(1440, 3264, 'lanzaR');
        lanzasR.add(lanzap5, true);
        lanzap5.posX = 1440;
        lanzap5.posY = 3264;
        
        var enemiesp6 = scene.physics.add.sprite(1728, 2784, enemyType[2]);
        enemiesp.add(enemiesp6, true);
        var lanzap6 = scene.physics.add.sprite(1728, 2784, 'lanzaL');
        lanzasL.add(lanzap6, true);
        lanzap6.posX = 1728;
        lanzap6.posY = 2784;
        
        var enemiesp7 = scene.physics.add.sprite(1152, 1056, enemyType[2]);
        enemiesp.add(enemiesp7, true);
        var lanzap7 = scene.physics.add.sprite(1152, 1056, 'lanzaR');
        lanzasR.add(lanzap7, true);
        lanzap7.posX = 1152;
        lanzap7.posY = 1056;
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
