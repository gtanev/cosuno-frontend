import { initialState } from './store';

const handleData = (state, payload) => {
  return {
    ...state,
    data: {
      companies: payload,
      specialties: [...new Set(payload.flatMap(company => company['specialties']))]
    },
    error: null
  };
};

const handleError = (state, payload) => {
  return {
    ...state,
    error: payload
  };
};

const handleFilter = (state, payload) => {
  return {
    ...state,
    filters: {
      ...state.filters,
      [payload.filterKey]: payload.filterValue
    }
  };
};

const handleReset = (state, payload) => {
  return {
    ...state,
    filters: {
      ...initialState.filters
    }
  };
};


export { handleData, handleError, handleFilter, handleReset };
