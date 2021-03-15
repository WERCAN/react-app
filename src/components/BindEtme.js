import React, { Component } from "react";

//---There are 4 ways to bind. The fourth way NOT RECOMMENDED

export default class BindEtme extends Component {
  constructor(props) {
    super(props);

    //this.changeLesson=this.changeLesson.bind(this)
    //--this code for the second way. 
    //--If you use this then in onClick just write "this.changLesson".

    this.state = {
      ders: "javascript",
      sure: 5,
    };
  }

  changeLesson() {
    this.setState({
      ders: "React",
      sure: 6,
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#b8b5ff" }}>
        <h1>Topic: Binding File: BindEtme.js</h1>

        <p>Dersin adi : {this.state.ders}</p>
        <p>Sure :{this.state.sure} </p>
        
        {/* the foolowing code for the first way */}
        {/* <button onClick={this.changeLesson.bind(this)}>Dersi degistir</button> */}

        {/* following code for second way */}
        {/* <button onClick={this.changeLesson}>Dersi degistir</button> */}

        {/* third way : using arrow function */}
        <button onClick={()=>this.changeLesson()}>Dersi degistir</button>
      </div>
    );
  }
}
