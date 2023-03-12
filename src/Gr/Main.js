import React, { useState } from 'react'
import List from './List'
import './Main.css'

function Main() {
    const [cond,setCond]=useState(false)
    const [input,setInput]=useState('')
    const [list,setList]=useState([])
    const Action=(e)=>{
        // e.preventDefault()
       if(!input){
        
       }
       else{
        setList([...list,{id:list.length,
       name:input}]);
       setInput('');
       }
      
    }
    console.log(list)
  return (
    <div className='main'>
    <div className="hd">
    <p>Item Added To The List</p>
     <h1>Grocery Bud</h1>
    </div>
      <div className="mains">
        <div className="it">
        <input type="text" onChange={e=>setInput(e.target.value)} placeholder='name' />
{      !cond ?  <button onClick={Action}>Submit</button>:<button onClick={Action} disabled>Submit</button>
}
        </div>
        <div className="list">
       
       {
        list.map((e)=>
        <div className="ls" key={e.id}>
        <h4>{e.name}</h4>
        <div className="btn">
        <button>=</button>
        <button className='xx' style={{backgroundColor:"red"}}>x</button>
        </div>
        </div>
        )
       }
        

         <div className="clr">
         <button>Clear</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Main
