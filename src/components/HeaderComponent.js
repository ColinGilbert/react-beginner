import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/"> Ristorante con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="px-3 px-sm-4 py-3 py-sm-5 jumbotron" color="primary">
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1> Ristorante Con Fusion</h1>
                <p>
                  We take inspiration from the world's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
