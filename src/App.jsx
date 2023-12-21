import { useState } from 'react'
import './styles/App.css'
import AppRouter from "./routes/AppRouter.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppRouter/>
  )
}

export default App
