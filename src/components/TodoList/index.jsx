import React from 'react';
import TodoItem from '../TodoItem'

const TodoList = ({
  todos,
  setSelectTodoIndex,
  deleteTodo,
  selectTodoIndex
}) => {

  return (
     <div className>
            { todos.map((todo,index)=>{
                    return(
                        <TodoItem 
                          key ={todo.createdAt}
                          onClick ={()=>{
                            setSelectTodoIndex(index)
                          }}

                          onClickDelelte={(e)=>{
                            deleteTodo(index);
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          isSelected = { index === selectTodoIndex}
                          >
                            {todo.title}
                        </TodoItem>  

                    )
               })
            }
      </div>
   );
};

export default TodoList;