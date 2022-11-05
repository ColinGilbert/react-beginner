import { React } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
const RenderMenuItem = ({ dish, onClick }) => {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card value={dish} onClick={onClick}>
        <Link to={`/menu/${dish.id}`}>
          <CardImg src={dish.image} alt={dish.name} width="100%" />
          <CardImgOverlay id={dish.id}>
            <CardTitle id={dish.id}>
              <h5 align="left">
                <strong>{dish.name}</strong>
              </h5>
            </CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    </div>
  );
};
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return <RenderMenuItem key={dish.id} dish={dish} />;
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
