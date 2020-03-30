import React from "react";

import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';    //Custom Component
import FirstComponent from "./components/FirstComponent"; //created by me.

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
