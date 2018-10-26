var rewardScene = new Phaser.Scene('reward');

var fondoRecompensa;
var randomNumber;
var runeName;
var obtainedRune;
var text;
var keyZ;

rewardScene.active = true;

rewardScene.preload = function (){
    
}

rewardScene.create = function () {

    //Input para saltar la pantalla de Reward
    keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

    //Cronometro
    //this.data.set('time', levelTime);
    randomReward(randomNumber, runeName);

    //Imagen de fondo
    fondoRecompensa = this.add.image(960, 540, 'fondoRecompensa');

    //Texto
    var style = {font: "Matura MT Script Capitals", fontSize: '50px', fill: "#CC993"}; 
    text = this.add.text(960, 480, '', style);
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
}

rewardScene.update = function(){
    //Salta bien al nivel 2, pero salta automaticamente al 3 porque considera que Z está pulsada.
    if(keyZ.isDown){
        if (currentLevel === 1){
            rewardScene.scene.start('level2');
        } else if (currentLevel === 2){
            rewardScene.scene.start('level3');
        }
    }
}

randomReward = function() {
    randomNumber = Phaser.Math.Between(1,5);
    if (randomNumber === 1) {
        runeName = 'hemodr';
    } else if (randomNumber === 2) {
        runeName = 'njord';
    } else if (randomNumber === 3) {
        runeName = 'skadi';
    } else if (randomNumber === 4) {
        runeName = 'tir';
    } else {
        runeName = 'bragi';
    }
}