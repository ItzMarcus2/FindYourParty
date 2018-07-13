import React from "react";
import { withRouter } from 'react-router-dom';

const FestCard = ({title, avatar, description, host, type, date, partyID, history}) => {
  return (
    <div className="card" style={{ width: "40rem", margin: "0 20px 20px 20px" }}>
      <img className="card-img-top" src={avatar} alt="card" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><i className="fas fa-users"></i> {host.name.first} {host.name.last} - {host.age}</li>
        <li className="list-group-item"><i className="fas fa-atlas"></i> {type}</li>
        <li className="list-group-item"><i className="fas fa-clock"></i> {date}</li>
      </ul>
      <div className="card-body">
      <button type="button" className="btn btn-success" style={{margin: "3px"}} onClick={() => history.push(`/event/${partyID}`)} >Læs mere</button>
      <button type="button" className="btn btn-primary" style={{margin: "3px"}} >Kontakt host</button>
      </div>
    </div>
  );
};

export default withRouter(FestCard);
