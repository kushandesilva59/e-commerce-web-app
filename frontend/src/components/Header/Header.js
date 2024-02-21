import React from "react";
import { NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <header className="header flex items-center gap-3 mx-5 justify-end my-2">
      <NavDropdown title="Admin" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>

        <NavDropdown.Divider />
        <NavDropdown.Item>Log Out</NavDropdown.Item>
      </NavDropdown>

      <div
        className="rounded-full h-9 w-9"
        style={{ background: "#001EB9" }}
      >
        
      </div>
    </header>
  );
};

export default Header;
