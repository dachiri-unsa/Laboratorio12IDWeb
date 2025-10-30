const media = (...numeros) => {
    let sumatoria = 0
    for (let n of numeros) {
        sumatoria += n
    }
    return sumatoria/numeros.length
}

console.log(
    "Los 5 numeros son: 21,4,12,21,9"+
    "\nEl promedio de los 5 numeros es: "+
    media(21,4,12,21,9)
)
