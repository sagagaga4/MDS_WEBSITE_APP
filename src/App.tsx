import { useState } from 'react'
import MDS_logo from './assets/MDS_logo.png'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
        <div>
        <img src={MDS_logo} alt="MDS Logo" className="logo">
        </img>
        </div>
        <h2>Medical  -  Device  -  $ecurity</h2>
        </>
    )
}

export default App
