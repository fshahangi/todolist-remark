import React, { useContext } from 'react'
import { stateContext } from '../context/TodoContext'



  const Form = () => {

   const[state,setState]  =useContext(stateContext)



    const inputtextHandler=(e)=>{
      setState({inputText:e.target.value})
    }
    const submitTodoHandler=(e)=>{
       e.preventDefault();  
       setState({todos:[...state.todos,{title:state.inputText, completed:false , id: Math.random() *1000}]})
       setState({inputText:""})
    };
    const statusHandler=(e)=>{
      setState({status:e.target.value})
    }
  return (
    <div>
      <form>
      <input value={state.inputText} onChange={inputtextHandler} type="text" className="todo-input" />
      <button  onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    </div>
  )
}

export default Form
