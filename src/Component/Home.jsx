import React, { useState } from 'react'
import "../Component/Home.scss"

const Home = () => {

  const [answer, setAnswer] = useState("");


  const handleClick = (e) => {
    setAnswer(answer.concat(e.target.value))
  }

  const clearbtn = () =>{
    setAnswer("")
  }

  const evaluate = () =>{
    setAnswer(eval(answer))
  }

  return (
    <div className='home'>
      <h2>Calculator Made with React js</h2>

      <input type="text" readOnly value={answer}/>
      <div className='box'>
          <div>
            <button className="btn" value={1} onClick={handleClick}>1</button>
            <button className="btn" value={2} onClick={handleClick}>2</button>
            <button className="btn" value={3} onClick={handleClick}>3</button>
            <button className="btn" value={"+"} onClick={handleClick}>+</button>
          </div>

          <div>
            <button className="btn" value={4} onClick={handleClick}>4</button>
            <button className="btn" value={5} onClick={handleClick}>5</button>
            <button className="btn" value={6} onClick={handleClick}>6</button>
            <button className="btn" value={"-"} onClick={handleClick}>-</button>
          </div>

          <div>
            <button className="btn" value={7} onClick={handleClick}>7</button>
            <button className="btn" value={8} onClick={handleClick}>8</button>
            <button className="btn" value={9} onClick={handleClick}>9</button>
            <button className="btn" value={"*"} onClick={handleClick}>*</button>
          </div>
          
          <div>
            <button className="btn" value={"%"} onClick={handleClick}>%</button>
            <button className="btn">M+</button>
            <button className="btn" onClick={clearbtn}>Clr</button>
            <button className="btn" onClickCapture={evaluate}>=</button>
          </div>
      </div>
    </div>


  )
}

export default Home