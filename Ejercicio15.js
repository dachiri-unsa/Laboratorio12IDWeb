function crearContador(valorInicial) {
    let valor = valorInicial

    function incrementar() {
        valor++
        return valor
    }
    function resetear() {
        valor = valorInicial
        return valor
    }
    return function operacion(accion) {
        if (accion === "inc") return incrementar()
        if (accion === "res") return resetear()
        return undefined
    }
}

const contador = crearContador(10)
console.log(contador("inc"))
console.log(contador("inc"))
console.log(contador("res"))
