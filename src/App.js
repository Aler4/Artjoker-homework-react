
import './App.css';
import React from "react";
import {NavBar} from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import {navConfig} from "./constants";
import {Converter, Todo} from "./pages";

function App(props) {
    console.log(props.store)
  return (
    <div className="App">
        <header>
            <NavBar config={navConfig} />
        </header>
        <main>
            <Routes>
                <Route path={navConfig.home.path} exect element={<>Home</>} />
                <Route path={navConfig.todo.path} exect element={<Todo/>} />
                <Route path={navConfig.converter.path} exect element={<Converter/>} />
            </Routes>
        </main>
    </div>
  );
}

export default App;
