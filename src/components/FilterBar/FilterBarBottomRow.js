import { useGlobalState } from '../../state/provider';
import { filterBySpecialties } from '../../state/actions';
import { Col, Row } from 'reactstrap';
import ClosableTag from '../shared/ClosableTag';

const FilterBarBottomRow = () => {
  const [state, dispatch] = useGlobalState();

  const specialtyFilters = state.filters.specialties;

  const onCloseCallback = (value) => {
    filterBySpecialties(state, dispatch, value);
  };

  return specialtyFilters && specialtyFilters.length ? (
    <Row className="mt-4 px-4">
      <Col className="px-0">
        {
          specialtyFilters.map(specialty =>
            <ClosableTag key={specialty} value={specialty} onClose={onCloseCallback}/>
          )
        }
      </Col>
    </Row>
  ) : null;
};

export default FilterBarBottomRow;
