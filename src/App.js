import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Container,
  Row,
  Col,
  Button,
  Nav,
  Card,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div>
      <Row>
        <Col>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Convert this to that</NavbarBrand>
            <Nav className="mr-auto" navbar />
            <Button>
              <FontAwesomeIcon icon={["fas", "adjust"]} />
            </Button>
          </Navbar>
        </Col>
      </Row>

      <Container fluid="sm" style={{ marginTop: 40 }}>
        <Card body style={{ padding: 50 }}>
          <Row>
            <Col md={{ size: 3, offset: 5 }}>
              <Dropdown size="md" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Language</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>C++</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Python</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Java</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Javascript</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default App;
