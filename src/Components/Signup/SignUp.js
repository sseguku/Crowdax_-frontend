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
  Container,
  Image,
} from "react-bootstrap";
import googleIcon from "../../assests/google_icon.svg";
import facebookIcon from "../../assests/facebook_icon.svg";
import twitterIcon from "../../assests/twitter_icon.svg";
import linkedinIcon from "../../assests/linkedin_icon.svg";

class SignUp extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* Ema, I have made folders.To achieve readable code. 
             I think each .js file should have a custom css for example
             Signup.js should have Signup.css. 
             Just the way. I have done. 

            
            */}
          <Row style={{ margin: "50px" }}>
            <Col sm={8} style={{ boxShadow: "5px #ffffff" }}>
              <h3 align="center">Sign Up to Crowdax</h3>
              <hr />
              <p className="p-2" />
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="re-enter password"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I have agreed to Terms & Conditions"
                  />
                </Form.Group>

                <Button variant="info" size="lg" type="submit">
                  Register
                </Button>
              </Form>
              <p className="p-2" />
              <h4> Or Signup with </h4>
              <Row>
                <Col md={{ span: 1, offset: 0 }}>
                  <Image
                    src={googleIcon}
                    width="50px"
                    height="50px"
                    roundedCircle
                  />
                </Col>

                <Col md={{ span: 1, offset: 0 }}>
                  <Image
                    src={facebookIcon}
                    width="50px"
                    height="50px"
                    roundedCircle
                  />
                </Col>
                <Col md={{ span: 1, offset: 0 }}>
                  <Image
                    src={twitterIcon}
                    width="50px"
                    height="50px"
                    roundedCircle
                  />
                </Col>

                <Col md={{ span: 1, offset: 0 }}>
                  <Image
                    src={linkedinIcon}
                    width="50px"
                    height="50px"
                    roundedCircle
                  />
                </Col>
              </Row>
            </Col>
            <Col sm={4}>
              <h3 align="center">Hello, Investor</h3>
              <hr />
              <p className="p-2" />
              <p align="justify">
                Join Crowdax and start investing in African startups and
                companies. Or register your company so that our team asseses it
                for a possible chance of being funded.
              </p>
              <p>If you already have an account sign below</p>
              <p className="p-3" />
              <Button variant="info" size="lg" type="submit">
                Sign In{" "}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SignUp;
