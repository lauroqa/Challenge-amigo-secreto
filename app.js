let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = ''; // Limpa o campo de entrada

    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista anterior

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário ter pelo menos 2 amigos para sortear.");
        return;
    }

    const resultados = {};
    const amigosDisponiveis = [...amigos]; // Cria uma cópia da lista de amigos

    amigos.forEach(amigo => {
        const indiceAleatorio = Math.floor(Math.random() * amigosDisponiveis.length);
        const amigoSorteado = amigosDisponiveis[indiceAleatorio];

        // Remove o amigo sorteado da lista de disponíveis
        amigosDisponiveis.splice(indiceAleatorio, 1);

        resultados[amigo] = amigoSorteado;
    });

    mostrarResultados(resultados);
}

// Função para mostrar os resultados do sorteio
function mostrarResultados(resultados) {
    const listaResult = document.getElementById('resultado');
    listaResult.innerHTML = ''; // Limpa os resultados anteriores

    for (const [amigo, amigoSorteado] of Object.entries(resultados)) {
        const li = document.createElement('li');
        li.textContent = `${amigo} sorteou ${amigoSorteado}`;
        listaResult.appendChild(li);
    }
}