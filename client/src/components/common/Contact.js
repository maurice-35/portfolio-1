import React, { useState } from 'react'
// import { Col, Row, Container, Card } from 'react-bootstrap'
import EmailJS from 'emailjs-com'

// import Swal from 'sweetalert2'
// import { useState } from 'react'

import ContactForm from './ContactForm'
// import { init } from 'emailjs-com'
// init('user_5IYK8PnAJVLxrn8uCB56n')

// const ContactForm = () => {
//     const [formdata, setFormdataa] = useState({
//         email
//     })
// const history = useHistory()

// const SERVICE_ID = 'service_c20xitn',
// const template_id = 'portfolio_form'
// const USER_ID = 'user_5IYK8PnAJVLxrn8uCB56n'


// const ContactForm = ({
//     formData,
//     handleChange,
//     handleSubmit,
//     buttonText = 'send message',
// }) => {

const Contact = () => {
  const [contactForm, setContactForm] = useState({ user_email: '', user_phone_number: '', user_company: '', user_message: '' })
  const [success, setSuccess] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    const data = { ...contactForm, [name]: value }
    setContactForm(data)
    console.log('change')
  }

  function handleSubmit() {
    console.log('Hello')

    const serviceId = 'service_c20xitn'
    const templateId = 'portfolio_contactForm'


    EmailJS.sendForm(serviceId, templateId, event.target, 'user_5IYK8PnAJVLxrn8uCB56n')
      .then((res) => {
        setSuccess(res.text)
      })
      .catch((err) => {
        alert(err.text)
      })
  }
  // const handleOnSubmit = (event) => {
  //     event.preventDefault()
  //     emailjs.sendForm(SERVICE_ID, e.target, USER_ID)
  //     .then((result) => {
  //         console.log(result.text)
  //         Swal.fire({
  //             icon: 'success',
  //             title: 'Message Sent Successfully'
  //         })
  //     }, (error) => {
  //         console.log(error.text);
  //         Swal.fire({
  //             icon: 'error',
  //             title: 'Ooops, something went wrong',
  //             text: error.text,
  //         })

  //     })
  //     event.target.reset()
  // }
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
    <section>
      <div id="contact" className="container-fluid">
        <h1 id="cont">Contact</h1>
        {/* <Card className="d-block w-100" id="INFO">
          <Container fluid="lg" className="mr-auto my-4 my-md-5">
            <Row className="justify-content-md-center">
              <Col>
                <h1>HELLO world</h1>
              </Col>
            </Row>
          </Container>
        </Card> */}
      </div>
      {success === '' ?
        <ContactForm
          contactForm={contactForm}
          handleChange={(e) => handleChange(e)}
          handleSubmit={() => handleSubmit()}
        />
        : success === 'OK' ?
          <div className="email-sent">
            <h1>Thanks for your message! I will get back to you as soon as possible.</h1>
          </div>
          :
          null}
    </section>
  )
}


export default Contact