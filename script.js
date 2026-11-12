
document.getElementById("comprobar").addEventListener("click", function() {
let puntaje = 0;
let p1 = document.querySelector('input[name="p1"]:checked');
let p2 = document.querySelector('input[name="p2"]:checked');
let p3 = document.querySelector('input[name="p3"]:checked');
if (!p1 || !p2 || !p3) {
document.getElementById("resultado").innerHTML =
"Debes responder las tres preguntas.";
return;
}
// Respuestas correctas
if (p1.value === "b") puntaje++;
if (p2.value === "c") puntaje++;
if (p3.value === "c") puntaje++;
let mensaje = "<h3>Resultado: " + puntaje + "/3 puntos</h3>";
if (puntaje === 3) {
mensaje += "¡Felicitaciones! Has respondido correctamente todas las preguntas.";
} else if (puntaje === 2) {
mensaje += "Buen intento. Solo te equivocaste en una pregunta.";
} else {
mensaje += "Te invito a intentarlo nuevamente.";
}
document.getElementById("resultado").innerHTML = mensaje; 
});
document.getElementById("reiniciar").addEventListener("click", function() {
let opciones = document.querySelectorAll('input[type="radio"]');
for (let opcion of opciones) {
opcion.checked = false;
}
document.getElementById("resultado").innerHTML = "";
});

