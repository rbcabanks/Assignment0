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
  ctx.fillRect(0, 0, canvas.width, canvas.height);        // Fill a rectangle with the color

  let v1 = new Vector3(2.25, 2.25, 0);
  console.log(v1);
  //const v2 = v1.elements;
  drawVector(v1, 'red');

  function drawVector(v, c) {
    const v2 = v1.elements;
    //Used this resource https://www.w3schools.com/tags/canvas_stroke.asp
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(((20+v2[0]) + 200), ((200) - (20+v2[1])));
    ctx.strokeStyle = c;
    ctx.stroke();
  }
}
