import { STATUSCHANGED, COLORCHANGED } from "./ActionTypes";
import initialState from "./initState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLORCHANGED:
      const { changeType, color } = action.payload;
      const { colors } = state;
      const colorExists = colors.includes(color);
      switch (changeType) {
        case "added":
          if (colorExists) {
            return state;
          }
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          if (!colorExists) {
            return state;
          }
          return {
            ...state,
            colors: state.colors.filter((c) => c !== color),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default reducer;
