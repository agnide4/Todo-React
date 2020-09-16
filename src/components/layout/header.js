import React from 'react'
//this is a functional component
export default function header() {


    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const headerStyle = {
    background: "black",
    color: "Purple",
    textAlign: "center",
    padding: "10px"
}