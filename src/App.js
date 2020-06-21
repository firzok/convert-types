import ReactGA from "react-ga";
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

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

import "./App.css";

function facebookShare() {
  ReactGA.event({
    category: "Share",
    action: "Facebook"
  });
}
function twitterShare() {
  ReactGA.event({
    category: "Share",
    action: "Twitter"
  });
}
function linkedInShare() {
  ReactGA.event({
    category: "Share",
    action: "LinkedIn"
  });
}

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
  ReactGA.initialize("UA-169345408-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "#282D33",
        minHeight: "100vh"
      }}
    >
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
        <h4 style={{ paddingTop: 40, color: theme === "light" ? "black" : "white" }}>
          Convert all data types for all programming languages.
        </h4>

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
        {selectedLanguage !== "Language" &&
        selectedDataType1 !== "From" &&
        selectedDataType2 !== "To" ? (
          <h4
            style={{
              padding: "10px",
              color: theme === "light" ? "black" : "white",
              textAlign: "center"
            }}
          >
            Convert <strong>{selectedDataType1}</strong> to <strong>{selectedDataType2}</strong> in{" "}
            <strong>{selectedLanguage}</strong>
          </h4>
        ) : (
          <h4 style={{ padding: "10px", color: theme === "light" ? "black" : "white" }}> </h4>
        )}
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
            <span className="code">
              <CodeBlock
                style={{ margin: "30px 10px 30px 10px" }}
                text={conversions[selectedLanguage][selectedDataType1][selectedDataType2]}
                language={"c"}
                theme={theme === "light" ? atomOneLight : atomOneDark}
                showLineNumbers={false}
              />
            </span>
          ) : (
            ""
          )}
        </Card>
      </Container>
      <div className="share-menu">
        <Row>
          <Col>
            <FacebookShareButton
              className="share-menu__item grow"
              url={"https://www.converttypes.com/"}
              quote="Found a cool new website to convert almost all data types from a variety of programming languages. Do check it out and share with other."
              hashtag="#converttypes.com"
              id="facebook"
              beforeOnClick={facebookShare}
            >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </Col>
          <Col>
            <TwitterShareButton
              className="share-menu__item grow"
              url={"https://www.converttypes.com/"}
              title="Found a cool new website to convert almost all data types from a variety of programming languages. RT and share it with others."
              hashtags={["converttypes", "datatypeconversion"]}
              id="twitter"
              beforeOnClick={twitterShare}
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </Col>
          <Col>
            <LinkedinShareButton
              className="share-menu__item grow"
              url={"https://www.converttypes.com/"}
              id="linkedin"
              beforeOnClick={linkedInShare}
            >
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
          </Col>
        </Row>
      </div>

      <footer
        style={{
          backgroundColor: theme === "light" ? "#F8F9FA" : "#343B3F",
          color: theme === "light" ? "#343B3F" : "#F8F9FA"
        }}
        class="footer"
      >
        <h5>Top Conversions</h5>
        <Row>
          <Col>
            <ul class="top-conversions">
              <li>
                Convert <b>int</b> to <b>long</b> in <b>C#</b>
              </li>
              <li>
                Convert <b>long</b> to <b>int</b> in <b>C</b>
              </li>
              <li>
                Convert <b>long</b> to <b>int</b> in <b>C</b>
              </li>
              <li>
                Convert <b>long</b> to <b>int</b> in <b>C</b>
              </li>
              <li>
                Convert <b>int</b> to <b>double</b> in <b>C#</b>
              </li>
              <li>
                Convert <b>int</b> to <b>short</b> in <b>C#</b>
              </li>
              <li>
                Convert <b>double</b> to <b>float</b> in <b>C#</b>
              </li>
            </ul>
          </Col>
          <Col>
            <ul class="top-conversions">
              <li>
                Convert <b>long</b> to <b>int</b> in <b>C</b>
              </li>
              <li>
                Convert <b>int</b> to <b>decimal</b> in <b>C#</b>
              </li>
              <li>
                Convert <b>int</b> to <b>long</b> in <b>C</b>
              </li>
              <li>
                Convert <b>int</b> to <b>long</b> in <b>C</b>
              </li>
              <li>
                Convert <b>int</b> to <b>long</b> in <b>C</b>
              </li>
              <li>
                Convert <b>Long</b> to <b>String</b> in <b>VB</b>
              </li>
              <li>
                Convert <b>unsigned char</b> to <b>int</b> in <b>C</b>
              </li>
            </ul>
          </Col>
          <Col>
            <ul class="top-conversions">
              <li>
                Convert <b>bool</b> to <b>str</b> in <b>Python</b>
              </li>
              <li>
                Convert <b>char*</b> to <b>int</b> in <b>C</b>
              </li>
              <li>
                Convert <b>unsigned char</b> to <b>int</b> in <b>C</b>
              </li>
              <li>
                Convert <b>unsigned char</b> to <b>int</b> in <b>C</b>
              </li>
              <li>
                Convert <b>string</b> to <b>long</b> in <b>C#</b>
              </li>
              <li>
                Convert <b>Byte()</b> to <b>String</b> in <b>VB.net</b>
              </li>
            </ul>
          </Col>
        </Row>

        <a href="/" style={{ color: theme === "light" ? "black" : "white" }}>
          © 2020 ConvertTypes
        </a>
      </footer>
    </div>
  );
}

export default App;
