VolvaChronicle.preloadState = function(game) {

}

VolvaChronicle.preloadState.prototype = {

    preload: function() {
    	//muestra texto ("loading...") mientras el juego carga los assets
        var loadingText = game.add.text(80, 150, 'loading...');

        //cargar los assets

    },

    create: function() {
    	//inicia el estado del menu
    	game.state.start('menu');
    },

   /*update: function() {

    }*/
}