var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

game.state.add('boot', VolvaChronicle.bootState);
game.state.add('preload', VolvaChronicle.preloadState);
game.state.add('menu', VolvaChronicle.menuState);
game.state.add('intro',VolvaChronicle.introState);
game.state.add('level1', VolvaChronicle.level1State);
game.state.add('level2', VolvaChronicle.level2State);
game.state.add('level3', VolvaChronicle.level3State);
game.state.add('reward', VolvaChronicle.rewardState);
game.state.add('ending1', VolvaChronicle.ending1State);
game.state.add('ending2', VolvaChronicle.ending2State);
  
game.state.start('boot');
