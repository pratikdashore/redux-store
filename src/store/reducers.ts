export const initialState = {
  loaded: false,
  loading: true,
  data: [{ label: 'eat pizza', complete: false }]
};

export function reducer(
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) {
  switch (action.type) {
    case 'ADD_TODO': {
      const todo = action.payload;
      const data = [...state.data, todo];
      return { ...state, data };
    }

    default:
      break;
  }
  return state;
}
