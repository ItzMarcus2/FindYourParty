import React, { Component } from "react";
import "./CreateParty.css";
import { newParty } from "../../functions/database/FestFunctions";

class CreateParty extends Component {
  state = {
    event: {
      title: "",
      description: "",
      location: "",
      fest_type: "",
      price: "",
      date: ""
    }
  };

  onSubmit = () => {
    const party = this.state.event;
    if (party.title || party.description) {
      newParty(party);
      this.props.history.push("/");
    }
  };

  onInputChange = event => {
    const newEvent = this.state.event;
    newEvent[event.target.name] = event.target.value;
    this.setState({
      event: newEvent
    });
  };

  render() {
    return (
      <form className="ny-fest">
        <h1>Opret ny fest</h1>

        <fieldset>
          <legend>
            <span className="number">1</span> Generelt info om din fest
          </legend>
          <label>Titel:</label>
          <input
            onChange={this.onInputChange}
            type="text"
            id="title"
            name="title"
          />

          <label>Beskrivelse:</label>
          <input
            onChange={this.onInputChange}
            type="text"
            id="description"
            name="description"
          />

          <label>Lokation:</label>
          <input
            onChange={this.onInputChange}
            type="text"
            id="location"
            name="location"
          />

          <label>Fest type:</label>
          <input
            onChange={this.onInputChange}
            type="radio"
            id="fest_type"
            name="fest_type"
          />
          <label className="light">Privat Fest (privat person)</label>
          <br />
          <input
            onChange={this.onInputChange}
            type="radio"
            id="fest_type"
            name="fest_type"
          />
          <label className="light">
            Holdes af natklub, arrangør eller lign.
          </label>
        </fieldset>

        <fieldset>
          <legend>
            <span className="number">2</span> Pris og dato
          </legend>
          <label>Pris (DKK):</label>
          <textarea
            onChange={this.onInputChange}
            type="number"
            id="price"
            name="price"
          />
          <label>Dato</label>
          <input onChange={this.onInputChange} type="date" name="date" />
        </fieldset>

        <button onClick={this.onSubmit}>Opret fest</button>
      </form>
    );
  }
}

export default CreateParty;
