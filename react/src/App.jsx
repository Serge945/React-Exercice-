import { useState } from 'react'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemondCard from "./components/pokemonCard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyTitle/>
      <PokemondCard/>
    </div>
  )
}

export default App
