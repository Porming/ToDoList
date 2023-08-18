import React from 'react'
import EBTN from '../image/edit_btn.svg'
import DBTN from '../image/delete_btn.svg'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div>
        <ul>
          <li>
            <label className={`${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)}>{task.task}</label>
            <div className='btn'>
              <button className='delete_btn' onClick={() => editTodo(task.id)}><img src={EBTN} alt='edit button'/></button>
              <button className='delete_btn' onClick={() => deleteTodo(task.id)}><img src={DBTN} alt='delete button'/></button>
            </div>
          </li>
        </ul>
      
    </div>
  )
}
