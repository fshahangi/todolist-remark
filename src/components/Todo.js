import React, { useContext } from 'react'
import { stateContext } from '../context/TodoContext'


const Todo = (props) => {
 
  const[state,setState]  =useContext(stateContext)

  
    const deletehandler=()=>{
    
      setState({todos:state.todos.filter(item=>item.id!==props.todo.id)})
    }

    const completeHandler=()=>{
 
 
        setState(state.todos.map(item=>{
          if(item.id===props.todo.id){
             return{
                 ...item,completed:!item.completed
             }
          }
          return item;
         })) 
    }


  return (
    <div className='todo'>
       
        <li className={`todo-item ${props.todo.completed ? "completed": ""}`}>{props.title}</li>
        <button className='complete-btn'  onClick={completeHandler}>
        <i className='fas fa-check'></i>
        </button>
       <button className='trash-btn' onClick={deletehandler}>
        <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}

export default Todo
