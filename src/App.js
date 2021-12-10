import logo from './logo.svg';
import './App.css';
import {InputField} from "./components/InputField";
import {TodoList} from "./components/TodoList";

function App() {
  return (
    <div className="App">
        <h1>Todo</h1>
      <InputField />
      <TodoList />
    </div>
  );
}

export default App;
