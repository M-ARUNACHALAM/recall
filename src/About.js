import React from "react";
import { Link } from "react-router-dom";

export default function About(){
    return(
        <>
        <main>
            <h1>About</h1>
            <p>
                you are in the welcome page
            </p>
            <nav>
                <Link to='/'>About</Link>
            </nav>
        </main>
        </>
    )
}