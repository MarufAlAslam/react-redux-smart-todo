import { initialState } from "./initState";
import {
  ADDED,
  TOGGLED,
  COlORSELECTED,
  DELETED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
} from "./ActionTypes";

// get id for the next todo
const nextToDoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

// defining reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextToDoId(state),
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    case COlORSELECTED:
      return state.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return {
            ...todo,
            color: action.payload.color,
          };
        }
        return todo;
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default reducer;
