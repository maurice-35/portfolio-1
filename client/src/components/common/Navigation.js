import React, { useState } from 'react'
// import { Link, useHistory, useLocation } from 'react-router-dom'
import { Navbar, Nav, Button, Card, Form, Toast } from 'react-bootstrap'


const Navigation = () => {

  const [iconA, setIconA] = useState(false)
  // const [show, setShow] = useState(false)
  // const target = useRef(null)

  const toggleIconA = () => setIconA(!iconA)



  return (
    <>
      <div className="container-fluid" id="top">
        <h1>Scrollspy & Affix Example</h1>
        <h3>Fixed navbar on scroll</h3>
        <p>The navbar is attached to the top of the page after you have scrolled a specified amount of pixels, and the links in the navbar are automatically updated based on scroll position.</p>
      </div>
      {/* </section> */}
      <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top="197">
        <Navbar className="teal" expand="lg" id="nav">
          {/* <div className="container-fluid" id="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"> */}
          {/* <div className="collapse navbar-collapse" id="myNavbar"> */}
          <ul className="nav navbar-nav">

            {/* <nav className="navbar navbar-expand-sm navbar- fixed-top"> */}
            <div className="navbar navbar-expand-sm navbar- fixed-top">
              <ul className="navbar-nav">
                {/* <Container className="teal" expand="lg"> */}
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
                    className="mr-auto my-2 my-bg-0"
                    style={{ maxHeight: '120px' }}
                    navbarScroll
                  >

                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#aboutMe">About Me</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    {/* <NavDropdown title="Projects" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#project1">Project </NavDropdown.Item>
                        <NavDropdown.Item href="#project2">Project 3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#project3">Project 2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#project4">Project 1</NavDropdown.Item>
                      </NavDropdown> */}
                    <Nav.Link href="#experience">
                      Experience
                    </Nav.Link>
                  </Nav><br />
                  <Form className="d-flex">
                    <Nav.Link href="#interests">Interests</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Form>
                </Navbar.Collapse>
                {/* </Container> */}
                {/* </nav> */}
                {/* </Navbar> */}
              </ul>
              {/* </nav> */}
            </div>
          </ul>
        </Navbar>
      </nav>
    </>
  )
}

export default Navigation