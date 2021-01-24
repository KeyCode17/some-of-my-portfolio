import React, {useState,useEffect} from 'react';
import './App.css';
//Import from components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  //states start From Here
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //function start from here
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //local Storage
  const saveLocalTodos = () => {
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todolocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todolocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form todos={todos}
      setInputText={setInputText}
      inputText={inputText}
      setTodos={setTodos}
      setStatus={setStatus}
      />
      <TodoList
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
