import React, { Component } from 'react'

export class ClassEventHandling extends Component {

    clickHandler(){
        console.log("btn in class Clicked")
    }
    render() {
        return (
            <div  style={{ backgroundColor: "#f7f6e7" }}>
                <h1>Topic: EventHandler  File: ClassEventHandling.js</h1>
                <button onClick={this.clickHandler}>Click</button>
                
            </div>
        )
    }
}

export default ClassEventHandling
