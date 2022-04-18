import React, { useContext } from "react";
import ConC from './ConC';
import { FirstName, LastName } from "../App";

const ConB =()=>{

    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return(
        <>
            <h1>my name is {fname} {lname}</h1>
        </>
    )
};

export default ConB;