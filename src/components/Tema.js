import React, { Component } from "react";

export default class Tema extends Component {

    constructor(){
        super()
        
            this.state={isToggleOn: true};

            // This binding is necessary to make `this` work in the callback
            // this.temaDegistir = this.temaDegistir.bind(this);          
    }

    temaDegistir(){
        this.setState(prevState => ({isToggleOn : !prevState.isToggleOn}))
    }

  render() {
    return (
      <div style={{backgroundColor: "#cdc733"}}>

        <h1>Topic: State File:Tema.js</h1>
        <h3>And also button is done toggle</h3>

        <h3 style={{backgroundColor: this.state.isToggleOn? '#966c3b' : 'white' , color: this.state.isToggleOn ? 'red': 'black'}}>Farkli Tema Gecisleri</h3>

        <button onClick={()=>this.temaDegistir()}>tema degistir</button>
      </div>
    );
  }
}
