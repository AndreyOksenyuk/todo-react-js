import React from 'react';
import './App.css';
import TodoContainer from './components/ToDo/ToDoContainer';
import SearchAppBar from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <TodoContainer />
    </div>
  );
}

export default App;
