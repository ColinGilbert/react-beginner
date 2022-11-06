import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Component } from "react";
import { ADD_COMMENT } from "../redux/ActionTypes";
import { connect } from "react-redux";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => !val || val.length >= len;

class CommentForm extends Component {
  submitForm(values) {
    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );

    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  }
  render() {
    const { isOpen } = this.props;
    const { toggle } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
        <ModalBody className="ml-0">
          <LocalForm onSubmit={(vals) => this.submitForm.bind(this)(vals)}>
            <Row>
              <Col>
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  model=".rating"
                  type="select"
                  name="rating"
                  className="form-select"
                  defaultValue="1"
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
                  name="author"
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

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, rating, author, comment) =>
      dispatch({
        type: ADD_COMMENT,
        payload: {
          dishId: dishId,
          rating: rating,
          author: author,
          comment: comment,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
