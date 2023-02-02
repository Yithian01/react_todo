import React from 'react';
import TodoList from '../TodoList';
import TodoAddBtn from '../TodoAddBtn';
import './index.css';

const TodoTitleArea = ({todos,setSelectTodoIndex,addTodo, deleteTodo,selectTodoIndex}) => {
    return (
        <div className='titleArea'>
            <h1>Planner</h1>
            <TodoList 
             todos ={todos}
             setSelectTodoIndex={setSelectTodoIndex}
             deleteTodo={deleteTodo}
             selectTodoIndex={selectTodoIndex}
            />

            <TodoAddBtn
             onClick={addTodo}
            />
        </div>
    );
};

export default TodoTitleArea;