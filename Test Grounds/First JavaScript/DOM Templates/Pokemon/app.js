// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");

for(x=1; x<100; x++){
    const everyPokemonDiv= document.createElement('div');
    everyPokemonDiv.classList.add("pokemon"+x);
    const everyPokemonDescription = document.createElement('p');
    everyPokemonDescription.innerText = `#${x}`;
    const newImg = document.createElement('img');
    newImg.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + x + ".png";
    everyPokemonDiv.appendChild(newImg);
    everyPokemonDiv.appendChild(everyPokemonDescription);
    container.appendChild(everyPokemonDiv);
}