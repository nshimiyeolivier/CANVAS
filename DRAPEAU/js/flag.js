var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// fill style and fill rect way
ctx.fillStyle = '#009AF4';
ctx.fillRect (200, 50, 700, 200);
ctx.fillStyle = '#EFEF00';
ctx.fillRect (200, 250, 700, 100 );
ctx.fillStyle = '#1C8F31';
ctx.fillRect (200, 350, 700, 100 );

// stroke way
