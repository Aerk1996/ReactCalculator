import "./App.css"
import React,{useState} from "react"
function App() {

  const [result,setResult] = useState(0)
  const [temp,setTemp] = useState(0)
  const [multFlag,setMultFlag] = useState(false)
  const [decrementFlag,setDecrementFlag] = useState(false)
  const [sumFlag,setSumFlag] = useState(false)
 const sevenHandler =  () => {
    if(result!==0)
     setResult(""+result+7);
   else
     setResult(7)
 }

 const eightHandler = () => {
   if(result!==0)
   setResult(""+result+8)
   else
   setResult(8)
  }
  
  const nineHandler = () => {
    if(result!==0)
    setResult(""+result+9)
    else
    setResult(9)
  }

  const fourHandler = () => {
    if(result!==0)
    setResult(""+result+4)
    else
    setResult(4)
  }


  const fiveHandler = () => {
    if(result!==0)
    setResult(""+result+5)
    else
    setResult(5)
  }

  const sixHandler = () => {
    if(result!==0)
    setResult(""+result+6)
    else
    setResult(6)
  }

  const oneHandler = () => {
    if(result!==0)
    setResult(""+result+1)
    else
    setResult(1)
    
  }

  const twoHandler = () => {
    if(result!==0)
    setResult(""+result+2)
    else
    setResult(2)
  }

  const threeHandler = () => {
    if(result!==0)
    setResult(""+result+3)
    else
    setResult(3)
  }


  const zeroHandler = () => {

    if(result!==0)
    setResult(""+result+0)
    else
    setResult(0)
  }

  const equalHandler = () =>{
        if(multFlag)
        {
          setResult(result*temp)
          setMultFlag(false)
        }
        if(decrementFlag)
        {
          setResult(parseInt(temp-result))
          setDecrementFlag(false)
        }
        if(sumFlag)
        {
          setResult(parseInt(temp+result))
          setSumFlag(false)
        }

  }

 const multHandler = () => {
      setMultFlag(true)
      setTemp(result)
      setResult(0)
 }

 const decrementHandler = () => {
      setDecrementFlag(true)
      setTemp(result)
      setResult(0)
 }

 const sumHandler = () => {
       setSumFlag(true)
       setTemp(result)
       setResult(0)
 }

const acHandler = () =>{
  setResult(0)
}
  return (
    <div className="calculator">
            <table>
              <tr>
                {result}
              </tr>
            <tr>
              <th>
                <button onClick={sevenHandler}>7</button>
              </th>
              <th>
                <button onClick={eightHandler}>8</button>
              </th>
              <th>
                <button onClick={nineHandler}>
                  9
                </button>
              </th>
              <th>
                <button onClick={multHandler}>x</button>
              </th>
            </tr>
            <tr>
              <th>
                <button onClick={fourHandler}>4</button>
              </th>
              <th>
                <button onClick={fiveHandler}>5</button>
              </th>
              <th>
                <button onClick={sixHandler}>6</button>
              </th>
              <th>
                <button onClick={decrementHandler}>-</button>
              </th>
            </tr>
            <tr>
              <th>
                <button onClick={oneHandler}>1</button>
              </th>
              <th>
                <button onClick={twoHandler}>2</button>
              </th>
              <th>
                <button onClick={threeHandler}>3</button>
              </th>
              <th>
                <button onClick={sumHandler}>+</button>
              </th>
              
            </tr>

            <tr>
              <th>
                <button onClick={zeroHandler}>0</button>
              </th>
              <th>
                <button onClick={acHandler}>AC</button>
              </th>
              <th>
                <button onClick={equalHandler}>=</button>
              </th>
            </tr>
            </table>
    </div>
  );
}

export default App;
