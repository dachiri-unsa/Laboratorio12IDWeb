const descargarArchivo = (url, callback) => {
    console.log("Descargando...");
    callback(url);
}
const descargaExitosa = (url) => console.log(`Descarga completa de ${url}`);

let direccion = "https:........";
descargarArchivo(direccion, descargaExitosa);

