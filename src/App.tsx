
import { useState } from 'react'
import './App.css'
import MapChart from './components/WorldMap'

function App() {
  const [count, setCount] = useState(0)

  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.js";

  return (
    <div className="App">
      <MapChart />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App;
