import { Button } from 'reactstrap';

const BorderlessButton = ({ value, onClick, className }) => (
  <Button color="light"
          className={className + ' w-100 border-0'}
          onClick={onClick}>
    {value}
  </Button>
);

export default BorderlessButton;
