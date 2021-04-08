import React from 'react'
import './Todo.css'

const ToDo = (props) => {
    return(
        <div onClick={() => props.toggleItemCompleted(props.todoItem.id)} 
        className={`${props.todoItem.completed ? 'completed' : ''}`} >
            <p>
                {props.todoItem.task}
            </p>
        </div>
    )
}
export default ToDo