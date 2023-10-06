//Lista de contactos creada
let listaDeContactos = ["raulGonzales", "jhonJimenez", "joseHernandez", "mariaRamirez"];
let contactoNuevo;
contactoNuevo = "JaiderHerrera"

const objeto = {

    id : 316516,
    nombres : "Jaider",
    apellidos : "Herrera",
    telefonos : 3026263565,
    ubicaciones : {
        cuidad : "Cartagena",
        direccion : "Olaya Herrera"
    }
}

console.log(listaDeContactos);

//Funcion para agregar nuevo contacto
function nuevoContacto(nombres, telefonos) {
    nombres = objeto.nombres;
    telefonos = objeto.telefonos;
        listaDeContactos.unshift(nombres, telefonos);    
    

    return listaDeContactos;
}

nuevoContacto();
console.log(listaDeContactos);

let nuevaLista;
//Funcion para borrar un contacto en la lista
function borrarContacto(){
    let objetoRecorrido;
    for (objetoRecorrido in listaDeContactos) {
        nuevaLista = listaDeContactos.splice(3, 3, objetoRecorrido);    
    }

    return listaDeContactos;
}

borrarContacto()
console.log("Elemento Borrado: " + nuevaLista);

//Funcion para imprimir en consola la lista actualizada
function listaActualizada(){
    console.log(listaDeContactos);
}

listaActualizada(objeto);