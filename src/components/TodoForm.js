import React from 'react';


class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newTodoName: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            newTodoName: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleItemAdd(this.state.newTodoName); // from props
        this.setState({
            newTodoName: "", // once you add item, clear state
        })
    }
    render() {
        console.log("state inside of TodoForm",this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="type your next todo here"
                    name="item"
                    value={this.state.newTodoName}
                    onChange={this.handleChange}
                />
                <button>Add To List</button>
            </form>
        )
    }
}

export default TodoForm;