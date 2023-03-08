import React from 'react';
import { useState,useReducer } from 'react';
import { INITIAL_STATE, postReducer } from '../postContext/postReducer';

const Post = () => {


    const [state,dispatch] =useReducer(postReducer,INITIAL_STATE)


    const [loading,setLoading]= useState(false)
    const [post,setPost]= useState({});
    const [error,setError]= useState(false)
  
    const handleFetch = () =>{
      dispatch({type:"FETCH_START"})  
    //   setLoading(true) 
    //   setError(false)
  
       fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res)=>{
        // console.log(res.json())
        return res.json();
        
      })
      .then((data)=>{
        // console.log(data.title)
        // setPost(data);
        // setLoading(false)
        
        // {type:"FETCH_SUCCESS",payload:data}
        dispatch({type:"FETCH_SUCCESS",payload:data})
      })
      .catch((err)=>{
            // setError(true);
            // setLoading(false);
  
            dispatch({type:"FETCH_ERROR"})
      });
    }
  
  
    return (
        <div className="App">
   <button onClick={handleFetch}>
        {state.loading ? "wait.." :"fetch the post"}

   </button>
   <p>{state.post?.title}</p>
   <span>{state.error ? "Something went wrong!" : ""}</span>
    </div>
    );
}

export default Post;
