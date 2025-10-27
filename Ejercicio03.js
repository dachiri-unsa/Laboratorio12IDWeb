const esPar = num => {
    if (num%2 === 0) {
        return true
    }
    return false 
}

let num1 = 3
let num2 = 8
console.log("El numero "+num1+" es par? "+esPar(num1))
console.log("El numero "+num2+" es par? "+esPar(num2))