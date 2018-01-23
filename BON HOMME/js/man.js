var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//head
ctx.beginPath();
ctx.lineWidth = "3";
ctx.strokeStyle = "black";
ctx.arc(500, 100, 50, 0, 2*Math.PI);
ctx.stroke();

//mounth
ctx.beginPath();
ctx.lineWidth= "2";
ctx.strokeStyle = "black";
ctx.arc(500, 125, 10, 0, Math.PI);
ctx.stroke();

//right-eye
ctx.beginPath();
ctx.lineWidth = "3";
ctx.strokeStyle = "black";
ctx.arc(475, 95, 10, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "3";
ctx.strokeStyle = "black";
ctx.arc(480, 95, 2, 0, 2*Math.PI);
ctx.stroke();

//left-eye
ctx.beginPath();
ctx.lineWidth = "3";
ctx.strokeStyle = "black";
ctx.arc(525, 95, 10, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = "3";
ctx.strokeStyle = "black";
ctx.arc(520, 95, 2, 0, 2*Math.PI);
ctx.stroke();

//noise

ctx.beginPath();
ctx.lineWidth = "3";
ctx.strokeStyle = "black";
ctx.arc(500, 110, 2, 0, 2*Math.PI);
ctx.stroke();

//body
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(500, 230, 80, 20, Math.PI, 2*Math.PI);
ctx.fill();

//legs
//right-leg
ctx.fillStyle = 'black';
ctx.fillRect (448, 270, 50, 150 );

//left-leg
ctx.fillStyle = 'black';
ctx.fillRect (505, 270, 50, 150 );

//right-foot
ctx.beginPath();
ctx.fillStyle = "black";
ctx.strokeStyle = "white";
ctx.arc(473, 430, 25, 0, Math.PI, 2*Math.PI);
ctx.fill();
ctx.stroke();

//left-foot
ctx.beginPath();
ctx.fillStyle = "black";
ctx.strokeStyle = "white";
ctx.arc(530, 430, 25, 0, Math.PI, 2*Math.PI);
ctx.fill();
ctx.stroke();
