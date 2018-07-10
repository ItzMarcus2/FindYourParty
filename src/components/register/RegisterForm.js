import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { newUser } from "../../functions/users/UserFunctions";

class RegisterForm extends Component {
  state = {
    email_field: "",
    password_field: "",
    first_name: "",
    last_name: "",
    age: 0,
    adresse_city: "",
    adresse_vej: "",
    addresse_post: ""
  };

  onInputChange = event => {
    const newState = this.state;
    newState[event.target.name] = event.target.value;
    this.setState({
      newState
    });
  };

  handleOnSubmit = () => {
    if (
      this.state.email_field &&
      this.state.password_field &&
      this.state.first_name &&
      this.state.last_name &&
      this.state.adresse_city &&
      this.state.adresse_vej &&
      this.state.addresse_post !== ""
    ) {
      const user = {
        email: this.state.email_field,
        password: this.state.password_field,
        name: {
          first: this.state.first_name,
          last: this.state.last_name
        },
        age: this.state.age,
        home: {
          city: this.state.adresse_city,
          street: this.state.adresse_vej,
          post_code: this.state.addresse_post
        }
      };
      newUser(user);
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <div className="container">
        <div className="form-group mt-3">
          <label htmlFor="email">Dine detaljer</label>
          <input
            name="first_name"
            type="text"
            className="form-control"
            id="first_name"
            aria-describedby="firstName"
            placeholder="Fornavn"
            onChange={this.onInputChange}
          />
          <input
            name="last_name"
            type="text"
            className="form-control"
            id="last_name"
            aria-describedby="lastName"
            placeholder="Efternavn"
            onChange={this.onInputChange}
          />
          <input
            name="age"
            type="text"
            className="form-control"
            id="age"
            aria-describedby="age"
            placeholder="Alder"
            onChange={this.onInputChange}
          />
          <input
            name="email_field"
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Email addresse"
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Hvor bor du?</label>
          <input
            name="adresse_city"
            type="text"
            className="form-control"
            id="adresse_city"
            aria-describedby="city"
            placeholder="Hvilken by bor du i?"
            onChange={this.onInputChange}
          />
          <input
            name="adresse_vej"
            type="text"
            className="form-control"
            id="adresse_vej"
            aria-describedby="vej"
            placeholder="Hvilken addresse bor du på?"
            onChange={this.onInputChange}
          />
          <input
            name="addresse_post"
            type="text"
            className="form-control"
            id="addresse_post"
            aria-describedby="post"
            placeholder="Post nr."
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Opret en adgangskode</label>
          <input
            name="password_field"
            type="password"
            className="form-control"
            id="password"
            placeholder="Adgangskode, lav en god kode :-)"
            onChange={this.onInputChange}
          />
        </div>
        <button
          onClick={this.handleOnSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Opret bruger
        </button>
        <button
          onClick={() => this.props.history('/')}
          type="submit"
          className="btn btn-danger"
          style={{ marginLeft: "5px"}}
        >
          Annuller
        </button>
      </div>
    );
  }
}

export default withRouter(RegisterForm);
