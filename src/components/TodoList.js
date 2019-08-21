import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {
    return (
        <>
            <div className="todoTable">
                {props.todo.map(item => (
                    <Todo key={item.id} todo={item} dispatch={props.dispatch} />
                ))}
            </div>
            <button 
                className="clear"
                onClick={() => props.dispatch({ type: "TODO_COMPLETE" })}
            >
                Clear Completed
            </button>
        </>
    );
};

export default TodoList;