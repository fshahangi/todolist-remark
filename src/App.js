import { useContext, useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import axios from 'axios';
import { stateContext } from './context/TodoContext';


function App() {

  const[state,setState]  =useContext(stateContext)

  return (
    <div className="App">
      <header>
      <h1> Todo List</h1>
    </header>
   

<Form/>
<TodoList/>

    </div>
  );
}

export default App;
