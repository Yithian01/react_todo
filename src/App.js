import './App.css';
import { useState ,useCallback} from 'react';
import { setItem ,getItem } from './lib/stroage';
import TodoTitleArea from './components/TodoTitleArea/index';
import TodoContainer from './components/TodoContainer';
import debounce from 'lodash.debounce';
const debouncedSetItem = debounce(setItem, 5000);


function App() {
  const [todos, setTodos] = useState( getItem('todo') || []);
  const[selectTodoIndex,setSelectTodoIndex] = useState(0);

   const setTodo = useCallback((newTodo) => {
    const newTodos =[...todos]; 
    newTodos[selectTodoIndex] = newTodo ;
    setTodos(newTodos)
    debouncedSetItem('todo',newTodos) 
  },[todos,selectTodoIndex])

 

  const addTodo = useCallback(() => {
    const now = new Date().getTime();
     const newTodos = [
       ...todos,
       {
         title:'😊제목을 입력하세요',
         content:'해야할 일들을 기록해 보세요',
         createdAt: now,
       },
     ]
   setTodos(newTodos)
   setSelectTodoIndex(todos.length)
   debouncedSetItem('todo',newTodos) 
 },[todos])


 const deleteTodo = useCallback((index) => {
  const newTodos = [...todos] ;
  newTodos.splice(index,1);
  setTodos(newTodos)
  if(index===selectTodoIndex){
    setSelectTodoIndex(0);
  }
  debouncedSetItem('todo',newTodos)
},[selectTodoIndex, todos])


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