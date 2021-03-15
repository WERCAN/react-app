import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={() => props.sayHello('Muslum')}>Selamla</button>
        </div>
    )
}

export default Child
