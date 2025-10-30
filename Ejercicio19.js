const mostrarDatos = (nombre,edad, ...hobbies) => {
    let cadena = ""
    for(let n of hobbies) {
        cadena += "-"+n+" "
    }
    console.log(
        `Su nombre es: ${nombre}\nSu edad es: ${edad}\nSus hobbies son: `
        +cadena
    )
}
mostrarDatos("Daniel", 17, "leer", "programar", "jugar videojuegos")

