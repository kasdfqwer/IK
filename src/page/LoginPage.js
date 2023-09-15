import React from 'react'
import { Button, Form } from 'react-bootstrap'

const LoginPage = () => {
  return (
    <div className='form-area'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="이메일 기억하기" />
      </Form.Group>
      <Button variant="primary" type="submit">
        로그인
      </Button>
    </Form>
    </div>
  )
}

export default LoginPage
