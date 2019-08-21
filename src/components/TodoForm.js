import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.dispatch({ type: 'ADD_TASK', payload: this.state.task });
        this.setState({
            task: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input
                    className="inputStyle"
                    type="text"
                    value={this.state.task}
                    name="task"
                    onChange={this.handleChange}
                    required
                />
                <button className="add">Add Task</button>
            </form>
        );
    }
};

export default TodoForm;