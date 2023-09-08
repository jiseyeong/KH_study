import { Button } from "reactstrap";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

const PhotoCard = (props) => {
  return (
    <Card className="p-1">
      <img alt="Sample" src="https://picsum.photos/300/200" className="p-1" />
      <CardBody className="p-1">
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default PhotoCard;
