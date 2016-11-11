var altitude = 0;
var rate = 5;
var smokeSize = 0;

function useSlider() {
    //update rate when changed
    rate = document.getElementById("slider").value; 
    //prints rate on screen
    document.getElementById("demo").innerHTML = rate;
}

function drawSmoke() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    //Clear previous rectangle perform the smoke animation
    ctx.clearRect(0, 0, ctx.canvas.width, 112);
    ctx.fillStyle = "#749034";
    ctx.fillRect(0, 0, canvas.width, 112);
    
    //draws smoke
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

function drawMe() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    //draws background
    ctx.fillStyle = "#749034";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //draws sidewalk
    ctx.strokeStyle = "#b4b3b8";
    ctx.fillStyle = "#b4b3b8";
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(300, 500);
    ctx.lineTo(0, 500);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //draws path
    ctx.fillStyle = "#b4b3b8";
    ctx.beginPath();
    ctx.moveTo(92, 361);
    ctx.lineTo(144, 336);
    ctx.lineTo(172, 355);
    ctx.lineTo(120, 380);
    ctx.closePath();
    ctx.stroke();    
    ctx.fill();

    //draws street
    ctx.strokeStyle = "#71726d";
    ctx.fillStyle = "#71726d";
    ctx.beginPath();
    ctx.moveTo(0, 350);
    ctx.lineTo(225, 500);
    ctx.lineTo(0, 500);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    
    ctx.strokeStyle = "black";

    //front of house
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
    
    //side of house
    ctx.fillStyle = "#a2768a";
    ctx.beginPath();
    ctx.moveTo(250, 306);
    ctx.lineTo(250, 406);
    ctx.lineTo(411, 326);
    ctx.lineTo(411, 226);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    
    //roof
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

    //front of chimney
    ctx.fillStyle = "#cb95ad";
    ctx.beginPath();
    ctx.moveTo(234, 123);
    ctx.lineTo(234, 169);
    ctx.lineTo(255, 159);
    ctx.lineTo(255, 137);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //side of chimney
    ctx.fillStyle = "#a2768a";
    ctx.beginPath();
    ctx.moveTo(255, 137);
    ctx.lineTo(255, 159);
    ctx.lineTo(278, 148);
    ctx.lineTo(278, 126);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //top of chimney
    ctx.fillStyle = "#9d9a95";
    ctx.beginPath();
    ctx.moveTo(234, 123);
    ctx.lineTo(255, 137);
    ctx.lineTo(278, 126);
    ctx.lineTo(257, 112);
    ctx.closePath();
    ctx.stroke();    
    ctx.fill();

    //inside of chimney
    ctx.fillStyle = "#494347";
    ctx.beginPath();
    ctx.moveTo(241, 124);
    ctx.lineTo(257, 116);
    ctx.lineTo(271, 125);
    ctx.lineTo(256, 133);
    ctx.closePath();
    ctx.stroke();    
    ctx.fill();

    //draws door
    ctx.fillStyle = "#955b0e";
    ctx.beginPath();
    ctx.moveTo(145, 337);
    ctx.lineTo(145, 277);
    ctx.lineTo(170, 293);
    ctx.lineTo(170, 353);
    ctx.closePath();
    ctx.stroke();    
    ctx.fill();

    ctx.strokeStyle = "#e8e4e9";
    ctx.lineWidth = 3;

    //draws door trim
    ctx.beginPath();
    ctx.moveTo(145, 338);
    ctx.lineTo(145, 277);
    ctx.lineTo(170, 293);
    ctx.lineTo(170, 354);
    ctx.stroke();

    //draws front lower window
    ctx.fillStyle = "#b1d7fd";
    ctx.beginPath();
    ctx.moveTo(195, 340);
    ctx.lineTo(195, 310);
    ctx.lineTo(233, 335);
    ctx.lineTo(233, 365);
    ctx.closePath();    
    ctx.fill();
    ctx.stroke();

    //draws front top window
    ctx.fillStyle = "#b1d7fd";
    ctx.beginPath();
    ctx.moveTo(170, 256);
    ctx.lineTo(170, 226);
    ctx.lineTo(208, 251);
    ctx.lineTo(208, 281);
    ctx.closePath();   
    ctx.fill();
    ctx.stroke();

    //draws first side window
    ctx.fillStyle = "#b1d7fd";
    ctx.beginPath();
    ctx.moveTo(269, 337);
    ctx.lineTo(269, 367);
    ctx.lineTo(316, 344);
    ctx.lineTo(316, 314);
    ctx.closePath();    
    ctx.fill();
    ctx.stroke();

    //draws second side window
    ctx.fillStyle = "#b1d7fd";
    ctx.beginPath();
    ctx.moveTo(347, 299);
    ctx.lineTo(347, 329);
    ctx.lineTo(395, 305);
    ctx.lineTo(395, 275);
    ctx.closePath();    
    ctx.fill();
    ctx.stroke();
    
    var interval = setInterval(drawSmoke, 50);
}

