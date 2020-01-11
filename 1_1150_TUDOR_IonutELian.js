/* --- Pas 1: Identificare canvas */
var canvas = document.getElementById('canvas');

var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse  = false;

ctx.lineJoin = "round";
ctx.lineCap = "round";

var positionX, positionY;

/* --- Func */
var brush = document.getElementById('brush');
function brushClick(){
    let brushColor = document.getElementById('toolbar-color');
    ctx.strokeStyle = brushColor.value;
    brush.style.border = "2px solid red";
}






brush.addEventListener('click', brushClick);












/* --- Find the canvas */




document.getElementById('range-valoare').addEventListener('input', function(e){
    document.getElementById('range-value-setata').innerHTML = e.target.value;
})