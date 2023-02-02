import './App.css';
import { useState } from 'react';
import TodoTitleArea from './components/TodoTitleArea/index';
import TodoContainer from './components/TodoContainer';

function App() {
  const [todos, setTodos] = useState([
    {
      title:'title1',
      content:'오늘은 목요일 '
    },
    {
      title:'title2',
      content:'내일은 금요일'
    }
  ]);

  const[selectTodoIndex,setSelectTodoIndex] = useState(0);
  const setTodo = (newTodo) =>{
      const newTodos = [...todos] // 먼저 기존의 것을 모두 풀고 // 새로운 레퍼런스로 만들어준다. ( ... 스프레드 연산자로 )
      newTodos[selectTodoIndex] =newTodo; // 해당 index에 해당하는 부분을 newTodo라는 매개변수로 받는다.
      setTodos(newTodos); // todos가 있는 State의 값을 변경해준다. 
  }


  const addTodo = ()=>{
    setTodos([
      ...todos,
      {
        title:"제목을 입력하세요",
        content:"해야 할 일을 입력해 보세요."
      }
    ])
    setSelectTodoIndex(todos.length)
  }

  const deleteTodo =(index) =>{
    const newTodos = [...todos];
    newTodos.splice(index,1)  // index번호부터 1개 삭제 자기자신 삭제
    setTodos(newTodos);
  }


  return (
    <div className="App">
        <TodoTitleArea 
         todos={todos} 
         selectTodoIndex={selectTodoIndex}
         setSelectTodoIndex={setSelectTodoIndex}
         addTodo={addTodo} 
         deleteTodo={deleteTodo}
        />
        
        
        <TodoContainer
         todo={todos[selectTodoIndex]}
         setTodos={setTodos}
          setTodo ={setTodo} 
        />
    </div>
  );
}

export default App;


// use Ref라는 객체를 하나 만들고 그 요소에 text칸에 연결시켜주면 그곳으로 저장이 되고 
// useRef.current.value 값으로 버튼을 누르면 onClick 이벤트로 값을 받아올 수 있다.

// ref로 접근하는 방법은 단순한 값을 받아올 때 ) 특징 : 리랜더링이 일어나지 않는다.
// State로 접근하는 방법은 상태가 바뀔 때마다 리랜더링이 일어난다.