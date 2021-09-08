import React from 'react'
import { Form, Col, Row, Container, Card } from 'react-bootstrap'
//import axios from 'axios'

const ContactForm = () => {
// const history = useHistory()
// const [petData, setPetData] = useState({
//   name: '',
//   phoneNumber: '',
//   company: '',
//   message: '',
// }) 


  return (
    <>
      <div id="contact" className="container-fluid">
        <h1>Contact</h1>
        <Card className="d-block w-50" id="INFO">
          <Container fluid="lg" className="mr-auto my-4 my-md-5">
            <Row className="justify-content-md-center">
              <Col>
                <Form className='function'>
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
                    <Form.Label>Message</Form.Label>
                    <textarea className="Form.Control" rows="5" name="message" type="message" placeholder="message" />
                  </Form.Group><br />
                  <button type="submit" className="btn" id="butt">Send Message</button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Card>
        <div className="icon">
          <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maurice-kollewe/"></a>
        </div>
      </div>
    </>
  )
}


export default ContactForm