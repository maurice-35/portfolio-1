import { useState, React, useRef } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Image,
  Tooltip,
  Overlay,
} from "react-bootstrap";
import Contact from "./Contact";

const Home = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <section
      id="section"
      data-spy="scroll"
      data-target=".navbar"
      data-offset="50"
    >
      <div className="myProfile">
        <Container id="profile">
          <div>
            <Container>
              <Col id="myIcons">
                <div id="fa-fa">
                  <Card.Link>
                    <a href="mailto:kollewem.35@gmail.com">
                      <i className="fa fa-at icon" />
                    </a>
                  </Card.Link>
                </div>
                <div id="fa-fa">
                  <Card.Link>
                    <a href="https://www.linkedin.com/in/maurice-kollewe/">
                      <i className="fa fa-linkedin-square icon" />
                    </a>
                  </Card.Link>
                </div>
                <div id="fa-fa">
                  <Card.Link>
                    <a href="https://github.com/maurice-35">
                      <i className="fa fa-github-square icon" />
                    </a>
                  </Card.Link>
                </div>
              </Col>
            </Container>
          </div>
          <div className="myProfile">
            <div className="myName">
              <Col>
                <div id="myself">
                  <h1>Maurice Kollewe Tcheungwe</h1>
                  <h3>Junior Software Engineer</h3>
                </div>
                <br />
              </Col>
            </div>
            <Container>
              <Col>
                <div>
                  <img
                    id="img"
                    src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631217534/profile_ijyamh.jpg"
                    alt="img"
                  />
                </div>
              </Col>
            </Container>
          </div>
        </Container>
      </div>

      <div className="container-fluid" id="aboutMe">
        <h1 id="about">About Me</h1>
        <br />
        <Container>
          <Row className="ICONS">
            <Col>
              <p className="describe1">
                I am Maurice, a Software Engineer based in Greater London.
              </p>
              <p className="describe1" id="describe">
                A degree educated, ambitious Junior Software Developer/Front End
                Software Developer, looking for an entry level role to utilise a
                broad skill gained through both voluntary work, customer service
                focused opportunities and technical studies. Skills have been
                developed through completing a full time Software Engineering
                course, acquiring new skills and developing a passion and love
                of problem solving. Experience has been enhanced further still
                by completing a JP Morgan Chase & Co professional work
                experience course.
              </p>
              <br />
              <p className="describe1" id="describe">
                I thrive when building on my new skills and excel when
                collaborating and working as a team. With my new engineering
                skills, and a strong desire to learn, I am looking forward to
                progressing into a new career in the tech industry as a Junior
                Software Engineer.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <br />

      <div id="experience" className="container-fluid" width="100">
        <h1 id="exp">Experience</h1>
        <br />
        <span />
        <Container>
          <Row>
            <Col>
              <h2 id="title">💼 Side Projects</h2>
            </Col>
            <br />
            <Row>
              <Col xs={8} md={6} id="side1">
                <h2 className="title">Side Project 5 🍪:</h2>
                <p className="describe2">
                  This is a simple cookies game. Here you buy as many cookies as
                  you wish. You save cookies bought (helpers) and improve in
                  rank. The full functionalities are yet to be implemented.
                </p>
                <Card.Link>
                  <a href="https://awesome-cookies.netlify.app/">
                    {" "}
                    <Image
                      id="proImage1"
                      src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_500,w_800/v1663054961/Cookies_x8ajry.png"
                      thumbnail
                    />
                  </a>
                </Card.Link>
                <Card.Link>
                  <a href="https://awesome-cookies.netlify.app/">
                    <i className="fa fa-play icon" id="open" />
                  </a>
                </Card.Link>
              </Col>
              <Col xs={8} md={6} id="side1">
                <h2 className="title">Side Project 4 🐈:</h2>
                <p className="describe2">
                  I buit this project from a third party API I had earlier used
                  in order to consolidate my understanding of the data
                  structure, how it is displayed, and how it can be
                  manipulated.It was pretty nice revisiting my previous work.
                </p>
                <Card.Link>
                  <a href="https://cat-app-plus.netlify.app">
                    {" "}
                    <Image
                      id="proImage1"
                      src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_500,w_800/v1658485983/Cat_ogowjg.png"
                      thumbnail
                    />
                  </a>
                </Card.Link>
                <Card.Link>
                  <a href="https://cat-app-plus.netlify.app">
                    <i className="fa fa-play icon" id="open" />
                  </a>
                </Card.Link>
              </Col>
              <Col xs={8} md={6} id="side1">
                <h2 className="title">
                  Side Project 3
                  <img
                    Style={"width: 1.5em"}
                    src="https://phil.cdc.gov//PHIL_Images/23312/23312_lores.jpg"
                    alt="img"
                  />
                  :
                </h2>
                <p className="describe2">
                  I built a simple covid-19-app using React to display COVID-19
                  cases of various countries in the world.
                </p>
                <Card.Link>
                  <a href="https://simple-covid-19-app.netlify.app">
                    {" "}
                    <Image
                      id="proImage1"
                      src="https://res.cloudinary.com/doe5zwesw/image/upload/v1649542179/Screenshot_2022-04-09_at_23.07.35_vjxop6.png"
                      thumbnail
                    />
                  </a>
                </Card.Link>
                <Card.Link>
                  <a href="https://simple-covid-19-app.netlify.app">
                    <i className="fa fa-play icon" id="open" />
                  </a>
                </Card.Link>
              </Col>
              <Col xs={8} md={6} id="side1">
                <h2 className="title">Side Project 2 👘:</h2>
                <p className="describe2">
                  This is an app I built to display some fashion clothes in a
                  commercially appealing way using a third party API. You can
                  also search clothes listed on the API.
                </p>
                <Card.Link>
                  <a href="https://fashion-clothe.netlify.app">
                    <Image
                      id="proImage1"
                      src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_791,w_1176/v1644471239/Screenshot_2022-02-10_at_05.29.56_v0zcb2.png"
                      thumbnail
                    />
                  </a>
                </Card.Link>
                <Card.Link>
                  <a href="https://fashion-clothe.netlify.app">
                    <i className="fa fa-play icon" id="open" />
                  </a>
                </Card.Link>
              </Col>
              <Col xs={8} md={6} id="side1">
                <h2 className="title">Side Project 1 🎰:</h2>
                <p className="describe2">
                  I built a tic-tac-toe-game using React where the player has to
                  align their letter on the vertical, horizontal or diagonal
                  axis in order to win.
                </p>
                <Card.Link>
                  <a href="https://tic-tac-toe-frenzy.netlify.app">
                    <Image
                      id="proImage1"
                      src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_791,w_1176/v1641250482/Screenshot_2022-01-03_at_22.51.01_e1amge.png"
                      thumbnail
                    />
                  </a>
                </Card.Link>
                <Card.Link>
                  <a href="https://tic-tac-toe-frenzy.netlify.app">
                    <i className="fa fa-play icon" id="open" />
                  </a>
                </Card.Link>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col>
              <h2 id="title">
                {" "}
                <img
                  src="https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png"
                  alt="img"
                />
                <span />
                General Assembly
              </h2>
            </Col>
          </Row>
          <br />
          <Row className="ICONS">
            <Col>
              <p className="describe1">
                Fundamentals of Web Development from front-end to back-end in an
                agile environment.
              </p>
              <p className="describe1">
                Daily stand-ups, lectures, labs (workshops), pair-coding,
                daily-homework and four projects.
              </p>
            </Col>
            <br />
          </Row>
          <br />
          <h2 id="title">Technologies</h2>
          <br />
          <Row className="ICONS">
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630697355/html_rtvtmb.png"
                rounded
              />
              <h3>HTML</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630679316/py3_z3bzw3.png"
                rounded
              />
              <h3>Python</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630742605/bulma_xuw6t5.png"
                rounded
              />
              <h3>Bulma</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_grayscale,w_100/v1630714201/bstrap1_f7x2c1.png"
                rounded
              />
              <h3>Bootstrap</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630697648/node3_fid6ns.png"
                rounded
              />
              <h3>Node.js</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630744116/axios_ltorsb.png"
                rounded
              />
              <h3>Axios</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630705675/css.png"
                rounded
              />
              <h3>CSS</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630706380/sass1_tg8vcs.png"
                rounded
              />
              <h3>Sass</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale/v1630705709/mongo_zyp23q.png"
                rounded
              />
              <h3>MongoDB</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_grayscale,w_80/v1630706859/exp_nt3jho.png"
                thumbnail
              />
              <h3>Express</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_grayscale,w_65/v1630708045/psql_nolbul.png"
                thumbnail
              />
              <h3>PosgreSQL</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_grayscale,w_80/v1630706895/react_b0cycf.png"
                thumbnail
              />
              <h3>React</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale,w_68/v1631004003/jg3_q75wjm.png"
                thumbnail
              />
              <h3>Django</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/c_thumb,w_120,g_face/v1630743172/jwt_svaw6v.png"
                thumbnail
              />
              <h3>JSON Web Token</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_grayscale,w_68/v1630708004/herok_xjwyiq.png"
                thumbnail
              />
              <h3>Heroku</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_grayscale,w_70/v1630711706/gith_lszan7.png"
                thumbnail
              />
              <h3>GitHub</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale,w_70/v1630747880/insom_w2m7xy.png"
                thumbnail
              />
              <h3>Insomnia</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale,w_70/v1630747998/Tplus_cyeuex.jpg"
                thumbnail
              />
              <h3>TablePlus</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale,w_70/v1630748656/trello1_gcntk6.png"
                thumbnail
              />
              <h3>Trello</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale,w_70/v1630747638/figma_znwh7b.png"
                thumbnail
              />
              <h3>Figma</h3>
            </Col>
            <Col>
              <Image
                className="boot"
                src="https://res.cloudinary.com/doe5zwesw/image/upload/e_grayscale,w_80/v1630748386/miro_vyaqjw.png"
                thumbnail
              />
              <h3>Miro</h3>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="projects" className="container-fluid">
        <h1 id="proj">Projects</h1>
        <br />
        <Container>
          <Row>
            <Col xs={8} md={6} id="proj1">
              <h2 className="title">Project1:</h2>
              <p className="describe2">
                I built a number-guessing grid-game using JavaScript, HTML and
                CSS. It is a JavaScript random selection of numbers to match
                that of the user.
              </p>
              <Card.Link>
                <a href="https://maurice-35.github.io/number-guessing-game/">
                  <Image
                    id="proImage1"
                    src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_800,w_1200/v1631034515/P_jel8al.png"
                    thumbnail
                  />
                  <i className="fa fa-play icon" id="open" />
                </a>
              </Card.Link>
            </Col>
            <Col xs={8} md={6} id="proj2">
              <h2 className="title">Project2:</h2>
              <p className="describe2">
                I built a React app which used an external API from
                ‘thecatapi.com’ to display cats of various categories and
                origins. Styled using Bulma, it is a good spot for cat lovers.
              </p>
              <Card.Link>
                <a href="https://maurice-cats-app-project2.netlify.app/">
                  <Image
                    id="proImage2"
                    src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_791,w_1176/v1631034365/cat2_fwshks.png"
                    thumbnail
                  />
                  <i className="fa fa-play icon" id="open" />
                </a>
              </Card.Link>
            </Col>
            <Col xs={8} md={6} id="proj3">
              <h2 className="title">Project3:</h2>
              <p className="describe2">
                Full-Stack MongoDB, Express, React, Node app with CRUD
                functionality from our own RESTful API. As a group, we created
                an e-commerce app to sell meals and treats for dogs and cats. We
                all worked full-stack and styled using Bootstrap and Sass. I
                later had the responsibility to work on the register and login
                pages.
              </p>
              <Card.Link>
                <a href="https://tails-whiskers.herokuapp.com/">
                  <Image
                    id="proImage3"
                    src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_791,w_1200/v1631033371/P3_xxby5y.png"
                    thumbnail
                  />
                  <i className="fa fa-play icon" id="open" />
                </a>
              </Card.Link>
            </Col>
            <Col xs={8} md={6} id="proj4">
              <h2 className="title">Project4:</h2>
              <p className="describe2">
                I created a full-stack Django, React, Python app with CRUD
                functionality from my own RESTful API. I created a
                movie-database where you can stream a collection of trailing
                movies. This was styled using Bootstrap and Bulma.
              </p>
              <Card.Link>
                <a href="https://movie-app-project4.herokuapp.com/">
                  <Image
                    id="proImage4"
                    src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_791,w_1176/v1631033669/P4-1_zngixv.png"
                    thumbnail
                  />
                  <i className="fa fa-play icon" id="open" />
                </a>
              </Card.Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="interests" className="container-fluid">
        <h1 id="inter">Interests</h1>
        <br />
        <Container className="interests2">
          <Row className="ICONS">
            <div className="char">
              <Button
                id="big-button"
                ref={target}
                onClick={() => setShow(!show)}
              >
                Charities
              </Button>
              <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                  <Tooltip id="overlay-example" {...props}>
                    1. Evelynoldfield: This charity is aimed at helping migrants
                    and disadvantaged people in the UK.
                    <br />
                    2. Haven House Children Hospice: This charity raises funds
                    to help children with terminal illnesses and to give them
                    some hope to life.
                    <br />
                    3. Richard House Children Hospice: Same objectives as Haven
                    House above.
                  </Tooltip>
                )}
              </Overlay>
            </div>
          </Row>

          <Container id="spareTime">
            <p id="description">
              My first work-place experience in the UK was when I volunteered
              for a number of charities. The hospitality and compasssion I found
              here were overwhelming.
            </p>
            <img
              className="image-border animate__animated animate__zoomIn"
              variant="top"
              src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_250,w_330/v1631261773/EOU_pv1mnf.png"
              alt="img"
            />
            <span />
            <img
              className="image-border animate__animated animate__zoomIn"
              variant="top"
              src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_250,w_330/v1632232765/Haven-h_c7fubt.png"
              alt="img"
            />
            <br />
            <p id="description">
              I enjoy painting & designing small objects as well as cycling
              during my spare time.
            </p>
            <img
              src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_250,w_330/v1631098527/paint_zxpgdl.jpg"
              alt="img"
            />
            <span />
            <img
              src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_250,w_330/v1627456360/Project%204/cycle1_clsr8b.jpg"
              alt="img"
            />
          </Container>
        </Container>
      </div>

      <div className="container-fluid">
        <h1 id="contact">Contact</h1>
        <Contact />

        <Row id="ICONS2">
          <Col xs={14} md={10}>
            <div>
              <a
                id="pro"
                i
                className="fa fa-at icon"
                href="mailto:kollewem.35@gmail.com"
              >
                {" "}
              </a>
            </div>
            <div>
              <a
                id="pro"
                i
                className="fa fa-linkedin icon"
                href="https://www.linkedin.com/in/maurice-kollewe/"
              >
                {" "}
              </a>
            </div>
            <div>
              <a
                id="pro"
                i
                className="fa fa-github-square icon"
                href="https://github.com/maurice-35"
              >
                {" "}
              </a>
            </div>
          </Col>
        </Row>
      </div>

      <main className="Footer">
        <div>
          <Container>
            <Row>
              <Col className="image">
                <Image
                  src="https://res.cloudinary.com/doe5zwesw/image/upload/v1631217534/profile_ijyamh.jpg"
                  roundedCircle
                  width="150"
                />
              </Col>
            </Row>
          </Container>
        </div>
        <footer>
          <Container>
            <Row id="foot">
              <Col>
                <h4>
                  Made With Much Hope
                  <span />
                  <span />
                  <img
                    src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,h_25,w_20/v1631216473/think_fzgsji.png"
                    alt="img"
                  />
                  <img
                    src="https://res.cloudinary.com/doe5zwesw/image/upload/c_scale,e_green:0,h_25,w_30/v1631217039/lapton_vk9nqa.png"
                    alt="img"
                  />
                  <span />
                  <span />
                  By MKT
                </h4>
              </Col>
            </Row>
          </Container>
        </footer>
      </main>
    </section>
  );
};

export default Home;
