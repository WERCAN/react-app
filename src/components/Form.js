import React from "react";

class Form extends React.Component {
  render() {

    //burada destructing yontemini kullanirsak
    // const {title}=this.props
    // h5 icinde sadece title yazmamiz yeterli olucak
    //render icinde yazilmali !!! 
    return (
        
      <div style={{backgroundColor: "#ffe6ca"}}>

        <h1>Topic:Class Component  File: Form.js</h1>

        <input placeholder="Isim giriniz"></input>
        <button>Gonder</button>

        <h5>{this.props.title}</h5>

      </div>
    );
  }
}

export default Form;
