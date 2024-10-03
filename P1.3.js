
let nombre = prompt("Por favor, ingresa un texto:");
function rename (nombre) {
    let nuevoNombre = "";
    for (let i = 0; i < nombre.length; i++) {
        if (i==0) {
           nuevoNombre += (nombre[i].toUpperCase()) ;
        }else if(nombre[i-1]==" "){
            nuevoNombre += (nombre[i].toUpperCase()) ;
        }else{
            nuevoNombre += (nombre[i]);
        }
    }
    return nuevoNombre;    
}

console.log(rename(nombre));
