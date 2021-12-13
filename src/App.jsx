import { useState } from 'react'
import Snowfall from 'react-snowfall'
import FireWork from './components/Fireworks'
import './App.scss'

function App() {
  return (
    <div className="app">
      <div className="hero">
        <div className="front">
          <h1>Ketan Chaudhari</h1>
          <p>Full stack developer</p>
        </div>
        <div className="back">
          <h1>merry christmas </h1> 
        </div>
        <FireWork />
      </div>
      <div>
      </div>
      <Snowfall
        snowflakeCount={50}/>
    </div>
  )
}

export default App
