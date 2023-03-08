import React from 'react';
import { useState } from 'react';

const Post = () => {

    const [loading,setLoading]= useState(false)
    const [post,setPost]= useState({});
    const [error,setError]= useState(false)
  
    const handleFetch = () =>{
      setLoading(true) 
      setError(false)
  
       fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res)=>{
        // console.log(res.json())
        return res.json();
        
      })
      .then((data)=>{
        console.log(data.title)
        setPost(data);
        setLoading(false)
      })
      .catch((err)=>{
            setError(true);
            setLoading(false);
  
      });
    }
  
  
    return (
        <div className="App">
   <button onClick={handleFetch}>
        {loading ? "wait.." :"fetch the post"}

   </button>
   <p>{post?.title}</p>
   <span>{error ? "Something went wrong!" : ""}</span>
    </div>
    );
}

export default Post;
