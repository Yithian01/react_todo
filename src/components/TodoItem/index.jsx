import React from 'react';
import './index.css';

const TodoItem = ({children,onClick, onClickDelelte ,isSelected}) => {
    return (
        <div onClick ={onClick} className={"todoItem" + (isSelected ? " on" : '')}>
            {children}
            <button
             onClick={onClickDelelte}
             className="delBtn"
            > DEL </button>
        </div>
    );
};

export default TodoItem;