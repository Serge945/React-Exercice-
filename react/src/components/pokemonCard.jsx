// const pokemonList = [
//     {
//       name: "bulbasaur",
//       imgSrc:
//         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//     },
//     {
//       name: "mew",
//     },
//   ];



function PokemondCard(props){
    console.log(props)
    const pokemon = props.pokemon;
    return (
    <div>
       <h2>{pokemon.name}</h2>
       {pokemon.imgSrc ? ( 
        <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
       )} 
    </div>
       );
    }
// function PokemondCard(){
//     const pokemon = pokemonList[1]
//     return (
//     <div>
//        <h2>{pokemon.name}</h2>
//        {pokemon.imgSrc ? ( 
//         <img src={pokemon.imgSrc} alt={pokemon.name} />
//         ) : (
//           <p>???</p>
//        )} 
//     </div>
//        );
//     }


//         <figure>
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
//          alt="Pokemon"/>
//     <figcaption>Bulbasaur</figcaption>
// </figure>
    
export default PokemondCard;
