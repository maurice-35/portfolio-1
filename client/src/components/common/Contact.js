import { useState, React } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
// import { serviceId, template, userId } from '.evn'




const SERVICE_ID = 'serviceId'
const TEMPLATE_ID = 'template'
const USER_ID = 'userId'

const Contact = () => {

  const [toSend, setToSend] = useState({
    user_email: '',
    user_phone_number: '',
    from_name: '',
    message: '',
    // reply_to: '',
  })

  const onSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((response) => {
        console.log(response.status, response.text)
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

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
    console.log(e)
  }

  return (
    <div className="ContactForm">
      <Form id="form" onSubmit={onSubmit}>
        <Form.Field
          id='info-email'
          control={Input}
          type='text'
          label='Email'
          name='user_email'
          placeholder='email'
          required
          value={toSend.user_email}
          icon='mail'
          iconPosition='left'
          onChange={handleChange}
        />
        <Form.Field
          id='info-phone'
          control={Input}
          type='number'
          label='Phone Number'
          name='user_phone_number'
          placeholder='phone number'
          required
          value={toSend.user_phone_number}
          onChange={handleChange}
        />
        <Form.Field
          id='info-company'
          control={Input}
          type='text'
          label='Company'
          name='from_name'
          placeholder='company'
          required
          value={toSend.from_name}
          onChange={handleChange}
        />
        <Form.Field
          id='info-message'
          control={TextArea}
          type='text'
          label='Message'
          name='message'
          placeholder='message'
          required
          value={toSend.message}
          onChange={handleChange}
        />
        <Button id="contactbutt" type='submit' color='blue'>Send</Button>
      </Form>
    </div>
  )
}

export default Contact