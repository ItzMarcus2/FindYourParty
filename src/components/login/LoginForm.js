import React, { Component } from "react";
import { logUserIn } from "../../functions/users/UserFunctions";

class LoginForm extends Component {

  constructor() {
    super();

    this.handleSignIn = this.handleSignIn.bind(this);
  }

  state = {
    email_field: "",
    password_field: ""
  };

  onInputChange = event => {
    const newState = this.state;
    newState[event.target.name] = event.target.value;
    this.setState({
      newState
    });
  };

  async handleSignIn() {
    if (this.state.password_field && this.state.email_field !== "") {
      logUserIn(this.state.email_field, this.state.password_field);
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="form-group mt-5">
          <label htmlFor="email">Email address</label>
          <input
            name="email_field"
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            name="password_field"
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={this.onInputChange}
          />
        </div>
        <button
          onClick={this.handleSignIn}
          type="submit"
          className="btn btn-primary"
        >
          Log ind
        </button>
        <button
          onClick={() => this.props.history.push("/")}
          type="submit"
          className="btn btn-danger"
          style={{ marginLeft: "5px" }}
        >
          Annuller
        </button>
      </div>
    );
  }
}

export default LoginForm;
