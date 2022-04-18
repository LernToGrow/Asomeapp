import React from "react";
import {NavLink} from 'react-router-dom';
const Navbar = ()=>{
return (
    <>
        <NavLink exact activeClassName="active_class" to="/about">Anout us </NavLink>
        <NavLink exact activeClassName="active_class" to="/home">Home </NavLink>
        <NavLink exact activeClassName="active_class" to="/about/name">Name </NavLink>
        <NavLink exact activeClassName="active_class" to="/user/sam/kam">User </NavLink>
        <NavLink exact activeClassName="active_class" to="/search">Search </NavLink>
<br/>
<br/>
<br/>
<br/>
</>
)
};

export default Navbar;