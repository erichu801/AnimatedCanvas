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
    ctx.fillStyle = "#fcfef9";
    ctx.beginPath();
    ctx.moveTo(234, 132);
    ctx.lineTo(234, 169);
    ctx.lineTo(255, 159);
    ctx.lineTo(255, 146);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //side of chimney
    ctx.fillStyle = "#9d9a95";
    ctx.beginPath();
    ctx.moveTo(255, 146);
    ctx.lineTo(255, 159);
    ctx.lineTo(278, 148);
    ctx.lineTo(278, 135);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //top of chimney
    ctx.fillStyle = "#9d9a95";
    ctx.beginPath();
    ctx.moveTo(234, 132);
    ctx.lineTo(255, 146);
    ctx.lineTo(278, 135);
    ctx.lineTo(257, 121);
    ctx.closePath();
    ctx.stroke();    
    ctx.fill();

}