import {useState} from 'react'
import proudKiryu from './assets/proud_kiryu.gif'

function App() {
 
const [num1, setNum1] = useState(0)

const [num2, setNum2] = useState(0)

const [operator, setOperator] = useState("")

function Calculation() {

  let answer = 0

  if (operator == "+")
  {
    answer = num1 + num2
  }
  else if (operator == "-")
  {
    answer = num1 - num2
  }
  else if (operator == "*")
  {
    answer = num1 * num2
  }
  else if (operator == "/")
  {
    answer = num1 / num2
  }

  return answer
}

  return (
    <>
      <h1>Simple calculation webpage</h1>

      <h2>Hello, welcome to the simple calculation webpage.</h2>

      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))}></input>

      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>

      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))}></input>

      <span> = </span>
      <span>{Calculation()}</span>
      
    </>

   
  )
}

export default App
