import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Container>

        <Form>

          <Row>
            <Col md>
              <Form.Group controlId="formEmail">
                <Form.Label>
                  Email Address
                </Form.Label>
                <Form.Control type="email" placeholder="example@domain.com"/>
                <Form.Text>We'll never share your email address with anyone</Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId="formPassword">
                <Form.Label>
                  Password
                </Form.Label>
                <Form.Control type="password" placeholder="Please enter your password"/>
              </Form.Group>
            </Col>
          </Row>

          <Button variant="contained">Login</Button>
        </Form>

        <Card className="mb-3" style={{ color:"#000"}}>
          <Card.Img src="https://upload.wikimedia.org/wikipedia/en/e/e1/Milk_and_Mocha_characters.jpg"
            
          />
          <Card.Body>
            <Card.Title>
            Example card
            </Card.Title>
            <Card.Text>
              This is an example of a card in React-Bootstrap
            </Card.Text>
            <Button variant="text">Read More</Button>
          </Card.Body>
        </Card>

        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item active>Test2</Breadcrumb.Item>
          <Breadcrumb.Item>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <Button variant="contained" href="https://goo.gl/5LlCED" target="_blank">Read More</Button>

        </Container> 
      </header>
    </div>
  );
}

export default App;

//git log --graph --oneline --all