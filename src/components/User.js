import React, { Component } from 'react'

class User extends Component {
    render() {

        //----Destructing----
        const {name,job,salary}=this.props;
        return (
            <div style={{color: 'red'}}>
                <form>
                    <input type="text"/>
                    <button>Send</button>
                </form>

                <ul>
                    <li>isim: {name}</li>
                    <li>meslek: {job}</li>
                    <li>maas: {salary}</li>
                </ul>
            </div>
        )
    }
}

export default User;
