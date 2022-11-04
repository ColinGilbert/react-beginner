import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      telNum: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        firstName: false,
        lastName: false,
        telNum: false,
        email: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Current state is " + JSON.stringify(this.state));
    alert(JSON.stringify(this.state));
  }

  handleBlur = (field) => {
    this.setState({ touched: { ...this.state.touched, [field]: true } });
  };

  validate(firstName, lastName, telNum, email) {
    const errors = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
    };
    if (this.state.touched.firstName && firstName.length < 3)
      errors.firstName = "First name should be >= 3 characters";
    else if (this.state.touched.firstName && firstName.length > 10)
      errors.firstName = "First name should be <= 10 characters";

    if (this.state.touched.lastName && lastName.length < 3)
      errors.lastName = "Last name should be >= 3 characters";
    else if (this.state.touched.lastName && lastName.length > 10)
      errors.lastName = "Last name should be <= 10 characters";

    const reg = /^\d+$/;
    if (this.state.touched.telNum && !reg.test(telNum))
      errors.telNum = "Telephone number should only contain numbers";

    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    )
      errors.email = "Email address needs an @ symbol";

    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.firstName,
      this.state.lastName,
      this.state.telNum,
      this.state.email
    );
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
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>
                  First name
                </Label>
                <Col md={10}>
                  <Input
                    type="textInput"
                    id="firstname"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    valid={
                      errors.firstName === "" && this.state.touched.firstName
                    }
                    invalid={errors.firstName !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur.bind(this, "firstName")}
                  />
                  <FormFeedback>{errors.firstName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastname" md={2}>
                  Last name
                </Label>
                <Col md={10}>
                  <Input
                    type="textInput"
                    id="lastname"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    valid={
                      errors.lastName === "" && this.state.touched.lastName
                    }
                    invalid={errors.lastName !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur.bind(this, "lastName")}
                  />
                  <FormFeedback>{errors.lastName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telnum" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="telnum"
                    name="telNum"
                    placeholder="Telephone Number"
                    value={this.state.telNum}
                    valid={errors.telNum === "" && this.state.touched.telNum}
                    invalid={errors.telNum !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur.bind(this, "telNum")}
                  />
                  <FormFeedback>{errors.telNum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="telnum" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={this.state.email}
                    valid={errors.email === "" && this.state.touched.email}
                    invalid={errors.email !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur.bind(this, "email")}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      ></Input>
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    rows="12"
                    id="message"
                    name="message"
                    placeholder="Your feedback"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 1, offset: 2 }}>
                  <Button type="submit">Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;