import { useState, React, useRef } from 'react'
import { Form, Card, CardGroup, Button, Container, Row, Col, Image, Tooltip, Overlay } from 'react-bootstrap'



const Home = () => {

  const [show, setShow] = useState(false)
  const target = useRef(null)
  // const [dataToggle, setDataToggle] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // try {
    // } catch (err) {
    //   console.log(err)
    // }
  }

  // const handleChange = (event) => {
  //   const newForm = { ...formData, [event.target.name]: event.target.value }
  //   setFormData()
  //   console.log(newForm)
  // }

  return (
    <>
      <section data-spy="scroll" data-target=".navbar" data-offset="75">
        <div className="container-fluid" id="home">
          <h1>Home</h1>
          <Container>
            <Row className="ICONS">
              <h4>Hello! Welcome To My Site. Take a look at my journey of becoming a Software Engineer.</h4>
              <CardGroup>
                <Card className="d-block w-100">
                  <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
                </Card><span />
                <span />
                <Card className="d-block w-100">
                  <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627457771/Project%204/nature_emfd4k.jpg" />
                </Card>
              </CardGroup>
            </Row>
          </Container>
        </div><br />

        <div className="container-fluid" id="aboutMe">
          <h1>About Me</h1>
          <Container>
            <Row className="ICONS">
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
            </Row>
          </Container>
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
                <Button>
                  <a href="https://movie-app-project4.herokuapp.com/">Project 4</a>
                  {/* <Card.Link href="https/movie-app-project4.herokuapp.com/" target="_blank" rel="noreferrer noopener"><i className="fab fa-heroku project4"></i> </Card.Link> */}
                  {/* <object type="text/html" data="https/movie-app-project4.herokuapp.com/" width='300px' height="200px"></object> */}
                </Button>
              </Col>
              <Col xs={8} md={6}>
                <p className="describe">Full-Stack MongoDB, Express, React, Node app with CRUD functionality from our own RESTful API. As a group, we created an e-commerce app to sell meals and treats for dogs and cats. We all worked full-stack and styled using Bootstrap and Sass. I later had the responsibility to work on the register and login pages.</p>
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631033371/P3_xxby5y.png" thumbnail />
                <Button>
                  <a href="https://tails-whiskers.herokuapp.com/">Project 3</a>
                </Button>
              </Col>
            </Row><br />
            <Row>
              <Col xs={8} md={6}>
                <p className="describe">I built a React app which used an external API from ‘thecatapi.com’ to display cats of various categories and origins. Styled using Bulma, it is a good spot for cat lovers.</p>
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631034365/cat2_fwshks.png" thumbnail />
                <Button>
                  <a href="https://maurice-cats-app-project2.netlify.app/">Project 2</a>
                </Button>
              </Col>
              <Col xs={8} md={6}>
                <p className="describe">I built a number-guessing grid-game using JavaScript, HTML and CSS. It is a JavaScript random selection of numbers to match that of the user.</p>
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631034515/P_jel8al.png" thumbnail />
                <Button>
                  <a href="https://maurice-35.github.io/number-guessing-game/">Project 1</a>
                </Button>
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
        <div  id="interests" className="container-fluid">
          <h1>Interests</h1>
          <Container>
            <Row className="ICONS">
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
              </div><br />

              <Card className="d-block w-100">
                <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1627456360/Project%204/cycle1_clsr8b.jpg" />
              </Card>
            </Row>
          </Container>
          {/* <Card className="paint">
            <h4>I enjoy painting during my leisure time.</h4>
            <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/w_250/v1631098527/paint_zxpgdl.jpg" />
          </Card> */}
          <Container>
            <Row className="tools" id="paint">
              <Col xs={10} md={8}>
                <p className="describe">I enjoy painting during my spare time.</p>
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/w_250/v1631098527/paint_zxpgdl.jpg" thumbnail />
              </Col>
            </Row>
          </Container>
        </div><br />
        {/* <div className="paint"> */}

        {/* <Card className="d-block w-100">
            <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631098527/paint_zxpgdl.jpg" />
          </Card> */}

        {/* </div><span /> */}

        <div id="contact" className="container-fluid">
          <h1>Contact</h1>
          <Card className="d-block w-100" id="INFO">
            <Container fluid="lg" className="mr-auto my-4 my-md-5">
              <Row className="justify-content-md-center">
                <Col>
                  <Form onSubmit={handleSubmit} className='function'>

                    <Form.Group className="info">
                      <Form.Label>Name</Form.Label>
                      <Form.Control name="email" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="info">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control name="phone-number" type="phone-number" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group className="info">
                      <Form.Label>Company</Form.Label>
                      <Form.Control name="company" type="company" placeholder="company" />
                    </Form.Group>
                    <Form.Group className="info">
                      {/* <Form.Label>Message</Form.Label> */}
                      <h3>Message</h3>
                    </Form.Group><br />
                    {/* <textarea className="Form.Control" name="message" type="message" placeholder="message" /> */}
                    <div className="form-field">
                      <label htmlFor="message">Your message</label>
                      <textarea id="message" name="message" placeholder="What do you want to say?" required></textarea>
                    </div>

                    <button type="submit" className="btn" id="butt"> <a href="mailto:kollewem.35@gmail.com">Send Message</a></button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Card>
          <div className="icon">
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maurice-kollewe/"></a>
          </div>
        </div>

        {/* <div className="team">
          <p className="font-monospace">Maurice <i className="fas fa-hand-point-right"></i><Card.Link href="https://github.com/maurice-35"><i className="fab fa-github-square icon"></i></Card.Link></p>
        </div> */}

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
            <Container>
              <Row className="foot">
                <Col>
                  <p>Github</p>
                  <a href="https://github.com/maurice-35">Made With Much Hope 🤯 <span />  🖥 By MKT</a>
                </Col>
              </Row>
            </Container>
          </footer>
        </main>
      </section>
    </>
  )
}

export default Home