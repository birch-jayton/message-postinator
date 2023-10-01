import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function postMessage(message: String){
  window.postMessage(message, '*')
}

function blastMessage(messageText: string, milliseconds: number) {
  setInterval(() => postMessage(messageText), milliseconds)
}

function beginBlastingCycle(){
  const urlParams = new URLSearchParams(location.search);
  const message = urlParams.get('message')
  const time = urlParams.get('time')

  if (message && time) {
    blastMessage(message, Number(time))
  }
  
}

//TODO handle increments so all users get deleted
function App() {
  const [count, setCount] = useState(0)
  window.addEventListener('message', (event) => {console.log(event.data)})
  beginBlastingCycle()
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
