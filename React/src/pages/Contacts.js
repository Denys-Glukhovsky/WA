import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';

class Contacts extends React.Component {
  render() {
    return(
      <>
      <Container style={{ width: '500px'}}>
        <h1 className='text-center'>Свяжитесь с нами</h1>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text>
              Ваша переписка с нами, строго конфиденциальна.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Введите ваше сообщение</Form.Label>
            <Form.Control as='textarea' rows='3'/>            
          </Form.Group>

          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Согласен с пользовательским соглашением'/>                      
          </Form.Group>
          <Button variant='primary' type='submit'>Отправить</Button>

        </Form>
      </Container>
      </>
    )
  }
}


export default Contacts;