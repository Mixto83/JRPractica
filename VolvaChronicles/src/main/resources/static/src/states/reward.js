var rewardScene = new Phaser.Scene('reward');

var fondoRecompensa;
var randomNumber;
var runeName;
var obtainedRune;
var text;
var keyZ;
var text2;

rewardScene.active = true;

rewardScene.preload = function (){
    
}

rewardScene.create = function () {
    music = this.sound.add('rewardMusic');
    music.setLoop(true);
    music.play();

    //Input para saltar la pantalla de Reward
    keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

    //Cronometro
    //this.data.set('time', levelTime);
    randomReward(randomNumber, runeName);

    //Imagen de fondo
    fondoRecompensa = this.add.image(960, 540, 'fondoRecompensa');

    //Texto
    var style1 = {font: "50px Fantasy", fill: "#000"}; 
    var style2 = {font: "30px Fantasy", fill: "#000"};
    text = this.add.text(700, 400, '', style1);
    text2 = this.add.text(800, 800, 'Pulse Z para continuar', style2);
    //Recompensa
    if (player1.win) {
        text.setText([
            'Ganador: ¡Águila!',           
            'El Águila consigue: ' + runeName,
            'Tiempo: ' + levelTime,
        ]);
    } else {
        text.setText([
            'Ganador: ¡Nidhogg!',
            'Nidhogg consigue: ' + runeName,
            'Tiempo: ' + levelTime
        ]);
    }
    obtainedRune = rewardScene.add.image(960, 700, runeName);
}

rewardScene.update = function(){
    if(keyZ.isDown){
        
        if (currentLevel === 1){
            music.stop();
            keyZ.isDown = false;
            rewardScene.scene.start('level2');
        } else if (currentLevel === 2){     
            music.stop();      
            keyZ.isDown = false;
            rewardScene.scene.start('level3');
        }
        rewardScene.scene.stop();
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