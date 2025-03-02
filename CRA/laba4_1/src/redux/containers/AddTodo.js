import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  const [text, setText] = useState('');
  const [deadline, setDeadline] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!text.trim()) return;
          dispatch(addTodo(text, deadline));
          setText('');
          setDeadline('');
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Добавить дело" />
        <input type="datetime-local" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);