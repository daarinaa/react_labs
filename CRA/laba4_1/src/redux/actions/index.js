let nextTodoId = 0;
export const addTodo = (text, deadline) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  completed: false,
  createdAt: new Date().toISOString(),
  deadline,
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
  completedAt: new Date().toISOString(),
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};