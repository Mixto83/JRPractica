var VolvaChronicle = {};

VolvaChronicle.bootState = function(game) {

}

VolvaChronicle.bootState.prototype = {

    /*preload: function() {
        
    },*/

    create: function() {
    	//inicia fisicas arcade
    	game.physics.startSystem(Phaser.Physics.ARCADE);

    	//carga estado de carga (preload)
    	game.state.start('preload');
    },

    /*update: function() {

    }*/
}