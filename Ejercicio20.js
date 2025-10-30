const suma = (num1,num2) => num1+num2;
const resta = (num1,num2) => num1-num2;
const producto = (num1,num2) => num1*num2;
const cociente = (num1,num2) => num1/num2;
const ejecutarOperacion = (fn, x, y) => {
    return fn(x,y);
}

numero1 = 21
numero2 = 9
console.log("La suma es: "+ejecutarOperacion(suma, numero1, numero2))
console.log("El producto es: "+ejecutarOperacion(producto, numero1, numero2))
