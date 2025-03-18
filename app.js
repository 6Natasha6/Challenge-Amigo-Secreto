let amigoSecreto = [];

function agregarAmigo() {
    let nombreAmigo = document.querySelector("#amigo").value;
    if (nombreAmigo.trim() === "") {
        alert("Por favor, ingresa el nombre de un amigo.");
    } else {
        amigoSecreto.push(nombreAmigo);
        document.querySelector("#amigo").value = '';
        actualizarLista();
    }
}

function actualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigoSecreto) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigoSecreto.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigoSecreto.length);
    let amigoSorteado = amigoSecreto[indiceAleatorio];
    document.querySelector("#resultado").innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
