import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    constructor(props){
        super(props)

        this.sayHello=this.sayHello.bind(this)

        this.state={
            message: "Merhaba",
            iliski : "gardas"
        }
    }

    sayHello(isim){
       // alert(this.state.message + " nasilsin " + this.state.iliski)
        alert(this.state.message + " nassin " + isim +" "+ this.state.iliski)
    }
    render() {
        return (
            <div style={{backgroundColor: "#7868e6"}}>

                <h1>Topic: Sending Functions as props  file: Parent.js</h1>

                {/* arrow function kullaninca child icindeki isim parametresini alamadik !! */}
                {/* <Child sayHello={() => this.sayHello()}/> */}
                
                <Child sayHello={ this.sayHello}/>
            </div>
        )
    }
}
