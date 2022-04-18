import React from "react";

const Searchresult = (props)=>{
    const img =`https://source.unsplash.com/400x300/?${props.name}`;
    //const img1 = `https://images.unsplash.com/photo-1458022479614-14737487b68c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0ODA5OTcwOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600`;
    return (
        <>
            <div>
               <img src={img} alt="search" /> 
            </div>
        </>
    )
};

export default Searchresult;