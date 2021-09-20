// import React from 'react'
// import { Form, Col, Row, Container, Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom'


// const ContactForm = ({ handleChange, handleSubmit, contactForm }) => {
//   const { userEmail, userPhoneNumber, userCompany, userMessage } = contactForm



//   return (
//     <Card className="d-block w-50" id="INFO">
//       <Container fluid="lg" className="mr-auto my-4 my-md-5" id="form">
//         <Row className="justify-content-md-center">
//           <Col>
//             <Form onSubmit={handleSubmit} className="function">
//               <Form.Group className="info">
//                 <Form.Label htmlFor="">Name</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" required name="userEmail" onChange={handleChange} value={userEmail || ''} />
//               </Form.Group>
//               <Form.Group className="info">
//                 <Form.Label>Phone Number</Form.Label>
//                 <Form.Control type="phone-number" placeholder="Phone Number" required name="userPhoneNumber" onChange={handleChange} value={userPhoneNumber || ''} />
//               </Form.Group>
//               <Form.Group className="info">
//                 <Form.Label>Company</Form.Label>
//                 <Form.Control type="company" placeholder="company" required name="userCompany" onChange={handleChange} value={userCompany || ''} />
//               </Form.Group>
//               {/* <Form.Group className="info">
//               </Form.Group><br /> */}
//               <div className="form-field">              
//                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                   <Form.Label>Message</Form.Label>
//                   <Form.Control as ="textArea" name="userMessage" rows={3} required  value={userMessage || ''} onChange={handleChange} />
//                 </Form.Group>
//               </div>
//               <Link to='/#contactForm'><button type="submit" className="btn" id="butt" onClick={(event) => handleSubmit(event)}>Send Message</button></Link>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </Card>
//   )
// }

// export default ContactForm