var map;
var layer;
var cursors;
var camera1, camera2;

createTileMap = function(scene, nLevel){
    map = scene.make.tilemap({ key: "map"+nLevel, tileWidth: 48, tileHeight: 48});
    var tileset = map.addTilesetImage('tiles');
    
    layer = map.createStaticLayer(0, tileset, 0,0);
}

createCameras = function(scene){
    scene.cameras.main.setSize(960,1080);
	camera1 = scene.cameras.main;
	camera2 = scene.cameras.add(960, 0, 960, 1080);
}