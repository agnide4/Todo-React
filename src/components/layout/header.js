import React from 'react'
import { Link } from "react-router-dom"
//this is a functional component
export default function header() {


    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/">Home</Link> | <Link to="/About">About</Link>
        </header>
    )
}

const headerStyle = {
    background: "black",
    color: "Purple",
    textAlign: "center",
    padding: "10px"
}

const linkStyle = {
    color: "green",
    textDecoration: "none"
}

