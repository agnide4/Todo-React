import React, {Component} from 'react';
import Header from "./components/layout/header"
import './App.css';
import Todos from "./components/Todos"
import AddTodo from "./components/addTodo"
//import { v4 } from "uuid"
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from './components/pages/About';
import axios from "axios"
//class based component
class App extends Component {

  state = {
    todos: [
      // {
      //   id: v4(),
      //   title: "learn react",
      //   completed: false
      // },
      // {
      //   id: v4(),
      //   title: "Do homework",
      //   completed: false
      // },
      // {
      //   id: v4(),
      //   title: "Get hired",
      //   completed: false
      // }
    ]
  }


 componentDidMount(){
   axios.get("https://jsonplaceholder.typicode.com/todos?_limit=15")
        .then(response => this.setState( {todos:response.data}) )
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

  //add Task
  addTask = (title) => {
    console.log(title)
    // const newTask = {
    //   id: v4(),
    //   title: title, //in Es6 can just title
    //   completed: false
    // }
    axios.post("https://jsonplaceholder.typicode.com/todos", {
              title,
              completed: false
    })
          .then(response => this.setState( {todos: [...this.state.todos, response.data]}))
    //add to state
    // this.setState({ todos: [...this.state.todos, newTask]})
  }

  

    render(){


      return (
        <Router>
          <div className="App">
            <div className="container">
                  <Header/>
                  <Route exact path="/" render={props => (
                      <React.Fragment>
                           <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                          <AddTodo addTask={this.addTask}/>
                      </React.Fragment>

                  )} />
                  <Route path="/about" component={About}/>
                 

            </div>
          
          </div>

        </Router>
        
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