import React, { Component } from 'react'
import './Form.css'
import styles from './stil.module.css'

export default class BasitForm extends Component {

constructor(props) {
    super(props)

    this.state = {
         username: '',
         lesson: '',
         date: ''
    }
}

submitHandler=(event)=>{
    alert(`Kullanici: ${this.state.username}
    Ders: ${this.state.lesson}
    Tarih: ${this.state.date}`)
    event.preventDefault()
}

usernameHandler=(event)=>{
    this.setState({
        username: event.target.value
    })
    
}

lessonHandler=(event)=>{
    this.setState({
        lesson: event.target.value
    })
    
}

dateHandler=(event)=>{
    this.setState({
        date: event.target.value
    })
}


    render() {

const styleEl={
    color:"lime", fontSize:"25px"
}

        return (
            <div className="form-container" style={styleEl}>
                <h1>Topic: Forms in react file: BasitForm.js</h1>

                <form onSubmit={this.submitHandler}>
                    <div>
                        <input onChange={this.usernameHandler} value={this.state.username} type="text"/>
                    </div>
                    <div>
                        <select onChange={this.lessonHandler} value={this.state.lesson}>
                            <option>Python</option>
                            <option>Javascript</option>
                            <option>React</option>
                        </select>
                    </div>
                    <div  value={this.state.date}>
                        <input onChange={this.dateHandler} type="date"/>
                    </div>
                    <button className={styles.btn} type="submit">Gonder</button>
                </form>
            </div>
        )
    }
}
