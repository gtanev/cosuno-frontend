import { useGlobalState } from '../../state/provider';
import { clearFilters, filterByName, filterBySpecialties } from '../../state/actions';
import { filteredCompanies, filteredSpecialtiesWithCounts } from '../../state/selectors';
import { Col, Row } from 'reactstrap';
import FilterInputField from '../shared/FilterInputField';
import CheckboxDropdown from '../shared/CheckboxDropdown';
import BorderlessButton from '../shared/BorderlessButton';

const FilterBarTopRow = () => {
  const [state, dispatch] = useGlobalState();

  return (
    <Row className="align-items-stretch">
      <Col lg={4} className="align-self-center pl-4 pr-0">
        <FilterInputField placeholder="Company name"
                          filterValue={state.filters['name']}
                          onChange={(event) => filterByName(state, dispatch, event.target.value)}/>
      </Col>
      <Col lg={5} className="align-self-center align-items-center text-left pl-4 pr-4 d-inline-flex">
        <CheckboxDropdown label="Services / Specialties"
                          header="Filter by specialty"
                          items={filteredSpecialtiesWithCounts(state)}
                          onClick={(value) => filterBySpecialties(state, dispatch, value)}/>
        <BorderlessButton className="ml-4" value="Clear Filters" onClick={() => clearFilters(state, dispatch)}/>
      </Col>
      <Col lg={3} className="bg-dark text-white d-flex justify-content-end align-items-center">
        <div className="text-right">{filteredCompanies(state).length} companies found</div>
      </Col>
    </Row>
  );
};

export default FilterBarTopRow;
