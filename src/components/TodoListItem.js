import React, { Component } from 'react'
import PropTypes from "prop-types"



export class TodoListItem extends Component {
    getStyle = () =>{
        //using ternary operator
        return{
            background: "blue",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? 
            "line-through" : "none"
        }
    }
    //if not using arrow function will need to bind this to event
    


    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {" "}
                    { title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

const btnStyle = {
    background: "yellow",
    color: "gray",
    border: "none",
    padding: "5px 15px",
    borderRadius: "50%",
    float: "right",

}
export default TodoListItem
