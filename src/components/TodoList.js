import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    render() {
        return (
            <div>
            <h1>What's next on the list?</h1>
            {this.props.listItems.map((todoItem)=>(
                <Todo key={todoItem.id} todoItem={todoItem} toggleItemCompleted={this.props.toggleItemCompleted}/>
                )  
            )}
        </div>
        )
    }
}


export default TodoList;