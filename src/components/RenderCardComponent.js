import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

const RenderCard = (props) => {
  return (
    <Card>
      <CardImg src={props.item.image} alt={props.item.name} />
      <CardBody>
        <CardTitle>{props.item.name}</CardTitle>
        {props.item.designation ? (
          <CardSubtitle>{props.item.designation}</CardSubtitle>
        ) : null}
        <CardText>{props.item.description}</CardText>
      </CardBody>
    </Card>
  );
};

export default RenderCard;
