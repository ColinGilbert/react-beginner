import { React } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card value={dish} onClick={props.onDishSelect}>
          <CardImg src={dish.image} alt={dish.name} width="100%" />
          <CardImgOverlay id={dish.id}>
            <CardTitle id={dish.id}>
              <h5 align="left">
                <strong>{dish.name}</strong>
              </h5>
            </CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
