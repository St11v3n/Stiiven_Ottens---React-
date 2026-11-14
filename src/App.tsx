import {useState} from 'react'

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
