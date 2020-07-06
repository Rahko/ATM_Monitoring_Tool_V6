import React, { Component } from "react";
import Footer from "./Footer";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { authUrl } from "../../Constants";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      // username: "",
      // password: "",
      fields: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);

  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submitLoginForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = this.state.fields;

        if (!fields["username"] && !fields["password"]) {
          fields["username"] = "";
          fields["password"] = "";
        }
        
        this.setState({fields:fields});
        //alert("Form submitted");
        this.authenticate();
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //alert("UserName:::"+fields.username);
    //alert("Password:::"+fields.password);


    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    // if (typeof fields["username"] !== "undefined") {
    //   if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
    //     formIsValid = false;
    //     errors["username"] = "*Please enter alphabet characters only.";
    //   }
    // }

   if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }


    this.setState({
      errors: errors
    });
    return formIsValid;


  }

  authenticate = () => {
    const authJson = {
      username: this.state.fields.username,
      password: this.state.fields.password,
    };

    console.log(authJson)
    Axios.request({
      method: "POST",
      data: authJson,
      url: authUrl
    })
    .then((response) => {
        alert("User Authentication Successful.")
        // localStorage.setItem("username",this.state.fields.username)
        // localStorage.setItem("token",response.data.jwttoken);
        // localStorage.setItem("logintime",response.data.loginTime);
        sessionStorage.setItem("username",this.state.fields.username)
        sessionStorage.setItem("token",response.data.jwttoken);
        sessionStorage.setItem("logintime",response.data.loginTime);
        this.setState({ navigate: true });
    })
    .catch((err) =>{
      console.log(err);
      alert("Error Occurred. ",err);
    });

  };

  render() {
    const { navigate } = this.state;

    // here is the important part
    if (navigate) {
      return <Redirect to="/dash" push={true} />;
    }

    return (
      <div className="prelogin-page">
        <div className="full-container">
          <div className="login-container">
            <div className="central-box">
              <div className="loginform-container ">
                <div className="login-form">
                  <div className="brand-logo">
                    <img src="../images/logo/kiya-logo.png" alt="logo" />
                  </div>
                  <div className="login-heading">
                    <h3>ATM Monitoring System</h3>
                  </div>
                  <div className="vspacer30"></div>
                  <div className="row">
                    <div className="col-12">
                      <div className="ux-component">
                        <label htmlFor="UserName">User Name</label>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          onKeyUp={this.handleChange}
                          required
                          maxLength="8"
                        />
                      </div>
                      <div
                      style=
                      {{
                        color: "red", textAlign: "left",
                        display: "block",
                        fontSize: "0.8rem"
                      }}
                      
                      >{this.state.errors.username}</div>
                    </div>
                    <div className="col-12">
                      <div className="ux-component">
                        <label htmlFor="Password">Password</label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          onKeyUp={this.handleChange}
                          required
                          maxLength="10"
                          minLength="5"
                        />
                      </div>
                      <div  style=
                            {{
                              color: "red", textAlign: "left",
                              display: "block",
                              fontSize: "0.8rem"
                            }}
                      >{this.state.errors.password}</div>
                    </div>
                  </div>
                  <div className="vspacer10"></div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-footer">
                        <button
                          role="button"
                          className="button"
                          //onClick={this.authenticate}
                          onClick= {this.submitLoginForm}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                    <div className="vspacer10"></div>
                    <div className="col-12">
                      <div className="fgt-txt">
                        <a href="#">Forgot Password?</a>
                      </div>
                    </div>
                  </div>
                  <div className="vspacer50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
