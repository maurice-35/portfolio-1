import { useState, React } from 'react'
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

            {/* <Card className="d-block w-100">
              <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627456360/Project%204/cycle1_clsr8b.jpg" />
            </Card> */}
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

        </div>
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
              <Image className="boot" src="https://res.cloudinary.com/doe5zwesw/image/upload/b_rgb:a8ddb1,c_scale,e_grayscale,w_100/v1630741838/dj2_fbfe30.png" thumbnail />
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

        <div id="project1" className="container-fluid">
          <h1>Project 1</h1>
          {/* <Card className="git">
            <Image publicId="github_lslue1.png" />
          </Card> */}
          <Card className="d-block w-50">
            <Image publicId="py_dnes7g.jpg" />
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
          <Card className="d-block w-50">
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
          {/* {<Link to="charities" className="d-block w-50" */}
          {/* src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627289108/Project%204/f19_pwzr5o.jpg"> </Link>} */}
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
    </>
  )
}

export default Home