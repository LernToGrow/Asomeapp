import React from "react";
import { FirstName,LastName } from "../App";

const ConC =()=>{
    return(
        <>
            <FirstName.Consumer>{(fname)=>{
                return(
                    <LastName.Consumer>{(lname)=>{
                        return <h1>Hi my name is A {fname} {lname}</h1>
                    }}</LastName.Consumer>
                )
            }}</FirstName.Consumer>
            
        </>
    )
};

export default ConC;
