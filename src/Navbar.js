import React from "react";
import { Link, NavLink } from "react-router-dom";
export const Navbar =()=>{
    return(
        <NavLink>
            <Link to='/'>HOME</Link>
            <Link to='about'>About</Link>
        </NavLink>
    )
}