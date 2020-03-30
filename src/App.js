import React from "react";
import logo from "./logo.svg";

import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import FirstComponent from "./components/FirstComponent";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            Ristorante Con Fusion
          </NavbarBrand>
          <FirstComponent displaytext="Jason Noronha"/>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
