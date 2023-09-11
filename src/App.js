
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import axios from 'axios';

function App() { 
  const[inputText,setInputText]  =useState('')
  const[todos,setTodos]  =useState([])
  const[status,setStatus]  =useState('all')
  const[filteredTodos,setFilteredTodos]  =useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response=>{
    })
    .catch((error)=>{
      console.log(error)
    })
    getLocalTodos()
  },[])

  useEffect(()=>{
    filterHandler(); 
    saveLocalTodos();
},[todos,status])


  //functions
const filterHandler=()=>{
    switch (status){
     case 'completed':
      setFilteredTodos(todos.filter((todo)=>todo.completed===true))
       break;
     case 'uncompleted':
      setFilteredTodos(todos.filter((todo)=>todo.completed===false))
       break;
     default:
      setFilteredTodos(todos);
       break;
    }
  }

   //save to Local
   const  saveLocalTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
}
const getLocalTodos=()=>{
    if (localStorage.getItem("todos")===null){
        localStorage.setItem("todos",JSON.stringify([]))
    }else{   
        let todoLocal=JSON.parse(localStorage.getItem("todos")) 
        setTodos(todoLocal)
    }
}

  return (
  <div className="App">
     <header>
      <h1> Todo List</h1>
     </header>

    <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} setStatus={setStatus} filteredTodos={filteredTodos}/>
    <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />

</div>
  );
}

export default App;
