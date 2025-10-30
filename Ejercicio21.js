const filtrarArreglo = (arreglo, callback) => {
    const arreglo_cumplen = [];
    for (let i = 0 ; i < arreglo.length ; i++) {
        if (callback(arreglo[i])) {
            arreglo_cumplen.push(arreglo[i]);
        }
    }
    return arreglo_cumplen;
}
const esPar = n => n%2 === 0;

const numeros = [23,2,9,2352,19,37,20]
console.log(
    `El arreglo es: ${numeros}\nSus elementos pares son: `
    +filtrarArreglo(numeros, esPar)
)
