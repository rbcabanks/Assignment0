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

  const myelements = [2.25, 2.25, 0];
  let v1 = new Vector3(myelements);
  console.log(v1);
  drawVector(v1, 'red');
}

function drawVector(v, c) {
  // got a lot of help from the 5 Assignment 0 Examples on youtube
  //needed to define canvas and ctx becuase this function is outside of main.
  var canvas = document.getElementById('example');
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return false;
  }

  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = c;
  let cx = canvas.width / 2;
  let cy = canvas.height / 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  //ctx.lineTo(cx+75,cy+75)
  ctx.lineTo(cx + (20 * v.elements[0]), cy - (20 * v.elements[1]))
  ctx.stroke();

}

function clear() {
  var canvas = document.getElementById('example');
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return false;
  }

  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black'; // Set color to blue
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function handleDrawEvent() {
  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;
  console.log(x);
  console.log(y);

  //part 4
  let vx = document.getElementById("vx").value;
  let vy = document.getElementById("vy").value;
  console.log(vx);
  console.log(vy);

  const newElements = [x, y, 0];
  let v1 = new Vector3(newElements);
  console.log(v1)

  const newElements2 = [vx, vy, 0];
  let v2 = new Vector3(newElements2);
  console.log(v2)
  clear();
  drawVector(v1, 'red')
  drawVector(v2, 'blue')
}

function handleDrawOperationEvent() {
  let operation = document.getElementById("op-select");
  // got help from this resource https://stackoverflow.com/questions/2100823/howto-get-the-value-of-an-selected-object-in-javascript
  var val = operation.options[operation.selectedIndex].value;
  console.log(val);
  let scalar = document.getElementById("scalar").value;
  console.log(scalar);

  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;
  console.log(x);
  console.log(y);

  let vx = document.getElementById("vx").value;
  let vy = document.getElementById("vy").value;
  console.log(vx);
  console.log(vy);

  const newElements = [x, y, 0];
  let v1 = new Vector3(newElements);
  console.log(v1);

  const newElements2 = [vx, vy, 0];
  let v2 = new Vector3(newElements2);
  console.log(v2);

  clear();
  drawVector(v1, 'red')
  drawVector(v2, 'blue')

  if (val == "add") {
    let v3 = new Vector3();
    v3.set(v1);
    console.log(v3);
    v2.add(v3);
    console.log(v3);
  }

}