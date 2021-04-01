import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetch() {

    const [loading , setLoading]= useState(true)
    const [error,setError] = useState('')
    const [post, setPost] = useState({})

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>{
        setLoading(false)
        setPost(res.data)
        setError('')
    }).catch(error=>{
         setLoading(false)
         setPost({})
         setError('There is a problem')
    },[]) //>>>>>burdaki bos array islemin tekrar etmemesi icin
})
    return (
        <div style={{ backgroundColor: "#e6dd3b" }}>
            <h1>Topic:Fetching, useEffect, useState File: DataFetch.js</h1>
            {loading ? 'Loading..' :post.body}
            {error ? error:null}
        </div>
    )
}

export default DataFetch
