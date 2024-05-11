const initialState = {
    result : {},
  };
  
  export const Todo = (state = initialState, action) => {
    switch (action.type) {
    case 'GET_TODO_LIST':
      return { ...state, result: action.data };
    default:
      return state;
    }
  };
  