import React, { useEffect, useState } from "react";

const Titleincrement = ()=>{
    const [count,setCount] =useState(0);
    useEffect(()=>{
        document.title=`you clicked me ${count}`;
    });
return(
    <>
        <button onClick={()=>{
              setCount(count+1)  
        }}>You Click me {count} </button>
    </>
)
}

export default Titleincrement;