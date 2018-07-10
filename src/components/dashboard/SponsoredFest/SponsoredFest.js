import React from "react";
import "./SponsoredFest.css";

const SponsoredFest = () => {
  return (
    <div className="card" style={{ width: "18rem", height: "400px" }}>
      <div className="card-body">
        <h5 className="card-title">Fremhævede Fester</h5>
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item"
            style={{ padding: ".75rem 1.25rem .75rem 0" }}
          >
          <a className="pointer">This is a great party | <kbd>49,- DKK</kbd></a>
          </li>
          <li
            className="list-group-item"
            style={{ padding: ".75rem 1.25rem .75rem 0" }}
          >
          <a className="pointer">This is a great party | <kbd>49,- DKK</kbd></a>
          </li>
          <li
            className="list-group-item"
            style={{ padding: ".75rem 1.25rem .75rem 0" }}
          >
          <a className="pointer">This is a great party | <kbd>49,- DKK</kbd></a>
          </li>
          <li
            className="list-group-item"
            style={{ padding: ".75rem 1.25rem .75rem 0" }}
          >
          <a className="pointer">This is a great party | <kbd>49,- DKK</kbd></a>
          </li>
        </ul>
      </div>

      <div className="card-body">
        <p>Vil du have din fest her?</p>
        <button
          type="button"
          className="btn btn-primary"
        >
          Køb plads
        </button>
      </div>
    </div>
  );
};

export default SponsoredFest;
