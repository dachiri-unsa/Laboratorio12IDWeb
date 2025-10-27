const mayorDeTres = (a,b,c) => {
    let mayor = a
    if (b > mayor) {
        mayor = b
    }
    if (c > mayor) {
        mayor = c
    }
    return mayor
}

num1 = 24235
num2 = 23
num3 = 999
console.log(
    `El mayor numero entre ${num1}, ${num2} y ${num3} es: `
    +mayorDeTres(num1,num2,num3)
)
