//# El método join une los elementos del array, mediante una separación, y retorna un string. Si un elemento es undefined o null, se convierte en una cadena vacía.
//# Este procedimiento recibe un argumento:
//# La separación de cada elemento del array al unirlos.

const elements = ["fire", "air", "water"]


const result = elements.join("--");

console.log(result);

const title = "Curso de manipulación de arrays";

const urlFinal = title.split(" ").join("-").toLowerCase();

console.log(urlFinal);