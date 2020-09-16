import React, {Component} from 'react';
import Header from "./components/layout/header"
import './App.css';
import Todos from "./components/Todos"


//class based component
class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "learn react",
        completed: false
      },
      {
        id: 2,
        title: "Do homework",
        completed: false
      },
      {
        id: 3,
        title: "Get hired",
        completed: false
      }
    ]
  }

  markComplete = (id) =>{
    console.log("this is an example of prop-drilling")
    console.log(id)
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
}

  //delete Todo
  delTodo = (id) =>{
    console.log("Prop-drilled again")
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})

  }



    render(){


      return (
        <div className="App">
          <Header/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      );

    }

    

  
}

export default App;

// //This format uses hooks. Also called functional programing
// function App() {

//   State = {
//     todos: [
//       {
//         id: 1,
//         title: "learn react",
//         completed: false
//       },
//       {
//         id: 2,
//         title: "Do homework",
//         completed: false
//       },
//       {
//         id: 3,
//         title: "Get hired",
//         completed: false
//       }
//     ]
//   }


// return (
//   <div className="App">
//     <Todos/>
//   </div>
// );
// }