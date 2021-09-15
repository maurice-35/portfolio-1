// import React from 'react'
// import { Form, Col, Row, Container, Card } from 'react-bootstrap'


// const ContactForm = () => {
//     const [formdata, setFormdataa] = useState({
//         email
//     })
//   // const history = useHistory()

// //   const ContactForm = ({
// //     formData,
// //     handleChange,
// //     handleSubmit,
// //     // button = 'send message',
// // }) => {


//     //   const handleSubmit = async (event) => {
//     //     event.preventDefault()
//     //     try {
//     //     } catch (err) {
//     //       console.log(err)
//     //     }
//     //   }

//       const handleChange = (event) => {
//         const newForm = { ...formData, [event.target.name]: event.target.value }
//         setFormData()
//         console.log(newForm)
//       }
//     return (
//         <>
//             <div id="contact" className="container-fluid">
//                 <h1>Contact</h1>
//                 <Card className="d-block w-50" id="INFO">
//                     <Container fluid="lg" className="mr-auto my-4 my-md-5">
//                         <Row className="justify-content-md-center">
//                             <Col>
//                                 <Form className="function" onSubmit={handleSubmit}>
//                                     <Form.Group className="info">
//                                         <Form.Label>Name</Form.Label>
//                                         <Form.Control onChange={handleChange} name="email" type="email" placeholder="Enter email" />
//                                     </Form.Group>
//                                     <Form.Group className="info">
//                                         <Form.Label>Phone Number</Form.Label>
//                                         <Form.Control onChange={handleChange} name="phone-number" type="phone-number" placeholder="Phone Number" />
//                                     </Form.Group>
//                                     <Form.Group className="info">
//                                         <Form.Label>Company</Form.Label>
//                                         <Form.Control onChange={handleChange} name="company" type="company" placeholder="company" />
//                                     </Form.Group>
//                                     <Form.Group className="info">
//                                         <Form.Label>Message</Form.Label>
//                                         {/* <label htmlFor="massage">massage</label> */}
//                                         <textarea className="Form.Control" name="message" type="message" placeholder="message" />
//                                     </Form.Group><br />
//                                     <button type="submit" className="btn" id="butt">Send Message</button>
//                                 </Form>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </Card>
//                 <div className="icon">
//                     <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/maurice-kollewe/"></a>
//                 </div>
//             </div>
//         </>
//     )
// }


// export default ContactForm