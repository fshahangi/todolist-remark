import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const stateContext=createContext();

const TodoContext=({children})=>{
    
const [state,setState]=useState({
  inputText : "",
  todos:{},
  status:"all",
  filteredTodos:[]
})

useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response=>{

             setState({todos:response.data.slice(1,10)})
             console.log(state)
        })
        .catch((error)=>{
          console.log(error)
        })
        getLocalTodos();
      },[])

      useEffect(()=>{
        filterHandler(); 
        saveLocalTodos();
    },[state.todos,state.status])

//functions
const filterHandler=()=>{
    switch (state.status){
     case 'completed':
        setState({filteredTodos:state.todos.filter((todo)=>todo.completed===true)})
       break;
     case 'uncompleted':
        setState({filteredTodos:state.todos.filter((todo)=>todo.completed===false)})
       break;
     default:
        setState({filteredTodos:state.todos});
       break;
    }
  }

      //save to Local
  const  saveLocalTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(state.todos));
}
const getLocalTodos=()=>{
    if (localStorage.getItem("todos")===null){

        localStorage.setItem("todos",JSON.stringify([]))
    }else{   
        let todoLocal=JSON.parse(localStorage.getItem("todos"))
        setState({todos:todoLocal})
    }
}



    return(

        <stateContext.Provider value={[state,setState]}>
            {children}
        </stateContext.Provider>
    )

}

export default TodoContext;