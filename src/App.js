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
         title:'๐์ ๋ชฉ์ ์๋ ฅํ์ธ์',
         content:'ํด์ผํ  ์ผ๋ค์ ๊ธฐ๋กํด ๋ณด์ธ์',
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


// use Ref๋ผ๋ ๊ฐ์ฒด๋ฅผ ํ๋ ๋ง๋ค๊ณ  ๊ทธ ์์์ text์นธ์ ์ฐ๊ฒฐ์์ผ์ฃผ๋ฉด ๊ทธ๊ณณ์ผ๋ก ์ ์ฅ์ด ๋๊ณ  
// useRef.current.value ๊ฐ์ผ๋ก ๋ฒํผ์ ๋๋ฅด๋ฉด onClick ์ด๋ฒคํธ๋ก ๊ฐ์ ๋ฐ์์ฌ ์ ์๋ค.

// ref๋ก ์ ๊ทผํ๋ ๋ฐฉ๋ฒ์ ๋จ์ํ ๊ฐ์ ๋ฐ์์ฌ ๋ ) ํน์ง : ๋ฆฌ๋๋๋ง์ด ์ผ์ด๋์ง ์๋๋ค.
// State๋ก ์ ๊ทผํ๋ ๋ฐฉ๋ฒ์ ์ํ๊ฐ ๋ฐ๋ ๋๋ง๋ค ๋ฆฌ๋๋๋ง์ด ์ผ์ด๋๋ค.