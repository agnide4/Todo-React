import React, { Component } from 'react'
import PropTypes from "prop-types"



export class TodoListItem extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired
  }
export default TodoListItem
