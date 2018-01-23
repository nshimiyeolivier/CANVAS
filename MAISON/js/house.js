var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// fill style and fill rect way
// ctx.fillStyle = '#009AF4';
// ctx.fillRect (200, 50, 700, 200);
// ctx.fillStyle = '#EFEF00';
// ctx.fillRect (200, 250, 700, 100 );
// ctx.fillStyle = '#1C8F31';
// ctx.fillRect (200, 350, 700, 100 );

// stroke way
//front-side
ctx.fillStyle = '#86592d';
ctx.fillRect (400, 500, 400, 150);


//door
ctx.fillStyle = '#e6ffff';
ctx.fillRect (550, 550, 55, 100);

//living-window
ctx.fillStyle = '#e6ffff';
ctx.fillRect (410, 550, 136, 80);

//toi-windows

ctx.fillStyle = '#e6ffff';
ctx.fillRect (610, 550, 20, 15);

//room1- windows
ctx.lineWidth = '2'
ctx.fillStyle = '#e6ffff';
ctx.fillRect (635, 550, 60, 60);

//room2- windows
ctx.lineWidth = '2'
ctx.fillStyle = '#e6ffff';
ctx.fillRect (720, 550, 60, 60);

//top-side
ctx.beginPath();
ctx.moveTo(400,500);
ctx.lineTo(533,400);
ctx.lineTo(900,400);
ctx.lineTo(800,500);
ctx.closePath();
ctx.fillStyle = '#555555';
ctx.fill();
ctx.strokeStyle = '#555555'
ctx.stroke();

//right side

ctx.beginPath();
ctx.moveTo(800, 649);
ctx.lineTo(1000, 560);
ctx.lineTo(1000, 500);
ctx.lineTo(1000, 450);
ctx.lineTo(900, 400);
ctx.lineTo(800,500)
ctx.closePath();
ctx.fillStyle = '#86592d';
ctx.fill();
ctx.strokeStyle = '#86592d';
ctx.stroke();






//
// ctx.strokeStyle = "black";
