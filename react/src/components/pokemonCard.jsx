
import React from "react";
import PropTypes from "prop-types";

function PokemonCard({pokemon}){
    return (
    <div>
        <div>
          <h2>{pokemon.name}</h2>
//        {pokemon.name === "bulbasaur" ?(<img
    src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    alt={pokemon.name} />) :
    (<p>???</p>)
    }
          <h2>{pokemon.name}</h2>
            <img src={pokemon.imgSrc} alt={pokemon.name}/>

        </div>
 </div>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    }).isRequired,
};

export default PokemonCard


    // function PokemonCard({name,imgsrc}){

        // //   console.log(props)
        // const pokemon = props.pokemon;
        // return(
        //      <div>

        //         <h2>{name}</h2>
        //         <img src={imgsrc} alt={name}/>
        //     </div>
        // )
        
        // }

        // <h2>{props.pokemon.name} </h2>
        // <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
        
        // </div>
        
        // const pokemon =pokemonList[0]





    
//   return (
//     <div>
//     <h2>{pokemon.name}</h2>
//     {pokemon.name === "bulbasaur" ?(<img
//     src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
//     alt={pokemon.name} />) :
//     (<p>???</p>)
//     }
//     </div>
//   );
//     }

