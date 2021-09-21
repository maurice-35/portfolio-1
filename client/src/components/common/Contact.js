import React from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

// import './App.css'


const SERVICE_ID = 'service_c20xitn'
// const TEMPLATE_ID = 'template_djzskr9'
const TEMPLATE_ID = 'template_djzskr9'
const USER_ID = 'user_5IYK8PnAJVLxrn8uCB56n'

const ContactForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text)
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        })
      }, (error) => {
        console.log(error.text)
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      })
    e.target.reset()
  }

  return (
    <div className="ContactForm" id="contact">
      <Form id="form" onSubmit={handleOnSubmit}>
        <Form.Field
          id='info-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='email'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='info-phone'
          control={Input}
          label='Phone Number'
          name='user_phone_number'
          placeholder='phone number'
          required
          icon='user'
          iconPosition='left'
        />
        <Form.Field
          id='info-company'
          control={Input}
          label='Company'
          name='user_company'
          placeholder='company'
          required
          icon='user'
          iconPosition='left'
        />
        <Form.Field
          id='info-message'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='message'
          required
        />
        <Button id="contactbutt" type='submit' color='blue'>Send</Button>
      </Form>
    </div>
  )
}

export default ContactForm

//   try {
//   } catch (err) {
//     console.log(err)
//   }
// }

// import React, { useState } from 'react'
// // import { Col, Row, Container, Card } from 'react-bootstrap'
// import EmailJS from 'emailjs-com'

// // import Swal from 'sweetalert2'
// // import { useState } from 'react'

// import ContactForm from './ContactForm'
// // import { init } from 'emailjs-com'
// // init('user_5IYK8PnAJVLxrn8uCB56n')

// // const ContactForm = () => {
// //     const [formdata, setFormdataa] = useState({
// //         email
// //     })
// // const history = useHistory()

// const SERVICE_ID = 'service_c20xitn',
// const TEMPLATE_ID = 'portfolio_form'
// const USER_ID = 'user_5IYK8PnAJVLxrn8uCB56n'


// // const ContactForm = ({
// //     formData,
// //     handleChange,
// //     handleSubmit,
// //     buttonText = 'send message',
// // }) => {

// const Contact = () => {
//   const [contactForm, setContactForm] = useState({ user_email: '', user_phone_number: '', user_company: '', user_message: '' })
//   const [success, setSuccess] = useState('')

//   const handleChange = (event) => {
//     // const { name, value } = event.target
//     const newContactForm = { ...ContactForm, [event.target.name]: event.target.value }
//     // const newContactForm = { ...contactForm }
//     setContactForm(newContactForm)
//     console.log('change')
//   }

//   const setTokenToLocalStorage = (token) => {
//     window.localStorage.setItem('token', token)
//   }

//   const handleSubmit = () => {
//     const  data  = { ...contactForm }
//     event.preventDefault()
//     try {
//       setTokenToLocalStorage(data.token)
//     } catch (err) {
//       console.log(err)
//     }
//     console.log('Hello')

//     const serviceID = 'service_c20xitn'
//     const templateID = 'portfolio_contactForm'
//     const userID = 'user_5IYK8PnAJVLxrn8uCB56n'


//     EmailJS.sendForm(serviceID, templateID,  event.target.value, userID)
//       .then((res) => {
//         setSuccess(res.text)
//       })
//       .catch((err) => {
//         alert(err.text)
//       })
//   }
//   console.log('Event =>', event)
//   // const handleOnSubmit = (event) => {
//   //   event.preventDefault()
//   //   emailjs.sendForm(SERVICE_ID, e.target, USER_ID)
//   //     .then((result) => {
//   //         console.log(result.text)
//   //         Swal.fire({
//   //             icon: 'success',
//   //             title: 'Message Sent Successfully'
//   //         })
//   //     }, (error) => {
//   //         console.log(error.text);
//   //         Swal.fire({
//   //             icon: 'error',
//   //             title: 'Ooops, something went wrong',
//   //             text: error.text,
//   //         })

//   //     })
//   //     event.target.reset()
//   // }
//   //     try {
//   //     } catch (err) {
//   //       console.log(err)
//   //     }
//   //   }

//   //   const handleChange = (event) => {
//   //     const newForm = { ...formData, [event.target.name]: event.target.value }
//   //     setFormData()
//   //     console.log(newForm)
//   // }
//   return (
//     <section className="contact">
//       <div id="contact" className="container-fluid">
//         <h1 id="cont">Contact</h1>
//         {/* <Card className="d-block w-100" id="INFO">
//           <Container fluid="lg" className="mr-auto my-4 my-md-5">
//             <Row className="justify-content-md-center">
//               <Col>
//                 <h1>HELLO world</h1>
//               </Col>
//             </Row>
//           </Container>
//         </Card> */}
//       </div>
//       {success === '' ?
//         <ContactForm
//           contactForm={contactForm}
//           handleChange={(e) => handleChange(e)}
//           handleSubmit={() => handleSubmit()}
//         />
//         : success === 'OK' ?
//           <div className="email-sent">
//             <h1>Thanks for your message! I will get back to you as soon as possible.</h1>
//           </div>
//           :
//           null}
//     </section>
//   )
// }


// export default Contact