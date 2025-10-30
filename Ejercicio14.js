function operacionesMatematicas(numeroInicial) {
    let numero = numeroInicial
    function sumar(numero2) {
        numero = numero + numero2
        return numero
    }
    function restar(numero2) {
        numero = numero - numero2
        return numero
    }
    function multiplicar(numero2) {
        numero = numero * numero2
        return numero
    }
    function dividir(numero2) {
        if (numero2 != 0) {
            numero = numero / numero2
        }
        return numero
    }
    return function operacion(accion, valor) {
        if (accion === "+") return sumar(valor)
        if (accion === "-") return restar(valor)
        if (accion === "*" || accion === "x") return multiplicar(valor)
        if (accion === "/") return dividir(valor)
        return undefined
    }
}

const primer_numero = operacionesMatematicas(10)
console.log("El número sumado con " + 20 + " es: " + primer_numero("+", 20))
