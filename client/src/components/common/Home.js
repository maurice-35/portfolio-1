import { useState, React } from 'react'
import { Link } from 'react-router-dom'
// import { NavDropdown, Toast, Container } from 'react-bootstrap'
// import Container from 'react-bootstrap/Container'
import { Nav, Navbar, NavDropdown, Toast, Form, Card, CardGroup, Button, Container, Row, Col, Image } from 'react-bootstrap'
// import Toast from 'react-bootstrap/Toast'
// import Alert from 'react-bootstrap/Alert'
// Popover, OverlayTrigger,




const Home = () => {

  const [iconA, setIconA] = useState(false)
  // const [dataToggle, setDataToggle] = useState(false)

  const toggleIconA = () => setIconA(!iconA)
  // const toggleDataToggle = () => setDataToggle(!dataToggle)


  // $(document).ready(function(){
  //   $('[data-toggle="popover"]').popover()
  // })



  return (
    <section data-spy="scroll" data-target=".navbar" data-offset="75">
      <Navbar className="teal" expand="lg" id="nav">
        <nav className="navbar navbar-expand-sm navbar- fixed-top">
          <ul className="navbar-nav"></ul>
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
            <p>The Journal Of A Thousand Miles.</p>
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
          {/* </Container> */}
        </nav>
      </Navbar>
      <br />

      {/* </div> */}
      {/* <div container="message">
        <h4>My journey of becoming a Software Engineer.</h4>
      </div>
      <br /> */}
      <div id="home" className="container-fluid">
        <h1>Home</h1>
        <CardGroup>
          <Card className="d-block w-100">
            <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
          </Card>
          <span />
          <Card className="d-block w-100">
            <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
          </Card>
          <h4>Hello! Welcome To My Site. Take a look at my journey of becoming a Software Engineer.</h4>
        </CardGroup>
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
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="active"><a data-toggle="tab" href="#menu 1">Menu 1</a></li>
            <li><a data-toggle="tab" href="#menu 2">Menu 2</a></li>
            <li><a data-toggle="tab" href="#menu 3">Menu 3</a></li>
            <li><a data-toggle="tab" href="#menu4">Menu 4</a></li>
          </ul>

          <div className="tab-content">
            <div id="home" className="tab-pane fade in active">
              <h3>Charity21</h3>
              <p>Evelyn Oldfield Unit.</p>
            </div>
            <div id="menu1" className="tab-pane fade">
              <h3>Charity 2</h3>
              <p>Cody Dock.</p>
            </div>
            <div id="menu2" className="tab-pane fade">
              <h3>Charity 3</h3>
              <p>Haven House Children Hospice.</p>
            </div>
            <div id="menu3" className="tab-pane fade">
              <h3>Charity 4</h3>
              <p>Richard House Children Hospice.</p>
            </div>
          </div>
        </div>
        {/* <div className="container"> */}
        {/* <h4>Charity 1<span />Charity 2<span />Charity 3</h4> */}
        {/* <h4>charities1<span /> charities2<span /> charities3<span /> charities4</h4>
          <a href="#" data-toggle="popover" title="Popover Header" data-content="Some content inside the popover">👆🏾👆🏾</a>
        </div> */}
        {/* <script>
          $(document).ready(function(){
            $('[data-toggle="popover"]').popover()
          });
        </script> */}

        {/* {['charities1', 'charities2', 'charities3', 'charities4'].map((type) => (
          <OverlayTrigger
            trigger="click"
            key={type}
            type={type}
            overlay={
              <Popover id={`popover-positioned-${type}`}>
                <Popover.Header as="h3">{`Popover ${type}`}</Popover.Header>
                <Popover.Body> */}
        {/* <Alert variant="success">
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
                  </Alert> */}
        {/* <Toast id="position2" show={type} onClose={toggleType}>
                    <Toast.Header>
                      <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                      <strong className="me-auto">Bootstrap</strong>
                      <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                  </Toast> */}
        {/* </Popover.Body>
                {/* <Link to="charities1"></Link> */}
        {<Link to="charities" className="d-block w-50"
          src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627289108/Project%204/f19_pwzr5o.jpg"> </Link>}
        {/* </Popover>
            }
          >
            <Button variant="secondary" onClick={toggleType}>{type}</Button>
          </OverlayTrigger>
        ))} */}

        <Card className="d-block w-100">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
          <div className="container">
            {/* <h3>Popover Example</h3> */}
            {/* <a href="#" data-toggle="popover" title="Popover Header" data-content="Some content inside the popover"></a> */} */

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
      <main className="Footer">
        <div>
          <Container>
            <Row>
              <Col className="image">
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/v1626729161/cat-1_lg8pro.jpg" roundedCircle width="150" />
              </Col>
            </Row>
          </Container>
        </div>
        <footer>
          <p>
            <p>Github</p>
            <a href="http://jpg licenses">Made With Much Hope 🤯 <span />  🖥 By MKT</a>
          </p>
        </footer>
      </main>
    </section>
  )
}

export default Home