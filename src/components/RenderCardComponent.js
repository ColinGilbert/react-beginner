import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import Loading from "./LoadingComponent";
import { baseUrl } from "../shared/base-url";

const RenderCard = (props) => {
  console.log(props);
  if (props.isLoading) {
    return <Loading />;
  } else if (props.errMsg) {
    return <h4>{props.errMsg}</h4>;
  } else {
    return (
      <Card>
        <CardImg src={baseUrl + props.item.image} alt={props.item.name} />
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
