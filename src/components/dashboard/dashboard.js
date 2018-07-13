import React, { Component } from 'react'
import Profile from './Profile/Profile';
import FestFeed from './FestFeed/FestFeed';
import SponsoredFest from './SponsoredFest/SponsoredFest';
import './dashboard.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn }
}

class dashboard extends Component {
  render() {
    return (
      <div className="dash-container">
        {this.props.isLoggedIn && <Profile/>}

        <FestFeed/>

        <SponsoredFest/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(dashboard);