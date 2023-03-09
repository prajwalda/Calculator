import { Heading } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import "../Component/Home.scss"

const Home = () => {

  const [answer,setAnswer] = useState("")
  const [text,setText] = useState("")
  
  const clickHandler = (e) => {
    setAnswer(answer + e.target.value)

  }

  const clearall = () => {
    
    setAnswer("")

  }

  const delhandle = () => {
    setAnswer(answer.slice(0,answer.length-1))
    
  }

  const evaluate = () => {
    setAnswer(eval(answer))
  }


  return <div>
    <h1>CALCULATOR</h1>

    <form>
      
      <div className="box">
        <input type="text" className='output' value={answer} readOnly/>
        <input type="button" value="AC" className='span-two' onClick={clearall}/>
        <input type="button" value="DEL" onClick={delhandle}/>
        <input type="button" value="-" onClick={clickHandler}/>
        <input type="button" value="1" onClick={clickHandler}/>
        <input type="button" value="2" onClick={clickHandler}/>
        <input type="button" value="3" onClick={clickHandler}/>
        <input type="button" value="+" onClick={clickHandler}/>
        <input type="button" value="4" onClick={clickHandler}/>
        <input type="button" value="5" onClick={clickHandler}/>
        <input type="button" value="6" onClick={clickHandler}/>
        <input type="button" value="*" onClick={clickHandler}/>
        <input type="button" value="7" onClick={clickHandler}/>
        <input type="button" value="8" onClick={clickHandler}/>
        <input type="button" value="9" onClick={clickHandler}/>
        <input type="button" value="/" onClick={clickHandler}/>
        <input type="button" value="," onClick={clickHandler}/>
        <input type="button" value="0" onClick={clickHandler}/>
        <input type="button" value="="  className='span-two' onClick={evaluate}/>

      </div>

     
    </form>

  </div>
}

export default Home