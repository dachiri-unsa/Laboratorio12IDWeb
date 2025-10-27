const promedio = function(notaA, notaB, notaC) {
    return (notaA+notaB+notaC)/3
}

nota1 = 16
nota2 = 17
nota3 = 11
console.log(
    `El promedio de las notas: -${nota1} -${nota2} -${nota3}`+
    "\nEs : "+(promedio(nota1,nota2,nota3)).toFixed(2)
)
