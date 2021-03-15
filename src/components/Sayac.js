import React, { Component } from "react";

export class Sayac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sayac: 0,
    };
  }

  ucerArtir() {
    this.setState(prevState => ({
      sayac: prevState.sayac + 3,
    }));
  }

  //   birerArtir() {
  //     this.setState({
  //         sayac : this.state.sayac + 1,
  //       })
  //   }

  render() {
    return (
      <div style={{ backgroundColor: "#E7E6E1" }}>
        <h1>Topic: setState File:Sayac.js</h1>
        <h3>Sayac : {this.state.sayac}</h3>
        <button onClick={() => this.ucerArtir()}>Artir</button>
      </div>
    );
  }
}

export default Sayac;
