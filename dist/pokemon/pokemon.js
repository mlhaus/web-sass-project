const pokemon_container = document.getElementById("pokemon-container");

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

async function catchEmAll(count) {
    for(let i = 1; i <= count; i++) {
        await catchPokemon(i);
    }
}

// catchEmAll();

async function catchPokemon(id) {
    // fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //     .then((response) => response.json())
    //     .then((data) => createCard(data));

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    createCard(data);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function createCard(data) {
    // <div class="pokemon">
    // </div>
    const card = document.createElement("div");
    card.classList.add("pokemon");
    card.style.backgroundColor = colors[data.types[0].type.name];

    //     <div className="img-container">
    //         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur">
    //     </div>
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    imgContainer.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="${data.name}">`;
    card.appendChild(imgContainer);

    //     <div className="info">
    //         <span className="number">#1</span>
    //         <h3 className="name">Bulbasaur</h3>
    //         <p className="type">Type: Grass</p>
    //     </div>
    let types = "";
    data.types.forEach((type) => {
        types += capitalizeFirstLetter(type.type.name) + ", ";
    });
    types = types.slice(0,-2);
    const infoContainer = `
        <div class="info">
            <span class="number">#${data.id}</span>
            <h3 class="name">${capitalizeFirstLetter(data.name)}</h3>
            <p class="type">Type: ${types}</p>
        </div>
    `;
    card.innerHTML += infoContainer;

    pokemon_container.appendChild(card);



}

const pokemon_count = 151;
catchEmAll(pokemon_count);