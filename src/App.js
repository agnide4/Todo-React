import React, {Component} from 'react';
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


    render(){


      return (
        <div className="App">
          <Todos todos={this.state.todos}/>
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