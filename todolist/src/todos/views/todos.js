import React from 'react';
// TODO
import AddTodo from './addTodo';
import TodoList from './todoList';

export default () => {
  return (
    <div className="todos">
      <AddTodo />
      <TodoList />
    </div>
  )
}