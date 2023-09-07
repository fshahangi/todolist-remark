import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,setTodos,filteredTodos}) => {
  return (
    <div>
      <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(item=>{
            return (<Todo text={item.text} key={todos.id} setTodos={setTodos} todos={todos} todo={item}/>) 
        })}
        
      </ul>
    </div>
    </div>
  )
}

export default TodoList
