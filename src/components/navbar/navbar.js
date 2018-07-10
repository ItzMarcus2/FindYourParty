import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { isLoggedIn, userLogOut } from "../../functions/users/UserFunctions";
import { loggingOutUser } from "../../App/actions/actions";

const mapDispatchToProps = dispatch => {
  return {
    loggingOutUser: () => dispatch(loggingOutUser())
  };
};

const mapStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn, userRef: state.userRef };
};

class navbar extends Component {
  handleLogOut = () => {
    userLogOut();
    this.props.loggingOutUser();
  };

  render() {
    const { isLoggedIn, userRef } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand">Find Your Party</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a
                onClick={() => this.props.history.push("/")}
                className="nav-link pointer"
              >
                Hjem
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => this.props.history.push("/about")}
                className="nav-link pointer"
              >
                Om os
              </a>
            </li>
            {isLoggedIn && (
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={() => this.props.history.push("/ny-fest")}
              >
                Opret fest
              </button>
            )}
          </ul>
          <ul className="navbar-nav navbar-right">
            <li className="nav-item">
              {isLoggedIn === true ? (
                <span>
                  <button
                    className="btn btn-outline-danger my-2 my-sm-0"
                    type="submit"
                    onClick={() => this.handleLogOut()}
                  >
                    Log ud
                  </button>
                </span>
              ) : (
                <span>
                  <button
                    className="btn btn-outline-light my-2 my-sm-0 mr-5"
                    type="submit"
                    onClick={() => this.props.history.push("/login")}
                  >
                    Log ind
                  </button>
                  <button
                    className="btn btn-outline-light my-2 my-sm-0 mr-5"
                    type="submit"
                    onClick={() => this.props.history.push("/register")}
                  >
                    Opret bruger
                  </button>
                </span>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(navbar));
