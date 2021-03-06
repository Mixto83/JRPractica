var camera1, camera2;
var boolCam1 = false;
var boolCam2 = false;

//inicia las cámaras y las asocia a cada jugador
createCameras = function (scene) {
    scene.cameras.main.setSize(950, 1060);

    camera1 = scene.cameras.main;
    camera1.setBounds(-3501, 0, 3501, 19578);
    camera1.startFollow(player1, true, 0.08, 0.08);

    camera2 = scene.cameras.add(950, 0, 950, 1060);
    camera2.setBounds(0, 0, 7008, 19578);
    camera2.startFollow(player2, true, 0.08, 0.08);
}

//Añade efectos de fade a las camaras dependiendo del nivel de estamina de los jugadores
updateCameras = function (player1, player2) {

    //Si el jugador 1 se queda sin estamina, el fade es azul
    if (player1.contStamine < 35 && !boolCam1) {
        boolCam1 = true;
        camera1.fade(25, 0, 0, 255);
    } else if (player1.contStamine > 35 && boolCam1) {
        boolCam1 = false;
        camera1.fadeFrom(1000, 0, 0, 255);
    }

    //Si el jugador 1 se queda sin estamina, el fade es rojo
    if (player2.contStamine < 35 && !boolCam2) {
        boolCam2 = true;
        camera2.fade(25, 255, 0, 0);
    } else if (player2.contStamine > 35 && boolCam2) {
        boolCam2 = false;
        camera2.fadeFrom(1000, 255, 0, 0);
    }
}
