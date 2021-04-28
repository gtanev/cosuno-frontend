import { Col, Row } from 'reactstrap';

const AppHeader = () => (
  <Row className="bg-primary text-light text-center py-5">
    <Col>
      <div className="h1">
        Cosuno Construction Company Catalogue
      </div>
      <div className="h5 font-weight-light">
        A comprehensive listing of the best construction companies in Germany
      </div>
    </Col>
  </Row>
);

export default AppHeader;
