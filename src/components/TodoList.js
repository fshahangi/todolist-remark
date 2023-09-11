import React from 'react'
import Todo from './Todo'

const TodoList = ({filteredTodos, todos,setTodos}) => {
  return (
    <div>
      <div className="todo-container">
      <ul className="todo-list">
        { filteredTodos.map((item)=>{
           
            return (<Todo setTodos={setTodos} todos={todos} title={item.title} key={todos.id}  todo={item}/>) 
        })}
        
      </ul>
    </div>
    </div>
  )
}

export default TodoList
