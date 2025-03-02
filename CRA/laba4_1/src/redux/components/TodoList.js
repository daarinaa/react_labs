import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const groupByDate = (todos) => {
  return todos.reduce((groups, todo) => {
    const date = todo.createdAt.split('T')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(todo);
    return groups;
  }, {});
};

const TodoList = ({ todos, toggleTodo }) => {
  const groupedTodos = groupByDate(todos);

  return (
    <div>
      {Object.keys(groupedTodos).map((date) => (
        <div key={date}>
          <h3>{new Date(date).toLocaleDateString()}</h3>
          <ul>
            {groupedTodos[date].map((todo) => (
              <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      deadline: PropTypes.string,
      completedAt: PropTypes.string,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;