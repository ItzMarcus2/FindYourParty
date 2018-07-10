import React, { Component } from 'react'
import Profile from './Profile/Profile';
import FestFeed from './FestFeed/FestFeed';
import SponsoredFest from './SponsoredFest/SponsoredFest';
import './dashboard.css';

export default class dashboard extends Component {
  render() {
    return (
      <div className="dash-container">
        <Profile/>

        <FestFeed/>

        <SponsoredFest/>
      </div>
    )
  }
}
