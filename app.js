let amigoSecreto = [];

function agregarAmigo() {
    let nombreAmigo = document.querySelector("#amigo").value;
    if (nombreAmigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigoSecreto.push(nombreAmigo);
        document.querySelector("#amigo").value = ''; // Limpiar el campo de entrada
        actualizarLista();
    }
}

function actualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista existente

    for (let amigo of amigoSecreto) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigoSecreto.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigoSecreto.length);
    let amigoSorteado = amigoSecreto[indiceAleatorio];
    document.querySelector("#resultado").innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
