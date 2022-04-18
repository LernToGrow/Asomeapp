import React, { useState } from "react";
import "../search/Search.css";
import Searchresult from "./Searchresult";

const Search = ()=>{
    const [img,setImg] = useState("");
    const inputEvent =(event)=>{
        const data=event.target.value;
        console.log(data);
        setImg(data);
    };
    return (
        <>
            <div className="searchbar">
                <input type="text" placeholder="search anything" onChange={inputEvent} value={img}></input>
                {img === "" ? null :<Searchresult name={img}/>}
            </div>
        </>
    )
};

export default Search;