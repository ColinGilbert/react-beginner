import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import Loading from "./LoadingComponent";
const RenderCard = (props) => {
  if (props.isLoading) {
    return <Loading />;
  } else if (props.errMess) {
    return <h4>{props.errMess}</h4>;
  } else {
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
  }
};

export default RenderCard;
