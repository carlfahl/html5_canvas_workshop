var c = document.getElementById("canvas");

// options are 2d, webgl, webgl2
var ctx = c.getContext('2d');

// draw a line
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,300);
ctx.stroke();

// draw a square
ctx.fillStyle = 'rgba(200,0,0,0.7)';
ctx.fillRect(20,20, 50, 50);
ctx.strokeRect(50,50, 100, 100);
ctx.fillRect(100,100, 200, 200);
ctx.clearRect(150,150,100,100);

//draw an arc
ctx.arc();
ctx.arcTo();

// curves

ctx.quadraticCurveTo();

ctx.bezierCurveTo();

// Path2D objects.

var circle = new Path2D();

// use SVG with Path2D

var p = new Path2D('M10 10 h 80 v 80 h -80 Z');
