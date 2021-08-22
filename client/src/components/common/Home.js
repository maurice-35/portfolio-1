import React from 'react'
// import Link from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Navbar, Nav, Form } from 'react-bootstrap'


 const Home = () => {



    return (

     <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">♻︎</Navbar.Brand>            
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
         >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Me</Nav.Link>
            <NavDropdown title="Projects" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Project 1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Project 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Project 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Project 4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Experience
            </Nav.Link>                   
        </Nav>
        <Form className="d-flex">
        <Nav.Link href="#action3">Interest</Nav.Link>
        <Nav.Link href="#action4">Contact</Nav.Link>
         </Form>
        </Navbar.Collapse>
       </Navbar>
    )
}

export default Home