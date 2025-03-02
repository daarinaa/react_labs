import React from 'react';
import PropTypes from 'prop-types';

const getDeadlineColor = (deadline) => {
  if (!deadline) return 'black';
  const now = new Date();
  const deadlineDate = new Date(deadline);
  const timeDiff = deadlineDate - now;

  if (timeDiff < 0) return 'red';
  if (timeDiff < 24 * 60 * 60 * 1000) return 'yellow';
  return 'green';
};

const Todo = ({ onClick, completed, text, deadline, completedAt }) => (
  <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    <input type="checkbox" checked={completed} onChange={onClick} />
    {text} {deadline && !completed && (
      <span style={{ color: getDeadlineColor(deadline) }}>
        (Дедлайн: {new Date(deadline).toLocaleString()})
      </span>
    )}
    {completed && completedAt && (
      <span style={{ color: 'gray' }}> (Завершено: {new Date(completedAt).toLocaleString()})</span>
    )}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  deadline: PropTypes.string,
  completedAt: PropTypes.string,
};

export default Todo;
