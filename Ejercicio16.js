function acumulador(valorInicial) {
    let valor = valorInicial

    return function sumar(sumando) {
        valor += sumando
        return valor
    }
}

const miAcumulador = acumulador(30)
console.log(miAcumulador(-23))
console.log(miAcumulador(15))
