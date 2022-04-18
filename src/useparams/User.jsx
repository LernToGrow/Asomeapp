import React from "react";

import { useParams, useLocation ,useNavigate } from "react-router-dom";


const User =()=>{
    const {name,surname} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(navigate);
    return(
        <>
            <h1>this is user {name} {surname}from user page </h1>
            <p>my current location is {location.pathname} </p>
            {
                location.pathname === `/user/sumit/kamble` ? ( <button onClick={()=> navigate.push("/about")}>Click me</button>):null 
            }
        </>
    )
};

export default User;