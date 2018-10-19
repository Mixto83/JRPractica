var camera1, camera2;

createCameras = function(scene){
    scene.cameras.main.setSize(950,1060);
    
    camera1 = scene.cameras.main;
    camera1.setBounds(-3501, 0, 3501, 19578);
    camera1.startFollow(player1, true, 0.08, 0.08);
    
	camera2 = scene.cameras.add(950, 0, 950, 1060);
    camera2.setBounds(0,0,7008,19578);
    camera2.startFollow(player2, true, 0.08, 0.08);
}