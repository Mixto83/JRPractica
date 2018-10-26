var rewardScene = new Phaser.Scene('reward');

var fondoRecompensa;
var randomNumber;
var runeName;
var obtainedRune;
var text;
var keySpace;

rewardScene.active = true;

rewardScene.preload = function (){
    
}

rewardScene.create = function () {

    //Cronometro
    //this.data.set('time', levelTime);
    randomReward(randomNumber, runeName);

    //Imagen de fondo
    fondoRecompensa = this.add.image(960, 540, 'fondoRecompensa');

    //Texto
    var style = {font: "Matura MT Script Capitals", fontSize: '50px', fill: "#CC993"}; 
    text = this.add.text(960, 480, '', style);

    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

    //Recompensa
    if (player1.win) {
        console.log('Gana aguila');
        text.setText([
            'Ganador: ¡Águila!',
            'Tiempo: ' + levelTime,
            'El Águila consigue: ' + runeName
        ]);
    } else { 
        console.log('Gana Nidhogg');
        text.setText([
            'Ganador: ¡Nidhogg!',
            'Tiempo: ' + levelTime,
            'Nidhogg consigue: ' + runeName
        ]);
    }
    obtainedRune = rewardScene.add.image(960, 750, runeName);

    if (currentLevel === 1) {
        //Pasamos al nivel 2
        if (keySpace.isDown) {
            rewardScene.scene.start('level2');
        }
            
    } else if (currentLevel === 2) {
        //Pasamos al nivel 3
        if (keySpace.isDown) {
            rewardScene.scene.start('level3');
        }
    }
}

randomReward = function() {
    randomNumber = Phaser.Math.Between(1,5);
    if (randomNumber === 1) {
        runeName = 'runaHermodr';
    } else if (randomNumber === 2) {
        runeName = 'runaNjord';
    } else if (randomNumber === 3) {
        runeName = 'runaSkadi';
    } else if (randomNumber === 4) {
        runeName = 'runaTir';
    } else {
        runeName = 'runaBragi';
    }
}