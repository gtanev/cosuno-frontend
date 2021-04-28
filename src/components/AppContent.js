import { Fragment } from 'react';
import FilterBar from './FilterBar/FilterBar';
import Feed from './Feed/Feed';
import ErrorAlert from './ErrorAlert/ErrorAlert';

const AppContent = () => (
  <Fragment>
    <FilterBar/>
    <Feed/>
    <ErrorAlert/>
  </Fragment>
);

export default AppContent;
