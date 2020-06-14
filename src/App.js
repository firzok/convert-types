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
import { CodeBlock, atomOneLight, atomOneDark } from "react-code-blocks";
import { programmingLanguages, dataTypes, conversions } from "./constants";
function App() {
  const [dropdownOpenLanguage, setDropdownOpenLanguage] = useState(false);
  const [dropdownOpenType1, setDropdownOpenType1] = useState(false);
  const [dropdownOpenType2, setDropdownOpenType2] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Language");
  const [selectedDataType1, setSelectedDataType1] = useState("From");
  const [selectedDataType2, setSelectedDataType2] = useState("To");
  const [lightTheme, setlightTheme] = useState(true);

  const toggleLanguage = () => setDropdownOpenLanguage(prevState => !prevState);
  const toggleType1 = () => setDropdownOpenType1(prevState => !prevState);
  const toggleType2 = () => setDropdownOpenType2(prevState => !prevState);
  const toggleTheme = () => setlightTheme(prevState => !prevState);

  const changeLanguage = language => {
    if (selectedLanguage !== "Language") {
      setSelectedDataType1("From");
      setSelectedDataType2("To");
    }
    setSelectedLanguage(language);
  };

  return (
    <div style={{ backgroundColor: lightTheme ? "white" : "#343a40", minHeight: "100vh" }}>
      <Row>
        <Col>
          <Navbar color={lightTheme ? "light" : "dark"} light expand="md">
            <NavbarBrand href="/" style={{ color: lightTheme ? "black" : "white" }}>
              Convert this to that
            </NavbarBrand>
            <Nav className="mr-auto" navbar />
            <Button onClick={toggleTheme} style={{ color: lightTheme ? "black" : "white" }}>
              <FontAwesomeIcon icon={["fas", "adjust"]} />
            </Button>
          </Navbar>
        </Col>
      </Row>

      <Container fluid="sm" style={{ marginTop: 40 }}>
        <Card body style={{ padding: 50 }}>
          <Row>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Dropdown size="md" isOpen={dropdownOpenLanguage} toggle={toggleLanguage}>
                <DropdownToggle
                  style={{
                    minWidth: "150px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                  caret
                >
                  {selectedLanguage}
                </DropdownToggle>
                <DropdownMenu>
                  {programmingLanguages.map((programmingLanguage, index) => {
                    if (index === programmingLanguages.length - 1) {
                      return (
                        <span key={index}>
                          <DropdownItem
                            value={programmingLanguage}
                            onClick={e => changeLanguage(e.currentTarget.value)}
                          >
                            {programmingLanguage}
                          </DropdownItem>
                        </span>
                      );
                    } else {
                      return (
                        <span key={index}>
                          <DropdownItem
                            value={programmingLanguage}
                            onClick={e => changeLanguage(e.currentTarget.value)}
                          >
                            {programmingLanguage}
                          </DropdownItem>
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
              <Dropdown
                disabled={selectedLanguage === "Language"}
                size="md"
                isOpen={dropdownOpenType1}
                toggle={toggleType1}
              >
                <DropdownToggle caret>{selectedDataType1}</DropdownToggle>
                {selectedLanguage === "Language" ? (
                  ""
                ) : (
                  <DropdownMenu>
                    {dataTypes[selectedLanguage].map((dataType, index) => {
                      if (index === dataTypes[selectedLanguage].length - 1) {
                        return (
                          <span key={index}>
                            <DropdownItem
                              value={dataType}
                              onClick={e => setSelectedDataType1(e.currentTarget.value)}
                            >
                              {dataType}
                            </DropdownItem>
                          </span>
                        );
                      } else {
                        return (
                          <span key={index}>
                            <DropdownItem
                              value={dataType}
                              onClick={e => setSelectedDataType1(e.currentTarget.value)}
                            >
                              {dataType}
                            </DropdownItem>
                            <DropdownItem divider />
                          </span>
                        );
                      }
                    })}
                  </DropdownMenu>
                )}
              </Dropdown>
            </Col>
            <Col xs="6" style={{ textAlign: "center" }}>
              <Dropdown
                disabled={selectedLanguage === "Language"}
                size="md"
                isOpen={dropdownOpenType2}
                toggle={toggleType2}
              >
                <DropdownToggle caret>{selectedDataType2}</DropdownToggle>
                {selectedLanguage === "Language" ? (
                  ""
                ) : (
                  <DropdownMenu>
                    {dataTypes[selectedLanguage].map((dataType, index) => {
                      if (index === dataTypes[selectedLanguage].length - 1) {
                        return (
                          <span key={index}>
                            <DropdownItem
                              value={dataType}
                              onClick={e => setSelectedDataType2(e.currentTarget.value)}
                            >
                              {dataType}
                            </DropdownItem>
                          </span>
                        );
                      } else {
                        return (
                          <span key={index}>
                            <DropdownItem
                              value={dataType}
                              onClick={e => setSelectedDataType2(e.currentTarget.value)}
                            >
                              {dataType}
                            </DropdownItem>
                            <DropdownItem divider />
                          </span>
                        );
                      }
                    })}
                  </DropdownMenu>
                )}
              </Dropdown>
            </Col>
          </Row>
        </Card>
      </Container>
      {console.log({
        lang: selectedLanguage,
        from: selectedDataType1,
        to: selectedDataType2
      })}
      <Container fluid="sm" style={{ marginTop: 40 }}>
        <Jumbotron style={{ minHeight: "20vh" }}>
          {selectedLanguage !== "Language" &&
          selectedDataType1 !== "From" &&
          selectedDataType2 !== "To" ? (
            <CodeBlock
              style={{ margin: "30px 10px 30px 10px" }}
              text={conversions[selectedLanguage][selectedDataType1][selectedDataType2]}
              language={"c"}
              theme={lightTheme ? atomOneLight : atomOneDark}
              showLineNumbers={false}
            />
          ) : (
            ""
          )}
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
