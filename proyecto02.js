//Zona de funciones

function iniciaTablero (numero,color) {
    return numero && color;
}

numero = Array(1, 2, 3, 4, 5, 6);
color = Array("Rojo", " Azul", " Verde", " Amarillo", " Magenta", " Blanco");

fila1num = Array(2, 6, 5, 4, 5, 5);
fila2num = Array(4, 6, 6 ,3, 2, 6);
fila3num = Array(3, 4, 1, 2, 6, 3);
fila4num = Array(1, 4, 2, 5, 6, 1);
fila5num = Array(5, 5, 3, 2, 2, 1);
fila6num = Array(4, 1, 4, 3, 1, 3);

fila1color = Array("azul", " amarillo", " magenta", " rojo", " amarillo", " azul");
fila2color = Array("azul", " blanco", " magenta", " rojo", " amarillo", " azul");
fila3color = Array("azul", " amarillo", " azul", " rojo", " rojo", " magenta");
fila4color = Array("magenta", " blanco", " magenta", " rojo", " verde", " rojo");
fila5color = Array("verde", " blanco", " verde", " verde", " blanco", " amarillo");
fila6color = Array("verde", " blanco", " magenta", " blanco", " verde", " amarillo");
 

function compruebaTablero (fila1num,fila1color) {
    return fila1num && fila1color;
}

console.log(`Fila 1 -> ${fila1num} / ${fila1color}`);
console.log(`Fila 2 -> ${fila2num} / ${fila2color}`);
console.log(`Fila 3 -> ${fila3num} / ${fila3color}`);
console.log(`Fila 4 -> ${fila4num} / ${fila4color}`);
console.log(`Fila 5 -> ${fila5num} / ${fila5color}`);
console.log(`Fila 6 -> ${fila6num} / ${fila6color}`);
