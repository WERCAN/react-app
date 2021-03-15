import React from 'react'

const Kimlik = (props) => {

//Destructing yontemi ile functional component da parametreler yazilirsa :
// Kimlik = ({name , country}) => ....
//veya const {name,country}=props seklindede yazilabilir
// props yerine parametre isimlerini cagirabiliriz 
// ve asagida props.name yerine sadece name yazabiliriz.

    return (
        <div style={{backgroundColor: "#d0af84"}}>
            <h1>Topic: props Drilling file: Kimlik.js</h1>
            <h3>name:{props.name} {'   '} country:{props.country}</h3>

            {props.children}
            
        </div>
    )
}

export default Kimlik
