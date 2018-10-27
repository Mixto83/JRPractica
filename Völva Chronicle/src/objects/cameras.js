var camera1, camera2;
var boolCam1 = false;
var boolCam2 = false;
createCameras = function(scene){
    scene.cameras.main.setSize(950,1060);
    
    camera1 = scene.cameras.main;
    camera1.setBounds(-3501, 0, 3501, 19578);
    camera1.startFollow(player1, true, 0.08, 0.08);
    
	camera2 = scene.cameras.add(950, 0, 950, 1060);
    camera2.setBounds(0,0,7008,19578);
    camera2.startFollow(player2, true, 0.08, 0.08);
}

updateCameras = function(player1,player2){
    console.log('Estamina P1: ' + player1.contStamine);

    if (player1.contStamine < 35 && !boolCam1){
        boolCam1 = true;
        camera1.fadeEffect.alpha = 0.7;
        camera1.fadeOut(250);
    } else if (player1.contStamine > 35 && boolCam1){
        boolCam1 = false;
        camera1.fadeEffect.alpha = 1.0;
        camera1.fadeIn(250);
    }

    if (player2.contStamine < 35 && !boolCam2){
        boolCam2 = true;
        camera2.fadeEffect.alpha = 0.7;
        camera2.fadeOut(250);
    } else if (player2.contStamine > 35 && boolCam2){
        boolCam2 = false;
        camera2.fadeEffect.alpha = 1.0;
        camera2.fadeIn(250);
    }
}