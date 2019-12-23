import React ,{Component}from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import ToAdd from './components/ToAdd';

import './App.css';
import { render } from '@testing-library/react';
import About from './components/pages/About';

class App extends Component {
  state={
     todos:[
       {
         id:1,
         title:"Take out the trash",
         completed:false
       }
       ,
       {
        id:2,
        title:"having a dinner with ",
        completed:false
      },
      {
        id:3,
        title:"doing a excercises",
        completed:false
      }
     ]
  }
  // toggle mark 
  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map((todo)=>{
      if(todo.id===id){
        todo.completed=!todo.completed;
      }
      return todo;
    })

    }

    );
  }
  //to delete an Item
  toDel=(id)=>{
    this.setState({todos:[...this.state.todos.filter(todo=> todo.id!== id)]

    });
  }
 addto=(title)=>{
   const newItem={
      id:20,
      title:title,
      completed:false,
   }
   this.setState({
     todos:[... this.state.todos, newItem]
   })

 }
  render()
  {
  
    
  return (
    <Router>
<div className="App">
      <div className="container">
      <Header/>
      <Route exact path="/" render={props=>(
           <React.Fragment>
             <ToAdd addto={this.addto}/>
     <Todos todos={this.state.todos}  markComplete={this.markComplete} toDel={this.toDel}/>
           </React.Fragment>
      )} />
      <Route  path="/about" component={About}/>
      
     </div>
    </div>
    </Router>
    
  )
  }
}

export default App;
