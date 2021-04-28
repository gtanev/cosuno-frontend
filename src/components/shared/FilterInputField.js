import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const FilterInputField = ({ placeholder, filterValue, onChange }) => (
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText><FontAwesomeIcon icon={faSearch}/></InputGroupText>
    </InputGroupAddon>
    <Input type="text"
           name="searchField"
           placeholder={placeholder}
           value={filterValue || ''}
           onChange={onChange}/>
  </InputGroup>
);

export default FilterInputField;
