import './App.css'
import { useState } from "react"


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <div className="card">
        <h1>A Simple Counter App</h1>
        <p className="count">Count: {count}</p>
        <div className="actions">
          <button className="btn" type='button' onClick={()=>{counter(setCount)}}>
            Increment
          </button>
          <button className="btn btn-secondary" type='button' onClick={()=> {counter(setCount, false)} }>
            Decrement
          </button>
        </div>
      </div>
    </div>
  )
}

function counter(setCount, inc = true){
  if(inc)
    setCount(c=>c+1);
  else
    setCount(c=>c-1);
}
export default App
