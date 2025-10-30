const crearSecuencia = (inicio, paso) => {
    let numeroActual = inicio
    return function secuencia() {
        numeroActual +=paso
        return numeroActual
    }
}

const secuencia = crearSecuencia(5,3)
console.log(secuencia())
console.log(secuencia())
console.log(secuencia())
console.log(secuencia())
