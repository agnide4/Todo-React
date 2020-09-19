import React, { Component } from 'react'
import PropTypes from "prop-types"

const btnStyle = {
    background: "yellow",
    color: "gray",
    border: "none",
    padding: "5px 15px",
    borderRadius: "50%",
    float: "right",
    

}

const btnStyleHover = {
    ...btnStyle, background: "red"
}

export class TodoListItem extends Component {

    state = {
        hover: false    
    }

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
                <button onMouseEnter={()=> this.setState({hover: true})} onMouseLeave={()=> this.setState({hover: false})} onClick={this.props.delTodo.bind(this, id)} style={this.state.hover? btnStyleHover : btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired
  }


export default TodoListItem
