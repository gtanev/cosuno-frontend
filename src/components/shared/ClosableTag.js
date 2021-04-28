import { Button } from 'reactstrap';

const ClosableTag = ({ value, onClose }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    onClose(value);
  };

  return (
    <Button color="light"
            className="mr-2 font-weight-bold"
            onClick={handleOnClick}>
      {value + ' ⨯'}
    </Button>
  );
};

export default ClosableTag;
