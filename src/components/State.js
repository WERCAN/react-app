import React, { Component } from 'react'

 class State extends Component {
//-- there are two ways to create state first given rightdown second way consructor
state ={
    isVisible : true ,
    name : 'merve',
    books : ['lords', 'kings', 'readings']
}

    // constructor(props){
    //     super(props)
    //     this.state={

    //         isVisible: false
    //     }
    // }

    render() {
        return (
            <div>
                <p>{this.state.books} are for {this.state.name}</p>
                {
                    this.state.isVisible ? <div>
                        <h1>Title</h1>
                        <p> Pragraph contents</p>
                    </div>
                    : null 
                }
            </div>
        )
    }
}

export default State
