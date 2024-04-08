// DrawTriangle.js (c) 2012 matsuda

function main() {
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return false;
  }

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  // Draw a blue rectangle
  ctx.fillStyle = 'black'; // Set color to blue
  ctx.fillRect(0, 0, 400, 400);        // Fill a rectangle with the color

  let v1 = new Vector3(120, 10, 0);
  drawVector(ctx, v1, 'red');
}

function drawVector(canv, v, c) {
  //Used this resource https://www.w3schools.com/tags/canvas_stroke.asp
  canv.beginPath();
  canv.moveTo(20*.25,10);
  canv.lineTo(20*.25, 120);
  canv.strokeStyle = "red";
  canv.stroke();

}