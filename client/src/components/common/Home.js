import { useState, React, useRef } from 'react'
// import { NavDropdown, Toast, Container } from 'react-bootstrap'
// import Container from 'react-bootstrap/Container'
import { Nav, Navbar, Toast, Form, Card, CardGroup, Button, Container, Row, Col, Image, Tooltip, Overlay } from 'react-bootstrap'
// import Toast from 'react-bootstrap/Toast'
// import Alert from 'react-bootstrap/Alert'
// Popover, OverlayTrigger,




const Home = () => {

  const [iconA, setIconA] = useState(false)
  const [show, setShow] = useState(false)
  const target = useRef(null)
  // const [dataToggle, setDataToggle] = useState(false)

  const toggleIconA = () => setIconA(!iconA)
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  const handleSubmit = async event => {
    event.preventDefault()
  }
  return (
    <>
      <section data-spy="scroll" data-target=".navbar" data-offset="75">
        {/* <section data-spy="scroll" data-target=".navbar" data-offset="50"> */}
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
        <br />

        {/* </div> */}
        {/* <div container="message">
        <h4>My journey of becoming a Software Engineer.</h4>
      </div>
      <br /> */}
        {/* <section data-spy="scroll" data-target="nav" data-offset="75">
        <nav className="nav navbar-expand-sm navbar- fixed-top"> */}
        {/* <ul className="navbar-nav"><br /> */}
        <div className="container-fluid" id="home">
          <h1>Home</h1>
          <h4>Hello! Welcome To My Site. Take a look at my journey of becoming a Software Engineer.</h4>
          <CardGroup>
            <Card className="d-block w-100">
              <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
            </Card>
            <span />
            <Card className="d-block w-100">
              <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
            </Card>
          </CardGroup>
        </div><br />
        {/* {/* </ul> */}

        <div className="container-fluid" id="aboutMe">
          <h1>About Me</h1>
          <CardGroup>

            <Card className="d-block w-100">
              <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627456360/Project%204/cycle1_clsr8b.jpg" />
            </Card>
            {/* <Card className="d-block w-100">
              <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
            </Card> */}
            {/* <Card className="d-block w-100">
              <img className="image-border animate__animated animate__zoomIn others-img" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627456970/Project%204/walk_e1u8s5.jpg" />
              <h3>Others</h3>
              <p>
                Good... <span id="other-name">others</span> <br />
                Bad   <br />
                <br />
              </p>
            </Card> */}
          </CardGroup >
        </div>

        <div id="experience" className="container-fluid">
          <h1>Experience</h1>
          <Container>
            <Row className="ICONS">
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630697355/html_rtvtmb.png" rounded />
                <h3>HTML</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630679316/py3_z3bzw3.png" rounded />
                <h3>Python</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630742605/bulma_xuw6t5.png" rounded />
                <h3>Bulma</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_grayscale,w_100/v1630714201/bstrap1_f7x2c1.png" rounded />
                <h3>Bootstrap</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630697648/node3_fid6ns.png" rounded />
                <h3>Node.js</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630744116/axios_ltorsb.png" rounded />
                <h3>Axios</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630705675/css.png" rounded />
                <h3>CSS</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630706380/sass1_tg8vcs.png" rounded />
                <h3>Sass</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630705709/mongo_zyp23q.png" rounded />
                <h3>MongoDB</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_grayscale,w_80/v1630706859/exp_nt3jho.png" thumbnail />
                <h3>Express</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_grayscale,w_80/v1630708045/psql_nolbul.png" thumbnail />
                <h3>PosgreSQL</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_grayscale,w_80/v1630706895/react_b0cycf.png" thumbnail />
                <h3>React</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale,w_80/v1631004003/jg3_q75wjm.png" thumbnail />
                <h3>Django</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/c_thumb,w_120,g_face/v1630743172/jwt_svaw6v.png" thumbnail />
                <h3>Json Web Token</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_grayscale,w_80/v1630708004/herok_xjwyiq.png" thumbnail />
                <h3>Heroku</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_grayscale,w_80/v1630711706/gith_lszan7.png" thumbnail />
                <h3>GitHub</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale,w_80/v1630747880/insom_w2m7xy.png" thumbnail />
                <h3>Imsomnia</h3>
              </Col><Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale,w_80/v1630747998/Tplus_cyeuex.jpg" thumbnail />
                <h3>TablePlus</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale,w_80/v1630748656/trello1_gcntk6.png" thumbnail />
                <h3>Trello</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale,w_80/v1630747638/figma_znwh7b.png" thumbnail />
                <h3>Figma</h3>
              </Col>
              <Col xs={5} md={3}>
                <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale,w_80/v1630748386/miro_vyaqjw.png" thumbnail />
                <h3>Miro</h3>
              </Col>
            </Row>
          </Container>
        </div>

        <div id="projects" className="container-fluid">
          <h1>Projects</h1>
          <Container>
            <Row>
              <Col xs={8} md={6}>
                <p className="describe">I created a full-stack Django, React, Python app with CRUD functionality from my own RESTful API.  I created a movie-database where you can stream a collection of trailing movies. This was styled using Bootstrap and Bulma.</p>
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/v1630996394/P4_ezajhp.png" thumbnail />
                <Button>click
                  {/* <Card.Link href="https/movie-app-project4.herokuapp.com/" target="_blank" rel="noreferrer noopener"><i className="fab fa-heroku project4"></i> </Card.Link> */}
                  <a target="_blank" rel="noreferrer noopener" href="https/movie-app-project4.herokuapp.com/" />
                </Button>
              </Col>
              <Col xs={8} md={6}>
                <p className="describe">Full-Stack MongoDB, Express, React, Node app with CRUD functionality from our own RESTful API. As a group, we created an e-commerce app to sell meals and treats for dogs and cats. We all worked full-stack and styled using Bootstrap and Sass. I later had the responsibility to work on the register and login pages.</p>
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631033371/P3_xxby5y.png" thumbnail />
              </Col>
            </Row><br />
            <Row>
              <Col xs={8} md={6}>
                <p className="describe">I built a React app which used an external API from ‘thecatapi.com’ to display cats of various categories and origins. Styled using Bulma, it is a good spot for cat lovers.</p>
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631034365/cat2_fwshks.png" thumbnail />
              </Col>
              <Col xs={8} md={6}>
                <p className="describe">I built a number-guessing grid-game using JavaScript, HTML and CSS. It is a JavaScript random selection of numbers to match that of the user.</p>
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631034515/P_jel8al.png" thumbnail />
              </Col>
            </Row>
          </Container>
          {/* <Card className="git">
            <Image publicId="github_lslue1.png" />
          </Card> */}
          {/* <Card className="d-block w-50">
            <Image publicId="py_dnes7g.jpg" />
          </Card> */}
        </div>
        {/* <div id="project3" className="container-fluid">
          <h1>Project 3</h1>
          <Card className="d-block w-100">
            <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
          </Card>
        </div> */}
        {/* <div id="project2" className="container-fluid">
          <h1>Project 2</h1>
          <Card className="d-block w-100">
            <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
          </Card>
        </div>
        <div id="project1" className="container-fluid">
          <h1>Project 1</h1>
          <Card className="d-block w-50">
            <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
          </Card>
        </div> */}
        <div id="interests" className="container-fluid">
          <h1>Interests</h1>
          <div className="char">
            <Button id="button" ref={target} onClick={() => setShow(!show)}>
              Charities
            </Button>

            <Overlay target={target.current} show={show} placement="bottom">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  1. Evelynoldfield. This charity is aimed at helping migrants in the UK.<br></br>
                  2. Haven House Children Hospice. This charity is aimed at helping migrants in the UK.
                  3. Richard House Children Hospice.
                </Tooltip>
              )}
            </Overlay>
          </div><span />

          {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal> */}
          {/* <Row xs={2} md={1} className="g-4">
            {Array.from({ length: 2 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row> */}
          {/* <Card style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card> */}

          {/* <div className="container">
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
          </div> */}
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
          {/* {<Link to="charities" className="d-block w-50" */}
          {/* src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627289108/Project%204/f19_pwzr5o.jpg"> </Link>} */}
          {/* </Popover>
            }
          >
            <Button variant="secondary" onClick={toggleType}>{type}</Button>
          </OverlayTrigger>
        ))} */}

          {/* <Card className="d-block w-100">
            <p className="charity">Charity1<i className="fas fa-charity-one"><Card.Link className="font-monospace" href="http://evelynoldfield.co.uk/"></Card.Link></i></p> */}
          {/* <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" /> */}
          {/* <div className="container"> */}
          {/* <h3>Popover Example</h3> */}
          {/* <a href="#" data-toggle="popover" title="Popover Header" data-content="Some content inside the popover"></a> */}

          {/* <div className="buttons">
        <Link to="/charities1">
        </Link>

        <Link to="/charities2"></Link>
     
        <Link to="/charities3">
      
        </Link>
        <Link to="/charities4">
        </Link>
        </div> */}

          {/* </div> */}
          {/* </Card> */}
        </div><br />

        <div id="contact" className="container-fluid">
          <h1>Contact</h1>
          <Card className="d-block w-50" id="INFO">
            <Container fluid="lg" className="mr-auto my-4 my-md-5">
              <Row className="justify-content-md-center">
                <Col >
                  <Form onSubmit={handleSubmit} className='function'>

                    <Form.Group className="info" controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control name="email" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="info" controlId="formBasicPassword">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control name="phone-number" type="phone-number" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group className="info" controlId="formBasicPassword">
                      <Form.Label>Company</Form.Label>
                      <Form.Control name="company" type="company" placeholder="company" />
                    </Form.Group>
                    <Form.Group className="info" controlId="formBasicPassword">
                      <Form.Label>Message</Form.Label>
                      <Form.Control name="message" type="message" placeholder="message" />
                    </Form.Group>
                    <button type="submit" className="btn" id="butt">Send Message</button>
                  </Form>
                </Col>
              </Row>
            </Container>
           
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
    </>
  )
}

export default Home