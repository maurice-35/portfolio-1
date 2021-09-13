import React, { useState } from 'react'
import { Navbar, Nav, Button, Row, Col, Toast, Card } from 'react-bootstrap'


const Navigation = () => {

  const [iconA, setIconA] = useState(false)


  const toggleIconA = () => setIconA(!iconA)



  return (
    <>
      <div className="navbar navbar-expand-sm navbar- fixed-top" aria-controls="responsive-navbar-nav" width="100%">
        <ul className="navbar-nav">
          <Navbar className="teal" expand="lg" id="nav">
            <Navbar.Brand id="icon" href="#">
              <Toast id="position1" show={iconA} onClose={toggleIconA}>
                <Toast.Header>
                  ♻︎
                </Toast.Header>
                <Toast.Body>Hello!<br /> Welcome<br />To My Site.</Toast.Body>
              </Toast>
              <Button id="icon" onClick={toggleIconA}>
                ♻︎
              </Button>
            </Navbar.Brand>
            <div className="navbar-wrapper">
              <h4>The  love  for  cats!</h4><br />
              <p>In The Kindom Of Love, Every Life Counts</p>
            </div>
            <Card className="pic">
              <img src="https://res.cloudinary.com/doe5zwesw/image/upload/v1626729161/cat-1_lg8pro.jpg" />
            </Card>
            <Navbar.Brand id="icon" href="#">♻︎</Navbar.Brand>
            <div className="navbar-wrapper">
              <h4>Kind  minds  never  hide!</h4><br />
              <p>The Journey Of A Thousand Miles.</p>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="options"
                style={{ maxHeight: '110px' }}
                navbarScroll
              >
                <Row xs={3} md={2}>
                  <Nav.Link href="#aboutMe" id="options">About Me</Nav.Link>
                  <Nav.Link href="#projects" id="options">Projects</Nav.Link>
                  <Nav.Link href="#experience" id="options">Experience</Nav.Link><span />
                  <Col xs={4} md={2} id="nav2">
                    <Nav.Link href="#interests" id="options">Interests</Nav.Link>
                    <Nav.Link href="#contact" id="options">Contact</Nav.Link>
                  </Col>
                </Row>
              </Nav><br />
            </Navbar.Collapse>
          </Navbar>
        </ul>
      </div>
    </>
  )
}

export default Navigation