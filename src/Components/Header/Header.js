import React from "react";
import "./Header.css";

import { Container, Image } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Image src="/images/warzone-img.png" className="header-img" fluid />
    </Container>
  );
};

export default Header;
