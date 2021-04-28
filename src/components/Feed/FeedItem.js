import { Button, Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTools } from '@fortawesome/free-solid-svg-icons';

const FeedItem = ({ company }) => {
  const logoUrl = company['logo'];
  const logoSize = 96;

  return (
    <Media className="py-4 px-2 align-items-center border-bottom">
      <Media left
             className="d-flex justify-content-center align-items-center border border-dark"
             style={{ minWidth: logoSize, minHeight: logoSize }}>
        <Media object src={`${logoUrl}?size=${logoSize}`} alt=""/>
      </Media>
      <Media body className="px-4">
        <Media heading className="font-weight-bold">
          {company['name']}
        </Media>
        <div><FontAwesomeIcon fixedWidth icon={faHome}/> {company['address']}</div>
        <div className="pt-1"><FontAwesomeIcon fixedWidth icon={faTools}/> {company['specialties'].join(', ')}</div>
      </Media>
      <Media right href={company['website']} target="_blank">
        <Button color="primary" className="px-5">Visit Website</Button>
      </Media>
    </Media>
  );
};

export default FeedItem;
