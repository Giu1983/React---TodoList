import React from 'react';
import logo from './logo.svg';
import './App.css';
import'./Components/Displaynotes'; 

import Indexpage from './Pages/index';
function App() {
   state = {
   notes: {
     1: {
       1: {
         _id: 1,
         title: "Hello, World",
         body: "this is the body of the note", 
         updateDAT: new Date()
       }
     },
   
    2: {
      2: {
        _id: 2,
        title: "Hello, World nochmal",
        body: "this is the body of the note", 
        updateDAT: new Date()
      }
    }
  },
   }
     render() {

      const notes = Objects.data{this.props.notes} 
      return (
       <div className="App">
       <Indexpage notes={this.state.notes} />
       <Displaynotes />
       
       </div>
     );
    }
   }
}

export default App;
