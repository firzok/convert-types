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
  DropdownItem,
  Jumbotron
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { programmingLanguages, dataTypes } from "./constants";
function App() {
  const [dropdownOpenLanguage, setDropdownOpenLanguage] = useState(false);
  const [dropdownOpenType1, setDropdownOpenType1] = useState(false);
  const [dropdownOpenType2, setDropdownOpenType2] = useState(false);

  const toggleLanguage = () => setDropdownOpenLanguage(prevState => !prevState);

  const toggleType1 = () => setDropdownOpenType1(prevState => !prevState);

  const toggleType2 = () => setDropdownOpenType2(prevState => !prevState);
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
            <Col style={{ textAlign: "center" }}>
              <Dropdown size="md" isOpen={dropdownOpenLanguage} toggle={toggleLanguage}>
                <DropdownToggle caret>Language</DropdownToggle>
                <DropdownMenu>
                  {programmingLanguages.map((programmingLanguage, index) => {
                    if (index === programmingLanguages.length - 1) {
                      return (
                        <span key={index}>
                          <DropdownItem>{programmingLanguage}</DropdownItem>
                        </span>
                      );
                    } else {
                      return (
                        <span key={index}>
                          <DropdownItem>{programmingLanguage}</DropdownItem>
                          <DropdownItem divider />
                        </span>
                      );
                    }
                  })}
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>

          <Row style={{ marginTop: 20 }}>
            <Col xs="6" style={{ textAlign: "center" }}>
              <Dropdown size="md" isOpen={dropdownOpenType1} toggle={toggleType1}>
                <DropdownToggle caret>From</DropdownToggle>
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
            <Col xs="6" style={{ textAlign: "center" }}>
              <Dropdown size="md" isOpen={dropdownOpenType2} toggle={toggleType2}>
                <DropdownToggle caret>To</DropdownToggle>
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

      <Container fluid="sm" style={{ marginTop: 40 }}>
        <Jumbotron body style={{ padding: 50, textAlign: "center" }}>
          <h1 className="display-4">Hello, world!</h1>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
