import React, { Component } from "react";

import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent"; //Custom Component
import FirstComponent from "./components/FirstComponent"; //created by me.

import { DISHES } from "./shared/dishes.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            <FirstComponent displaytext="Jason Noronha" />
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}


export default App;