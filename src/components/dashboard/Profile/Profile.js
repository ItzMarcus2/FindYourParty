import React from "react";
import "./Profile.css";

const profile = () => {
  return (
    <div className="card" style={{ width: "18rem", height: "400px" }}>
      <div className="card-body">
        <h5 className="card-title">Marcus Klitgaard</h5>
        <p className="card-text">Person beskrivelse lige her...</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{ padding: ".75rem 1.25rem .75rem 0" }}>Addresse</li>
          <li className="list-group-item" style={{ padding: ".75rem 1.25rem .75rem 0" }}>Fester</li>
          <li className="list-group-item" style={{ padding: ".75rem 1.25rem .75rem 0" }}>Kontakt</li>
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
        <button
          type="button"
          className="btn btn-danger"
          style={{ margin: "0px 3px 0 3px" }}
        >
          Log ud
        </button>
      </div>
    </div>
  );
};

export default profile;
