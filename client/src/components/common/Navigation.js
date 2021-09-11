import React, { useState } from 'react'
import { Navbar, Nav, Button, Form, Toast, Card } from 'react-bootstrap'


const Navigation = () => {

  const [iconA, setIconA] = useState(false)


  const toggleIconA = () => setIconA(!iconA)



  return (
    <>
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
      {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
      {/* <Navbar.Collapse id="navbarScroll"> */}
      {/* <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top="197"> */}
      <div className="navbar navbar-expand-sm navbar- fixed-top" aria-controls="responsive-navbar-nav" width="100%">
        <ul className="navbar-nav">
          <Navbar className="teal" expand="lg" id="nav">
            {/* <ul className="nav navbar-nav"> */}
            {/* <div className="navbar navbar-expand-sm navbar- fixed-top" aria-controls="responsive-navbar-nav">
          <ul className="navbar-nav"> */}
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
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#aboutMe">About Me</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#experience">
                  Experience
                </Nav.Link>
              </Nav><br />
              <Form className="d-flex">
                <Nav.Link href="#interests">Interests</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Form>
              {/* </ul>
            </div>
         </ul>
        </Navbar>
      </nav>  */}
            </Navbar.Collapse>

            {/* </ul> */}
          </Navbar>
        </ul>
      </div>
      {/* </nav> */}
    </>
    //   <Row className="ICONS3">
    //     {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     {/* <Navbar.Collapse id="navbarScroll"> */}
    //     {/* <nav className="navbar navbar-inverse" data-spy="affix" data-offset-top="197"> */}
    //     <Navbar className="teal" expand="sm" id="nav">
    //       {/* <ul className="nav navbar-nav"> */}
    //       <div className="navbar navbar-expand-sm navbar- fixed-top" aria-controls="responsive-navbar-nav">
    //         <ul className="navbar-nav">
    //           <Navbar.Brand id="icon" href="#">
    //             <Toast id="position1" show={iconA} onClose={toggleIconA}>
    //               <Toast.Header>
    //                 ♻︎
    //               </Toast.Header>
    //               <Toast.Body>Hello!<br /> Welcome<br />To My Site.</Toast.Body>
    //             </Toast>
    //             <Button id="icon" onClick={toggleIconA}>
    //               ♻︎
    //             </Button>
    //           </Navbar.Brand>
    //           <div className="navbar-wrapper">
    //             <h4>The  love  for  cats!</h4><br />
    //             <p>In The Kindom Of Love, Every Life Counts</p>
    //           </div>
    //           <Card className="pic">
    //             <img src="https://res.cloudinary.com/doe5zwesw/image/upload/v1626729161/cat-1_lg8pro.jpg" />
    //           </Card>
    //           <Navbar.Brand id="icon" href="#">♻︎</Navbar.Brand>
    //           <div className="navbar-wrapper">
    //             <h4>Kind  minds  never  hide!</h4><br />
    //             <p>The Journey Of A Thousand Miles.</p>
    //           </div>
    //           <Navbar.Toggle aria-controls="navbarScroll" />
    //           <Navbar.Collapse id="navbarScroll">
    //             <Nav
    //               className="mr-auto my-2 my-bg-0"
    //               style={{ maxHeight: '70px' }}
    //               navbarScroll
    //             >
    //               <Nav.Link href="#aboutMe">About Me</Nav.Link>
    //               <Nav.Link href="#projects">Projects</Nav.Link>
    //               <Nav.Link href="#experience">
    //                 Experience
    //               </Nav.Link>
    //             </Nav><br />
    //             <Form className="d-flex">
    //               <Nav.Link href="#interests">Interests</Nav.Link>
    //               <Nav.Link href="#contact">Contact</Nav.Link>
    //             </Form>
    //             {/* </ul>
    //             </div>
    //          </ul>
    //         </Navbar>
    //       </nav>  */}
    //           </Navbar.Collapse>
    //         </ul>

    // </div>
    // {/* </ul> */}
    // </Navbar>
    // {/* </nav> */}
    // </Row>


  )
}

export default Navigation