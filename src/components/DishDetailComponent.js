import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";

import { Link } from "react-router-dom";
import Comments from "./CommentsComponent";
import { useState } from "react";
import CommentForm from "./CommentForm";
import Loading from "./LoadingComponent";
import { baseUrl } from "../shared/base-url";

const DishDetail = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const renderDish = (d) => {
    if (d === null) {
      return <></>;
    } else {
      return (
        <Card>
          <CardImg width="100%" src={baseUrl + d.image} alt={d.name} />
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

  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
    return (
      <>
        <CommentForm
          isOpen={modal}
          toggle={toggle}
          dishId={props.dish.id}
          postComment={props.postComment}
        />
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="row text-start">
          <div className="col-md-5 col-xs-12 col-sm-12 m-1">
            {renderDish(props.dish)}
          </div>
          <div className="col-md-5 col-xs-12 col-sm-12 m-1">
            <Comments comments={props.comments} />
            <Button outline className="text-left" onClick={toggle}>
              <span className="fa fa-pencil fa-large"></span> Submit Comment
            </Button>
          </div>
        </div>
      </>
    );
  }
};

export default DishDetail;
