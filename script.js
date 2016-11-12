var altitude = 0;
var rate = 5;
var smokeSize = 0;

function drawMe() {
    drawBackground();
    drawRoad();
    drawHedge();
    drawHouse();

    var interval = setInterval(drawSmoke, 50);
}

function useSlider() {
    //Update rate when changed
    rate = document.getElementById("slider").value; 
}

function drawSmoke() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    //Clears previous rectangle and performs the smoke animation
    ctx.clearRect(0, 0, ctx.canvas.width, 112);
    ctx.fillStyle = "#749034";
    ctx.fillRect(0, 0, canvas.width, 112);
    
    //Draws smoke
    ctx.strokeStyle = "rgb(242,242,242)";
    ctx.fillStyle = "rgb(242,242,242)";
    ctx.beginPath();
    ctx.arc(253, 89 - altitude, (5 * smokeSize), 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(243, 94 - altitude, (4 * smokeSize), 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(243, 105 - altitude, (5 * smokeSize), 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(255, 106 - altitude, (6 * smokeSize), 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(265, 104 - altitude, (5 * smokeSize), 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(262, 92 - altitude, (4 * smokeSize), 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    //Update smoke altitude and size
    altitude  = altitude + (rate / 1.3);
    if (smokeSize < 2) {
        smokeSize += 0.20;
    } else {
        smokeSize = 2;
    }   
    
    //Reset smoke stats if its outside of the canvas
    if (altitude > 140) {
        altitude = 0;
        smokeSize = 0;
    }
}

function drawBackground() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#749034";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawRoad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    //Draws sidewalk
    ctx.strokeStyle = "#b4b3b8";
    ctx.fillStyle = "#b4b3b8";
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(300, 500);
    ctx.lineTo(0, 500);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Draws path to house
    ctx.fillStyle = "#b4b3b8";
    ctx.beginPath();
    ctx.moveTo(92, 361);
    ctx.lineTo(144, 336);
    ctx.lineTo(172, 355);
    ctx.lineTo(120, 380);
    ctx.closePath();
    ctx.stroke();    
    ctx.fill();

    //Draws street
    ctx.strokeStyle = "#71726d";
    ctx.fillStyle = "#71726d";
    ctx.beginPath();
    ctx.moveTo(0, 350);
    ctx.lineTo(225, 500);
    ctx.lineTo(0, 500);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function drawHouse() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    ctx.strokeStyle = "black";

    //Draws front of house
    ctx.fillStyle = "#cb95ad";
    ctx.beginPath();
    ctx.moveTo(250, 306);
    ctx.lineTo(189, 191);
    ctx.lineTo(129, 226);
    ctx.lineTo(129, 326);
    ctx.lineTo(250, 406);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    
    //Draws side of house
    ctx.fillStyle = "#a2768a";
    ctx.beginPath();
    ctx.moveTo(250, 306);
    ctx.lineTo(250, 406);
    ctx.lineTo(411, 326);
    ctx.lineTo(411, 226);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    
    //Draws roof
    ctx.fillStyle = "#7a706f";
    ctx.beginPath();
    ctx.moveTo(189, 191);
    ctx.lineTo(351, 112);
    ctx.lineTo(418, 241);
    ctx.lineTo(256, 319);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(111, 236);
    ctx.lineTo(189, 191);
    ctx.closePath();
    ctx.stroke();

    //Draws front of chimney
    ctx.fillStyle = "#cb95ad";
    ctx.beginPath();
    ctx.moveTo(234, 123);
    ctx.lineTo(234, 169);
    ctx.lineTo(255, 159);
    ctx.lineTo(255, 137);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Draws side of chimney
    ctx.fillStyle = "#a2768a";
    ctx.beginPath();
    ctx.moveTo(255, 137);
    ctx.lineTo(255, 159);
    ctx.lineTo(278, 148);
    ctx.lineTo(278, 126);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Draws top of chimney
    ctx.fillStyle = "#9d9a95";
    ctx.beginPath();
    ctx.moveTo(234, 123);
    ctx.lineTo(255, 137);
    ctx.lineTo(278, 126);
    ctx.lineTo(257, 112);
    ctx.closePath();
    ctx.stroke();    
    ctx.fill();

    //Draws inside of chimney
    ctx.fillStyle = "#494347";
    ctx.beginPath();
    ctx.moveTo(241, 124);
    ctx.lineTo(257, 116);
    ctx.lineTo(271, 125);
    ctx.lineTo(256, 133);
    ctx.closePath();
    ctx.stroke();    
    ctx.fill();

    //Draws door
    ctx.fillStyle = "#955b0e";
    ctx.beginPath();
    ctx.moveTo(145, 329);
    ctx.lineTo(145, 269);
    ctx.lineTo(170, 285);
    ctx.lineTo(170, 345);
    ctx.closePath();
    ctx.stroke();    
    ctx.fill();

    ctx.strokeStyle = "#e8e4e9";
    ctx.lineWidth = 3;

    //Draws door trim
    ctx.beginPath();
    ctx.moveTo(145, 330);
    ctx.lineTo(145, 269);
    ctx.lineTo(170, 285);
    ctx.lineTo(170, 346);
    ctx.stroke();

    //Draws front lower window
    ctx.fillStyle = "#b1d7fd";
    ctx.beginPath();
    ctx.moveTo(195, 340);
    ctx.lineTo(195, 310);
    ctx.lineTo(233, 335);
    ctx.lineTo(233, 365);
    ctx.closePath();    
    ctx.fill();
    ctx.stroke();

    //Draws front top window
    ctx.fillStyle = "#b1d7fd";
    ctx.beginPath();
    ctx.moveTo(170, 256);
    ctx.lineTo(170, 226);
    ctx.lineTo(208, 251);
    ctx.lineTo(208, 281);
    ctx.closePath();   
    ctx.fill();
    ctx.stroke();

    //Draws first side window
    ctx.fillStyle = "#b1d7fd";
    ctx.beginPath();
    ctx.moveTo(269, 337);
    ctx.lineTo(269, 367);
    ctx.lineTo(316, 344);
    ctx.lineTo(316, 314);
    ctx.closePath();    
    ctx.fill();
    ctx.stroke();

    //Draws second side window
    ctx.fillStyle = "#b1d7fd";
    ctx.beginPath();
    ctx.moveTo(347, 299);
    ctx.lineTo(347, 329);
    ctx.lineTo(395, 305);
    ctx.lineTo(395, 275);
    ctx.closePath();    
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 1;

    //Draws top of door steps
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#b4b3b8";
    ctx.beginPath();
    ctx.moveTo(135, 332);
    ctx.lineTo(144, 328);
    ctx.lineTo(172, 347);
    ctx.lineTo(163, 351);
    ctx.closePath();
    ctx.stroke();    
    ctx.fill();

    //Draws side of door steps
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#81807b";
    ctx.beginPath();
    ctx.moveTo(163, 351);
    ctx.lineTo(172, 347);
    ctx.lineTo(172, 355);
    ctx.lineTo(163, 359);
    ctx.closePath();
    ctx.stroke();    
    ctx.fill();

    //Draws front of door steps
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#9d9a95";
    ctx.beginPath();
    ctx.moveTo(135, 332);
    ctx.lineTo(163, 351);
    ctx.lineTo(163, 359);
    ctx.lineTo(135, 340);
    ctx.closePath();
    ctx.stroke();    
    ctx.fill();
}

function drawHedge() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    ctx.strokeStyle = "black";

    //Draws front of hedge on near side front yard
    ctx.fillStyle = "#528921";
    ctx.beginPath();
    ctx.moveTo(120, 362);
    ctx.lineTo(245, 446);
    ctx.lineTo(245, 463);
    ctx.lineTo(120, 380);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Draws front of hedge on far side front yard
    ctx.fillStyle = "#528921";
    ctx.beginPath();
    ctx.moveTo(20, 296);
    ctx.lineTo(92, 344);
    ctx.lineTo(92, 361);
    ctx.lineTo(20, 313);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Draws front of hedge on back yard
    ctx.fillStyle = "#528921";
    ctx.beginPath();
    ctx.moveTo(411, 272);
    ctx.lineTo(486, 321);
    ctx.lineTo(471, 329);
    ctx.lineTo(411, 289);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Draws side of hedge on near side
    ctx.fillStyle = "#3d631a";
    ctx.beginPath();
    ctx.moveTo(245, 446);
    ctx.lineTo(497, 322);
    ctx.lineTo(497, 339);
    ctx.lineTo(245, 463);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Draws side of hedge on path side
    ctx.fillStyle = "#3d631a";
    ctx.beginPath();
    ctx.moveTo(92, 344);
    ctx.lineTo(98, 340);
    ctx.lineTo(98, 358);
    ctx.lineTo(92, 361);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Draws side of hedge on far side
    ctx.fillStyle = "#3d631a";
    ctx.beginPath();
    ctx.moveTo(33, 297);
    ctx.lineTo(129, 250);
    ctx.lineTo(129, 268);
    ctx.lineTo(48, 307);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //Draws top of hedge
    ctx.fillStyle = "#76a547";
    ctx.beginPath();
    ctx.moveTo(120, 362);
    ctx.lineTo(127, 359);
    ctx.lineTo(245, 438);
    ctx.lineTo(486, 321);
    ctx.lineTo(411, 272);
    ctx.lineTo(129, 250);
    ctx.lineTo(33, 297);
    ctx.lineTo(98, 340);
    ctx.lineTo(92, 344);
    ctx.lineTo(20, 296);
    ctx.lineTo(129, 243);
    ctx.lineTo(411, 264);
    ctx.lineTo(498, 322);
    ctx.lineTo(245, 446);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}