let listaNombres = [];

function agregarAmigo() {
    let nombreSorteado = String(document.getElementById('amigo').value).trim();
    
    // Validar que el nombre no esté vacío
    if (nombreSorteado === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Verificar si el nombre ya está en la lista
    if (!listaNombres.includes(nombreSorteado)) {
        listaNombres.push(nombreSorteado);
        console.log('Nombre agregado:', nombreSorteado);
    } else {
        alert('Este nombre ya fue agregado.');
    }

    console.log('Lista actual:', listaNombres);

    // Limpiar la caja después de agregar
    limpiarCaja();
}
function sortearAmigo(){
      // Validar que haya amigos disponibles
      if (listaNombres.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);

    // Obtener el nombre sorteado
    const amigoSorteado = listaNombres[indiceAleatorio];

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}
