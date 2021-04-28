import { getCompanies } from '../services/api';

const fetchCompanyData = (state, dispatch) => {
  getCompanies()
    .then(response =>
      dispatch({
        type: 'handleData',
        payload: response.data,
      }))
    .catch(e =>
      dispatch({
        type: 'handleError',
        payload: e,
      })
    );
};

const filterByName = (state, dispatch, value) => {
  dispatch({
    type: 'handleFilter',
    payload: { filterKey: 'name', filterValue: value }
  });
};

const filterBySpecialties = (state, dispatch, value) => {
  if (value === '') {
    dispatch({
      type: 'handleFilter',
      payload: { filterKey: 'specialties', filterValue: [] }
    });
    return;
  }

  const specialties = [...state.filters.specialties];
  const index = specialties.indexOf(value);

  if (index < 0) {
    specialties.push(value);
  } else {
    specialties.splice(index, 1);
  }

  dispatch({
    type: 'handleFilter',
    payload: { filterKey: 'specialties', filterValue: specialties }
  });
};

const clearFilters = (state, dispatch) => {
  dispatch({
    type: 'handleReset',
    payload: null
  });
}

const clearError = (state, dispatch) => {
  dispatch({
    type: 'handleError',
    payload: null
  });
};


export { fetchCompanyData, filterByName, filterBySpecialties, clearFilters, clearError };
