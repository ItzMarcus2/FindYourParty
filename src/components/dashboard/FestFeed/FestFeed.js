import React from "react";
import "./FestFeed.css";
import { parties } from "../../../functions/Functions";
import FestCard from "./festCard/FestCard";

class festFeed extends React.Component {
  state = {
    parties: []
  };

  async updateData() {
    const array = await parties();
    this.setState({ parties: array });
  }

  componentDidMount() {
    this.updateData();
  }

  render() {
    return (
      <div className="fest-container">
        <div className="fest-info-container">
          {this.state.parties.map(party => {
            return (
              <FestCard
                key={party.id}
                avatar="http://www.trendycovers.com/covers/converse_shoes_photography_facebook_cover_1389423906.jpg"
                title={party.title}
                host={party.host}
                type={party.type}
                date={party.date}
                description={party.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default festFeed;
