
// ---------------------------------------------------------------
// 1. Obtener el elemento canvas desde el documento HTML
// ---------------------------------------------------------------
var canvas = document.getElementById("lienzo");


// ---------------------------------------------------------------
// 2. Ajustar tamaño del canvas al 50% de la pantalla
// ---------------------------------------------------------------

// window.innerWidth  -> ancho visible del navegador
// window.innerHeight -> alto visible del navegador

canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/2;


// ---------------------------------------------------------------
// 3. Obtener el contexto de dibujo 2D
// ---------------------------------------------------------------
var ctx = canvas.getContext("2d");


// ---------------------------------------------------------------
// 4. Definir el estilo de relleno
// ---------------------------------------------------------------
ctx.fillStyle = "rgb(63, 116, 222)";


// ---------------------------------------------------------------
// 5. Dibujar un rectángulo relleno
// ---------------------------------------------------------------
ctx.fillRect(10, 10, 200, 200);