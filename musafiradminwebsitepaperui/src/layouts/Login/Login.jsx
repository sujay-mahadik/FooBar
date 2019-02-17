import React, { Component } from "react";

import { FormGroup, Label, Input } from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import { auth } from "../../Firebase";
import JWT_SECRET from "../../secrets/jwtSecrets";

//
//import { Route, Switch, Redirect } from "react-router-dom";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
//import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";

import dashboardRoutes from "routes/dashboard.jsx";
//
const jwt = require("jsonwebtoken");

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    backgroundColor: "black",
    activeColor: "info"
  };
  onChange = e => {
    switch (e.target.name) {
      case "email": {
        this.setState({ email: e.target.value });
        break;
      }
      case "password": {
        this.setState({ password: e.target.value });
        break;
      }
      default:
        break;
    }
  };
  onSubmit = e => {
    e.preventDefault();
    auth
      .doSignInWithEmailAndPassword(this.state)
      .then(res => {
        document.cookie = `token=${jwt.sign(res, JWT_SECRET)}`;
        this.props.history.push("/");
      })
      .catch(e => {
        this.setState({ error: e.message });
      });
  };

  //
  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  //
  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={dashboardRoutes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
        <div className="main-panel" ref="main-panel">
          <Header {...this.props} />
          <div className="content">
            <form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Email address</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  id="exampleEmail"
                  placeholder="Enter email"
                  value={this.state.email}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  onChange={this.onChange}
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                  value={this.state.password}
                />
              </FormGroup>
              <Button color="primary">Submit</Button>
              {this.state.error !== "" ? (
                <FormGroup className="has-danger">
                  <Label for="error" className="control-label">
                    Error
                  </Label>
                  <Input
                    type="text"
                    name="error"
                    id="error"
                    defaultValue={this.state.error}
                  />
                </FormGroup>
              ) : null}
            </form>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
