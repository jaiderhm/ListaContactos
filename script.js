//Lista de contactos creada
let listaDeContactos = ["raulGonzales", "jhonJimenez", "joseHernandez", "mariaRamirez"];
let contactoNuevo;
contactoNuevo = "JaiderHerrera"

console.log(listaDeContactos);

//Funcion para agregar nuevo contacto
function nuevoContacto() {
    listaDeContactos.unshift(contactoNuevo);

    return listaDeContactos;
}

nuevoContacto();
console.log(listaDeContactos);

let nuevaLista;
//Funcion para borrar un contacto en la lista
function borrarContacto(){
    nuevaLista = listaDeContactos.pop();

    return listaDeContactos;
}

borrarContacto()
console.log("Elemento Borrado: " + nuevaLista);

//Funcion para imprimir en consola la lista actualizada
function listaActualizada(){
    console.log(listaDeContactos);
}

listaActualizada();