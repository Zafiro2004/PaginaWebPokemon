const cuadriculaListaPokemon = document.getElementById('lista-pokemon');

function renderListaPokemon(listaPokemon) {
    cuadriculaListaPokemon.innerHTML = '';
    listaPokemon.forEach(pokemon=> {
        const carta = document.createElement('div');
        carta.classList.add('carta-pokemon');
        const tiposHTML = pokemon.types.map(type =>
            `<span class="badge type-${type}">${type.toUpperCase()}</span>`
        ).join('');

        carta.innerHTML = `
            <a href="https://www.wikidex.net/wiki/${pokemon.name}" target="_blank" class="wikidex-link" title="Ver a ${pokemon.name} en WikiDex">
                <div class="contenedor-imagen-carta">
                    <img src="${pokemon.image}" alt="${pokemon.name}" class="pokemon-imagen">
                </div>
            </a>
            <div class="carta-info">
                <span class="pokemon-id">#${pokemon.id.toString().padStart(3, '0')}</span>
                <a href="https://www.wikidex.net/wiki/${pokemon.name}" target="_blank" class="wikidex-link">
                    <h3 class="pokemon-nombre">${pokemon.name}</h3>
                </a>
                <div class="pokemon-tipos">
                    ${typesHtml}
                </div>
                <button class="add-btn" data-id="${pokemon.id}">Añadir a Equipo</button>
            </div>
        `;
        cuadriculaListaPokemon.appendChild(carta)
    })
}
renderListaPokemon(pokemonData);
