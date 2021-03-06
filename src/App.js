import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';
import Background from './Background';

const GlobalStyle = createGlobalStyle`
  body {
    background: #FF0049;
    overflow-x: hidden;
  }
`;

function App() {
  return (
    <TodoProvider>
      <Background />
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
    
  );
}

export default App;