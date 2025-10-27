const esPositivo = numero => {
    if (numero > 0) {
        return true
    }
    return false
}

let numero = 3245
console.log(`¿El numero ${numero} es positivo? `+esPositivo(numero))
