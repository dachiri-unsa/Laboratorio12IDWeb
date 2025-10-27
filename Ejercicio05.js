const esMultiplo = (a,b) => {
    if (a%b === 0) {
        return true
    }
    return false
}

let multiplo = 323235
let numero = 3
console.log(
    `El numero ${multiplo} es multiplo de ${numero} ? `
    +esMultiplo(multiplo, numero)
)
