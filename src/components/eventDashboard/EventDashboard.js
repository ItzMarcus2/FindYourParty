import React, { Component } from "react";

class EventDashboard extends Component {
  render() {
    return (
      <div className="container">
        <div class="card mt-5 bg-light text-white">
          <img
            class="card-img"
            src="http://www.trendycovers.com/covers/converse_shoes_photography_facebook_cover_1389423906.jpg"
            alt="Card image"
          />
          <div class="card-img-overlay">
            <h3 class="card-title">Fest titel</h3>
            <p class="card-text">Dato her</p>
          </div>
          <div class="card-body text-dark">
            <p class="card-text">
              Beskrivelse lige her
            </p>
          </div>
          <ul class="list-group list-group-flush text-dark">
            <li class="list-group-item"><i class="fas fa-user"></i> Host</li>
            <li class="list-group-item"><i class="fas fa-road"></i> Addresse</li>
            <li class="list-group-item"><i className="fas fa-clock"></i> Dato</li>
          </ul>
          <div class="card-body text-dark">
            <p class="card-text">
              Lyder det som en fest, du bare skal med til? Hvad venter du så på, tryk dog "deltag"!
            </p>
            <button className="btn btn-success pointer">Deltag</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDashboard;
