const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function limpiarCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Ejemplo 1: Rectángulos (como en MDN)
function rectangulos() {
  limpiarCanvas();
  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);
}

// Ejemplo 2: Triángulos
function triangulos() {
  limpiarCanvas();
  // Triángulo relleno
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();

  // Triángulo contorneado
  ctx.beginPath();
  ctx.moveTo(125, 125);
  ctx.lineTo(125, 45);
  ctx.lineTo(45, 125);
  ctx.closePath();
  ctx.stroke();
}

// Ejemplo 3: Arcos variados
function arcos() {
  limpiarCanvas();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      const x = 25 + j * 100;
      const y = 25 + i * 70;
      const radius = 20;
      const startAngle = 0;
      const endAngle = Math.PI + (Math.PI * j) / 2;
      const counterclockwise = i % 2 !== 0;

      ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

      if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }
}

// Ejemplo extra: Cara sonriente
function caraSonriente() {
  limpiarCanvas();
  ctx.beginPath();
  ctx.arc(250, 150, 50, 0, Math.PI * 2, true);
  ctx.moveTo(285, 150);
  ctx.arc(250, 150, 35, 0, Math.PI, false);
  ctx.moveTo(235, 140);
  ctx.arc(240, 140, 5, 0, Math.PI * 2, true);
  ctx.moveTo(265, 140);
  ctx.arc(260, 140, 5, 0, Math.PI * 2, true);
  ctx.stroke();
}
