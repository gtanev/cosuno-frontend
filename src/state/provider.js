import React from 'react';
import { initialState, reducer } from './store';

const GlobalContext = React.createContext(null);

const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <GlobalContext.Provider value={[state, dispatch]}>{children}</GlobalContext.Provider>;
};

const useGlobalState = () => React.useContext(GlobalContext);

export { StateProvider, useGlobalState }
