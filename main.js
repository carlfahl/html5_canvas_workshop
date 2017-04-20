var c = document.getElementById("canvas");

// options are 2d, webgl, webgl2
var ctx = c.getContext('2d');

// use functions

function drawPoint (x,y) {
  ctx.fillRect(x, y, x+5, y+5);
}

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
ctx.beginPath();
ctx.arc(150,150,50,0,Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200,50);
ctx.arcTo(50,50,200,200,100);
ctx.stroke();

// curves

ctx.moveTo(0,300);
ctx.quadraticCurveTo(20, 100, 50, 250);
ctx.stroke();

// ctx.bezierCurveTo();

// Path2D objects.

var circle = new Path2D();
circle.moveTo(200,200);
circle.arc(200,200,60, 0, 2*Math.PI);

ctx.stroke(circle);

// use SVG with Path2D

var p = new Path2D('M10 10 h 80 v 80 h -80 Z');
ctx.stroke(p);
