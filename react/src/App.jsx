import { useState } from 'react'
import './App.css'
import MyTitle from "./components/MyTitle"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyTitle/>
    </div>
  )
}

export default App
