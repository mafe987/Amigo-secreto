let listaAmigos = [];
let sorteoRealizado = false;

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '' || !isNaN(nombre)) {
        alert('Por favor, escribe un nombre válido que no sea un número ni esté vacío.');
        return;
    }

    if (sorteoRealizado) {
        listaAmigos = [];
        document.getElementById('listaAmigos').innerHTML = '';
        document.getElementById('resultado').innerHTML = '';
        sorteoRealizado = false;
    }


    listaAmigos.push(nombre);

    actualizarListaAmigos();

    input.value = '';
    input.focus();
}

function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';

    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

function sortearAmigo() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    const resultadoElement = document.getElementById('resultado');

    // Se deben añadir al menos dos amigos para realizar el sorteo.
    if (listaAmigos.length < 2) {
        alert('Primero debes agregar al menos dos amigos válidos.');
        return;
    }

    listaAmigosElement.innerHTML = '';

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    resultadoElement.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `El amigo secreto sorteado es: ${amigoSecreto}`;
    resultadoElement.appendChild(li);

    sorteoRealizado = true;
}
