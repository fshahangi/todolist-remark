import React from 'react'

const Todo = ({setTodos,todos,todo,title}) => {

    const deletehandler=()=>{
        setTodos(todos.filter((item)=>item.id!==todo.id))
      }
  
    const completeHandler=()=>{
        setTodos(todos.map(item=>{
            if(item.id===todo.id){
               return{
                   ...item,completed:!item.completed
               }
            }
            return item;
           })) 
      }
  return ( 
    <div className='todo'>
       
        <li className={`todo-item ${todo.completed ? "completed": ""}`}>{title}</li>
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
