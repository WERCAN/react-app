import React,{useReducer} from 'react'

const baslangic={
    ilksayac: 0,
    ikinciSayac: 10
}

const reduser=(state,action)=>{
    switch(action.type){
        case 'artir': return {...state,ilksayac: state.ilksayac + action.value}
        case 'artir-2': return {...state,ikinciSayac: state.ikinciSayac + action.value}
        case 'azalt': return {...state,ikinciSayac: state.ikinciSayac - action.value}
        case 'azalt-2': return {...state,ikinciSayac: state.ikinciSayac - action.value}

        case 'reset': return baslangic

        default : return state
    }
}

function SayacNew() {

const [sayac,dispatch]= useReducer(reduser,baslangic)

    return (
        <div style={{backgroundColor: "#29bb89"}}>
            <h1>Topic: Redux intro  File: SayacNew.js</h1>
            <div>Sayac: {sayac.ilksayac}</div>
            <div style={{margin: 20}}>Sayac-2: {sayac.ikinciSayac}</div>

            {/* <button onClick={()=>dispatch('artir')}>1 artir</button>   
            yukardaki ornek sadece switch(action) oldugunda calisir. simdi action icin
            object oluturacagiz ve sayi yerine degisken kullanabilecegiz.*/}
            <button onClick={()=>dispatch({type:'artir-2', value: 1})}>1 artir</button>
            <button onClick={()=>dispatch({type:'artir', value: 5})}>5 artir</button>
            <button onClick={()=>dispatch({type:'azalt', value: 1})}>1 azalt</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        </div>
    )
}

export default SayacNew
