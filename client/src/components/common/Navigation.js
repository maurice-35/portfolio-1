import React, { useState } from "react";
import { Navbar, Nav, Button, Col, Toast } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Navigation = () => {
  const [iconA, setIconA] = useState(false);

  const toggleIconA = () => setIconA(!iconA);

  return (
    <>
      <div
        className="navbar navbar-expand-sm navbar- fixed-top"
        aria-controls="responsive-navbar-nav"
        width="100%"
      >
        <ul className="navbar-nav">
          <Navbar className="teal" expand="lg" id="nav">
            <Navbar.Brand id="icon" href="#">
              <Toast id="position1" show={iconA} onClose={toggleIconA}>
                <Toast.Header>♻︎</Toast.Header>
                <Toast.Body>
                  Hello!
                  <br /> Welcome
                  <br />
                  To My Site.
                </Toast.Body>
              </Toast>
              <Button id="icon" onClick={toggleIconA}>
                ♻︎
              </Button>
            </Navbar.Brand>
            <div className="navbar-wrapper">
              <Marquee>
              <h4>The love for cats!</h4>
              <span /> <span />
              <p>In The Kindom Of Love, Every Life Counts</p>
              </Marquee>
            </div>
            <div className="catPic">
              <img
                src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_33,w_50/v1625747303/project_3_work/cat-1_dljiga.jpg"
                alt="img"
              />
            </div>
            <Navbar.Brand id="icon" href="#">
              ♻︎
            </Navbar.Brand>
            <div className="navbar-wrapper">
              <h4>Kind minds never hide!</h4>
              <br />
              <p>The Journey Of A Thousand Miles.</p>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="options"
                style={{ maxHeight: "60px" }}
                navbarScroll
              >
                <Col xs={4} md={2} id="nav2">
                  <Nav.Link href="#aboutMe" id="option">
                    AboutMe
                  </Nav.Link>
                  <Nav.Link href="#projects" id="option">
                    Projects
                  </Nav.Link>
                  <Nav.Link href="#experience" id="option">
                    Experience
                  </Nav.Link>
                  <span />
                  <Nav.Link href="#interests" id="option">
                    Interests
                  </Nav.Link>
                  <Nav.Link href="#contact" id="option">
                    Contact
                  </Nav.Link>
                </Col>
              </Nav>
              <br />
            </Navbar.Collapse>
          </Navbar>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
