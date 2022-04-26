import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import NewToDo from "./components/NewTodo";

function App() {
  const [toDos, setToDos] = useState([]);

  useEffect(function () {
    async function fetchApi() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const json = await res.json();
      setToDos(json.splice(0, 20));
    }
    fetchApi();
  }, []);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <NewToDo setToDos={setToDos} />
      <TodoList toDos={toDos} setToDos={setToDos} />
    </div>
  );
}

export default App;
