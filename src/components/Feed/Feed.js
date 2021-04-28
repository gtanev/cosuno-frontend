import { Container } from 'reactstrap';
import { useGlobalState } from '../../state/provider';
import { useEffect } from 'react';
import { fetchCompanyData } from '../../state/actions';
import { filteredCompanies } from '../../state/selectors';
import FeedItem from './FeedItem';

const Feed = () => {
  const [state, dispatch] = useGlobalState();

  useEffect(() => fetchCompanyData(state, dispatch), []);

  if (!state.data.companies?.length && state.error == null) {
    return null;
  }

  return (
    <Container className="border">
      {filteredCompanies(state).map(company => <FeedItem key={company.name} company={company}/>)}
    </Container>
  );
};

export default Feed;
