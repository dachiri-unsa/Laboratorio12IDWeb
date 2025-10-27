const calcularDescuento = function(presio, porcentaje) {
    return presio*porcentaje/100
}

presio = 499
descuentoPorcentaje = 20
console.log(
    "El descuento que recibio es de: "+calcularDescuento(presio,descuentoPorcentaje)
    +"\nEl total a pagar sera de: "+(presio-calcularDescuento(presio,descuentoPorcentaje))
)
