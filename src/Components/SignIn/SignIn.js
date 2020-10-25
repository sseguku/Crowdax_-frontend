import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

export class SignIn extends Component {
    render() {
        return (
            
            <Row>
                <Col sm={4}>
                    <h3>Welcome back to crowdax</h3>
                    <p>To keep investing with us. Please sign in on the right side or signup down below to commence a good funding with us</p>
                    
                </Col>
                <Col sm={8}>
                    <h3>Sign in to Crowdax</h3>
                </Col>
            </Row>
        )
    }
}

export default SignIn
