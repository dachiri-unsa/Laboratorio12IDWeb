const procesarTexto = texto => {
    function limpiarEspacios(texto) {
        let texto_sinEspacios = ""
        for (let i = 0 ; i < texto.length ; i++) {
            if (texto[i] != " ") {
                texto_sinEspacios += texto[i] 
            }
        }
        return texto_sinEspacios
    }
    function contarPalabras(texto) {
        let contador = 0
        for (let i = 0 ; i < texto.length ; i++) {
            if (texto[i] === texto[i].toUpperCase()) {
                contador++
            }
        }
        return contador
    }
    return contarPalabras(limpiarEspacios(texto))
}

let texto = " Javacript Java   Python    Ensambly  "
console.log(
    `El texto "${texto}".`+
    "\nSu cantidad de palabras es: "+procesarTexto(texto)
)
