import React from 'react'

function FunctionalEventHandling() {

    const clickHandler=()=>{
        console.log("clicked")
         
    }
    return (
        <div style={{ backgroundColor: "#f7f6e7" }}>

            <h1>Topic: EventHandler  File: FunctionalEventHandling.js</h1>
            
            <button onClick={clickHandler}>Click</button>
            
        </div>
    )
}

export default FunctionalEventHandling
