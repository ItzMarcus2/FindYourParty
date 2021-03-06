import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";
import Dashboard from "../components/dashboard/dashboard";
import CreateParty from "../components/createParty/CreateParty";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/register/RegisterForm";
import { Switch, Route } from "react-router-dom";
import EventDashboard from '../components/eventDashboard/EventDashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />

          <Route path="/ny-fest" component={CreateParty} exact />
          <Route path="/login" component={LoginForm} exact />
          <Route path="/register" component={RegisterForm} exact />
          <Route path="/event/:id" component={EventDashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
