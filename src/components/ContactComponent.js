import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
class Contact extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   telNum: "",
    //   agree: false,
    //   contactType: "Tel.",
    //   message: "",
    //   touched: {
    //     firstName: false,
    //     lastName: false,
    //     telNum: false,
    //     email: false,
    //   },
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleBlur = this.handleBlur.bind(this);
    // this.validate = this.validate.bind(this);
  }

  //   handleInputChange(event) {
  //     const target = event.target;
  //     const value = target.type === "checkbox" ? target.checked : target.value;
  //     const name = target.name;
  //     this.setState({ [name]: value });
  //   }

  handleSubmit(values) {
    console.log("Current state is " + JSON.stringify(values));
    alert(JSON.stringify(values));
  }

  //   handleBlur = (field) => {
  //     this.setState({ touched: { ...this.state.touched, [field]: true } });
  //   };

  //   validate(firstName, lastName, telNum, email) {
  //     const errors = {
  //       firstName: "",
  //       lastName: "",
  //       telNum: "",
  //       email: "",
  //     };
  //     if (this.state.touched.firstName && firstName.length < 3)
  //       errors.firstName = "First name should be >= 3 characters";
  //     else if (this.state.touched.firstName && firstName.length > 10)
  //       errors.firstName = "First name should be <= 10 characters";

  //     if (this.state.touched.lastName && lastName.length < 3)
  //       errors.lastName = "Last name should be >= 3 characters";
  //     else if (this.state.touched.lastName && lastName.length > 10)
  //       errors.lastName = "Last name should be <= 10 characters";

  //     const reg = /^\d+$/;
  //     if (this.state.touched.telNum && !reg.test(telNum))
  //       errors.telNum = "Telephone number should only contain numbers";

  //     if (
  //       this.state.touched.email &&
  //       email.split("").filter((x) => x === "@").length !== 1
  //     )
  //       errors.email = "Email address needs an @ symbol";

  //     return errors;
  //   }

  render() {
    return (
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="formGroup">
                <Label htmlFor="firstname" md={2}>
                  First name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstName"
                    type="textInput"
                    id="firstname"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastname" md={2}>
                  Last name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastName"
                    id="lastname"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="telnum" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telNum"
                    type="tel"
                    id="telnum"
                    name="telNum"
                    placeholder="Telephone Number"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="telnum" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        type="checkbox"
                        name="agree"
                        className="form-check-input"
                      />
                      <strong>May we contact you?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    model=".contactType"
                    type="select"
                    name="contactType"
                    className="form-control"
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="message" md={2}>
                  Feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    type="textarea"
                    rows="12"
                    id="message"
                    name="message"
                    placeholder="Your feedback"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 1, offset: 2 }}>
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
