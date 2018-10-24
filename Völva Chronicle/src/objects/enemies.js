//Enemigos
var penemies; //array de enemigos para el player 1
var enemiesp; //arrary de enemigos para el player 2
var enemyType1 = 'aguila';
var enemyType2 = 'aguila';

var createEnemy = function (scene, nLevel) {
    var ranEnemy; //variable para el numero random
    var enemyType = []; //array de tipos de enemgios


    if (nLevel === 1) {
        var numberEnemies = 6; //numero de enemigos en este nive
        penemies = scene.physics.add.group();
        enemiesp = scene.physics.add.group();

        enemyType = randomTypeEnemies(numberEnemies); //se ponen tipos de enemigos al azar

        var penemies0 = scene.physics.add.sprite(-3020, 5760, enemyType[0]);
        penemies.add(penemies0, true);
        var penemies1 = scene.physics.add.sprite(-2168, 2208, enemyType[1]);
        penemies.add(penemies1, true);
        var penemies2 = scene.physics.add.sprite(-1100, 2500, enemyType[2]);
        penemies.add(penemies2, true);

        var enemiesp0 = scene.physics.add.sprite(532, 5760, enemyType[3]);
        enemiesp.add(enemiesp0, true);
        var enemiesp1 = scene.physics.add.sprite(1384, 2208, enemyType[4]);
        enemiesp.add(enemiesp1, true);
        var enemiesp2 = scene.physics.add.sprite(2452, 2500, enemyType[5]);
        enemiesp.add(enemiesp2, true);
    }

    //fisicas para los enemigos
    scene.physics.add.collider(penemies, layer);
    scene.physics.add.collider(enemiesp, layer);

    //solo puede luchar cada uno con sus propios enemigos
    scene.physics.add.overlap(player1, penemies, function (player1, penemies) {
        fightEnemies(scene, player1, penemies);
    }, null, this);
    scene.physics.add.overlap(player2, enemiesp, function (player2, enemiesp) {
        fightEnemies(scene, player2, enemiesp);
    }, null, this);

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
