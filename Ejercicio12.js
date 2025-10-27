const componerTransformaciones = (texto, funcion1, funcion2) => {
    return funcion1(funcion2(texto))
}
const textoAMayuscula = (texto) => texto.toUpperCase()
const exclamacionFinal = (texto) => texto+"!"

let animal = "cocodrilo"
console.log(
    `La palabra "${animal}" despues de la composicion de funciones: `
    +componerTransformaciones(animal,exclamacionFinal,textoAMayuscula)
)
