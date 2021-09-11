import { useState, React, useRef } from 'react'
import { Form, Card, CardGroup, Button, Container, Row, Col, Image, Tooltip, Overlay } from 'react-bootstrap'



const Home = () => {

  const [show, setShow] = useState(false)
  const target = useRef(null)


  const handleSubmit = async (event) => {
    event.preventDefault()


  }


  return (
    <>
      <section data-spy="scroll" data-target=".navbar" data-offset="75">
        <div id="myName">
          <Container>
            <Col xs={14} md={10} id="myName">
              <div className="myself">
                <h1>Maurice Kollewe Tcheungwe</h1>
                <h3>Junior Software Engineer</h3>
              </div>
            </Col>

          </Container>
        </div>
        <div className="container-fluid" id="aboutMe">
          <h1 id="about">About Me</h1><br />
          <Container>
            <Row className="ICONS">
              <img id="profile" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631217534/profile_ijyamh.jpg" thumbnail width="150" />
              <Col xs={8} md={6}>
                <p className="describe"> I am Maurice. A Software Engineer based in Greater London.</p>
                <p className="describe">During my volunteering role behind the till at a charity shop, I was curious about the technology used to process receipts, and I became passionate about the impact of computing and technology on the modern world. After online searches, I developed more of an interest and started taking self learning online and writing some codes. I later enrolled in a full time Software Engineering course in order to acquire new skills and develop the passion and curiosity to solve problems. I thrive when building on my new skills and excel when collaborating and working as a team.</p>
                <p className="describe">With my recent engineering and customer service skills, and a strong desire to learn, I am looking to progress in the tech industry as a Junior Software Engineer.</p>
              </Col>
              <img id="profile" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631217534/profile_ijyamh.jpg" thumbnail width="150" />
            </Row>
          </Container>
        </div>

        <div id="experience" className="container-fluid">
          <h1 id="exp">Experience</h1><br /><span />
          <Container>
            <Row>
              <Col>
                <h3> <img src="https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png"></img><span />General Assembly</h3>
              </Col>
            </Row><br />
            <h3>Technologies</h3><br />
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
          <h1 id="proj">Projects</h1>
          <Container>
            <Row>
              <Col xs={8} md={6}>
                <p className="describe">I built a number-guessing grid-game using JavaScript, HTML and CSS. It is a JavaScript random selection of numbers to match that of the user.</p>
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631034515/P_jel8al.png" thumbnail />
                <Button>
                  <a id="pro" href="https://maurice-35.github.io/number-guessing-game/">Project 1</a>
                </Button>
              </Col>
              <Col xs={8} md={6}>
                <p className="describe">I built a React app which used an external API from ‘thecatapi.com’ to display cats of various categories and origins. Styled using Bulma, it is a good spot for cat lovers.</p>
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631034365/cat2_fwshks.png" thumbnail />
                <Button>
                  <a id="pro" href="https://maurice-cats-app-project2.netlify.app/">Project 2</a>
                </Button>
              </Col>
              <Col xs={8} md={6}>
                <p className="describe">Full-Stack MongoDB, Express, React, Node app with CRUD functionality from our own RESTful API. As a group, we created an e-commerce app to sell meals and treats for dogs and cats. We all worked full-stack and styled using Bootstrap and Sass. I later had the responsibility to work on the register and login pages.</p>
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631033371/P3_xxby5y.png" thumbnail />
                <Button>
                  <a id="pro" href="https://tails-whiskers.herokuapp.com/">Project 3</a>
                </Button>
              </Col>
              <Col xs={8} md={6}>
                <p className="describe">I created a full-stack Django, React, Python app with CRUD functionality from my own RESTful API.  I created a movie-database where you can stream a collection of trailing movies. This was styled using Bootstrap and Bulma.</p>
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/v1630996394/P4_ezajhp.png" thumbnail />
                <Button>
                  <a id="pro" href="https://movie-app-project4.herokuapp.com/">Project 4</a>
                </Button>
              </Col>
            </Row>
          </Container>

        </div>
        <div id="interests" className="container-fluid">
          <h1 id="inter">Interests</h1>
          <Container>
            <Row className="ICONS">
              <div className="char">
                <Button id="big-button" ref={target} onClick={() => setShow(!show)}>
                  Charities
                </Button>
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      1. Evelynoldfield. This charity is aimed at helping migrants in the UK.<br></br>
                      2. Haven House Children Hospice. This charity raises funds to help children with terminal illnesses and to give them some hope to life.<br />
                      3. Richard House Children Hospice. Same objectives as Haven House above.
                    </Tooltip>
                  )}
                </Overlay>
              </div>

              <CardGroup>
                <Card className="d-block w-50">
                  <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,w_700/v1631261773/EOU_pv1mnf.png" /><span />
                </Card><span />
                <Card className="d-block w-50">
                  <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_brightness_hsb,r_2,w_700/v1631262940/Haven_ei8exo.png" />
                </Card>
              </CardGroup>
            </Row>

            <Row className="tools" id="paint">
              <Col xs={12} md={10}>
                <p className="describe">I enjoy painting during my spare time.</p>
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,w_700/v1631098527/paint_zxpgdl.jpg" />
              </Col>
              <Col xs={10} md={8}>
                <p className="describe">I enjoy cycling around the town and my neigbourhood.</p>
                <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/w_700/v1627456360/Project%204/cycle1_clsr8b.jpg" />
              </Col>
            </Row>
          </Container>
        </div><br />

        <div id="contact" className="container-fluid">
          <h1 id="cont">Contact</h1>
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
                    </Form.Group><br />
                    <div className="form-field">
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
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

        <Row className="ICONS2">
          <Col xs={14} md={10}>

            <i className="fa fa-envelope icon"></i>
            <Button>
              <a id="pro" href="mailto:kollewem.35@gmail.com">Email</a>
            </Button><span /><span />
            <i className="fa fa-linkedin icon"></i>
            <Button><span />
              <a id="pro" href="https://www.linkedin.com/in/maurice-kollewe/">LinkIn</a>
            </Button><span />
            <i className="fa fa-github-square icon"></i>
            <Button>
              <a id="pro" href="https://github.com/maurice-35">GitHub</a>
            </Button>
          </Col>
        </Row>

        <main className="Footer">
          <div>
            <Container>
              <Row>
                <Col className="image">
                  <Image src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631217534/profile_ijyamh.jpg" roundedCircle width="150" />
                </Col>
              </Row>
            </Container>
          </div>
          <footer>
            <Container>
              <Row id="foot">
                <Col>
                  <h4>Made With Much Hope<span /><img src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_25,w_20/v1631216473/think_fzgsji.png"></img>
                    <img src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_green:0,h_25,w_30/v1631217039/lapton_vk9nqa.png"></img><span />By MKT</h4>
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