import React from 'react';

const Todo = props => {
    return (
        <div 
            className={`item${props.todo.completed ? " completed" : ""}`}
            onClick={() => props.dispatch({ type: "TOGGLE_TASK", payload: props.todo.id })}
        >
            {/* returns initial todo data */}
            <p className="todoTask">{props.todo.item}</p> 
            {/* returns new tasks */}
            <p className="todoTask">{props.todo.task}</p>
        </div>
    );
};

export default Todo;