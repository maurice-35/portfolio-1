import React from 'react'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Navbar, Nav, Form, Card, CardGroup, Popover, OverlayTrigger, Button } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'



const Home = () => {



  return (
    <>
      <Navbar className="info" expand="bg">
        <Navbar.Brand className="icon" href="#">♻︎</Navbar.Brand>
        <h4>The love for cats!</h4>
        <Card className="pic">
          <img src="https://res.cloudinary.com/doe5zwesw/image/upload/v1626729161/cat-1_lg8pro.jpg" />
        </Card>
        <Navbar.Brand href="#">♻︎</Navbar.Brand>
        <h4>Kind minds never hides!</h4>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-bg-0"
            style={{ maxHeight: '120px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutMe">About Me</Nav.Link>
            <NavDropdown title="Projects" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#project1">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="#project2">Project 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#project3">Project 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#project4">Project 4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#experience">
              Experience
            </Nav.Link>
          </Nav><br />
          <Form className="d-flex">
            <Nav.Link href="#interests">Interests</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <div id="home" className="container-fluid">
        <h1>Home</h1>
        <Card className="d-block w-100">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
        </Card>
        <p>Hello! Welcome To My Site. Take a look at my journal of becoming a Software Engineer.</p>
      </div>
      <div id="aboutMe" className="container-fluid">
        <h1>About Me</h1>
        <CardGroup>

          <Card className="d-block w-100">
            <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627456360/Project%204/cycle1_clsr8b.jpg" />
          </Card>
          <br></br>
          <Card className="d-block w-100">
            <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
          </Card>
          <br></br>
          <Card className="d-block w-100">
            <img className="image-border animate__animated animate__zoomIn others-img" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627456970/Project%204/walk_e1u8s5.jpg" />
            <h3>Others</h3>
            <p>
              Good... <span id="other-name">others</span> <br />
              Bad   <br />
              <br />
            </p>
          </Card>
        </CardGroup >

      </div>
      <div id="experience" className="container-fluid">
        <h1>Experience</h1>
        <Card className="d-block w-100">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
        </Card>
      </div>
      <div id="project1" className="container-fluid">
        <h1>Project 1</h1>
        <Card className="d-block w-100">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
        </Card>
      </div>
      <div id="project2" className="container-fluid">
        <h1>Project 2</h1>
        <Card className="d-block w-100">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
        </Card>
      </div>
      <div id="project3" className="container-fluid">
        <h1>Project 3</h1>
        <Card className="d-block w-100">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
        </Card>
      </div>
      <div id="project4" className="container-fluid">
        <h1>Project 4</h1>
        <Card className="d-block w-100">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
        </Card>
      </div>
      <div id="interests" className="container-fluid">
        <h1>Interests</h1>

        {['charities1', 'charities2', 'charities3', 'charities4'].map((type) => (
          <OverlayTrigger
            trigger="click"
            key={type}
            type={type}
            overlay={
              <Popover id={`popover-positioned-${type}`}>
                <Popover.Header as="h3">{`Popover ${type}`}</Popover.Header>
                <Popover.Body>
                  <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                      Aww yeah, you successfully read this important alert message. This example
                      text is going to run a bit longer so that you can see how spacing within an
                      alert works with this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                      Whenever you need to, be sure to use margin utilities to keep things nice
                      and tidy.
                    </p>
                  </Alert>
                </Popover.Body>
                <Link to="charities1"></Link>
                {<Link to="charities" className="d-block w-50"
                  src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627289108/Project%204/f19_pwzr5o.jpg"> </Link>}
              </Popover>
            }
          >
            <Button variant="secondary">{type}</Button>
          </OverlayTrigger>
        ))}

        <Card className="d-block w-100">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
          <div className="container">
            {/* <h3>Popover Example</h3> */}
            <a href="#" data-toggle="popover" title="Popover Header" data-content="Some content inside the popover"></a>

            {/* <div className="buttons">
        <Link to="/charities1">
        </Link>

        <Link to="/charities2"></Link>
     
        <Link to="/charities3">
      
        </Link>
        <Link to="/charities4">
        </Link>
        </div> */}

          </div>
        </Card>
      </div>

      <div id="contact" className="container-fluid">

        <h1>Contact</h1>
        <Card className="d-block w-100">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />

        </Card>
      </div>

    </>
  )
}

export default Home