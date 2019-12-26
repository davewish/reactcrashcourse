import React ,{Component}from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import ToAdd from './components/ToAdd';
//import uuid from 'uuid'
import Axios from 'axios';

import './App.css';
//import { render } from '@testing-library/react';
import About from './components/pages/About';

class App extends Component {
  state={
     todos:[]
  }
  //compoennetDidMount
  componentDidMount(){
    Axios.get('https://jsonplacehokder.upicoder.com/todos').then(res=>{
      this.setState({todos:res.data})}
)
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
    Axios.delete('https://jsonplacehokder.upicoder.com/todos/${id}').then(res=>
    this.setState({todos:[...this.state.todos.filter(todo=> todo.id!== id)]})
    );
    

    
  }
 addto=(title)=>{
   Axios.post('https://jsonplacehokder.upicoder.com/todos',{
     title,
     completed:false
   }).then(res=>
    this.setState({
      todos:[...this.state.todos,res.data ]
    })
   );
   

 }
  render()
  {
  
    console.log(this.state.todos)
  return (
    <Router>
<div className="App">
      <div className="container">
      <Header  className="header" />
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
