import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "./Components/Footer/Footer";
import HomeHeader from "./Components/Home/HomeHeader";
import MainNavbar from "./Components/Navbar/MainNavbar";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/Signup/SignUp";

export class App extends Component {
  render() {
    return (
      <div>
        <MainNavbar />

        <Container>
          <SignUp />
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
