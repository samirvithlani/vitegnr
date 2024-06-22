import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainRouter from './components/Routers'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainRouter/>
    </>
  )
}

export default App
