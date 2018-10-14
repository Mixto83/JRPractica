let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics:{
        default: 'arcade',
        arcade:{
            gravity:{ y: 500 },
            debug: false
        }
    },
    scene: [bootScene, preloadScene, menuScene, introScene, level1Scene,
    level2Scene, level3Scene, rewardScene, ending1Scene, ending2Scene]
};

let game = new Phaser.Game(config);