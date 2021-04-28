import { Badge, CustomInput, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

const CheckboxDropdown = ({ label, header, items, onClick }) => {
  const handleOnClick = (e, v) => {
    e.preventDefault();
    onClick(v);
  };

  return (
    <UncontrolledDropdown>
      <DropdownToggle caret color="primary" outline className="pr-3">
        <span className="px-3">{label}</span>
      </DropdownToggle>
      <DropdownMenu className="px-0">
        {
          header && <DropdownItem header>{header}</DropdownItem>
        }
        {
          items.map((item, idx) =>
            <DropdownItem key={`#${idx}`}
                          toggle={false}
                          className="py-2"
                          onClick={(e) => item.count && handleOnClick(e, item.value)}>
              <CustomInput readOnly
                           id={`_${item.value}`}
                           type="checkbox"
                           disabled={!item.count}
                           checked={item.isFiltered}>
                {item.value}
                <Badge color="light" className="ml-2">{item.count}</Badge>
              </CustomInput>
            </DropdownItem>
          )
        }
        <DropdownItem divider/>
        <DropdownItem onClick={(e) => handleOnClick(e, '')}>Clear All</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default CheckboxDropdown;
