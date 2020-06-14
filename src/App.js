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
import { CodeBlock, atomOneLight, atomOneDark } from "react-code-blocks";
import { programmingLanguages, dataTypes, conversions } from "./constants";
import useDarkMode from "./DarkMode";

function App() {
  const [dropdownOpenLanguage, setDropdownOpenLanguage] = useState(false);
  const [dropdownOpenType1, setDropdownOpenType1] = useState(false);
  const [dropdownOpenType2, setDropdownOpenType2] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Language");
  const [selectedDataType1, setSelectedDataType1] = useState("From");
  const [selectedDataType2, setSelectedDataType2] = useState("To");

  const toggleLanguage = () => setDropdownOpenLanguage(prevState => !prevState);
  const toggleType1 = () => setDropdownOpenType1(prevState => !prevState);
  const toggleType2 = () => setDropdownOpenType2(prevState => !prevState);
  const [theme, toggleTheme] = useDarkMode();

  const changeLanguage = language => {
    if (selectedLanguage !== "Language") {
      setSelectedDataType1("From");
      setSelectedDataType2("To");
    }
    setSelectedLanguage(language);
  };

  return (
    <div style={{ backgroundColor: theme === "light" ? "white" : "#282D33", minHeight: "100vh" }}>
      <Row>
        <Col>
          <Navbar color={theme === "light" ? "light" : "dark"} light expand="md">
            <NavbarBrand href="/" style={{ color: theme === "light" ? "black" : "white" }}>
              Convert types
            </NavbarBrand>
            <Nav className="mr-auto" navbar />
            <Button
              onClick={toggleTheme}
              style={{ color: theme === "light" ? "#282E32" : "white" }}
            >
              <FontAwesomeIcon icon={["fas", "adjust"]} />
            </Button>
          </Navbar>
        </Col>
      </Row>

      <Container fluid="sm">
        <Card
          body
          fluid="sm"
          style={{
            marginTop: 40,
            padding: 50,
            backgroundColor: theme === "light" ? "#F8F9FA" : "#343B3F"
          }}
        >
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
            <Col xs="6" style={{ display: "flex", justifyContent: "center" }}>
              <Dropdown
                disabled={selectedLanguage === "Language"}
                size="md"
                isOpen={dropdownOpenType1}
                toggle={toggleType1}
              >
                <DropdownToggle
                  caret
                  style={{
                    minWidth: "130px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  {selectedDataType1}
                </DropdownToggle>
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
            <Col xs="6" style={{ display: "flex", justifyContent: "center" }}>
              <Dropdown
                disabled={selectedLanguage === "Language"}
                size="md"
                isOpen={dropdownOpenType2}
                toggle={toggleType2}
              >
                <DropdownToggle
                  caret
                  style={{
                    minWidth: "130px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  {selectedDataType2}
                </DropdownToggle>
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

      <Container fluid="sm" style={{ marginTop: 40 }}>
        <Card
          body
          fluid="sm"
          style={{
            minHeight: "20vh",
            marginTop: 40,
            padding: 50,
            backgroundColor: theme === "light" ? "#F8F9FA" : "#343B3F"
          }}
        >
          {selectedLanguage !== "Language" &&
          selectedDataType1 !== "From" &&
          selectedDataType2 !== "To" ? (
            <CodeBlock
              style={{ margin: "30px 10px 30px 10px" }}
              text={conversions[selectedLanguage][selectedDataType1][selectedDataType2]}
              language={"c"}
              theme={theme === "light" ? atomOneLight : atomOneDark}
              showLineNumbers={false}
            />
          ) : (
            ""
          )}
        </Card>
      </Container>
    </div>
  );
}

export default App;
