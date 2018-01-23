var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


//top left
ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(400, 100);
ctx.lineTo(400, 200);
ctx.closePath();
ctx.fillStyle = '#555555';
ctx.fill();
ctx.strokeStyle = '#555555'
ctx.stroke();

//top center
ctx.fillStyle = '#555555';
ctx.fillRect (405, 59, 10, 170);

//top center-rondabout
ctx.beginPath();
ctx.lineWidth = "3";
ctx.filleStyle = "black";
ctx.arc(410, 55, 10, 0, 2*Math.PI);
ctx.fill();

//top-rigth
ctx.beginPath();
ctx.moveTo(550, 200);
ctx.lineTo(425, 65);
ctx.lineTo(425, 200);
ctx.closePath();
ctx.fillStyle = '#555555';
ctx.fill();
ctx.strokeStyle = '#555555'
ctx.stroke();

//boot-base
ctx.beginPath();
ctx.moveTo(250, 230);
ctx.lineTo (600, 230);
ctx.lineTo (550, 300);
ctx.lineTo (300, 305);
ctx.closePath();
ctx.fillStyle = '#555555';
ctx.fill();
ctx.strokeStyle = '#555555';
ctx.stroke();
