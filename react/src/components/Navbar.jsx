import React from "react";

function NavBar(props) {


        // return (
    //       <div>
    //         {props.pokemonList.map((pokemon, index) => (
    //           <button key={index} onClick={() => props.onPokemonClick(index)}>
    //             {pokemon.name}
    //           </button>
    //         ))}
    //       </div>
    //     );
    //   }

  return (
    <nav>
      <ul>
        <li>
          <button onClick={props.onPreviousClick} disabled={props.disablePrevious}>
            Précédent
          </button>
        </li>
        <li>
          <button onClick={props.onNextClick} disabled={props.disableNext}>
            Suivant
          </button>
        </li>
      </ul>
    </nav>
  
  )
}

export default NavBar;
