import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Comments from "./CommentsComponent";

const DishDetail = (props) => {
  const renderDish = (d) => {
    if (d === null) {
      return <></>;
    } else {
      return (
        <Card>
          <CardImg width="100%" src={d.image} alt={d.name} />
          <CardBody>
            <CardTitle>
              <h5 align="left">
                <strong>{d.name}</strong>
              </h5>
            </CardTitle>
            <CardText align="left">{d.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  };

  return (
    <div className="row">
      <div className="col-md-5 col-xs-12 col-sm-12 m-1">
        {renderDish(props.dish)}
      </div>
      <div className="col-md-5 col-xs-12 col-sm-12 m-1">
        <Comments comments={props.dish.comments} />
      </div>
    </div>
  );
};

export default DishDetail;