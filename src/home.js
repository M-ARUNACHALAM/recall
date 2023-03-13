import React from "react";
import { Link } from "react-router-dom";
export default function Home(){
    return(
        <>
        <main>
            <h2>HOME</h2>
            <p>
                Welcome to the home page
            </p>
            <nav>
                <Link to='about'>Home</Link>
            </nav>
        </main>
        </>
    )
}