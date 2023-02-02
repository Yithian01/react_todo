import React from 'react';
import TodoItem from '../TodoItem'

const TodoList = ({todos, setSelectTodoIndex,deleteTodo,selectTodoIndex}) => {

  return (
     <div className='이거다'>
            {
               todos.map((todo,index)=>{
                    return(
                        <TodoItem 
                          key ={index}
                          index ={index}
                          onClick ={()=>{
                            setSelectTodoIndex(index)
                          }}

                          onClickDelelte={(e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            deleteTodo(index)
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