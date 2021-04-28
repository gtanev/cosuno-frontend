import { Container } from 'reactstrap';
import FilterBarTopRow from './FilterBarTopRow';
import FilterBarBottomRow from './FilterBarBottomRow';

const FilterBar = () => (
  <Container className="bg-white sticky-top py-4 shadow">
    <FilterBarTopRow/>
    <FilterBarBottomRow/>
  </Container>
);

export default FilterBar;
