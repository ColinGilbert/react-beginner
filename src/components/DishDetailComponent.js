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
  Modal,
  ModalBody,
  ModalText,
  ModalHeader,
  Row,
  Input,
  Col,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors, actions } from "react-redux-form";

import { Link } from "react-router-dom";
import Comments from "./CommentsComponent";
import { useState, Component } from "react";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;

class CommentForm extends Component {
  submitForm(values) {
    alert(JSON.stringify(values));
  }
  render() {
    const { isOpen } = this.props;
    const { toggle } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
        <ModalBody className="ml-0">
          <LocalForm onSubmit={this.submitForm.bind(this)}>
            <Row>
              <Col>
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  model=".rating"
                  type="select"
                  name="rating"
                  className="form-select"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  model=".author"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea
                  model=".comment"
                  type="textarea"
                  name="comment"
                  className="form-control"
                  rows="7"
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={{ size: 1 }}>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    );
  }
}

const DishDetail = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

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
    <>
      <CommentForm isOpen={modal} toggle={toggle} />
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
};

export default DishDetail;
