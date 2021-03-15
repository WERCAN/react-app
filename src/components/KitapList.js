import React from 'react'
import Kitap from './Kitap'
import { v4 as uuidv4 } from 'uuid'

function KitapList() {

    // const BookList=["Seker Portakali", "Istanbul Hatirasi","Gulun Adi"]

    const BookList=[
        {name:"Istanbul Hatirasi" , author: "Ahmet Umit"},
        {name:"Seker Portakali" , author: "Vasconcales"},
        {name:"Gulun Adi" , author: "Umberto Eco"}]

    return (
        <div style={{ backgroundColor: "#99bbad" }}>

            <h1>Topic: ArrayRender, Component Render, uuid  File: KitapList.js</h1>

            {BookList.map((item)=>(
            
            //--index yerine BookList icindeki her elemana id verilebilir. 
            //--Bu id ler key={kitap.id} seklinde yazilabilir.(index map() in bir ozelligi.)
                <Kitap key={uuidv4()} kitap={item}/>
                //-- Yukarida uuidv4() yerine "index" yazilirsa "index" parametre olarakta verilmeli.
                
                //--Asagidaki code Kitap.js projesi icin comment edilmistir. 
                // <p>Kitap adi: {item.name} , Yazar: {item.author}</p>

                //--Yada asagidaki gibi yazilabilir----
                // <div>
                //     <p> {item.name} </p>
                //     <p> {item.author}</p>
                // </div>
                ))}
        </div>
    ) 
}

export default KitapList
