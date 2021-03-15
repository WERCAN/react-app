import React from 'react'

function Navbar(props){
return(

//---style attribute contents written in double curly brakets as a object--------

    <div style={{backgroundColor:'#f4f4f2', color: 'red', fontSize: '30px'}}>
        <h3>that is {props.title} from navbar</h3>
    </div>
)
}

export default Navbar;