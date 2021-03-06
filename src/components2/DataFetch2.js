import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState={
    loading : true,
    error : '',
    post : {}
}

const reducer =(state,action)=>{
    switch(action.type){
        case 'SUCCESS' : 
            return {
                loading : false,
                post : action.payload,
                error: ''
            }
        case 'ERROR' :
            return {
                loading : false,
                post: {},
                error : 'failed execution'
            }
        default :
            return state
    }
}

function DataFetch2() {
    const[state,dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res =>{
            dispatch({type:'SUCCESS', payload: res.data})
        })
        .catch(()=>{
            dispatch({type: 'ERROR'})
        })

    },[])
    return (
        <div style={{ backgroundColor: "#e6dd3b" ,marginTop : 10}}>
            {state.loading ? 'Loading..' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetch2
