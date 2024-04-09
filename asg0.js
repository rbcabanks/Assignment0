// DrawTriangle.js (c) 2012 matsuda
var canvas = document.getElementById('example');
var ctx = canvas.getContext('2d');


function main() {
  // Retrieve <canvas> element
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return false;
  }
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

  ctx.strokeStyle = c;
  let cx = canvas.width / 2;
  let cy = canvas.height / 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(cx + (20 * v.elements[0]), cy - (20 * v.elements[1]))
  ctx.stroke();

}

function clear() {
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
    v3.add(v2);
    console.log(v3);
    drawVector(v3, 'green')
  }
  else if (val == "sub") {
    let v3 = new Vector3();
    v3.set(v1);
    v3.sub(v2);
    console.log(v3);
    drawVector(v3, 'green')
  }
  else if (val == "mul") {
    let v3 = new Vector3(); //v1*s
    v3.set(v1);
    v3.mul(scalar);
    console.log(v3);
    drawVector(v3, 'green')

    let v4 = new Vector3(); //v2*s
    v4.set(v2);
    v4.mul(scalar);
    console.log(v4);
    drawVector(v4, 'green')
  }
  else if (val == "div") {
    let v3 = new Vector3(); //v1/s
    v3.set(v1);
    v3.div(scalar);
    console.log(v3);
    drawVector(v3, 'green')

    let v4 = new Vector3(); //v2/s
    v4.set(v2);
    v4.div(scalar);
    console.log(v4);
    drawVector(v4, 'green')
  }
  else if (val == "magnitude") {
    console.log(v1.magnitude());
    console.log(v2.magnitude());
  }
  else if (val == "normalize") {
    // this resource helped me think about normalization https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-vectors/a/vector-magnitude-normalization
    let v3 = new Vector3(); //v1
    v3.set(v1);
    v3.normalize();
    console.log(v3);
    drawVector(v3, 'green')

    let v4 = new Vector3(); //v2
    v4.set(v2);
    v4.normalize();
    console.log(v4);
    drawVector(v4, 'green')
  }
  else if (val == "angle") {
    var dotProduct = dot(v1, v2);
    docProduct = dotProduct * Math.cos(alpha)
    console.log(dotProduct)
  }

}