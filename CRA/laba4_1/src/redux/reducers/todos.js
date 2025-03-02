const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          createdAt: action.createdAt,
          deadline: action.deadline,
          completedAt: null,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed, completedAt: todo.completed ? null : action.completedAt }
          : todo
      );
    default:
      return state;
  }
};

export default todos;