import { handleData, handleError, handleFilter, handleReset } from './reducers';

export const initialState = Object.freeze({
  data: {
    companies: [],
    specialties: []
  },
  filters: {
    name: '',
    specialties: [],
  },
  error: null,
});

export const reducer = (state, action) => {
  switch (action.type) {
    case 'handleData':
      return handleData(state, action.payload);
    case 'handleError':
      return handleError(state, action.payload);
    case 'handleFilter':
      return handleFilter(state, action.payload);
    case 'handleReset':
      return handleReset(state, action.payload);
    default:
      return state;
  }
};
