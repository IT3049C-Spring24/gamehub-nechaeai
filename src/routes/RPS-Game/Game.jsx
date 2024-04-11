import { useState } from 'react'
import './Game.css'
import WelcomeScreen from './screens/WelcomeScreen'
import GameScreen from './screens/GameScreen'

export default function App() {
  const [name, setName] = useState(`player`)
  const [gameStarted, setGameStarted] = useState(false)

  return (
    <div style={{ placeItems: `flex-start`}}>
      <div>
          <h1>Rock Paper Scissors</h1> 
      </div>
      {
        gameStarted
        ? <GameScreen name={name}/>
        : <WelcomeScreen name={name} onNameChange={setName} onGameStart={() => setGameStarted(true)}/>
      }
    </div>
  )
}