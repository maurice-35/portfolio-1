import React from 'react'
import { Form, Col, Row, Container, Card } from 'react-bootstrap'


// const ContactForm = () => {
//     const [formdata, setFormdataa] = useState({
//         email
//     })
// const history = useHistory()

const ContactForm = ({
    formData,
    handleChange,
    handleSubmit,
    buttonText = 'send message',
}) => {


    //   const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     try {
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   }

    //   const handleChange = (event) => {
    //     const newForm = { ...formData, [event.target.name]: event.target.value }
    //     setFormData()
    //     console.log(newForm)
    //   }
    return (
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
    )
}


export default ContactForm