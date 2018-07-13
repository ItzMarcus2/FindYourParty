import React, { Component } from "react";
import "./Profile.css";
import { connect } from "react-redux";
import { userDB } from "../../../functions/users/UserFunctions";

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    userRef: state.userRef
  };
};

class profile extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        first: undefined,
        last: undefined
      },
      email: undefined,
      age: undefined,
      home: {
        city: undefined,
        street: undefined,
        post_code: undefined
      }
    };

    this.handleData = this.handleData.bind(this);
  }

  async handleData() {
    if (this.props.isLoggedIn) {
      const docRef = userDB.collection("users").doc(this.props.userRef);
      docRef.get().then((doc) => {
        this.setState({
          ...doc.data()
        });
      });
    }
  }

  render() {
    this.handleData();
    return (
      <div className="card" style={{ width: "18rem", height: "400px" }}>
        <div className="card-body">
          <h5 className="card-title">
            {this.state.name.first && this.state.name.first}{" "}
            {this.state.name.last && this.state.name.last}
          </h5>
          <p className="card-text">{this.state.age && this.state.age} år</p>
          <ul className="list-group list-group-flush">
            <li
              className="list-group-item"
              style={{ padding: ".75rem 1.25rem .75rem 0" }}
            >
              {this.state.home && `${this.state.home.street}, ${this.state.home.city}, ${this.state.home.post_code}`}
            </li>
            <li
              className="list-group-item"
              style={{ padding: ".75rem 1.25rem .75rem 0" }}
            >
              Fester
            </li>
            <li
              className="list-group-item"
              style={{ padding: ".75rem 1.25rem .75rem 0" }}
            >
              {this.state.email && this.state.email}
            </li>
          </ul>
        </div>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary"
            style={{ margin: "0px 3px 0 3px" }}
          >
            Opdater profil
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(profile);
