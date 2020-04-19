import todoSlice from "../features/todoSlice";
import visibilitySlice from "../features/visibilitySlice";

const reducer = {
  todos: todoSlice,
  visibilityFilter: visibilitySlice,
};

export default reducer;
