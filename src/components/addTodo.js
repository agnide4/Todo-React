import React, { Component } from 'react'

export class addTodo extends Component {

    state = {
        title: ""
    }

    addTask = (e) => this.setState({ title: e.target.value })
    submission = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title)
        this.setState({title:""})
    }

    render() {
        return (
            <form onSubmit={this.submission}>
                <input type="text"
                    name="title"
                    style={{flex: "10", padding: "5px"}}
                    placeholder="Add Todo.."
                    value= {this.state.title}
                    onChange = {this.addTask}
                />
                <input type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: "1"}}
                />
            </form>
        )
    }
}

export default addTodo
