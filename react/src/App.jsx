import { useState } from 'react'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/Navbar"


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];  

  function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);
  
    const handlePokemonClick = (index) => {
      setPokemonIndex(index);
    };
  
    return (
      <div>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => handlePokemonClick(index)}>
            {pokemon.name}
          </button>
        ))}
        <h2>{pokemonList[pokemonIndex].name}</h2>
        <img
          src={pokemonList[pokemonIndex].imgSrc}
          alt={pokemonList[pokemonIndex].name}
        />
      </div>
    );
  }
  
  export default App;
  



  // const [pokemonIndex, setPokemonIndex] = useState(0);
  // const handlePreviousClick = ()=>{
  //   setPokemonIndex(pokemonIndex - 1)
  // }
  // const handleNextClick = ()=>{
  //   setPokemonIndex(pokemonIndex + 1)
  // }

  // // const pokemon = pokemonList[1]  
  // return (
  






    // <div>
    //   <NavBar
    //     onPreviousClick={handlePreviousClick}
    //     onNextClick={handleNextClick}
    //     disablePrevious={pokemonIndex === 0}
    //     disableNext={pokemonIndex === pokemonList.length - 1}
    //   />
    //   <h2>{pokemonIndex}</h2>
    //   <img src={pokemonList[pokemonIndex].imgSrc} alt={pokemonList[pokemonIndex].name} />
    //   <button onClick={handlePreviousClick} disabled={pokemonIndex === 0}>
    //   Précédent
    //   </button>
    //   <button onClick={handleNextClick} disabled={pokemonIndex === pokemonList.length - 1}>
    //     Suivant
    //   </button>
    // </div>
  


    // </div>
  // <PokemonCard pokemon = {pokemon}/>
  



// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <div>
//       <MyTitle/>
//       <PokemondCard pokemon = {pokemonList[0]}/>
//     </div>
//   )
// }

// export default App
