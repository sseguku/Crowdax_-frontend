import React, { Component } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
  Badge,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Card,
  CardGroup,
  Container
} from "react-bootstrap";
import Footer from "./Footer/Footer";
import MainNavbar from "./Navbar/MainNavbar";
class SignUp extends Component {
  render() {
    return (
      <div>
          <MainNavbar />
          <Container>
          <Row style={{margin : '50px'}}>
            <Col sm={6} style={{boxShadow: '5px #ffffff' }}>
                <Form>
                    <h2>Sign Up to Crowdax</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="re-enter password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I have agreed to Terms & Conditions" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <h4>Or Signup with </h4>
            </Col>
            <Col sm={5}>
                <h2>Hello, Investor</h2>
            </Col>
        </Row>
          </Container>
          
       
        
        <Footer/>
      </div>
    );
  }
}

export default SignUp;
