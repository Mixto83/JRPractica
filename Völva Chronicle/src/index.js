let config = {
    type: Phaser.AUTO,
    width: 1900,
    height: 1060,
    physics:{
        default: 'arcade',
        arcade:{
            gravity:{ y: 800 },
            debug: false
        }
    },
    scene: [bootScene, preloadScene, menuScene, introScene, level1Scene,
    level2Scene, level3Scene, rewardScene, ending1Scene, ending2Scene],
    fps: {
        min: 10,
        target: 30,
        forceSetTimeOut: false,
        deltaHistory: 10
    }
};

let game = new Phaser.Game(config);