import { useState } from 'react'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemondCard from "./components/pokemonCard"

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyTitle/>
      <PokemondCard pokemon = {pokemonList[0]}/>
    </div>
  )
}

export default App
