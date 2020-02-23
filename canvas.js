let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 4;

let c = canvas.getContext("2d");

//c.fillStyle = "rgba(255, 253, 0, 0.5)";
//c.fillRect(100, 100, 100, 100);

// c.beginPath();
// c.moveTo(100, 100);
// c.lineTo(500, 300);
// c.lineTo(500, 100);

// c.strokeStyle = "#fa34a3";
// c.stroke();

// for (let i = 0; i < 1000; i++) {
//   let arcSize = Math.floor(Math.random() * (100 - 20) + 20);
//   let x = Math.floor(Math.random() * (canvas.width - arcSize * 2) + arcSize);
//   let y = Math.floor(Math.random() * (canvas.height - arcSize * 2) + arcSize);
//   //console.log("x =", x, ", y =", y, ", size =", arcSize);
//   let colorRed = Math.random() * 255;
//   let colorGreen = Math.random() * 255;
//   let colorBlue = Math.random() * 255;

//   c.beginPath();
//   c.arc(x, y, arcSize, 0, Math.PI * 2, false);
//   c.strokeStyle =
//     "rgb(" + colorRed + ", " + colorGreen + ", " + colorBlue + ")";
//   c.stroke();
// }

// c.beginPath();
// c.arc(200, 200, 50, 0, Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();

// radius = 50;
// let x = Math.random() * (innerWidth - radius * 2) + radius;
// let y = Math.random() * (innerHeight - radius * 2) + radius;
// let dx = 2 * (Math.random() - 0.5) * 10;
// let dy = 2 * (Math.random() - 0.5) * 10;

//c.beginPath();
//c.arc(x, y, radius, 0, Math.PI * 2, false);
//c.strokeStyle = "blue";
//c.stroke();

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
  };

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

// let radius = 50;
// let x = Math.random() * (innerWidth - radius * 2) + radius;
// let y = Math.random() * (innerHeight - radius * 2) + radius;
// let dx = 2 * (Math.random() - 0.5) * 10;
// let dy = 2 * (Math.random() - 0.5) * 10;

let circle = new Circle(200, 200, 10, 10, 20);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  circle.update();
}

animate();
