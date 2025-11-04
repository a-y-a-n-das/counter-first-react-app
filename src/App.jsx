import './App.css'
import { useState } from "react"


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>A Simple Counter App</h1>
      <div>
      <p>Count: {count} </p> 
      
      <button type='button' onClick={()=>{counter(setCount)}}>Increment</button>
      <button type='button' onClick={()=> {counter(setCount, false)} }  style={{margin: "10px"}}>Decrement</button>
      </div>
    </>
  )
}

function counter(setCount, inc = true){
  if(inc)
    setCount(c=>c+1);
  else
    setCount(c=>c-1);
}
export default App
