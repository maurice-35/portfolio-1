import React from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'




const SERVICE_ID = 'service_c20xitn'
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