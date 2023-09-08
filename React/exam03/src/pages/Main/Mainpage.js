import { Col, Row } from "reactstrap";
import PhotoCard from "./PhotoCard/PhotoCard";

const Main = () => {
  return (
    <Row>
      <Col xs="12" sm="9">
        <Row>
          <Col xs="12" sm="6" md="4" className="py-1">
            <PhotoCard></PhotoCard>
          </Col>
          <Col xs="12" sm="6" md="4" className="py-1">
            <PhotoCard></PhotoCard>
          </Col>
          <Col xs="12" sm="6" md="4" className="py-1">
            <PhotoCard></PhotoCard>
          </Col>
          <Col xs="12" sm="6" md="4" className="py-1">
            <PhotoCard></PhotoCard>
          </Col>
        </Row>
      </Col>
      <Col xs="12" sm="3">
        Test2
      </Col>
    </Row>
  );
};

export default Main;
