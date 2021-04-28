import { useGlobalState } from '../../state/provider';
import { clearError } from '../../state/actions';
import { Container, UncontrolledAlert } from 'reactstrap';

const ErrorAlert = () => {
  const [state, dispatch] = useGlobalState();

  const resetError = () => clearError(state, dispatch);

  return state.error ? (
    <Container className="fixed-bottom">
      <UncontrolledAlert color="warning"
                         onClick={resetError}
                         style={{ borderRadius: 0 }}>
        {state.error.message || 'Unexpected error'}
      </UncontrolledAlert>
    </Container>
  ) : null;
};

export default ErrorAlert;
