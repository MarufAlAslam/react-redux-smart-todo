import {
  ADDED,
  TOGGLED,
  COlORSELECTED,
  DELETED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
} from "./ActionTypes";

// action for adding todo
export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

// action for toggling todo
export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

// action for selecting color
export const colorSelected = (todoId, color) => {
  return {
    type: COlORSELECTED,
    payload: { todoId, color },
  };
};

// action for deleting todo
export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

// action for completing all todos
export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

// action for clearing completed todos
export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
